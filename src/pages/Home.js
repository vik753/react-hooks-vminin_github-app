import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = (props) => {
  const cards = new Array(14).fill("").map((_, i) => i);
  return (
    <React.Fragment>
      <Search />
      <div className="row">
        {cards.map((card) => (
          <div className="col-sm-4 mb-4" key={card}>
            <Card />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Home;
