import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Calendar.css";


function Calendar() {
  return (

    <>
    <div className="calendar">
      <div className="head_text">
        <h2>
          Github <span>Activity</span>
        </h2>
      </div>
      <div className="Graph">
        <GitHubCalendar username="alaluddin123" />
      </div>
    </div>

    <div className="head_text">
      {/* <h2>My <span>Static</span></h2> */}
    </div>

      <div className='stats'>
        {/* <img src="https://camo.githubusercontent.com/ce3459b44da161ad787eab83679a865bfb26adc6e32b32ccc4d41b9ddc8e3535/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616c616c554444494e313233267468656d653d7261646963616c26686964655f626f726465723d7472756526696e636c7564655f616c6c5f636f6d6d6974733d7472756526636f756e745f707269766174653d74727565" alt="" /> */}
        <img src="https://github-readme-stats.vercel.app/api?username=alaluddin123&show_icons=true&count_private=true&theme=chartreuse-dark&hide_border=true&bg_color=0D1117" alt="Github tropy" />
        <img src="https://camo.githubusercontent.com/25a8601e4232bc1b29b722240a3f547b82fa3f1903fda89439e28327feadaa07/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d616c616c554444494e313233267468656d653d7261646963616c26686964655f626f726465723d74727565" alt="" />
      </div>


    </>
  );
}

export default Calendar;
