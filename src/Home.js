import axios from 'axios'
import { useEffect, useState } from 'react'
import { Block } from './Block'
import { Trans } from './Trans'

export const Home = () => {
    const [aquaData, setData] = useState({})
    const [transData, setTransData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const url = process.env.REACT_APP_BASE_URL

    const fetchTransDetails = (trans) => {
        const allRequests = trans.map((tran) =>
            axios.get(`${url}/tx/${tran.hash}`)
        )
        return Promise.all(allRequests)
    }

    const fetchData = async () => {
        setIsLoading(true)
        if (url) {
            try {
                const response = await axios.get(`${url}/block/362619`)
                console.log(
                    '🚀 ~ file: Home.js ~ line 24 ~ fetchData ~ response',
                    response
                )
                setData(response.data)
                setIsLoading(false)
                try {
                    const all = await fetchTransDetails(
                        response.data[1].Transactions
                    )
                    setTransData(all)
                } catch (error) {
                    console.error(error)
                }
            } catch (error) {
                console.error(error)
                setIsLoading(false)
            }
        }
    }

    useEffect(() => {
        fetchData()

        const interval = setInterval(() => {
            fetchData()
        }, 30000)

        return () => clearInterval(interval)
    }, [])
    console.log(transData)
    return (
        <div className="content">
            <h3>Block</h3>
            {isLoading ? <div>Loading ...</div> : Block(aquaData[0])}

            <h3>Transactions</h3>
            {isLoading ? <div>Loading ...</div> : Trans(aquaData[1], transData)}
        </div>
    )
}
