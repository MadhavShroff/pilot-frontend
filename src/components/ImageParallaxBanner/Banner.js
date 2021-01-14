import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';

export default (props) => {
    return (
        <ParallaxBanner
            className={props.classes || ""}
            layers={[
                {
                    image: props.imageSrc,
                    amount: props.amount || 1,
                }
            ]}
            style={{
                height: props.height || "250px",
            }}
        ></ParallaxBanner>
    );
}