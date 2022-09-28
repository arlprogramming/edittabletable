import React, { Fragment, useState } from "react";
import { uid } from "uid";

const AddEmployee = ({ emp, setEmp }) => {
  const [addFormData, setAddFormData] = useState({
    id: "",
    name: "",
    position: "",
    salary: "",
  });

  const handleAddFormChange = (e) => {
    let data = { ...addFormData };
    data[e.target.name] = e.target.value;
    setAddFormData(data);
  };

  const addData = (event) => {
    event.preventDefault();
    alert("ok");

    //menambhkan data
    //setEmp([...emp, addFormData]);

    // let data = [...emp];
    // data.push({
    //   id: uid(),
    //   name: addFormData.name,
    //   position: addFormData.position,
    //   salary: addFormData.salary,
    // });
    // setEmp(data);

    setEmp([...emp, addFormData]);
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  };
  return (
    <Fragment>
      <td className="pl-30">
        <input
          onfocus="this.value=''"
          id="input1"
          data-testid="new-employee-name-input"
          placeholder="Enter Name"
          value={addFormData.name}
          name="name"
          onChange={handleAddFormChange}
        />
      </td>
      <td className="pl-20">
        <input
          id="input3"
          data-testid="new-employee-position-input"
          placeholder="Enter Position"
          name="position"
          value={addFormData.position}
          onChange={handleAddFormChange}
        />
      </td>
      <td className="pl-20">
        <input
          id="input2"
          data-testid="new-employee-salary-input"
          type="number"
          placeholder="Enter Salary"
          name="salary"
          value={addFormData.salary}
          onChange={handleAddFormChange}
        />
      </td>
      <td className="pl-20">
        <button
          type="submit"
          data-testid="add-new-employee-button"
          className="x-small w-75 ma-0 px-25"
          onClick={addData}
          id="button"
        >
          Add
        </button>
      </td>
    </Fragment>
  );
};

export default AddEmployee;
