import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HomePage
      <p>
        <Link to={"/view-records"}>List</Link>
      </p>
    </div>
  );
};

export default HomePage;
