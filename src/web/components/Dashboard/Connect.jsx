import React from "react";
function Connect() {
  return (
    <>
      
      <section className="connect">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3 className="text-center">
                Have any doubts? <span className="text-orange">let’s connect</span>
              </h3>

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
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Connect;
