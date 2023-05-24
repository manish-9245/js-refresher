var text1='Manish';
var text2='Tiwari';
var text3='Software Engineer';
console.log(`${text1} ${text2} is a ${text3}`);

import streamlit as st
import pandas as pd
import numpy as np
from datetime import datetime

# Generate random data
np.random.seed(0)
dates = pd.date_range(datetime(2023, 1, 1), periods=100)
data = pd.DataFrame(np.random.randn(100, 10), index=dates, columns=["CPU Usage (%)", "Memory Usage (%)",
                                                                    "Network Throughput (Mbps)",
                                                                    "Disk Latency (ms)", "Request Latency (ms)",
                                                                    "Error Rate (%)", "Server Load (%)",
                                                                    "Response Time (ms)", "Availability (%)",
                                                                    "CPU Temperature (°C)"])
data.index.name = "Timestamp"  # Labeling the date time column as "Timestamp"

# Display initial DataFrame
st.write("Initial Data")
st.dataframe(data)

# Query execution and visualization
query_list = []
query_results = []

# Query input box
query = st.text_area("Enter SQL query:")
if st.button("Run Query"):
    try:
        query_result = data.query(query)
        query_results.append(query_result)
        query_list.append(query)
        st.success("Query executed successfully!")
    except Exception as e:
        st.error(f"Error: {str(e)}")

# Display query results
if len(query_results) > 0:
    st.write("Query Results")
    for i, result in enumerate(query_results):
        st.write(f"**Query {i+1}:** `{query_list[i]}`")
        st.dataframe(result)

# Visualization
if len(query_results) > 0:
    st.write("Visualizations")
    selected_query = st.selectbox("Select query:", query_list)
    selected_result = query_results[query_list.index(selected_query)]
    x_axis_field = st.selectbox("Select x-axis field:", ["Timestamp"] + selected_result.columns.tolist())
    y_axis_field = st.selectbox("Select y-axis field:", selected_result.columns.tolist())

    if x_axis_field == "Timestamp":
        x = selected_result.index
    else:
        x = selected_result[x_axis_field]

    y = selected_result[y_axis_field]

    st.line_chart(data=pd.DataFrame({x_axis_field: x, y_axis_field: y}))


import streamlit as st
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
from pandasql import sqldf

# Generate random data
np.random.seed(0)
dates = pd.date_range(datetime(2023, 1, 1), periods=100)
data = pd.DataFrame(np.random.randn(100, 10), index=dates, columns=["CPU Usage", "Memory Usage", "Network Throughput",
                                                                    "Disk Latency", "Request Latency",
                                                                    "Error Rate", "Server Load", "Response Time",
                                                                    "Availability", "CPU Temperature"])

# Display initial DataFrame
st.write("Initial Data")
st.dataframe(data)

# Query execution and visualization
query_list = []
query_results = []

# Query input box
query = st.text_area("Enter SQL query:")
if st.button("Run Query"):
    try:
        query_result = sqldf(query, locals())
        query_results.append(query_result)
        query_list.append(query)
        st.success("Query executed successfully!")
    except Exception as e:
        st.error(f"Error: {str(e)}")

# Display query results
if len(query_results) > 0:
    st.write("Query Results")
    for i, result in enumerate(query_results):
        st.write(f"**Query {i+1}:** `{query_list[i]}`")
        st.dataframe(result)

# Visualization
if len(query_results) > 0:
    st.write("Visualizations")
    selected_query = st.selectbox("Select query:", query_list)
    selected_result = query_results[query_list.index(selected_query)]
    x_axis_field = st.selectbox("Select x-axis field:", ["Datetime"] + selected_result.columns.tolist())
    y_axis_field = st.selectbox("Select y-axis field:", selected_result.columns.tolist())

    if x_axis_field == "Datetime":
        x = selected_result.index
    else:
        x = selected_result[x_axis_field]

    y = selected_result[y_axis_field]

    st.line_chart(data=pd.DataFrame({x_axis_field: x, y_axis_field: y}))
