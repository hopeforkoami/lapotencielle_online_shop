import './style.css';
import { FC, useState } from 'react';
import {
    Link, useLocation, useNavigate, useParams
} from "react-router-dom";
import DataTable from 'react-data-table-component';
import { useEffect } from 'react'; 
import ImageGallery from 'react-image-gallery';

import * as Utils from '../../Utils';
import ReleatedProductBox from '../../Components/ReleatedProductBox';

import { Formik, Field, Form, FormikProps } from 'formik'
import * as yup from 'yup';

import { useAppDispatch, useAppSelector } from '../../Hooks/customSelector';
import { addProduct, removeProduct, updateProductQty, updateProducts } from '../../Redux/Reducers/storeReducer';
import Footer from '../../Layouts/Footer';
import { RootState } from '../../Redux/store';

const Search: FC = () => {   
    
    let location = useLocation();
    let navigate = useNavigate();
    const store = useAppSelector((state) => state.store)
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.users.user ); 
    const [ loading, setLoading ] = useState(false);
 

    return (
        <>

            <div id="ajax-content-wrap">
		        <div className="breadcrumb">
			        <span><span><a href="./../../../../index.html">Home</a> / <span><a href="./../../index.html">OUR COLLECTION</a> / <span className="breadcrumb_last" aria-current="page">Page 4</span></span></span></span>
                </div>
                <div className="container-wrap" data-midnight="dark" 
                style={{ minHeight: "547px" }}><div className="container main-content"><div className="row"><div className="nectar-shop-header"><h1 className="page-title">Search results: “oran”&nbsp;– Page 1</h1>
                <form style={{ float: "right", margin: '5px'  }} className="woocommerce-ordering" method="get">
	<select name="orderby" className="orderby" aria-label="Shop order">
					<option value="relevance">Relevance</option>
					<option value="popularity" selected={true}>Sort by popularity</option>
					<option value="rating">Sort by average rating</option>
					<option value="date">Sort by latest</option>
					<option value="price">Sort by price: low to high</option>
					<option value="price-desc">Sort by price: high to low</option>
			</select>
	<input type="hidden" name="paged" value="1"/>
	<input type="hidden" name="s" value="oran"/><input type="hidden" name="post_type" value="product"/><input type="hidden" name="type_aws" 
    value="true"/></form>
<p style={{ float: "right"  }} className="woocommerce-result-count">
	Showing 1–12 of 28 results</p>
<nav className="woocommerce-breadcrumb" ><span><a href="https://www.lapotencielle.com">Home</a></span> <i className="fa fa-angle-right"></i> <span><a href="https://www.lapotencielle.com/our-collection/">OUR COLLECTION</a></span> <i className="fa fa-angle-right"></i> <span><a href="/?orderby=popularity&amp;s=oran&amp;post_type=product&amp;type_aws=true">Search results for “oran”</a></span> <i className="fa fa-angle-right"></i> <span>Page 1</span></nav></div><header className="woocommerce-products-header">
	
	</header>
<div className="woocommerce-notices-wrapper"></div><ul className="products columns-4">
<li className="product type-product post-296 status-publish first instock product_cat-uncategorized product_cat-gifts-sets product_cat-our-gifts-sets-collection has-post-thumbnail taxable shipping-taxable purchasable product-type-simple">
	<div className="pinterest-for-woocommerce-image-wrapper"><a className="PIN_1714010845690_button_pin PIN_1714010845690_save" href="https://www.pinterest.com/pin/create/button/?guid=w4mZaXp6PGBK-1&amp;url=https%3A%2F%2Fwww.lapotencielle.com%2Fproduct%2Forange-vanilla-luxurious-natural-skincare-whole-line-set%2F&amp;media=https%3A%2F%2Fwww.lapotencielle.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fset1-1631293531.jpg&amp;description=ORANGE%20" data-pin-log="button_pinit" data-pin-href="https://www.pinterest.com/pin/create/button/?guid=w4mZaXp6PGBK-1&amp;url=https%3A%2F%2Fwww.lapotencielle.com%2Fproduct%2Forange-vanilla-luxurious-natural-skincare-whole-line-set%2F&amp;media=https%3A%2F%2Fwww.lapotencielle.com%2Fwp-content%2Fuploads%2F2022%2F01%2Fset1-1631293531.jpg&amp;description=ORANGE%20">Enregistrer</a></div>	   <div className="product-wrap">
			<a href="https://www.lapotencielle.com/product/orange-vanilla-luxurious-natural-skincare-whole-line-set/" className="img-loaded">
                <img width="300" height="387" src="https://www.lapotencielle.com/wp-content/uploads/2022/01/set1-1631293531-300x387.jpg" 
                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail nectar-lazy loaded" alt="" 
                decoding="async" sizes="(max-width: 300px) 100vw, 300px" 
                srcSet="https://www.lapotencielle.com/wp-content/uploads/2022/01/set1-1631293531-300x387.jpg 300w, https://www.lapotencielle.com/wp-content/uploads/2022/01/set1-1631293531-600x773.jpg 600w, https://www.lapotencielle.com/wp-content/uploads/2022/01/set1-1631293531-233x300.jpg 233w, https://www.lapotencielle.com/wp-content/uploads/2022/01/set1-1631293531-768x990.jpg 768w, https://www.lapotencielle.com/wp-content/uploads/2022/01/set1-1631293531.jpg 776w"/></a>
			<div className="product-add-to-cart" data-nectar-quickview="true"><a href="?add-to-cart=296" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="296" data-product_sku="" aria-label="Add to cart: “ORANGE &amp; VANILLA LUXURIOUS NATURAL SKINCARE WHOLE LINE SET”" aria-describedby="" rel="nofollow">Add to cart</a><a className="nectar_quick_view no-ajaxy button" data-product-id="296"> <i className="normal icon-salient-m-eye"></i>
	    <span>Quick View</span></a></div>		   </div>
		<h2 className="woocommerce-loop-product__title"><a href="https://www.lapotencielle.com/product/orange-vanilla-luxurious-natural-skincare-whole-line-set/">ORANGE &amp; VANILLA LUXURIOUS NATURAL SKINCARE WHOLE LINE SET</a></h2>
	<span className="price"><span className="woocs_price_code" data-product-id="296">USD : <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>359.00</bdi></span></span></span>
<a href="?add-to-cart=296" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="296" data-product_sku="" aria-label="Add to cart: “ORANGE &amp; VANILLA LUXURIOUS NATURAL SKINCARE WHOLE LINE SET”" aria-describedby="" rel="nofollow">Add to cart</a></li>

</ul>
<nav className="woocommerce-pagination">
	<ul className="page-numbers">
	<li><span aria-current="page" className="page-numbers current">1</span></li>
	<li><a className="page-numbers" href="https://www.lapotencielle.com/page/2/?orderby=popularity&amp;s=oran&amp;post_type=product&amp;type_aws=true">2</a></li>
	<li><a className="page-numbers" href="https://www.lapotencielle.com/page/3/?orderby=popularity&amp;s=oran&amp;post_type=product&amp;type_aws=true">3</a></li>
	<li><a className="next page-numbers" href="https://www.lapotencielle.com/page/2/?orderby=popularity&amp;s=oran&amp;post_type=product&amp;type_aws=true">Next</a></li>
</ul>
</nav>

</div></div></div> 
            </div>
        </>
    );
}

export default Search;