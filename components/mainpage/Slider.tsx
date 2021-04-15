import { useEffect, useLayoutEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
// import { images } from "./imagedata";
import useWindowSize from "../../lib/useWindowSize";

export default function Slider(props) {

    const {
        mainSliderImages,
        images = mainSliderImages
    } = props;

    const [[page, direction], setPage] = useState([0, 0]);
    
    var [width, height] = useWindowSize();

    const imageIndex = wrap(0, images.length, page);

    useEffect(() => {
        const swipe = setInterval(() => {
            setPage(([p, d]) => ([p + 1, -1]))
        }, 8000)

        return () => {
            clearInterval(swipe)
        }
    }, []);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    let params = ''

    if(width >= 1000) {
        params = '?w=1200'
    } 
    else if(width < 400) {
        params = '?w=400'
    }
    else if(width < 600) {
        params = '?w=600'
    }
    else if(width < 800) {
        params = '?w=800'
    } 
    else if(width < 1000) {
        params = '?w=1000'
    } 
    return (
        <>
            <div className="image-wrapper">
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        style={{
                            backgroundImage: `url(${images[imageIndex]}${params})`
                        }}
                        key={page}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="slider-img"
                        transition={{
                            opacity: { duration: 2 },
                            ease: [0.1, 0.67, 0.83, 0],
                        }}
                    />
                </AnimatePresence>
            </div>
        </>
    );
};
