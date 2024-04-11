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
  
const ProductBox: FC<{ product: any, productListLength: number }> = ( {product, productListLength} ) => {

    
      
        return (  
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
                                        target="_self" className="">
                                        <img className="  skip-lazy nectar-lazy" data-delay="0"
                                        height="1000" width="776" data-animation="fade-in"  
                                        data-nectar-img-src={Utils._mediaUrl + product?.image }
                                        src={Utils._mediaUrl + product?.image } 
                                        alt=""
                                        sizes="(min-width: 1450px) 75vw, (min-width: 1000px) 85vw, 100vw" />
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
                                <Link to={ '/product/' + product.id } target="_self" className="">
                                        <img className="  skip-lazy hover_show nectar-lazy" data-delay="0" 
                                            height="1000" width="776" data-animation="fade-in"
                                            data-nectar-img-src={Utils._mediaUrl + product?.image }
                                            src={Utils._mediaUrl + product?.image } alt=""  
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
                                    <PriceUnitBox price={product?.pu} /> </p>
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