import { FC, useState } from 'react';
import {
    Link, useLocation, useNavigate, useParams
} from "react-router-dom";

import { useEffect } from 'react';
import ProductsService from './service';
import WoocommerceProductBox from '../../Components/WoocommerceProductBox';
import Footer from '../../Layouts/Footer';



const Products: FC = () => {  
    let location = useLocation();
    let { group, category } = useParams();
    console.log(group);
    console.log(category);

    const productsService = new ProductsService();

    const [ products, setProducts ] = useState([]);
    const [ groupName, setGroupName ] = useState("");
    const [ loading, setLoading  ] = useState(false);

	const getFilterByKeyword = () => {
        setLoading(true);
		productsService.getFilterByKeyword( { "keyWord": category } ).then(async function (response: any) {
            console.log(response);
            setProducts(response.data);
            setLoading(false);
        })
          .catch(function (error: any) {
            console.log(error); 
        });
	}

    useEffect(() => { 
		getFilterByKeyword();
        setGroupName(group?.replaceAll("-", " ") ?? '');

    }, []);

    useEffect(() => { 
		getFilterByKeyword();
        setGroupName(group?.replaceAll("-", " ") ?? '');

    }, [ location ]);

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
    const getTitleColor = ( title: string ) => {
        console.log("the sended title is: "+ title?.replaceAll("-", " "));
        switch (title?.replaceAll("-", " ")) {
            
            case "ACCESSORIES & TOOLS":
                return "white!important";
                break;
            case "FACIAL CARE":{
                return "#ffffff!important";
               
            } break;
            case "HAIR CARE":
                return "#ffffff!important";
                break; 
            case "BODY LOTION":
                return "#090909";
                break;
            case "BODY CREAM": 
                return "#090909";
                break;
            case "BODY CREAM BUTTER": 
                return "#090909";
                break;
            case "BODY SCRUB": 
                return "#090909";
                break;
            case "BODY OIL": 
                return "#090909";
                break;
            case "BODY BALM": 
                return "#090909";
                break;      
            default:
                return "white!important";
                break;
        }
        console.log("out of the switch: "+ title?.replaceAll("-", " "));
    }

    const getPageHeader = ( title: string ) => {
        switch (title?.replaceAll("-", " ")) {
            case "OUR ORANGE AND VANILLA PRODUCTS":
                return "#c4c851";
                break;
            case "OUR LILY AND LAVENDER PRODUCTS":
                return "#c881ab";
                break;
            case "OUR AGE GRACEFULLY PRODUCTS":
                return "#000080";
                break;
            case "IN PARIS BODY CRÉME SOUFFLÉ PRODUCTS":
                return "#deccff";
                break;
            case "OUR BELLE COMME LE JOUR PRODUCTS":
                return "#6a3ad9";
                break;
            case "ACCESSORIES & TOOLS":
                return "#000000";
                break;
            case "BATH AND BODY":
                return "#ddb3c1";
                break;
            case "OUR DUO COLLECTION":
                return "#ddb3c1";
                break;
            case "HOME SPA":
                return "#eb9e93";
                break;
            case "BODY POLISH":
                return "#ec939b";
                break;
            case "GIFTS AND SETS":
                return "#9e003f";
                break;
            case "OUR GIFTS AND SETS COLLECTION":
                return "#92003f";
                break;
            case "BODY CARE":
                return "#004085";
                break;
            case "BODY LOTION":
                return "#e8f5e5";
                break;
            case "BODY CREAM": 
                return "#E8F5E5";
                break;
            case "BODY CREAM BUTTER": 
                return "#E8F5E5";
                break;
            case "BODY SCRUB": 
                return "#E8F5E5";
                break;
            case "BODY OIL": 
                return "#E8F5E5";
                break;
            case "BODY BALM": 
                return "#E8F5E5";
                break;
            case "WHIPPED BODY BUTTER":
                return "#E8F5E5";
                break;
            case "WHIPPED BODY BUTTER":
                return "#E8F5E5";
                break;
            case "FACIAL CARE":
                return "#0a0808";
                break;
            case "HAIR CARE":
                return "#0a0a0a";
                break;
            
        
            default:
                return "#c4c851";
                break;
        }
    }

    const firstDescriptionText = ( title: string ) => {
        switch (title?.replaceAll("-", " ")) {
            case "OUR ORANGE AND VANILLA PRODUCTS":
                return <p>ORANGE &amp; VANILLA is a rich, luxury organic natural line. Designed for people who want to keep their skin healthy and glowing no matter what age they are. This line is formulated with skin-loving ingredients that nourish and hydrate any type of skin, even mature, dry skin. Using the correct amount of ingredients in each product. This line is exquisite for any type of skin. The base ingredients, like Organic Sunflower Oil, Organic Shea Butter, Organic Vanilla Oil, Natural Orange Infused Oil, Pure Aloes Vera Juice, and Natural Vitamin E, are packed with natural antioxidants and fatty acids. Those natural antioxidants and fatty acids fight against skin aging signs, wrinkles, and stretch marks. The application of this whole line will give you lovely, even, youthful and radiant skin. Use the entire line; your skin will thank you for it.</p>;
                break;
            case "OUR LILY AND LAVENDER PRODUCTS":
                return <p>LILY &amp; LAVENDER is a rich, VERSATILE organic &amp; natural line. This line is designed especially for those who have sensitive, dry and mature skin and want to keep their skin healthy and glowing no matter what age they are. Each product in this line is thoughtfully blended with different ingredients to target the need of your skin. Using the correct amount of ingredients in each product. This line is exquisite for any type of skin, even for the most sensitive, dullest, and mature skin. The base ingredients like PURE MANGO BUTTER, RICE BRAN OIL, VIRGIN APRICOT OIL, PURE ALOES VERRA JUICE, and NATURAL VITAMIN E are packed with natural antioxidants and fatty acids. That fight against skin dryness, flakes, aging signs, wrinkles, and more. The application of this whole line will give you healthy, smooth, soft, youthful, and radiant skin. Use the entire line; your skin will thank you for it.</p>
                break;
            case "OUR AGE GRACEFULLY PRODUCTS":
                return <p>AGE GRACEFULLY is a revolutionary natural and organic luxury collection. Containing rich formulas for facial and body care, designed for people who want to keep their face and body skin healthy and glowing no matter what age they are. Each product in this collection is thoughtfully blended, with a specific natural, organic ingredient that will target each problem of aging-signs in young women and mature women. Because of its composition, this collection works well on any type of skin including, acne-prone, sensitive, and very dry skin. Using the whole AGE GRACEFULLY collection will leave your face and body youthful-looking, bright, well-hydrated, nourished, and will give you that glow that your skin deserves. This line will blow your mind away!</p>;
                break;

            case "GIFTS AND SETS": 
                return <p>For your convenience, we put different skincare nourishment sets for you and your loved ones; find the one that meets your skin regime needs for glowing youthful skin throughout the year.</p>;
                break;
            
            case "BATH AND BODY":
                return <p>A simple quick way to pamper and bring the glow out of your skin. These Hydrating natural organics body oils, body cream butters, body soufflé and body polish are put together to revitalize, nourish and brighten any dull and tired skin.</p>;
                break;

            default:
                return "";
                break;
        }
    }

    const secondDescriptionText = ( title: string ) => {
        switch (title?.replaceAll("-", " ")) {
            case "OUR ORANGE AND VANILLA PRODUCTS":
                return <p>NO PARFUM &#8211; NO DYE &#8211; NO PARABEN &#8211; NATURAL SCENTED &#8211; FREE OF CHEMICAL 100% SIMPLY PURE.</p>;
                break;

            case "OUR LILY AND LAVENDER PRODUCTS":
                return <p>NO PARFUM &#8211; NO DYE &#8211; NO PARABEN &#8211; NATURAL- SCENTED &#8211; FREE OF CHEMICAL 100% SIMPLY PURE.</p>;
                break;
            
            case "OUR AGE GRACEFULLY PRODUCTS":
                return <p>NO PARFUM &#8211; NO DYE &#8211; NO PARABEN &#8211; NATURAL SCENTED &#8211; FREE OF CHEMICAL 100% SIMPLY PURE.</p>;
                break;
        
            default:
                return "";
                break;
        }
    }


    return (
       <>
       {/* <Header /> */}
       <div id="ajax-content-wrap">
		    <div className="breadcrumb">
			<span><span><Link to="/">Home</Link> / <span className="breadcrumb_last" aria-current="page">
                {groupName} </span></span></span> </div>
            <div id="page-header-wrap" data-animate-in-effect="none" data-midnight="light" className="" style={{height: '200px'}}>
            <div id="page-header-bg" className="not-loaded " data-padding-amt="low"
             data-animate-in-effect="none" data-midnight="light" data-text-effect="none"
              data-bg-pos="center" data-alignment="center" data-alignment-v="middle" data-parallax="0" data-height="200"
             style={{ backgroundColor: getPageHeader(group ?? ''), height: "200px" }}>
				<div className="container">
                    <div className="row">
                        <div className="col span_6 ">
                            <div className="inner-wrap">
                                <h1 style={{color: getTitleColor(group ?? '')}}>{groupName}</h1> 						
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
			
		<div id="fws_630b971b79f98" data-column-margin="default" data-midnight="dark" className="wpb_row vc_row-fluid vc_row  woocommerce_page right_padding_60px left_padding_60px right_padding_tablet_30px right_padding_phone_10px left_padding_tablet_30px left_padding_phone_10px "
         style={{ paddingTop: '30px', paddingBottom: '30px' }}>
<div className="row-bg-wrap" data-bg-animation="none" data-bg-overlay="false"><div className="inner-wrap"><div className="row-bg"></div></div></div>
<div className="row_col_wrap_12 col span_12 dark left">
	<div className="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				
<div className="wpb_text_column wpb_content_element ">
	<div className="wpb_wrapper">
		{ firstDescriptionText(group ?? '') }
	</div>
</div>




<div className="wpb_text_column wpb_content_element ">
	<div className="wpb_wrapper">
    { secondDescriptionText(group ?? '') }
	</div>
</div>



<div className="woocommerce columns-4">
		
		{
            loading ?
            <div>
                {/* <h2 >
                    <b>Chargement...</b>
                </h2> */}
            </div>
            :
            products.length > 0 ?
            <ul className="products columns-4">

            {
                products.map((product, id) =>  
                    <li className={`product type-product post-278 status-publish instock product_cat-body-care product_cat-body-lotion product_cat-uncategorized product_cat-our-orange-and-vanilla-products has-post-thumbnail taxable shipping-taxable purchasable product-type-simple ${ checkForRowBegin(id) ? 'first' : checkForRowLast(id) ? 'last' : '' }`}>
                        <WoocommerceProductBox isForKit={false}
                        key={id} product={product}  />
                    </li>
                )
            }
                
            </ul>
            :
            <h2>
                {/* <b>Produits non dispobinible</b> */}
            </h2>
        }
		
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
        </div>
       </>
    );
}
export default Products;