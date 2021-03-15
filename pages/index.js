import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from '../components/mainpage/Slider.tsx'
import MainSlider from '../components/mainpage/MainSlider.tsx'
import Navbar from '../components/Navbar'
import useWindowSize from '../lib/useWindowSize';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home() {

  const [w, h] = useWindowSize();

  let isMobile = w < 700;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="slider-container">
        <Slider />
      </div>
      <Container fluid className="hero p-auto">
        <Row>
          <Col className={`d-flex ${isMobile ? 'justify-content-center' : 'justify-content-end'}`}>
            {/* <img className="hero-logo" src='/logo.svg'></img> */}
            <svg className="hero-logo" version="1.1" viewBox="0 0 26.458 26.458" xmlns="http://www.w3.org/2000/svg">
              <g fill="rgba(0,0,0,0)" strokeWidth=".30077px">
                <AnimatePresence key={"main logo"} exitBeforeEnter>
                  <motion.path
                    initial={{
                      skewX: -10,
                    }}
                    animate={{
                      skewX: 0,
                    }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      repeatType: "reverse",
                      repeat: 2
                    }}
                    stroke="#f6c3a7"
                    d="m4.0104 2.4231-3.3041 14.47 12.495 8.3931 3.2661-14.356z" opacity=".65" />
                  <motion.path
                    initial={{
                      skewX: 10,
                    }}
                    animate={{
                      skewX: 0,
                    }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      repeatType: "reverse",
                      repeat: 2
                    }}
                    stroke="#f6c3a7"
                    d="m13.201 25.324-3.3041-14.47 12.495-8.3931 3.2661 14.356z" opacity=".65" />
                  <motion.path
                    initial={{
                      scaleY: 0.5,
                    }}
                    animate={{
                      scaleY: 1,
                    }}
                    transition={{
                      scaleY: { duration: 1 }
                    }}
                    stroke="#f6c3a7"
                    d="m13.201 25.324-8.4754-12.184 8.4495-12.457 8.3976 12.093z" opacity=".65" />
                </AnimatePresence>
              </g>
            </svg>

          </Col>
          <Col style={!isMobile ? { borderLeft: '1px solid #F6C3A7' } : {}}>
            <h1>
              Texan <br /> <small>Inn & Suites</small>
            </h1>
            <Row>
              <Col style={{ textAlign: isMobile ? 'center' : '' }}>
                <a className="btn">Book a room now !!</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <main>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2>
                Discover Rooms
              </h2>
              <p>
                Large and inviting rooms, with brand new carpeting and elegant color schemes and darkening full length drapes for the night shift workers.
              </p>
              <p>
                All rooms have 42'' LED TVs with the finest channels like ESPN, HBO &amp; Satellite
              </p>
            </Col>
            <Col xs={12} md={6}>
              <MainSlider ></MainSlider>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}
