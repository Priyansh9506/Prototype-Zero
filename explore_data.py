import pandas as pd

hist = pd.read_csv(r'Problem/Historical Data.csv')
real = pd.read_csv(r'Problem/Real-Time Data.csv')

print("=== HISTORICAL DATA ===")
print(f"Shape: {hist.shape}")
print(f"\nTrade Regime: {hist['Trade_Regime (Import / Export / Transit)'].value_counts().to_dict()}")
print(f"\nOrigin Countries ({hist['Origin_Country'].nunique()}): {hist['Origin_Country'].value_counts().head(15).to_dict()}")
print(f"\nDestination Port ({hist['Destination_Port'].nunique()}): {hist['Destination_Port'].value_counts().head(10).to_dict()}")
print(f"\nDestination Country ({hist['Destination_Country'].nunique()}): {hist['Destination_Country'].value_counts().head(10).to_dict()}")
print(f"\nClearance Status: {hist['Clearance_Status'].value_counts().to_dict()}")
print(f"\nShipping Line ({hist['Shipping_Line'].nunique()}): {hist['Shipping_Line'].value_counts().head(10).to_dict()}")
print(f"\nDate range: {hist['Declaration_Date (YYYY-MM-DD)'].min()} to {hist['Declaration_Date (YYYY-MM-DD)'].max()}")
print(f"\nHS_Code sample: {hist['HS_Code'].head(20).tolist()}")

# Weight discrepancy analysis
hist['weight_diff_pct'] = abs(hist['Declared_Weight'] - hist['Measured_Weight']) / (hist['Declared_Weight'] + 1e-6) * 100
print(f"\nWeight discrepancy stats:")
print(hist['weight_diff_pct'].describe())
print(f"\n>10% diff: {(hist['weight_diff_pct'] > 10).sum()}")
print(f"\n>20% diff: {(hist['weight_diff_pct'] > 20).sum()}")

# Value analysis
print(f"\nDeclared_Value=0 count: {(hist['Declared_Value'] == 0).sum()}")
print(f"\nValue per kg stats:")
hist['value_per_kg'] = hist['Declared_Value'] / (hist['Declared_Weight'] + 1e-6)
print(hist['value_per_kg'].describe())

print(f"\nDwell time stats:")
print(hist['Dwell_Time_Hours'].describe())

print("\n\n=== REAL-TIME DATA ===")
print(f"Shape: {real.shape}")
print(f"\nClearance Status: {real['Clearance_Status'].value_counts().to_dict()}")
print(f"\nDate range: {real['Declaration_Date (YYYY-MM-DD)'].min()} to {real['Declaration_Date (YYYY-MM-DD)'].max()}")

# Check for clearance status patterns
print(f"\n=== Clearance Status by Trade Regime ===")
print(pd.crosstab(hist['Trade_Regime (Import / Export / Transit)'], hist['Clearance_Status']))

print(f"\n=== First 3 rows of each ===")
print(hist.head(3).to_string())
print("\n---")
print(real.head(3).to_string())
