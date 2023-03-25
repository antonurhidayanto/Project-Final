import React from 'react'
import './style.css'
import Header from '../../containers/Header'
import Content from '../../containers/Content'
import Footer from '../../containers/Footer'

function index() {
  return (
    <div>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default index