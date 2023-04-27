import { FC, useState } from 'react';
import {
    Link, useLocation, useNavigate, useParams
} from "react-router-dom";

import { useEffect } from 'react';
import KitService from './service'; 
import ImageGallery from 'react-image-gallery';

import * as Utils from '../../Utils';
import ReleatedProductBox from '../../Components/ReleatedProductBox';

import { Formik, Field, Form, FormikProps } from 'formik'
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../Hooks/customSelector';
import { addProduct } from '../../Redux/Reducers/storeReducer';
import Footer from '../../Layouts/Footer';

const Kit: FC = () => {  
    let { id } = useParams(); 
    let location = useLocation();
    let navigate = useNavigate();
    const store = useAppSelector((state) => state.store)
    const dispatch = useAppDispatch();
    const kitService = new KitService();

    const [ products, setProducts ] = useState([]);
    const initialProduct: any = null;
    const [ product, setProduct ] = useState(initialProduct);
    const [ groupName, setGroupName ] = useState("");
    const [ loading, setLoading  ] = useState(false);
    const initialProductImages: any = [];
    const [ productImages, setProductImages ] = useState(initialProductImages);

    const getProduct = (id: any) => {
        setLoading(true);
		kitService.getProduct(  Number(id)  ).then(async function (response: any) {
            console.log(response);
            setProduct(response.data);
            setLoading(false);
        })
          .catch(function (error: any) {
            console.log(error); 
        });
	}

    const getFilterByKeyword = (gamme: string) => {
        // setLoading(true);
		kitService.getFilterByKeyword( { "keyWord": gamme } ).then(async function (response: any) {
            console.log(response);
            setProducts(response.data);
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

    useEffect(() => {
        if (product !== null ) {
            var galerie = [];
            galerie.push({
                original: Utils._mediaUrl + product?.image,
                thumbnail: Utils._mediaUrl + product?.image,
            });

            if (product.galerie.galerieContent) {
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

    return (
        <> 
        { loading ? <div style={{ marginTop: '1.5em' }}>
                <h2 >
                    <b>Chargement...</b>
                </h2>
            </div> :
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
        <ImageGallery items={ productImages } />
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
<p className="price nectar-inherit-default"><span className="woocs_price_code" data-product-id="278">USD : <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&#36;</span>
{ Number(product?.capitalUnitaireProduit) + Number(product?.interetUnitaireProduit)  }</bdi></span></span></p>
<div className="woocommerce-product-details__short-description">
	<p><strong>Size: 12 oz. | Skin Type: Normal to Dry Skin/ Mature/ sensitive</strong></p>
<p><strong>HYDRATE &#8211; NOURISH &#8211; BRIGTHEN</strong></p>
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
                    .required(`${'Ce champ est obligatoire'}`)
            })
        }
        // innerRef={formRef}
        onSubmit={async (
            values 
          ) => {
                console.log(values);
                if (values.acceptTerms) {

                    if (values.productQty >= 1) {
                        dispatch( addProduct( { product: product, qty: values.productQty } ) );
                        navigate('/cart');
                    } else {

                    }

                } else {
                    alert("You must accpet the terms and the conditions");
                }
            }}
        >
            {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
            <Form className="cart" >
                {/* <form > */}
                                        
                        <label id="Terms_of_use_Return_Policy">
                        I Agree <Field type="checkbox"
                                        className={`form-control 
                                        ${ errors.acceptTerms && touched.acceptTerms ? "is-invalid":""}`}
                                        id="acceptTerms" 
                                        name="acceptTerms"  
                                        />
                        {/* <input name="Terms_of_use_Return_Policy" 
                        type="checkbox" value="Terms_of_use_Return_Policy" />  */}
                        <a href="./../../terms-conditions-2/index.html">Terms of use </a> & <a href="./../../return-policy-2/index.html">Return Policy</a>
                        </label>
                        
                        <div className="quantity">
                            <input onClick={ () => {
                                if (values.productQty > 1) {
                                    values.productQty = values.productQty - 1;
                                }
                            }} type="button" value="-" className="minus" />
                            
                            <label className="screen-reader-text" htmlFor="quantity_630b972d6f174">ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY LOTION quantity </label>
                            <input type="number" id="quantity_630b972d6f174" className="input-text qty text" step="1" min="1" max="" name="quantity" value="1" title="Qty" size={4} placeholder="" inputMode="numeric" autoComplete="off" />
                            
                            <input onClick={ () => { 
                                values.productQty = values.productQty + 1; 
                            }} type="button" value="+" className="plus"/>	
                        </div>
                    <br />
                    <button type="submit" name="add-to-cart" value="278"
                    className="single_add_to_cart_button button alt">Add to cart</button>

                {/* </form> */}
            </Form>
            )}
        </Formik>

	
<div className="ppc-button-wrapper"><div id="ppc-button"></div></div>
<div className="product_meta">
    <br />
	<span className="posted_in">Categories: { product?.categorie?.desccat }</span>
	
	
</div>
	</div>

	</div>


<div className="clear"></div>
	<section className="related products">

					<h2>Related products</h2>
				
		<ul className='' style={{ listStyleType: 'none', listStyle: 'none', display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between' }} 
        >
        {

                products.map((product, id) =>  
                    <li style={{ width: '24%' }}  className={`product type-product post-264 status-publish outofstock product_cat-uncategorized product_cat-body-care product_cat-body-scrub product_cat-in-paris-body-creme-souffle-products has-post-thumbnail taxable shipping-taxable purchasable product-type-simple `}>
                        <ReleatedProductBox
                        key={id} product={product}  />
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
    </div> }
    </> 
    );
}

export default Kit;