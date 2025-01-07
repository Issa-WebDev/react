// useState
import React from "react";
import { useState } from "react";

const App = () => {
  const [friends, setFriend] = useState(["Alex", "Huxn"]);

  const addOneFriend = () => setFriend([...friends, "kone"]);

  const removeOneFriend = () => setFriend(friends.filter((f) => f !== "Huxn"));

  const updateFriendName = () => {
    setFriend(friends.map((f) => (f === "Alex" ? "Alex Smith Cool" : f)));
  };

  return (
    <div>
      <button onClick={addOneFriend}>Add One Friend</button>
      <button onClick={removeOneFriend}>Remove One Friend</button>
      <button onClick={updateFriendName}>Update Friend name</button>

      {friends.map((friend) => (
        <ul key={Math.random()}>
          <li>{friend}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;
