import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { centerListAPI, centerSearchAPI } from "../../../redux/action/aboutUs";
import { parseHtml } from "../../../Utils/utils";

const Center = ({ centerListAPI, centersData, centerSearchAPI, centerSearchData }) => {

    const searchData = localStorage.getItem('centersearch');
    console.log(searchData)

    useEffect(() => {
        centerListAPI()
    }, []);

    useEffect(() => {
        if (searchData) {
            centerSearchAPI(searchData);
            centersData = centerSearchData;
        }
    }, [])



    return (
        <>


            {/*====================== MANAGEMENT ================== */}
            <section className="management our-centers">

                <div className="container box-radius bg-light-orange">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="headline">Our <span className="text-blue">Management</span></h3>
                            <p className="sub-headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">

                            <form action="">
                                <div className="floating-form in-banner">
                                    <div className="form-controls">
                                        <label for="course" className="text-blue">Course <img src="../assets/imgs/icon-down-arrow.svg" alt="icon" /></label>
                                        <select name="course" id="course">
                                            <option value="Program of UPSC">Program of UPSC</option>
                                            <option value="Program of IPS">Program of IPS</option>
                                        </select>
                                    </div>

                                    <div className="form-controls">
                                        <label for="course">Board <img src="../assets/imgs/icon-down-arrow-grey.svg" alt="icon" /></label>
                                        <select name="course" id="course">
                                            <option value="10th CBSE">10th CBSE</option>
                                            <option value="12th CBSE">12th CBSE</option>
                                        </select>
                                    </div>

                                    <div className="form-controls">
                                        <label for="course">City <img src="../assets/imgs/icon-down-arrow-grey.svg" alt="icon" /></label>
                                        <select name="course" id="course">
                                            <option value="Delhi">Delhi</option>
                                            <option value="Noida">Sector 2</option>
                                        </select>
                                    </div>

                                    <div className="form-controls">
                                        <label for="course">Area <img src="../assets/imgs/icon-down-arrow-grey.svg" alt="icon" /></label>
                                        <select name="course" id="course">
                                            <option value="Greater Kailash">Greater Kailash</option>
                                            <option value="South Extn.">South Extn.</option>
                                        </select>
                                    </div>

                                    <div className="form-controls">
                                        <button className="btn btn-primary btn-submit" type="submit">Submit</button>
                                    </div>
                                </div>
                                <div className="shadow"></div>

                            </form>
                        </div>

                    </div>

                    <div className="row">
                        {centersData.data && centersData.data.map((item) =>
                            <div className="col-md-4">
                                <div className="card-address centres">
                                    <h5>{item.name}</h5>
                                    <div className="detail">
                                        <ul>
                                            <li>
                                                <span>
                                                    <img src="../assets/imgs/icon-phone.svg" alt="icon" />
                                                </span>
                                                <span>Ph: {item.mobile}</span>
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="../assets/imgs/icon-email.svg" alt="icon" />
                                                </span>
                                                <span>
                                                    <Link to="" href={`mailto: ${item.email}`}>{item.email}</Link>
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    <img src="../assets/imgs/icon-location-pin.svg" alt="icon" />
                                                </span>
                                                <span>{item.address},{item.address1},{item.city ? item.city.name : ''},{item.state ? item.state.name : ''}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )

                        }


                    </div>
                </div>

            </section>
            {/* =================== Management ends here ==================== */}

            {/* ================ CONNECT =========================*/}
            <section className="connect">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <h3 className="text-center">Have any doubts? <span className="text-orange">let’s connect</span></h3>

                            <form action="">
                                <div className="floating-form">
                                    <div className="form-controls">
                                        <label for="name" className="text-blue">Name</label>
                                        <input type="text" id="name" value="Ram Sharma" />
                                    </div>

                                    <div className="form-controls">
                                        <label for="course">Select Course <img src="../assets/imgs/icon-down-arrow-grey.svg" alt="icon" /></label>
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
                                        <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" minlength="10" maxlength="11" value="+91 9047765634" />
                                    </div>

                                    <div className="form-controls">
                                        <button className="btn btn-primary btn-submit" type="submit">Submit</button>
                                    </div>
                                </div>
                                <div className="shadow"></div>
                            </form>

                        </div>
                    </div>
                </div>

            </section>
            {/* ================ CONNECT ends here =====================*/}



        </>
    );
}


const mapStateToProps = (state) => {
    const { AboutReducer } = state;
    const { centersData } = AboutReducer;
    return {
        centersData: AboutReducer.centersData,
        centerSearchData: AboutReducer.centerSearchData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        centerListAPI: () => dispatch(centerListAPI()),
        centerSearchAPI: (data) => dispatch(centerSearchAPI(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Center);
