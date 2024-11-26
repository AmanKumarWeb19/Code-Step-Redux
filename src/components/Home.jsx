import React from "react";

const Home = (props) => {
  return (
    <>
      <div>
        <div className="add-to-cart">
          <img
            src="https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg"
            alt="cart image"
          />
        </div>
        <h1>Home Component</h1>

        <div className="cart-Wrapper">
          <div className="img-Wrapper item">
            <img
              src="https://play-lh.googleusercontent.com/lDan3RWqduNy-buXc-KVXdOV2V9niaHXW38mK2lNEauCiyLnHl2WbqD3NZSXbL0qJww=w526-h296-rw"
              alt="phone-image"
            />
          </div>
          <div className="text-Wrapper item">
            <span>I-Phone</span>
            <span>Price:- $1000</span>
          </div>
          <div className="btn-Wrapper item">
            <button
              onClick={() =>
                props.addToCartHandler({ price: 1000, name: "I Phone 11" })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
