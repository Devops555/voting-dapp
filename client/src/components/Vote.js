import React from "react";
import "./Vote.css";

const Vote = () => {
  const candidates = (
    <div className="vote text-center">
      <div className="container">
        <h2 className="text-center">Vote</h2>
        <p className="description text-center">
          Select your favorite candidate!
        </p>
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top"
                src="../images/man.jpg"
                alt="man1"
              />
              <div className="card-body">
                <h4 className="card-title">Candidate 1 </h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img
                className="card-img-top"
                src="../images/man.jpg"
                alt="man2"
              />
              <div className="card-body">
                <h4 className="card-title">Candidate 1 </h4>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <img className="card-img-top" src="../images/man.jpg" alt="cup" />
              <div className="card-body">
                <h4 className="card-title">Candidate 3</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <div>{candidates}</div>
      <div className="vote-form">
        <form>
          <select id="dropdown">
            <option>Select Your favorite candidate</option>
            <option value="0">None</option>
            <option value="1">Candidate One</option>
            <option value="2">Candidate Two</option>
            <option value="3">CandiddateThree</option>
          </select>
        </form>
      </div>
      <div className="buttons-app">
        <button className="gen-btn" type="submit" o>
          Vote
        </button>
      </div>
    </React.Fragment>
  );
};

export default Vote;
