import React from "react";
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/charts/chart/Chart";
import Tables from "../../components/table/Tables";
const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div class="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://i.pinimg.com/236x/65/f1/0c/65f10ca430e61cb5cc9354a416c36d27--sheikh-mohammed-blue-bloods.jpg"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Omar</h1>
                <div className="detailItem">
                  <span class="itemKey">Email:</span>
                  <span class="itemValue">omar23@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span class="itemKey">Phone:</span>
                  <span class="itemValue">+880 1618 93 5859</span>
                </div>
                <div className="detailItem">
                  <span class="itemKey">Address:</span>
                  <span class="itemValue">
                    North Adabor, Mohammadpur, Dhaka
                  </span>
                </div>
                <div className="detailItem">
                  <span class="itemKey">Country:</span>
                  <span class="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart title="User Spending (Last 6 Months)" aspect={3 / 1} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <Tables />
        </div>
      </div>
    </div>
  );
};

export default Single;
