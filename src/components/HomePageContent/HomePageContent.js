import React, { useState } from "react";
import "./styles.css";
import Banner from "../ImageParallaxBanner/Banner";
import Map from "../Map/Map";
import Image from "../Image/Image";

export default () => {
    return (<>
        <h1 class="d-flex justify-content-center m-2 p-2 pt-5 pb-5 display-3 rounded-lg z" id="headBanner"> Pilot Group of Products </h1>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 p-5">
                    <h1 class="display-3">Sprays</h1>
                    <p>  Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small>
                    </p>
                </div>
                <div class="col-md-4 d-flex align-items-center">
                    <Image alt="Spray Gun" src="drill-1.jpg" style={{width: "100%"}} />
                </div>
            </div>
        </div>
        <Banner imageSrc="https://media.gettyimages.com/photos/painting-table-on-white-color-picture-id510975945?s=2048x2048"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 p-5 d-flex align-items-center">
                    <Image alt="Spray Gun" src="HVLP-1.jpg" style={{width: "100%"}} />
                </div>
                <div class="col-md-8 p-5">
                    <h1 class="display-3">Sprays</h1>
                    <p> Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small> </p>
                </div>
            </div>
        </div>
        <Banner imageSrc="https://media.gettyimages.com/photos/mechanic-in-painting-booth-spray-wooden-part-of-furniture-picture-id523388508?s=2048x2048"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 p-5">
                    <h1 class="display-3">Sprays</h1>
                    <p>  Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small>
                    </p>
                </div>
                <div class="col-md-4 d-flex align-items-center">
                    <Image alt="Spray Gun" src="spray-2.jpg" style={{width: "100%"}} />
                </div>
            </div>
        </div>
        <h1 class="d-flex justify-content-center m-2 p-2 pt-5 pb-5 display-3 rounded-lg z" id="headBanner"> Superior Technology </h1>
        <Banner imageSrc="https://media.gettyimages.com/photos/paint-spray-gun-lying-on-its-nib-on-the-work-bench-picture-id1135775354?s=2048x2048"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 p-5 d-flex align-items-center">
                <Image alt="Spray Gun" src="torch-1.jpg" style={{width: "100%"}} />
                </div>
                <div class="col-md-8 p-5">
                    <h1 class="display-3">Sprays</h1>
                    <p> Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <small>Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.</small> </p>
                </div>
            </div>
        </div>
        <h1 class="d-flex justify-content-center m-2 p-2 pt-5 pb-5 display-3 rounded-lg z" id="headBanner"> Find Our Outlets </h1>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 ">
                    <Map />
                </div>
                <div class="col-md-4">
                    <div class="card p-2 m-2">
                        <div class="card-body">
                            <h5 class="card-title">Hyderabad - Jubilee Hills</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Outlet Store</h6>
                            <h6 class="card-subtitle mb-2 text-muted">9:00 AM to 6:00 PM</h6>
                            <address>
                                <strong>Pilot Sprayguns, Ltd. </strong><br /> 795 Folsom Ave, Suite 600<br /> San Francisco, CA 94107<br /> <abbr title="Phone">P:</abbr> (123) 456-7890
                            </address>
                            <a href="#" class="card-link">Directions</a>
                            <a href="#" class="card-link">Call</a>
                        </div>
                    </div>
                    <div class="card p-2 m-2">
                        <div class="card-body">
                            <h5 class="card-title">Mumbai - Bandra</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Outlet Store</h6>
                            <h6 class="card-subtitle mb-2 text-muted">9:00 AM to 6:00 PM</h6>
                            <address>
                                <strong>Pilot Sprayguns, Ltd. </strong><br /> 795 Folsom Ave, Suite 600<br /> San Francisco, CA 94107<br /> <abbr title="Phone">P:</abbr> (123) 456-7890
                            </address>
                            <a href="#" class="card-link">Directions</a>
                            <a href="#" class="card-link">Call</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
