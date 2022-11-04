import React, { useState } from "react";
import ReactDOM from 'react-dom';
import VideoCard from "../Cards/VideoCard";



function DemoVideos() {

 
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
                  <a href="#" className="active">
                    VIII to X
                  </a>
                  <a href="#">XI and XII Commerce</a>
                  <a href="#">XI and XII Science</a>
                  <a href="#">IIT-JEE</a>
                  <a href="#">CA</a>
                  <a href="#">View All</a>
                </div>

                <div className="view-all">
                  <a href="#">View All</a>
                </div>
              </div>

              <div className="articles">
                <VideoCard />
                
                <VideoCard />

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
