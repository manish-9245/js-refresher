let y = 2;
{
  let x = 1;
  let z = 5;
  console.log (z);
}
{
  //console.log(x); throws an error
  let z = 4; //no errors
  console.log (z);
  console.log (y); //globally available
}
//Block Scoping using IIFe(Fake Scoping)
(function () {
  let x = 1;
  let z = 5;
  console.log (z);
});
//global scope helps get pass value
let pass;
let mark = 80;
if (mark > 50) {
  pass = true;
} else {
  pass = false;
}
console.log (pass);

greet (); //hoisiing gets hey
function greet () {
  console.log ('hey');
}
{
  function greet () {
    console.log ('hello');
  }
  greet (); //hello
  {
    function greet () {
      console.log ('hey there');
    }
  }
}
greet ();//hello
import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const FilterableDataGrid = () => {
  const [gridApi, setGridApi] = useState(null);
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const [filterText, setFilterText] = useState('');

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const handleFilterTextChange = (event) => {
    setFilterText(event.target.value);
  };

  const applyFilter = () => {
    gridApi.setQuickFilter(filterText);
  };

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
        >
          <AgGridColumn field="id" filter={true}></AgGridColumn>
          <AgGridColumn field="name" filter={true}></AgGridColumn>
          <AgGridColumn field="age" filter={true}></AgGridColumn>
          {/* Add more columns as needed */}
        </AgGridReact>
      </div>
    </div>
  );
};

export default FilterableDataGrid;
