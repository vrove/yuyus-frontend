import React from 'react';
import {Link} from "react-router-dom";
import TopCategoriesCard from './TopCategoriesCard';

const TopCategories = () => {
  return (
    <>
    <section className="topCat background">
      <div className="container">
        <div className="heading d_flex">
          <div className="heading-left row f_flex">
            <i className="fa fa-border-all"></i>
            <h2>Top Categories</h2>           
          </div>
          <div className="heading-right row">
            <span><Link to="/all-products">View All</Link></span>
            <i className="fa fa-caret-right"></i>
          </div>
        </div>
        <TopCategoriesCard />
      </div>
    </section>
    </>
  )
}

export default TopCategories