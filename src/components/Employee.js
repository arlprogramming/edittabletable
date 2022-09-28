import React, { Fragment, useState } from "react";

const Employee = ({ employee, idx }) => {
  const [edit, setEdit] = useState(false);
  return (
    <Fragment>
      <td>{employee.name}</td>
      <td className="pl-20">{employee.position}</td>
      <td className="pl-20">
        {/* use this block of code when the salary field becomes editable */}
        {edit ? (
          <input data-testid={"employee-salary-input-" + idx} type="number" />
        ) : (
          <div
            data-testid={"employee-salary-div-" + idx}
            onClick={() => setEdit(!edit)}
          >
            {employee.salary}
          </div>
        )}
      </td>
      <td className="pl-20">
        <button
          className={"x-small w-75 ma-0 px-25"}
          data-testid={"employee-save-button-" + idx}
          onClick={() => setEdit(!edit)}
        >
          Save
        </button>
      </td>
    </Fragment>
  );
};

export default Employee;
