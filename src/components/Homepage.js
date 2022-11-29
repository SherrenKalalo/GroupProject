import React, { useState, useEffect } from 'react';
import "../assets/css/templatemo-style.css";
import Contact from './Contact';
import About from './About';
import axios from "axios";
import Top from './Top';

const Homepage = () => {

    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:3004/menu")
        .then((res) => setMenu (res.data));
    },[]);

    return(
        <div className="container">
            <Top />
            <main>
                <header className="row tm-welcome-section">
                <h2 className="col-12 text-center tm-section-title">Marijo Makang Disini Kawan</h2>
                <p className="col-12 text-center">Budayakan malas memasa, karena memasa torang pe kerja. Singgah jo, nanti om deng tanta yang ator ngoni pe makang. Mar jang lupa bayar neh, nda mahal-mahal skali kwa eh.</p>
                </header>
                <div className="tm-paging-links">
                    <h1 className="col-12 text-center tm-section-title">Menu Makanan</h1>
                </div>

                {/* Menu */}
                <div className="row tm-gallery">
                {/* gallery page 1 */}
                <div id="tm-gallery-page-pizza" className="tm-gallery-page">
                               
                {
                    menu.map(item => {
                        return(
                             <article className="col-lg-3 col-md-4 col-sm-6 col-20 tm-gallery-item">
                                <figure> 
                                    <img src={`img/${item.gambar}.jpg`} alt="Image" className="img-fluid tm-gallery-img" />
                                    <figcaption>
                                        <h4 className="tm-gallery-title">{item.judul}</h4>
                                        <p className="tm-gallery-description">{item.keterangan}</p>
                                        <p className="tm-gallery-price">{item.harga}</p>
                                    </figcaption>
                                </figure>
                            </article>
                            
                        )
                     })
                }
                </div> 
                </div>
               
               
               
               
               
               
                <div className="tm-section tm-container-inner">
                <div className="row">
                    <div className="col-md-6">
                    <figure className="tm-description-figure">
                        <img src="https://asset.kompas.com/crops/pjtMmztUVAA5dh3m4aYd289jugo=/0x0:773x515/750x500/data/photo/2022/08/30/630d6bda8bef1.png" alt="Image" className="img-fluid" />
                    </figure>
                    </div>
                    <div className="col-md-6">
                    <div className="tm-description-box"> 
                    <br></br>
                        <h2 style={{color: 'rgba(100, 1, 1, 1)'}}>Terbukti Terkenal!!!</h2> <br></br>
                        <p className="tm-mb-45">See??? Bahkan Jess No Limit deng Sisca Kohl pernah makang disiniii :p. Kong mo tunggu apalagi guys? Datang deng pesan jo sekarang! ^^</p>
                    </div>
                    </div>
                </div>
                </div>
                <br></br><br></br><br></br>
                <About />
                <Contact />
            </main>
        </div>

        

    )
};

export default Homepage;