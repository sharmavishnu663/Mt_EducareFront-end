import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { awardsAPI } from "../../../redux/action/aboutUs";
import { WebRoutes } from "../../../routes";
import { parseHtml } from "../../../Utils/utils";
import Awards from "../Cards/Awards";
import OwlCarousel from "react-owl-carousel";
import { IMAGE_BASE_URL } from "../../../redux/constants";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const AwardsRecognition = ({ awardsAPI, awardsData }) => {
  useEffect(() => {
    awardsAPI();
  }, []);
  const hanldeAwardDetail = (id) => {
    localStorage.setItem("awardId", id);
  };
  const toppersConfig = {
    loop: true,
    autoplay: false,
    margin: 40,
    dots: true,
    autoplayTimeout: 4000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };
  return (
    <>
      {/* ======== Header =============== */}
      <section className="cards terms" id="privacy-policy">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">
                      <img src="../assets/imgs/icon-back.svg" alt="icon" /> Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Awards and Recognition
                  </li>
                </ol>
              </nav>

              <h4>Awards and Recognition</h4>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Header ends here ==========*/}

      {/* =========== AWARDS STARTS HERE ========= */}
      <section className="cards" id="offerings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 box-radius pt-0 awards">
              <div className="articles our-offerings mt-0">
                <OwlCarousel className="owl-theme MT-OwlDots toppersCarousel" {...toppersConfig}>
                  {awardsData.data &&
                    awardsData.data.map((item) => (
                      <div className="item">
                        <div className="article">
                          <div className="thumbnail">
                            <img src={IMAGE_BASE_URL + "" + item.image} alt="image" />
                          </div>

                          <div className="detail">
                            <h5>{item.title}</h5>
                            <div className="description">
                              <p>{parseHtml(item.description.substring(0, 100))}</p>
                            </div>
                            <div className="tag-link justify-content-end">
                              <Link to={WebRoutes.AWARD_DETAIL} onClick={(e) => hanldeAwardDetail(item.id)} className="btn btn-sm">
                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======== AWARDS ENDS HERE =============*/}
    </>
  );
};

const mapStateToProps = (state) => {
  const { AboutReducer } = state;
  const { awardsData } = AboutReducer;
  return {
    awardsData: AboutReducer.awardsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    awardsAPI: () => dispatch(awardsAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AwardsRecognition);
