import { FC, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../../Layouts/Footer";

import { useEffect } from "react";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

//Layouts
import Header from "../../Layouts/Header";

//Components
import ProductBox from "../../Components/ProductBox";

//Utils
import { products, products2 } from "../../Utils/products";
import AllService from "../service";
/** import customised css for the home */
import "./Home.css";

const Home: FC<{}> = () => {
  const allService = new AllService();

  const [comingSoonProducts, setComingSoonProducts] = useState([]);
  const [newsExclusiveProducts, setNewsExclusiveProducts] = useState([]);
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  const getAllProducts = () => {
    allService
      .getAllProducts()
      .then(async function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const getFilterByKeyword = () => {
    allService
      .getFilterByKeyword({ keyWord: "c" })
      .then(async function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const getComingSoonProducts = () => {
    allService
      .getComingSoonProducts()
      .then(async function (response: any) {
        console.log(response);
        setComingSoonProducts(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const getBestSellerProducts = () => {
    allService
      .getBestSellerProducts()
      .then(async function (response: any) {
        console.log(response);
        setBestSellerProducts(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  const getNewsExclusiveProducts = () => {
    allService
      .getNewsExclusiveProducts()
      .then(async function (response: any) {
        console.log(response);
        setNewsExclusiveProducts(response.data);
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };

  useEffect(() => {
    getNewsExclusiveProducts();
    getBestSellerProducts();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div id="ajax-content-wrap">
        {/* <div className="breadcrumb">
			<span><span className="breadcrumb_last" aria-current="page">Home</span></span>		
        </div> */}
        <div className="container-wrap">
          <div className="container main-content">
            <div className="row">
              <div
                id="slider_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row top-level full-width-ns"
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          data-transition="slide"
                          data-overall_style="classic"
                          data-flexible-height="true"
                          data-animate-in-effect="none"
                          data-fullscreen="false"
                          data-button-sizing="regular"
                          data-button-styling="btn_with_count"
                          data-autorotate="5000"
                          data-parallax="false"
                          data-parallax-disable-mobile=""
                          data-caption-trans="fade_in_from_bottom"
                          data-parallax-style="bg_only"
                          data-bg-animation="none"
                          data-full-width="true"
                          className="nectar-slider-wrap "
                          id="nectar-slider-instance-1"
                        >
                          <div
                            className="swiper-container"
                            data-tho="auto"
                            data-tco="auto"
                            data-pho="auto"
                            data-pco="auto"
                            data-loop="true"
                            data-height="600"
                            data-min-height=""
                            data-arrows="false"
                            data-bullets="true"
                            data-bullet_style="scale"
                            data-bullet_position="bottom"
                            data-desktop-swipe="true"
                            data-settings=""
                          >
                            {" "}
                            <div className="swiper-wrapper">
                              <div
                                className="swiper-slide"
                                data-desktop-content-width="auto"
                                data-tablet-content-width="auto"
                                data-bg-alignment="center"
                                data-color-scheme="light"
                                data-x-pos="left"
                                data-y-pos="middle"
                              >
                                <div className="slide-bg-wrap">
                                  <div
                                    className="image-bg"
                                    style={{
                                      backgroundImage:
                                        "url(./assets/wp-content/uploads/2022/01/s1-1635172963.jpg)",
                                    }}
                                  >
                                    {" "}
                                    &nbsp;{" "}
                                  </div>
                                </div>
                                <div className="video-texture ">
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </div>
                                <a
                                  href="our-orange-and-vanilla-products/index.html"
                                  className="entire-slide-link"
                                >
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </a>
                              </div>{" "}
                              <div
                                className="swiper-slide"
                                data-desktop-content-width="auto"
                                data-tablet-content-width="auto"
                                data-bg-alignment="center"
                                data-color-scheme="light"
                                data-x-pos="left"
                                data-y-pos="middle"
                              >
                                <div className="slide-bg-wrap">
                                  <div
                                    className="image-bg"
                                    style={{
                                      backgroundImage:
                                        "url(./assets/wp-content/uploads/2022/01/s2-1635172995.jpg)",
                                    }}
                                  >
                                    {" "}
                                    &nbsp;{" "}
                                  </div>
                                </div>
                                <div className="video-texture ">
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </div>
                                <a
                                  href="our-gifts-sets-collection/index.html"
                                  className="entire-slide-link"
                                >
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </a>
                              </div>{" "}
                              <div
                                className="swiper-slide"
                                data-desktop-content-width="auto"
                                data-tablet-content-width="auto"
                                data-bg-alignment="center"
                                data-color-scheme="light"
                                data-x-pos="left"
                                data-y-pos="middle"
                              >
                                <div className="slide-bg-wrap">
                                  <div
                                    className="image-bg"
                                    style={{
                                      backgroundImage:
                                        "url(./assets/wp-content/uploads/2022/01/s3-1635173041.jpg)",
                                    }}
                                  >
                                    {" "}
                                    &nbsp;{" "}
                                  </div>
                                </div>
                                <div className="video-texture ">
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </div>
                                <a
                                  href="our-duo-collection/index.html"
                                  className="entire-slide-link"
                                >
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </a>
                              </div>
                              <div
                                className="swiper-slide"
                                data-desktop-content-width="auto"
                                data-tablet-content-width="auto"
                                data-bg-alignment="center"
                                data-color-scheme="light"
                                data-x-pos="left"
                                data-y-pos="middle"
                              >
                                <div className="slide-bg-wrap">
                                  <div
                                    className="image-bg"
                                    style={{
                                      backgroundImage:
                                        "url(./assets/wp-content/uploads/2022/01/s4-1635173075.jpg)",
                                    }}
                                  >
                                    {" "}
                                    &nbsp;{" "}
                                  </div>
                                </div>
                                <div className="video-texture ">
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </div>
                                <a
                                  href="our-lily-and-lavender-products/index.html"
                                  className="entire-slide-link"
                                >
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </a>
                              </div>{" "}
                              <div
                                className="swiper-slide"
                                data-desktop-content-width="auto"
                                data-tablet-content-width="auto"
                                data-bg-alignment="center"
                                data-color-scheme="light"
                                data-x-pos="left"
                                data-y-pos="middle"
                              >
                                <div className="slide-bg-wrap">
                                  <div
                                    className="image-bg"
                                    style={{
                                      backgroundImage:
                                        "url(./assets/wp-content/uploads/2022/01/s5-1635173135.jpg)",
                                    }}
                                  >
                                    {" "}
                                    &nbsp;{" "}
                                  </div>
                                </div>
                                <div className="video-texture ">
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </div>
                                <a
                                  href="our-lily-and-lavender-products/index.html"
                                  className="entire-slide-link"
                                >
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </a>
                              </div>{" "}
                              <div
                                className="swiper-slide"
                                data-desktop-content-width="auto"
                                data-tablet-content-width="auto"
                                data-bg-alignment="center"
                                data-color-scheme="light"
                                data-x-pos="left"
                                data-y-pos="middle"
                              >
                                <div className="slide-bg-wrap">
                                  <div
                                    className="image-bg"
                                    style={{
                                      backgroundImage:
                                        "url(./assets/wp-content/uploads/2022/01/6-3-1635173208.png)",
                                    }}
                                  >
                                    {" "}
                                    &nbsp;{" "}
                                  </div>
                                </div>
                                <div className="video-texture ">
                                  {" "}
                                  <span className="ie-fix"></span>{" "}
                                </div>
                              </div>{" "}
                            </div>
                            <div className="container normal-container slider-pagination-wrap">
                              <div className="slider-pagination"></div>
                            </div>
                            <div className="nectar-slider-loading ">
                              <span className="loading-icon none"> </span>{" "}
                            </div>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="service_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row  vc_row-o-equal-height vc_row-flex  "
                style={{ paddingTop: "80px", paddingBottom: "30px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark center">
                  <div
                    className="vc_col-sm-4 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-t-w-inherits="small_desktop"
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          className="img-with-aniamtion-wrap "
                          data-max-width="100%"
                          data-max-width-mobile="default"
                          data-shadow="none"
                          data-animation="fade-in"
                        >
                          <div className="inner">
                            <div className="hover-wrap">
                              <div className="hover-wrap-inner">
                                <img
                                  className="img-with-animation skip-lazy wave_image nectar-lazy"
                                  data-delay="0"
                                  height="67"
                                  width="145"
                                  data-animation="fade-in"
                                  data-nectar-img-src="./assets/images/site/tone.png"
                                  src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20145%2067'%2F%3E"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <p>
                              <span style={{ color: "#464646" }}>
                                EVEN SKIN TONE &amp; FIGHT
                              </span>
                              <br />
                              <span style={{ color: "#464646" }}>
                                EARLY SIGNS OF AGING
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="vc_col-sm-4 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-t-w-inherits="small_desktop"
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          className="img-with-aniamtion-wrap "
                          data-max-width="100%"
                          data-max-width-mobile="default"
                          data-shadow="none"
                          data-animation="fade-in"
                        >
                          <div className="inner">
                            <div className="hover-wrap">
                              <div className="hover-wrap-inner">
                                <img
                                  className="img-with-animation skip-lazy star_image nectar-lazy"
                                  data-delay="0"
                                  height="99"
                                  width="99"
                                  data-animation="fade-in"
                                  data-nectar-img-src="./assets/images/site/glow.png"
                                  src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2099%2099'%2F%3E"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <p>
                              <span style={{ color: "#464646" }}>
                                IMPROVE NATURAL RADIANCE &amp; THE
                              </span>
                              <br />
                              <span style={{ color: "#464646" }}>
                                IMPERFECTIONS OF SKIN
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="vc_col-sm-4 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-t-w-inherits="small_desktop"
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          className="img-with-aniamtion-wrap "
                          data-max-width="100%"
                          data-max-width-mobile="default"
                          data-shadow="none"
                          data-animation="fade-in"
                        >
                          <div className="inner">
                            <div className="hover-wrap">
                              <div className="hover-wrap-inner">
                                <img
                                  className="img-with-animation skip-lazy water_drop_image nectar-lazy"
                                  data-delay="0"
                                  height="328"
                                  width="220"
                                  data-animation="fade-in"
                                  data-nectar-img-src="./assets/wp-content/uploads/2022/01/face.png"
                                  src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20220%20328'%2F%3E"
                                  alt=""
                                  data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/face.png 220w, ./assets/wp-content/uploads/2022/01/face-201x300.png 201w"
                                  sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <p>
                              <span style={{ color: "#464646" }}>
                                HYDRATE &amp; NOURISH
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="new_exclusive_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-section  "
                style={{ paddingTop: "60px", paddingBottom: "60px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div
                      className="row-bg using-bg-color"
                      style={{ backgroundColor: "#f3f6f6" }}
                    ></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark center">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <h5 style={{ textAlign: "center" }}>
                              <span style={{ color: "#35465a" }}>
                                NEW &amp; EXCLUSIVE
                              </span>
                            </h5>
                          </div>
                        </div>

                        {/* { newsExclusiveProducts.length > 0 ? <div id="service_inner_sec" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row   right_padding_80px left_padding_80px "   >
	<div className="row-bg-wrap"> <div className="row-bg" ></div> </div><div className="row_col_wrap_12_inner col span_12  center">
	
	{
		newsExclusiveProducts.map((product, id) => <ProductBox key={id} productListLength={ 4 } product={product}  /> )
	}
	

</div></div> : <></> } */}
                        <div
                          id="service_inner_sec"
                          data-midnight=""
                          data-column-margin="default"
                          className="wpb_row vc_row-fluid vc_row inner_row   right_padding_80px left_padding_80px "
                        >
                          <div className="row-bg-wrap">
                            {" "}
                            <div className="row-bg"></div>{" "}
                          </div>
                          <div className="row_col_wrap_12_inner col span_12  center">
                            <div
                              className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone one-fourths clear-both"
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/product/19"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o4-1637218448.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o4-1637218448.jpg 776w, ./assets/wp-content/uploads/2022/01/o4-1637218448-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o4-1637218448-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o4-1637218448-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o4-1637218448-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <a
                                            href="https://lapotencielle.com/product/orange-vanilla-luxurious-natural-body-oil/"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy hover_show nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o4a-1637218440-1.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o4a-1637218440-1.jpg 776w, ./assets/wp-content/uploads/2022/01/o4a-1637218440-1-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o4a-1637218440-1-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o4a-1637218440-1-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o4a-1637218440-1-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          href="https://lapotencielle.com/product/orange-vanilla-luxurious-natural-body-oil/"
                                        >
                                          ORANGE &amp; VANILLA LUXURIOUS NATURAL
                                          BODY OIL
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p style={{ textAlign: "center" }}>
                                        <a
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          href="https://lapotencielle.com/product/orange-vanilla-luxurious-natural-body-oil/"
                                        >
                                          $58.00
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element  hover_show_text">
                                    <div className="wpb_wrapper">
                                      <p>
                                        BODY CARE
                                        <br />
                                        <a href="https://lapotencielle.com/product/orange-vanilla-luxurious-natural-body-oil/">
                                          Add to Cart
                                        </a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone one-fourths right-edge"
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/product/18"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o3-1637218564.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o3-1637218564.jpg 776w, ./assets/wp-content/uploads/2022/01/o3-1637218564-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o3-1637218564-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o3-1637218564-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o3-1637218564-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <a
                                            href="https://lapotencielle.com/product/orange-vanilla-luxurious-natural-body-cream-butter/"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy hover_show nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o3a-1637218555.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o3a-1637218555.jpg 776w, ./assets/wp-content/uploads/2022/01/o3a-1637218555-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o3a-1637218555-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o3a-1637218555-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o3a-1637218555-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <Link to="/product/16">
                                          ORANGE &amp; VANILLA LUXURIOUS NATURAL
                                          BODY CREAM BUTTER
                                        </Link>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p style={{ textAlign: "center" }}>
                                        <a
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          href="https://lapotencielle.com/product/orange-vanilla-luxurious-natural-body-cream-butter/"
                                        >
                                          $55.00
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element  hover_show_text">
                                    <div className="wpb_wrapper">
                                      <p>
                                        BODY CARE
                                        <br />
                                        <Link to="/product/16">
                                          Add to Cart
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone one-fourths clear-both"
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to ="/product/17"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o2-1637218600.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o2-1637218600.jpg 776w, ./assets/wp-content/uploads/2022/01/o2-1637218600-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o2-1637218600-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o2-1637218600-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o2-1637218600-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/product/17"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy hover_show nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o2a-1637218595.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o2a-1637218595.jpg 776w, ./assets/wp-content/uploads/2022/01/o2a-1637218595-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o2a-1637218595-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o2a-1637218595-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o2a-1637218595-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <Link to ="product/17">
                                          ORANGE &amp; VANILLA LUXURIOUS NATURAL
                                          BODY CREAM
                                        </Link>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p style={{ textAlign: "center" }}>
                                        <Link
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          to="product/17"
                                        >
                                          $60.00
                                        </Link>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element  hover_show_text">
                                    <div className="wpb_wrapper">
                                      <p>
                                        BODY CARE
                                        <br />
                                        <Link to="/product/17">
                                          Add to Cart
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone one-fourths right-edge"
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/product/16"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o1-1637218672.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o1-1637218672.jpg 776w, ./assets/wp-content/uploads/2022/01/o1-1637218672-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o1-1637218672-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o1-1637218672-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o1-1637218672-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/product/16"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy hover_show nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o1a-1637218669.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o1a-1637218669.jpg 776w, ./assets/wp-content/uploads/2022/01/o1a-1637218669-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o1a-1637218669-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o1a-1637218669-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o1a-1637218669-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <Link to="/product/16">
                                          ORANGE &amp; VANILLA LUXURIOUS NATURAL
                                          BODY LOTION
                                        </Link>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p style={{ textAlign: "center" }}>
                                        <Link
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          to="/product/16"
                                        >
                                          $66.00
                                        </Link>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element  hover_show_text">
                                    <div className="wpb_wrapper">
                                      <p>
                                        BODY CARE
                                        <br />
                                        <Link to="/product/16">
                                          Add to Cart
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* fin */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="video_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex  vc_row-o-content-top  "
                style={{ paddingTop: "60px", paddingBottom: "60px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="video_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex  vc_row-o-content-top  "
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                          <div className="wpb_wrapper">
                            <video
                              className="isActive"
                              autoPlay
                              loop
                              muted
                              playsInline
                            >
                              <source src="./assets/videos/toppotencielle2.mp4" />
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="video_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex  vc_row-o-content-top  "
                style={{ paddingTop: "5px", paddingBottom: "5px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="siple_pure_product_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-section   right_padding_95px left_padding_95px right_padding_tablet_60px right_padding_phone_10px left_padding_tablet_60px left_padding_phone_10px "
                style={{ paddingTop: "60px", paddingBottom: "80px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div
                      className="row-bg using-bg-color"
                      style={{ backgroundColor: "#fbfbfb" }}
                    ></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark center">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <h2 style={{ textAlign: "center" }}>
                              <span style={{ color: "#35465a" }}>
                                100% Simply Pure Products
                              </span>
                            </h2>
                          </div>
                        </div>

                        <div
                          id="fws_630520027f53f"
                          data-midnight=""
                          data-column-margin="default"
                          className="wpb_row vc_row-fluid vc_row inner_row  "
                        >
                          <div className="row-bg-wrap">
                            {" "}
                            <div className="row-bg"></div>{" "}
                          </div>
                          <div className="row_col_wrap_12_inner col span_12  center">
                            <div
                              className="vc_col-sm-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap center"
                                    data-max-width="75%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div className="hover-wrap">
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/product/27"
                                            target="_self"
                                            className="center"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy  nectar-lazy"
                                              data-delay="0"
                                              height="2000"
                                              width="1294"
                                              data-animation="fade-in"
                                              data-nectar-img-src="./assets/wp-content/uploads/2022/01/1-2-1626791306.png"
                                              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201294%202000'%2F%3E"
                                              alt=""
                                              data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1-2-1626791306.png 1294w, ./assets/wp-content/uploads/2022/01/1-2-1626791306-300x464.png 300w, ./assets/wp-content/uploads/2022/01/1-2-1626791306-600x927.png 600w, ./assets/wp-content/uploads/2022/01/1-2-1626791306-194x300.png 194w, ./assets/wp-content/uploads/2022/01/1-2-1626791306-663x1024.png 663w, ./assets/wp-content/uploads/2022/01/1-2-1626791306-768x1187.png 768w, ./assets/wp-content/uploads/2022/01/1-2-1626791306-994x1536.png 994w"
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p style={{ textAlign: "center" }}>
                                        <span style={{ color: "#212529" }}>
                                          Restore your skin smoothness and
                                          radiance with this
                                        </span>
                                        <br />
                                        <span style={{ color: "#212529" }}>
                                          nourishing body &amp; facial balm.
                                          This non- greasy balm will
                                        </span>
                                        <br />
                                        <span style={{ color: "#212529" }}>
                                          instantly soften and smooth dry, flaky
                                          and mature tired skin.
                                        </span>
                                      </p>
                                      <p style={{ textAlign: "center" }}>
                                        <Link to="/product/27">
                                          LILY &amp; LAVENDER LUXURIOUS NATURAL
                                          BODY BALM
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-6 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap center"
                                    data-max-width="75%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div className="hover-wrap">
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/product/25"
                                            target="_self"
                                            className="center"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy  nectar-lazy"
                                              data-delay="0"
                                              height="2000"
                                              width="1294"
                                              data-animation="fade-in"
                                              data-nectar-img-src="./assets/wp-content/uploads/2022/01/2-2-1626793893.png"
                                              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201294%202000'%2F%3E"
                                              alt=""
                                              data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/2-2-1626793893.png 1294w, ./assets/wp-content/uploads/2022/01/2-2-1626793893-300x464.png 300w, ./assets/wp-content/uploads/2022/01/2-2-1626793893-600x927.png 600w, ./assets/wp-content/uploads/2022/01/2-2-1626793893-194x300.png 194w, ./assets/wp-content/uploads/2022/01/2-2-1626793893-663x1024.png 663w, ./assets/wp-content/uploads/2022/01/2-2-1626793893-768x1187.png 768w, ./assets/wp-content/uploads/2022/01/2-2-1626793893-994x1536.png 994w"
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p style={{ textAlign: "center" }}>
                                        <span style={{ color: "#212529" }}>
                                          Nourish your skin by indulging
                                          yourself in this bio, soothing,
                                        </span>
                                        <br />
                                        <span style={{ color: "#212529" }}>
                                          softening, light weight body oil. It
                                          will rapidly soak into your
                                        </span>
                                        <br />
                                        <span style={{ color: "#212529" }}>
                                          skin to deeply nourish, hydrate,
                                          sooth, and soften your skin.
                                        </span>
                                      </p>
                                      <p style={{ textAlign: "center" }}>
                                        <Link to="/product/25">
                                          LILY &amp; LAVENDER LUXURIOUS NATURAL
                                          BODY OIL
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="high_quality_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row  "
                style={{ paddingTop: "60px", paddingBottom: "0px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <h3>
                              <span style={{ color: "#35465a" }}>
                                Our High Quality Ingredients
                              </span>
                            </h3>
                            <p>
                              <span style={{ color: "#212529" }}>
                                Our high-quality ingredients come from all
                                around the globe; each one thoughtfully selected
                                by Sandra Boffoh to uniquely benefit your skin.
                              </span>
                              <br />
                              <span style={{ color: "#212529" }}>
                                We prioritize both certified-organic and
                                wild-harvested ingredients, taking sourcing
                                seriously, tracing each ingredient to its
                                origins. The
                              </span>
                              <br />
                              <span style={{ color: "#212529" }}>
                                quality of each ingredient matters to us.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="main_services_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex  vc_row-o-content-middle   right_padding_20px left_padding_20px "
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark center">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          className="nectar-flickity not-initialized nectar-carousel"
                          data-centered-cells="true"
                          data-touch-icon-color="default"
                          data-control-color="default"
                          data-overflow="hidden"
                          data-r-bottom-total=""
                          data-drag-scale="true"
                          data-wrap="wrap"
                          data-spacing="default"
                          data-controls="next_prev_arrows_overlaid"
                          data-pagination-alignment="default"
                          data-adaptive-height="true"
                          data-border-radius="none"
                          data-column-border=""
                          data-column-padding="10px"
                          data-format="default"
                          data-autoplay="true"
                          data-autoplay-dur="5000"
                          data-control-style="material_pagination"
                          data-desktop-columns="4"
                          data-small-desktop-columns="3"
                          data-tablet-columns="1"
                          data-column-color=""
                        >
                          <div className="flickity-viewport">
                            {" "}
                            <div className="flickity-slider">
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/HOME-SPA/spa"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                                data-delay="0"
                                                height="1080"
                                                width="1080"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458807-2_1.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458807-2_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-800x800.png 800w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/HOME-SPA/spa">
                                            HOME SPA
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/GIFTS-AND-SETS/gifts sets"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                                data-delay="0"
                                                height="1080"
                                                width="1080"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458830-3_1.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458830-3_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-800x800.png 800w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/GIFTS-AND-SETS/gifts sets">
                                            GIFTS &amp; SETS
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/BODY-CARE/body care"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                                data-delay="0"
                                                height="1080"
                                                width="1080"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458878-5_1.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458878-5_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-800x800.png 800w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/BODY-CARE/body care">
                                            BODY CARE
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/BATH-AND-BODY/bath body"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                                data-delay="0"
                                                height="1080"
                                                width="1080"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458771-1_1.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458771-1_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-800x800.png 800w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/BATH-AND-BODY/bath body">
                                            BATH AND BODY
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/FACIAL-CARE/facial care"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy  nectar-lazy"
                                                data-delay="0"
                                                height="610"
                                                width="610"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626459228-soon.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20610%20610'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626459228-soon.png 610w, ./assets/wp-content/uploads/2022/01/1626459228-soon-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626459228-soon-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626459228-soon-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626459228-soon-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626459228-soon-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626459228-soon-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626459228-soon-350x350.png 350w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/FACIAL-CARE/facial care">
                                            FACIAL CARE
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/HAIR-CARE/hair care"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy  nectar-lazy"
                                                data-delay="0"
                                                height="610"
                                                width="610"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626459228-soon.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20610%20610'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626459228-soon.png 610w, ./assets/wp-content/uploads/2022/01/1626459228-soon-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626459228-soon-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626459228-soon-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626459228-soon-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626459228-soon-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626459228-soon-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626459228-soon-350x350.png 350w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/HAIR-CARE/hair care">
                                            HAIR CARE
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/HOME-SPA/spa"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                                data-delay="0"
                                                height="1080"
                                                width="1080"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458807-2_1.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458807-2_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-800x800.png 800w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/HOME-SPA/spa">
                                            HOME SPA
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/GIFTS-AND-SETS/gifts sets"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                                data-delay="0"
                                                height="1080"
                                                width="1080"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458830-3_1.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458830-3_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-800x800.png 800w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/GIFTS-AND-SETS/gifts sets">
                                            GIFTS &amp; SETS
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/BODY-CARE/body care"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                                data-delay="0"
                                                height="1080"
                                                width="1080"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458878-5_1.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458878-5_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-800x800.png 800w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/BODY-CARE/body care">
                                            BODY CARE
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/BATH-AND-BODY/bath body"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                                data-delay="0"
                                                height="1080"
                                                width="1080"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458771-1_1.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458771-1_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-800x800.png 800w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/BATH-AND-BODY/bath body">
                                            BATH AND BODY
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/FACIAL-CARE/facial care"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy  nectar-lazy"
                                                data-delay="0"
                                                height="610"
                                                width="610"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626459228-soon.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20610%20610'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626459228-soon.png 610w, ./assets/wp-content/uploads/2022/01/1626459228-soon-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626459228-soon-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626459228-soon-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626459228-soon-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626459228-soon-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626459228-soon-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626459228-soon-350x350.png 350w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/FACIAL-CARE/facial care">
                                            FACIAL CARE
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <Link
                                              to="/products/HOME-SPA/spa"
                                              target="_self"
                                              className=""
                                            >
                                              <img
                                                className="img-with-animation skip-lazy  nectar-lazy"
                                                data-delay="0"
                                                height="610"
                                                width="610"
                                                data-animation="fade-in"
                                                data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626459228-soon.png"
                                                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20610%20610'%2F%3E"
                                                alt=""
                                                data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626459228-soon.png 610w, ./assets/wp-content/uploads/2022/01/1626459228-soon-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626459228-soon-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626459228-soon-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626459228-soon-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626459228-soon-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626459228-soon-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626459228-soon-350x350.png 350w"
                                                sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              />
                                            </Link>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_text_column wpb_content_element ">
                                      <div className="wpb_wrapper">
                                        <p>
                                          <Link to="/products/HAIR-CARE/hair care">
                                            HAIR CARE
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="main_services_sec_col"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-section  vc_row-o-equal-height vc_row-flex  vc_row-o-content-middle  quality_ingridients_sec right_padding_20px left_padding_20px "
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark center">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          id="fws_630520028515c"
                          data-midnight=""
                          data-column-margin="default"
                          className="wpb_row vc_row-fluid vc_row inner_row  "
                        >
                          <div className="row-bg-wrap">
                            {" "}
                            <div className="row-bg"></div>{" "}
                          </div>
                          <div className="row_col_wrap_12_inner col span_12  left">
                            <div
                              className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div className="hover-wrap">
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/products/HOME-SPA/spa"
                                            target="_self"
                                            className=""
                                          >
                                            <img
                                              className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                              data-delay="0"
                                              height="1080"
                                              width="1080"
                                              data-animation="fade-in"
                                              data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458807-2_1.png"
                                              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                              alt=""
                                              data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458807-2_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458807-2_1-800x800.png 800w"
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <Link to="/products/HOME-SPA/spa">
                                          HOME SPA
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div className="hover-wrap">
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/products/GIFTS-AND-SETS/gifts sets"
                                            target="_self"
                                            className=""
                                          >
                                            <img
                                              className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                              data-delay="0"
                                              height="1080"
                                              width="1080"
                                              data-animation="fade-in"
                                              data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458830-3_1.png"
                                              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                              alt=""
                                              data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458830-3_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458830-3_1-800x800.png 800w"
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <Link to="/products/GIFTS-AND-SETS/gifts sets">
                                          GIFTS &amp; SETS
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div className="hover-wrap">
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/products/BATH-AND-BODY/bath body"
                                            target="_self"
                                            className=""
                                          >
                                            <img
                                              className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                              data-delay="0"
                                              height="1080"
                                              width="1080"
                                              data-animation="fade-in"
                                              data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458771-1_1.png"
                                              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                              alt=""
                                              data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458771-1_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458771-1_1-800x800.png 800w"
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <Link to="/products/BATH-AND-BODY/bath body">
                                          BATH AND BODY
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          id="fws_6305200285e41"
                          data-midnight=""
                          data-column-margin="default"
                          className="wpb_row vc_row-fluid vc_row inner_row  "
                        >
                          <div className="row-bg-wrap">
                            {" "}
                            <div className="row-bg"></div>{" "}
                          </div>
                          <div className="row_col_wrap_12_inner col span_12  left">
                            <div
                              className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div className="hover-wrap">
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/products/BODY-CARE/body care"
                                            target="_self"
                                            className=""
                                          >
                                            <img
                                              className="img-with-animation skip-lazy slider_image_q nectar-lazy"
                                              data-delay="0"
                                              height="1080"
                                              width="1080"
                                              data-animation="fade-in"
                                              data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626458878-5_1.png"
                                              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201080%201080'%2F%3E"
                                              alt=""
                                              data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626458878-5_1.png 1080w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-1024x1024.png 1024w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-768x768.png 768w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-350x350.png 350w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-1000x1000.png 1000w, ./assets/wp-content/uploads/2022/01/1626458878-5_1-800x800.png 800w"
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <Link to="/products/BODY-CARE/body care">
                                          BODY CARE
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div className="hover-wrap">
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/products/FACIAL-CARE/facial care"
                                            target="_self"
                                            className=""
                                          >
                                            <img
                                              className="img-with-animation skip-lazy  nectar-lazy"
                                              data-delay="0"
                                              height="610"
                                              width="610"
                                              data-animation="fade-in"
                                              data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626459228-soon.png"
                                              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20610%20610'%2F%3E"
                                              alt=""
                                              data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626459228-soon.png 610w, ./assets/wp-content/uploads/2022/01/1626459228-soon-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626459228-soon-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626459228-soon-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626459228-soon-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626459228-soon-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626459228-soon-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626459228-soon-350x350.png 350w"
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <Link to="/products/FACIAL-CARE/facial care">
                                          FACIAL CARE
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-4 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div className="hover-wrap">
                                        <div className="hover-wrap-inner">
                                          <Link
                                            to="/products/HAIR-CARE/hair care"
                                            target="_self"
                                            className=""
                                          >
                                            <img
                                              className="img-with-animation skip-lazy  nectar-lazy"
                                              data-delay="0"
                                              height="610"
                                              width="610"
                                              data-animation="fade-in"
                                              data-nectar-img-src="./assets/wp-content/uploads/2022/01/1626459228-soon.png"
                                              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20610%20610'%2F%3E"
                                              alt=""
                                              data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1626459228-soon.png 610w, ./assets/wp-content/uploads/2022/01/1626459228-soon-300x300.png 300w, ./assets/wp-content/uploads/2022/01/1626459228-soon-150x150.png 150w, ./assets/wp-content/uploads/2022/01/1626459228-soon-600x600.png 600w, ./assets/wp-content/uploads/2022/01/1626459228-soon-100x100.png 100w, ./assets/wp-content/uploads/2022/01/1626459228-soon-140x140.png 140w, ./assets/wp-content/uploads/2022/01/1626459228-soon-500x500.png 500w, ./assets/wp-content/uploads/2022/01/1626459228-soon-350x350.png 350w"
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            />
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <Link to="/products/HAIR-CARE/hair care">
                                          HAIR CARE
                                        </Link>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="new_exclusive_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-section  "
                style={{ paddingTop: "60px", paddingBottom: "60px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div
                      className="row-bg using-bg-color"
                      style={{ backgroundColor: "#f1f4f5" }}
                    ></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark center">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <h5 style={{ textAlign: "center" }}>
                              <span style={{ color: "#35465a" }}>
                                BEST-SELLING ITEMS
                              </span>
                            </h5>
                          </div>
                        </div>

                        {/* <div id="service_inner_sec" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row   right_padding_80px left_padding_80px "   ><div className="row-bg-wrap"> <div className="row-bg" ></div> </div><div className="row_col_wrap_12_inner col span_12  center">
	
	{
		bestSellerProducts.slice(0,4).map((product, id) => <ProductBox key={id} productListLength={4} product={product}  /> )
	}
	
	{/* <div  className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner" >
		<div className="wpb_wrapper">
			<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
            <a href="https://lapotencielle.com/product/lily-lavender-skin-radiance-body-polish-oil-duo/" 
			target="_self" className="">
              <img className="img-with-animation skip-lazy  nectar-lazy" data-delay="0" height="1000" 
			  width="776" data-animation="fade-in" 
			  data-nectar-img-src="./assets/wp-content/uploads/2022/01/radianceduo-1629471488.jpg" 
			  src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20776%201000'%2F%3E" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/radianceduo-1629471488.jpg 776w, ./assets/wp-content/uploads/2022/01/radianceduo-1629471488-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/radianceduo-1629471488-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/radianceduo-1629471488-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/radianceduo-1629471488-768x990.jpg 768w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
            </a>
          </div>
        </div>
      </div>
      </div>
<div className="wpb_text_column wpb_content_element " >
	<div className="wpb_wrapper">
		<p style={{ textAlign: "center" }}>
			<a href="https://lapotencielle.com/product/lily-lavender-skin-radiance-body-polish-oil-duo/">
				LILY &amp; LAVENDER SKIN RADIANCE BODY POLISH &amp; OIL DUO</a></p>
	</div>
</div>




<div className="wpb_text_column wpb_content_element " >
	<div className="wpb_wrapper">
		<p style={{ textAlign: "center" }}><a style={{ fontSize: "13px", fontWeight: "500" }}
		 href="https://lapotencielle.com/product/orange-vanilla-luxurious-natural-body-oil/">$143.00</a></p>
	</div>
</div>




<div className="wpb_text_column wpb_content_element  hover_show_text" >
	<div className="wpb_wrapper">
		<p>BATH AND BODY<br />
<a href="https://lapotencielle.com/product/lily-lavender-skin-radiance-body-polish-oil-duo/">Add to Cart</a></p>
	</div>
</div>




		</div> 
	</div>
	</div> 

	<div  className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner" >
		<div className="wpb_wrapper">
			<div className="img-with-aniamtion-wrap " data-max-width="100%" 
			data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
            <a href="https://lapotencielle.com/product/orange-vanilla-skin-glow-nourishment-cream-butter-body-polish-duo/" 
			target="_self" className="">
              <img className="img-with-animation skip-lazy  nectar-lazy" data-delay="0" height="1000" width="776" 
			  data-animation="fade-in" 
			  data-nectar-img-src="./assets/wp-content/uploads/2022/01/orduo1-1629471836-1.jpg" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20776%201000'%2F%3E" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/orduo1-1629471836-1.jpg 776w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-768x990.jpg 768w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
            </a>
          </div>
        </div>
      </div>
      </div>
<div className="wpb_text_column wpb_content_element " >
	<div className="wpb_wrapper">
		<p style={{ textAlign: "center" }}>
			<a href="https://lapotencielle.com/product/orange-vanilla-skin-glow-nourishment-cream-butter-body-polish-duo/">
				ORANGE &amp; VANILLA SKIN GLOW NOURISHMENT CREAM BUTTER &amp; BODY POLISH DUO</a></p>
	</div>
</div>




<div className="wpb_text_column wpb_content_element " >
	<div className="wpb_wrapper">
		<p style={{ textAlign: "center" }}><a style={{ fontSize: "13px", fontWeight: "500" }}
		 href="https://lapotencielle.com/product/orange-vanilla-skin-glow-nourishment-cream-butter-body-polish-duo/">$144.00</a></p>
	</div>
</div>




<div className="wpb_text_column wpb_content_element  hover_show_text" >
	<div className="wpb_wrapper">
		<p>BATH AND BODY<br />
<a href="https://lapotencielle.com/product/orange-vanilla-skin-glow-nourishment-cream-butter-body-polish-duo/">Add to Cart</a></p>
	</div>
</div>




		</div> 
	</div>
	</div> 

	<div  className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner" >
		<div className="wpb_wrapper">
			<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
            <a href="https://lapotencielle.com/product/lily-lavender-hydration-skincare-trio-set/" target="_self" className="">
              <img className="img-with-animation skip-lazy  nectar-lazy" data-delay="0" height="1000" width="776"
			   data-animation="fade-in" 
			   data-nectar-img-src="./assets/wp-content/uploads/2022/01/set2c-1626289179.jpg" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20776%201000'%2F%3E" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/set2c-1626289179.jpg 776w, ./assets/wp-content/uploads/2022/01/set2c-1626289179-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/set2c-1626289179-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/set2c-1626289179-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/set2c-1626289179-768x990.jpg 768w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
            </a>
          </div>
        </div>
      </div>
      </div>
<div className="wpb_text_column wpb_content_element " >
	<div className="wpb_wrapper">
		<p style={{ textAlign: "center" }}><a href="https://lapotencielle.com/product/lily-lavender-hydration-skincare-trio-set/">
			LILY &amp; LAVENDER HYDRATION SKINCARE TRIO SET</a></p>
	</div>
</div>




<div className="wpb_text_column wpb_content_element " >
	<div className="wpb_wrapper">
		<p style={{ textAlign: "center" }}><a style={{ fontSize: "13px", fontWeight: "500" }} 
		href="https://lapotencielle.com/product/lily-lavender-hydration-skincare-trio-set/">$213.00</a></p>
	</div>
</div>




<div className="wpb_text_column wpb_content_element  hover_show_text" >
	<div className="wpb_wrapper">
		<p>GIFTS &amp; SETS<br />
<a href="https://lapotencielle.com/product/lily-lavender-hydration-skincare-trio-set/">Add to Cart</a></p>
	</div>
</div>




		</div> 
	</div>
	</div> 

	<div  className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner" >
		<div className="wpb_wrapper">
			<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
            <a href="https://lapotencielle.com/product/lily-lavender-skin-pamper-nourishing-spa-trio-set/" target="_self" className="">
              <img className="img-with-animation skip-lazy  nectar-lazy" data-delay="0" height="1000" width="776"
			   data-animation="fade-in" 
			   data-nectar-img-src="./assets/wp-content/uploads/2022/01/set2a-1629404118-1.jpg" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20776%201000'%2F%3E" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/set2a-1629404118-1.jpg 776w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-768x990.jpg 768w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
            </a>
          </div>
        </div>
      </div>
      </div>
<div className="wpb_text_column wpb_content_element " >
	<div className="wpb_wrapper">
		<p style={{ textAlign: "center" }}><a href="https://lapotencielle.com/product/lily-lavender-skin-pamper-nourishing-spa-trio-set/">
			LILY &amp; LAVENDER SKIN PAMPER &amp; NOURISHING SPA TRIO SET</a></p>
	</div>
</div>




<div className="wpb_text_column wpb_content_element " >
	<div className="wpb_wrapper">
		<p style={{ textAlign: "center" }}><a style={{ fontSize: "13px", fontWeight: "500" }} 
		href="https://lapotencielle.com/product/lily-lavender-skin-pamper-nourishing-spa-trio-set/">$215.00</a></p>
	</div>
</div>




<div className="wpb_text_column wpb_content_element  hover_show_text" >
	<div className="wpb_wrapper">
		<p>GIFTS &amp; SETS<br />
<a href="https://lapotencielle.com/product/lily-lavender-skin-pamper-nourishing-spa-trio-set/">Add to Cart</a></p>
	</div>
</div>




		</div> 
	</div>
	</div>  */}
                        {/* </div>

</div> */}

                        {/* ceci est le debut */}

                        <div
                          id="service_inner_sec"
                          data-midnight=""
                          data-column-margin="default"
                          className="wpb_row vc_row-fluid vc_row inner_row   right_padding_80px left_padding_80px "
                        >
                          <div className="row-bg-wrap">
                            {" "}
                            <div className="row-bg"></div>{" "}
                          </div>
                          <div className="row_col_wrap_12_inner col span_12  center">
                            <div
                              className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone one-fourths clear-both"
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <a
                                            href="#"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o4-1637218448.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o4-1637218448.jpg 776w, ./assets/wp-content/uploads/2022/01/o4-1637218448-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o4-1637218448-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o4-1637218448-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o4-1637218448-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <a
                                            href="#"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy hover_show nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o4a-1637218440-1.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o4a-1637218440-1.jpg 776w, ./assets/wp-content/uploads/2022/01/o4a-1637218440-1-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o4a-1637218440-1-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o4a-1637218440-1-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o4a-1637218440-1-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          href="#"
                                        >
                                          ORANGE &amp; VANILLA LUXURIOUS NATURAL
                                          BODY OIL
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p style={{ textAlign: "center" }}>
                                        <a
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          href="#"
                                        >
                                          $58.00
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element  hover_show_text">
                                    <div className="wpb_wrapper">
                                      <p>
                                        BODY CARE
                                        <br />
                                        <a href="#">Add to Cart</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone one-fourths right-edge"
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <a
                                            href="#"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/orduo1-1629471836-1.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/orduo1-1629471836-1.jpg 776w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <a
                                            href="#"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy hover_show nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/orduo1-1629471836-1.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/orduo1-1629471836-1.jpg 776w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/orduo1-1629471836-1-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="#">
                                          ORANGE &amp; VANILLA SKIN GLOW
                                          NOURISHMENT CREAM BUTTER &amp; BODY
                                          POLISH DUO
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p style={{ textAlign: "center" }}>
                                        <a
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          href="#"
                                        >
                                          $119.00
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element  hover_show_text">
                                    <div className="wpb_wrapper">
                                      <p>
                                        BATH AND BODY
                                        <br />
                                        <a href="#">Add to Cart</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone one-fourths clear-both"
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <a
                                            href="#"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o2-1637218600.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o2-1637218600.jpg 776w, ./assets/wp-content/uploads/2022/01/o2-1637218600-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o2-1637218600-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o2-1637218600-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o2-1637218600-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <a
                                            href="#"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy hover_show nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/o2a-1637218595.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/o2a-1637218595.jpg 776w, ./assets/wp-content/uploads/2022/01/o2a-1637218595-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/o2a-1637218595-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/o2a-1637218595-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/o2a-1637218595-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="#">
                                          ORANGE &amp; VANILLA LUXURIOUS NATURAL
                                          BODY CREAM
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p style={{ textAlign: "center" }}>
                                        <a
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          href="#"
                                        >
                                          $60.00
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element  hover_show_text">
                                    <div className="wpb_wrapper">
                                      <p>
                                        BODY CARE
                                        <br />
                                        <a href="#">Add to Cart</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone one-fourths right-edge"
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <a
                                            href="#"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/set2a-1629404118-1.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/set2a-1629404118-1.jpg 776w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner">
                                          <a
                                            href="#"
                                            target="_self"
                                            className="img-loaded"
                                          >
                                            <img
                                              className="img-with-animation skip-lazy hover_show nectar-lazy animated-in loaded"
                                              data-delay="0"
                                              data-animation="fade-in"
                                              src="./assets/wp-content/uploads/2022/01/set2a-1629404118-1.jpg"
                                              alt=""
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                              srcSet="./assets/wp-content/uploads/2022/01/set2a-1629404118-1.jpg 776w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-300x387.jpg 300w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-600x773.jpg 600w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-233x300.jpg 233w, ./assets/wp-content/uploads/2022/01/set2a-1629404118-1-768x990.jpg 768w"
                                              width="776"
                                              height="1000"
                                            />
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p>
                                        <a href="#">
                                          LILY &amp; LAVENDER SKIN PAMPER &amp;
                                          NOURISHING SPA TRIO SET
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                      <p style={{ textAlign: "center" }}>
                                        <a
                                          style={{
                                            fontSize: "13px",
                                            fontWeight: 500,
                                          }}
                                          href="#"
                                        >
                                          $184.00
                                        </a>
                                      </p>
                                    </div>
                                  </div>

                                  <div className="wpb_text_column wpb_content_element  hover_show_text">
                                    <div className="wpb_wrapper">
                                      <p>
                                        GIFTS &amp; SETS
                                        <br />
                                        <a href="#">Add to Cart</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* ceci est la fin */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="about_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-section  vc_row-o-equal-height vc_row-flex  vc_row-o-content-middle   right_padding_90px left_padding_90px right_padding_tablet_40px left_padding_tablet_40px "
                style={{ paddingTop: "60px", paddingBottom: "60px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div
                    className="vc_col-sm-6 about_col_txt wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element ">
                          <div className="wpb_wrapper">
                            <h3>
                              <span style={{ color: "#35465a" }}>
                                Our Commitment
                                <br />
                              </span>
                            </h3>
                            <p>
                              <span style={{ color: "#000000" }}>
                                LUXURY, SAFE, NON-TOXIC SKINCARE.
                              </span>
                            </p>
                            <p>
                              <span style={{ color: "#000000" }}>
                                WOMEN OF ANY RACE – ANY TYPE OF SKIN – ANY
                              </span>
                              <br />
                              <span style={{ color: "#000000" }}>
                                RANGE OF AGE
                              </span>
                            </p>
                            <p>
                              <span style={{ color: "#000000" }}>
                                LapOtencielle is a revolutionary organic
                                skincare brand
                                <br />
                                committed to giving pure, 100% high-quality,
                                natural,
                                <br />
                                botanical, organic ingredients without
                                compromising.
                                <br />
                                Thoughtfully formulated by a woman that is
                                devoted to
                                <br />
                                not only providing the best product. Yet, a
                                product that will
                                <br />
                                work for any woman, no matter their age or race,
                                all around
                                <br />
                                the globe. Each product has the right amount of
                                <br />
                                combinations of each ingredient, guaranteeing
                                that you&#8217;re
                                <br />
                                getting the right amount of nutrients your skin
                                deserves.
                              </span>
                            </p>
                            <p>
                              <span style={{ color: "#000000" }}>
                                NO PARFUM- NO DYE – NO PARABEN -NATURAL
                              </span>
                              <br />
                              <span style={{ color: "#000000" }}>
                                SCENTED – CHEMICAL FREE.
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          className="img-with-aniamtion-wrap "
                          data-max-width="100%"
                          data-max-width-mobile="default"
                          data-shadow="none"
                          data-animation="fade-in"
                        >
                          <div className="inner">
                            <div className="hover-wrap">
                              <div className="hover-wrap-inner">
                                <img
                                  className="img-with-animation skip-lazy  nectar-lazy"
                                  data-delay="0"
                                  height="2304"
                                  width="1728"
                                  data-animation="fade-in"
                                  data-nectar-img-src="./assets/wp-content/uploads/2022/01/1627069191-our-commitment2.jpeg"
                                  src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201728%202304'%2F%3E"
                                  alt=""
                                  data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/1627069191-our-commitment2.jpeg 1728w, ./assets/wp-content/uploads/2022/01/1627069191-our-commitment2.jpeg 300w, ./assets/wp-content/uploads/2022/01/1627069191-our-commitment2.jpeg 600w, ./assets/wp-content/uploads/2022/01/1627069191-our-commitment2.jpeg 225w, ./assets/wp-content/uploads/2022/01/1627069191-our-commitment2.jpeg 768w, ./assets/wp-content/uploads/2022/01/1627069191-our-commitment2.jpeg 1152w, ./assets/wp-content/uploads/2022/01/1627069191-our-commitment2.jpeg 1536w"
                                  sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="we_belive_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row  "
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div className="wpb_text_column wpb_content_element  belive_text">
                          <div className="wpb_wrapper">
                            <h4 style={{ textAlign: "center" }}>
                              <span style={{ color: "#35465a" }}>
                                WE BELIEVE MORE MATTERS.
                              </span>
                            </h4>
                            <p style={{ textAlign: "center" }}>
                              <span style={{ color: "#2a55b0" }}>
                                “ We pack our products with the highest levels
                                of concentration of ingredients to deliver
                                maximum results—without using a single drop of
                                artificial chemicals. Our products are for those
                                who expect the best and want outstanding results
                                from their skincare.”
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="logo_image_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row  "
                style={{ paddingTop: "30px", paddingBottom: "30px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div className="row-bg"></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          className="img-with-aniamtion-wrap center"
                          data-max-width="100%"
                          data-max-width-mobile="default"
                          data-shadow="none"
                          data-animation="fade-in"
                        >
                          <div className="inner">
                            <div className="hover-wrap">
                              <div className="hover-wrap-inner">
                                <img
                                  className="img-with-animation skip-lazy  nectar-lazy"
                                  data-delay="0"
                                  height="112"
                                  width="234"
                                  data-animation="fade-in"
                                  data-nectar-img-src="./assets/wp-content/uploads/2022/01/images-logo_solo2.png"
                                  src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20234%20112'%2F%3E"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="last_Sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex  vc_row-o-content-top  news_letter_sec blog_pro_sec"
                style={{ paddingTop: "0px", paddingBottom: "0px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div
                      className="row-bg using-bg-color"
                      style={{ backgroundColor: "#f5f5f5" }}
                    ></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          id="newsletter_Sec"
                          data-midnight=""
                          data-column-margin="default"
                          className="wpb_row vc_row-fluid vc_row inner_row   right_padding_15pct left_padding_15pct "
                        >
                          <div className="row-bg-wrap">
                            {" "}
                            <div className="row-bg"></div>{" "}
                          </div>
                          <div className="row_col_wrap_12_inner col span_12  left">
                            <div
                              className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-using-bg="true"
                              data-padding-pos="all"
                              data-has-bg-color="true"
                              data-bg-color="#ffffff"
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div
                                  className="column-bg-overlay-wrap"
                                  data-bg-animation="none"
                                >
                                  <div
                                    className="column-bg-overlay"
                                    style={{
                                      opacity: 1,
                                      backgroundColor: "#ffffff",
                                    }}
                                  ></div>
                                </div>
                                <div className="wpb_wrapper">
                                  <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                                    <div className="wpb_wrapper">
                                      <ul className="newsletter-text">
                                        <li
                                          style={{
                                            width: "94px!important",
                                            opacity: "1",
                                          }}
                                        >
                                          <img
                                            style={{ float: "left" }}
                                            width="94"
                                            height="71"
                                            src="./assets/trylink.xyz/dev1/lapOtencielle/wp-content/uploads/2022/01/mail.html"
                                            alt=""
                                            loading="lazy"
                                          />
                                        </li>
                                        <li
                                          style={{
                                            fontSize: "17px",
                                            color: "#000!important",
                                            opacity: "1",
                                            textAlign: "left",
                                          }}
                                        >
                                          SUBSCRIBE TO OUR <br />
                                          NEWSLETTER
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="wpb_widgetised_column wpb_content_element">
                                    <div
                                      id="sidebar"
                                      data-nectar-ss=""
                                      className="wpb_wrapper"
                                    >
                                      <div
                                        id="newsletterwidgetminimal-4"
                                        className="widget widget_newsletterwidgetminimal"
                                      >
                                        <h4>
                                          Get latest news, offers and discounts.
                                        </h4>
                                        <div className="tnp tnp-widget-minimal">
                                          <form
                                            className="tnp-form"
                                            action="#"
                                            method="post"
                                          >
                                            {/* <input type="hidden" name="nr" value="widget-minimal"/> */}
                                            <input
                                              className="tnp-email"
                                              type="email"
                                              required
                                              name="ne"
                                              placeholder="your email"
                                            />
                                            <input
                                              className="tnp-submit"
                                              type="submit"
                                              value="Subscribe"
                                            />
                                          </form>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="divider-wrap" data-alignment="default">
                          <div
                            style={{ height: "25px" }}
                            className="divider"
                          ></div>
                        </div>
                        <div className="wpb_text_column wpb_content_element  OUR_LATEST_news">
                          <div className="wpb_wrapper">
                            <h2
                              style={{ textAlign: "center" }}
                              data-content-type="heading"
                              data-appearance="default"
                              data-element="main"
                            >
                              OUR LATEST
                            </h2>
                            <h3 style={{ textAlign: "center" }}>NEWS</h3>
                          </div>
                        </div>

                        <div
                          className="nectar-flickity not-initialized nectar-carousel"
                          data-centered-cells="true"
                          data-touch-icon-color="default"
                          data-control-color="default"
                          data-overflow="hidden"
                          data-r-bottom-total=""
                          data-drag-scale="true"
                          data-wrap="wrap"
                          data-spacing="default"
                          data-controls="next_prev_arrows_overlaid"
                          data-pagination-alignment="default"
                          data-adaptive-height="true"
                          data-border-radius="none"
                          data-column-border=""
                          data-column-padding="0"
                          data-format="default"
                          data-autoplay="true"
                          data-autoplay-dur="5000"
                          data-control-style="material_pagination"
                          data-desktop-columns="1"
                          data-small-desktop-columns="1"
                          data-tablet-columns="1"
                          data-column-color=""
                        >
                          <div className="flickity-viewport">
                            {" "}
                            <div className="flickity-slider">
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <img
                                              className="img-with-animation skip-lazy  nectar-lazy"
                                              data-delay="0"
                                              height="260"
                                              width="460"
                                              data-animation="fade-in"
                                              data-nectar-img-src="./assets/wp-content/uploads/2022/01/v2-1637748200.jpg"
                                              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20460%20260'%2F%3E"
                                              alt=""
                                              data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/v2-1637748200.jpg 460w, ./assets/wp-content/uploads/2022/01/v2-1637748200-300x170.jpg 300w"
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="wpb_raw_code wpb_content_element wpb_raw_html c-play">
                                      <div className="wpb_wrapper">
                                        <a
                                          href="#"
                                          className="c-play videopoppupblog"
                                        >
                                          <svg
                                            style={{ color: "#CBCD54" }}
                                            className="svg-inline--fa fa-play-circle fa-w-16 c-play fa-5x"
                                            aria-hidden="true"
                                            data-prefix="far"
                                            data-icon="play-circle"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                            data-fa-i2svg=""
                                          >
                                            <path
                                              fill="currentColor"
                                              d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z"
                                            ></path>
                                          </svg>
                                        </a>
                                      </div>
                                    </div>
                                    <div
                                      id="fws_630520028bccc"
                                      data-midnight=""
                                      data-column-margin="default"
                                      className="wpb_row vc_row-fluid vc_row inner_row  slider_bg_last_sec"
                                    >
                                      <div className="row-bg-wrap">
                                        {" "}
                                        <div className="row-bg"></div>{" "}
                                      </div>
                                      <div className="row_col_wrap_12_inner col span_12  left">
                                        <div
                                          className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                                          data-padding-pos="all"
                                          data-has-bg-color="false"
                                          data-bg-color=""
                                          data-bg-opacity="1"
                                          data-animation=""
                                          data-delay="0"
                                        >
                                          <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                              <div className="wpb_text_column wpb_content_element  bg_black_txt">
                                                <div className="wpb_wrapper">
                                                  <p>
                                                    <span
                                                      style={{
                                                        color: "#ffffff",
                                                      }}
                                                    >
                                                      MARCH 08, 2021
                                                    </span>
                                                  </p>
                                                </div>
                                              </div>

                                              <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                  <h4>
                                                    AGE GRACEFULLY
                                                    <br />
                                                    Collection coming soon!
                                                  </h4>
                                                </div>
                                              </div>

                                              <div className="wpb_text_column wpb_content_element  first_last_sec_slide_txt">
                                                <div className="wpb_wrapper">
                                                  <p>
                                                    WE WILL KEEP YOU UPDATED ON
                                                    OUR NEW
                                                    <br />
                                                    PRODUCTS HERE
                                                  </p>
                                                </div>
                                              </div>

                                              <Link
                                                className="nectar-button small regular accent-color  regular-button"
                                                to={
                                                  "/news/AGE GRACEFULLY Collection coming soon!"
                                                }
                                                data-color-override="false"
                                                data-hover-color-override="false"
                                                data-hover-text-color-override="#fff"
                                              >
                                                <span>READ MORE</span>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="cell">
                                <div className="inner-wrap-outer">
                                  <div className="inner-wrap">
                                    <div
                                      className="img-with-aniamtion-wrap "
                                      data-max-width="100%"
                                      data-max-width-mobile="default"
                                      data-shadow="none"
                                      data-animation="fade-in"
                                    >
                                      <div className="inner">
                                        <div className="hover-wrap">
                                          <div className="hover-wrap-inner">
                                            <img
                                              className="img-with-animation skip-lazy  nectar-lazy"
                                              data-delay="0"
                                              height="260"
                                              width="460"
                                              data-animation="fade-in"
                                              data-nectar-img-src="./assets/wp-content/uploads/2022/01/v1-1637748214.jpg"
                                              src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20460%20260'%2F%3E"
                                              alt=""
                                              data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/v1-1637748214.jpg 460w, ./assets/wp-content/uploads/2022/01/v1-1637748214-300x170.jpg 300w"
                                              sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      id="fws_630520028cc3b"
                                      data-midnight=""
                                      data-column-margin="default"
                                      className="wpb_row vc_row-fluid vc_row inner_row  slider_bg_last_sec slider_last_sec_change_font_family"
                                    >
                                      <div className="row-bg-wrap">
                                        {" "}
                                        <div className="row-bg"></div>{" "}
                                      </div>
                                      <div className="row_col_wrap_12_inner col span_12  left">
                                        <div
                                          className="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                                          data-padding-pos="all"
                                          data-has-bg-color="false"
                                          data-bg-color=""
                                          data-bg-opacity="1"
                                          data-animation=""
                                          data-delay="0"
                                        >
                                          <div className="vc_column-inner">
                                            <div className="wpb_wrapper">
                                              <div className="wpb_text_column wpb_content_element  bg_black_txt">
                                                <div className="wpb_wrapper">
                                                  <p>
                                                    <span
                                                      style={{
                                                        color: "#ffffff",
                                                      }}
                                                    >
                                                      SEPTEMBER 25, 2020
                                                    </span>
                                                  </p>
                                                </div>
                                              </div>

                                              <div className="wpb_text_column wpb_content_element ">
                                                <div className="wpb_wrapper">
                                                  <h4>
                                                    GUIDANCE ON SKIN
                                                    <br />
                                                    MOISTURIZERS
                                                  </h4>
                                                </div>
                                              </div>

                                              <div className="wpb_text_column wpb_content_element  first_last_sec_slide_two_txt">
                                                <div className="wpb_wrapper">
                                                  <p>
                                                    Sometimes it&#8217;s hard to
                                                    figure out
                                                    <br />
                                                    what moisturizer to use.
                                                    What&#8217;s the
                                                    diffe&#8230;
                                                  </p>
                                                </div>
                                              </div>

                                              <Link
                                                className="nectar-button small regular accent-color  regular-button"
                                                to={
                                                  "/news/GUIDANCE ON SKIN MOISTURIZERS"
                                                }
                                                data-color-override="false"
                                                data-hover-color-override="false"
                                                data-hover-text-color-override="#fff"
                                              >
                                                <span>READ MORE</span>
                                              </Link>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="brand_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-section  "
                style={{ paddingTop: "0px", paddingBottom: "60px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div
                      className="row-bg using-bg-color"
                      style={{ backgroundColor: "#f5f5f5" }}
                    ></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark center  justify_content_center">
                  {/* <div  className="vc_col-sm-1/5 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "  data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" >
		<div className="vc_column-inner" >
			<div className="wpb_wrapper">
				<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
					<Link to="/products/OUR-AGE-GRACEFULLY-PRODUCTS/age" >
							<img className="img-with-animation skip-lazy grey_bg_image nectar-lazy" data-delay="0" height="38" width="350" data-animation="fade-in" data-nectar-img-src="./assets/wp-content/uploads/2022/01/age.png" src="./assets/wp-content/uploads/2022/01/age.png" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/age.png 350w, ./assets/wp-content/uploads/2022/01/age-300x33.png 300w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
					</Link>
           
          </div>
        </div>
      </div>
      </div>
			</div> 
		</div>
	</div> 

	<div  className="vc_col-sm-1/5 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "  data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" >
		<div className="vc_column-inner" >
			<div className="wpb_wrapper">
				<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
					<Link to="/products/OUR-BELLE-COMME-LE-JOUR-PRODUCTS/belle">
							<img className="img-with-animation skip-lazy grey_bg_image nectar-lazy" data-delay="0" height="41" width="376" data-animation="fade-in" data-nectar-img-src="./assets/wp-content/uploads/2022/01/bell.png" src="./assets/wp-content/uploads/2022/01/bell.png" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/bell.png 376w, ./assets/wp-content/uploads/2022/01/bell-300x33.png 300w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
					</Link>
            
          </div>
        </div>
      </div>
      </div>
			</div> 
		</div>
	</div> 

	<div  className="vc_col-sm-1/5 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "  data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" >
		<div className="vc_column-inner" >
			<div className="wpb_wrapper">
				<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
					<Link to="/products/IN-PARIS-BODY-CRÉME-SOUFFLÉ-PRODUCTS/paris">
							<img className="img-with-animation skip-lazy grey_bg_image nectar-lazy" data-delay="0" height="41" width="331" data-animation="fade-in" data-nectar-img-src="./assets/wp-content/uploads/2022/02/sun.png" src="./assets/wp-content/uploads/2022/02/sun.png" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/02/sun.png 331w, ./assets/wp-content/uploads/2022/02/sun-300x37.png 300w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
					</Link>
           
          </div>
        </div>
      </div>
      </div>
			</div> 
		</div>
	</div>  */}

                  <div
                    className="vc_col-sm-1/5 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          className="img-with-aniamtion-wrap "
                          data-max-width="100%"
                          data-max-width-mobile="default"
                          data-shadow="none"
                          data-animation="fade-in"
                        >
                          <div className="inner">
                            <div className="hover-wrap">
                              <div className="hover-wrap-inner">
                                <Link to="/products/OUR-ORANGE-AND-VANILLA-PRODUCTS/orange">
                                  <img
                                    className="img-with-animation skip-lazy grey_bg_image nectar-lazy"
                                    data-delay="0"
                                    height="41"
                                    width="331"
                                    data-animation="fade-in"
                                    data-nectar-img-src="./assets/wp-content/uploads/2022/01/orange.png"
                                    src="./assets/wp-content/uploads/2022/01/orange.png"
                                    alt=""
                                    data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/orange.png 331w, ./assets/wp-content/uploads/2022/01/orange-300x37.png 300w"
                                    sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="vc_col-sm-1/5 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          className="img-with-aniamtion-wrap "
                          data-max-width="100%"
                          data-max-width-mobile="default"
                          data-shadow="none"
                          data-animation="fade-in"
                        >
                          <div className="inner">
                            <div className="hover-wrap">
                              <div className="hover-wrap-inner">
                                <Link to="/products/OUR-LILY-AND-LAVENDER-PRODUCTS/lavender">
                                  <img
                                    className="img-with-animation skip-lazy grey_bg_image nectar-lazy"
                                    data-delay="0"
                                    height="41"
                                    width="331"
                                    data-animation="fade-in"
                                    data-nectar-img-src="./assets/wp-content/uploads/2022/01/lily.png"
                                    src="./assets/wp-content/uploads/2022/01/lily.png"
                                    alt=""
                                    data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/lily.png 331w, ./assets/wp-content/uploads/2022/01/lily-300x37.png 300w"
                                    sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                  />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div id="instagram_sec"  data-column-margin="default" data-midnight="dark"  className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex "  style={{ paddingTop: "120px", paddingBottom: "15px" }} ><div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg using-bg-color"  style={{ backgroundColor: "#f5f5f5" }}></div></div></div><div className="row_col_wrap_12 col span_12 dark left">
	<div  className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "  data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0" >
		<div className="vc_column-inner" >
			<div className="wpb_wrapper">
				<div id="insta_inner_image_sec" data-midnight="" data-column-margin="default" className="wpb_row vc_row-fluid vc_row inner_row   right_padding_100px right_padding_tablet_80px left_padding_phone_0px "   ><div className="row-bg-wrap"> <div className="row-bg" ></div> </div><div className="row_col_wrap_12_inner col span_12  left">
	<div  className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner" >
		<div className="wpb_wrapper">
			<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
            <img className="img-with-animation skip-lazy insta_img_one nectar-lazy" data-delay="0" height="290" width="290" data-animation="fade-in" data-nectar-img-src="./assets/wp-content/uploads/2022/01/290x290a.jpg" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20290%20290'%2F%3E" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/290x290a.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290a-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290a-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290a-140x140.jpg 140w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
          </div>
        </div>
      </div>
    </div>
		</div> 
	</div>
	</div> 

	<div  className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner" >
		<div className="wpb_wrapper">
			<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
            <img className="img-with-animation skip-lazy insta_img_two nectar-lazy" data-delay="0" height="290" width="290" data-animation="fade-in" data-nectar-img-src="./assets/wp-content/uploads/2022/01/290x290b.jpg" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20290%20290'%2F%3E" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/290x290b.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290b-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290b-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290b-140x140.jpg 140w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
          </div>
        </div>
      </div>
    </div>
		</div> 
	</div>
	</div> 

	<div  className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner" >
		<div className="wpb_wrapper">
			<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
            <img className="img-with-animation skip-lazy insta_img_three nectar-lazy" data-delay="0" height="290" width="290" data-animation="fade-in" data-nectar-img-src="./assets/wp-content/uploads/2022/01/290x290c.jpg" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20290%20290'%2F%3E" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/290x290c.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290c-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290c-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290c-140x140.jpg 140w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
          </div>
        </div>
      </div>
    </div>
		</div> 
	</div>
	</div> 

	<div  className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner" >
		<div className="wpb_wrapper">
			<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
            <img className="img-with-animation skip-lazy insta_img_four nectar-lazy" data-delay="0" height="290" width="290" data-animation="fade-in" data-nectar-img-src="./assets/wp-content/uploads/2022/01/290x290d.jpg" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20290%20290'%2F%3E" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/290x290d.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290d-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290d-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290d-140x140.jpg 140w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
          </div>
        </div>
      </div>
    </div>
		</div> 
	</div>
	</div> 

	<div  className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner" >
		<div className="wpb_wrapper">
			<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
            <img className="img-with-animation skip-lazy insta_img_five nectar-lazy" data-delay="0" height="290" width="290" data-animation="fade-in" data-nectar-img-src="./assets/wp-content/uploads/2022/01/290x290e.jpg" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20290%20290'%2F%3E" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/290x290e.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290e-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290e-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290e-140x140.jpg 140w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
          </div>
        </div>
      </div>
    </div>
		</div> 
	</div>
	</div> 

	<div  className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "   data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner" >
		<div className="wpb_wrapper">
			<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
      <div className="inner">
        <div className="hover-wrap"> 
          <div className="hover-wrap-inner">
            <img className="img-with-animation skip-lazy insta_img_six nectar-lazy" data-delay="0" height="290" width="290" data-animation="fade-in" data-nectar-img-src="./assets/wp-content/uploads/2022/01/290x290f.jpg" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20290%20290'%2F%3E" alt="" data-nectar-img-srcset="./assets/wp-content/uploads/2022/01/290x290f.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290f-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290f-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290f-140x140.jpg 140w" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
          </div>
        </div>
      </div>
    </div>
		</div> 
	</div>
	</div> 
</div></div>
	<div className="wpb_raw_code wpb_content_element wpb_raw_html" >
		<div className="wpb_wrapper">
			<a href="https://www.instagram.com/lapotencielle">
<div className="c-ip-instagram__info"><svg className="svg-inline--fa fa-instagram fa-w-14 fa-2x" aria-hidden="true" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg> 
<div className="c-ip-instagram__insta" style={{
fontSize: "20px",
textTransform: "uppercase",
paddingTop: "10px" }} >Instagram</div>
<div className="c-ip-instagram__title" style={{ fontSize: "22px" }}>
@lapotencielle
</div>
</div>
</a>
		</div>
	</div>

			</div> 
		</div>
	</div> 
</div>
		</div> */}
              {/* debut */}

              <div
                id="instagram_sec"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row full-width-content  vc_row-o-equal-height vc_row-flex  "
                style={{ paddingTop: "120px", paddingBottom: "15px" }}
              >
                <div
                  className="row-bg-wrap"
                  data-bg-animation="none"
                  data-bg-overlay="false"
                >
                  <div className="inner-wrap">
                    <div
                      className="row-bg using-bg-color"
                      style={{ backgroundColor: "#f5f5f5" }}
                    ></div>
                  </div>
                </div>
                <div className="row_col_wrap_12 col span_12 dark left">
                  <div
                    className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone "
                    data-padding-pos="all"
                    data-has-bg-color="false"
                    data-bg-color=""
                    data-bg-opacity="1"
                    data-animation=""
                    data-delay="0"
                  >
                    <div className="vc_column-inner">
                      <div className="wpb_wrapper">
                        <div
                          id="insta_inner_image_sec"
                          data-midnight=""
                          data-column-margin="default"
                          className="wpb_row vc_row-fluid vc_row inner_row   right_padding_100px right_padding_tablet_80px left_padding_phone_0px "
                        >
                          <div className="row-bg-wrap">
                            {" "}
                            <div className="row-bg"></div>{" "}
                          </div>
                          <div className="row_col_wrap_12_inner col span_12  left">
                            <div
                              className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner img-loaded">
                                          <img
                                            className="img-with-animation skip-lazy insta_img_one nectar-lazy animated-in loaded"
                                            data-delay="0"
                                            data-animation="fade-in"
                                            src="./assets/wp-content/uploads/2022/01/290x290a.jpg"
                                            alt=""
                                            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            srcSet="./assets/wp-content/uploads/2022/01/290x290a.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290a-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290a-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290a-140x140.jpg 140w"
                                            width="290"
                                            height="290"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner img-loaded">
                                          <img
                                            className="img-with-animation skip-lazy insta_img_two nectar-lazy animated-in loaded"
                                            data-delay="0"
                                            data-animation="fade-in"
                                            src="./assets/wp-content/uploads/2023/01/290x290b.jpeg"
                                            alt=""
                                            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            srcSet="./assets/wp-content/uploads/2023/01/290x290b.jpeg 1160w, ./assets/wp-content/uploads/2023/01/290x290b-300x300.jpeg 300w, ./assets/wp-content/uploads/2023/01/290x290b-1024x1024.jpeg 1024w, ./assets/wp-content/uploads/2023/01/290x290b-150x150.jpeg 150w, ./assets/wp-content/uploads/2023/01/290x290b-768x768.jpeg 768w, ./assets/wp-content/uploads/2023/01/290x290b-100x100.jpeg 100w, ./assets/wp-content/uploads/2023/01/290x290b-140x140.jpeg 140w, ./assets/wp-content/uploads/2023/01/290x290b-500x500.jpeg 500w, ./assets/wp-content/uploads/2023/01/290x290b-350x350.jpeg 350w, ./assets/wp-content/uploads/2023/01/290x290b-1000x1000.jpeg 1000w, ./assets/wp-content/uploads/2023/01/290x290b-800x800.jpeg 800w, ./assets/wp-content/uploads/2023/01/290x290b-600x600.jpeg 600w"
                                            width="1160"
                                            height="1160"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner img-loaded">
                                          <img
                                            className="img-with-animation skip-lazy insta_img_three nectar-lazy animated-in loaded"
                                            data-delay="0"
                                            data-animation="fade-in"
                                            src="./assets/wp-content/uploads/2022/01/290x290c.jpg"
                                            alt=""
                                            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            srcSet="./assets/wp-content/uploads/2022/01/290x290c.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290c-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290c-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290c-140x140.jpg 140w"
                                            width="290"
                                            height="290"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner img-loaded">
                                          <img
                                            className="img-with-animation skip-lazy insta_img_four nectar-lazy animated-in loaded"
                                            data-delay="0"
                                            data-animation="fade-in"
                                            src="./assets/wp-content/uploads/2022/01/290x290d.jpg"
                                            alt=""
                                            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            srcSet="./assets/wp-content/uploads/2022/01/290x290d.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290d-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290d-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290d-140x140.jpg 140w"
                                            width="290"
                                            height="290"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner img-loaded">
                                          <img
                                            className="img-with-animation skip-lazy insta_img_five nectar-lazy animated-in loaded"
                                            data-delay="0"
                                            data-animation="fade-in"
                                            src="./assets/wp-content/uploads/2022/01/290x290e.jpg"
                                            alt=""
                                            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            srcSet="./assets/wp-content/uploads/2022/01/290x290e.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290e-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290e-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290e-140x140.jpg 140w"
                                            width="290"
                                            height="290"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="vc_col-sm-2 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone "
                              data-padding-pos="all"
                              data-has-bg-color="false"
                              data-bg-color=""
                              data-bg-opacity="1"
                              data-animation=""
                              data-delay="0"
                            >
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div
                                    className="img-with-aniamtion-wrap "
                                    data-max-width="100%"
                                    data-max-width-mobile="default"
                                    data-shadow="none"
                                    data-animation="fade-in"
                                  >
                                    <div className="inner">
                                      <div
                                        className="hover-wrap"
                                        style={{ opacity: 1 }}
                                      >
                                        <div className="hover-wrap-inner img-loaded">
                                          <img
                                            className="img-with-animation skip-lazy insta_img_six nectar-lazy animated-in loaded"
                                            data-delay="0"
                                            data-animation="fade-in"
                                            src="./assets/wp-content/uploads/2022/01/290x290f.jpg"
                                            alt=""
                                            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                            srcSet="./assets/wp-content/uploads/2022/01/290x290f.jpg 290w, ./assets/wp-content/uploads/2022/01/290x290f-150x150.jpg 150w, ./assets/wp-content/uploads/2022/01/290x290f-100x100.jpg 100w, ./assets/wp-content/uploads/2022/01/290x290f-140x140.jpg 140w"
                                            width="290"
                                            height="290"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                          <div className="wpb_wrapper">
                            <a href="https://www.instagram.com/lapotencielle">
                              <div className="c-ip-instagram__info">
                                <svg
                                  className="svg-inline--fa fa-instagram fa-w-14 fa-2x"
                                  aria-hidden="true"
                                  data-prefix="fab"
                                  data-icon="instagram"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                  data-fa-i2svg=""
                                >
                                  <path
                                    fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                  ></path>
                                </svg>
                                {/*<!-- <i className="fab fa-instagram fa-2x"></i> -->*/}
                              </div>
                            </a>
                            <div
                              className="c-ip-instagram__insta"
                              style={{
                                fontSize: "20px",
                                textTransform: "uppercase",
                                paddingTop: "10px",
                              }}
                            >
                              Instagram
                            </div>
                            <div
                              className="c-ip-instagram__title"
                              style={{ fontSize: "22px" }}
                            >
                              @lapotencielle
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* fin */}
        </div>
      </div>

      {/* Footer  */}
      <Footer />
      {/* Footer  */}

      {/*  

</div>

<div id="footer-outer" data-midnight="light" data-cols="4" data-custom-color="false" data-disable-copyright="true" data-matching-section-color="true" data-copyright-line="false" data-using-bg-img="false" data-bg-img-overlay="0.8" data-full-width="false" data-using-widget-area="false" data-link-hover="default">
	
		
</div> 


	<div id="slide-out-widget-area-bg" className="slide-out-from-right dark">
				</div>

		<div id="slide-out-widget-area" className="slide-out-from-right" data-dropdown-func="separate-dropdown-parent-link" data-back-txt="Back">

			<div className="inner-wrap">
			<div className="inner" data-prepend-menu-mobile="false">

				<a className="slide_out_area_close" href="#"><span className="screen-reader-text">Close Menu</span>
					<span className="close-wrap"> <span className="close-line close-line1"></span> <span className="close-line close-line2"></span> </span>				</a>


									<div className="off-canvas-menu-container mobile-only">
						
										<a className="slide_out_area_close" href="#"><span className="screen-reader-text">Close Menu</span>
					<span className="close-wrap"> <span className="close-line close-line1"></span> <span className="close-line close-line2"></span> </span>				</a>

												<ul className="menu">
							<li className="megamenu columns menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-475"><a href="https://lapotencielle.com/our-collection-2/">OUR COLLECTION</a>
<ul className="sub-menu">
	<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children hide-title menu-item-hidden-text menu-item-594"><a href="#">OUR COLLECTION</a>
	<ul className="sub-menu">
		<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-490"><a href="our-orange-and-vanilla-products/index.html">OUR ORANGE AND VANILLA PRODUCTS</a></li>
		<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-485"><a href="our-lily-and-lavender-products/index.html">OUR LILY AND LAVENDER PRODUCTS</a></li>
		<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-484"><a href="our-age-gracefully-products/index.html">OUR AGE GRACEFULLY PRODUCTS</a></li>
		<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-495"><a href="in-paris-body-creme-souffle-products/index.html">IN PARIS BODY CRÉME SOUFFLÉ PRODUCTS</a></li>
		<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-498"><a href="our-belle-comme-le-jour-products/index.html">OUR BELLE COMME LE JOUR PRODUCTS</a></li>
		<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-501"><a href="accessories-tools/index.html">ACCESSORIES &#038; TOOLS</a></li>
	</ul>
</li>
</ul>
</li>
<li className="text_center menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-508"><a href="bath-and-body-2/index.html">BATH AND BODY</a>
<ul className="sub-menu">
	<li className="text_center_txt menu-item menu-item-type-post_type menu-item-object-page menu-item-505"><a href="our-duo-collection/index.html">OUR DUO COLLECTION</a></li>
	<li className="border_left menu-item menu-item-type-custom menu-item-object-custom menu-item-591"><a href="bath-and-body-2/index.html"><div className="nectar-ext-menu-item style-img-above-text"><div className="image-layer-outer hover-default"><div className="image-layer"></div><div className="color-overlay"></div></div><div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div></div></a></li>
</ul>
</li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-519"><a href="home-spa-2/index.html">HOME SPA</a>
<ul className="sub-menu">
	<li className="text_center_txt menu-item menu-item-type-post_type menu-item-object-page menu-item-522"><a href="body-polish/index.html">BODY POLISH</a></li>
	<li className="border_left menu-item menu-item-type-custom menu-item-object-custom menu-item-596"><a href="body-polish/index.html"><div className="nectar-ext-menu-item style-img-above-text"><div className="image-layer-outer hover-default"><div className="image-layer"></div><div className="color-overlay"></div></div><div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div></div></a></li>
</ul>
</li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-525"><a href="gifts-sets-2/index.html">GIFTS &#038; SETS</a>
<ul className="sub-menu">
	<li className="text_center_txt menu-item menu-item-type-post_type menu-item-object-page menu-item-528"><a href="our-gifts-sets-collection/index.html">OUR GIFTS &#038; SETS COLLECTION</a></li>
	<li className="border_left menu-item menu-item-type-custom menu-item-object-custom menu-item-597"><a href="gifts-sets-2/index.html"><div className="nectar-ext-menu-item style-img-above-text"><div className="image-layer-outer hover-default"><div className="image-layer"></div><div className="color-overlay"></div></div><div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div></div></a></li>
</ul>
</li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-531"><a href="body-care-2/index.html">BODY CARE</a>
<ul className="sub-menu">
	<li className="text_center_txt menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children hide-title menu-item-599"><a href="#">BODY CARE</a>
	<ul className="sub-menu">
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-534"><a href="body-lotion/index.html">BODY LOTION</a></li>
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-551"><a href="body-cream/index.html">BODY CREAM</a></li>
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-550"><a href="body-cream-butter/index.html">BODY CREAM BUTTER</a></li>
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-549"><a href="body-oil/index.html">BODY OIL</a></li>
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-548"><a href="body-scrub/index.html">BODY SCRUB</a></li>
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-547"><a href="body-balm/index.html">BODY BALM</a></li>
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-554"><a href="whipped-body-butter/index.html">WHIPPED BODY BUTTER</a></li>
	</ul>
</li>
	<li className="border_left menu-item menu-item-type-custom menu-item-object-custom menu-item-600"><a href="body-care-2/index.html"><div className="nectar-ext-menu-item style-img-above-text"><div className="image-layer-outer hover-default"><div className="image-layer"></div><div className="color-overlay"></div></div><div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div></div></a></li>
</ul>
</li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-572"><a href="facial-care-2/index.html">FACIAL CARE</a>
<ul className="sub-menu">
	<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children hide-title menu-item-602"><a href="#">FACIAL CARE</a>
	<ul className="sub-menu">
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-843"><a href="facial-cleanser/index.html">FACIAL CLEANSER</a></li>
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-568"><a href="facial-cream/index.html">FACIAL CREAM</a></li>
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-569"><a href="facial-mask/index.html">FACIAL MASK</a></li>
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-570"><a href="facial-oil/index.html">FACIAL OIL</a></li>
		<li className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page menu-item-571"><a href="facial-toner/index.html">FACIAL TONER</a></li>
	</ul>
</li>
	<li className="border_left menu-item menu-item-type-custom menu-item-object-custom menu-item-603"><a href="facial-care-2/index.html"><div className="nectar-ext-menu-item style-img-above-text"><div className="image-layer-outer hover-default"><div className="image-layer"></div><div className="color-overlay"></div></div><div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div></div></a></li>
</ul>
</li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-33"><a href="hair-care/index.html">HAIR CARE</a></li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27"><a href="about-us/index.html">ABOUT US</a></li>
<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-30"><a href="contact/index.html">CONTACT</a></li>
<li style={{ position: "relative" }} className="menu-item menu-item-gtranslate"> 
 <select className="notranslate" id="gtranslate_selector" 
 aria-label="Website Language Selector"><option value="">Select Language</option><option value="en|en">English</option><option value="en|fr">French</option><option value="en|de">German</option><option value="en|it">Italian</option><option value="en|ru">Russian</option><option value="en|es">Spanish</option></select>
<div id="google_translate_element2"></div>

</li>						</ul>

						<ul className="menu secondary-header-items">
													</ul>
					</div>
					
				</div>

				<div className="bottom-meta-wrap"></div> </div>  
				</div>
		
</div> */}
    </>
  );
};

export default Home;
