import { FC } from 'react';
import Product from '../Models/Product';
import { Link
} from "react-router-dom";
import * as Utils from '../Utils';
import PriceUnitBox from './PriceUnitBox';



//Props interface
interface ProductBoxProps {
    product: any,
    productListLength: number
}
  
const ProductBox: FC<{ product: any, productListLength: number, animated?: boolean }> = ( {product, productListLength, animated = true} ) => {

    
      
        return (  


    //         <div className="vc_col-sm-3 vc_col-xs-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone one-fourths clear-both" 
    // data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
	// 	<div className="vc_column-inner">
	// 	<div className="wpb_wrapper">
	// 		<div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" 
    // data-animation="fade-in">
    //   <div className="inner">
    //     <div className="hover-wrap" style={{opacity: 1}}> 
    //       <div className="hover-wrap-inner">
    //         <a href="https://lapotencielle.com/product/orange-vanilla-luxurious-natural-body-oil/" target="_self" className="img-loaded">
    //           <img className="img-with-animation skip-lazy nectar-lazy animated-in loaded" data-delay="0" 
	// 		  data-animation="fade-in" src="https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448.jpg" 
	// 		  alt="" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"  
	// 		  srcSet="https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448.jpg 776w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448-300x387.jpg 300w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448-600x773.jpg 600w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448-233x300.jpg 233w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448-768x990.jpg 768w" width="776" height="1000"/>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   </div><div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" data-shadow="none" data-animation="fade-in">
    //   <div className="inner">
    //     <div className="hover-wrap" style={{opacity: 1}}> 
    //       <div className="hover-wrap-inner">
    //         <a href="https://lapotencielle.com/product/orange-vanilla-luxurious-natural-body-oil/" target="_self" className="img-loaded">
    //           <img className="img-with-animation skip-lazy hover_show nectar-lazy animated-in loaded" data-delay="0"
	// 		   data-animation="fade-in" src="https://www.lapotencielle.com/wp-content/uploads/2022/01/o4a-1637218440-1.jpg" 
	// 		   alt="" sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw"  
	// 		   srcSet="https://www.lapotencielle.com/wp-content/uploads/2022/01/o4a-1637218440-1.jpg 776w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4a-1637218440-1-300x387.jpg 300w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4a-1637218440-1-600x773.jpg 600w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4a-1637218440-1-233x300.jpg 233w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4a-1637218440-1-768x990.jpg 768w"
	// 		    width="776" height="1000"/>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   </div>

            <div  className={`vc_col-sm-${ 12 / productListLength } vc_col-xs-12 wpb_column column_container vc_column_container
                col child_column no-extra-padding inherit_tablet inherit_phone`}
               data-padding-pos="all" data-has-bg-color="false" data-bg-color=""
                data-bg-opacity="1" data-animation="" data-delay="0">
                <div className="vc_column-inner" >
                    <div className="wpb_wrapper">
                    {/* data-nectar-img-srcset="https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448.jpg 776w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448-300x387.jpg 300w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448-600x773.jpg 600w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448-233x300.jpg 233w, https://www.lapotencielle.com/wp-content/uploads/2022/01/o4-1637218448-768x990.jpg 768w"  */}
                    {/* data-nectar-img-srcset={Utils._mediaUrl + product?.image } */}
                        <div className="img-with-aniamtion-wrap " data-max-width="100%" 
                        data-max-width-mobile="default" data-shadow="none" data-animation="fade-in" >
                            <div className="inner">
                                <div className="hover-wrap" style={{opacity: 1}}> 
                                    <div className="hover-wrap-inner">
                                        <Link to={ '/product/' + product.id }
                                            target="_self" className="img-loaded ">
                                                
                                            <img className="img-with-animation skip-lazy nectar-lazy animated-in loaded" data-delay="0"
                                                height="1000" width="776" data-animation="fade-in"  
                                                data-nectar-img-src={Utils._mediaUrl + product?.image }
                                                src={Utils._mediaUrl + product?.image } 
                                                alt=""
                                                srcSet={Utils._mediaUrl + product?.image}
                                            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />

                                            { animated && <img loading="lazy" decoding="async" className="img-with-animation skip-lazy hover_show nectar-lazy
                                             animated-in loaded" data-delay="0" height="1000" width="776" data-animation="fade-in" 
                                             src={Utils._mediaUrl + product?.image2 } alt="" sizes="(min-width: 1450px) 75vw, 
                                             (min-width: 1000px) 85vw, 100vw" srcSet={Utils._mediaUrl + product?.image2 } /> }

                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <div className="img-with-aniamtion-wrap " data-max-width="100%" data-max-width-mobile="default" 
                            data-shadow="none" data-animation="fade-in" >             
                            <div className="inner">
                                <div className="hover-wrap"> 
                                    <div className="hover-wrap-inner">
                                        <Link to={ '/product/' + product.id } target="_self" className="img-loaded ">
                                            <img className="img-with-animation skip-lazy hover_show nectar-lazy animated-in loaded" 
                                                data-delay="0" 
                                                height="1000" width="776" data-animation="fade-in"
                                                data-nectar-img-src={Utils._mediaUrl + product?.image }
                                                src={Utils._mediaUrl + product?.image } alt="" srcSet={Utils._mediaUrl + product?.image}
                                            sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        <div className="wpb_text_column wpb_content_element " >
                            <div className="wpb_wrapper">
                                <Link style={{ fontSize: "13px" , fontWeight: "500" }} 
                                to={ '/product/' + product.id } >
                                   {product.fullName} </Link>
                            </div>
                        </div>
                        
                        
                        
                        
                        <div className="wpb_text_column wpb_content_element " >
                            <div className="wpb_wrapper">
                                <p style={{ textAlign: "center", fontSize: "13px" , fontWeight: "500" }} > 
                                    <PriceUnitBox price={product?.pu} /></p>
                            </div>
                        </div>
                        
                        <div className="wpb_text_column wpb_content_element  hover_show_text" >
                            <div className="wpb_wrapper">
                                <p>{product.categorie}<br />
                                <Link to={ '/product/' + product.id } >Add to Cart</Link></p>
                            </div>
                        </div>
                        
                        
                        
                        
                    </div> 
                </div> 
            </div>
        )
}
  
export default ProductBox