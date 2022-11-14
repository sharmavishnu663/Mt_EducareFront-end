import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { CSRAPI } from "../../../redux/action/gallery";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import OwlCarousel from "react-owl-carousel";


const Csr = ({ CSRAPI, CSRData }) => {
    useEffect(() => {
        CSRAPI();
    }, []);
    const toppersConfig = {
        loop: true,
        autoplay: true,
        margin: 40,
        dots: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1,
            }
        },
    };
    return (
        <>
            {/* Header  */}
            <section class="cards terms" id="privacy-policy">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/"><img src="../assets/imgs/icon-back.svg" alt="icon" /> Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">CSR</li>
                                </ol>
                            </nav>

                            <h4>CSR</h4>
                        </div>
                    </div>
                </div>

            </section>
            {/* Header ends here */}

            {/* CSR Card starts here */}
            <section class="about-us csr">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">

                            <div class="csr-wrapper">
                                <OwlCarousel {...toppersConfig}>


                                    {CSRData && CSRData.data && CSRData.data.map((item) =>
                                        <div className="item">
                                            <div class="timeline-card csr-card">

                                                <div class="content">

                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <img src={item.image} alt="illustration" />

                                                            {parseHtml(item.title)}

                                                            {parseHtml(item.description)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    )}
                                </OwlCarousel>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
            {/* CSR Card ends here */}

        </>
    );
}


const mapStateToProps = (state) => {
    const { GalleryReducer } = state;
    const { CSRData } = GalleryReducer;
    return {
        CSRData: GalleryReducer.CSRData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        CSRAPI: () => dispatch(CSRAPI()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Csr);
