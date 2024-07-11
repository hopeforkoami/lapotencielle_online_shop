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
<nav className="woocommerce-breadcrumb" itemProp="breadcrumb">
    <span><a href="/">Home</a></span> <i className="fa fa-angle-right"></i>
     <span>{ product?.gamme?.libGamme }</span>
      <i className="fa fa-angle-right"></i> 
      <span> { product?.libProduit } </span> </nav>
					
			<div className="woocommerce-notices-wrapper"></div>
<div id="product-278" className="product type-product post-278 status-publish first instock product_cat-body-care product_cat-body-lotion product_cat-uncategorized product_cat-our-orange-and-vanilla-products has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">

	<div className="nectar-prod-wrap">
<div className="span_5 col single-product-main-image">
<div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns="4" style={{ opacity: 1, transition: 'opacity .25s ease-in-out' }}>
	{ productImages.length > 0 ? <figure className="woocommerce-product-gallery__wrapper">
        <ImageGallery items={ productImages }
          showNav={false} autoPlay={ true } />
		{/* <div data-thumb={ Utils._mediaUrl + product?.image }
        data-thumb-alt="" className="woocommerce-product-gallery__image">
            <a href={ Utils._mediaUrl + product?.image } >
                <img width="600" height="773" src={ Utils._mediaUrl + product?.image } 
                className="wp-post-image" alt="" loading="lazy" title="o1-1637218672"
                 data-caption="" data-src={ Utils._mediaUrl + product?.image }
                data-large_image={ Utils._mediaUrl + product?.image }
                 data-large_image_width="776" data-large_image_height="1000" 
                 srcSet={ Utils._mediaUrl + product?.image } sizes="(max-width: 600px) 100vw, 600px" /></a></div>
<div data-thumb={ Utils._mediaUrl + product?.image } data-thumb-alt="" className="woocommerce-product-gallery__image">
    <a href={ Utils._mediaUrl + product?.image }><img width="600" 
    height="773" src={ Utils._mediaUrl + product?.image }
     className="" alt="" loading="lazy" title="o1a-1637218669" data-caption="" 
     data-src={ Utils._mediaUrl + product?.image }
      data-large_image={ Utils._mediaUrl + product?.image }
       data-large_image_width="776" data-large_image_height="1000" 
       srcSet={ Utils._mediaUrl + product?.image } sizes="(max-width: 600px) 100vw, 600px" /></a></div>	 */}
</figure> : <></> }
</div>
</div>
	<div className="summary entry-summary">
		<h1 className="product_title entry-title">
            { product?.libProduit }
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
                        {/* <input name="Terms_of_use_Return_Policy" 
                        type="checkbox" value="Terms_of_use_Return_Policy" />  */}
                        <Link to={"/terms-conditions"}>Terms of use </Link> & 
                        <Link to={"/return-policy"}>Return Policy</Link>
                        </label>
                        
                        {/* <div className="quantity">
                            <input onClick={ () => {
                                if (values.productQty > 1) {
                                    values.productQty = Number(values.productQty) - 1;
                                }
                            }} type="button" value="-" className="minus" />
                            
                            <label className="screen-reader-text" htmlFor="quantity_630b972d6f174">
                                ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY LOTION quantity </label>
                            <input type="number" id="quantity_630b972d6f174" className="input-text qty text" 
                            step="1" min="1" max="" name="quantity" value={values.productQty} title="Qty" size={4} placeholder=""
                             inputMode="numeric" autoComplete="off" />
                            
                            <input onClick={ () => { 
                                values.productQty = Number(values.productQty) + 1; 
                            }} type="button" value="+" className="plus"/>	
                        </div> */}
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
                        {/* <p className="stars">						
                            <span>							
                                <a className="star-1" href="#">1</a>							
                                <a className="star-2" href="#">2</a>							
                                <a className="star-3" href="#">3</a>							
                                <a className="star-4" href="#">4</a>							
                                <a className="star-5" href="#">5</a>						
                            </span>					
                        </p> */}
                        {/* <select name="rating" id="rating" style={{ display: 'none' }}>
                                <option value="">Rate…</option>
                                <option value="5">Perfect</option>
                                <option value="4">Good</option>
                                <option value="3">Average</option>
                                <option value="2">Not that bad</option>
                                <option value="1">Very poor</option>
                        </select> */}
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
                        {/* <input type="hidden" name="comment_post_ID" value="287" id="comment_post_ID" />
                    <input type="hidden" name="comment_parent" id="comment_parent" value="0" /> */}
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

    {/* <div className="after-product-summary-clear"></div>
	<div className="woocommerce-tabs wc-tabs-wrapper">
		<ul className="tabs wc-tabs" role="tablist">
							<li className="description_tab" id="tab-title-description" role="tab" aria-controls="tab-description">
					<a href="#tab-description">
						Description					</a>
				</li>
							<li className="additional_information_tab" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
					<a href="#tab-additional_information">
						Additional information					</a>
				</li>
							<li className="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
					<a href="#tab-reviews">
						Reviews (0)					</a>
				</li>
		</ul>
					<div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
				
	<h2>Description</h2>


		<div id="fws_630b9736c789b" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row " 
        style={{ paddingTop: '0px', paddingBottom: '0px' }}>
<div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg">
    </div></div></div>
<div className="row_col_wrap_12 col span_12 dark left">
	<div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " 
    data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				
<div className="wpb_text_column wpb_content_element ">
	<div className="wpb_wrapper">
		<p><strong>NATURAL FACIAL EXFOLIATES CLEANSER: </strong>This exfoliating face cleanser gently buffs away impurities and exposes new dermal cells for a more radiant complexion. Leaving your skin smoother, brighter, younger, and acne-free. Size: 100ml/3.38oz</p>
<p><strong>NATURAL FACIAL REJUVENATING OIL:</strong> A luxurious hydrating oil to soften the looks of blemishes, acne, hyperpigmentation, and age spots. The result is a plush, luminous complexion that feels supple all day. Size: 30ml/1oz</p>
<p><strong>NATURAL FACIAL REFRESHING TONER: </strong>This is your moisture-boosting toner. Our hydrating botanical extract gives you a surge of lightweight but intense hydration. The natural jasmine oil in this toner helps combat breakouts and blemishes and regulates oily skin, leaving it clean, healthy, and feeling ultra-nourished. Size: 100ml/3.38oz</p>
<p><strong>NATURAL FACIAL BEAUTY MASK: </strong>This creamy beauty facial mask is &#8220;like a visit to the spa &#8211; in a jar.&#8221; Perfect for those with blocked pores, tired-looking, and acne-prone skin. Gently draws out impurities without drying your skin, leaving behind a fresh, plumper, smoother, hydrated, and more even complexion. Use it overnight to treat age signs and acne-prone skin. Size: 30ml/1oz</p>
	</div>
</div>




			</div> 
		</div>
	</div> 
</div>
</div>
		<div id="fws_630b9736c7d7f" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row  woocommerce_show_hide" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
<div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg"></div></div></div>
<div className="row_col_wrap_12 col span_12 dark left">
	<div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				<div className="toggles " data-starting="default" data-style="default"><div className="toggle default" data-inner-wrap="true">
<h3><a href="#"><i className="fa fa-plus-circle"></i>READ FULL INGREDIENT</a></h3>
<div><div className="inner-toggle-wrap">
<div className="wpb_text_column wpb_content_element ">
	<div className="wpb_wrapper">
		<p><strong>NATURAL FACIAL EXFOLIATES CLEANSER: </strong> Aqua (Water), Aloe Barbadensis Leaf Juice, Organic Raw Blue Algae Nectar, Vitis Vinifera (Grape) Seed Oil , Virgin Olea europaea (Olive) oil, Organic Helianthus Annuus (Sunflower) Seed Oil, Ricinus Communis ( Castor) Oil, Decyl Glucoside, Citric Acid , TWEEN 80, Rosmarinus officinalis ( Rosemary) Oil, Cymbopogon Citratus (Lemongrass) Oil, Citrus Limon (Lemon) Peel Oil, Organic Rice Powder, Nutmeg Powder , kaolin Clay, Behentrimonium Methosulfate (and) Cetearyl Alcohol, cetyl alcohol, Phenoxyethanol and Caprylyl Glycol</p>
<p><strong>NATURAL FACIAL HYDRO BOOST CREAM:</strong> Aqua (Water), Aloe Barbadensis Leaf Juice, Rose floral water, Clover Honey, Vitis Vinifera (Grape) Seed Oil, Virgin Olea europaea (Olive) oil, Organic Helianthus Annuus (Sunflower) Seed Oil, , Virgin Pelargonium graveolens (Rose hip) seed oil, Organic Butyrospermum Parkii (Shea) Butter, Hamamelis virginiana (Witch Hazel) , Citrus Grandis (Grapefruit) Peel Oil, Zingiber officinale (Ginger) oil, Organic Citrus Aurantium Dulcis (Orange) Oil, Citrus Limon (Lemon) Peel Oil, Citrus aurantifolia (Lime) Peel Oil, Tocopherol Vitamin E , Natural Beeswax, Behentrimonium Methosulfate (and) Cetearyl Alcohol, Citric Acid, Phenoxyethanol and Caprylyl Glycol.</p>
<p><strong>NATURAL FACIAL REJUVENATING OIL: </strong>Organic Pumpkin Seed Oil, Virgin Pelargonium graveolens (Rose hip) seed oil, Borago officinalis (Borage ) Oil, Organic Persea Gratissima (Avocado) Oil, Vitis Vinifera (Grape) Seed Oil , Virgin Olea europaea (Olive) oil, Organic Helianthus Annuus (Sunflower) Seed Oil, Mangifera indica (Mango) Seed Butter, Organic Theobroma Cocoa (Cocoa) Seed Butter, Pelargonium graveolens (Geranium) oil , Organic Lavandula angustifolia (lavender ) oil, Citrus aurantifolia (Lime) Peel Oil, Tocopherol Vitamin E.</p>
<p><strong>NATURAL FACIAL REFRESHING TONER:</strong> Organic Cocos nucifera (Coconut) Water, Rosa damascene (Rose) Water, Hamamelis ( Witch Hazel), Aloe Barbadensis Leaf Juice, Organic Lavandula angustifolia (lavender ) oil, Organic Jasminum grandiflorum (Jasmine) oil, Pelargonium graveolens (Geranium) oil, TWEEN 80, Phenoxyethanol and Caprylyl Glycol.</p>
<p><strong>NATURAL FACIAL BEAUTY MASK: </strong>Aqua (Water), Oganic Raw Blue Algae Nectar, Organic Pumpkin Seed Oil, Virgin Pelargonium graveolens (Rose hip) seed Oil, Organic Persea Gratissima (Avocado) Oil, Oryza Sativa (Rice) Bran Oil, Ricinus Communis ( Castor) Oil, Kaolinite (Rose) Clay, kaolin Clay, Goat Milk, Zinc Oxide, Citrus Grandis (Grapefruit) Peel Oil, Pelargonium graveolens (Geranium) Oil , Rosmarinus officinalis ( Rosemary) Oil, Tocopherol Vitamin E, Behentrimonium Methosulfate (and) Cetearyl Alcohol, Ricinus communis ( Castor Wax), Phenoxyethanol and Caprylyl Glycol.</p>
	</div>
</div>



</div></div>
</div></div>

			</div> 
		</div>
	</div> 
</div>
</div>
			</div>
					<div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information">
				
	<h2>Additional information</h2>

<table className="woocommerce-product-attributes shop_attributes">
			<tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--weight">
			<th className="woocommerce-product-attributes-item__label">Weight</th>
			<td className="woocommerce-product-attributes-item__value">8.76 oz</td>
		</tr>
	</table>
			</div>
					<div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
				<div id="reviews" className="woocommerce-Reviews">
	<div id="comments">
		<h2 className="woocommerce-Reviews-title">
			Reviews		</h2>

					<p className="woocommerce-noreviews">There are no reviews yet.</p>
			</div>

			<div id="review_form_wrapper">
			<div id="review_form">
					<div id="respond" className="comment-respond">
		<span id="reply-title" className="comment-reply-title">Be the first to review &ldquo;AGE GRACEFULLY ACNEE PRONE SKIN TREATS SET&rdquo; <small><a rel="nofollow" id="cancel-comment-reply-link" href="./index.html#respond"
         style={{ display: 'none' }}>Cancel reply</a></small></span>
    	</div>
				</div>
		</div>
	
	<div className="clear"></div>
</div>
			</div>
		
			</div>

<div className="clear"></div>
	<section className="related products">

					<h2>Related products</h2>
				
		<ul className="products columns-4">

			
					<li className="product type-product post-267 status-publish first outofstock product_cat-uncategorized product_cat-body-care product_cat-body-scrub product_cat-in-paris-body-creme-souffle-products has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
		   <div className="product-wrap">
			<a href="./../paris-garden-creamy-moist-body-polish-scrub/index.html">
                <img width="300" height="387" 
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D&#039;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#039;%20viewBox%3D&#039;0%200%20300%20387&#039;%2F%3E" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail nectar-lazy" alt="" loading="lazy" sizes="(max-width: 300px) 100vw, 300px" data-nectar-img-srcset="./wp-content/uploads/2022/01/paris6-1634761216-300x387.jpg 300w, ./wp-content/uploads/2022/01/paris6-1634761216-600x773.jpg 600w, ./wp-content/uploads/2022/01/paris6-1634761216-233x300.jpg 233w, ./wp-content/uploads/2022/01/paris6-1634761216-768x990.jpg 768w, ./wp-content/uploads/2022/01/paris6-1634761216.jpg 776w" data-nectar-img-src="./wp-content/uploads/2022/01/paris6-1634761216-300x387.jpg" /></a>
			<div className="product-add-to-cart" data-nectar-quickview="true">
<a href="./../paris-garden-creamy-moist-body-polish-scrub/index.html" data-quantity="1" className="button product_type_simple" data-product_id="267" data-product_sku="" aria-label="Read more about &ldquo;PARIS GARDEN CREAMY MOIST BODY POLISH SCRUB&rdquo;" rel="nofollow">Add to cart</a><a className="nectar_quick_view no-ajaxy button" data-product-id="267"> <i className="normal icon-salient-m-eye"></i>
	    <span>Quick View</span></a>
</div>		   </div>
		<h2 className="woocommerce-loop-product__title"><a href="./../paris-garden-creamy-moist-body-polish-scrub/index.html">PARIS GARDEN CREAMY MOIST BODY POLISH SCRUB</a></h2>
	<span className="price"><span className="woocs_price_code" data-product-id="267">USD : <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&#36;</span>0.00</bdi></span></span></span>
<a href="./../paris-garden-creamy-moist-body-polish-scrub/index.html" data-quantity="1" className="button product_type_simple" data-product_id="267" data-product_sku="" aria-label="Read more about &ldquo;PARIS GARDEN CREAMY MOIST BODY POLISH SCRUB&rdquo;" rel="nofollow">Add to cart</a>
</li>

			
					<li className="product type-product post-284 status-publish instock product_cat-uncategorized product_cat-body-care product_cat-body-cream-butter product_cat-our-orange-and-vanilla-products has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
		   <div className="product-wrap">
			<a href="./../orange-vanilla-luxurious-natural-body-cream-butter/index.html">
                <img width="300" height="387" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D&#039;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#039;%20viewBox%3D&#039;0%200%20300%20387&#039;%2F%3E" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail nectar-lazy" alt="" loading="lazy" sizes="(max-width: 300px) 100vw, 300px" data-nectar-img-srcset="./wp-content/uploads/2022/01/o3-1637218564-1-300x387.jpg 300w, ./wp-content/uploads/2022/01/o3-1637218564-1-600x773.jpg 600w, ./wp-content/uploads/2022/01/o3-1637218564-1-233x300.jpg 233w, ./wp-content/uploads/2022/01/o3-1637218564-1-768x990.jpg 768w, ./wp-content/uploads/2022/01/o3-1637218564-1.jpg 776w" data-nectar-img-src="./wp-content/uploads/2022/01/o3-1637218564-1-300x387.jpg" /></a>
			<div className="product-add-to-cart" data-nectar-quickview="true">
<a href="./index.html?add-to-cart=284" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="284" data-product_sku="" aria-label="Add &ldquo;ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY CREAM BUTTER&rdquo; to your cart" rel="nofollow">Add to cart</a><a className="nectar_quick_view no-ajaxy button" data-product-id="284"> <i className="normal icon-salient-m-eye"></i>
	    <span>Quick View</span></a>
</div>		   </div>
		<h2 className="woocommerce-loop-product__title"><a href="./../orange-vanilla-luxurious-natural-body-cream-butter/index.html">ORANGE &#038; VANILLA LUXURIOUS NATURAL BODY CREAM BUTTER</a></h2>
	<span className="price"><span className="woocs_price_code" data-product-id="284">USD : <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&#36;</span>70.00</bdi></span></span></span>
<a href="./index.html?add-to-cart=284" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="284" data-product_sku="" aria-label="Add &ldquo;ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY CREAM BUTTER&rdquo; to your cart" rel="nofollow">Add to cart</a>
</li> <li className="product type-product post-281 status-publish instock product_cat-uncategorized product_cat-body-care product_cat-body-cream product_cat-our-orange-and-vanilla-products has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
		   <div className="product-wrap">
			<a href="./../orange-vanilla-luxurious-natural-body-cream/index.html">
                <img width="300" height="387" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D&#039;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#039;%20viewBox%3D&#039;0%200%20300%20387&#039;%2F%3E" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail nectar-lazy" alt="" loading="lazy" sizes="(max-width: 300px) 100vw, 300px" data-nectar-img-srcset="./wp-content/uploads/2022/01/o2-1637218600-1-300x387.jpg 300w, ./wp-content/uploads/2022/01/o2-1637218600-1-600x773.jpg 600w, ./wp-content/uploads/2022/01/o2-1637218600-1-233x300.jpg 233w, ./wp-content/uploads/2022/01/o2-1637218600-1-768x990.jpg 768w, ./wp-content/uploads/2022/01/o2-1637218600-1.jpg 776w" data-nectar-img-src="./wp-content/uploads/2022/01/o2-1637218600-1-300x387.jpg" /></a>
			<div className="product-add-to-cart" data-nectar-quickview="true">
<a href="./index.html?add-to-cart=281" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="281" data-product_sku="" aria-label="Add &ldquo;ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY CREAM&rdquo; to your cart" rel="nofollow">Add to cart</a><a className="nectar_quick_view no-ajaxy button" data-product-id="281"> <i className="normal icon-salient-m-eye"></i>
	    <span>Quick View</span></a>
</div>		   </div>
		<h2 className="woocommerce-loop-product__title"><a href="./../orange-vanilla-luxurious-natural-body-cream/index.html">ORANGE &#038; VANILLA LUXURIOUS NATURAL BODY CREAM</a></h2>
	<span className="price"><span className="woocs_price_code" data-product-id="281">USD : <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&#36;</span>75.00</bdi></span></span></span>
<a href="./index.html?add-to-cart=281" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="281" data-product_sku="" aria-label="Add &ldquo;ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY CREAM&rdquo; to your cart" rel="nofollow">Add to cart</a>
</li>

			
					<li className="product type-product post-234 status-publish last instock product_cat-uncategorized product_cat-body-care product_cat-body-cream-butter product_cat-our-lily-and-lavender-products has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
		   <div className="product-wrap">
			<a href="./../lily-lavender-luxurious-natural-body-cream-butter/index.html">
                <img width="300" height="387" src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D&#039;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#039;%20viewBox%3D&#039;0%200%20300%20387&#039;%2F%3E" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail nectar-lazy" alt="" loading="lazy" sizes="(max-width: 300px) 100vw, 300px" data-nectar-img-srcset="./wp-content/uploads/2022/01/img-7-1625153463-300x387.jpg 300w, ./wp-content/uploads/2022/01/img-7-1625153463-600x773.jpg 600w, ./wp-content/uploads/2022/01/img-7-1625153463-233x300.jpg 233w, ./wp-content/uploads/2022/01/img-7-1625153463-768x990.jpg 768w, ./wp-content/uploads/2022/01/img-7-1625153463.jpg 776w" data-nectar-img-src="./wp-content/uploads/2022/01/img-7-1625153463-300x387.jpg" /></a>
			<div className="product-add-to-cart" data-nectar-quickview="true">
<a href="./index.html?add-to-cart=234" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="234" data-product_sku="" aria-label="Add &ldquo;LILY &amp; LAVENDER LUXURIOUS NATURAL BODY CREAM BUTTER&rdquo; to your cart" rel="nofollow">Add to cart</a><a className="nectar_quick_view no-ajaxy button" data-product-id="234"> <i className="normal icon-salient-m-eye"></i>
	    <span>Quick View</span></a>
</div>		   </div>
		<h2 className="woocommerce-loop-product__title"><a href="./../lily-lavender-luxurious-natural-body-cream-butter/index.html">LILY &#038; LAVENDER LUXURIOUS NATURAL BODY CREAM BUTTER</a></h2>
	<span className="price"><span className="woocs_price_code" data-product-id="234">USD : <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&#36;</span>72.00</bdi></span></span></span>
<a href="./index.html?add-to-cart=234" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="234" data-product_sku="" aria-label="Add &ldquo;LILY &amp; LAVENDER LUXURIOUS NATURAL BODY CREAM BUTTER&rdquo; to your cart" rel="nofollow">Add to cart</a>
</li>

			
		</ul>

	</section> */}
<div id="fws_630b9740c888d" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row  woocommerce_show_hide" 
style={{ paddingTop: '0px', paddingBottom: '0px' }}>
<div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg"></div></div></div>
<div className="row_col_wrap_12 col span_12 dark left">
	<div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				<div className="toggles " data-starting="default" data-style="default">
                    <div className="toggle default" data-inner-wrap="true">
                { !showIngrediants ? <h3 onClick={() => {
                    setShowIngrediants((e) => !showIngrediants);
                    setLoadIngrediants(true);
                    setTimeout(() => {
                        setLoadIngrediants(false);
                        setIngredsList();
                    }, 2000);
                    
                    }} ><a  className="">READ FULL INGREDIENT</a></h3>
                    :
                    <h3><a onClick={() => {
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
            justifyContent: 'start' }} 
        >
            {

                products.map((product, id) =>  
                    <li style={{  }} 
                     className={` relate-products `}>
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
    </div> : <></> }
    </> 
    );
}

export default Product;