import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import SimpleButton from "../../../components/buttons/SimpleButton";
const CreateForm = ({ data, show, onHide, refreshData }) => {
  const apiEndpoint = `http://localhost:3001/api/user/`;
  const [nameValue, setNameValue] = useState(null);
  const [contactValue, setContactValue] = useState(null);
  const [emailValue, setEmailValue] = useState(null);
  const [usernameValue, setUsernameValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const [positionValue, setPositionValue] = useState(null);
  useEffect(() => {
    if (data) {
      setNameValue(data.fullName);
      setContactValue(data.contact);
      setEmailValue(data.email);
      setUsernameValue(data.username);
      setPasswordValue(data.password);
      setPositionValue(data.position);
    }
  }, [data]);
  // Client-Side field validation
  const validField = (e) => {
    const inputClass =
      e.target.value === ""
        ? "form-control is-invalid"
        : "form-control is-valid";
    e.target.className = inputClass;
  };
  // VARIABLE HANDLERS
  const handleName = (e) => {
    validField(e);
    setNameValue(e.target.value);
  };
  const handleContact = (e) => {
    validField(e);
    setContactValue(e.target.value);
  };
  const handleEmail = (e) => {
    validField(e);
    setEmailValue(e.target.value);
  };
  const handleUserName = (e) => {
    validField(e);
    setUsernameValue(e.target.value);
  };
  const handlePassword = (e) => {
    validField(e);
    setPasswordValue(e.target.value);
  };
  const handlePosition = (e) => {
    validField(e);
    setPositionValue(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(apiEndpoint, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: nameValue,
        contact: contactValue,
        email: emailValue,
        username: usernameValue,
        password: passwordValue,
        position: positionValue,
      }),
    })
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        onHide();
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setNameValue("");
        setContactValue("");
        setEmailValue("");
        setUsernameValue("");
        setPasswordValue("");
        refreshData();
      });
  };
  const positions = [
    {
      pos_id: 1,
      name: "Admin",
    },
    {
      pos_id: 2,
      name: "Client",
    },
    {
      pos_id: 3,
      name: "Applicant",
    },
  ];
  return (
    <>
      {/* Modal Create User */}
      <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Create new user</Modal.Title>
        </Modal.Header>
        <form
          id="formCreate"
          className="needs-validation"
          onSubmit={handleSubmit}
          noValidate={false}>
          <Modal.Body className="row mx-0 gap-2 ">
            <div className="input-group">
              <span className="input-group-text">Full Name</span>
              <input
                type="text"
                onChange={handleName}
                value={nameValue || ""}
                placeholder="first name / middle initial / last name"
                className={`form-control`}
                required
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">Contact number</span>
              <input
                type="text"
                onChange={handleContact}
                value={contactValue || ""}
                className="form-control"
                required
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">Email</span>
              <input
                type="email"
                onChange={handleEmail}
                value={emailValue || ""}
                className="form-control"
                required
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">Username</span>
              <input
                type="text"
                onChange={handleUserName}
                value={usernameValue || ""}
                className="form-control "
                required
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">Password</span>
              <input
                type="password"
                onChange={handlePassword}
                value={passwordValue || ""}
                className="form-control "
                required
              />
            </div>
            <div className="input-group">
              <span className="input-group-text">Position</span>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={handlePosition}
                value={positionValue || ""}>
                <option value={""} selected>
                  select position
                </option>
                {positions.map((pos) => {
                  return <option value={pos.pos_id}>{pos.name}</option>;
                })}
              </select>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <SimpleButton
              type={"button"}
              color="secondary"
              onClick={onHide}
              label={"Close"}
            />
            <SimpleButton
              type={"submit"}
              color="primary"
              label={"Save Changes"}
            />
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default CreateForm;
