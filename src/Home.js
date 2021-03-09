import axios from 'axios'
import { useEffect, useState } from 'react'
import { Block } from './Block'
import { Trans } from './Trans'

export const Home = () => {
    const [aquaData, setData] = useState({})
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
        <div className="content">
            <h3>Block</h3>
            {isLoading ? <div>Loading ...</div> : Block(aquaData[0])}

            <h3>Transactions</h3>
            {isLoading ? <div>Loading ...</div> : Trans(aquaData[1])}
        </div>
    )
}
