import Whitelisting from './Whitelisting'

export default function Collection() {
    return (
        <section id="collection">
            <div className="container">

                <h3 className="fn__maintitle big" data-text="Our Collection" data-align="center">Our Collection</h3>

                <div className="fn_cs_collection">
                    <div className="collection_top">
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="watermarks/CG_1.png"></div>
                                    <img src="img/1x1.jpg" alt=""/>
                                </div>
                            </div>
                            <input type="hidden" value="watermarks/CG_1.png"/>
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="watermarks/CG_2.png"></div>
                                    <img src="img/1x1.jpg" alt=""/>
                                </div>
                            </div>
                            <input type="hidden" value="watermarks/CG_2.png"/>
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="watermarks/CG_3.png"></div>
                                    <img src="img/1x1.jpg" alt=""/>
                                </div>
                            </div>
                            <input type="hidden" value="watermarks/CG_3.png"/>
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="watermarks/CG_4.png"></div>
                                    <img src="img/1x1.jpg" alt=""/>
                                </div>
                            </div>
                            <input type="hidden" value="watermarks/CG_4.png"/>
                        </div>
                    </div>
                    <div className="collection_bottom">
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="watermarks/CG_5.png"></div>
                                    <img src="img/1x1.jpg" alt=""/>
                                </div>
                            </div>
                            <input type="hidden" value="watermarks/CG_5.png"/>
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="watermarks/CG_6.png"></div>
                                    <img src="img/1x1.jpg" alt=""/>
                                </div>
                            </div>
                            <input type="hidden" value="watermarks/CG_6.png"/>
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="watermarks/CG_7.png"></div>
                                    <img src="img/1x1.jpg" alt=""/>
                                </div>
                            </div>
                            <input type="hidden" value="watermarks/CG_7.png"/>
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="watermarks/CG_8.png"></div>
                                    <img src="img/1x1.jpg" alt=""/>
                                </div>
                            </div>
                            <input type="hidden" value="watermarks/CG_8.png"/>
                        </div>
                    </div>
                </div>

                <div className="fn_cs_desc">
                    <p>Meta Legends represent a collection of 17,000 legends categorized by level of rarity and generated with hundreds of elements. The Legends are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</p>
                    <Whitelisting/>
                </div>

            </div>
        </section>
    )
}