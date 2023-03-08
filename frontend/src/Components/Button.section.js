import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modal, Form } from "react-bootstrap";
function Buttonsection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Modal.Header closeButton>
          <Modal.Title>Add People</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-blue-900"> Full Name*</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <div class="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">
                  Name with initials*
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">
                  Preferred / Display Name
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <div class="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900"> Gender</Form.Label>
                <Form.Select size="sm">
                  <option>Small select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Date of Birth</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </div>
            <div class="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Mobile Number</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </div>
            <div class="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Designation</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Employee Type</Form.Label>
                <Form.Select size="sm">
                  <option>Small select</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div class="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Joined Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900">Experience</Form.Label>
                <Form.Select size="sm">
                  <option>Small select</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div class="row">
              <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                <Form.Label className="text-blue-900"> Salary</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="text-blue-900"> Personal Notes</Form.Label>
              <Form.Control className="h-20" as="textarea" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-light text-primary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add People</Button>
        </Modal.Footer>
      </Modal>
      {/* End modal */}
    </div>
  );
}

export default Buttonsection;
