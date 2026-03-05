"""
Rule-Based Explainability Module
Converts SHAP features + anomaly flags into human-readable explanations.
"""

import pandas as pd
import numpy as np


# Feature to human-readable mapping
FEATURE_DESCRIPTIONS = {
    "weight_diff_pct": "weight discrepancy of {value:.1f}%",
    "weight_diff_abs": "weight difference of {value:.1f} kg",
    "is_overweight": "container is overweight vs declaration",
    "is_underweight": "container is underweight vs declaration",
    "weight_diff_gt10": "weight differs >10% from declared",
    "weight_diff_gt20": "weight differs >20% from declared",
    "value_per_kg": "unusual value-to-weight ratio ({value:.2f} per kg)",
    "value_per_kg_zscore": "value-to-weight ratio is {value:.1f} std devs from average",
    "is_zero_value": "zero declared value despite having cargo",
    "is_extreme_value": "extremely high declared value",
    "value_zscore": "declared value is {value:.1f} std devs from average",
    "log_declared_value": "unusual declared value pattern",
    "importer_risk_rate": "importer has {value:.1%} historical risk rate",
    "exporter_risk_rate": "exporter has {value:.1%} historical risk rate",
    "origin_country_risk_rate": "origin country has elevated risk profile ({value:.1%})",
    "hs_chapter_risk_rate": "product category (HS) has {value:.1%} historical risk rate",
    "port_risk_rate": "destination port has {value:.1%} risk rate",
    "Dwell_Time_Hours": "dwell time of {value:.1f} hours",
    "dwell_zscore": "dwell time is {value:.1f} std devs from average",
    "is_long_dwell": "unusually long dwell time at port",
    "is_short_dwell": "unusually short dwell time at port",
    "is_night_declaration": "declared during night hours (22:00-06:00)",
    "importer_frequency": "importer has {value:.0f} total shipments",
    "exporter_frequency": "exporter has {value:.0f} total shipments",
    "composite_anomaly_signal": "multiple anomaly indicators detected ({value:.0f} flags)",
    "weight_ratio": "measured-to-declared weight ratio of {value:.2f}",
    "zero_value_high_weight": "zero declared value with significant cargo weight",
    "night_high_value": "high-value shipment declared at night",
    "is_zero_declared_weight": "zero declared weight",
    "is_zero_measured_weight": "near-zero measured weight (possibly evaded weighing)",
    "dwell_x_weight_diff": "combined dwell time and weight discrepancy anomaly",
    "weight_diff_x_value_zscore": "combined weight and value anomaly",
    "origin_country_frequency": "origin country trade volume pattern",
    "route_pair_frequency": "unusual trade route frequency",
    "hs_chapter": "HS product chapter {value:.0f}",
    "hs_heading": "HS product heading {value:.0f}",
    "hs_chapter_frequency": "product category trade volume",
    "importer_avg_value": "importer average shipment value: {value:.0f}",
}


def generate_explanations(
    df: pd.DataFrame,
    risk_scores: pd.Series,
    risk_levels: pd.Series,
    shap_top_features: list = None,
    anomaly_flags: pd.DataFrame = None,
) -> list:
    """
    Generate human-readable explanations for each container prediction.
    
    Combines SHAP feature attributions with rule-based anomaly flags
    to create clear, concise 1-2 line explanations.
    """
    explanations = []
    
    for i in range(len(df)):
        parts = []
        risk_level = risk_levels.iloc[i]
        risk_score = risk_scores.iloc[i]
        
        # Start with SHAP-based reasons
        if shap_top_features and i < len(shap_top_features):
            top_feats = shap_top_features[i]
            for feat_info in top_feats[:3]:
                feat_name = feat_info["feature"]
                feat_value = feat_info["feature_value"]
                direction = feat_info["direction"]
                
                if feat_name in FEATURE_DESCRIPTIONS and direction == "increases risk":
                    try:
                        desc = FEATURE_DESCRIPTIONS[feat_name].format(value=feat_value)
                    except (KeyError, ValueError):
                        desc = FEATURE_DESCRIPTIONS[feat_name].split("{")[0].strip()
                    parts.append(desc)
        
        # Add anomaly-specific reasons
        if anomaly_flags is not None and i < len(anomaly_flags):
            row = anomaly_flags.iloc[i]
            if row.get("weight_anomaly", False) and "weight discrepancy" not in " ".join(parts):
                wdiff = df.iloc[i].get("weight_diff_pct", 0)
                parts.append(f"weight discrepancy of {wdiff:.1f}%")
            if row.get("value_anomaly", False) and "zero declared" not in " ".join(parts):
                parts.append("zero declared value despite having cargo")
            if row.get("dwell_anomaly", False) and "dwell" not in " ".join(parts):
                dwell = df.iloc[i].get("Dwell_Time_Hours", 0)
                parts.append(f"unusually long dwell time ({dwell:.1f} hrs)")
        
        # Deduplicate and limit to 3 reasons
        seen = set()
        unique_parts = []
        for p in parts:
            key = p[:20]
            if key not in seen:
                seen.add(key)
                unique_parts.append(p)
        parts = unique_parts[:3]
        
        # Compose final explanation
        if risk_level == "Critical":
            prefix = "High risk"
        else:
            prefix = "Low risk"
        
        if parts:
            explanation = f"{prefix}: {'; '.join(parts)}."
        else:
            if risk_level == "Critical":
                explanation = "High risk: Multiple subtle anomaly indicators detected across shipment features."
            else:
                explanation = "Low risk: Shipment parameters are within normal operational ranges."
        
        # Cap at ~200 characters for readability
        if len(explanation) > 200:
            explanation = explanation[:197] + "..."
        
        explanations.append(explanation)
    
    print(f"[Explainer] Generated {len(explanations)} explanations")
    return explanations
