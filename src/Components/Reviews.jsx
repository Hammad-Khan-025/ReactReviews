import React, { useState } from "react";
import ReviewData from "./ReviewData.json";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Reviews() {
  const [people, setPeople] = useState(ReviewData);
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const [readMore, setReadMore] = useState(false);

  const prevBtn = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) {
        newIndex = people.length - 1; // Wrap to the last element
      }
      return newIndex;
    });
  };

  const nextBtn = () => {
    setIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex >= people.length) {
        newIndex = 0; // Wrap to the first element
      }
      return newIndex;
    });
  };

  const toggle = () => {
    setReadMore((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 min-h-screen tracking-wider py-5">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl sm:text-3xl font-semibold">Our Reviews</h3>
        <div className="border-b-4 w-1/2 border-blue-500 my-3 rounded"></div>
      </div>

      <div className="shadow-lg p-8 bg-white rounded-md mt-4 w-80 sm:w-[500px] mx-3">
        <div className="flex flex-col justify-center items-center relative">
          <img
            src={`${process.env.PUBLIC_URL}/images/${image}`}
            className="rounded-full h-40 w-40 object-cover border-r-8 border-r-blue-500"
            alt="profile pic"
          />
          <span className="absolute top-0 left-14 sm:left-36 bg-blue-500 p-3 text-white rounded-full">
            <FaQuoteRight />
          </span>
          <h3 className="mt-3 text-2xl font-medium">{name}</h3>
          <p className="text-blue-500 uppercase mt-2">{job}</p>
          <p className="py-5 text-gray-500 text-justify">
            {readMore ? text : `${text.substring(0, 130)}....`}
            <button
              className="text-blue-500 font-semibold focus:ring-1 px-1 rounded-lg"
              onClick={toggle}
            >
              {readMore ? "Show Less" : "Read More"}
            </button>
          </p>

          <div className="flex gap-5">
            <button
              className="text-blue-500 border-blue-500 border rounded hover:bg-blue-500 hover:text-white p-2 active:bg-blue-900 transition-colors"
              onClick={prevBtn}
            >
              <FaChevronLeft />
            </button>
            <button
              className="text-blue-500 border-blue-500 border rounded hover:bg-blue-500 hover:text-white p-2 active:bg-blue-900 transition-colors"
              onClick={nextBtn}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
