import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { galleryAllDataAPI } from "../../../redux/action/gallery";
import { WebRoutes } from "../../../routes";

var userId;
const GallaryGrid = ({ galleryAllDataAPI, galleryAllData }) => {
    const [awardsName, setAwardsName] = useState();
    const { id } = useParams();
    userId = id;
    useEffect(() => {
        galleryAllDataAPI(id);
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
                                    <li class="breadcrumb-item"><Link to={WebRoutes.PHOTO_GALLARY}>Gallery</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">{localStorage.getItem('awardName')}</li>
                                </ol>
                            </nav>

                            <h4>{localStorage.getItem('awardName')}</h4>
                        </div>
                    </div>

                    <div class="row gallery-grid">
                        {galleryAllData && galleryAllData.data && galleryAllData.data.map((item) =>

                            <div class="col-md-3 gallery-img">

                                <a href="../assets/imgs/large-img.png" data-fancybox="gallery" data-caption="Optional caption">
                                    <img src="../assets/imgs/img1.png" alt="small-image" />
                                </a>
                            </div>
                        )}

                    </div>
                </div>

            </section>
        </>
    );
}


const mapStateToProps = (state) => {
    const { GalleryReducer } = state;
    const { galleryAllData } = GalleryReducer;
    return {
        galleryAllData: GalleryReducer.galleryAllData,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        galleryAllDataAPI: (data) => dispatch(galleryAllDataAPI(userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GallaryGrid);