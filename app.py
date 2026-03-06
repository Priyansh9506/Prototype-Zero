import os
import subprocess
import pandas as pd
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
REALTIME_PATH = os.path.join(BASE_DIR, 'Real-Time Data.csv')
OUTPUT_DIR = os.path.join(BASE_DIR, 'output')
PREDICTIONS_PATH = os.path.join(OUTPUT_DIR, 'Risk_Predictions.csv')

@app.route('/api/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
        
    try:
        # Save the uploaded file as Real-Time Data.csv
        file.save(REALTIME_PATH)
        
        # Run the model script
        import os as _os
        env = _os.environ.copy()
        env['PYTHONIOENCODING'] = 'utf-8'
        result = subprocess.run(['python', 'smart_container_risk_engine.py'], 
                              cwd=BASE_DIR, 
                              capture_output=True, 
                              text=True,
                              encoding='utf-8',
                              env=env)
                              
        if result.returncode != 0:
            print(f"Error executing model: {result.stderr}")
            return jsonify({'error': 'Model execution failed', 'details': result.stderr}), 500
            
        # Read the predictions
        if not os.path.exists(PREDICTIONS_PATH):
            return jsonify({'error': 'Predictions file not found'}), 500
            
        predictions_df = pd.read_csv(PREDICTIONS_PATH)
        # Convert NaN to None for JSON serialization
        predictions_df = predictions_df.where(pd.notnull(predictions_df), None)
        
        return jsonify(predictions_df.to_dict(orient='records'))
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
