from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from src.config import settings

DATABASE_URL = settings.DATABASE_URL

# Fix: Railway/Supabase URLs may use "postgres://" instead of "postgresql://"
if DATABASE_URL.startswith("postgres://"):
    DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)

# Strip any SQLite-specific query params and handle Supabase/PostgreSQL
if "check_same_thread" in DATABASE_URL:
    from urllib.parse import urlparse, urlencode, parse_qs, urlunparse
    parsed = urlparse(DATABASE_URL)
    params = parse_qs(parsed.query)
    params.pop("check_same_thread", None)
    new_query = urlencode({k: v[0] for k, v in params.items()})
    DATABASE_URL = urlunparse(parsed._replace(query=new_query))

# Connection arguments based on database type
connect_args = {}

if DATABASE_URL.startswith("sqlite"):
    # SQLite requires check_same_thread=False for multithreading
    connect_args = {"check_same_thread": False}
elif DATABASE_URL.startswith("postgresql"):
    # PostgreSQL/Supabase SSL configuration
    # Supabase requires SSL - pool_pre_ping helps with connection pooling
    connect_args = {
        "sslmode": "require",  # Required for Supabase
        "connect_timeout": 10,
    }
    # Add SSL cert for Supabase if needed (usually auto-managed)
    if "supabase" in DATABASE_URL:
        connect_args["sslmode"] = "require"

# Create database engine with appropriate settings
engine = create_engine(
    DATABASE_URL,
    connect_args=connect_args,
    echo=False,  # Set to True for SQL debugging
    pool_pre_ping=True,  # Verifies connections before using them
    pool_recycle=3600  # Recycle connections after 1 hour (important for cloud databases)
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
