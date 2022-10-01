import Whitelisting from './Whitelisting'
import HandleWhitelistForm from './HandleWhitelistForm'
import Timer from './Timer'

export default function Home() {
    return (
        <section id="home">
            <div className="container">

                <h3 className="fn__maintitle big" data-text="Scarlett GIRL" data-align="center">Scarlett GIRL</h3>

                <div className="fn_cs_slider" data-responsive="on">
                    <div className="slider_top">
                        <img src="img/1x1.jpg" alt=""/>
                            <ul>
                                <li className="prev" data-index={1}>
                                    <div className="item">
                                        <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="watermarks/CG_1.png"></div>
                                            </div>
                                    </div>
                                </li>
                                <li className="active" data-index={2}>
                                    <div className="item">
                                        <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="watermarks/CG_2.png"></div>
                                            </div>
                                    </div>
                                </li>
                                <li className="next" data-index={3}>
                                    <div className="item has_video">
                                        <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="watermarks/CG_3.png"></div>
                                            </div>
                                    </div>
                                </li>
                                <li className="next2" data-index={4}>
                                    <div className="item">
                                        <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="watermarks/CG_4.png"></div>
                                            </div>
                                    </div>
                                </li>
                                <li data-index={5}>
                                    <div className="item">
                                        <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="watermarks/CG_5.png"></div>
                                            </div>
                                    </div>
                                </li>
                                <li data-index={6}>
                                    <div className="item">
                                        <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="watermarks/CG_6.png"></div>
                                            </div>
                                    </div>
                                </li>
                                <li className="prev2" data-index={7}>
                                    <div className="item">
                                        <img src="img/1x1.jpg" alt=""/>
                                            <div className="item_in">
                                                <div className="img" data-bg-img="watermarks/CG_7.png"></div>
                                            </div>
                                    </div>
                                </li>
                            </ul>
                    </div>
                    <div className="slider_nav">
                        <a href="#" className="prev">
                            <span className="circle"></span>
                            <span className="icon"><img src="svg/down.svg" alt="" className="fn__svg"/></span>
                            <span className="circle"></span>
                        </a>
                        <a href="#" className="next">
                            <span className="circle"></span>
                            <span className="icon"><img src="svg/down.svg" alt="" className="fn__svg"/></span>
                            <span className="circle"></span>
                        </a>
                    </div>
                </div>
                <div className="fn_cs_desc">
                    <Timer/>
                    <br/>
                    <Whitelisting/>
                    <HandleWhitelistForm/>
                </div>


            </div>
        </section>
    )
}