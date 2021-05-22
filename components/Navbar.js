import React, { useEffect, useRef, useState } from 'react'

function Navbar() {

    const [isHero, setisHero] = useState(true);

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            var doc = document.documentElement;
            var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
            if(top > 573) {
                // isHero.current = false
                setisHero(false)
            } else {
                // isHero.current = true
                setisHero(true)
            }
        })
    }, [])


    return (
        <nav
            style={{
                color: isHero ? 'white' : 'rgb(140, 48, 245)',
                display: 'flex',
                fontFamily: 'Poppins',
                justifyContent: 'space-between'
            }}
            
        >
            <div style={{
                fontSize: 36,
                fontWeight: 'bold',
                display: 'inline-block',
            }}>
                LOGO
            </div>
            <div
            className="nav-div"
            style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                width: '80%',
            }}>
                {
                 [
                     {id:'#services', name: "Our Services"},
                     {id:'#testimonials', name: "Testimonials"},
                     {id:'#aboutus', name: "About Us"},
                     {id:'#contactus', name: "Contact Us"},
                 ].map((obj, index) => (
                    <span className="mx-0">
                        <a href={obj.id} style={{color: isHero ? 'white' : 'rgb(140, 48, 245)'}}>
                            {obj.name}
                        </a>
                    </span>
                 ))
                }
            </div>
        </nav>
    )
}

export default Navbar
