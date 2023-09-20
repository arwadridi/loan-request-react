import "./FormStyles.css";
import "./App.css";
import Modal from "./Modal";
import { useState } from "react";

function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showModal, SetShowModal] = useState(false);
  const [loanInputs, SetLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });
  function handleDivClick() {
    if (showModal) {
      SetShowModal(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage(null);
    const { age, phoneNumber } = loanInputs;
    if (age < 18 || age > 100) {
      setErrorMessage("The Age is Not allowed");
      
    }
    else if (phoneNumber.length < 12 || phoneNumber.length > 8) {
     setErrorMessage("phone Number format is Incorrect");
     }

    SetShowModal(true);
  }

  const btnIsDisabled =
    loanInputs.name === "" ||
    loanInputs.age === "" ||
    loanInputs.phoneNumber === "";

  return (
    <div
      onClick={handleDivClick}
      className="flex"
      style={{ flexDirection: "column" }}
    >
      <form
        className="flex  "
        style={{ flexDirection: "column" }}
        id="loan-form"
      >
        <h1> Requesting the Loan</h1>
        <hr />
        <label>Name:</label>
        <input
          value={loanInputs.name}
          onChange={(event) =>
            SetLoanInputs({ ...loanInputs, name: event.target.value })
          }
        />

        <label>Phone Number:</label>
        <input
          value={loanInputs.phoneNumber}
          onChange={(event) =>
            SetLoanInputs({ ...loanInputs, phoneNumber: event.target.value })
          }
        />

        <label>Age:</label>
        <input
          value={loanInputs.age}
          onChange={(event) =>
            SetLoanInputs({ ...loanInputs, age: event.target.value })
          }
        />

        <label style={{ marginTop: "30px" }}>Are you an emplyee?</label>
        <input id="checkbox" type="checkbox" />

        <label>Salary</label>
        <select
          value={loanInputs.salaryRange}
          onChange={(event) =>
            SetLoanInputs({ ...loanInputs, salaryRange: event.target.value })
          }
        >
          <option>less than 500£$</option>
          <option>between 500$and 2000$</option>
          <option>above 2000</option>
        </select>
        <button
          id="submit-loan-btn"
          className={btnIsDisabled ? "disaled" : ""}
          onClick={handleSubmit}
          disabled={btnIsDisabled}
        >
          Submit
        </button>
      </form>
      <Modal isVisible={showModal} errorMessage={errorMessage} />
    </div>
  );
}

export default LoanForm;
