import React from 'react'
import { FaFacebookSquare, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!">
                            <FaFacebookSquare />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FaTwitter />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FaGoogle />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FaInstagram />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FaLinkedinIn />
                        </a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
                            <FaGithub />
                        </a>
                    </section>
                    <section className="">
                        <form>
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example21" className="form-control" />
                                        <label className="form-label" for="form5Example21">Email address</label>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="">
                        <p> News Monkey is India's leading Indian News Portal with the aim of reaching millions of Indians in India . It provides you latest news of India in various categories like Sports, Health, Entertainment, Business, etc.
                        </p>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
                    © 2022 Copyright NewsMonkey
                </div>
            </footer >
        </div >

    )
}

export default Footer
