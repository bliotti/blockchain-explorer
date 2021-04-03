import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { txModel, defaultTxModel } from './models'

export function Transaction(params) {
    let { id } = useParams()
    const { tx, idx } = params

    const [transData, setTransData] = useState(defaultTxModel)
    const [isLoading, setIsLoading] = useState(true)
    const url = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const all = await axios.get(`${url}/tx/${id}`)

                    setTransData(txModel(all))
                    setIsLoading(false)
                } catch (error) {
                    console.error(error)
                }
            }

            fetchData()
        } else {
            setTransData(txModel(tx))
            setIsLoading(false)
        }
    }, [id, tx, url])

    return !isLoading ? (
        <div style={{ marginBottom: 20 }}>
            <p>
                {`${id ? 'txid' : idx}:\t`}
                <Link to={`/tx/${transData.hash}`}>{transData.hash}</Link>
            </p>
            <ul>
                <p>
                    to:
                    <Link to={`/address/${transData.to}`}>{transData.to}</Link>
                </p>
                <p>
                    from:
                    <Link to={`/address/${transData.from}`}>
                        {transData.from}
                    </Link>
                </p>
                <p>value: {transData.value}</p>
                <p>
                    txFee:
                    {transData.txFee}
                </p>
            </ul>
        </div>
    ) : (
        <div>Loading ...</div>
    )
}
