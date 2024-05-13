import { FC, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import { useEffect } from "react";
import ImageGallery from "react-image-gallery";

import * as Utils from "../../Utils";
import ReleatedProductBox from "../../Components/ReleatedProductBox";

import { Formik, Field, Form, FormikProps } from "formik";
import * as yup from "yup";

import { useAppDispatch, useAppSelector } from "../../Hooks/customSelector";
import {
  addProduct,
  removeProduct,
  updateProductQty,
  updateProducts,
} from "../../Redux/Reducers/storeReducer";
import Footer from "../../Layouts/Footer";
//import news.css
import "./news.css";

const News: FC = () => {
  let { title } = useParams();
  const store = useAppSelector((state) => state.store);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(title);
  }, []);

  return (
    <>
      <div className="newsPage" id="ajax-content-wrap">
        <br />
        <div className="breadcrumb">
          <span>
            <span>
              <Link to="/">Home</Link>
            </span>{" "}
            /{" "}
            <span className="breadcrumb_last" aria-current="page">
              {title}
            </span>
          </span>{" "}
        </div>
        <div
          id="page-header-wrap"
          data-animate-in-effect="none"
          data-midnight="light"
          className=""
          style={{ height: "200px" }}
        >
          <div
            id="page-header-bg"
            className="not-loaded "
            data-padding-amt="low"
            data-animate-in-effect="none"
            data-midnight="light"
            data-text-effect="none"
            data-bg-pos="center"
            data-alignment="center"
            data-alignment-v="middle"
            data-parallax="0"
            data-height="200"
            style={{ backgroundColor: "#e8f5e5", height: "200px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col span_6 ">
                  <div className="inner-wrap">
                    <h1>{title}</h1>
                    <span className="subheader"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-wrap" style={{ minHeight: "366px" }}>
          <div className="container main-content">
            <div className="row">
              <div
                id="blog_page"
                data-column-margin="default"
                data-midnight="dark"
                className="wpb_row vc_row-fluid vc_row  "
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
                      {title === "AGE GRACEFULLY Collection coming soon!" ? (
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
                                style={{ opacity: "1" }}
                              >
                                <div className="hover-wrap-inner img-loaded">
                                  <img
                                    className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                    data-delay="0"
                                    height="509"
                                    width="800"
                                    data-animation="fade-in"
                                    src="./assets/wp-content/uploads/2022/01/v2-1637748200-1.jpg"
                                    alt=""
                                    sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                    srcSet="./assets/wp-content/uploads/2022/01/v2-1637748200-1.jpg 800w, ./assets/wp-content/uploads/2022/01/v2-1637748200-1-300x191.jpg 300w, ./assets/wp-content/uploads/2022/01/v2-1637748200-1-768x489.jpg 768w, ./assets/wp-content/uploads/2022/01/v2-1637748200-1-600x382.jpg 600w"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <h2 className="card-title">
                                AGE GRACEFULLY Collection coming soon!
                              </h2>
                              <p>
                                WE WILL KEEP YOU UPDATED ON OUR NEW PRODUCTS
                                HERE
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}

                      {title === "GUIDANCE ON SKIN MOISTURIZERS" ? (
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
                                    className="img-with-animation skip-lazy nectar-lazy animated-in loaded"
                                    data-delay="0"
                                    height="509"
                                    width="800"
                                    data-animation="fade-in"
                                    src="./assets/wp-content/uploads/2022/01/v1-1637748214-1.jpg"
                                    alt=""
                                    sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"
                                    srcSet="./assets/wp-content/uploads/2022/01/v1-1637748214-1.jpg 800w, ./assets/wp-content/uploads/2022/01/v1-1637748214-1-300x191.jpg 300w, ./assets/wp-content/uploads/2022/01/v1-1637748214-1-768x489.jpg 768w, ./assets/wp-content/uploads/2022/01/v1-1637748214-1-600x382.jpg 600w"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <h2 className="card-title">
                                GUIDANCE ON SKIN MOISTURIZERS
                              </h2>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                Sometimes it’s hard to figure out what
                                moisturizer to use. What’s the difference
                                between a lotion and a creme? Butter vs. Balm?
                                It’s important to know which one works best for
                                your skin. LapOtencielle has a variety of
                                skincare products to match your skin type and
                                seasonal skin need.
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>Body Lotion</strong>
                              </p>
                              <p>
                                Lotions are hydrating daily moisturizers that we
                                put on our skin to keep it moist and protected.
                                Lotions are great for normal skin to dry skin
                                and in the summertime. Its low viscosity and
                                high water content make it less thick and
                                moister than other moisturizers, so it quickly
                                absorbs into your skin.&nbsp;LapOtencielle’s
                                lotions are enriched with natural organic oils
                                and butter to make even dry skin hydrated and
                                supple. Each one, uniquely formulated to meet
                                the requirements of your skin.
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>Explore them</p>
                              <p>
                                <Link to={{pathname:"/news/"+title}}>
                                  ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY
                                  LOTION&nbsp;
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  LILY &amp; LAVENDER LUXURIOUS NATURAL BODY
                                  LOTION&nbsp;
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  AGE GRACEFULLY LUXURIOUS NATURAL TURNOVER BODY
                                  LOTION
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  HYDRATING SHEA MILK DAILY BODY LOTION
                                </Link>
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>Body Soufflé</strong>
                                <br />
                                Soufflés are between lotions and crèmes, meaning
                                it has higher oil content than a lotion and less
                                water content than a crème. The main difference
                                is that a soufflé has a lighter airy consistency
                                than a crème due to its whipped formula before
                                packaging. Soufflés are great for dry skin, the
                                winter, or anyone who wants to have long-lasting
                                moisture sealed in their skin from the non-heavy
                                oil barrier the soufflé
                                leaves.&nbsp;LapOtencielle’s body soufflés
                                contain natural organic kinds of butter, oils,
                                and nectars to instantly richly nourish and
                                hydrate dry skin making the skin smooth, glowy,
                                and youthful-looking. LapOtencielle’s body
                                soufflés are very airy and moist, making them
                                beneficial for all types of skin. The signature
                                blend of essential oils in each soufflé is
                                crucial for the health and glow of your skin.
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>Explore them</p>
                              <p>
                                <Link to={{pathname:"/news/"+title}}>
                                  PARIS TEA MOIST BODY CRÈME SOUFFLÉ
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  SUNSET IN PARIS MOIST BODY CRÈME SOUFFLÉ
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  PARIS GARDEN MOIST BODY CRÈME SOUFFLÉ
                                </Link>
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>Body Cream</strong>
                                <br />
                                Crèmes have a higher viscosity or thickness than
                                lotions and soufflés. Having a thicker
                                consistency crèmes form an oil barrier to keep
                                the skin extra hydrated. That’s especially great
                                for those with extremely dehydrated skin and in
                                the wintertime. Crèmes are also great for
                                moisturizing the hands, legs, and
                                feet.&nbsp;LapOtencielle’s body creams are rich,
                                creamy, but light and glides on the skin,
                                effortlessly enriching the skin with nourishment
                                and hydration it needs, not forgetting the thin
                                oil barrier it leaves behind. Formulated with
                                rich organic natural nourishing kinds of butter,
                                oils, and hydrating ingredients to deeply
                                hydrate, nourish, moisturize, and soothe the
                                driest of skin. Each one is unique to bring the
                                glowing, youthful skin you deserve.
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>Explore them</p>
                              <p>
                                <Link to={{pathname:"/news/"+title}}>
                                  ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY
                                  CREAM&nbsp;
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  LILY &amp; LAVENDER LUXURIOUS NATURAL BODY
                                  CREAM
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  AGE GRACEFULLY LUXURIOUS NATURAL INTENSIVE
                                  NOURISHMENT BODY CRÈME
                                </Link>
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>Body Butter Cream</strong>
                                <br />
                                Body butter creams have a tiny amount of water,
                                unlike crème. Meaning body crèmes have a lesser
                                viscosity or thickness than body butter creams.
                                Great for those who want their skin deeply
                                moisturized and protected, like those with dry,
                                cracked skin and those who live in cold
                                areas.&nbsp; LapOtencielle’s body butter creams
                                are richly formulated with natural organic oils,
                                butter and blended with Aloes Vera juice.
                                LapOtencielle’s body butter creams are equally
                                moist and velvety, easy to apply on the skin,
                                like the knees, elbows, feet, and hands.
                                Excellent to keep your skin soft, well-hydrated,
                                glowing, gorgeous, and youthful-looking
                                throughout dry or cold climates.
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>Explore them</p>
                              <p>
                                <Link to={{pathname:"/news/"+title}}>
                                  ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY
                                  CREAM BUTTER
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  LILY &amp; LAVENDER LUXURIOUS NATURAL BODY
                                  CREAM BUTTER
                                </Link>
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>Body Butter</strong>
                                <br />
                                Body Butter has a very thick consistency since
                                it’s all oil content, unlike crèmes, soufflés,
                                and lotions. It consists of rich kinds of butter
                                like shea butter, cocoa butter, and mango
                                butter. It is infused with essential oils to
                                make it rich and more nurturing. It is
                                exceptional for the winter because it captures
                                more moisture than crème, making it beneficial
                                for rough, dry, itchy, and aging
                                skin.LapOtencielle’s body butters are blended
                                and lightly whipped with luscious organic kinds
                                of butter and essential oils. LapOtencielle’s
                                body butters will instantly soothe, moisturize,
                                revitalize, cracked dry skin, smooth out
                                wrinkles, and bring out the glow of any dull,
                                tired skin. Using a signature formulated blend
                                of essential oils, uniquely meeting your skin
                                requirements; great for nighttime skin
                                nourishment.
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>Explore them</p>
                              <p>
                                <Link to={{pathname:"/news/"+title}}>
                                  BELLE COMME LE JOUR COCO MOUSSE ORGANIC LIGHT
                                  WHIPPED BODY BUTTER
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  BELLE COMME LE JOUR DOUCE ROSIER ORGANIC LIGHT
                                  WHIPPED BODY BUTTER
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  BELLE COMME LE JOUR CHOCO GLACIER ORGANIC
                                  LIGHT WHIPPED BODY BUTTER
                                </Link>
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>Body Oil</strong>
                                <br />
                                Body oils have a base of carrier oils infused
                                with essentials oils. Body oils help re-regulate
                                how much oil your skin produces. Face oils, for
                                example, are especially great for oily skin
                                because it causes the skin to produce less
                                redundant oil. Also, oils help repair the top
                                layer of your skin and quickly sink in into your
                                skin.&nbsp;LapOtencielle’s oils contain
                                nourishing, organic natural botanical oils
                                blended with great essential oils to instantly
                                nourish, moisturize dry skin, and help with skin
                                imperfection. Each oil is uniquely blended to
                                meet your skin demands, with lightweight oils
                                that will sink into your skin to reveal brighter
                                and healthier younger-looking skin.
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>Explore them</p>
                              <p>
                                <Link to={{pathname:"/news/"+title}}>
                                  ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY
                                  OIL
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  LILY &amp; LAVENDER LUXURIOUS NATURAL BODY OIL
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  AGE GRACEFULLY LUXURIOUS NATURAL BODY &amp;
                                  FACIAL TONIC OIL
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  AGE GRACEFULLY LUXURIOUS NATURAL FACIAL
                                  REJUVENATING OIL
                                </Link>
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>Balm</strong>
                                <br />
                                Balm, like body butter, has a super thick
                                consistency due to its high butter and no water
                                content. It moisturizes the skin best when
                                applied to damp skin, forming a secure oil
                                barrier. Due to its immensely thick consistency,
                                it’s great for those with dry skin, who live in
                                cold areas, who are in the wintertime, and those
                                who want a thick moisturizer to use.
                                <br />
                                LapOtencielle’s non-greasy body balms will bring
                                out the lightness in your skin. The blends of
                                different rich organic natural kinds of butter,
                                oils, essentials oils, and raw honey in
                                LapOtencielle’s blams will instantly soften,
                                smooth, and eliminate dull, flaky, dry, and
                                tired skin. To evenly tone your skin revealing,
                                younger, radiant skin.
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>Explore them</p>
                              <p>
                                <Link to={{pathname:"/news/"+title}}>
                                  ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY
                                  &amp; FACIAL BALM
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  LILY &amp; LAVENDER LUXURIOUS NATURAL BODY
                                  &amp; FACIAL BALM
                                </Link>
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>Bath Scrubs</strong>
                                <br />
                                A body scrub is an exfoliant made out of sugar
                                and salt with an oil base that sloughs off dead
                                skin when gently rubbed on the skin. Exfoliating
                                and detoxing your skin for the result of
                                healthier, smoother, and brighter skin;
                                exceptional for dry, itchy skin.
                                <br />
                                LapOtencielle’s scrubs are very hydrating and
                                nourishing, formulated to improve the skin’s
                                complexion by getting rid of dead skin, leaving
                                the skin glowy, younger, smoother, and soft to
                                touch. The scrubs have blends of organic cane
                                sugar, Mediterranean sea salt, astounding
                                organic natural kinds of butter, oils, and so
                                much more.
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>Explore them</p>
                              <p>
                                <Link to={{pathname:"/news/"+title}}>
                                  ORANGE &amp; VANILLA ORGANIC CANE SUGAR &amp;
                                  SEA SALT CREAMY BODY POLISH
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  LILY &amp; LAVENDER ORGANIC CANE SUGAR &amp;
                                  SEA SALT CREAMY BODY POLISH
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  PARIS TEA CREAMY MOIST BODY POLISH SCRUB
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  SUNSET IN PARIS CREAMY MOIST BODY POLISH SCRUB
                                </Link>
                                <br />
                                <Link to={{pathname:"/news/"+title}}>
                                  PARIS GARDEN CREAMY MOIST BODY POLISH
                                  SCRUB&nbsp;
                                </Link>
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>Mask</strong>
                                <br />
                                Facial masks are facial treatments sometimes
                                made from clay, charcoal mud, or even honey to
                                use for your entire face.&nbsp; The purpose is
                                to moisturize, hydrate, and introduce minerals
                                and nutrients to your skin while taking out any
                                impurities, such as dirt, oils, and unclogging
                                pores giving you much healthier and cleaner
                                skin.
                                <br />
                                LapOtencielle’s mask contains ROSE CLAY, MILK,
                                ALGAE NECTAR, GERANIUM OIL, and ROSEHIP OIL to
                                deeply draw out impurities without drying your
                                skin, leaving behind a fresher, plumper,
                                smoother, hydrated, and more even complexion.
                                Use overnight to treat age signs and acne-prone
                                skin.
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>Explore them</p>
                              <p>
                                <Link to={{pathname:"/news/"+title}}>
                                  Age Gracefully NATURAL FACIAL BEAUTY MASK
                                </Link>
                              </p>
                            </div>
                          </div>

                          <div className="wpb_text_column wpb_content_element ">
                            <div className="wpb_wrapper">
                              <p>
                                <strong>Bath soaks</strong>
                              </p>
                              <p>
                                Bath soaks are made out of salt, unlike body
                                scrubs, and are put into warm water to soothe
                                irritated dry, and itchy skin. Minerals like
                                magnesium, potassium, and calcium found in bath
                                soak; take the skin’s impurities and regulate
                                the skin’s moisture balance. As a result, your
                                skin will be smoother and cleaner.
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
        <div
          id="footer-outer"
          data-cols="4"
          data-custom-color="false"
          data-disable-copyright="true"
          data-matching-section-color="true"
          data-copyright-line="false"
          data-using-bg-img="false"
          data-bg-img-overlay="0.8"
          data-full-width="false"
          data-using-widget-area="false"
          data-link-hover="default"
        ></div>{" "}
      </div>
    </>
  );
};

export default News;
