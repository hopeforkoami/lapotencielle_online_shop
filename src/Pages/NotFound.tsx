import { FC } from 'react'
import Header from '../Layouts/Header'; 
import Footer from '../Layouts/Footer';


const NotFound: FC = () => {  
 
        return (
            <>
                <Header />
                <div id="ajax-content-wrap">
                    <div className="breadcrumb">
                        <span><span><a href="/">Home</a> / <span className="breadcrumb_last" aria-current="page">Error 404: Page not found</span></span></span>		</div>
                        <div className="container-wrap" style={{ minHeight: "566px" }} >
	
		
                        <div className="container main-content">
                            
                            <div className="row">
                                
                                <div className="col span_12">
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <div id="error-404">
                                        <h1>404</h1>
                                        <h2>Page Not Found</h2>
                                        
                                        <a className="nectar-button large regular-button accent-color has-icon" data-color-override="false"
                                            data-hover-color-override="false" href="/"
                                            style={{ visibility: "visible" }} ><span>Back Home 
                                                </span><i className="icon-button-arrow"></i></a>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                        </div>
	
                    </div>

                <Footer />
            </div>
            </>
        );
}

export default NotFound