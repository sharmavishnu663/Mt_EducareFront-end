import React, { useState } from "react";
import { Link } from "react-router-dom";
import { WebRoutes } from "../../../routes";
import { connect } from "react-redux";
import ContactUs from "../modal/ContactUs";
import { Form, Input } from "antd";


const Footer = ({ emailSubscriptionApi, categoryData }) => {
  const [openContact, setOpenContact] = useState(false);
  const [email, setEmail] = useState();

  const onFinish = () => {
    const data = { email: email }
    emailSubscriptionApi(data);

  }

  const handleCategory = (id) => {
    localStorage.setItem('categorySelectedId', id);
  }

  const handleVision = (vision) => {
    localStorage.setItem('vision', vision);
  }


  return (
    <>
      <footer>
        <div className="container box-radius bg-light-orange footer">
          <div className="row">
            <div className="col-md-4">
              <div className="download-app">
                <img src="../assets/imgs/app-store.svg" alt="app-store" />
                <img src="../assets/imgs/google-play.svg" alt="google-play" />
              </div>

              <p>To Install Robomate+ at your Institution call 9987686444</p>

              <p>
                For Product Enquiries, call on our Toll-free Number 1800 2100
                009
              </p>

              <p>For Franchise enquiry contact 9987686444</p>

              <p className="address">
                MT Educare Ltd., Office No. 220, 2nd Floor, Neptune’s Flying
                Colors, Near Check Naka Bus Depot, L.B.S Cross Road, Mulund (W),
                Mumbai 400080, India.
              </p>
            </div>

            <div className="col-md-4">
              <div className="footer-links">
                <ul>
                  {/* =================== COURSES LINKS STARTS HERE =====================*/}


                  <li>
                    <h5 className="mb-3">Courses</h5>
                  </li>

                  {categoryData && categoryData.data && categoryData.data.map((item) =>
                    <li onClick={(e) => handleCategory(item && item.id)}>
                      <Link to={WebRoutes.COLLEGE}>{item && item.name}</Link>
                    </li>
                  )}

                  {/* ==================== COURSES LINKS ENDS HERE ======================== */}
                </ul>

                <ul>
                  {/* ====================== ABOUT US STARTS HERE  =========================== */}
                  <li>
                    <h5>About Us</h5>
                  </li>
                  <li>
                    <Link to={WebRoutes.CENTERS}>Our Centers</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.ABOUT_US} >Vision and Mission</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.ABOUT_US} onClick={(e) => handleVision('Directors')}>Board of Directors</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.ABOUT_US} onClick={(e) => handleVision('Directors')}>Key Management</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.ABOUT_US} onClick={(e) => handleVision('Directors')}>Board Committees</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.AWARD_RECOGNITION}>Awards & Recognition</Link>
                  </li>
                  {/* ================= ABOUT US ENDS HERE ======================= */}
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="footer-links">
                <ul>
                  {/*============================  INVESTOR RELATIONS STARTS HERE ============================= */}
                  <li>
                    <h5 className="mb-3">Investor Relations</h5>
                  </li>
                  <li>
                    <Link to={WebRoutes.CORPORATE_GOVERNANCE} >Corporate Governance</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.INVESTOR_PRESENTATIONS} >Investor Presentations</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.PRESS_RELEASE}>Press Releases</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.POSTAL_BALLOT}>Postal Ballot</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.STATUTORY_COMMUNICATION}>Statutory Communication</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.SHAREHOLDING_PATTERN}>Shareholding Pattern</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.REPORTS}>Reports</Link>
                  </li>
                  {/* ================= INVESTOR RELATIONS ENDS HERE ====================== */}
                </ul>

                <ul>
                  {/*======================  SOCIAL LINKS STARTS HERE ====================== */}
                  <li>
                    <h5>&nbsp;</h5>
                  </li>
                  <li>
                    <Link to="javascript:void(0)"
                      onClick={() => setOpenContact(true)}
                      className="nav-link"
                      data-bs-toggle="modal">Contact Us</Link>
                  </li>
                  <li>
                    <Link to={WebRoutes.PHOTO_GALLARY} >Gallery</Link>
                  </li>
                  <li>
                    <Link to="/media">Media</Link>
                  </li>
                  <li>
                    <Link to="/csr">CSR</Link>
                  </li>
                  <li>
                    <a href="/careers">Careers</a>
                  </li>
                </ul>
              </div>
              {/* ================  SUBSCRIPTION FORM ================ */}
              <div className="subscription-form">
                <Form labelCol={{
                  span: 8,
                }}
                  wrapperCol={{
                    span: 16,
                  }}
                  onFinish={onFinish}
                >
                  <label for="subscribe">Subsribe Our News Letter</label>
                  <div>
                    <input type="email" id="subscribe" value={email} placeholder="example@mail.com" onChange={(e) => setEmail(e.target.value)} required />
                    <button type="submit">
                      <img
                        src="../assets/imgs/button-submit.svg"
                        alt="button-img"
                      />
                    </button>
                  </div>
                </Form>
              </div>

              {/* ================   SUBSCRIPTION FORM Ends ================ */}
            </div>


            {/* ==============   SOCIAL LINKS ============= */}
            <div className="col-md-12 social-bookmarks">
              <h5 className="text-center mb-3">Follow Us</h5>
              <div className="social-icons">
                <a href="https://www.facebook.com/mteducareltd" target="_blank">
                  <img src="../assets/imgs/icon-facebook.svg" alt="icon" />
                </a>
                <a href="https://twitter.com/mt_education" target="_blank">
                  <img src="../assets/imgs/icon-twitter.svg" alt="icon" />
                </a>
                <a href="https://www.youtube.com/c/mteducarecachennai/videos" target="_blank">
                  <img src="../assets/imgs/icon-youtube.svg" alt="icon" />
                </a>
              </div>

              <div className="terms-policies">
                <Link to={WebRoutes.TERMS_SERVICE}>Terms of services</Link>
                <Link to={WebRoutes.DISCLAIMER}>Disclaimer</Link>
                <Link to={WebRoutes.PRIVACY_POLICY}>Privacy Policy</Link>
              </div>
              <hr />
              <p className="copyright-text">
                Copyright @ MT Educare. All rights reserved
              </p>
            </div>
            {/* ============= SOCIAL LINKS ENDS HERE ===============
             */}
          </div>
        </div>
      </footer>

      {openContact ? (
        <ContactUs
          openContact={openContact}
          handleCancel={(e) => setOpenContact(false)}
        />
      ) : null}


    </>
  );
}

export default Footer;
