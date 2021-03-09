export function Nav(params) {
    return (
        <nav class="navbar is-info">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    {/* <img
                        src="https://bulma.io/images/bulma-logo.png"
                        alt="Bulma: a modern CSS framework based on Flexbox"
                        width="112"
                        height="28"
                    /> */}
                </a>
                <div
                    class="navbar-burger burger"
                    data-target="navbarExampleTransparentExample"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start is-link">
                    <a class="navbar-item" href="https://aquachain.github.io">
                        Home
                    </a>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a
                            class="navbar-link"
                            href="/documentation/overview/start/"
                        >
                            Docs
                        </a>
                        <div class="navbar-dropdown is-boxed">
                            <a class="navbar-item" href="admin.html">
                                {' '}
                                Admin{' '}
                            </a>
                            <a class="navbar-item" href="forum.html">
                                {' '}
                                Forum{' '}
                            </a>
                            <a class="navbar-item" href="cover.html">
                                {' '}
                                Cover{' '}
                            </a>
                            <a class="navbar-item" href="cards.html">
                                {' '}
                                Cards{' '}
                            </a>
                            <a class="navbar-item" href="blog.html">
                                {' '}
                                Blog{' '}
                            </a>
                            <hr class="navbar-divider" />
                            <a class="navbar-item" href="search.html">
                                Search
                            </a>
                            <a class="navbar-item is-active" href="kanban.html">
                                Kanban
                            </a>
                        </div>
                    </div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a
                                    class="bd-tw-button button"
                                    data-social-network="Twitter"
                                    data-social-action="tweet"
                                    rel="noreferrer"
                                    data-social-target="#"
                                    target="_blank"
                                    href="https://twitter.com/intent/tweet?text=get free bulma templates:;url=https://github.com/BulmaTemplates/bulma-templates"
                                >
                                    <span class="icon">
                                        <i class="fab fa-twitter"></i>
                                    </span>
                                    <span> Tweet </span>
                                </a>
                            </p>
                            <p class="control">
                                <a
                                    class="button is-primary"
                                    href="https://aquachain.github.io/"
                                >
                                    <span class="icon">
                                        <i class="fas fa-download"></i>
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
