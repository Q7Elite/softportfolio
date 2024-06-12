import React from "react";
import BlogCard from "./helper/BlogCard";

const Blog = () => {
  return (
    <div id="blog" className="pt-[5rem] pb-[3rem] bg-black">
      <div className="text-center">
        <p className="heading__mini">My Blog</p>
        <h1 className="heading__primary">
          My Latest <span className="text-yellow-300">Blog</span> and news
        </h1>
      </div>
      <div
        className="w-[80%] mx-auto pt-[3rem] md:pt-[5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      items-center gap-[2rem]"
      >
        <div data-aos="zoom-in" data-aos-anchor-placement="top-bottom">
          <BlogCard
            title="Fullstack Developer Roadmap"
            comment="4"
            date="08 June 2024"
            image="/images/sp7.jpg"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="200"
        >
          <BlogCard
            title="Happiness Ingredients"
            comment="7"
            date="10 June 2024"
            image="/images/sp10.jpg"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-delay="400"
        >
          <BlogCard
            title="Discipline Factor"
            comment="20"
            date="23 June 2024"
            image="/images/sp9.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
