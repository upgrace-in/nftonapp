import Whitelisting from './Whitelisting'

export default function Header() {
    return (
        <div className="Header">
            <div className="metaportal_fn_mobnav">
                <div className="mob_top">
                    <div className="social_trigger">
                        <div className="trigger">
                            <span></span>
                        </div>
                        <div className="social">
                            <div className="logo">
                                <a href="index.html"><img src="assets/logo2.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div className="wallet">
                        <a href="#mintSection" className="metaportal_fn_button"><span>Mint</span></a>
                    </div>
                </div>
            </div>
            <header id="header">
                <div className="header">
                    <div className="header_in">

                        <div className="trigger_logo">
                            <div className="trigger">
                                <span></span>
                            </div>
                            <div className="logo">
                                <a href="index.html"><img src="assets/logo2.png" alt=""/></a>
                            </div>
                        </div>

                        <div className="nav">
                            <ul>
                                <li><a className="creative_link" href="#about">About</a></li>
                                <li><a className="creative_link" href="#collection">Collection</a></li>
                                <li><a className="creative_link" href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="wallet">
                            <Whitelisting/>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );
}
