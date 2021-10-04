import React, { useEffect } from "react";

import $ from "jquery";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";
import Footer from "./Footer/Footer";
import Test from "./test/Test";

const Home = () => {
  useEffect(() => {
    $(".how-to-join-btn").click(function () {
      $("html,body").animate(
        {
          scrollTop: $("#how_to_join").offset().top - 100,
        },
        "slow"
      );
    });
    $(".subscribe-btn").click(function () {
      $("html,body").animate(
        {
          scrollTop: $(".subscribe-title").offset().top,
        },
        "slow"
      );
    });
    $(".sec2-btn").click(function () {
      $("html,body").animate(
        {
          scrollTop: $("#contact-us").offset().top,
        },
        "slow"
      );
    });
  });

  return (
    <div className="home-cont">
      {/* <Test /> */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default Home;
