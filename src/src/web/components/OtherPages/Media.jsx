import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { mediaListApi } from "../../../redux/action/investor";

const Media = ({ mediaListApi, mediaData }) => {
    useEffect(() => {
        mediaListApi();
    }, [])
    return (
        <>

            <section class="cards terms" id="privacy-policy">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/"><img src="../assets/imgs/icon-back.svg" alt="icon" /> Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">Media</li>
                                </ol>
                            </nav>

                            <h4>Media</h4>
                        </div>
                    </div>

                    <div class="row media-coverage">
                        {mediaData && mediaData.data && mediaData.data.map((item) =>
                            <div class="col-md-4 coverage">
                                <div class="media bg-light-orange">
                                    <h5>Special Coverage for Robomate+</h5>
                                    <p>21 Dec 2021</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
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
    const { mediaData } = InvestorReducer;
    return {
        mediaData: InvestorReducer.mediaData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        mediaListApi: () => dispatch(mediaListApi()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Media);