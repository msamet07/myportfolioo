import React from "react";

const BackEnd: React.FC = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Development</h3>
      <div className="skills__box">    
        <div className="skills__group">
      
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">C#</h3>
              <span className="skills__level">Elementary</span>
            </div>
          </div>
         
         {  <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">.NetCore</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div> }

          {<div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">EntityFramework</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div> }
          { <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MicroServices</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div> }
        </div>
       
        <div className="skills__group">
         { <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">RestApi</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div> }
          { <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div> }
          { <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Redis</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div> }
          { <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div> }
          { <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div> }
          { <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">SQLLite</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div> }
          { <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div> }
        </div>
      </div>
    </div>
  );
};

export default BackEnd;
