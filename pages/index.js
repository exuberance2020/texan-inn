import Head from 'next/head'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Slider from '../components/mainpage/Slider.tsx'
import MainSlider from '../components/mainpage/MainSlider.tsx'
import Navbar from '../components/Navbar'
import useWindowSize from '../lib/useWindowSize';
import { AnimatePresence, motion } from 'framer-motion';

export default function Home(props) {

  const {
    mainSliderImages
  } = props;

  const [w, h] = useWindowSize();

  let isMobile = w < 700;

  return (
    <>
      <Head>
        <title>Texan Inn & Suites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="slider-container">
        <Slider mainSliderImages={mainSliderImages} />
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
            <p style={{ color: "#F6C3A7", fontWeight: "400", fontSize: 24 }}>
              Lorem ipsum dolor sit amet, consectet
            </p>
            <Row>
              <Col style={{ textAlign: isMobile ? 'center' : '' }}>
                <a className="btn">Book a room now !!</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <main id="services">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h2>
                Our Services
              </h2>
              <p>
                Large and inviting rooms, with brand new carpeting and elegant color schemes and darkening full length drapes for the night shift workers.
              </p>
              <p>
                All rooms have 42'' LED TVs with the finest channels like ESPN, HBO &amp; Satellite
              </p>
            </Col>
            <Col xs={12} md={6}>
              <MainSlider images={mainSliderImages}></MainSlider>
            </Col>
          </Row>
        </Container>
      </main>
      <div id="testimonials" style={{ padding: "50px 0px", marginTop: 20 }} className="client">
        <Container>
          <Row>
            <Col xs={12}>
              <center>
                <h2>
                  Our Client Speaks
                </h2>
                <p>
                  We have been working with the clients over the states
                </p>
              </center>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xs={12} md={4}>
              <div className="message-card">
                <p className="h4 font-weight-bold">
                  Effective Collaborating
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="msg-cap">
                <div className="msg-avatar">
                  <img src="/img/account_circle.svg" />
                </div>
                <span className="font-weight-bold">Mr. Abc Patel</span>
                <p>CEO Xyz Corp.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="message-card">
                <p className="h4 font-weight-bold">
                  Mindblowing Service
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="msg-cap">
                <div className="msg-avatar">
                  <img src="/img/account_circle.svg" />
                </div>
                <span className="font-weight-bold">Mr. Abc Patel</span>
                <p>CEO Xyz Corp.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="message-card">
                <p className="h4 font-weight-bold">
                  Intuitive Design
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div className="msg-cap">
                <div className="msg-avatar">
                  <img src="/img/account_circle.svg" />
                </div>
                <span className="font-weight-bold">Mr. Abc Patel</span>
                <p>CEO Xyz Corp.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="aboutus" className="contact-us">
        <Container
          style={{
            background: 'url(/img/bg-1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 300,
            paddingTop: 50
          }}>
          <Row>
            <Col className="p-3">
              <>
                <h2 style={{ textAlign: 'center' }}>
                  About Us
                </h2>
                <p style={{ textAlign: 'center' }}>
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                  Lorem ipsum dolor sit amet,
                </p>
              </>
            </Col>
          </Row>
        </Container>
      </div>
      <hr></hr>
      <div id="contactus" style={{ paddingTop: 20, marginTop: 20 }} className="contact-us">
        <Container className="contact-container">
          <Row className="p-auto">
            <Col xs={12} md={8} className="m-auto">
              <>
                <h2>
                  Contact Us
                </h2>
                <p className="font-weight-bold">
                  Call us at:
                </p>
                <p>
                  <a className="tel" href="tel:+19999999999">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-telephone" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <span style={{ color: 'black' }}>
                      +1 999 999 9999
                    </span>
                  </a>
                </p>
                <p>
                  OR
                </p>
                <p className="font-weight-bold">
                  Drop a message down below:
                </p>
                <form style={{ maxWidth: "100%", border: '1px solid #ced4da', padding: 20, borderRadius: 10 }} onSubmit={(e) => { e?.preventDefault() }}>
                  <Form.Group>
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control placeholder="jondoe@email.com" type="email" ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control placeholder="Hey! please type your message here" as="textarea" style={{ height: 150 }} ></Form.Control>
                  </Form.Group>
                  <Button>
                    Send
                    <svg style={{ marginLeft: 7, transform: 'rotate(45deg) translate(0,-4px)' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-triangle-half" viewBox="0 0 16 16">
                      <path d="M8.065 2.016A.13.13 0 0 0 8.002 2v11.983l6.856.017a.12.12 0 0 0 .066-.017.162.162 0 0 0 .054-.06.176.176 0 0 0-.002-.183L8.12 2.073a.146.146 0 0 0-.054-.057zm-1.043-.45a1.13 1.13 0 0 1 1.96 0l6.856 11.667c.458.778-.091 1.767-.98 1.767H1.146c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                    </svg>
                  </Button>
                </form>
              </>
            </Col>
            {w >= 845 && <Col md={4}>
              <figure style={{
                width: '100%',
                height: '100%'
              }}>
                <img
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  src="/img/chat-1.png"
                />
              </figure>
            </Col>}
          </Row>
        </Container>
      </div>
      <footer style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
        <h3 style={{textAlign: 'center'}}>
          Texan Inn & Suites
        </h3>
        <div class="nav" >
          {
            [
              { id: '#services', name: "Our Services" },
              { id: '#testimonials', name: "Testimonials" },
              { id: '#aboutus', name: "About Us" },
              { id: '#contactus', name: "Contact Us" },
            ].map((obj, index) => (
              <span>
                <a href={obj.id} style={{ color: 'white' }}>
                  {obj.name}
                </a>
              </span>
            ))
          }
        </div>
        <p className="copy-right mb-0 mx-auto">
          &#169; 2021 Texan Inn & Suites. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export async function getStaticProps() {
  try {

    const { Assets } = await import("../lib/contentfulApis");

    const mainSLiderImageData = (await Assets({ "fields.type": "mainSlider" }))[0];


    return {
      props: {
        mainSliderImages: mainSLiderImageData?.fields?.images.map(({ fields }) => (fields?.file?.url))
      }
    }
  } catch (e) {
    console.log('error in index page:', e)
    return {
      props: {}
    }
  }
}
