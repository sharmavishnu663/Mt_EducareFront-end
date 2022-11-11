import React, { Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WebRoutes } from "./routes";
import ScrollToTop from "./web/components/ScrollToTop";
import Dashboard from "./web/components/Dashboard";
import CompetativeExam from "./web/components/Courses/CompetativeExams";
import College from "./web/components/Courses/Colleges";
import School from "./web/components/Courses/School";
import Center from "./web/components/AboutUs/OurCenters";
import About from "./web/components/AboutUs/About";
import BoardOfDirectors from "./web/components/AboutUs/BoardOfDirectors";
import KeyManagement from "./web/components/AboutUs/KeyManagement";
import BoardCommittee from "./web/components/AboutUs/BoardCommittee";
import AwardsRecognition from "./web/components/AboutUs/AwardsRecognition";
import CorporateGovernance from "./web/components/Investor_Relations/Corporate-governance";
import InvestorPresentations from "./web/components/Investor_Relations/Investor-presentations";
import PressRelease from "./web/components/Investor_Relations/Press-releases";
import PostalBallot from "./web/components/Investor_Relations/Postal-ballot";
import StatuoryCommunication from "./web/components/Investor_Relations/Statuory-communications";
import ShareholdingPattern from "./web/components/Investor_Relations/Shareholding-pattern";
import Reports from "./web/components/Investor_Relations/Reports";
import Csr from "./web/components/OtherPages/Csr";
import Media from "./web/components/OtherPages/Media";
import VideoGallary from "./web/components/Gallary/Video-gallary";
import PhotoGallary from "./web/components/Gallary/Photo-gallary";
import GallaryGrid from "./web/components/Gallary/Gallary-grid";
import TermService from "./web/components/Term_Policies/Term-of-services";
import PrivacyPolicy from "./web/components/Term_Policies/Privacy-Policy";
import Disclaimer from "./web/components/Term_Policies/Disclaimer";
import Career from "./web/components/OtherPages/Career";
import ResearchReport from "./web/components/Investor_Relations/ResearchReport";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CareerDetails from "./web/components/OtherPages/CareerDetails";
import Enquiry from "./web/components/modal/Enquiry";
import AwardDetails from "./web/components/AboutUs/AwardDetails";
import BaseDashboard from "./web/components";



function App() {

  useEffect(() => {
    // ========== Easy selector helper function ==========
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    // ========== Easy event listener function ==========
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    // ========== Easy on scroll event listener ==========
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    // ========== Scrolls to an element with header offset ==========
    const scrollto = (el) => {
      let header = select("#header");
      let offset = header.offsetHeight;
      if (!header.classList.contains("header-scrolled")) {
        offset -= 16;
      }
      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    // ========== Toggle .header-scrolled class to #header when page is scrolled ==========
    let selectHeader = select("#header");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
        } else {
          selectHeader.classList.remove("header-scrolled");
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    // ========== Mobile nav toggle ==========
    on("click", ".mobile-nav-toggle", function (e) {
      select("#navbar").classList.toggle("navbar-mobile");
      this.classList.toggle("icofont-navigation-menu");
      this.classList.toggle("icofont-close");
    });

    // ========== Mobile nav dropdowns activate ==========
    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );

    // ========== Scroll with ofset on page load with hash links in the url ==========
    window.addEventListener("load", () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });
  });

  return (
    <div className="App">
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <BaseDashboard />
              </Suspense>
            }
          >
            <Route path={WebRoutes.DASHBOARD} element={<Dashboard />} />

            <Route path={WebRoutes.COMPETATIVE_EXAM} element={<CompetativeExam />} />

            <Route path={WebRoutes.COLLEGE} element={<College />} />

            <Route path={WebRoutes.SCHOOL} element={<School />} />

            <Route path={WebRoutes.CENTERS} element={<Center />} />

            <Route path={WebRoutes.ABOUT_US} element={<About />} />

            <Route path={WebRoutes.BOARD_DIRECTORS} element={<BoardOfDirectors />} />

            <Route path={WebRoutes.KEY_MANAGEMENT} element={<KeyManagement />} />

            <Route path={WebRoutes.BOARD_COMMITTEE} element={<BoardCommittee />} />

            <Route path={WebRoutes.AWARD_RECOGNITION} element={<AwardsRecognition />} />

            <Route path={WebRoutes.AWARD_DETAIL} element={<AwardDetails />} />

            <Route path={WebRoutes.CORPORATE_GOVERNANCE} element={<CorporateGovernance />} />

            <Route path={WebRoutes.INVESTOR_PRESENTATIONS} element={<InvestorPresentations />} />

            <Route path={WebRoutes.PRESS_RELEASE} element={<PressRelease />} />

            <Route path={WebRoutes.POSTAL_BALLOT} element={<PostalBallot />} />

            <Route path={WebRoutes.STATUTORY_COMMUNICATION} element={<StatuoryCommunication />} />

            <Route path={WebRoutes.SHAREHOLDING_PATTERN} element={<ShareholdingPattern />} />

            <Route path={WebRoutes.REPORTS} element={<Reports />} />

            <Route path={WebRoutes.RESEARCH_REPORT} element={<ResearchReport />} />

            <Route path={WebRoutes.PHOTO_GALLARY} element={<PhotoGallary />} />

            <Route path={WebRoutes.VIDEO_GALLARY} element={<VideoGallary />} />

            <Route path={`${WebRoutes.GALLARY_GRID}:id`} element={<GallaryGrid />} />

            <Route path={WebRoutes.CSR} element={<Csr />} />

            <Route path={WebRoutes.MEDIA} element={<Media />} />

            <Route path={WebRoutes.TERMS_SERVICE} element={<TermService />} />

            <Route path={WebRoutes.PRIVACY_POLICY} element={<PrivacyPolicy />} />

            <Route path={WebRoutes.DISCLAIMER} element={<Disclaimer />} />

            <Route path={WebRoutes.CAREER} element={<Career />} />
            <Route path={`${WebRoutes.CAREER_DETAILS}:id`} element={<CareerDetails />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </div >
  );
}

export default App;
