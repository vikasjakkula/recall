"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Subject list
const subjects = [
  { name: "Mathematic's" },
  { name: "Physics" },
  { name: "Chemistry" },
];

// Sidebar component with dropdowns for subjects and lessons
function Sidebar({ subjects, expandedSubjects, toggleSubject, expandedLesson, toggleLesson }: {
  subjects: { name: string }[];
  expandedSubjects: { [key: string]: boolean };
  toggleSubject: (subject: string) => void;
  expandedLesson: string | null;
  toggleLesson: (lesson: string) => void;
}) {
  return (
    <aside className="w-[300px] bg-[#1e1e2f] text-white p-6 overflow-y-auto transition-all duration-300 flex flex-col">
      {/* Sidebar Title */}
      <div className="font-extrabold text-3xl font-raleway mb-2 bg-blue-500 px-4 py-2 rounded" style={{ color: "#ffffff" }}>
        Select Your Subject
      </div>
      {/* Subject Dropdowns */}
      <div className="flex flex-col gap-2">
        {subjects.map((subject) => (
          <div key={subject.name}>
            {/* Subject Button */}
            <button
              className={`subject-button w-full bg-[#29293d] border-none text-white py-3 px-4 mb-2 rounded-lg flex justify-between items-center transition-colors duration-200 hover:bg-[#3a3a5a] ${expandedSubjects[subject.name] ? 'font-bold' : ''}`}
              onClick={() => toggleSubject(subject.name)}
            >
              <span>{subject.name}</span>
              <span>{expandedSubjects[subject.name] ? "▲" : "▼"}</span>
            </button>
            {/* Lessons Dropdown */}
            <AnimatePresence initial={false}>
              {expandedSubjects[subject.name] && (
                <motion.div
                  className="lesson-list ml-4 mt-1 pl-4 border-l-2 border-[#444] flex flex-col gap-1"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {[...Array(10)].map((_, i) => {
                    const lesson = `Lesson ${i + 1}`;
                    return (
                      <button
                        key={lesson}
                        className={`lesson-button bg-transparent text-[#ccc] border-none py-2 w-full text-left rounded transition-colors duration-200 hover:text-white hover:font-bold ${expandedLesson === lesson ? 'font-bold text-white' : ''}`}
                        onClick={() => toggleLesson(lesson)}
                      >
                        <span>{lesson}</span>
                        <span className="ml-2">{expandedLesson === lesson ? "▲" : "▼"}</span>
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </aside>
  );
}

// Right panel PDF view with fade-in effect
function LessonContent({ subject, lesson, expandedLesson }: {
  subject: string | null;
  lesson: string | null;
  expandedLesson: string | null;
}) {
  return (
    <div className="flex-1 bg-[#f4f4f4] p-8 overflow-y-auto flex items-center justify-center">
      <AnimatePresence mode="wait">
        {subject && lesson && expandedLesson === lesson ? (
          <motion.div
            key={lesson}
            className="content bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl animate-fadeIn"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Lesson Title */}
            <h3 className="text-2xl font-bold mb-4">{subject} - {lesson}</h3>
            {/* Dummy Content */}
            <p className="mb-6 text-gray-700">This is simulated PDF content for <b>{subject}</b> - <b>{lesson}</b>. Here you can add lesson notes, explanations, or any content you want. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
            {/* Images */}
            <div className="flex flex-col gap-6 items-center">
              <Image src="/notes.png" alt="Notes Diagram 1" width={400} height={200} className="rounded-lg shadow mb-2" />
              <Image src="/notes.png" alt="Notes Diagram 2" width={400} height={200} className="rounded-lg shadow" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            className="text-gray-400 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Select a lesson to view content
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Main Recall Page
export default function RecallPage() {
  // State for expanded subjects and lessons
  const [expandedSubjects, setExpandedSubjects] = useState<{ [key: string]: boolean }>({});
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);
  const [activeSubject, setActiveSubject] = useState<string | null>(null);

  // Toggle subject dropdown
  const toggleSubject = (subject: string) => {
    setExpandedSubjects((prev) => {
      const newState = Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {});
      return { ...newState, [subject]: !prev[subject] };
    });
    setActiveSubject(subject);
    setExpandedLesson(null);
  };

  // Toggle lesson dropdown
  const toggleLesson = (lesson: string) => {
    setExpandedLesson((prev) => (prev === lesson ? null : lesson));
  };

  // Layout container
  return (
    <div className="container flex h-screen font-sans">
      {/* Sidebar with subjects and lessons */}
      <Sidebar
        subjects={subjects}
        expandedSubjects={expandedSubjects}
        toggleSubject={toggleSubject}
        expandedLesson={expandedLesson}
        toggleLesson={toggleLesson}
      />
      {/* Right panel PDF view */}
      <LessonContent subject={activeSubject} lesson={expandedLesson} expandedLesson={expandedLesson} />
    </div>
  );
}

// Tailwind custom animation for fadeIn
// Add this to your tailwind.config.js if you want to use 'animate-fadeIn' utility:
// theme: { extend: { keyframes: { fadeIn: { from: { opacity: 0, transform: 'translateX(10px)' }, to: { opacity: 1, transform: 'translateX(0)' } } }, animation: { fadeIn: 'fadeIn 0.3s ease-in-out' } } } 