import 'react-bulma-components/dist/react-bulma-components.min.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    HashRouter,
} from 'react-router-dom'
import { Home } from './Home'
import { Nav } from './Nav'
import { Transaction } from './Transaction'
import { Address } from './Address'
import { Block } from './Block'
import { NoMatch } from './NoMatch'

const Web3 = require('web3')
let web3 = new Web3(Web3.givenProvider || 'ws://localhost:8545')

function App() {
    return (
        <div>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Nav />
                <Switch>
                    <Route path="/tx/:id" component={Transaction}></Route>
                    <Route path="/address/:id" component={Address}></Route>
                    <Route exact path="/block/:id" component={Block}></Route>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="*" component={NoMatch}></Route>
                </Switch>
            </HashRouter>
        </div>
    )
}

export default App
