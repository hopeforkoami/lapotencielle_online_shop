import { FC } from 'react';
import Product from '../Models/Product';
import { Link
} from "react-router-dom";
import { useEffect } from 'react';
import * as Utils from '../Utils';
//Props interface
interface ProductBoxProps {
    product: any,
    isForKit: Boolean
}
  
const WoocommerceProductBox: FC<{ product: any, isForKit: Boolean}> = ( {product, isForKit }) => {

    useEffect( () => { 
        if (isForKit === undefined || isForKit === null) isForKit = false; 
    }, [])
      
        return (  
            <>
                <div className="product-wrap">
                <Link to={ isForKit ? '/kit/' + product.id : '/product/' + product.id}>
                    <img width="300" height="387" 
                    src={ Utils._mediaUrl + product?.image } alt=""
                     loading="lazy" sizes="(max-width: 300px) 100vw, 300px"
                      data-nectar-img-srcset="./wp-content/uploads/2022/01/o1-1637218672-1-300x387.jpg 300w, ./wp-content/uploads/2022/01/o1-1637218672-1-600x773.jpg 600w, ./wp-content/uploads/2022/01/o1-1637218672-1-233x300.jpg 233w, ./wp-content/uploads/2022/01/o1-1637218672-1-768x990.jpg 768w, ./wp-content/uploads/2022/01/o1-1637218672-1.jpg 776w" data-nectar-img-src="./wp-content/uploads/2022/01/o1-1637218672-1-300x387.jpg" /></Link>
                <div className="product-add-to-cart" data-nectar-quickview="true">
                <Link to={isForKit ? '/kit/' + product.id : '/product/' + product.id} data-quantity="1" 
                className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="278" data-product_sku="" aria-label="Add &ldquo;ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY LOTION&rdquo; to your cart" rel="nofollow">Add to cart</Link><a className="nectar_quick_view no-ajaxy button" data-product-id="278"> <i className="normal icon-salient-m-eye"></i>
                        <span>Quick View</span></a>
                </div>		   </div>
                <h2 className="woocommerce-loop-product__title">
                            <Link to={isForKit ? '/kit/' + product.id : '/product/' + product.id}> { product.fullName } </Link></h2>
                <span className="price"><span className="woocs_price_code" data-product-id="278">USD : <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&#36;</span>{ product?.pu }</bdi></span></span></span>
                <Link to={isForKit ? '/kit/' + product.id : '/product/' + product.id} data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="278" data-product_sku="" aria-label="Add &ldquo;ORANGE &amp; VANILLA LUXURIOUS NATURAL BODY LOTION&rdquo; to your cart" rel="nofollow">Add to cart</Link>
            </>
        )
}
  
export default WoocommerceProductBox