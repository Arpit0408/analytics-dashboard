// src/components/ui/WorldMap.jsx

import React from "react";
import { WorldMap } from "react-svg-worldmap";

const data = [
  { country: "in", value: 50 },
  { country: "us", value: 80 },
  { country: "gb", value: 30 },
  { country: "cn", value: 70 },
];

const SimpleWorldMap = () => {
  return (
    <div className="w-full h-84 p-2 overflow-hidden">
        
      <WorldMap
        color="#FED7AA" 
        size="responsive"
        backgroundColor="transparent"
        data={data}
        richInteraction
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default SimpleWorldMap;
