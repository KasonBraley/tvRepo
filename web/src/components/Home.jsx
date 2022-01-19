import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <img src="../../../images/logo-final-300.png" style={{paddingTop: "50px"}} />
        <section className="welcome">Welcome to tvRepo!</section>

        <section className="welcomedesc">
          <p>
            You want to find and watch the very best in television
            entertainment. tvRepo is here to help!
          </p>
          <p>We started tvRepo to solve what seemed to be a universal issue:</p>
          <p>
            Remembering all the great shows you&apos;re watching!
          </p>
        </section>
      </div>
    );
  }
}

export default Home;
