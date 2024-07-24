import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import { FC, useRef, useState } from 'react';
import {
    Link, useLocation, useNavigate, useParams
} from "react-router-dom";

import { useEffect } from 'react';
import ProductService from './service'; 
import ImageGallery from 'react-image-gallery';

import * as Utils from '../../Utils';
import ReleatedProductBox from '../../Components/ReleatedProductBox';

import { Formik, Field, Form, FormikProps } from 'formik'
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../Hooks/customSelector';
import { addProduct, addProductToBasket } from '../../Redux/Reducers/storeReducer';
import Footer from '../../Layouts/Footer';
import { RootState } from '../../Redux/store';

import { Rating } from 'react-simple-star-rating';

import PriceUnitBox from '../../Components/PriceUnitBox';

interface ProductForm {
    acceptTerms: boolean;
    productQty: number
}


interface RatingReviewFormData {
    nbStar: number;
    message: string ;
    name: string;
    email: string
}


const Product: FC = () => {  
    let { id, forKit } = useParams(); 
    let location = useLocation();

    const formRef = useRef< FormikProps< ProductForm >>(null);
    const ratingReviewFormRef = useRef< FormikProps< RatingReviewFormData >>(null);

    let navigate = useNavigate();
    const store = useAppSelector((state) => state.store)
    const dispatch = useAppDispatch(); 
    const unit = useAppSelector((state: RootState ) => state.units.unit );
    const user = useAppSelector((state: RootState) => state.users.user );

    const productService = new ProductService();

    const [ products, setProducts ] = useState([]);
    const initialProduct: any = null;
    const [ product, setProduct ] = useState(initialProduct);
    const [ groupName, setGroupName ] = useState("");
    const [ loading, setLoading  ] = useState(false);
    const [ reviewLoading, setReviewLoading  ] = useState(false);
    const initialProductImages: any = [];
    const [ productImages, setProductImages ] = useState(initialProductImages);
    const productQtyInitial: number = 0;
    let [ productQty, setProductQty ] = useState(productQtyInitial);

    const [rating, setRating] = useState(0);

    let [ showIngrediants, setShowIngrediants ] = useState(false);

    let [ loadIngrediants, setLoadIngrediants ] = useState(false);

    const getProduct = (id: any) => {
        setLoading(true);
        if (forKit !== undefined && forKit !== null) {

            productService.getKit(  Number(id)  ).then(async function (response: any) {
                console.log(response);
                setProduct(response.data);
                setLoading(false);
            })
              .catch(function (error: any) {
                console.log(error); 
            });

        } else {
            productService.getProduct(  Number(id)  ).then(async function (response: any) {
                console.log(response);
                setProduct(response.data);
                setLoading(false);
            })
              .catch(function (error: any) {
                console.log(error); 
            });
        }
		
	}

    const getFilterByKeyword = (gamme: string) => {
        // setLoading(true);
		productService.getFilterByKeyword( { "keyWord": gamme } ).then(async function (response: any) {
            console.log(response);
            const relatedProducts = response.data.filter((prod: any) => Number(prod.id) !== Number(product.id) )
            setProducts(relatedProducts);
            // setLoading(false);
        })
          .catch(function (error: any) {
            console.log(error); 
        });
	}
 

    useEffect(() => {  
        getProduct(id)
    }, []);

    useEffect(() => { 
		getProduct(id);
    }, [ location ]);

    const strToJson = (str: string) => {  
        try {
            return JSON.parse(str);
        } catch (error) {
            return [];
        }
    }  

    useEffect(() => {
        if (product !== null ) {

            var galerie = [];

            galerie.push({
                original: Utils._mediaUrl + product?.image,
                thumbnail: Utils._mediaUrl + product?.image,
            });

            if (product.galerie !== undefined && product.galerie !== null) {
                product.galerie.galerieContent.forEach((prd: any) => {
                    galerie.push({
                        original: Utils._mediaUrl + prd,
                        thumbnail: Utils._mediaUrl + prd
                      })
                });
            }

            setProductImages( galerie );
            getFilterByKeyword(product?.gamme?.libGamme);

        }
       
    }, [ product ]);

    const checkForRowBegin = (id: number) => {
        return id % 4 === 0;
    }

    const checkForRowLast = (id: number) => {
        if (id === 3 ) return true;
        var compar = id;
        while(compar > 3) {
            compar = compar - 4
        };

        return compar % 3 === 0 ;
    } 

    // Catch Rating value
    const handleRating = (rate: number) => {
      console.log(rate);
    }
    // Optinal callback functions
    const onPointerEnter = () => {}
    const onPointerLeave = () => {}
    const onPointerMove = (value: number, index: number) => {}


    const setIngredInnerHtml = (ingred: string) => {
        let spanElement = document.createElement('span');
        spanElement.innerHTML = ingred;
        spanElement.style.margin = '2px';
        console.log(document.getElementById('ingredList'));
        document.getElementById('ingredList')?.appendChild(spanElement);
    }

    const setIngredsList = () => {
     if (product?.ingredNamesArray !== null && product?.ingredNamesArray !== undefined) {
        product.ingredNamesArray.map(
            (ing: any) => setIngredInnerHtml(ing)  + ', '       
        )
     }                 
    }



    return (
        <> 
        { loading ? <div style={{ marginTop: '1.5em' }}>
                <h2 >
                    <b></b>
                </h2>
            </div>
        : product !== null ?
       		<div id="ajax-content-wrap">
		<div className="breadcrumb">
			<span><span><a href="/">Home</a> / 
            <span> { product?.gamme?.libGamme } /  
            <span className="breadcrumb_last" aria-current="page">
                 { product?.libProduit }</span></span></span></span>		
        </div>

	<div className="container-wrap" data-midnight="dark">
<div className="container main-content"><div className="row">
					
			<div className="woocommerce-notices-wrapper"></div>
<div id="product-278" className="product type-product post-278 status-publish first instock product_cat-body-care product_cat-body-lotion product_cat-uncategorized product_cat-our-orange-and-vanilla-products has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">

	<div className="nectar-prod-wrap">
<div className="span_5 col single-product-main-image">
<div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns="4" style={{ opacity: 1, transition: 'opacity .25s ease-in-out' }}>
	{ productImages.length > 0 ? <figure className="woocommerce-product-gallery__wrapper">
        <ImageGallery items={ productImages }
          showNav={false} autoPlay={ true } />
		 </figure> : <></> }
</div>
</div>
	<div className="summary entry-summary">
    <h1 className="product_title entry-title" style={{ fontSize: "22px" }}>
  {product?.libProduit}
</h1>
<p className="price nectar-inherit-default"><span className="woocs_price_code" data-product-id="278">
<span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol"></span>
<PriceUnitBox price={ Number(product?.capitalUnitaireProduit) + Number(product?.interetUnitaireProduit)  } /></bdi></span></span></p>
<div className="woocommerce-product-details__short-description">
	<p><strong>Size: 12 oz. | {product?.skynType}</strong></p>
<p><strong> 
    {
        product?.tags !== null && product?.tags !== undefined && product?.tags !== ''  ? 
        strToJson(product.tags).length > 0 ? strToJson(product.tags).map(
            (tag: string, id: number) => tag.toUpperCase() + ' - ' 
        ) : <></> : <></>
    } </strong></p>
<p>  { product?.descriptionProduit }  </p>
</div>

<Formik
        initialValues={ 
            {
                acceptTerms: false,
                productQty:  1
        }}

        validationSchema={
            yup.object().shape({
                 
                acceptTerms: yup 
                    .boolean()
                    .required(`${'You must accept the terms and conditions'}`),
                productQty: yup
                    .number()
                    .required(`${'This field is required'}`)
            })
        }
        innerRef={formRef}
        onSubmit={async (
            values 
          ) => {
                console.log(values);
                if (values.acceptTerms) {

                    if (values.productQty >= 1) {
                        // addProduct( { product: product, qty: values.productQty } ) 
                        dispatch( addProductToBasket({
                            idClient: user?.id,
                            product: product,
                            qty: Number(values.productQty),
                            dispatch: dispatch,
                            kit: forKit !== null && forKit !== undefined ? true : false,
                            navigate: navigate
                        }) );
                        
                    } else {
                        alert("At least one product must be 1");
                    }

                } else {
                    alert("You must accpet the terms and the conditions");
                }
            }}
        >
            {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
            <Form className="cart" >
                {/* <form > */}
                                        
                        <label style={{ fontSize: '20px !important' }} id="Terms_of_use_Return_Policy">
                            I Agree <Field type="checkbox"
                                        className={`form-control 
                                        ${ errors.acceptTerms && touched.acceptTerms ? "is-invalid":""}`}
                                        id="acceptTerms" 
                                        name="acceptTerms"  
                                        /> 
                            <Link to={"/terms-conditions"}>Terms of use </Link> & 
                            <Link to={"/return-policy"}>Return Policy</Link>
                        </label>

                        <div style={{ width: "700px" }} >
                            <div   style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between' }}> 
                                <div onClick={ () => {
                                        
                                        if (values.productQty > 1) {
                                            if (formRef.current !== null) {
                                                formRef.current.values.productQty = Number(formRef.current.values.productQty) - 1;
                                                setProductQty(Number(values.productQty));
                                            }
                                        }
                                        
                                    }} className='store-minus' style={ { backgroundColor: 'white', margin: '10px',
                                    width: '25px', height: '25px', color: "black", border: '1px black solid',
                                    display: 'inline-block', textAlign: 'center', cursor: 'pointer',
                                    borderRadius: '100%', fontSize: "15px" } } > <b>-</b> </div> 
                                <div style={{ fontSize: "25px", margin: '10px'   }}>
                                    <b>{ values.productQty} </b> 
                                </div>
                                <div onClick={ () => {
                                        
                                        if (formRef.current !== null) {
                                            formRef.current.values.productQty = Number(formRef.current.values.productQty) + 1;
                                            setProductQty(Number(values.productQty));
                                        }
                                        
                                    }} className='store-plus' style={ { backgroundColor: 'white', margin: '10px',
                                    width: '25px', height: '25px', color: "black", cursor: 'pointer',
                                    display: 'inline-block', textAlign: 'center', border: '1px black solid',
                                    borderRadius: '100%', fontSize: "15px" } }> <b>+</b>  
                                </div>
                            </div>
                        </div>
                    <br />
                    <button type="submit" name="add-to-cart" value="278"
                    className="single_add_to_cart_button button alt">Add to cart
                        { 
                            store.loading && <i className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
                        }
                    </button>

                {/* </form> */}
            </Form>
            )}
        </Formik>

	
<div className="ppc-button-wrapper"><div id="ppc-button"></div></div>

<div className="product_meta">
    <br />
	<span className="posted_in">Categories: <Link className='cat-link' to={ '/search/' + product?.type?.libType } rel="tag"> 
        { product?.type?.libType } </Link>, <Link className='cat-link' 
        to={ '/search/' + product?.gamme?.libGamme } rel="tag"> 
        {product?.gamme?.libGamme } </Link>, <Link className='cat-link' to={ '/search/' + product?.categorie?.libcat } rel="tag"> 
        { product?.categorie?.libcat } </Link> </span>
</div>

	</div>

	</div>
    <br/>
    <br/>
    <div className="after-product-summary-clear"></div>
    <Tabs selectedTabClassName={'tab-active'} >
        <TabList className={'tab-list'} >
            <Tab>Description</Tab>
            <Tab>Additional information</Tab>
            <Tab>Reviews (0)</Tab>
        </TabList>

        <TabPanel>
        <div id="fws_630b9736c789b" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row  " 
        style={{ paddingTop: '0px', paddingBottom: '0px' }}>
<div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap">
    <div className="row-bg"> </div></div></div>
<div className="row_col_wrap_12 col span_12 dark left">
    <div className='imgDescImg'>
        { product !== null ? product.galerie !== undefined &&  product.galerie !== null ?
         <img src={ Utils._mediaUrl + product?.galerie?.galerieContent[0] } alt="" /> : 
         <img src={ Utils._mediaUrl + product?.image } alt="" /> :<></> }
    </div>
    {/* <div className="vc_col-sm-6 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
      <div className="inner">
        <div className="hover-wrap" style={{ opacity: '1' }}> 
          <div className="hover-wrap-inner img-loaded">
            { product !== null && <img className="img-with-animation  animated-in" data-delay="0"
             height="1000" width="776" data-animation="fade-in" 
             data-nectar-img-src={ Utils._mediaUrl + product.galerie.galerieContent[0] }
             src={ Utils._mediaUrl + product.galerie.galerieContent[0] } alt="" 
             sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" style={{ height: '507.781px', width: '394.038px' }} 
             srcSet="./wp-content/uploads/2022/01/radianceduo1-1629471455.jpg 776w, ./wp-content/uploads/2022/01/radianceduo1-1629471455-300x387.jpg 300w, ./wp-content/uploads/2022/01/radianceduo1-1629471455-600x773.jpg 600w,
              ./wp-content/uploads/2022/01/radianceduo1-1629471455-233x300.jpg 233w, 
              ./wp-content/uploads/2022/01/radianceduo1-1629471455-768x990.jpg 768w" /> }
          </div>
        </div>
      </div>
    </div>
			</div> 
		</div>
	</div> */}
	<div className="imgDesc" 
    data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">

            <div className="wpb_text_column wpb_content_element ">
                <div className="wpb_wrapper">
                    {
                        product !== null && product?.descriptionElements !== null && product?.descriptionElements !== undefined ? 
                        product?.descriptionElements.length > 0 ? product?.descriptionElements.map(
                            (p: any) => <p>
                                    <strong>{p.title}: </strong>{p.textContent}
                                </p>
                        ) : <p style={{ textAlign: 'center' }}> <b> No description for the moment, we will update it very soon. </b> </p>
                        : <></>
                        
                    } 
                </div>
            </div>

            </div> 
		</div>
	</div> 
</div>
</div>
        </TabPanel>
        <TabPanel>
                <table className="woocommerce-product-attributes shop_attributes">
                    <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--weight">
                    <th className="woocommerce-product-attributes-item__label">Weight</th>
                    <td className="woocommerce-product-attributes-item__value">8.76 oz</td>
                    </tr>
                </table>
        </TabPanel>
        <TabPanel>
        <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews"  >
				<div id="reviews" className="woocommerce-Reviews">
	<div id="comments">
		<h2 className="woocommerce-Reviews-title">
			Reviews		</h2>

					<p className="woocommerce-noreviews">There are no reviews yet.</p>
			</div>

			<div id="review_form_wrapper">
			<div id="review_form">
					<div id="respond" className="comment-respond">
		<span style={{  fontSize: '40px', lineHeight: '50px' }} id="reply-title" className="comment-reply-title">
            Be the first to review “{ product?.libProduit  }” 
            <small><a rel="nofollow" id="cancel-comment-reply-link" 
            href="/product/orange-vanilla-luxurious-natural-body-oil/#respond" style={{ display: 'none' }}>Cancel reply</a></small>
            </span>
            <Formik
        initialValues={ 
            {
                nbStar: 0,
                message:  '',
                name: '',
                email: ''
        }}

        validationSchema={
            yup.object().shape({
                 
                nbStar: yup 
                    .number(),
                message: yup
                    .string()
                    .required(`${'This field is required'}`),
                name: yup
                    .string()
                    .required(`${'This field is required'}`),
                email: yup
                    .string()
                    .email("Email non valide")
                    .required(`${'This field is required'}`)
            })
        } 
        innerRef={ratingReviewFormRef}
        onSubmit={async (
            values, actions
          ) => {
                    console.log(user);
                    setReviewLoading(true);
                    productService.addReview( { ...values, clientId: user?.id, productId: product?.id } ).then(async function (response: any) {
                        console.log(response);
                        
                        actions.resetForm({values: {
                            nbStar: 0,
                            message:  '',
                            name: '',
                            email: ''
                        }});

                        setRating(0);

                        alert('Your review is well saved, thanks for your time.');

                        setReviewLoading(false);
                        // setLoading(false);
                    })
                      .catch(function (error: any) {
                        console.log(error);
                        setReviewLoading(false); 
                    });

                 
            }}
        >
            {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
            <Form id="commentform" className="comment-form">

            <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> 
            <span className="required-field-message">Required fields are marked <span className="required">*</span></span>
            </p><div className="comment-form-rating">
                <label htmlFor="rating">Your rating&nbsp;<span className="required">*</span></label>
                <br />
                            <Rating
                                initialValue={rating}
                                fillColor={'black'}
                                onClick={(rating: number) => { 
                                    if (ratingReviewFormRef.current !== null) {
                                        setRating(rating);
                                        ratingReviewFormRef.current.values.nbStar = rating;
                                    }
                                 }}
                                onPointerEnter={onPointerEnter}
                                onPointerLeave={onPointerLeave}
                                onPointerMove={onPointerMove}
                                /* Available Props */
                            /> 
                    </div>
                    <p className="comment-form-comment">
                        <label htmlFor="comment">Your review&nbsp;<span className='required'>*</span>
                        </label>
                        <textarea   
                             name="message"
                            onChange={handleChange('message')}
                            onBlur={handleBlur('message')} value={values.message}
                          id="comment"   cols={45} rows={3} required ></textarea>
                    </p>
                    <p style={{ width: '48%', maxWidth: '48%', display: 'inline-block' }} className="comment-form-author">
                        <label htmlFor="author">Name&nbsp;<span className="required">*</span></label>
                        <input  name="name"
                            onChange={handleChange('name')}
                            onBlur={handleBlur('name')} id="author" type="text" value={values.name} size={ 30 } required  />
                    </p>
                    <p style={{ width: '4%', maxWidth: '4%', display: 'inline-block' }}></p>
                    <p style={{ width: '48%', maxWidth: '48%', display: 'inline-block' }} className="comment-form-email">
                        <label htmlFor="email">Email&nbsp;<span className="required">*</span></label>
                        <input name="email"
                            onChange={handleChange('email')}
                            onBlur={handleBlur('email')} id="email"  type="email" value={values.email} size={30} required  />
                    </p>
                    <p className="comment-form-cookies-consent">
                        <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes" /> 
                        <label htmlFor="wp-comment-cookies-consent">
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </p>
                    <p className="form-submit">
                        <button name="submit" type="submit" id="submit" className="submit" value="Submit" >
                            Submit
                            {
                             reviewLoading && <i className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i>
                            }
                        </button>  
</p> </Form>
            )}
        </Formik>	</div> 
				</div>
		</div>
	
	<div className="clear"></div>
</div>
			</div>
        </TabPanel>
    </Tabs>

 
<div id="fws_630b9740c888d" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row  woocommerce_show_hide" 
style={{ paddingTop: '0px', paddingBottom: '0px' }}>
<div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg"></div></div></div>
<div className="row_col_wrap_12 col span_12 dark left">
	<div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				<div className="toggles " data-starting="default" data-style="default">
                    <div className="toggle default" data-inner-wrap="true">
                { !showIngrediants ? <h3 style={{ cursor: 'pointer' }} onClick={() => {
                    setShowIngrediants((e) => !showIngrediants);
                    setLoadIngrediants(true);
                    setTimeout(() => {
                        setLoadIngrediants(false);
                        setIngredsList();
                    }, 2000);
                    
                    }} ><a  className="">READ FULL INGREDIENT</a></h3>
                    :
                    <h3 style={{ cursor: 'pointer' }}><a onClick={() => {
                        setShowIngrediants((e) => !showIngrediants)
                        }}  className="open">Hide</a></h3>
                }
 
{ showIngrediants && <div ><div className="inner-toggle-wrap">
    <div className="wpb_text_column wpb_content_element ">
        INGREDIENTS:
        <div className="wpb_wrapper" id='ingredList'>
            { loadIngrediants ?
                <i className="fa fa-circle-o-notch fa-spin fa-1x fa-fw"></i> :
                product !== null ? 
                <>
                        <span ></span>
                </>:
                <></>
            }
        </div>
    </div>
    </div>
</div> }

</div></div>




















			</div> 
		</div>
	</div> 
</div>
</div>

<div className="clear"></div>
	<section className="related products">

					<h2>Related products</h2>
				
		<ul className='related_products' style={{ 
            listStyleType: 'none !important', 
            listStyle: 'none !important', 
            display: 'flex', 
            flexFlow: 'row wrap',
            justifyContent: 'space-between' }} 
        >
            {

                products.map((product, id) =>  
                    <li style={{ listStyle: 'none'}} 
                     className={` relate-products `} >
                        <ReleatedProductBox
                            key={id} product={product} />
                    </li>
                )
            }
		</ul>

	</section>
	</div>
    </div>
    </div>
    <Footer />
                {/* Footer  */}
            </div>
            <div className="nectar-social fixed woo visible" data-position="" data-rm-love="0" 
            data-color-override="override"><a href="#">
                <i className="icon-default-style steadysets-icon-share"></i></a>
                <div className="nectar-social-inner"><a className="facebook-share nectar-sharing" 
                href="#" title="Share this"> <i className="fa fa-facebook"></i> 
                <span className="social-text">Share</span> </a><a className="twitter-share nectar-sharing" 
                href="#" title="Tweet this"> <i className="fa fa-twitter"></i> <span className="social-text">
                    Tweet</span> </a><a className="linkedin-share nectar-sharing" href="#" title="Share this">
                         <i className="fa fa-linkedin"></i> <span className="social-text">Share</span> 
                         </a><a className="pinterest-share nectar-sharing" href="#" title="Pin this"> 
                            <i className="fa fa-pinterest"></i> <span className="social-text">Pin</span> 
                            </a></div></div>
    </div> : <></> }
    </> 
    );
}

export default Product;