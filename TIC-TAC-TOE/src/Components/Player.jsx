import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [PlayerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
  

  //-------------------------************--------------------
  function handleEditClick() {
    // console.log("clicked");
    //    setIsEditing(true);
    //* Enchanced condition
    // setIsEditing(isEditing ? false : true);
    //? One more way which is best
    // setIsEditing(!isEditing);
    setIsEditing((editing) => !editing);
  }
  //-------------------------************--------------------

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{PlayerName} </span>;
  //   let btnCaption = 'Edit';
  if (isEditing) {
    // editablePlayerName  = <input type="text" required value={name} />;
    editablePlayerName = (
      <input type="text" required value={PlayerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }

  return (
    <>
      <li>
        <span className="player">
          {/* <span className="player-name">{name} </span> */}
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
