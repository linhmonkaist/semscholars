import pandas as pd
import json

# Load the CSV file
csv_file = "./mentees.csv"  # Update with your file name

# Read CSV into a DataFrame
df = pd.read_csv(csv_file, encoding="utf-8")

# Define function to group mentee data
def process_mentees(df):
    mentees = {}
    for _, row in df.iterrows():
        email = row["Email"].strip()
        if email not in mentees:
            mentees[email] = {
                "id": email,
                "name": row["Name"].strip(),
                "image": "",  # Placeholder
                "scholarships": set(),
                "universities": set(),
                "countries": set(),
                "majors": set(),
                "mentors": set(),
                "degree": row["Program"].strip() if pd.notna(row["Program"]) else "",
            }
        
        # Add unique values
        if pd.notna(row["Scholarship"]):
            mentees[email]["scholarships"].add(row["Scholarship"].strip())
        if pd.notna(row["University"]):
            mentees[email]["universities"].add(row["University"].strip())
        if pd.notna(row["Country"]):
            mentees[email]["countries"].add(row["Country"].strip())
        if pd.notna(row["Major"]):
            mentees[email]["majors"].add(row["Major"].strip())
        if pd.notna(row["Mentor"]):
            mentees[email]["mentors"].add(row["Mentor"].strip())
    
    # Convert sets to lists
    for mentee in mentees.values():
        mentee["scholarships"] = list(mentee["scholarships"])
        mentee["universities"] = list(mentee["universities"])
        mentee["countries"] = list(mentee["countries"])
        mentee["majors"] = list(mentee["majors"])
        mentee["mentors"] = list(mentee["mentors"])
    
    return list(mentees.values())

# Process the data
mentees_data = process_mentees(df)

# Convert to TypeScript const
tsx_output = f"export const mentees: Mentee[] = {json.dumps(mentees_data, ensure_ascii=False, indent=2)};"

# Save to a file
with open("mentees.tsx", "w", encoding="utf-8") as f:
    f.write(tsx_output)

print("TypeScript const file generated: mentees.tsx")
