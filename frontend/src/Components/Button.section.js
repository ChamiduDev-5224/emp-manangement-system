import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

function Buttonsection() {
  const [data, setData] = useState({
    fullName: "",
    iniName: "",
    disName: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
    designation: "",
    empType: "",
    joinDate: "",
    experience: "",
    salary: "",
    pNote: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/api/emp/addemp",
        { ...data },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
        handleClose();
      })
      .catch((err) => {
        console.log(err);
        handleClose();
      });
  };

  const handleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
  };
  return (
    <div className="mx-14">
      <div className="flex flex-row justify-end gap-2 my-10">
        {/* Emp filter */}
        <div>
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md  w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-800"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        {/* End emp filter */}

        {/* Modal button */}
        <div>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleShow}
          >
            Add People
          </button>
        </div>
        {/* End modal button */}
      </div>

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add People</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-blue-900"> Full Name*</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={data.fullName}
                onChange={(e) => {
                  handleChange(e);
                }}
                required
              />
            </Form.Group>
            <div className="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">
                  Name with initials*
                </Form.Label>
                <Form.Control
                  type="text"
                  name="iniName"
                  value={data.iniName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">
                  Preferred / Display Name
                </Form.Label>
                <Form.Control
                  type="text"
                  name="disName"
                  value={data.disName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900"> Gender</Form.Label>
                <Form.Select
                  size="sm"
                  name="gender"
                  value={data.gender}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={data.dob}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Mobile Number</Form.Label>
                <Form.Control
                  type="number"
                  name="mobile"
                  value={data.mobile}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Designation</Form.Label>
                <Form.Control
                  type="text"
                  name="designation"
                  value={data.designation}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Employee Type</Form.Label>
                <Form.Select
                  size="sm"
                  name="empType"
                  value={data.empType}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract Basis">Contract Basis</option>
                  <option value="Other">Other</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Joined Date</Form.Label>
                <Form.Control
                  type="date"
                  name="joinDate"
                  value={data.joinDate}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Experience</Form.Label>
                <Form.Select
                  size="sm"
                  name="experience"
                  value={data.experience}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                >
                  <option value="01 Year">01 Years</option>
                  <option value="02 Year">02 Years</option>
                  <option value="03 Year">03 Years</option>
                  <option value="04 Year">04 Years</option>
                  <option value="05 Year">05 Years</option>
                  <option value="06 Year">06 Years</option>
                  <option value="07 Year">07 Years</option>
                  <option value="08 Year">08 Years</option>
                  <option value="09 Year">09 Years</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Salary</Form.Label>
                <Form.Control
                  className="text-end"
                  type="number"
                  name="salary"
                  value={data.salary}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-blue-900"> Personal Notes</Form.Label>
              <Form.Control
                className="h-20"
                as="textarea"
                name="pNote"
                value={data.pNote}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-light text-primary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Add People
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* End modal */}
    </div>
  );
}

export default Buttonsection;
