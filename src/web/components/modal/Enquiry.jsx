import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Form, Input } from "antd";
import axios from "axios";
import { ENQUIRY_POST_DATA } from "../../../redux/constants";



function Enquiry({ openEnquiry, handleCancel }) {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [board, setBoard] = useState('');
  const [standard, setStandard] = useState('');
  const [demoTime, setDemoTime] = useState('');

  const onFinish = (event) => {
    const data = {
      name: name,
      mobile: mobile,
      email: email,
      category: category,
      city: city,
      board: board,
      standard: standard,
      demo_time: demoTime
    };
    axios
      .post(ENQUIRY_POST_DATA, data)
      .then((response) => {
        if (response) {
          localStorage.setItem('postData', 'Successfully Save')
          handleCancel()
        }
      }).catch(err => {
        localStorage.setItem('error', 'Enquiry something wrong');
      });
    return false;
  };

  return (
    <>

      <Modal
        show={openEnquiry}
        onHide={handleCancel}
        className="modal fade modal-xl enquire-now"
        id="enquireNow"
        tabindex="-1"
        aria-labelledby="enquireNowLabel"
        aria-hidden="true"
      >
        <button
          className="btn-close-modal"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={handleCancel}
        >
          Close
        </button>
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <h2 className="text-center mb-4">
            <span className="text-blue">Enquire</span> Now
          </h2>
          <Form labelCol={{
            span: 8,
          }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={onFinish}
          >
            <div className="container enquiry-form">
              <div className="row">
                <div className="col-md-4 form-controls">
                  <Form.Item
                    label="Name"
                    name="name"
                    className="form-label"
                    rules={[{ required: true, message: 'Please input your name!' }]}>
                    <Input type="text" className="form-control" value={name} placeholder="Enter Full Name" onChange={(e) => setName(e.target.value)} required />

                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item
                    label="Email"
                    name="email"
                    className="form-label"
                    rules={[{ required: true, message: 'Please input your email!' }]}>


                    <Input
                      required
                      type="email"
                      className="form-control"
                      placeholder="@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}

                    />

                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item
                    label="Phone"
                    name="mobile"
                    className="form-label"
                    rules={[{ required: true, message: 'Please input your Mobile number!' }]}>
                    <Input type="text" className="form-control" placeholder="+91" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item
                    label="Category"
                    name="category"
                    className="form-label"
                    rules={[{ required: true, message: 'Please select your Category!' }]}>

                    <select id="" className="custom-select form-select" value={category} onChange={(e) => setCategory(e.target.value)} required>
                      <option value="">Select Category</option>
                      <option value="Entrance Exam">Entrance Exam</option>
                      <option value="School">School</option>
                      <option value="Commerce">Commerce</option>
                      <option value="Science">Science</option>
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item
                    label="Board"
                    name="board"
                    className="form-label"
                    rules={[{ required: true, message: 'Please select your board!' }]}>


                    <select id="" className="custom-select form-select" value={board} onChange={(e) => setBoard(e.target.value)} required>

                      <option value="">Select board</option>
                      <option value="ICSE">ICSE</option>
                      <option value="CBSE">CBSE</option>
                      <option value="MHSB">MHSB</option>
                      <option value="State Board">State Board</option>
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item
                    label="Standard"
                    name="standard"
                    className="form-label"
                    rules={[{ required: true, message: 'Please select your standrd!' }]}>


                    <select id="" className="custom-select form-select" value={standard} onChange={(e) => setStandard(e.target.value)} required>
                      <option value="">Select standard</option>
                      <option value="VII">VII</option>
                      <option value="IX">IX</option>
                      <option value="X">X</option>
                      <option value="XI">XI</option>
                      <option value="XII">XII</option>
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item
                    label=" Preferred Time for Demo"
                    name="demo_time"
                    className="form-label"
                    rules={[{ required: true, message: 'Please select your demo time!' }]}>
                    <select id="" className="custom-select form-select" value={demoTime} onChange={(e) => setDemoTime(e.target.value)} required>
                      <option value="">Select demo time</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="12:00">12:00</option>
                      <option value="12:30">12:30</option>
                      <option value="13:00">13:00</option>
                      <option value="13:30">13:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item
                    label="City"
                    name="city"
                    className="form-label"
                    rules={[{ required: true, message: 'Please select your city!' }]}>

                    <select id="" className="custom-select form-select" value={city} onChange={(e) => setCity(e.target.value)} required>
                      <option value="">Select City</option>
                      <option value="Noida">Noida</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <button type="submit" className="btn btn-booking">Book</button>
                </div>
              </div>
            </div>
          </Form>

          <div className="container card-wrapper">
            <div className="row">
              <div className="col">
                <div className="info-card bg-light-blue">
                  <div className="img-wrapper">
                    <img src="../assets/imgs/icon-robomate.svg" alt="icon" />
                  </div>

                  <p className="text-medium">
                    To Install Robomate+ at your Institution call 9987686444
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="info-card bg-light-orange">
                  <div className="img-wrapper">
                    <img src="../assets/imgs/icon-product-call.svg" alt="icon" />
                  </div>

                  <p className="text-medium">
                    For Product Enquiries, call on our Toll-free Number 1800 2100
                    009
                  </p>
                </div>
              </div>

              <div className="col">
                <div className="info-card bg-light-blue">
                  <div className="img-wrapper">
                    <img src="../assets/imgs/icon-franchise.svg" alt="icon" />
                  </div>

                  <p className="text-medium">
                    For Franchise enquiry contact 9987686444
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal >
    </>
  );
}

export default Enquiry;
