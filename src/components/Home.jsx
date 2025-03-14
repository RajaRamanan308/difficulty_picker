import React, { useState } from "react";
import home1 from './Home1'

const difficulties = ["LOW", "MEDIUM", "HARD", "INSANE"];

function Home() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  return (
    <div className="app-container">
      {/* Left Panel */}
      <div className="left-panel">
        <h2>Select Difficulty</h2>
        <MenuList
          difficulties={difficulties}
          onSelectDifficulty={setSelectedDifficulty}
        />
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        {selectedDifficulty ? (
          <h2>Difficulty Set to {selectedDifficulty}</h2>
        ) : (
          <h2>Select a difficulty</h2>
        )}
      </div>
    </div>
  );
}

function MenuList({ difficulties, onSelectDifficulty }) {
  return (
    <div className="menu-list">
      {difficulties.map((difficulty) => (
        <MenuItem
          key={difficulty}
          difficulty={difficulty}
          onSelect={onSelectDifficulty}
        />
      ))}
    </div>
  );
}

function MenuItem({ difficulty, onSelect }) {

  return (
    <button
      className="menu-item"
      onClick={() => onSelect(difficulty)}
    >
      Set to {difficulty}
    </button>
  );
}

export default Home;
