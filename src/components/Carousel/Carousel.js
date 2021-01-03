import React from "react";
import {
    Carousel
} from 'react-bootstrap';

export default () => {
    return (
    <Carousel>
        <div class="container-fluid bg-primary">
            
            </div> 
    <Carousel.Item interval={1000}>
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
    <div className="h-40 w-100 bg-warning"/>
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <div className="h-40 w-100 bg-warning"/>
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
)};