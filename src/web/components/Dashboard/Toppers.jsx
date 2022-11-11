import React from "react";
const TopperDetails = ({ toppersData }) => {
  return (
    <>
      <section class="our-toppers">

        <div class="container">
          <div class="row">
            <div class="col-md-12">

              <h3>Meet our <span class="text-blue">toppers</span></h3>
              <p>Meet these shining stars who made it at the top and are proud to be called toppers of there exams.</p>

              <div class="toppers">
                {toppersData && toppersData.data && toppersData.data.map((item) =>
                  <div class="student-card bg-light-orange">
                    <div class="detail">
                      <h4 class="text-orange">{item.percentage}</h4>
                      <p class="name">{item.name}</p>
                      <p class="rank">{item.description}</p>
                    </div>

                    <img src={item.image} alt="topper" />
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default TopperDetails;
