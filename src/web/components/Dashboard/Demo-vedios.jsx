import React, { useState } from "react";
import { useEffect } from "react";
import ReactDOM from 'react-dom';
import VideoCard from "../Cards/VideoCard";



const DemoVideos = ({ demoListData, demoVideoDetailApi, videoDetailData }) => {
  const [activeTab, setActiveTab] = useState();
  const [activeTabDetail, setActiveTabDetail] = useState();

  useEffect(() => {
    demoVideoDetailApi(activeTabDetail)
  }, [activeTabDetail])

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

              <div className="article-header">
                <div className="pills">
                  {demoListData && demoListData.data && demoListData.data.map((item) =>

                    <a href="#" className={`${item && item.id == activeTab ? "active" : ""}`} onClick={(e) => { setActiveTab(item && item.id); setActiveTabDetail(item && item.class_id) }}>
                      {item && item.class_category && item.class_category.name}
                    </a>
                  )}
                </div>
              </div>

              <div className="articles">
                <VideoCard />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DemoVideos;
