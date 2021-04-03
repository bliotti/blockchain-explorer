import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export function Address() {
    let { id } = useParams()
    const [addressData, setAddressData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const url = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        const fetchData = async () => {
            try {
                const all = await axios.get(`${url}/address/${id}`)
                setAddressData(all)
                setIsLoading(false)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [id, url])

    return !isLoading ? (
        <div>
            <p>Balance: {addressData.data.balance}</p>
            <p>Pending Balance: {addressData.data.pendingBalance}</p>
            <p>Nonce: {addressData.data.nonce}</p>
        </div>
    ) : (
        <div>Loading ...</div>
    )
}
