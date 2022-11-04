import React from "react";
import TopperBlue from "../Cards/Topper-BlueCard";
import TopperOrange from "../Cards/Topper-OrangeCard";
function TopperDetails() {
  return (
    <>
      <section class="our-toppers">

        <div class="container">
          <div class="row">
            <div class="col-md-12">

              <h3>Meet our <span class="text-blue">toppers</span></h3>
              <p>Meet these shining stars who made it at the top and are proud to be called toppers of there exams.</p>

              <div class="toppers">

                <TopperOrange />

                <TopperBlue />

                <TopperOrange />

                <TopperBlue />

                <TopperOrange />

                <TopperBlue />
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default TopperDetails;
