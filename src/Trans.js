export function Trans(data, transData) {
    return (
        <ul>
            {transData.map((item, idx) => (
                <div style={{ marginBottom: 20 }}>
                    <p>
                        {`${idx}:\t `}
                        <a
                            key={item.data[0].hash}
                            className="App-link"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://explorer.aquacha.in/tx/${item.data[0].hash}`}
                        >
                            {item.data[0].hash}
                        </a>
                    </p>
                    <ul>
                        <p>to: {item.data[0].to}</p>
                        <p>from: {item.data[1].from}</p>
                        <p>
                            value:
                            {parseInt(item.data[0].value, 16).toLocaleString()}
                        </p>
                        <p>
                            txFee:
                            {parseInt(item.data[1].txFee, 16).toLocaleString()}
                        </p>
                    </ul>
                </div>
            ))}
        </ul>
    )
}
