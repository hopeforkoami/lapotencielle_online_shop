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
import AllService from '../service'; 
import WoocommerceProductBox from '../../Components/WoocommerceProductBox';

const Search: FC = () => {   
	let { keyword } = useParams();
    let location = useLocation();
    let navigate = useNavigate();
    const store = useAppSelector((state) => state.store)
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.users.user ); 
    const [ loading, setLoading ] = useState(false);

	const allService = new AllService();  
    const productSearchResultsInit: Array<any> = [];
    let [ productSearchResults, setProductSearchResults ] = useState(productSearchResultsInit);

	let [ loadingSearchResults, setLoadingSearchResults ] = useState(false);

	const getSearchedProducts = async () => {
		setLoadingSearchResults(true);
		await allService.searchByBarcodeOrName(  keyword ?? ''  ).then(async function (response: any) {
			console.log(response); 
			setProductSearchResults((d) => ([]));
			setProductSearchResults((d) => response?.data);
			setLoadingSearchResults(false);
		})
		  .catch(function (error: any) {
			console.log(error); 
			setLoadingSearchResults(false);
		});
	}

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

	useEffect(
		() => {
			getSearchedProducts();
		}, []
	);
 

    return (
        <>

            <div id="ajax-content-wrap">
		        <div className="breadcrumb">
			        <span><span><Link  to='/' >Home</Link> / <span>
						<Link to=''>search { keyword }</Link></span></span></span>
                </div>
                <div className="container-wrap" data-midnight="dark" 
                style={{ minHeight: "547px" }}><div className="container main-content">
				<div className="row"><div className="nectar-shop-header">
					<h1 className="page-title">Search results: “{keyword}”&nbsp;</h1>
                {/* <form style={{ float: "right", margin: '5px'  }} className="woocommerce-ordering" method="get">
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
    value="true"/></form> */}
{/* <p style={{ float: "right"  }} className="woocommerce-result-count">
	Showing 1–12 of 28 results</p> */}
<nav className="woocommerce-breadcrumb" ><span><Link to='/'>Home</Link></span> 
<i className="fa fa-angle-right"></i> 
<span><Link to=''>Search results for “{keyword}”</Link></span> 
<i className="fa fa-angle-right"></i> </nav></div>
<header className="woocommerce-products-header"> </header>
<div className="woocommerce-notices-wrapper"></div>


<div className="woocommerce columns-4">
{
            loadingSearchResults ?
            <div>
                {/* <h2 >
                    <b></b>
                </h2> */}
            </div>
            :
            productSearchResults.length > 0 ?
            <ul className="products columns-4">

            {
                productSearchResults.map((product, id) =>  
                    <li className={`product type-product post-278 status-publish instock product_cat-body-care product_cat-body-lotion product_cat-uncategorized product_cat-our-orange-and-vanilla-products has-post-thumbnail taxable shipping-taxable purchasable product-type-simple ${ 
						checkForRowBegin(id) ? 'first' : checkForRowLast(id) ? 'last' : '' }`}>
                        <WoocommerceProductBox isForKit={false}
                        key={id} product={product}  />
                    </li>
                )
            }
                
            </ul>
            :
            <h2>
                No Product found for your search
            </h2>
        }
</div>
{/* <nav className="woocommerce-pagination">
	<ul className="page-numbers">
	<li><span aria-current="page" className="page-numbers current">1</span></li>
	<li><a className="page-numbers" href="https://www.lapotencielle.com/page/2/?orderby=popularity&amp;s=oran&amp;post_type=product&amp;type_aws=true">2</a></li>
	<li><a className="page-numbers" href="https://www.lapotencielle.com/page/3/?orderby=popularity&amp;s=oran&amp;post_type=product&amp;type_aws=true">3</a></li>
	<li><a className="next page-numbers" href="https://www.lapotencielle.com/page/2/?orderby=popularity&amp;s=oran&amp;post_type=product&amp;type_aws=true">Next</a></li>
</ul>
</nav> */}

</div></div></div> 
            </div>
        </>
    );
}

export default Search;