//function definition
const phone = {
    ring: function(i){
        console.log("tring ".repeat(i));
    }
}
phone.ring(3);

//computed property keys
const x='make';
function g(){
    return "ring";
}
const phone2={
    [x]: "Samsung",
    [g()](i){
        console.log("tring ".repeat(i));
    }
}
console.log(phone2);
phone2.ring(5);

import streamlit as st
import pandas as pd
import numpy as np
from datetime import datetime
import sqlite3
import matplotlib.pyplot as plt

# Initialize an in-memory SQLite database
conn = sqlite3.connect(':memory:')
c = conn.cursor()

# Create a table to store the data
c.execute('''CREATE TABLE IF NOT EXISTS data 
             (datetime1 TEXT, datetime2 TEXT, field1 INTEGER, field2 TEXT, field3 REAL,
             field4 INTEGER, field5 TEXT, field6 REAL, field7 INTEGER, field8 TEXT)''')

# Function to insert random data into the table
def insert_data():
    now = datetime.now()
    for _ in range(300):
        dt1 = now - pd.DateOffset(days=np.random.randint(1, 30))
        dt2 = now - pd.DateOffset(days=np.random.randint(1, 30))
        field1 = np.random.randint(1, 100)
        field2 = 'Category ' + str(np.random.randint(1, 4))
        field3 = np.random.uniform(0, 1)
        field4 = np.random.randint(1, 100)
        field5 = 'Type ' + str(np.random.randint(1, 4))
        field6 = np.random.uniform(0, 1)
        field7 = np.random.randint(1, 100)
        field8 = 'Group ' + str(np.random.randint(1, 4))
        c.execute("INSERT INTO data VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                  (dt1.strftime('%Y-%m-%d %H:%M:%S'), dt2.strftime('%Y-%m-%d %H:%M:%S'),
                   field1, field2, field3, field4, field5, field6, field7, field8))
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
            if len(result) > 0:
                x_axis = st.selectbox('Select field for x-axis', result.columns[0:2])
                y_axis = st.multiselect('Select fields for y-axis', result.columns[2:])
                if x_axis and y_axis:
                    fig, ax = plt.subplots()
                    for column in y_axis:
                        ax.plot(result[x_axis], result[column], label=column)
                    ax.legend()
                    ax.set_xlabel(x_axis)
                    ax.set_ylabel('Values')
                    ax.set_title('Plot')
                    st.pyplot(fig)

# Run the app
if __name__ == '__main__':
    main()
