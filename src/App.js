// import logo from './logo.svg';
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Home } from './Home'
import { Nav } from './Nav'

const Web3 = require('web3')
let web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')

function App() {
    return (
        <div>
            <Nav />
            <div class="hero-body">
                <div class="container">
                    {/* <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/tx">Tx</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav> */}
                    {/* <Switch>
                    <Route path="/tx">
                        <Trans />
                    </Route>
                    <Route path="/block">
                        <Block />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch> */}
                    <Home></Home>
                </div>
            </div>
        </div>
    )
}

export default App
