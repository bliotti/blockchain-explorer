// import logo from './logo.svg';
import { useEffect, useState } from 'react'
import './App.css'
const axios = require('axios')
require('dotenv').config()

function App() {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const url = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            if (url) {
                try {
                    const response = await axios.get(`${url}/block/latest`)
                    console.log(response)
                    setData(response.data)
                    setIsLoading(false)
                } catch (error) {
                    console.error(error)
                    setIsLoading(false)
                }
            }
        }
        fetchData()
    }, [url])

    return (
        <div>
            <header className="App-header">
                <h3>Block</h3>

                {isLoading ? (
                    <div>Loading ...</div>
                ) : (
                    <ul>
                        {Object.keys(data[0]).map((x, i) => (
                            <p>
                                {x !== 'logsBloom'
                                    ? `${x}: ${data[0][x]}`
                                    : null}
                                {/* {x}: {data[0][x]} */}
                            </p>
                        ))}
                    </ul>
                )}

                <h3>Transactions</h3>
                {isLoading ? (
                    <div>Loading ...</div>
                ) : (
                    <ul>
                        {data[1].Transactions.map((item) => (
                            <p key={item.hash}>
                                <a
                                    className="App-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://explorer.aquacha.in/tx/${item.hash}`}
                                >
                                    {item.hash}
                                </a>
                            </p>
                        ))}
                    </ul>
                )}
            </header>
        </div>
    )
}

export default App
