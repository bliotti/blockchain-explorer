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
                    const response = await axios.get(`${url}/block/29390`)
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
        <div className="App">
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul>
                    {data[1].Transactions.map((item) => (
                        <li key={item.hash}>
                            <a href={'#'}>{item.hash}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default App
