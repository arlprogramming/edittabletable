import React, { Fragment } from "react";

const Employee = ({ employee, idx }) => {
  // console.log(idx);
  // console.log(employee);
  return (
    <Fragment>
      <td>{employee.id + 1}</td>
      <td>{employee.name}</td>
      <td className="pl-20">{employee.position}</td>
      <td className="pl-20">
        <div data-testid={"employee-salary-div-" + idx}>{employee.salary}</div>
        {/* use this block of code when the salary field becomes editable */}
        {/* <input
          data-testid={ 'employee-salary-input-' + idx }
          type='number'
      /> */}
      </td>
      <td className="pl-20">
        <button
          className={"x-small w-75 ma-0 px-25"}
          data-testid={"employee-save-button-" + idx}
        >
          Save
        </button>
      </td>
    </Fragment>
  );
};

export default Employee;
