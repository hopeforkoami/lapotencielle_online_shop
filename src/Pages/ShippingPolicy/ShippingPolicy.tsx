import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer";

const ShippingPolicy = () => {
  return (
    <>
      {/* <Header /> */}
      <div id="ajax-content-wrap">
        <div className="breadcrumb">
          <span>
            <span>
              <Link to="/">Home</Link> /{" "}
              <span className="breadcrumb_last" aria-current="page">
                Shipping Policy{" "}
              </span>
            </span>
          </span>{" "}
        </div>
        <div
          id="page-header-wrap"
          data-animate-in-effect="none"
          data-midnight="light"
          className=""
          style={{ height: "250px" }}
        >
          <div
            id="page-header-bg"
            className="not-loaded "
            data-padding-amt="low"
            data-animate-in-effect="none"
            data-midnight="light"
            data-text-effect="rotate_in"
            data-bg-pos="center"
            data-alignment="center"
            data-alignment-v="middle"
            data-parallax="0"
            data-height="250"
            style={{ backgroundColor: "#e8f5e5", height: "250px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col span_6 ">
                  <div className="inner-wrap">
                    <h1 className="top-heading">
                      <span className="wraped">
                        <span
                          style={{
                            transform: "rotateX(0deg) translate(0px)",
                            opacity: 1,
                            color: "black",
                          }}
                        >
                          Shipping
                        </span>
                      </span>{" "}
                      <span className="wraped">
                        <span
                          style={{
                            transform: "rotateX(0deg) translate(0px)",
                            opacity: 1,
                            color: "black",
                          }}
                        >
                          Policy
                        </span>
                      </span>
                    </h1>{" "}
                    <span
                      className="subheader"
                      style={{
                        transform: "rotateX(0deg) translate(0px)",
                        opacity: 1,
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-wrap">
        <div className="container main-content">
    <div className="row">
        <div id="fws_6611fcace62b1" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row top-level full-width-section first-section loaded" style={{paddingTop: "0px", paddingBottom: "0px"}}>
            <div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false">
                <div className="inner-wrap">
                    <div className="row-bg using-bg-color" style={{ backgroundColor: "#e7f5e5" }}></div>
                </div>
            </div>
            <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col has-animation no-extra-padding inherit_tablet inherit_phone triggered-animation animated-in" data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="fade-in-from-left" data-delay="0" style={{opacity: 1, transform: "none"}}>
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element  vc_custom_1672891211744">
                                <div className="wpb_wrapper">
                                    <h1 style={{textAlign: "center", fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol", fontWeight: 300, fontSize: "48px", color: "black"}}>Shipping Policy</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="fws_6611fcace6dd1" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row  " style={{paddingTop: "0px", paddingBottom: "0px"}}>
            <div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false">
                <div className="inner-wrap">
                    <div className="row-bg" style={{}}></div>
                </div>
            </div>
            <div className="row_col_wrap_12 col span_12 dark left">
                <div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
                    <div className="vc_column-inner">
                        <div className="wpb_wrapper">
                            <div className="wpb_text_column wpb_content_element  vc_custom_1672428930402">
                                <div className="wpb_wrapper">
                                    <p><span style={{color: "#000000"}}><strong>SHIPPING TIME</strong></span><br/>
                                        All orders are processed &amp; shipped within 7 to 10 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.</p>
                                    <p><span style={{color: "#000000"}}><strong>SHIPPING RATES AND ESTIMATES<br/>
                                            </strong></span></p>
                                    <p>All shipping is done through FedEx shipping and will be calculated at checkout.</p>
                                    <p><span style={{color: "#000000"}}><strong>HOW DO I CHECK THE STATUS OF MY ORDER?<br/>
                                            </strong></span></p>
                                    <p>When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.</p>
                                    <p>If you haven’t received your order within 10 days of receiving your shipping confirmation email, please contact us at lapotencielle@gmail.com with your name and order number, and we will look into it for you.</p>
                                    <p>If you have any further questions, please don’t hesitate to contact us at lapotencielle@gmail.com.</p>
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

        <Footer />
        {/* Footer  */}
      </div>
    </>
  );
};

export default ShippingPolicy;
