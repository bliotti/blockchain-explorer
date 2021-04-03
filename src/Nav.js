import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Nav() {
    return (
        <nav className="navbar is-info">
            <div className="navbar-brand">
                <div
                    className="navbar-burger burger"
                    data-target="navbarExampleTransparentExample"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start is-link">
                    <Link className="navbar-item" to="/">
                        Home
                    </Link>
                    <a
                        className="navbar-item"
                        href="https://aquachain.github.io"
                    >
                        Github
                    </a>
                    <a
                        className="navbar-item"
                        href="https://explorer.aquacha.in/"
                    >
                        explorer JSON
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a
                            className="navbar-link"
                            href="/documentation/overview/start/"
                        >
                            Docs
                        </a>
                        <div className="navbar-dropdown is-boxed">
                            <a className="navbar-item" href="admin.html">
                                Admin
                            </a>
                            <a className="navbar-item" href="forum.html">
                                Forum
                            </a>
                            <a className="navbar-item" href="blog.html">
                                Blog
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item" href="search.html">
                                Search
                            </a>
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a
                                    className="bd-tw-button button"
                                    data-social-network="Twitter"
                                    data-social-action="tweet"
                                    rel="noreferrer"
                                    data-social-target="#"
                                    target="_blank"
                                    href="https://twitter.com/intent/tweet?text=get free bulma templates:;url=https://github.com/BulmaTemplates/bulma-templates"
                                >
                                    <span className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </span>
                                    <span> Tweet </span>
                                </a>
                            </p>
                            <p className="control">
                                <a
                                    className="button is-primary"
                                    href="https://aquachain.github.io/"
                                >
                                    <span className="icon">
                                        <i className="fas fa-download"></i>
                                    </span>
                                    <span>Download</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
