import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (

        <footer class="site-footer">
            <div class="container">
                <div class="row">
                    

                    <div class="col-xs-6 col-md-3">
                        <h6>Categories</h6>
                        <ul class="footer-links">
                            <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
                            <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
                            <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
                            <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
                            <li><a href="http://scanfcode.com/category/android/">Android</a></li>
                            <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
                        </ul>
                    </div>

                    <div class="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul class="footer-links">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/contact">Conact Us</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link  to="/about">About Us</Link>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div class="container">
                <div class="row">
                    <div>
                        <center>
                            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by &#160;
                                <a href='https://www.stridelysolutions.com/'>Stridely Solutions</a>.
                            </p>
                        </center>
                    </div>
                </div>
            </div>
        </footer>



    )
}
