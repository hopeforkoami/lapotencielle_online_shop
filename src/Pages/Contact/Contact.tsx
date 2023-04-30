import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Layouts/Footer";
import axiosInstance from '../../Utils/axios_manager';
import "./contact.css"

const Contact = () => {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  const [mailResponse, setMailResponse] = useState('');
  function sleep() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  const sendEmail = () => {
    const mailerPass = 'LapotMailer2@23';
    const mailerUser = 'lapotencielle@nogdevhouse.com';
    const mailerHost = 'smtp.hostinger.com';
    axiosInstance.post("/contact/sendmail", {
        email: clientEmail,
        name: clientName,
        phone: clientPhone,
        message: clientMessage
    })
    .then((response: any) => {
      setClientEmail('');
      setClientName('');
      setClientPhone('');
      setClientMessage('');
      setMailResponse("Your Message has been sent successfully");
      const msgbox = document.getElementById('responsebox');
      msgbox?.classList.add('visible');
      msgbox?.classList.remove('hidden');
    });
  }
  return (
    <>
      {/* <Header /> */}
      <div id="ajax-content-wrap">
        <div className="breadcrumb">
          <span><span><Link to="/">Home</Link> / <span className="breadcrumb_last" aria-current="page">
            CONTACT </span></span></span> </div>
        <div id="page-header-wrap" data-animate-in-effect="none" data-midnight="light" className="" style={{ height: '200px' }}>
          <div id="page-header-bg" className="not-loaded " data-padding-amt="low"
            data-animate-in-effect="none" data-midnight="light" data-text-effect="none"
            data-bg-pos="center" data-alignment="center" data-alignment-v="middle" data-parallax="0" data-height="200"
            style={{ backgroundColor: "#E8F5E5", height: "200px" }}>
            <div className="container">
              <div className="row">
                <div className="col span_6 ">
                  <div className="inner-wrap">
                    <h1 className="colored_in_black">Contact Info </h1>
                    <span className="subheader"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="container-wrap">
        <div className="container main-content">
		<div className="row">
			
		<div id="Contact_page" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row  " style={{paddingTop: '30px', paddingBottom: '30px'}}><div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg"></div></div></div><div className="row_col_wrap_12 col span_12 dark left" style={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
	 

	<div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				
<div className="wpb_text_column wpb_content_element ">
	<div className="wpb_wrapper">
		<h4 className="subtitle">We are here to assist you.</h4>
	</div>
</div>



<div className="wpcf7 js" id="wpcf7-f197-p17-o1" dir="ltr" lang="en-US">
<div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form onSubmit={sendEmail} className="wpcf7-form init" aria-label="Contact form" noValidate={true} data-status="init">
  <div style={{display: 'none'}}>
    <input type="hidden" name="_wpcf7" value="197"/>
    <input type="hidden" name="_wpcf7_version" value="5.7.2"/>
    <input type="hidden" name="_wpcf7_locale" value="en_US"/>
    <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f197-p17-o1"/>
    <input type="hidden" name="_wpcf7_container_post" value="17"/>
    <input type="hidden" name="_wpcf7_posted_data_hash" value=""/>
  </div>
  <p>
    <span className="wpcf7-form-control-wrap" data-name="text-119">
      <input size={40} className="wpcf7-form-control wpcf7-text" aria-invalid="false" placeholder="Your Name" value={clientName} type="text" name={clientName}
      onChange={(event) =>
        setClientName(event.target.value)
      }
      />
    </span>
    <br/>
    <span className="wpcf7-form-control-wrap" data-name="email-576">
      <input size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your Email Address" value={clientEmail} type="email" name={clientEmail}
      onChange={(event) =>
        setClientEmail(event.target.value)
      }
      />
    </span>
    <br/>
    <span className="wpcf7-form-control-wrap" data-name="tel-118">
      <input size={40} className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" placeholder="Your Phone Number" value={clientPhone} type="tel" name={clientPhone}
      onChange={(event) =>
        setClientPhone(event.target.value)
      }
      />
    </span>
    <br/>
    <span className="wpcf7-form-control-wrap" data-name="textarea-739">
      <textarea cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" aria-invalid="false" placeholder="Your Message" name={clientMessage} value={clientMessage}
      onChange={(event) =>
        setClientMessage(event.target.value)
      }
      ></textarea>
    </span>
  </p>
  <p style={{paddingBottom: '0px'}}>
    <input className="wpcf7-form-control has-spinner" id="submit_btn" type="button" value="Get a Call Back" onClick={sendEmail}/>
    <span className="wpcf7-spinner"></span>
  </p>
  <div id="responsebox" className="hidden" style={{color:'green',border:'2px solid green',padding:'0.5em',textAlign:'center'}}>{mailResponse}</div>
</form>
</div>
			</div> 
		</div>
	</div> 
</div></div>
		</div>
	</div>

      <Footer />
      {/* Footer  */}
    </div>
    </div>
    </>
 );
}

export default Contact;