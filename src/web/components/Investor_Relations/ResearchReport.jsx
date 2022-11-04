import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { reportDataAPI } from "../../../redux/action/investor";
import { WebRoutes } from "../../../routes";

const ResearchReport = ({ reportDataAPI, reportData }) => {
    useEffect(() => {
        reportDataAPI(2);
    }, []);
    return (
        <>
            <section class="cards terms" id="privacy-policy">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/"><img src="../assets/imgs/icon-back.svg" alt="icon" /> Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Reports</li>
                                </ol>
                            </nav>

                            <h4>Reports</h4>

                            <div class="jumbotron bg-light-orange">

                                <div class="row">
                                    <div class="col-md-6">
                                        <h2>
                                            <span class="text-orange">Reserch </span><br />Reports
                                        </h2>
                                        <p>We have been making the right investments in creating the necessary framework, technology and processes to capitalise on a new world of learning. We seek to continue the transformation growth across the entire education value chain</p>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="img-wrapper">
                                            <img src="../assets/imgs/img-jumbo1.png" alt="image" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="pills">
                                <Link to="/reports" >Financial Reports</Link>
                                <Link to="/research-report" className="active">Reserch Reports</Link>
                            </div>

                            <div class="row">
                                <div class="col-md-8">
                                    <h4 class="m-0">Quarterly Financial Report For Year 2021-2022</h4>
                                </div>

                                <div class="col-md-4">
                                    <div class="filter-dropdown">
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

                    <div class="row stories reports">

                        {reportData && reportData.data && reportData.data.map((item) =>
                            <div class="col-md-4">
                                <div class="story report">
                                    <div class="download">
                                        <div class="file-type">
                                            <img src="../assets/imgs/icon-pdf.svg" alt="icon" />
                                        </div>

                                        <div class="file-link">
                                            <a href={item.file_name} download={item.file_name} target="_blank">
                                                <img src="../assets/imgs/icon-download.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>

                                    <h5>{item.quarter_name} , {item.quarter_code}</h5>

                                    <p>{item.report_year}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResearchReport);
