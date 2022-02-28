import React from "react";

function HelloBootstrap() {
  return (
    <div className="container">
      <div className="jumbotron bg-primary">
      <h1 className="display-1">pizza wings and bread</h1>
        <h1 className="display-4">gluten free and soy free options</h1>
        <div className="row justify-content-center">
          <ul>
          <li><button className="btn btn-success btn-lg">Order Now</button></li>
          <li><button className="btn btn-secondary btn-lg">View Menu</button></li>
          </ul>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
      <div className="card mb-4">
        <div className="card-header">
          <h3>Card title</h3>
        </div>
        <div className="card-body">
          <p className="card-text">Card content</p>
        </div>
      </div>
    </div>
  );
}

export default HelloBootstrap;
