import React from 'react';
import PropTypes from 'prop-types';
import IconList from '../Lists/IconList';
import socialMediaLinks from '../../data/dotgov-social-links.json';

const propTypes = {};

const defaultProps = {};

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
                <section className="row">
                    <IconList items={socialMediaLinks} />
                </section>
                <section className="row between-xs">
                    <div className="col-xs-3">
                        <h3>About Baltimore County</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="col-xs-3">
                        <h3>Find Information</h3>
                        <ul>
                            <li>
                                <a href="#">Find a County Service</a>
                            </li>
                            <li>
                                <a href="#">Phone Numbers</a>
                            </li>
                            <li>
                                <a href="#">Report a Problem</a>
                            </li>
                            <li>
                                <a href="#">Directions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-3">
                        <h3>Policies</h3>
                        <ul>
                            <li>
                                <a href="#">User Terms</a>
                            </li>
                            <li>
                                <a href="#">Privacy</a>
                            </li>
                            <li>
                                <a href="#">Reasonable Accommodation</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-3">
                        <h3>Follow Us</h3>
                        <a
                            className="twitter-timeline"
                            data-height="400"
                            href="https://twitter.com/BaltCoGov?ref_src=twsrc%5Etfw"
                        >
                            Tweets by BaltCoGov
                        </a>{' '}
                    </div>
                </section>
                <footer className="row dg_footer">
                    <p className="col-xs-8">
                        &copy; Copyright {year} Baltimore County Government |
                        400 Washington Ave, Towson Maryland 21204
                    </p>
                    <p className="col-xs-4">Google Translate</p>
                </footer>
            </React.Fragment>
        );
    }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
