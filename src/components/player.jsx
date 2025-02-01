import { useState } from "react";

export default function Player({initialName, symbol, isActive}){
const [playerName, setPlayerName]= useState(initialName);
// This statement is used to store the names that we will edit on each reload
 const [isEditing, setIsEditing] = useState(false);

 function handleEditClick(){
    setIsEditing(!isEditing);  //true to false and vice versa
}

function handleChange(event){ 
    setPlayerName(event.target.value);
}

let EditablePlayerName = <span className="player-name">{playerName}</span>
// let btnCaption = 'Edit'; we can use this method orelse ternary operator method both results the same 

    if(isEditing){
        // The value shows the name of the player on screen
        EditablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        // btnCaption="Save";
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {EditablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}
