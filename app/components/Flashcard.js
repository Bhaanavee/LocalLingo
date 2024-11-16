"use client";

import React, { useState } from "react";

const Flashcard = ({ english, kannada }) => {
  const [showKannada, setShowKannada] = useState(false);

  const flipCard = () => setShowKannada(!showKannada);

  return (
    <div className="flashcard" onClick={flipCard}>
      <div className="flashcard-content">
        {showKannada ? kannada : english || "Choose a category and a word!"}
      </div>
    </div>
  );
};

export default Flashcard;
