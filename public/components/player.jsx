import { useState } from "react";

export default function Player({name, symbol}){
// This statement is used to store the names that we will edit on each reload
 const [isEditing, setIsEditing] = useState(false);

 function handleEditClick(){
    setIsEditing(true);
}

let playerName = <span className="player-name">{name}</span> 

    if(isEditing){
        playerName = <input type="text" required />
    }

    return(
        <li>
            <span className="player">
              {playerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    );
}

// Tommarrow we have to do this page repeat on here means u will get how the actual data is rendering
