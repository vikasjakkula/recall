"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Subject list
const subjects = [
  { name: "Mathematic's" },
  { name: "Physics" },
  { name: "Chemistry" },
];

// Sidebar component with dropdowns for subjects and lessons
function Sidebar({
  subjects,
  expandedSubjects,
  toggleSubject,
  expandedLesson,
  toggleLesson,
}: {
  subjects: { name: string }[];
  expandedSubjects: { [key: string]: boolean };
  toggleSubject: (subject: string) => void;
  expandedLesson: string | null;
  toggleLesson: (lesson: string) => void;
}) {
  return (
    <aside className="w-full max-w-xs bg-gradient-to-b from-[#23243a] to-[#18192b] text-white px-4 py-6 overflow-y-auto shadow-xl flex flex-col min-h-screen">
      {/* Sidebar Title */}
      <div className="font-extrabold text-2xl md:text-3xl font-raleway mb-4 bg-gradient-to-r from-blue-600 to-indigo-500 px-5 py-3 rounded-xl shadow text-center tracking-tight">
        Select Your Subject
      </div>
      {/* Subject Dropdowns */}
      <div className="flex flex-col gap-3">
        {subjects.map((subject) => (
          <div key={subject.name}>
            {/* Subject Button */}
            <button
              className={`w-full flex justify-between items-center px-5 py-3 rounded-lg transition-all duration-200 border-2 ${
                expandedSubjects[subject.name]
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 border-blue-400 shadow-lg font-bold scale-105"
                  : "bg-[#23243a] border-transparent hover:bg-[#2d2e4a] hover:scale-105"
              }`}
              onClick={() => toggleSubject(subject.name)}
            >
              <span className="text-lg">{subject.name}</span>
              <span className="text-xl">
                {expandedSubjects[subject.name] ? (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path d="M7 14l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </span>
            </button>
            {/* Lessons Dropdown */}
            <AnimatePresence initial={false}>
              {expandedSubjects[subject.name] && (
                <motion.div
                  className="ml-2 mt-2 pl-3 border-l-4 border-blue-400 flex flex-col gap-1"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {[...Array(10)].map((_, i) => {
                    const lesson = `Lesson ${i + 1}`;
                    return (
                      <button
                        key={lesson}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-150 flex justify-between items-center ${
                          expandedLesson === lesson
                            ? "bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-semibold shadow"
                            : "bg-transparent text-blue-100 hover:bg-blue-900/30 hover:text-white"
                        }`}
                        onClick={() => toggleLesson(lesson)}
                      >
                        <span>{lesson}</span>
                        <span className="ml-2">
                          {expandedLesson === lesson ? (
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                              <path d="M7 14l5-5 5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          ) : (
                            <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                              <path d="M7 10l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </span>
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
function LessonContent({
  subject,
  lesson,
  expandedLesson,
}: {
  subject: string | null;
  lesson: string | null;
  expandedLesson: string | null;
}) {
  return (
    <div className="flex-1 bg-gradient-to-br from-[#f4f7fa] to-[#e3e6f3] p-4 md:p-10 overflow-y-auto flex items-center justify-center min-h-screen">
      <AnimatePresence mode="wait">
        {subject && lesson && expandedLesson === lesson ? (
          <motion.div
            key={lesson}
            className="content bg-white rounded-2xl shadow-2xl p-6 md:p-10 w-full max-w-2xl animate-fadeIn border border-blue-100 flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.35 }}
          >
            {/* Lesson Title */}
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-blue-700 tracking-tight text-center">
              {subject} - {lesson}
            </h3>
            {/* PDF Viewer */}
            <div className="w-full flex justify-center">
              <iframe
                src="/notespdf.pdf"
                title="Lesson PDF"
                className="w-full h-[60vh] rounded-xl border border-blue-100 shadow-lg"
                style={{ minHeight: 400, background: "#f8fafc" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            className="text-blue-400 text-lg md:text-xl font-semibold flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              className="mb-2"
              width="48"
              height="48"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#60a5fa"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
              <circle cx="12" cy="12" r="10" stroke="#60a5fa" strokeWidth="1.5" />
            </svg>
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
    <div className="flex flex-col md:flex-row h-screen w-full font-sans bg-[#f4f7fa]">
      {/* Sidebar with subjects and lessons */}
      <Sidebar
        subjects={subjects}
        expandedSubjects={expandedSubjects}
        toggleSubject={toggleSubject}
        expandedLesson={expandedLesson}
        toggleLesson={toggleLesson}
      />
      {/* Right panel PDF view */}
      <LessonContent
        subject={activeSubject}
        lesson={expandedLesson}
        expandedLesson={expandedLesson}
      />
    </div>
  );
}

// Tailwind custom animation for fadeIn
// Add this to your tailwind.config.js if you want to use 'animate-fadeIn' utility:
// theme: { extend: { keyframes: { fadeIn: { from: { opacity: 0, transform: 'translateY(30px)' }, to: { opacity: 1, transform: 'translateY(0)' } } }, animation: { fadeIn: 'fadeIn 0.35s ease-in-out' } } }