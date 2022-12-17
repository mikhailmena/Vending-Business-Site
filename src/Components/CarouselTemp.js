import React from 'react'
import '../CssFiles/carousel.css'
import 'bootstrap/dist/css/bootstrap.css';
import image from '../assets/img1.jpg'
import vend from '../assets/vend.svg'
import vend2 from '../assets/vend2.svg'
import vend1 from '../assets/vend1.svg'
import vet from '../assets/vet.png'
import service from '../assets/service.png'
import prof from '../assets/prof.png'
const CarouselTemp = () => {
  return (
    <div>

        <div id='marketing' className="container marketing">
            <h1>ROYALS VENTURES</h1>
            <div class="row">
                <div class="col-lg-4">
                    <img id='first' className='rounded-circle' src={vet}></img>
                    <h2 class="fw-normal">Veteran Owned</h2>
                    <p>Veteran Owned and Operated</p>
                    {/* <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, dui quis commodo ornare, enim ante viverra augue, in tincidunt dolor felis vitae est. Aenean sollicitudin eget lorem id aliquet. Integer velit ante, dictum at nibh ac, rhoncus porta nibh. Curabitur odio nisl, sagittis id felis ac, efficitur sagittis felis. Curabitur consectetur congue dolor, ac volutpat sem consectetur ut. Aliquam imperdiet elit quis leo fringilla auctor. Morbi scelerisque sodales odio non egestas. Morbi at tortor purus. Mauris varius dolor ut magna scelerisque malesuada at nec magna. </p> */}
                </div>
                <div className="col-lg-4">
                    <img id='second' className='rounded-circle' src={service}></img>
                    <h2 class="fw-normal">Service Oriented</h2>
                    <p>We are here to provide you and your customers with Vending Options to drive business and return customers.</p>
                    {/* <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, dui quis commodo ornare, enim ante viverra augue, in tincidunt dolor felis vitae est. Aenean sollicitudin eget lorem id aliquet. Integer velit ante, dictum at nibh ac, rhoncus porta nibh. Curabitur odio nisl, sagittis id felis ac, efficitur sagittis felis. Curabitur consectetur congue dolor, ac volutpat sem consectetur ut. Aliquam imperdiet elit quis leo fringilla auctor. Morbi scelerisque sodales odio non egestas. Morbi at tortor purus. Mauris varius dolor ut magna scelerisque malesuada at nec magna.</p> */}
                </div>
                <div class="col-lg-4">
                    <img id='third' className='rounded-circle' src={prof}></img>
                    <h2 class="fw-normal">Professional</h2>
                    <p>We pride ourselves on professional and consistent service. We look forward to partnering with you and growing your business.</p>
                    {/* <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies, dui quis commodo ornare, enim ante viverra augue, in tincidunt dolor felis vitae est. Aenean sollicitudin eget lorem id aliquet. Integer velit ante, dictum at nibh ac, rhoncus porta nibh. Curabitur odio nisl, sagittis id felis ac, efficitur sagittis felis. Curabitur consectetur congue dolor, ac volutpat sem consectetur ut. Aliquam imperdiet elit quis leo fringilla auctor. Morbi scelerisque sodales odio non egestas. Morbi at tortor purus. Mauris varius dolor ut magna scelerisque malesuada at nec magna.</p> */}
                </div>
            </div>
         </div>
                    {/* <iframe id="iframe1" src="https://www.kiae.org/reasons-to-have-a-vending-machine-in-your-business/" ></iframe> */}
        {/* <hr class="featurette-divider"></hr> */}

        <div id='stockeddiv' class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">Vending Machine Services <span id='stocked'>Always stocked</span></h2>
                <p class="lead">We work with the business owner to determine the best stocking schedule.</p>
            </div>
            <div class="col-md-5">
                <img id='firstimg' src={vend2}></img>
            </div>
        </div>

        {/* <hr class="featurette-divider"></hr> */}

        <div id='varietydiv' class="row featurette">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading fw-normal lh-1">Products <span id='variety'>Variety and Selection</span></h2>
                <p class="lead">We provide a large selection of snacks, drinks, and fresh food options for your customers</p>
            </div>
            <div class="col-md-5 order-md-1">
                <img id='secondimg' src={vend} width='100px'></img>
            </div>
        </div>

        {/* <hr class="featurette-divider"></hr> */}

        <div id='servicediv' class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">24/7 Support <span id='service'>Anytime, Anywhere</span></h2>
                <p class="lead">We are availabe to answer questions, service machines, and restock at anytime of the day</p>
            </div>
            <div class="col-md-5">

                <img id='thirdimg' src={vend1} width='100px'></img>
            </div>
        </div>

    </div>
    )
    }



export default CarouselTemp