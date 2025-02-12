export default function Log({ turns }){
    return <ol id="log">
        {turns.map((turn) => ( <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col} </li>   // this is to which player selected which field in rows and cols
        ))}
    </ol>
}