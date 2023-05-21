const [a,b]=[3,4];
console.log(a);
console.log(b);

function stringg(x){
    return [x,x.length];
}

console.log(`length of hello is ${stringg("hello")[1]}`);
import streamlit as st
import pandas as pd
import numpy as np
from datetime import datetime
import sqlite3

# Initialize an in-memory SQLite database
conn = sqlite3.connect(':memory:')
c = conn.cursor()

# Create a table to store the data
c.execute('''CREATE TABLE IF NOT EXISTS data 
             (datetime TEXT, field1 INTEGER, field2 TEXT, field3 REAL)''')

# Function to insert random data into the table
def insert_data():
    now = datetime.now()
    for _ in range(10):
        dt = now - pd.DateOffset(days=np.random.randint(1, 30))
        field1 = np.random.randint(1, 100)
        field2 = 'Category ' + str(np.random.randint(1, 4))
        field3 = np.random.uniform(0, 1)
        c.execute("INSERT INTO data VALUES (?, ?, ?, ?)",
                  (dt.strftime('%Y-%m-%d %H:%M:%S'), field1, field2, field3))
    conn.commit()

# Function to execute the SQL query and return the result as a Pandas DataFrame
def run_query(query):
    result = pd.read_sql_query(query, conn)
    return result

# Streamlit app
def main():
    st.title('Data Exploration App')

    # Insert initial data
    insert_data()

    # Display the stored data
    st.subheader('Stored Data')
    data = pd.read_sql_query("SELECT * FROM data", conn)
    st.dataframe(data)

    # Add query box
    st.subheader('Run SQL Query')
    query = st.text_area('Enter your SQL query')

    # Run query button
    if st.button('Run Query'):
        if query.strip() != '':
            result = run_query(query)
            st.subheader('Query Result')
            st.dataframe(result)

            # Visualization option
            st.subheader('Visualization')
            x_axis = 'datetime'
            y_axis = st.selectbox('Select field for y-axis', result.columns[1:])
            st.line_chart(result[[x_axis, y_axis]])

# Run the app
if __name__ == '__main__':
    main()
