export function Trans(data) {
    return (
        <ul>
            {data.Transactions.map((item) => (
                <p key={item.hash}>
                    <a
                        className="App-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://explorer.aquacha.in/tx/${item.hash}`}
                    >
                        {item.hash}
                    </a>
                </p>
            ))}
        </ul>
    )
}
