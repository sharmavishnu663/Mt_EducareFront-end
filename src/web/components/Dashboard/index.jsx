import React from "react";
import { Link } from "react-router-dom";
import Connect from "./Connect"
import Courses from "./Courses";
import DemoVideos from "./Demo-vedios";
import Feedback from "./Feedback";
import Offerings from "./Offerings";
import TopperDetails from "./Toppers";
import WhyMtEducare from "./WhyMTEducare";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Form, Input } from "antd";


function Dashboard() {
    const homeHeroCarousel = {
        loop: true,
        items: 1,
        animateIn: "animate__zoomIn",
        animateOut: "animate__zoomOut",
        autoplayTimeout: 5000,
        autoplay: true,
    };

    const onFinish = (event) => {
        const data = {
            // name: name,
            // mobile: mobile,
            // email: email,
            // category: category,
            // city: city,
            // board: board,
            // standard: standard,
            // demo_time: demoTime
        };
    };
    return (
        <>
            {/* BANNER  */}
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">



                            <div id="banner-main" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#banner-main" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#banner-main" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#banner-main" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>

                                <div className="carousel-inner">
                                    <div className="carousel-item banner bg-light-orange active" data-bs-interval="10000">

                                        <div className="row">
                                            <div className="col-md-7 col-sm-12">
                                                <div className="caption">
                                                    <h2><span className="text-orange">30+ Years</span> of legacy with Sterling Results</h2>
                                                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
                                                </div>
                                            </div>

                                            <div className="col-md-5 col-sm-12 sub-slider">

                                                <div className="top-students top-students-a">
                                                    <div className="students">
                                                        <div className="detail">
                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-a.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                                                <p className="name mb-2">Priyanka Shah</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>

                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-b.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                                                <p className="name mb-2">Nayan Kumar</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="students">
                                                        <div className="detail">
                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-b.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                                                <p className="name mb-2">Nayan Kumar</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>

                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-a.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                                                <p className="name mb-2">Priyanka Shah</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="students">
                                                        <div className="detail">
                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-a.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                                                <p className="name mb-2">Priyanka Shah</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>

                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-b.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                                                <p className="name mb-2">Nayan Kumar</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="carousel-item banner bg-light-blue" data-bs-interval="10000">

                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="caption">
                                                    <h2><span className="text-orange">30+ Years</span> of legacy with Sterling Results</h2>
                                                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
                                                </div>
                                            </div>

                                            <div className="col-md-5 sub-slider">

                                                <div className="top-students top-students-b">
                                                    <div className="students">
                                                        <div className="detail">
                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-a.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                                                <p className="name mb-2">Priyanka Shah</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>

                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-b.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                                                <p className="name mb-2">Nayan Kumar</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="students">
                                                        <div className="detail">
                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-b.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                                                <p className="name mb-2">Nayan Kumar</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>

                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-a.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                                                <p className="name mb-2">Priyanka Shah</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="students">
                                                        <div className="detail">
                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-a.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                                                <p className="name mb-2">Priyanka Shah</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>

                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-b.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                                                <p className="name mb-2">Nayan Kumar</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* --- top-students ---- */}
                                            </div>
                                        </div>
                                        {/* -- sub-slider -- */}

                                    </div>

                                    <div className="carousel-item banner bg-light-orange" data-bs-interval="10000">

                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="caption">
                                                    <h2><span className="text-orange">30+ Years</span> of legacy with Sterling Results</h2>
                                                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>
                                                </div>
                                            </div>

                                            <div className="col-md-5 sub-slider">

                                                <div className="top-students top-students-c">
                                                    <div className="students">
                                                        <div className="detail">
                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-a.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                                                <p className="name mb-2">Priyanka Shah</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>

                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-b.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                                                <p className="name mb-2">Nayan Kumar</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="students">
                                                        <div className="detail">
                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-b.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                                                <p className="name mb-2">Nayan Kumar</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>

                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-a.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                                                <p className="name mb-2">Priyanka Shah</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="students">
                                                        <div className="detail">
                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-a.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">98.8%</h3>
                                                                <p className="name mb-2">Priyanka Shah</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>

                                                            <div className="student text-center">
                                                                <img src="../assets/imgs/photo-student-b.png" alt="student-photo" className="photograph" />
                                                                <h3 className="percentage text-blue mt-3">95.8%</h3>
                                                                <p className="name mb-2">Nayan Kumar</p>
                                                                <p className="rank-year">All India Topper - CBSE 2021</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* -- top-students -- */}
                                            </div>
                                        </div>
                                        {/* -- sub-slider -- */}
                                    </div>
                                </div>
                            </div>
                            {/* -- banner ends here -- */}

                            <Form labelCol={{
                                span: 8,
                            }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                onFinish={onFinish}
                            >
                                <div className="floating-form in-banner">
                                    <div className="form-controls">
                                        <Form.Item
                                            label="Category"
                                            name="category"
                                            className="form-label"
                                            rules={[{ required: true, message: 'Please select your category!' }]}>
                                            <select name="course" id="course" required>
                                                <option value="Program of UPSC">Program of UPSC</option>
                                                <option value="Program of IPS">Program of IPS</option>
                                            </select>
                                        </Form.Item>
                                    </div>

                                    <div className="form-controls">
                                        <Form.Item
                                            label="Baord"
                                            name="board"
                                            className="form-label"
                                            rules={[{ required: true, message: 'Please select your board!' }]}>
                                            <select name="board" id="board">
                                                <option value="10th CBSE">10th CBSE</option>
                                                <option value="12th CBSE">12th CBSE</option>
                                            </select>
                                        </Form.Item>
                                    </div>

                                    <div className="form-controls">
                                        <Form.Item
                                            label="City"
                                            name="city"
                                            className="form-label"
                                            rules={[{ required: true, message: 'Please select your city!' }]}>
                                            <select name="course" id="course">
                                                <option value="Delhi">Delhi</option>
                                                <option value="Noida">Sector 2</option>
                                            </select>
                                        </Form.Item>
                                    </div>

                                    <div className="form-controls">
                                        <Form.Item
                                            label="Area"
                                            name="area"
                                            className="form-label"
                                            rules={[{ required: true, message: 'Please select your area!' }]}>
                                            <select name="are" id="area" required>
                                                <option value="Greater Kailash">Greater Kailash</option>
                                                <option value="South Extn.">South Extn.</option>
                                            </select>
                                        </Form.Item>
                                    </div>

                                    <div className="form-controls">
                                        <button className="btn btn-primary btn-submit" type="submit">Submit</button>
                                    </div>
                                </div>
                                {/* -- floating-form -- */}
                                <div className="shadow"></div>

                            </Form>
                        </div>
                    </div>
                </div>
            </header>


            {/* ACHIEVEMENTS  */}
            <section>
                <div className="container records">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="achivements">
                                Our <br />
                                <span className="text-orange">30+ years</span> of achievements
                            </h3>
                        </div>

                        <div className="col-md-4">
                            <div className="record-grid">
                                <div className="students row-span bg-g-orange">
                                    <span className="record">100k+</span>
                                    <span className="label">Students</span>
                                </div>

                                <div className="faculties bg-light-blue">
                                    <span className="record text-g-blue">400+</span>
                                    <span className="label text-g-blue">Faculties</span>
                                </div>

                                <div className="schools bg-light-orange">
                                    <span className="record text-g-orange">200+</span>
                                    <span className="label text-g-orange">Schools</span>
                                </div>

                                <div className="institutes bg-light-blue">
                                    <span className="record text-g-blue">400+</span>
                                    <span className="label text-g-blue">Institutes</span>
                                </div>

                                <div className="colleges bg-light-orange">
                                    <span className="record text-g-orange">100+</span>
                                    <span className="label text-g-orange">Colleges</span>
                                </div>
                            </div>
                            {/* RECORDS ENDS HERE */}
                        </div>

                        {/* APP LINK TO DOWNLOAD */}
                        <div className="col-md-4">
                            <h4>Robomate+ is now Available Download it for Free</h4>
                            <div className="download-app">
                                <a
                                    href="https://apps.apple.com/in/app/robomate-std-8-12-iit-neet-ca/id1133076165"
                                    target="_blank"
                                >
                                    <img src="../assets/imgs/app-store.svg" alt="App Store" />
                                </a>

                                <a
                                    href="https://play.google.com/store/apps/details?id=com.mteducare.mtrobomateplus"
                                    target="_blank"
                                >
                                    <img src="../assets/imgs/google-play.svg" alt="Google Play" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* APP LINK ends here */}
            </section>

            {/* COURSES */}
            <section class="cards" id="courses">

                <div class="container">
                    <div class="row">
                        <div class="col-md-12 bg-light-blue box-radius">

                            <h3 class="headline text-center mb-3"><span class="text-blue">Courses</span> we offer</h3>
                            <p class="sub-headline text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat montes, pharetra cras odio nec scelerisque viverra.</p>

                            <div class="article-header">
                                <div class="pills">
                                    <Link to="/courses/competativeExams" class="active">Competative Exams</Link>
                                    <Link to="/courses/college">Colleges</Link>
                                    <Link to="/courses/school">School</Link>
                                    <a href="#">View All</a>
                                    {/* <!-- mobile only --> */}
                                </div>

                                <div class="view-all">
                                    <a href="#">View All</a>
                                </div>
                                {/* <!-- desktop only --> */}
                            </div>
                            {/* <!-- article-header --> */}

                            <div class="explore-lakshya bg-light-orange">
                                <div>
                                    <img src="../assets/imgs/lakshya-logo.png" alt="lakshya-logo" />
                                    <p>Lakshay is our partner which provides the higher secondary education science courses for competitive exams.</p>
                                </div>
                                <a href="#" class="btn btn-lg">Explore Lakshya</a>
                            </div>
                            {/* <!-- explore-lakshya --> */}

                            <div class="articles our-courses">

                                <div class="article">
                                    <div class="thumbnail">
                                        <img src="../assets/imgs/article1.png" alt="image" />
                                    </div>

                                    <div class="detail">
                                        <h5>Best IIT JEE Coaching</h5>
                                        <div class="description">
                                            <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                                        </div>
                                        <div class="tag-link">
                                            <div class="tag">IIT JEE</div>
                                            <a href="#" class="btn btn-sm">
                                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- article --> */}

                                <div class="article">
                                    <div class="thumbnail">
                                        <img src="../assets/imgs/article2.png" alt="image" />
                                    </div>

                                    <div class="detail">
                                        <h5>Top NEET Coaching</h5>
                                        <div class="description">
                                            <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                                        </div>
                                        <div class="tag-link">
                                            <div class="tag">NEET</div>
                                            <a href="#" class="btn btn-sm">
                                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- article --> */}

                                <div class="article">
                                    <div class="thumbnail">
                                        <img src="../assets/imgs/article3.png" alt="image" />
                                    </div>

                                    <div class="detail">
                                        <h5>NTSE Coaching</h5>
                                        <div class="description">
                                            <p>National Talent Search Examination  is one of the most recognized examinations in India which is conducted by NCERT.</p>
                                        </div>
                                        <div class="tag-link">
                                            <div class="tag">NTSE</div>
                                            <a href="#" class="btn btn-sm">
                                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- article --> */}

                                <div class="article">
                                    <div class="thumbnail">
                                        <img src="../assets/imgs/article1.png" alt="image" />
                                    </div>

                                    <div class="detail">
                                        <h5>Best IIT JEE Coaching</h5>
                                        <div class="description">
                                            <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                                        </div>
                                        <div class="tag-link">
                                            <div class="tag">IIT JEE</div>
                                            <a href="#" class="btn btn-sm">
                                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- article --> */}

                                <div class="article">
                                    <div class="thumbnail">
                                        <img src="../assets/imgs/article2.png" alt="image" />
                                    </div>

                                    <div class="detail">
                                        <h5>Top NEET Coaching</h5>
                                        <div class="description">
                                            <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                                        </div>
                                        <div class="tag-link">
                                            <div class="tag">NEET</div>
                                            <a href="#" class="btn btn-sm">
                                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- article --> */}

                                <div class="article">
                                    <div class="thumbnail">
                                        <img src="../assets/imgs/article3.png" alt="image" />
                                    </div>

                                    <div class="detail">
                                        <h5>NTSE Coaching</h5>
                                        <div class="description">
                                            <p>National Talent Search Examination  is one of the most recognized examinations in India which is conducted by NCERT.</p>
                                        </div>
                                        <div class="tag-link">
                                            <div class="tag">NTSE</div>
                                            <a href="#" class="btn btn-sm">
                                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- article --> */}

                                <div class="article">
                                    <div class="thumbnail">
                                        <img src="../assets/imgs/article1.png" alt="image" />
                                    </div>

                                    <div class="detail">
                                        <h5>Best IIT JEE Coaching</h5>
                                        <div class="description">
                                            <p>Lakshya offers unparalleled IIT JEE coaching in India which results in producing top rankers in entrance exams who go on to become world-class engineers and technologists.</p>
                                        </div>
                                        <div class="tag-link">
                                            <div class="tag">IIT JEE</div>
                                            <a href="#" class="btn btn-sm">
                                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- article --> */}

                                <div class="article">
                                    <div class="thumbnail">
                                        <img src="../assets/imgs/article2.png" alt="image" />
                                    </div>

                                    <div class="detail">
                                        <h5>Top NEET Coaching</h5>
                                        <div class="description">
                                            <p>NEET is the most important exam for medical aspirants, as it is required for them to join the best medical college in the country.</p>
                                        </div>
                                        <div class="tag-link">
                                            <div class="tag">NEET</div>
                                            <a href="#" class="btn btn-sm">
                                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- article --> */}

                                <div class="article">
                                    <div class="thumbnail">
                                        <img src="../assets/imgs/article3.png" alt="image" />
                                    </div>

                                    <div class="detail">
                                        <h5>NTSE Coaching</h5>
                                        <div class="description">
                                            <p>National Talent Search Examination  is one of the most recognized examinations in India which is conducted by NCERT.</p>
                                        </div>
                                        <div class="tag-link">
                                            <div class="tag">NTSE</div>
                                            <a href="#" class="btn btn-sm">
                                                <img src="../assets/imgs/icon-arrow-right.svg" alt="icon" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- article --> */}

                            </div>
                            {/* <!-- articles --> */}

                        </div>
                    </div>
                </div>

            </section>

            {/* TOPPER DETAILS */}
            <TopperDetails />

            {/* WHY MT EDUCARE? */}
            <WhyMtEducare />

            {/* DEMO VIDEOS */}
            <DemoVideos />

            {/* OFFERINGS */}
            <Offerings />

            {/* FEEDBACK */}
            <Feedback />

            {/* CONNECT */}
            <Connect />
        </>
    );
}

export default Dashboard;
