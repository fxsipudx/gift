import React, { useState, useEffect } from "react";
import { Heart, Star, Music, Coffee, Globe, Sun, Moon, Tv } from "lucide-react";

const LovePuzzle = () => {
  const [solvedPuzzles, setSolvedPuzzles] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [showIconHint, setShowIconHint] = useState(false);

  const puzzles = [
    {
      id: "I",
      icon: Globe,
      question:
        "From India to Philippines, across how many seas? (Count the letter in your answer)",
      answer: "infinite",
      hints: [
        "Think about the distance between your hearts...",
        "When you're in love, no distance is too...",
        "Like your love, it knows no bounds",
        "The word starts with 'inf...'",
      ],
      iconHint: "Your love spans the globe, crossing all boundaries...",
      letter: "I",
    },
    {
      id: "L",
      icon: Coffee,
      question:
        "On Omegle we first met, what brought us together? (Think about the first letter)",
      answer: "luck",
      hints: [
        "Out of millions of people online that day...",
        "What are the chances we'd meet?",
        "Some call it fate, others call it...",
        "It starts with 'L' and rhymes with 'duck'",
      ],
      iconHint:
        "Like a warm coffee on a cold day, finding each other was pure...",
      letter: "L",
    },
    {
      id: "O",
      icon: Moon,
      question:
        "In May, what phase was the moon when our story began? (Think shape)",
      answer: "orb",
      hints: [
        "On May 11th, think about the moon's shape...",
        "A perfect circle in the night sky",
        "Another word for a spherical shape",
        "Starts with 'O', three letters long",
      ],
      iconHint: "Like the full moon on our first meeting...",
      letter: "O",
    },
    {
      id: "V",
      icon: Music,
      question:
        "What connects BTS and Coldplay in 'My Universe'? (Look at the shape between artists)",
      answer: "versus",
      hints: [
        "Look at how collaboration is written...",
        "BTS ___ Coldplay",
        "The symbol between artists makes this shape",
        "Starts with 'V', like victory",
      ],
      iconHint:
        "When two artists come together, they're written with this symbol...",
      letter: "V",
    },
    {
      id: "E",
      icon: Star,
      question:
        "HR rep and Masters student, what brings them together each evening?",
      answer: "evening",
      hints: [
        "When do you usually talk across time zones?",
        "After work and studies are done...",
        "The time you both look forward to",
        "The 'E' time of day",
      ],
      iconHint:
        "Like stars appearing at dusk, you come together at this time...",
      letter: "E",
    },
    {
      id: "Y",
      icon: Tv,
      question:
        "Friends or HIMYM? What's the common thread? (Think about the genre)",
      answer: "comedy",
      hints: [
        "Both shows make you laugh...",
        "A type of show that brings joy",
        "Like your relationship - full of smiles",
        "Ends with 'Y', starts with 'C'",
      ],
      iconHint: "These shows share the same happy genre...",
      letter: "Y",
    },
    {
      id: "O2",
      icon: Sun,
      question: "Chopsuey meets Biryani, what happens? (Think feeling)",
      answer: "harmony",
      hints: [
        "When two different cuisines blend perfectly...",
        "Like your cultures coming together...",
        "A perfect balance, like your relationship",
        "Ends with 'Y', means perfect balance",
      ],
      iconHint:
        "Like sunrise bringing warmth, your differences create beautiful...",
      letter: "O",
    },
    {
      id: "U",
      icon: Heart,
      question:
        "When Shayne listens and Shubham lectures, they create...? (Think connection)",
      answer: "understanding",
      hints: [
        "One speaks, one listens...",
        "This creates deeper connection",
        "Perfect communication leads to...",
        "Starts with 'U', means deep connection",
      ],
      iconHint: "Through sharing and listening, you build deeper...",
      letter: "U",
    },
  ];

  const checkAnswer = (puzzle) => {
    if (currentAnswer.toLowerCase().trim() === puzzle.answer) {
      if (!solvedPuzzles.includes(puzzle.id)) {
        setSolvedPuzzles([...solvedPuzzles, puzzle.id]);
      }
      setCurrentAnswer("");
      setSelectedPuzzle(null);
      setCurrentHintIndex(0);
    }
  };

  useEffect(() => {
    if (solvedPuzzles.length === puzzles.length) {
      setTimeout(() => setShowMessage(true), 1000);
    }
  }, [solvedPuzzles]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-8">
          Our Love Story Puzzle
        </h1>

        {showMessage ? (
          <div className="text-center animate-fade-in">
            <div className="text-6xl font-bold text-pink-600 mb-8">
              I LOVE YOU
            </div>
            <div className="text-xl text-purple-700 mb-8">
              From Omegle to Forever - May 11th and Beyond ❤️
            </div>
            <div className="flex justify-center space-x-4">
              {[...Array(20)].map((_, i) => (
                <Heart
                  key={i}
                  className="text-pink-500 animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  size={24}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {puzzles.map((puzzle) => (
                <div
                  key={puzzle.id}
                  className={`p-6 rounded-lg shadow-lg cursor-pointer transform transition 
                    ${
                      solvedPuzzles.includes(puzzle.id)
                        ? "bg-green-100 hover:bg-green-200"
                        : "bg-white hover:bg-gray-50"
                    }`}
                  onClick={() => {
                    setSelectedPuzzle(puzzle);
                    setCurrentHintIndex(0);
                  }}
                >
                  <div className="flex flex-col items-center">
                    <puzzle.icon
                      className={
                        solvedPuzzles.includes(puzzle.id)
                          ? "text-green-500"
                          : "text-purple-500"
                      }
                      size={32}
                    />
                    {solvedPuzzles.includes(puzzle.id) && (
                      <div className="mt-2 text-2xl font-bold text-green-600">
                        {puzzle.letter}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {selectedPuzzle && (
              <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">
                  {selectedPuzzle.question}
                </h2>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    className="flex-1 p-2 border rounded"
                    placeholder="Your answer..."
                  />
                  <button
                    onClick={() => checkAnswer(selectedPuzzle)}
                    className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                  >
                    Check
                  </button>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-2">
                    <selectedPuzzle.icon
                      className="text-purple-500 cursor-help"
                      size={24}
                      onMouseEnter={() => setShowIconHint(true)}
                      onMouseLeave={() => setShowIconHint(false)}
                    />
                    {showIconHint && (
                      <div className="text-sm text-purple-600">
                        {selectedPuzzle.iconHint}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      if (currentHintIndex < selectedPuzzle.hints.length - 1) {
                        setCurrentHintIndex((prev) => prev + 1);
                      }
                    }}
                    className="text-purple-600 hover:text-purple-800"
                  >
                    Need a hint? ({currentHintIndex + 1}/
                    {selectedPuzzle.hints.length})
                  </button>
                  <div className="text-sm italic text-gray-600">
                    {selectedPuzzle.hints[currentHintIndex]}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LovePuzzle;
