import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Input, Select } from "antd";
import { categoryBaodStandardsListAPI, cityListAPI, AreaListAPI } from "../../../redux/action/home";
import { categoryListApi } from "../../../redux/action/category";
import { userQueryApi } from "../../../redux/action/enquiry";

const Connect = ({ categoryListApi, userQueryApi, categoryBaodStandardsListAPI, cityListAPI, AreaListAPI, categoryData, boardStandardsData }) => {
  const [queryname, setQueryName] = useState();
  const [queryEmail, setQueryEmail] = useState();
  const [queryMobile, setQueryMobile] = useState();
  const [querycategory, setQueryCategory] = useState();
  const [queryboards, setQueryBoards] = useState();
  const [queryStandards, setQueryStandards] = useState();
  useEffect(() => {
    categoryListApi();
    cityListAPI();
  }, []);
  useEffect(() => {
    categoryBaodStandardsListAPI(querycategory);
  }, [querycategory]);

  const handleConnectSubmint = () => {
    const data = {
      name: queryname,
      email: queryEmail,
      mobile: queryMobile,
      category: querycategory,
      board: queryboards,
      standards: queryStandards,
    };

    userQueryApi(data);
    setInterval(() => {
      window.location.reload();
    }, 1000 * 5);
  };
  const handleContact = (e) => {
    if (e.target.value >= '0' && e.target.value <= '9') setQueryMobile(e.target.value);
  }
  return (
    <>
      <section className="connect">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                Have any doubts? <span className="text-orange">let’s connect</span>
              </h3>

              <Form
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                onFinish={handleConnectSubmint}
              >
                <div className="floating-form">
                  <div className="form-controls">
                    <Form.Item label="Name" name="name" className="form-label text-blue" rules={[{ required: true, message: " name!" }]}>
                      <input type="text" id="name" placeholder="Name" value={queryname} onChange={(e) => setQueryName(e.target.value)} required />
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Email" name="Email" className="form-label text-blue" rules={[{ required: true, message: "email address!" }]}>
                      <input type="email" id="email" placeholder="Email" value={queryEmail} onChange={(e) => setQueryEmail(e.target.value)} required />
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Phone Number" name="mobile" className="form-label text-blue" rules={[{ required: true, message: " mobile!" }]}>
                      <input type="text" id="phone" minlength="10" maxlength="11" placeholder="Mobile" value={queryMobile} onChange={(e) => handleContact(e)} required />
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Category" name="category" className="form-label" rules={[{ required: true, message: "category!" }]}>
                      <select name="course" className="form-controls w-100" id="course" value={querycategory} onChange={(e) => setQueryCategory(e.target.value)} required>
                        <option disabled selected hidden>
                          Select category
                        </option>
                        {categoryData && categoryData.data && categoryData.data.map((item) => <option value={item.id}>{item.name}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Baord" name="board" className="form-label" rules={[{ required: true, message: "board!" }]}>
                      <select name="boards" className="form-controls w-100" id="boards" value={queryboards} onChange={(e) => setQueryBoards(e.target.value)} required>
                        <option disabled selected hidden>
                          Select board
                        </option>
                        {boardStandardsData && boardStandardsData.data && boardStandardsData.data.map((item) => <option value={item.board_name}>{item.board_name}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <Form.Item label="Standards" name="standards" className="form-label" rules={[{ required: true, message: "standard!" }]}>
                      <select name="standards" id="standards" className="form-controls w-100" value={queryStandards} onChange={(e) => setQueryStandards(e.target.value)} required>
                        <option disabled selected hidden>
                          Select Standards
                        </option>
                        {boardStandardsData && boardStandardsData.data && boardStandardsData.data.map((item) => <option value={item.name}>{item.name}</option>)}
                      </select>
                    </Form.Item>
                  </div>

                  <div className="form-controls">
                    <button className="btn btn-primary btn-submit" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
                <div className="shadow"></div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

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
    userQueryApi: (data) => dispatch(userQueryApi(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Connect);
