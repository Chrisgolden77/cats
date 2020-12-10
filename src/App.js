import { Button } from "antd";
import "./App.css";
import React, { useState, useEffect } from "react";

import CatList from "./components/CatList";
import catJson from "./cats.json";
import SideDrawer from "./components/SideDrawer";

function App() {
  const [catsData, setCatsData] = useState({ images: [], filters: [] });
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    //get json of cats and set in state.
    setCatsData(catJson);
  });

  return (
    <div className="App">
      {!visibility && (
        <Button
          style={{
            background: "none",
            float: "left",
            height: "50px",
            border: "none",
            cursor: "pointer",
            width: "50px",
          }}
          // float="left"
          onClick={() => setVisibility(true)}
        >
          <h1>=</h1>
        </Button>
      )}
      <h1>List</h1>
      <SideDrawer
        visibility={visibility}
        setVisibility={setVisibility}
        filterList={catsData.filters}
      />
      {catsData.images?.length && <CatList catImageList={catsData.images} />}
    </div>
  );
}

export default App;
