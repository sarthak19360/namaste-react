import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">SpiceDash</div>
      <div className="nav-items">
        <ul>
          <li className="list-item">Home</li>
          <li className="list-item">About</li>
          <li className="list-item">Contact</li>
          <li className="list-item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  return (
    <div className="res-card">
      <img className="res-logo" src={props.img} alt="res-logo" />
      <h3>{props.name}</h3>
      <h4>{props.ratings}</h4>
      <h4>{props.eta}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search for Restaurants" />
        <button>Search</button>
      </div>
      <div className="res-container">
        <ResCard
          img="https://b.zmtcdn.com/data/pictures/chains/0/550/9361ee4d0e18519da526b87f81f067ae_o2_featured_v2.jpg?output-format=webp"
          name="Meghna Foods"
          ratings="4.1 stars"
          eta="38 minutes"
        />
        <ResCard
          img="https://b.zmtcdn.com/data/pictures/5/19875315/ae57acb0089db1a2505bcfb73171d623_o2_featured_v2.jpg?output-format=webp"
          name="The Pizza King"
          ratings="3.7 stars"
          eta="46 minutes"
        />
        <ResCard
          img="https://b.zmtcdn.com/data/pictures/chains/3/17953943/816872e9f1fcc43304e21a0f050f5f21_o2_featured_v2.jpg?output-format=webp"
          name="The Burger club"
          ratings="4.0 stars"
          eta="33 minutes"
        />
        <ResCard
          img="https://b.zmtcdn.com/data/pictures/8/20614928/668a18ca7f1cd30f7eab6a20c0a4ba68_o2_featured_v2.jpg?output-format=webp"
          name="Apni Rasoi"
          ratings="4.1 stars"
          eta="25 minutes"
        />
        <ResCard
          img="https://b.zmtcdn.com/data/pictures/chains/3/18715763/ea7dd97891e440de2d8a0371fdbaf5f0_o2_featured_v2.jpg?output-format=webp"
          name="Parantha Express"
          ratings="4.2 stars"
          eta="29 minutes"
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return <></>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
