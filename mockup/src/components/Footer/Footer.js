import React from 'react';
import IconList from '../Lists/IconList';
import socialMediaLinks from '../../data/dotgov-social-links.json';

export default class Footer extends React.Component {
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        const year = new Date().getFullYear();
        return (
            <React.Fragment>
                <section className="bc_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <IconList items={socialMediaLinks} />
                            </div>
                            <div className="col-md-6 text-right">
                                <div className="dg_baltcogo">
                                    <a href="/baltco-go">
                                        <img
                                            src="/img/baltcogo-logo-sm.png"
                                            alt=""
                                        />
                                    </a>
                                    <a href="/app-store">
                                        <img src="/img/app-store.png" alt="" />
                                    </a>
                                    <a href="/google-play">
                                        <img
                                            src="/img/google-play.png"
                                            alt=""
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bc_section container ">
                    <div className="row between-xs">
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <h3>About Baltimore County</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <h3>Find Information</h3>
                            <ul>
                                <li>
                                    <a href="#target">Find a County Service</a>
                                </li>
                                <li>
                                    <a href="#target">Phone Numbers</a>
                                </li>
                                <li>
                                    <a href="#target">Report a Problem</a>
                                </li>
                                <li>
                                    <a href="#target">Directions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <h3>Policies</h3>
                            <ul>
                                <li>
                                    <a href="#target">User Terms</a>
                                </li>
                                <li>
                                    <a href="#target">Privacy</a>
                                </li>
                                <li>
                                    <a href="#target">
                                        Reasonable Accommodation
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-12 col-xs-12">
                            <h3>Follow Us</h3>
                            <a
                                className="twitter-timeline"
                                data-height="400"
                                href="https://twitter.com/BaltCoGov?ref_src=twsrc%5Etfw"
                            >
                                Tweets by BaltCoGov
                            </a>{' '}
                        </div>
                    </div>
                </section>
                <footer className="dg_footer">
                    <div className="container">
                        <div className="row">
                            <p className="col-xs-9">
                                &copy; Copyright {year} Baltimore County
                                Government | 400 Washington Ave, Towson Maryland
                                21204
                            </p>
                            <div className="col-xs-3 text-right">
                                <p>Google Translate</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}
