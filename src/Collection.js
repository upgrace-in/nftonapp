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
                                    <div className="abs_img" data-bg-img="nfts/1.png"></div>
                                    <img src="img/1x1.jpg" alt="" />
                                </div>
                            </div>
                            <input type="hidden" value="nfts/1.png" />
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="nfts/2.png"></div>
                                    <img src="img/1x1.jpg" alt="" />
                                </div>
                            </div>
                            <input type="hidden" value="nfts/2.png" />
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="nfts/3.png"></div>
                                    <img src="img/1x1.jpg" alt="" />
                                </div>
                            </div>
                            <input type="hidden" value="nfts/3.png" />
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="nfts/4.png"></div>
                                    <img src="img/1x1.jpg" alt="" />
                                </div>
                            </div>
                            <input type="hidden" value="nfts/4.png" />
                        </div>
                    </div>
                    <div className="collection_bottom">
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="nfts/5.png"></div>
                                    <img src="img/1x1.jpg" alt="" />
                                </div>
                            </div>
                            <input type="hidden" value="nfts/5.png" />
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="nfts/7.png"></div>
                                    <img src="img/1x1.jpg" alt="" />
                                </div>
                            </div>
                            <input type="hidden" value="nfts/7.png" />
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="nfts/6.png"></div>
                                    <img src="img/1x1.jpg" alt="" />
                                </div>
                            </div>
                            <input type="hidden" value="nfts/6.png" />
                        </div>
                        <div className="item">
                            <div className="item_in">
                                <div className="img">
                                    <div className="abs_img" data-bg-img="nfts/8.png"></div>
                                    <img src="img/1x1.jpg" alt="" />
                                </div>
                            </div>
                            <input type="hidden" value="nfts/8.png" />
                        </div>
                    </div>
                </div>

                <div className="fn_cs_desc">
                    <p>NFTs backed by our people with an extensive knowledge of the web3 space 'cause we want to provide value for our holders and for the entire nft community.</p>
                    <Whitelisting />
                </div>

            </div>
        </section>
    )
}