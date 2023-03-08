import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

function Tablesection(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //form states
  const [idState, setIdState] = useState({});
  const [fnameState, setFNameState] = useState({});
  const [iName, setIName] = useState({});
  const [disName, setDisName] = useState({});
  const [gender, setGender] = useState({});
  const [dob, setDob] = useState({});
  const [email, setEmail] = useState({});
  const [mobile, setMobile] = useState({});
  const [empType, setEmpType] = useState({});
  const [joindate, setJoinDate] = useState({});
  const [designation, setDesignation] = useState({});
  const [experience, setExperience] = useState({});
  const [salary, setSalary] = useState({});
  const [pNote, setPNote] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  //fetch data to table
  const fetchData = () => {
    axios.get("http://localhost:5000/api/emp/getAlldata").then((res) => {
      const data = res.data.data;
      setData(data);
    });
  };
  //edit data
  const editData = (
    id,
    fullname,
    initialname,
    displayname,
    gender,
    dob,
    email,
    mobile,
    designation,
    emptype,
    joindate,
    experience,
    salary,
    personalnote
  ) => {
    handleShow();
    setIdState(id);
    setFNameState(fullname);
    setIName(initialname);
    setDisName(displayname);
    setGender(gender);
    setDob(dob);
    setEmail(email);
    setMobile(mobile);
    setDesignation(designation);
    setEmpType(emptype);
    setJoinDate(joindate);
    setExperience(experience);
    setSalary(salary);
    setPNote(personalnote);
  };

  //update data
  const updateData = () => {
    axios
      .patch(
        `http://localhost:5000/api/emp/updateEmp/${idState}`,
        {
          fname: fnameState,
          ininame: iName,
          disname: disName,
          gender: gender,
          dob: dob,
          email: email,
          mobile: mobile,
          designation: designation,
          emptype: empType,
          joindt: joindate,
          expr: experience,
          salary: salary,
          pnote: pNote,
          id: idState,
        },

        {
          headers: { "Content-type": "application/json" },
        }
      )
      .then((res) => {
        handleClose();
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //delete data
  const deleteData = (id) => {
    axios
      .delete("http://localhost:5000/api/emp/deleteEmp/" + id)
      .then((response) => {
        fetchData();
      });
  };
  return (
    <div className="mx-14">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className=" w-[10rem] text-sm text-left text-gray-500 dark:text-gray-400 lg:w-[78rem] content-center ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Display Name
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 text-black"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Emp Id
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1 text-black"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Designation</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Emp. Type</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Experience</div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((items, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {items.displayname}
                  </th>
                  <td className="px-6 py-4 text-gray-900">
                    {items.id.toLocaleString(undefined, {
                      useGrouping: false,
                      minimumIntegerDigits: 4,
                    })}
                  </td>
                  <td className="px-6 py-4">{items.designation}</td>
                  <td className="px-6 py-4">{items.emptype}</td>
                  <td className="px-6 py-4">{items.experience}</td>
                  <td className="px-6 py-4 ">
                    <div className="flex flex-row gap-3">
                      <button
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={() => {
                          editData(
                            items.id,
                            items.fullname,
                            items.initialname,
                            items.displayname,
                            items.gender,
                            items.dob,
                            items.email,
                            items.mobile,
                            items.designation,
                            items.emptype,
                            items.joindate,
                            items.experience,
                            items.salary,
                            items.personalnote
                          );
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        onClick={() => {
                          deleteData(items.id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Edit modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Form onSubmit={updateData}>
          <Modal.Header closeButton>
            <Modal.Title>Add People</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-blue-900"> Full Name*</Form.Label>
              <Form.Control
                type="text"
                name="fnameState"
                value={fnameState}
                onChange={(e) => {
                  setFNameState(e.target.value);
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
                  name="iName"
                  value={iName}
                  onChange={(e) => {
                    setIName(e.target.value);
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
                  value={disName}
                  onChange={(e) => {
                    setDisName(e.target.value);
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
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
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
                  value={dob}
                  onChange={(e) => {
                    setDob(e.target.value);
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Mobile Number</Form.Label>
                <Form.Control
                  type="number"
                  name="mobile"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
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
                  value={designation}
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Employee Type</Form.Label>
                <Form.Select
                  size="sm"
                  name="empType"
                  value={empType}
                  onChange={(e) => {
                    setEmpType(e.target.value);
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
                  value={joindate}
                  onChange={(e) => {
                    setJoinDate(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Experience</Form.Label>
                <Form.Select
                  size="sm"
                  name="experience"
                  value={experience}
                  onChange={(e) => {
                    setExperience(e.target.value);
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
                  value={salary}
                  onChange={(e) => {
                    setSalary(e.target.value);
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
                value={pNote}
                onChange={(e) => {
                  setPNote(e.target.value);
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-light text-primary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Edit People
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* End edit modal */}
    </div>
  );
}

export default Tablesection;
