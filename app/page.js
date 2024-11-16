"use client";

import { useState } from "react";
import Dropdown from "./components/Dropdown";
import Flashcard from "./components/Flashcard";
import './globals.css';

const flashcardsData = {
  ChitChat: [
    { english: "Hi, how are you?", kannada: "Hegiddira?" },
    { english: "What's up?", kannada: "En Samachara?" },
    { english: "Where are you from?", kannada: "Neenu yellinda bandirodu?" },
    { english: "See you later!", kannada: "Nantara Sigona!" },
    { english: "Take care!", kannada: "Jagrathe!" },
  ],
  GrubTalk: [
    { english: "What’s for breakfast?", kannada: "Tindi yenu?" },
    { english: "This is delicious!", kannada: "Idhu ruchiyagide!" },
    { english: "Can I have some water?", kannada: "Nannige neeru sigutte?" },
    { english: "Do you have vegetarian options?", kannada: "Veg options idiveya?" },
    { english: "I don’t eat spicy food.", kannada: "Naanu khara oota maadolla." },
  ],
  Wanderlust: [
    { english: "Where is the bus stop?", kannada: "Bus nildana ellide?" },
    { english: "How far is the train station?", kannada: "Railway station estu doora?" },
    { english: "Can you help me with directions?", kannada: "Nannige daari torstira?" },
    { english: "How much is the ticket?", kannada: "Ticket estu?" },
    { english: "Where is the nearest hotel?", kannada: "Hattirada hotel ellide?" },
  ],
};

export default function Home() {
  const [category, setCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setQuestions(flashcardsData[selectedCategory] || []);
    setSelectedIndex(null); // Reset selection
  };

  const handleQuestionChange = (e) => {
    setSelectedIndex(e.target.value);
  };

  const currentCard =
    category && selectedIndex !== null ? flashcardsData[category][selectedIndex] : {};

  return (
    <div className="container bg-hero-gradient min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Header Text */}
      <h1 className="text-4xl font-semibold text-white mb-6">Learn Kannada Flashcards</h1>

      {/* Category Dropdown */}
      <div className="dropdown mb-6 w-full max-w-sm">
        <Dropdown
          options={Object.keys(flashcardsData).map((key) => ({
            value: key,
            text: key.replace(/([A-Z])/g, " $1").trim(),
          }))}
          onChange={handleCategoryChange}
          defaultText="Select a Category"
        />
      </div>

      {/* Question Dropdown */}
      {category && (
        <div className="dropdown mb-6 w-full max-w-sm">
          <Dropdown
            options={questions.map((item, index) => ({
              value: index,
              text: item.english,
            }))}
            onChange={handleQuestionChange}
            defaultText="Select an English Word"
          />
        </div>
      )}

      {/* Flashcard */}
      {currentCard.english && (
        <div className="flashcard bg-glassmorphism p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200">
          <Flashcard english={currentCard.english} kannada={currentCard.kannada} />
        </div>
      )}

      {/* Decorative Elements */}
      <div className="feedback-gradient absolute top-0 left-0 w-48 h-80"></div>
      <div className="footer-gradient absolute bottom-0 left-1/3 w-96 h-24"></div>
    </div>
  );
}
