import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    
    const [showMobileNav, setShowMobileNav] = useState(false)

    const openNavbar = () => {
        setShowMobileNav(true)
    }

    const closeNavbar = () => {
        setShowMobileNav(false)
    }

    return (
        <div className="navbar-container">
            {showMobileNav && 
            <div className="mobile-navbar">
                <div className=".close-button-x-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="bevel" onClick={() => closeNavbar()} style={{padding: "10px 5px 10px 25px"}}>
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <div className="mobile-navbar-nav-items-div">
                <ul>
                        <li>
                            VIDEOS
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#e62429" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="bevel"><path d="M9 18l6-6-6-6"/></svg>
                        </li>
                        <li>
                            CHARACTERS 
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#e62429" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="bevel"><path d="M9 18l6-6-6-6"/></svg>
                        </li>
                        <li>
                            COMICS 
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#e62429" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="bevel"><path d="M9 18l6-6-6-6"/></svg>
                        </li>
                        <li>
                            MOVIES 
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#e62429" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="bevel"><path d="M9 18l6-6-6-6"/></svg>
                        </li>
                        <li>
                            TV SHOWS 
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#e62429" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="bevel"><path d="M9 18l6-6-6-6"/></svg>
                        </li>
                        <li>
                            GAMES 
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#e62429" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="bevel"><path d="M9 18l6-6-6-6"/></svg>
                        </li>
                        <li>
                            NEWS 
                            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 24 24" fill="none" stroke="#e62429" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="bevel"><path d="M9 18l6-6-6-6"/></svg>
                        </li>
                        <li>CULTURE{' & '}LIFESTYLE</li>
                        <li>PODCASTS</li>
                        <li>SHOP</li>
                        <li>MARVEL MASTERCARD®</li>
                    </ul>
                </div>
                <div className="mobile-navbar-nav-items-div">
                    <ul>
                        <li><span className="marvel-insider">MARVEL INSIDER</span></li>
                        <li>SIGN IN</li>
                        <li>JOIN</li>
                    </ul>
                </div>
                <div className="mobile-navbar-social-media-div">
                    <ul>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#a1a1a1"><path d="M22.5 0c.83 0 1.5.67 1.5 1.5v21c0 .83-.67 1.5-1.5 1.5h-6v-9h3l.75-3.75H16.5v-1.5c0-1.5.75-2.25 2.25-2.25h1.5V3.75h-3c-2.76 0-4.5 2.16-4.5 5.25v2.25h-3V15h3v9H1.5A1.5 1.5 0 0 1 0 22.5v-21C0 .67.67 0 1.5 0h21z"/></svg>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#a1a1a1"><path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"/></svg>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#a1a1a1"><path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"/></svg>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#a1a1a1"><path d="M13.02 0v5.55h5.55v4.28h-5.55V16c0 1.39-.02 2.2.13 2.59.14.4.51.8.91 1.03.53.32 1.14.48 1.82.48 1.22 0 2.43-.4 3.63-1.18v3.78c-1.03.48-1.96.82-2.79 1.02-.83.2-1.73.29-2.7.29a7.36 7.36 0 0 1-4.74-1.6c-.6-.51-1-1.06-1.24-1.64a7.08 7.08 0 0 1-.34-2.5V9.82H4.44v-3.4a8.5 8.5 0 0 0 2.7-1.31 6.57 6.57 0 0 0 1.62-2.06c.41-.8.7-1.82.85-3.06H13z"/></svg>
                        </li>
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#a1a1a1"><path d="M12.04 3.5c.59 0 7.54.02 9.34.5a3.02 3.02 0 0 1 2.12 2.15C24 8.05 24 12 24 12v.04c0 .43-.03 4.03-.5 5.8A3.02 3.02 0 0 1 21.38 20c-1.76.48-8.45.5-9.3.51h-.17c-.85 0-7.54-.03-9.29-.5A3.02 3.02 0 0 1 .5 17.84c-.42-1.61-.49-4.7-.5-5.6v-.5c.01-.9.08-3.99.5-5.6a3.02 3.02 0 0 1 2.12-2.14c1.8-.49 8.75-.51 9.34-.51zM9.54 8.4v7.18L15.82 12 9.54 8.41z"/></svg>
                        </li>
                    </ul>
                </div>
                <div className="mobile-navbar-promotions-div">
                    <div className="mobile-navbar-promotions">
                        <div className="mobile-navbar-promotions-img">
                            <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/nav-logos-insider.png" alt="Marvel Insider"/>
                        </div>
                        <div className="mobile-navbar-promotions-text">
                            <h3>Marvel Insider</h3>
                            <h4>Get rewarded for being a Marvel Fan</h4>
                        </div>
                    </div>
                    <div className="mobile-navbar-promotions">
                        <div className="mobile-navbar-promotions-img">
                            <img src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_mastercard_promo-268x118_0-nav-flyout-v4.png" alt="Marvel Mastercard®" />
                        </div>
                        <div className="mobile-navbar-promotions-text">
                            <h3 class="promo-links__callout-title">Marvel Mastercard®</h3>
                            <h4 class="promo-links__callout-description">6 Card Designs—Unlimited Cashback</h4>
                        </div>
                    </div>
                </div>
            </div>}
            <div className="desktop-navbar">
                <div className="top-navbar">
                    <div className="responsive-hamburger-menu" onClick={() => openNavbar()}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="top-navbar-sign-join-div">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.6 66.7" width="20px" height="20px">
                                <path fill="#fff" fillRule="evenodd" d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z"></path>
                            </svg>
                        </div>
                        <div className="top-navbar-sign-join"> 
                            <div>SIGN IN</div>
                            <div>|</div>
                            <div>JOIN</div>
                        </div>
                    </div>
                    <div className="top-navbar-marvel-div">
                        <span>
                            <svg width="135" height="52" xmlns="http://www.w3.org/2000/svg">
                                <rect fill="#EC1D24" width="100%" height="100%"></rect>
                                <path fill="#FEFEFE" d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"></path><path fill="#EC1D24" d="M0 0h30v52H0z"></path>
                                <path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="top-navbar-mastercard-div">
                        <div className="top-navbar-mastercard">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.8 80.5"  width="50px" height="50px">
                                <path fill="#fff" d="M1.3 64.2c0 8.3 6.7 15 15 15h112.3c8.3 0 15-6.7 15-15V30.9H1.3v33.3zM143.6 16.2c0-8.3-6.7-15-15-15H16.3c-8.3 0-15 6.7-15 15v4.5h142.2l.1-4.5z"></path>
                            </svg>
                        </div>
                        <div className="top-navbar-mastercard-text-div">
                            MARVEL <br />
                            MASTERCARD®
                        </div>
                        <div className="top-navbar-search-div">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="bevel">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                    </div>
                    
                </div>
                <div className="bottom-navbar">
                    <ul>
                        <li>VIDEOS</li>
                        <li>CHARACTERS</li>
                        <li>COMICS</li>
                        <li>MOVIES</li>
                        <li>TV SHOWS</li>
                        <li>GAMES</li>
                        <li>NEWS</li>
                        <li>MORE</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar