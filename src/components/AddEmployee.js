import React, { Fragment, useState } from "react";

const AddEmployee = (emp) => {
  const [contacts, setContacts] = useState({ emp });
  const [addFormData, setAddFormData] = useState({
    id: "",
    name: "",
    position: "",
    salary: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: addFormData.id,
      name: addFormData.fullName,
      position: addFormData.position,
      salary: addFormData.salary,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  return (
    <Fragment>
      <td className="pl-30">
        <input
          data-testid="new-employee-name-input"
          placeholder="No"
          name="id"
          onChange={handleAddFormChange}
        />
      </td>
      <td className="pl-30">
        <input
          data-testid="new-employee-name-input"
          placeholder="Enter Name"
          name="fullname"
          onChange={handleAddFormChange}
        />
      </td>
      <td className="pl-20">
        <input
          data-testid="new-employee-position-input"
          placeholder="Enter Position"
          name="position"
          onChange={handleAddFormChange}
        />
      </td>
      <td className="pl-20">
        <input
          data-testid="new-employee-salary-input"
          type="number"
          placeholder="Enter Salary"
          name="salary"
          onChange={handleAddFormChange}
        />
      </td>
      <td className="pl-20">
        <button
          type="submit"
          data-testid="add-new-employee-button"
          className="x-small w-75 ma-0 px-25"
        >
          Add
        </button>
      </td>
    </Fragment>
  );
};

export default AddEmployee;
