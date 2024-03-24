import React, { Component } from "react";
import Slider from "react-slick";
import left from "../assets/left.png";
import right from "../assets/right.png";

import hp from "../assets/hp.png";
import shirt from "../assets/shirt.png";
import book from "../assets/books.png";
import car from "../assets/car.png";
import sofa from "../assets/sofa.png";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute -right-[15px] md:-right-[55px] top-[22px] md:top-[31px] ">
      <img src={right} alt="" className="w-[13px] h-[13px] md:w-[48px] md:h-[48px]" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="absolute -left-[15px] md:-left-[55px] top-[22px] md:top-[31px]">
      <img src={left} alt="" className="w-[13px] h-[13px] md:w-[48px] md:h-[48px]" />
    </button>
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div id="services"  className="md:mb-[69px] mt-[11.2vw] md:mt-[16.6vw] md:px-16">
        <Slider {...settings}>
          <div className="my-3">
            <img
              src={hp}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>

          <div className="my-3">
            <img
              src={shirt}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={book}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={sofa}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={car}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={hp}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={shirt}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={book}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={book}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={sofa}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={car}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>

          <div className="my-3">
            <img
              src={hp}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>

          <div className="my-3">
            <img
              src={shirt}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={book}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={sofa}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={car}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={hp}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={shirt}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={book}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={book}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={sofa}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
          <div className="my-3">
            <img
              src={car}
              alt=""
              className="mx-auto hover:scale-105 duration-75 w-[9.333vw] h-[9.33vw] md:w-[92px] md:h-[92px] cursor-pointer"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
