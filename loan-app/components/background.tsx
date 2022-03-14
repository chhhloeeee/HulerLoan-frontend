import {useEffect, useState} from "react";
import Image from "next/image";
import mountain from '../images/mountain.jpg'



function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height,
    }
}
function background(){
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        const {width, height} = getWindowDimensions()

        setWidth(width);
        setHeight(height);
    },[]);

    useEffect(() => {
        function handleResize(){
            const {width, height} = getWindowDimensions();

            setWidth(width);
            setHeight(height);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    if(width && height){
        return ( <Image
        src={mountain}
        width={width}
        height={height}
        />
        )
    }

}

export default background;