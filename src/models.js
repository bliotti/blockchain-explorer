export const defaultTxModel = (raw) => {
    return {
        to: null,
        from: null,
        value: null,
        txFee: null,
        hash: null,
    }
}

export const txModel = (raw) => {
    return {
        to: raw.data[0].to,
        hash: raw.data[0].hash,
        from: raw.data[1].from,
        value: parseInt(raw.data[0].value, 16).toLocaleString(),
        txFee: parseInt(raw.data[1].txFee, 16).toLocaleString(),
    }
}
