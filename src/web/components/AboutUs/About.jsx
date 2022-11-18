import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { introListAPI, boardDirectorAPI, boardCommitteeAPI, keyManagementAPI } from "../../../redux/action/aboutUs";
import { parseHtml } from "../../../Utils/utils";
import Intro from "./intro";
import OwlCarousel from "react-owl-carousel";

const About = ({ introListAPI, introData, boardCommitteeAPI, commitesData, boardDirectorAPI, directorsData, keyManagementAPI, keyManagementData }) => {
  const [activeYear, setActiveYear] = useState();
  const [visionSet, setVisionSet] = useState(localStorage.getItem("vision"));
  useEffect(() => {
    introListAPI();
    boardCommitteeAPI();
    boardDirectorAPI();
    keyManagementAPI();
    // setActiveYear(introData.data && introData.data && introData.data[0].id)
  }, []);

  return (
    <>
      <section className="cards terms" id="privacy-policy">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <img src="../assets/imgs/icon-back.svg" alt="icon" /> Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About Us
                  </li>
                </ol>
              </nav>

              <h4>About Us</h4>
            </div>
          </div>
        </div>
      </section>
      {/* =========== ABOUT US  ================== */}
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="timeline">
                <ul>
                  {introData && introData.data
                    ? introData.data.map((item) => (
                        <li className={`${item.id < activeYear ? "active" : ""} || ${item.id == activeYear ? "active" : ""}`}>
                          <Link to="#" onClick={(e) => setActiveYear(item.id)}>
                            {item.year}
                          </Link>
                        </li>
                      ))
                    : null}
                </ul>
              </div>

              <div className="timeline-card">
                <div className="content">
                  <Intro introData={introData} activeYear={activeYear} />
                </div>

                <div className="btn-wrapper text-right">
                  <Link to="#" className="btn btn-sm flip" title="prev">
                    <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                  </Link>

                  <Link to="#" className="btn btn-sm" title="next" onClick={(e) => setActiveYear(parseInt(activeYear + 1))}>
                    <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========== ABout US ends here ============ */}
      <section className="management">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="headline">
                Our <span className="text-blue">Management</span>
              </h3>
              <p className="sub-headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 pills">
              <ul className="nav nav-tabs MT_Tab" id="MT_Tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="Edu-tab-1" data-bs-toggle="tab" data-bs-target="#MT-tabPane-1" type="button" role="tab" aria-controls="MT-tabPane-1" aria-selected="true">
                    Key Management
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="Edu-tab-2" data-bs-toggle="tab" data-bs-target="#MT-tabPane-2" type="button" role="tab" aria-controls="MT-tabPane-2" aria-selected="false">
                    Board of Directors
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="Edu-tab-3" data-bs-toggle="tab" data-bs-target="#MT-tabPane-3" type="button" role="tab" aria-controls="MT-tabPane-3" aria-selected="false">
                    Board Committees
                  </button>
                </li>
              </ul>
            </div>
            <div className="tab-content " id="MT_TabContent">
              <div className="tab-pane fade show active" id="MT-tabPane-1" role="tabpanel" aria-labelledby="Edu-tab-1" tabindex="0">
                {/* <!-- explore-lakshya --> */}

                <div className="row">
                  {commitesData.data &&
                    commitesData.data.map((item) => (
                      <div className="col-md-4">
                        <div className="card-address">
                          <h5>{item.title}</h5>
                          <div className="detail">
                            <ul>
                              <li>
                                <span>{item.name}</span>
                                <span>{item.designation}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="tab-pane fade" id="MT-tabPane-2" role="tabpanel" aria-labelledby="Edu-tab-2" tabindex="0">
                {/* <!-- explore-lakshya --> */}

                <div className="row">
                  {directorsData.data &&
                    directorsData.data.map((item) => (
                      <div className="col-md-4">
                        <div className="member">
                          <div className="member-img">
                            <div className="bg"></div>
                            <img src={"../assets/imgs/member.png"} alt="photograph" />
                          </div>
                          <p className="name">{item.name}</p>
                          <p className="designation">{item.designation}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="tab-pane fade" id="MT-tabPane-3" role="tabpanel" aria-labelledby="Edu-tab-3" tabindex="0">
                {/* <!-- explore-lakshya --> */}

                <div className="row">
                  {keyManagementData.data &&
                    keyManagementData.data.map((item) => (
                      <div class="col-md-4">
                        <div class="card-address">
                          <h5>{item.title}</h5>
                          <div class="detail">
                            <p>
                              {item.address},<br />
                              {item.address1},<br />
                              Tel: {item.mobile}
                              <br />
                              Fax: {item.fax}
                              <br />
                              Email: {item.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== MANAGEMENT =============== */}

      {/* =================== Management ends here ==================== */}
    </>
  );
};

const mapStateToProps = (state) => {
  const { AboutReducer } = state;
  const { introData, commitesData, directorsData, keyManagementData } = AboutReducer;
  return {
    introData: AboutReducer.introData,
    commitesData: AboutReducer.commitesData,
    directorsData: AboutReducer.directorsData,
    keyManagementData: AboutReducer.keyManagementData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    introListAPI: () => dispatch(introListAPI()),
    boardCommitteeAPI: () => dispatch(boardCommitteeAPI()),
    boardDirectorAPI: () => dispatch(boardDirectorAPI()),
    keyManagementAPI: () => dispatch(keyManagementAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
