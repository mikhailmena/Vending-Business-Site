import React from 'react'
import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
// import '../CssFiles/carousel.css'
import 'bootstrap/dist/css/bootstrap.css';
import "../CssFiles/Carouseldiv.css"


const Carouseldiv = () => {
   
    // const indicators = (index) => (<div className="indicator">{index + 1}</div>);
    return (
      <div id="carouselcon"  className="slide-container">
       
        <Slide autoplay={true} pauseOnHover={true} easing={"ease"} transitionDuration={5000}  scale={1.4}>
                <div id='slide1' className="each-slide-effect">
                    
                    <div class="container">
                        <div class="carousel-caption text-start">
                            <h1>Example headline.</h1>
                            <p>Some representative placeholder content for the first slide of the carousel.</p>
                            <p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div id='slide2' className="each-slide-effect">
                    <div >
                        <span>Services</span>
                    </div>
                </div>
                <div id='slide3' className="each-slide-effect">
                    <div >
                        <span>Products</span>
                    </div>
                </div>
        </Slide>
    </div>

      )
}

export default Carouseldiv

