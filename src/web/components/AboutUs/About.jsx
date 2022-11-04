import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { introListAPI } from "../../../redux/action/aboutUs";
import { parseHtml } from "../../../Utils/utils";
import Intro from "./intro";

const About = ({ introListAPI, introData }) => {
    const [activeYear, setActiveYear] = useState();
    useEffect(() => {
        introListAPI();
        setActiveYear(introData.data && introData.data[0].id)
    }, []);


    return (
        <>


            <section className="cards terms" id="privacy-policy">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/"><img src="../assets/imgs/icon-back.svg" alt="icon" /> Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
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
                                    {introData && introData.data ? introData.data.map((item) =>
                                        <li className={`${item.id < activeYear ? "active" : ''} || ${item.id == activeYear ? "active" : ''}`}>
                                            <Link to="#" onClick={(e) => setActiveYear(item.id)}>{item.year}</Link>
                                        </li>
                                    )
                                        : null}
                                </ul>
                            </div>

                            <div className="timeline-card">

                                <div className="content">

                                    <div className="row align-items-center">
                                        <Intro introData={introData} activeYear={activeYear} />
                                    </div>

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



            {/* =========== MANAGEMENT =============== */}


            {/* =================== Management ends here ==================== */}


        </>
    );
}


const mapStateToProps = (state) => {
    const { AboutReducer } = state;
    const { introData } = AboutReducer;
    return {
        introData: AboutReducer.introData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        introListAPI: () => dispatch(introListAPI()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
