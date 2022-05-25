import React from "react";

export default function Location(props) {
  return (
    <div className="Location customizerInput">
      <label className="inputLabel">
        Location
        <input
          type="text"
          onChange={props.onInputChange}
          name="location"
          value={props.value}
        />
      </label>
    </div>
  );
}
