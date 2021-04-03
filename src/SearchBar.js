import axios from 'axios'
import { useState } from 'react'

export const SearchBar = (params) => {
    const [keyword, setKeyword] = useState('')
    const url = process.env.REACT_APP_BASE_URL

    const getData = async (keywd) => {
        const kw = keywd.trim()
        const resTx = await axios.get(`${url}/tx/${kw}`)
        if (resTx.data) {
            console.log('tx found', resTx.data)
            params.params.history.push(`/tx/${kw}`)
        } else {
            const resBlk = await axios.get(`${url}/block/${kw}`)
            if (resBlk.data === 'invalid block\n') {
                console.log('nothing')
                params.params.history.push(`/notfound/${kw}`)
            } else {
                console.log('resBlk found', resBlk.data)
                params.params.history.push(`/${kw}`)
            }
        }
    }

    const BarStyling = {
        width: '20rem',
        background: '#F2F1F9',
        border: 'none',
        padding: '0.5rem',
        marginBottom: '1rem',
    }
    return (
        <>
            <input
                style={BarStyling}
                key="random1"
                value={keyword}
                placeholder={'tx/block'}
                onChange={(e) => {
                    return setKeyword(e.target.value)
                }}
                onKeyDown={(e) => (e.key === 'Enter' ? getData(keyword) : null)}
            />
            <button
                type="button"
                style={{
                    padding: '0.5rem',
                    background: '#F2F1F9',
                    border: 'none',
                }}
                name=""
                id=""
                onClick={(e) => {
                    getData(keyword)
                }}
                className="btn btn-primary btn-lg btn-block"
            >
                search
            </button>
        </>
    )
}
