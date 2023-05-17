let x=1;
//let x=3; redeclaration throws an error
function add (y){
    return y+x;
}
console.log(add(3));
function add2(y){
    let x=2;
    return y+x;
}
console.log(add2(3));
//console.log(z);//throws an error since its not hoisted
let z;
console.log(z);//shows undefined

/* DateRangePicker.css */

/* Add custom styles for the date range picker */

/* Date picker container */
.DateRangePicker {
  display: inline-block;
  position: relative;
}

/* Date picker input */
.DateRangePicker input {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Highlighted dates in the selected range */
.DateRangePicker__day--highlighted {
  background-color: #e0e0e0;
}

/* Start date and end date inputs */
.DateRangePicker__inputGroup {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

/* Label for the start date input */
.DateRangePicker__startLabel {
  margin-right: 10px;
}

/* Label for the end date input */
.DateRangePicker__endLabel {
  margin-left: 10px;
}

/* Apply custom styles to the dropdown menus */
.react-datepicker__month-dropdown,
.react-datepicker__year-dropdown {
  font-size: 14px;
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Apply custom styles to the dropdown arrow */
.react-datepicker__navigation {
  top: 40%;
}

/* Apply custom styles to the selected dropdown option */
.react-datepicker__month-dropdown--scrollable,
.react-datepicker__year-dropdown--scrollable {
  max-height: 200px;
  overflow-y: auto;
}
