import React from "react";
import MyNav from "./MyNav";
import { Col, Row } from "react-bootstrap";
import dog from "../assets/images/svg/dog.svg";
import shower from "../assets/images/svg/shower.svg";
import rv from "../assets/images/svg/rv.svg";
import dots from "../assets/images/svg/dots.svg";
import dots_2 from "../assets/images/svg/dots_2.svg";
const OneBox = () => {
  return (
    <section className="bg_img pb-5 position-relative">
      <img className=" position-absolute dots_position" src={dots} alt="dots" />
      <img
        className=" position-absolute dots_position_2 d-none d-sm-block"
        src={dots_2}
        alt="dots_2"
      />
      <MyNav />
      <div className=" custom_container_2 pt-5 pb-5 ">
        <div className=" bg_green_grident mb-lg-5 p-4">
          {" "}
          <div className=" child_box p-4  text-center">
            <h1 className=" ff_comic fw-bold fs_md text-white pt-2">
              Platte River Campground
            </h1>
            <p className=" mb-0 mt-4  fw-normal ff_calibri fs_sm text-white opacity_7">
              Among Top 50 campgrounds in California
            </p>
            <span class="rate mt-2 ">
              <i>★</i>
              <i>★</i>
              <i>★</i>
              <i>★</i>
              <i>★</i>
            </span>
            <p className=" mt-2 mb-0  fw-normal ff_calibri fs_sm text-white opacity_7">
              5685 Lake Michigan Rd, Honor, MI 49640, United States
            </p>{" "}
            <li>
              {" "}
              <a
                href="#"
                className="mt-2  fw-normal ff_calibri fs_sm text-white opacity_7"
              >
                Contact: +1 241 426 5144
              </a>{" "}
            </li>
            <li>
              {" "}
              <a
                href="#"
                className="mt-2    fw-normal ff_calibri fs_sm text-white opacity_7"
              >
                {" "}
                www.example.com
              </a>
            </li>
            <Row className="mx-sm-4">
              <Col sm={4} xs={6} className="">
                <div className="">
                  <div className=" text-center circle_border m-auto  my-3 ">
                    <p className="mb-0 ff_calibri fw-bold fs_sm text-white pt-1">
                      All year
                    </p>
                    <p className="mb-0 ff_calibri fw-normal fs_sm text-white opacity_7">
                      Season
                    </p>
                  </div>
                </div>
              </Col>{" "}
              <Col sm={4} xs={6} className="">
                <div className="">
                  <div className=" text-center circle_border m-auto  my-3 ">
                    <p className="mb-0 ff_calibri fw-bold fs_sm text-white">
                      174
                    </p>
                    <p className="mb-0 ff_calibri fw-normal fs_sm text-white opacity_7">
                      Total Sites
                    </p>
                  </div>
                </div>
              </Col>{" "}
              <Col sm={4} xs={6} className="">
                <div className="">
                  <div className=" text-center circle_border m-auto  my-3  ">
                    <p className="mb-0 ff_calibri fw-bold fs_sm text-white">
                      45
                    </p>
                    <p className="mb-0 px-2 ff_calibri fw-normal fs_sm text-white opacity_7 line_hight">
                      Nightly cost
                    </p>
                  </div>
                </div>
              </Col>{" "}
              <Col sm={4} xs={6} className="">
                <div className="">
                  <div className=" text-center circle_border_2 m-auto  my-3 ">
                    <img className="" src={dog} alt="dog" />
                  </div>
                </div>
              </Col>{" "}
              <Col sm={4} xs={6} className="">
                <div className="">
                  <div className=" text-center circle_border_2 m-auto  my-3  ">
                    <img src={shower} alt="shower" />
                  </div>
                </div>
              </Col>{" "}
              <Col sm={4} xs={6} className="">
                <div className="">
                  <div className=" text-center circle_border_2 m-auto  my-3 pt-4 ">
                    <img className=" mt-2" src={rv} alt="rv" />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneBox;
