import React from "react";
import { Link } from "react-router-dom";
import Connect from "../Dashboard/Connect";
import CourseCard from "../Cards/CourseCard";
import DemoVideos from "../Dashboard/Demo-vedios";
import Feedback from "../Dashboard/Feedback";
import TopperDetails from "../Dashboard/Toppers";

function College() {
  return (
    <>
      <section className="cards" id="courses">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-light-blue box-radius">
              <h3 className="headline text-center mb-3">
                <span className="text-blue">Courses</span> we offer
              </h3>
              <p className="sub-headline text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Volutpat montes, pharetra cras odio nec scelerisque viverra.
              </p>

              <div className="article-header with-search">
                <div className="pills">
                   <Link to = "/courses/competativeExams"  >
                    Competative Exams
                    </Link>
                  <Link to = "/courses/college" className="active">Colleges</Link>
                  <Link to = "/courses/school" >School</Link>
                </div>

                <form action="">
                  <input
                    type="text"
                    className="search"
                    placeholder="Search Course"
                  />
                </form>
              </div>

              <div className="explore-lakshya bg-light-orange">
                <div>
                  <img
                    src="../assets/imgs/mahesh-tutorials.png"
                    alt="lakshya-logo"
                  />
                </div>
                <div>
                  <a href="http://commerce.maheshtutorials.com/"className="btn btn-lg mr-3">
                    Explore Commerce
                  </a>
                  &nbsp;
                  <a href="http://science.maheshtutorials.com/" className="btn btn-lg">
                    Explore Science
                  </a>
                </div>
              </div>

              <div className="articles">
                {/*================ COURSE CARDS STARTS ================== */}
                <CourseCard />

                <CourseCard />

                <CourseCard />

                <CourseCard />

                <CourseCard />
                {/* ================== COURSE CARDS ENDS ================= */}
              </div>
            </div>
          </div>
        </div>
      </section>
        
        {/* ======================== OUR TOPPERS STARTS =================== */}
        <TopperDetails />
      {/* ================ OUR TOPPERS ENDS ======================= */}

       {/* ===================== DEMO VIDEO SECTION STARTS ==================== */}
     <DemoVideos />

     {/* ========================== DEMO VIDEO SECTION ENDS =================*/}
     
     {/* ========================== FEEDBACK STARTS HERE ====================*/}
     <Feedback />
     {/* ========================== FEEDBACK ENDS HERE ====================== */}

    {/* =========================== CONNECT SECTION STARTS HERE =============*/}
    <Connect/>
    {/* =========================== CONNECT SECTION ENDS HERE ================ */}

    </>
  );
}

export default College;
