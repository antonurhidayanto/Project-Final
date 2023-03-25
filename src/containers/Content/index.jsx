import React from 'react'
import Card from '../../components/Card'



function index() {
  return (
    <div>
        <section id="content">
            <Card/>   
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div id="pagination" className="pagination">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href="/#">Sebelumnya</a></li>
                        <li className="page-item"><a className="page-link" href="/#">1</a></li>
                        <li className="page-item"><a className="page-link" href="/#">2</a></li>
                        <li className="page-item"><a className="page-link" href="/#">3</a></li>
                        <li className="page-item"><a className="page-link" href="/#">Selanjutnya</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>
  )
}

export default index