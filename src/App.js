import React from 'react';
import {Link} from 'react-router-dom';

import './App.css';

const App = () => {
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <Link to="/" className="header__logo">
                            <img className="img" src="/assets/img/logo.png" alt="Logo" />
                        </Link>

                        <p className="content__text mobile__text">
                            To get the best experience we suggest you to mint Exverse Pass in your desktop browser
                        </p>

                        <div className="header__wrapper">
                            <Link to="/" className="header__link">
                                How to mint
                            </Link>

                            <button className="button second__button">
                                Connect Wallet
                            </button>
                        </div>

                        <div className="header__wrapper">
                            <a href="#" className="footer__social--link">
                                <img className="img" src="/assets/img/insta.png" alt="Icon" />
                            </a>

                            <a href="#" className="footer__social--link">
                                <img className="img" src="/assets/img/youtube.png" alt="Icon" />
                            </a>

                            <a href="#" className="footer__social--link">
                                <img className="img" src="/assets/img/twiter.png" alt="Icon" />
                            </a>

                            <a href="#" className="footer__social--link">
                                <img className="img" src="/assets/img/telegram.png" alt="Icon" />
                            </a>

                            <a href="#" className="footer__social--link">
                                <img className="img" src="/assets/img/discord.png" alt="Icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <div className="content">
                <div className="container">
                    <div className="content__inner">
                        <div className="content__wrapper content__title">
                            <span className="purple">Exverse</span> Pass
                        </div>

                        <div className="content__time">
                            mint in <span className="white bold">3d 17h 5m</span>
                        </div>

                        <p className="content__text">
                            2 passes per transaction ( 2 per address)
                        </p>

                        <div className="content__img--inner">
                            <img className="content__img" src="/assets/img/artefact.png" alt="picture" />

                            <div className="content__img--circle"></div>
                            <div className="content__img--circle big"></div>

                            <img className="content__img--out" src="/assets/img/circle.png" alt="picture" />
                        </div>

                        <div className="content__count--inner">
                            <div className="content__count">
                                <div className="content__count--val">
                                    <img className="content__count--icon" src="/assets/img/eth.png" alt="eth" />
                                    ethereum
                                </div>

                                <p className="content__count--text">
                                    2 near minted 1/2000
                                </p>

                                <div className="content__count--box">
                                    <div className="content__count--inc minus">
                                        -
                                    </div>

                                    <input className="input content__count--input" />

                                    <div className="content__count--inc plus">
                                        +
                                    </div>
                                </div>

                                <button className="button second__button content__count--button">
                                    Mint
                                </button>
                            </div>

                            <div className="content__count">
                                <div className="content__count--val">
                                    <img className="content__count--icon" src="/assets/img/near.png" alt="eth" />
                                    near
                                </div>

                                <p className="content__count--text">
                                    2 near minted 1/2000
                                </p>

                                <div className="content__count--box">
                                    <div className="content__count--inc minus">
                                        -
                                    </div>

                                    <input className="input content__count--input" />

                                    <div className="content__count--inc plus">
                                        +
                                    </div>
                                </div>

                                <button className="button second__button content__count--button">
                                    Mint
                                </button>
                            </div>
                        </div>

                        <div className="content__wrapper content__text--inner">
                            <div className="content__text--val white">
                                <span className="purple">Whitelist Sale:</span> 2022/04/25 06:00 (GMT+3)
                            </div>

                            <div className="content__text--val white">
                                <span className="purple">Public Sale:</span> 2022/04/25 06:00 (GMT+3)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <button className="button default__button">
                            Go Home Page
                        </button>

                        <div className="footer__social--inner">
                            <a href="#" className="footer__social--link">
                                <img className="img" src="/assets/img/insta.png" alt="Icon" />
                            </a>

                            <a href="#" className="footer__social--link">
                                <img className="img" src="/assets/img/youtube.png" alt="Icon" />
                            </a>

                            <a href="#" className="footer__social--link">
                                <img className="img" src="/assets/img/twiter.png" alt="Icon" />
                            </a>

                            <a href="#" className="footer__social--link">
                                <img className="img" src="/assets/img/telegram.png" alt="Icon" />
                            </a>

                            <a href="#" className="footer__social--link">
                                <img className="img" src="/assets/img/discord.png" alt="Icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App;