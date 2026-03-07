"""
Database User Seeding Script
Creates or verifies the test admin user in the database.

PRODUCTION NOTE:
- This script runs automatically when the API starts (see api/main.py)
- Use this script manually only for initial setup or troubleshooting
- For production, create proper users via the /register endpoint or admin UI

Usage:
    python verify_user.py
"""

import sys
import os

# Add project root to path
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from api.database import SessionLocal
from api.models_db import User
from api.auth import get_password_hash

def seed_admin_user():
    """Create test admin user if it doesn't exist."""
    db = SessionLocal()
    try:
        user = db.query(User).filter_by(username='testadmin').first()
        if user:
            print("✓ Admin user 'testadmin' already exists")
            return
        
        user = User(
            username='testadmin',
            email='admin@smartcontainer.com',
            hashed_password=get_password_hash('password123'),
            role='admin',
            is_active=True
        )
        db.add(user)
        db.commit()
        print("✓ Test admin user 'testadmin' created successfully")
        print("  Login credentials:")
        print("    Username: testadmin")
        print("    Password: password123")
        print("\n⚠️  IMPORTANT: Change password and create proper users before production!")
        
    except Exception as e:
        db.rollback()
        print(f"✗ Error creating admin user: {e}", file=sys.stderr)
        sys.exit(1)
    finally:
        db.close()

if __name__ == "__main__":
    seed_admin_user()
