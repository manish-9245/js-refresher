function printAll(x, ...y){
    console.log(x);
    console.log(y);
}
printAll(1,2,3,4,5);

function pcheck(fn,ln,...bel){
    console.log(`Passenger name: ${fn} ${ln}`);
    console.log(`and the belongings are ${bel}`);
}
pcheck("John","Doe","laptop","mobile","wallet");


import streamlit as st
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# Generate random data
np.random.seed(0)
dates = pd.date_range(datetime(2023, 1, 1), periods=100)
data = pd.DataFrame(np.random.randn(100, 10), index=dates, columns=[f"Field {i}" for i in range(10)])

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
    except pd.core.computation.ops.UndefinedVariableError:
        st.error("Invalid query!")

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
