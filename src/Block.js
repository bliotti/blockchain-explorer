import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, useParams } from 'react-router-dom'

export function Block(params) {
    let { id } = useParams()

    const [blockData, setBlockData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const url = process.env.REACT_APP_BASE_URL
    const hex2num = (hex) => parseInt(hex, 16).toLocaleString()

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(`${url}/block/${id}`)
                    setBlockData(response.data[0])
                    setIsLoading(false)
                } catch (error) {
                    console.error(error)
                }
            }

            fetchData()
        } else {
            setBlockData(params)
            setIsLoading(false)
        }
    }, [id, params, url])

    return !isLoading ? (
        <ul>
            <p>
                parentHash:
                <Link to={`/block/${blockData.parentHash}`}>
                    {blockData.parentHash}
                </Link>
            </p>

            <p>
                hash:
                <Link to={`/block/${blockData.hash}`}>{blockData.hash}</Link>
            </p>

            <p>{`sha3Uncles: ${blockData.sha3Uncles}`}</p>
            <p>{`miner: ${blockData.miner}`}</p>
            <p>{`stateRoot: ${blockData.stateRoot}`}</p>
            <p>{`transactionsRoot: ${blockData.transactionsRoot}`}</p>
            <p>{`receiptsRoot: ${blockData.receiptsRoot}`}</p>
            {/* <p>{`logsBloom: ${blockData.logsBloom}`}</p> */}
            <p>{`difficulty: ${hex2num(blockData.difficulty)}`}</p>
            <p>{`number: ${hex2num(blockData.number)}`}</p>
            <p>{`gasLimit: ${hex2num(blockData.gasLimit)}`}</p>
            <p>{`gasUsed: ${hex2num(blockData.gasUsed)}`}</p>
            <p>{`timestamp: ${blockData.timestamp}`}</p>
            <p>{`extraData: ${blockData.extraData}`}</p>
            <p>{`mixHash: ${blockData.mixHash}`}</p>
            <p>{`nonce: ${blockData.nonce}`}</p>
        </ul>
    ) : (
        <div>Loading ...</div>
    )
}
