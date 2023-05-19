let cars=[];
for(let i=0;i<3;i++){
    cars[i]=function(){
        console.log(i);
    };
}
cars[0]();
cars[1]();
cars[2]();

var bikes=[];
function f(x){
    return function(){
        console.log(x);
    };
}
for(var i=0;i<3;i++){
    bikes[i]=f(i);
}
import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const FilterableDataGrid = () => {
  const [gridApi, setGridApi] = useState(null);
  const [filterText, setFilterText] = useState('');

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  const applyFilter = () => {
    gridApi.setQuickFilter(filterText);
  };

  const columnDefs = [
    { field: 'id', headerName: 'ID', filter: true },
    { field: 'name', headerName: 'Name', filter: true },
    { field: 'age', headerName: 'Age', filter: true },
    // Add more columns as needed
  ];

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <input
        type="text"
        value={filterText}
        onChange={handleFilterTextChange}
        placeholder="Filter text..."
      />
      <button onClick={applyFilter}>Apply Filter</button>

      <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
        <AgGridReact
          onGridReady={onGridReady}
          rowData={[
            { id: 1, name: 'John Doe', age: 25 },
            { id: 2, name: 'Jane Smith', age: 30 },
            // Add more rows as needed
          ]}
          columnDefs={columnDefs}
        />
      </div>
    </div>
  );
};

export default FilterableDataGrid;
