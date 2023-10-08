import React, { useState } from "react";
import Skeleton from "./components/Skeleton";

function App() {
  const [isBoring, setIsBoring] = useState(true);

  return (
    <div className={`flex justify-center ${!isBoring && "bg-black"}`}>
      <Skeleton isBoring={isBoring} setBoring={() => setIsBoring(!isBoring)} />
    </div>
  );
}

export default App;
