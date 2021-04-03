import axios from 'axios'
import { useEffect, useState } from 'react'
import { Block } from './Block'
import { txModel } from './models'
import { Nav } from './Nav'
import ToggleSwitch from './ToggleSwitch'
import { Transaction } from './Transaction'

export const Home = () => {
    const [isAutoFetching, setIsAutoFetching] = useState(false)

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

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${url}/block/362619`)

            setData(response.data)
            const all = await fetchTransDetails(response.data[1].Transactions)

            setTransData(all)
            setIsLoading(false)
        }

        fetchData()

        if (isAutoFetching) {
            const interval = setInterval(() => {
                fetchData()
            }, 3000)
            return () => clearInterval(interval)
        }
    }, [isAutoFetching])

    return (
        <>
            <div className="hero-body">
                <div style={{ position: 'absolute', right: 0 }}>
                    <ToggleSwitch
                        id="switch"
                        checked={isAutoFetching}
                        onChange={(checked) => setIsAutoFetching(checked)}
                        name="AUTO"
                    />
                </div>
                <div className="container">
                    <div className="content">
                        <h3>Block</h3>
                        {isLoading ? (
                            <div>Loading ...</div>
                        ) : (
                            <Block {...aquaData[0]} />
                        )}

                        <h3>Transactions</h3>
                        {isLoading ? (
                            <div>Loading ...</div>
                        ) : (
                            transData.map((tx, idx) => (
                                <Transaction
                                    key={txModel(tx).hash}
                                    tx={tx}
                                    idx={idx}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
