import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { investorDataAPI } from "../../../redux/action/investor";
import { parseHtml } from "../../../Utils/utils";

const InvestorPresentations = ({ investorDataAPI, investorData }) => {

    useEffect(() => {
        investorDataAPI();
    }, []);

    return (
        <>




            <section class="cards terms" id="privacy-policy">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="index.html"><img src="../assets/imgs/icon-back.svg" alt="icon" /> Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Investor Presentations</li>
                                </ol>
                            </nav>

                            <h4>Investor Presentations</h4>

                            <div class="jumbotron bg-light-orange">

                                <div class="row">
                                    <div class="col-md-6">
                                        <h2>
                                            <span class="text-orange">Capturing the entire </span>Value Chain
                                        </h2>
                                        <p>MT Educare has diversified product offering catering to students right from Std. V to students appearing for engineering and medical entrance exams (Including IIT Entrance) exams for CA course and MBA aspirants. We have an experienced managament team consisting of senior professionals having strong background in academic and rich experience.</p>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="img-wrapper">
                                            <img src="../assets/imgs/investor.png" alt="image" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-8">
                                    <h4 class="m-0">Investor Presentations For The Year 2013-2014</h4>
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
                        {investorData.data && investorData.data.map((item) =>
                            <div class="col-md-4">
                                <div class="story report">
                                    <div class="download">
                                        <div class="file-type">
                                            <img src="../assets/imgs/icon-pdf.svg" alt="icon" />
                                        </div>

                                        <div class="file-link">
                                            <a href={item.file_name} download={item.file_name}>
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
    const { investorData } = InvestorReducer;
    return {
        investorData: InvestorReducer.investorData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        investorDataAPI: () => dispatch(investorDataAPI()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InvestorPresentations);