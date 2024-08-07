import { FC } from 'react';
import Product from '../Models/Product';
import { Link
} from "react-router-dom";

import * as Utils from '../Utils';
import PriceUnitBox from './PriceUnitBox';

//Props interface
interface ProductBoxProps {
    product: any
}


  
const ReleatedProductBox: FC<{ product: any }> = ( {product} ) => {
      
        return (  
            <>
            
		   <div className="product-wrap">
			    <Link to={'/product/' + product.id}>
                <img width="300" height="387" src={ Utils._mediaUrl + product?.image } 
                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="" loading="lazy" sizes="(max-width: 300px) 100vw, 300px" 
                data-nectar-img-srcset="./wp-content/uploads/2022/01/paris3-1634761393-300x387.jpg 300w, ./wp-content/uploads/2022/01/paris3-1634761393-600x773.jpg 600w, ./wp-content/uploads/2022/01/paris3-1634761393-233x300.jpg 233w, ./wp-content/uploads/2022/01/paris3-1634761393-768x990.jpg 768w, ./wp-content/uploads/2022/01/paris3-1634761393.jpg 776w" 
                data-nectar-img-src={ Utils._mediaUrl + product?.image } />
                </Link>
                <div className="product-add-to-cart" data-nectar-quickview="true">
                    <Link to={'/product/' + product.id} data-quantity="1" className="button product_type_simple" data-product_id="264" data-product_sku="" aria-label="Read more about &ldquo;SUNSET IN PARIS CREAMY MOIST BODY POLISH SCRUB&rdquo;" rel="nofollow">Add to cart</Link>
                    <Link to={'/product/' + product.id} className="nectar_quick_view no-ajaxy button" > <i className="normal icon-salient-m-eye"></i>
                    <span>Quick View</span></Link>
                </div>		   
            </div>
		   <div className="title_and_link" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px"

           }}>
           <h2 className="woocommerce-loop-product__title"><a href="./../sunset-in-paris-creamy-moist-body-polish-scrub/index.html">SUNSET IN PARIS CREAMY MOIST BODY POLISH SCRUB</a></h2>
	            <span className="price" style={ { textAlign: "center", fontWeight: "bold" } } >
                <PriceUnitBox price={product?.pu} /></span> <br/>
                <br/>
                <Link to={'/product/' + product.id} data-quantity="1" style={{maxWidth:"150px"}} className="button product_type_simple" data-product_id="264" data-product_sku="" aria-label="Read more about &ldquo;SUNSET IN PARIS CREAMY MOIST BODY POLISH SCRUB&rdquo;" rel="nofollow">Add to cart</Link>

           </div>
                {/* <div className="product-wrap">
                <Link to={'/product/' + product.id}>
                    <img width="300" height="387" 
                    src={ Utils._mediaUrl + product?.image } alt=""
                     loading="lazy" sizes="(max-width: 300px) 100vw, 300px"
                      data-nectar-img-srcset="./wp-content/uploads/2022/01/o1-1637218672-1-300x387.jpg 300w, ./wp-content/uploads/2022/01/o1-1637218672-1-600x773.jpg 600w, ./wp-content/uploads/2022/01/o1-1637218672-1-233x300.jpg 233w, ./wp-content/uploads/2022/01/o1-1637218672-1-768x990.jpg 768w, ./wp-content/uploads/2022/01/o1-1637218672-1.jpg 776w" data-nectar-img-src="./wp-content/uploads/2022/01/o1-1637218672-1-300x387.jpg" /></Link>
                <div className="product-add-to-cart" data-nectar-quickview="true">
                <a href="./index.html?add-to-cart=278" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="278" data-product_sku="" aria-label="Add &ldquo;ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY LOTION&rdquo; to your cart" rel="nofollow">Add to cart</a><a className="nectar_quick_view no-ajaxy button" data-product-id="278"> <i className="normal icon-salient-m-eye"></i>
                        <span>Quick View</span></a>
                </div>		   </div>
                <h2 className="woocommerce-loop-product__title">
                            <Link to={'/product/' + product.id}> { product.fullName } </Link></h2>
                <span className="price"><span className="woocs_price_code" data-product-id="278">USD : <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&#36;</span>77.00</bdi></span></span></span>
                <a href="./index.html?add-to-cart=278" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="278" data-product_sku="" aria-label="Add &ldquo;ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY LOTION&rdquo; to your cart" rel="nofollow">Add to cart</a> */}
            </>
        )
}
  
export default ReleatedProductBox