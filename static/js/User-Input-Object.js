export const
    table_structure = {
        "Influent":
            {
                "Time": "time",
                "Temp": "number",
                "PH": "number",
                "D.O.": "number",
                "Comp P.H.": "number",
                "ALK": "number",
                "S.S. (mL/L)": "number"
            },
        "Final Effluent":
            {
                "Time": "time",
                "Temp": "number",
                "PH": "number",
                "D.O.": "number",
                "Comp P.H.": "number",
                "ALK": "number",
                "S.S. (mL/L)": "number"
            },

        "Comp. pH/ALK": {
            "Primary p.H.": "number",
            "Primary Alk": "number",
            "Sec p.H.": "number",
            "Sec Alk": "number",
        },

        "Baker": {
            "Composite pH": "number",
            "Grab pH": "number",
        },

        "#2 D Box": {
            "Time": "number",
            "Temp": "number",
            "p.H.": "number",
            "D.O.": "number",
            "5 Min": "number",
            "10 Min": "number",
            "15 Min": "number",
            "20 Min": "number",
            "25 Min": "number",
            "30 Min": "number",
            "60 Min": "number"

        },
        "TSS": {

            "Influent": "number",
            "Primary": "number",
            "Secondary": "number",
            "Effluent": "number",
            "Baker": "number",
            "% Removal": "number",
            "MLSS": "number",
            "MLVSS": "number",
            "RASS": "number",
            "RASVSS": "number",
            "SVI": "number"

        },

        "RAS Pumps": {
            "RAS 1": "number",
            "RAS 2": "number",
            "RAS 3": "number",
            "RAS 4": "number",
            "RAS 5": "number",
            "Flow": "number"

        },

        "Aluminum": {
            "Comag Influent Q": "number",
            "Comag WAS Q": "number"
        },

        "Chlorine Residual": {

            "Q Effluent Chemical Control": "number",
            "Hydro Pump Online A or H": "number",
            "Hypo Tank Level": "number",
            "Residual Shed 1": "number",
            "Residual Shed 2": "number",
            "Residual Shed 3": "number",
            "Bisulfite Pump Online A or H": "number",
            "Bisulfite Tank Level": "number",
            "P.H.": "number",
            "High Chlorine Residual mg/L": "number",
            "Final Eff. Chlorine ug/L": "number"
        },

        "Total Q": {
            "WAS Q": "number",
            "Primary Sludge Q": "number",
            "RAS Q": "number",
            "Comag Was Q": "number",
            "Comag Influent Q": "number",

        },
        "Total-P": {

            "Secondary": "number",
            "Final Effluent": "number",

        },
        "Ammonia": {

            "Final Effluent": "number",
            "Nitrite": "number",
            "Nitrate": "number",

        },
        "BOD": {

            "Influent": "number",
            "Primary": "number",
            "Secondary": "number",
            "Effluent": "number",
            "Baker": "number",
            "% Removal": "number",

        },
        "COD": {

            "Influent": "number",
            "Baker": "number",

        },
        "Ecoli": {
            "Value": "number"
        },

        "Plant Chemicals": {
            "Today":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Yesterday":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Total":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
        },

        "Comag Chemicals": {
            "Today":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Yesterday":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
            "Total":
                {
                    "7,500 Caustic": "number",
                    "6,000 Hypo": "number",
                    "5,000 Bisulfite": "number",
                    "5,000 Sodium Alum": "number",
                    "Press Polymer": "number",
                },
        },

        "Influent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },


        "Primary Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "D Box TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "RAS TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Secondary Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Final Effluent TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Baker TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Water Dept TSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Influent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },


        "Primary Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "D Box TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "RAS TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Secondary Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Final Effluent TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Baker TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Water Dept TVSS": {
            "ML Sample": "number",
            "Dry Weight": "number",
            "Start Weight": "number",
            "Weight Difference": "number",
            "Results": "number",
        },

        "Primary DOB's": {

            "PST1": "number",
            "PST2": "number",
            "PST3": "number",
        },

        "Secondary DOB's": {

            "SST1": "number",
            "SST2": "number",
            "SST3": "number",
            "SST4": "number",
        },

        "Tertiary DOB's": {

            "TST1": "number",
            "TST2": "number",
            "TST3": "number",
        },

        "Reaction Tanks": {
            "Sec p.H. Grab?": "number",
            "Sec. Meter?": "number",
            "RT #1 p.H?": "number",
            "Tuba (Meter)": "number",
            "RT #4 p.H.:": "number",
        },

        "Turbidity": {
            "Meter": "number",
            "SEC": "number",
            "F.E.": "number",
            "Comag": "number",
            "Baker C": "number",
            "Baker (G)": "number",
        },

        "Press 1 Feed": {

            "Sample Wet": "number",
            "Tare": "number",
            "Difference Wet": "label",
            "Sample Dry": "number",
            "Difference Dry": "label",
            "Percent Solids": "label"
        },

        "Press 1 Cake": {
            "Sample Wet": "number",
            "Tare": "number",
            "Difference Wet": "label",
            "Sample Dry": "number",
            "Difference Dry": "label",
            "Percent Solids": "label"
        },

        "Press 2 Feed": {
            "Sample Wet": "number",
            "Tare": "number",
            "Difference Wet": "label",
            "Sample Dry": "number",
            "Difference Dry": "label",
            "Percent Solids": "label"
        },

        "Press 2 Cake": {
            "Sample Wet": "number",
            "Tare": "number",
            "Difference Wet": "label",
            "Sample Dry": "number",
            "Difference Dry": "label",
            "Percent Solids": "label"
        },

        "Filtrate": {

            "mL": "number",
            "Dry Weight": "number",
            "Tare": "number",
            "Difference": "label",
            "mg/L": "label",
            "Operator": "text",
            "GT Used": "number",
        },

        "Gravity Thickener Depth of Blankets": {

            "GT-1": "number",
            "GT-2": "number",
        },

    };
