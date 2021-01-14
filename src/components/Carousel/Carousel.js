import React, { useState } from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
	{
		title: 'HVLP Technology',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		button: 'Learn More',
		image: 'https://media.gettyimages.com/photos/painting-with-spray-gun-picture-id166145172?s=2048x2048',
	},
	{
		title: 'Office Products',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Learn More',
		image: 'https://media.gettyimages.com/photos/bar-codes-helping-me-to-organize-packages-picture-id1200301158?s=2048x2048'
	},
	{
		title: 'Airless',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Learn More',
		image: 'https://media.gettyimages.com/photos/industrial-worker-spray-painting-and-wearing-protective-clothing-picture-id748344019?s=2048x2048'
	}
];

export default () => {
    return (
		<Slider 
			id="slider-wrapper"
			touchDisabled="false"
			autoplay={3000}
		>
            {content.map((item, index) => (
                <div key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                    >
                    <div className="inner">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <button>{item.button}</button>
                    </div>
                </div>
            ))}
        </Slider>
    );
}