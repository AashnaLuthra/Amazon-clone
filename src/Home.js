import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {

    return (

        <div className='home'>

            <div className='home_container'>
                <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"></img>


                <div className='home_row'>
                    <Product id={1234} title='The lean startup' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5} />
                    <Product id={1235} title='Kenywood Kmix Stand Mixer' price={239} image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg' rating={3} />
                </div>

                <div className='home_row'>
                    <Product id={1236} title='Samsung LC4900776SX Curved LED Gaming Monitor' price={199.99} image='https://images.samsung.com/is/image/samsung/in-gaming-monitor-c27g55tqww-lc27g55tqwwxxl-frontblack-335280359?$720_576_PNG$' rating={3} />
                    <Product id={1237} title='Amazon Echo Smart Speaker with Alexa' price={98.99} rating={5} image='https://m.media-amazon.com/images/I/61WUqJd4dfS._SY450_.jpg' />
                    <Product id={1238} title='New Apple iPad Pro - Silver(4th Gen)' price={588.99} rating={4} image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_FMT_WHH?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1617126635000' />
                </div>

                <div className='home_row'>
                    <Product id={1238} title='Apple AirPods(3rd Gen)' price={500} rating={5} image='https://www.apple.com/newsroom/images/product/airpods/standard/Apple_AirPods-3rd-gen_hero_10182021_inline.jpg.slideshow-medium_2x.jpg' />

                </div>
            </div>
        </div>
    )
}

export default Home