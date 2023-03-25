import React from 'react'
import Kuning from '../../assets/img/Subtract.png'
import biru from '../../assets/img/Subtract-(1).png'
import perempuan from '../../assets/img/image-7.png'

function index() {
  return (
    <div>
        <section id="hero" className="hero d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                        <div className="row row-text">
                        <h1 className="title">Jadi expert bersama<br/>edspert.id</h1>
                        <p className="text-white mt-4">Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                        <img src={Kuning} alt="subtract-kuning" className="gambar-1"/>
                        <img src={biru} alt="subtract-biru" className="gambar-2"/>
                        <img src={perempuan} alt="perempuan" className="gambar-3"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default index