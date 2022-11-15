import React, { useState } from "react";
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import VideoCard from "../Cards/VideoCard";
import OwlCarousel from "react-owl-carousel";
import { connect } from "react-redux";
import { demoVideoListApi, demoVideoDetailApi } from "../../../redux/action/demoVideo";
import { parseHtml } from "../../../Utils/utils";



const DemoVideos = ({ demoVideoListApi, demoListData, demoVideoDetailApi, videoDetailData }) => {
  const [activeTab, setActiveTab] = useState();
  const [activeTabDetail, setActiveTabDetail] = useState();
  console.log(videoDetailData);
  useEffect(() => {
    demoVideoListApi();
  }, []);
  useEffect(() => {
    demoVideoDetailApi(activeTabDetail)
  }, [activeTabDetail]);

  const demoVideoConfig = {
    loop: true,
    autoplay: false,
    margin: 0,
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
        items: 3,
      },
    },
  };

  return (
    <>
      <section className="cards" id="demo-videos">
        <div className="container">
          <div className="row">
            <div className="col-md-12 box-radius">
              <h3 className="headline text-center mb-3">
                Watch our <span className="text-blue">demo videos</span>
              </h3>
              <p className="sub-headline text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat montes, pharetra cras odio nec scelerisque viverra.
              </p>
            </div>

            <div className="col-md-12">
              <ul className="nav nav-tabs MT_Tab" id="MT_Tab" role="tablist">
                {demoListData && demoListData.data && demoListData.data.map((item) =>

                  <li className="nav-item" role="presentation">
                    <button className={`${item && item.id == activeTab ? "nav-link active" : "nav-link"}`} id={`Edu-tab-${activeTab}`} data-bs-toggle="tab" data-bs-target={`#MT-tabPane-${activeTab}`} type="button" role="tab" aria-controls={`#MT-tabPane-${activeTab}`} aria-selected="true" onClick={(e) => { setActiveTab(item && item.id); setActiveTabDetail(item && item.class_id) }}>
                      {item && item.class_category && item.class_category.name}
                    </button>
                  </li>

                )}
              </ul>
              <div className="tab-content MT_TabContent" id="MT_TabContent">
                <div className="tab-pane fade show active" id={`MT-tabPane-${activeTab}`} role="tabpanel" aria-labelledby={`Edu-tab${activeTab}`} tabindex="0">
                  <OwlCarousel className="owl-theme MT-OwlDots" {...demoVideoConfig}>
                    {videoDetailData && videoDetailData.data && videoDetailData.data.map((item) =>
                      <div className="item">
                        <div className="articles">
                          <div className="article">
                            <div className="thumbnail">
                              <a href={item && item.video_url} data-fancybox>
                                <img src={item && item.video_url} alt="image" />
                              </a>
                            </div>

                            <div className="detail">
                              <h5>{item && item.title}</h5>
                              <div className="description">
                                <p>
                                  {item && parseHtml(item.description.substring(0, 300))}
                                </p>
                              </div>
                              <div className="tag-link flex-none">
                                <div className="tag blue bg-light-blue">{item && item.tag_name}</div>
                                <div className="tag bg-light-orange">{item && item.tag_name}</div>
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
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  const { DemoVideoReducer } = state;
  const { demoListData, videoDetailData } = DemoVideoReducer;
  return {
    demoListData: DemoVideoReducer.demoListData,
    videoDetailData: DemoVideoReducer.videoDetailData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    demoVideoListApi: () => dispatch(demoVideoListApi()),
    demoVideoDetailApi: (data) => dispatch(demoVideoDetailApi(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoVideos);
