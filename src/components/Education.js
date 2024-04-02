import { SlCalender } from "react-icons/sl";

function Education() {
  return (
    <div>
      <section className="education" id="education">
        <h2 className="section-title">Education</h2>
        <span className="section-subtitle">My personal journey</span>

        <div className="education-container container">
          <div className="education-section">
            <div className="education-content">
              <div className="education-data">
                <div>
                  <h3 className="education-title">B.Tech Computer Science and Engineering</h3>
                  <span className="education-subtitle">
                    Maharashtra Institute of Technology ,Aurangabad
                  </span>
                  <div className="education-calender">
                    <div><SlCalender /><span> 2020-2024</span></div>
                    <span className="education-grade">9.02 CGPA</span>
                  </div>
                </div>

                <div>
                  <span className="education-rounder"></span>
                  <span className="education-line"></span>
                </div>
              </div>

              <div className="education-data">
                <div></div>

                <div>
                  <span className="education-rounder"></span>
                  <span className="education-line"></span>
                </div>

                <div>
                  <h3 className="education-title">Intermediate (HSC)</h3>
                  <span className="education-subtitle">
                  Shri Rameshwar College ,Bhokardan
                  </span>
                  <div className="education-calender">
                    <div><SlCalender /><span> 2019-2020</span></div>
                    <span className="education-grade">80.00%</span>
                  </div>
                </div>
                
              </div>

              <div className="education-data">
                <div>
                  <h3 className="education-title">SSC</h3>
                  <span className="education-subtitle">
                    Sharad Pawar Highschool, Walsa wadala
                  </span>
                  <div className="education-calender">
                    <div><SlCalender /><span> 2017-2018</span></div>
                    <span className="education-grade">81.00 %</span>
                  </div>
                </div>

                <div>
                  <span className="education-rounder"></span>
                </div>
              </div>
    
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;
