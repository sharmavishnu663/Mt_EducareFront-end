import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { Form, Input } from "antd";
import axios from "axios";
import { ENQUIRY_POST_DATA } from "../../../redux/constants";
import { categoryBaodStandardsListAPI, cityListAPI, AreaListAPI } from "../../../redux/action/home";
import { categoryListApi } from "../../../redux/action/category";

const Enquiry = ({ openEnquiry, handleCancel, categoryListApi, userQueryApi, categoryBaodStandardsListAPI, cityListAPI, AreaListAPI, categoryData, boardStandardsData, cityData }) => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [city, setCity] = useState('');
  const [board, setBoard] = useState('');
  const [standard, setStandard] = useState('');
  const [demoTime, setDemoTime] = useState('');

  useEffect(() => {
    categoryListApi();
    cityListAPI();
  }, []);
  useEffect(() => {
    categoryBaodStandardsListAPI(category);
  }, [category]);

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

                    <select name="course" className="custom-select form-select" id="course" value={category} onChange={(e) => setCategory(e.target.value)} required>
                      <option disabled selected>Please select category</option>
                      {categoryData && categoryData.data && categoryData.data.map((item) =>
                        <option value={item.id}>{item.name}</option>
                      )}
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item
                    label="Board"
                    name="board"
                    className="form-label"
                    rules={[{ required: true, message: 'Please select your board!' }]}>

                    <select name="boards" className="custom-select form-select" id="boards" value={board} onChange={(e) => setBoard(e.target.value)} required>
                      <option disabled selected>Please select board</option>
                      {boardStandardsData && boardStandardsData.data && boardStandardsData.data.map((item) =>
                        <option value={item.board_name}>{item.board_name}</option>
                      )}
                    </select>
                  </Form.Item>
                </div>

                <div className="col-md-4 form-controls">
                  <Form.Item
                    label="Standard"
                    name="standard"
                    className="form-label"
                    rules={[{ required: true, message: 'Please select your standrd!' }]}>


                    <select className="custom-select form-select" name="standards" id="standards" value={standard} onChange={(e) => setStandard(e.target.value)} required>
                      <option disabled selected>Please select Standards</option>
                      {boardStandardsData && boardStandardsData.data && boardStandardsData.data.map((item) =>
                        <option value={item.name}>{item.name}</option>
                      )}
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
                    <select name="standards" id="standards" value={city} onChange={(e) => setCity(e.target.value)} className="custom-select form-select" required>
                      <option disabled selected>Please select city</option>
                      {cityData && cityData.data && cityData.data.map((item) =>
                        <option value={item.id}>{item.name}</option>
                      )}
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


const mapStateToProps = (state) => {
  const { AboutReducer, HomeReducer, CategoryReducer } = state;
  const { centersData, centerSearchData } = AboutReducer;
  return {
    boardStandardsData: HomeReducer.boardStandardsData,
    cityData: HomeReducer.cityData,
    areaData: HomeReducer.areaData,
    categoryData: CategoryReducer.categoryData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryBaodStandardsListAPI: (data) => dispatch(categoryBaodStandardsListAPI(data)),
    categoryListApi: () => dispatch(categoryListApi()),
    cityListAPI: () => dispatch(cityListAPI()),
    AreaListAPI: (data) => dispatch(AreaListAPI(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Enquiry);
