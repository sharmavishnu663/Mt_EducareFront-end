import React from "react";

import { Modal } from "react-bootstrap";
function ContactUs({ openContact, handleCancel }) {
  return (
    <>
      <Modal
        show={openContact}
        onHide={handleCancel}
        className="modal fade modal-xl contact-us"
        id="contactUs"
        tabindex="-1"
        aria-labelledby="contactUsLabel"
        aria-hidden="true"
      >
        <Modal.Header closeButton></Modal.Header>

        <div className="modal-body">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">
            MT Educare has its presence across 270+ coaching centres at 174
            locations in Maharashtra, Gujarat, Tamil Nadu, Karnataka, Uttar
            Pradesh, Punjab, Haryana, Chandigarh,Assam, Odisha, Andhra Pradesh,
            Kerala,Telangana and internationally - Dubai
          </p>

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
                    <img
                      src="../assets/imgs/icon-product-call.svg"
                      alt="icon"
                    />
                  </div>

                  <p className="text-medium">
                    For Product Enquiries, call on our Toll-free Number 1800
                    2100 009
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

          <h4 className="text-center text-blue">Request a Call Back</h4>

          <form action="">
            <div className="floating-form">
              <div className="form-controls">
                <label for="name" className="text-blue">
                  Name
                </label>
                <input type="text" id="name" value="Ram Sharma" />
              </div>

              <div className="form-controls">
                <label for="course">
                  Select Course{" "}
                  <img
                    src="../assets/imgs/icon-down-arrow-grey.svg"
                    alt="icon"
                  />
                </label>
                <select name="course" id="course">
                  <option value="10th CBSE">10th CBSE</option>
                  <option value="12th CBSE">12th CBSE</option>
                </select>
              </div>

              <div className="form-controls">
                <label for="email">Email</label>
                <input type="email" id="email" value="ram@gmail.com" />
              </div>

              <div className="form-controls">
                <label for="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  minlength="10"
                  maxlength="11"
                  value="+91 9047765634"
                />
              </div>

              <div className="form-controls">
                <button className="btn btn-primary btn-submit" type="submit">
                  Submit
                </button>
              </div>
            </div>
            <div className="shadow"></div>

            <p className="error">Please check entered email address.</p>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ContactUs;
