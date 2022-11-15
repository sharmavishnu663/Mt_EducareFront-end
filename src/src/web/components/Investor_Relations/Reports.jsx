import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reportDataAPI } from "../../../redux/action/investor";
import { WebRoutes } from "../../../routes";

const Reports = ({ reportDataAPI, reportData }) => {
    useEffect(() => {
        reportDataAPI(1);
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
                                    <li className="breadcrumb-item active" aria-current="page">Releases</li>
                                </ol>
                            </nav>

                            <h4>Reports</h4>

                            <div className="jumbotron bg-light-orange">

                                <div className="row">
                                    <div className="col-md-5">
                                        <h2>
                                            <span className="text-orange">Financial </span><br />Reports
                                        </h2>
                                        <p>We have been making the right investments in creating the necessary framework, technology and processes to capitalise on a new world of learning. We seek to continue the transformation growth across the entire education value chain</p>
                                    </div>

                                    <div className="col-md-7">
                                        <div className="img-wrapper">
                                            <img src="../assets/imgs/img-jumbo1.png" alt="image" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="pills">
                                <Link to={WebRoutes.REPORTS} className="active">Financial Reports</Link>
                                <Link to={WebRoutes.RESEARCH_REPORT}>Reserch Reports</Link>
                            </div>

                            <div className="row">
                                <div className="col-md-8">
                                    <h4 className="m-0">Quarterly Financial Report For Year 2021-2022</h4>
                                </div>

                                <div className="col-md-4">
                                    <div className="filter-dropdown">
                                        <label for="dropdown">Year</label>
                                        <select name="year" id="dropdown">
                                            <option value="19-20">2019 - 2020</option>
                                            <option value="20-21">2020 - 2021</option>
                                            <option value="21-22">2021 - 2022</option>
                                            <option value="22-23">2022 - 2023</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row stories reports">
                        {reportData && reportData.data && reportData.data.map((item) =>
                            <div className="col-md-4">
                                <div className="story report">
                                    <div className="download">
                                        <div className="file-type">
                                            <img src="../assets/imgs/icon-pdf.svg" alt="icon" />
                                        </div>

                                        <div className="file-link">
                                            <a href={item.file_name} download={item.file_name} target="_blank">
                                                <img src="../assets/imgs/icon-download.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>

                                    <h5>{item.quarter_name}</h5>

                                    <p>{item.quarter_code}</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

            </section>


        </>
    );
}


const mapStateToProps = (state) => {
    const { InvestorReducer } = state;
    const { reportData } = InvestorReducer;
    return {
        reportData: InvestorReducer.reportData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        reportDataAPI: (data) => dispatch(reportDataAPI(1)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
