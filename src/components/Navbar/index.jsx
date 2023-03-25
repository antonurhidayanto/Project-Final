import React from 'react'
import Logo from '../../assets/img/LOGO.svg'


function index() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-fixed-top ">
                <div className="container mt-3">
                    <a href="/" className="navbar-brand">
                        <img src={Logo} className="logo" alt="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item dropdown ms-4">  
                                    <a href="/#" className="nav-link text-white dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown">Product</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/#" className="dropdown-item">Online Course</a></li>
                                        <li><a href="/#" className="dropdown-item">Mini bootcamp</a></li>
                                        <li><a href="/#" className="dropdown-item">Bootcamp</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown ms-4" >
                                    <a href="/#" className="nav-link text-white  dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown">Category</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="/#" className="dropdown-item">Digital Marketing</a></li>
                                        <li><a href="/#" className="dropdown-item">Product Management</a></li>
                                        <li><a href="/#" className="dropdown-item">English</a></li>
                                        <li><a href="/#" className="dropdown-item">Programming</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item ms-4">
                                    <a className="nav-link text-white " aria-current="page" href="/#">Tentang Toko Online</a>
                                </li>
                                <li className="nav-item ms-4">
                                    <a href="/#" className="btn btn-danger text-white  nav-link">Masuk/Daftar</a>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default index