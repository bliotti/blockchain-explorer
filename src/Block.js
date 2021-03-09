export function Block({
    parentHash,
    sha3Uncles,
    miner,
    stateRoot,
    transactionsRoot,
    receiptsRoot,
    logsBloom,
    difficulty,
    number,
    gasLimit,
    gasUsed,
    timestamp,
    extraData,
    mixHash,
    nonce,
    hash,
}) {
    const hex2num = (hex) => parseInt(hex, 16).toLocaleString()
    const url = process.env.REACT_APP_BASE_URL

    return (
        <ul>
            <p>
                parentHash:
                <a href={`${url}/block/${parentHash}`}>{parentHash}</a>
            </p>
            <p>
                hash:
                <a href={`${url}/block/${hash}`}>{hash}</a>
            </p>

            <p>{`sha3Uncles: ${sha3Uncles}`}</p>
            <p>{`miner: ${miner}`}</p>
            <p>{`stateRoot: ${stateRoot}`}</p>
            <p>{`transactionsRoot: ${transactionsRoot}`}</p>
            <p>{`receiptsRoot: ${receiptsRoot}`}</p>
            {/* <p>{`logsBloom: ${logsBloom}`}</p> */}
            <p>{`difficulty: ${hex2num(difficulty)}`}</p>
            <p>{`number: ${hex2num(number)}`}</p>
            <p>{`gasLimit: ${hex2num(gasLimit)}`}</p>
            <p>{`gasUsed: ${hex2num(gasUsed)}`}</p>
            <p>{`timestamp: ${timestamp}`}</p>
            <p>{`extraData: ${extraData}`}</p>
            <p>{`mixHash: ${mixHash}`}</p>
            <p>{`nonce: ${nonce}`}</p>
        </ul>
    )
}
