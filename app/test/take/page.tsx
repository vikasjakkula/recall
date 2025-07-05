// Copyright 2025 varun
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

"use client";

import { useState, useEffect } from 'react';
import { Inter } from 'next/font/google';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import { TestData, TestProgress, Question } from '@/types/test';
import { getTestData, submitTest } from '@/utils/test';

// For rendering LaTeX equations
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const inter = Inter({ subsets: ['latin'] });

// Add this helper function after the imports
const getActiveSectionFromQuestionNumber = (questionNumber: number): string => {
  if (questionNumber >= 1 && questionNumber <= 80) return 'Maths';
  if (questionNumber >= 81 && questionNumber <= 120) return 'Physics';
  if (questionNumber >= 121 && questionNumber <= 160) return 'Chemistry';
  return 'Maths'; // Default to Maths if out of range
};

export default function TestPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const testId = parseInt(searchParams.get('testId') || '1', 10);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [testData, setTestData] = useState<TestData | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [progress, setProgress] = useState<TestProgress>({
    currentQuestionId: 1,
    activeSection: '',
    answers: {},
    markedForReview: [],
    answeredAndMarkedForReview: [],
    visitedQuestions: [1],
    timeRemaining: 180 * 60, // 3 hours in seconds
  });
  
  const [showInstructions, setShowInstructions] = useState(false);
  
  // Check authentication on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check-session');
        const data = await response.json();

        if (!data.authenticated) {
          // Store current path before redirecting
          localStorage.setItem('redirectPath', `/test/take?testId=${testId}`);
          router.push('/auth/login');
          return;
        }

        // Get user details
        const userResponse = await fetch('/api/auth/user');
        const userData = await userResponse.json();
        setUserId(userData.id);
        setUserName(userData.name || 'Student'); // Set user's name, fallback to 'Student' if not available
      } catch (error) {
        console.error('Auth error:', error);
        setError('Authentication failed');
      }
    };

    checkAuth();
  }, [router, testId]);
  
  // Timer functionality
  useEffect(() => {
    if (!testData) return;

    const timer = setInterval(() => {
      setProgress(prev => ({
        ...prev,
        timeRemaining: prev.timeRemaining - 1
      }));
      
      if (progress.timeRemaining <= 0) {
        clearInterval(timer);
        // Handle time's up scenario - auto submit
        handleSubmitTest();
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [progress.timeRemaining, testData]);
  
  // Format time as HH:MM:SS
  const formatTime = (timeInSeconds: number) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Current question data
  const currentQuestion = testData?.questions.find(q => q.question_number === progress.currentQuestionId);
  
  // Navigation functions
  const goToQuestion = (questionId: number) => {
    if (!progress.visitedQuestions.includes(questionId)) {
      setProgress(prev => ({
        ...prev,
        visitedQuestions: [...prev.visitedQuestions, questionId]
      }));
    }
    
    const newActiveSection = getActiveSectionFromQuestionNumber(questionId);
    setProgress(prev => ({
      ...prev,
      currentQuestionId: questionId,
      activeSection: newActiveSection
    }));
  };
  
  const goToNextQuestion = () => {
    if (!testData) return;
    const nextId = progress.currentQuestionId + 1;
    if (nextId <= testData.questions.length) {
      goToQuestion(nextId);
    }
  };
  
  const goToPrevQuestion = () => {
    const prevId = progress.currentQuestionId - 1;
    if (prevId >= 1) {
      goToQuestion(prevId);
    }
  };
  
  // Answer handling
  const handleSelectAnswer = (optionId: string) => {
    setProgress(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [progress.currentQuestionId]: optionId
      },
      answeredAndMarkedForReview: prev.markedForReview.includes(progress.currentQuestionId)
        ? [...prev.answeredAndMarkedForReview.filter(id => id !== progress.currentQuestionId), progress.currentQuestionId]
        : prev.answeredAndMarkedForReview,
      markedForReview: prev.markedForReview.includes(progress.currentQuestionId)
        ? prev.markedForReview.filter(id => id !== progress.currentQuestionId)
        : prev.markedForReview
    }));
  };
  
  // Review marking
  const handleMarkForReview = () => {
    const questionId = progress.currentQuestionId;
    const isAnswered = progress.answers[questionId] !== undefined;
    
    setProgress(prev => {
      // If already marked for review, unmark it
      if (prev.markedForReview.includes(questionId) || prev.answeredAndMarkedForReview.includes(questionId)) {
        return {
          ...prev,
          markedForReview: prev.markedForReview.filter(id => id !== questionId),
          answeredAndMarkedForReview: prev.answeredAndMarkedForReview.filter(id => id !== questionId)
        };
      }
      
      // Otherwise mark it based on whether it's answered
      if (isAnswered) {
        return {
          ...prev,
          answeredAndMarkedForReview: [...prev.answeredAndMarkedForReview, questionId],
          markedForReview: prev.markedForReview.filter(id => id !== questionId)
        };
      } else {
        return {
          ...prev,
          markedForReview: [...prev.markedForReview, questionId],
          answeredAndMarkedForReview: prev.answeredAndMarkedForReview.filter(id => id !== questionId)
        };
      }
    });
    
    goToNextQuestion();
  };
  
  // Clear response
  const handleClearResponse = () => {
    setProgress(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [progress.currentQuestionId]: null
      },
      answeredAndMarkedForReview: prev.answeredAndMarkedForReview.filter(
        id => id !== progress.currentQuestionId
      )
    }));
  };
  
  // Save and next
  const handleSaveAndNext = () => {
    goToNextQuestion();
  };
  
  // Submit test
  const handleSubmitTest = async () => {
    try {
      if (!userId) {
        setError('Please log in to submit the test');
        return;
      }

      // Show confirmation dialog
      const confirmed = window.confirm('Are you sure you want to submit the test? This action cannot be undone.');
      if (!confirmed) return;

      // Calculate time taken
      const timeTaken = 180 * 60 - progress.timeRemaining; // Convert to seconds

      // Filter out null answers
      const submittedAnswers = Object.entries(progress.answers).reduce((acc, [key, value]) => {
        if (value !== null) {
          acc[parseInt(key)] = value;
        }
        return acc;
      }, {} as Record<number, string>);

      // Submit test and get result
      const result = await submitTest(
        testId,
        submittedAnswers,
        timeTaken,
        userId
      );

      // Navigate to results page with result ID
      router.push(`/test/result?resultId=${result.result_id}`);
    } catch (error) {
      console.error('Error submitting test:', error);
      alert('Failed to submit test. Please try again.');
    }
  };
  
  // Get question status class
  const getQuestionStatusClass = (questionId: number) => {
    if (progress.answeredAndMarkedForReview.includes(questionId)) {
      return 'bg-yellow-500 text-white relative after:content-["✓"] after:absolute after:text-green-800 after:text-xs after:right-1 after:top-0.5';
    }
    
    if (progress.answers[questionId]) {
      return 'bg-green-500 text-white';
    }
    
    if (progress.markedForReview.includes(questionId)) {
      return 'bg-yellow-500 text-white';
    }
    
    if (progress.visitedQuestions.includes(questionId)) {
      return 'bg-red-500 text-white';
    }
    
    return 'bg-background border border-border';
  };
  
  // Count stats
  const attemptedCount = Object.values(progress.answers).filter(answer => answer !== null).length;
  const notAnsweredCount = progress.visitedQuestions.length - attemptedCount;
  const notVisitedCount = (testData?.questions.length || 0) - progress.visitedQuestions.length;
  const markedCount = progress.markedForReview.length;
  const answeredAndMarkedCount = progress.answeredAndMarkedForReview.length;
  
  // Get questions by section
  const getQuestionsBySection = (sectionName: string): Question[] => {
    if (!testData) return [];
    return testData.questions.filter(q => {
      const section = q.section_id.split('_')[2]; // Extract section name from section_id
      return section.toLowerCase() === sectionName.toLowerCase();
    });
  };
  
  // Render LaTeX and HTML content
  const renderContent = (content: string) => {
    // This is a simplified approach - in a real app you'd need more robust parsing
    const hasLatex = content.includes('$');
    
    // Create a temporary div to parse HTML and modify image sources
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    // Find all images and update their src if needed
    const images = tempDiv.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const src = img.getAttribute('src');
      if (src && !src.startsWith('http') && !src.startsWith('data:')) {
        img.setAttribute('src', `https://testseries.edugorilla.com/${src.startsWith('/') ? src.slice(1) : src}`);
      }
    }
    
    const processedHtml = tempDiv.innerHTML;
    
    if (hasLatex) {
      // Very basic LaTeX handling - actual implementation would be more sophisticated
      return processedHtml.split('$').map((part, index) => {
        if (index % 2 === 1) {
          return <InlineMath key={index} math={part} />;
        }
        return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />;
      });
    }
    
    return <span dangerouslySetInnerHTML={{ __html: processedHtml }} />;
  };

  useEffect(() => {
    async function fetchTestData() {
      try {
        const data = await getTestData(testId);
        console.log('Test Data:', {
          test: data.test,
          sections: data.sections,
          questions: data.questions,
          instructions: data.instructions
        });
        setTestData(data);
        setProgress(prev => ({
          ...prev,
          activeSection: data.sections[0].section_name
        }));
      } catch (err) {
        setError('Failed to load test data. Please try again.');
        console.error('Error fetching test data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchTestData();
  }, [testId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading test...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  if (!testData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Test not found</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Sidebar: make collapsible/overlay on mobile */}
      {isSidebarOpen && (
        <aside className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end md:static md:bg-transparent md:w-64">
          <div className="w-4/5 max-w-xs bg-background border border-border h-full shadow-lg flex flex-col p-4 md:p-6">
            {/* Profile section with stats */}
            <div className="bg-[#3B4B6B] text-white p-3 sm:p-4 rounded-lg mb-4">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">{userName}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-[#2D3B59] rounded p-2">
                  <span className="text-green-400 font-bold mr-1">{attemptedCount}</span>
                  <span>Attempted</span>
                </div>
                <div className="bg-[#2D3B59] rounded p-2">
                  <span className="text-yellow-400 font-bold mr-1">{markedCount}</span>
                  <span>Marked</span>
                </div>
                <div className="bg-[#2D3B59] rounded p-2">
                  <span className="text-white font-bold mr-1">{notVisitedCount}</span>
                  <span>Not Visited</span>
                </div>
                <div className="bg-[#2D3B59] rounded p-2">
                  <span className="text-red-400 font-bold mr-1">{notAnsweredCount}</span>
                  <span>Not Answered</span>
                </div>
                <div className="bg-[#2D3B59] rounded p-2 col-span-2">
                  <span className="text-yellow-400 font-bold mr-1">{answeredAndMarkedCount}</span>
                  <span>Marked & Answered</span>
                </div>
              </div>
            </div>

            {/* Section heading */}
            <div className="mb-3 sm:mb-4">
              <h3 className="font-medium text-foreground text-xs sm:text-sm">Section: <span className="text-blue-600">{progress.activeSection}</span></h3>
            </div>

            {/* Question numbers grid */}
            <div className="grid grid-cols-5 gap-1 sm:gap-2 mb-4">
              {getQuestionsBySection(progress.activeSection).map((question) => (
                <button
                  key={question.question_id}
                  onClick={() => {
                    goToQuestion(question.question_number);
                    if (window.innerWidth < 768) {
                      setIsSidebarOpen(false);
                    }
                  }}
                  className={`w-full h-8 sm:h-9 flex items-center justify-center rounded text-xs sm:text-sm ${
                    progress.currentQuestionId === question.question_number ? 'bg-red-500 text-white' : 
                    progress.answers[question.question_number] ? 'bg-green-500 text-white' :
                    progress.markedForReview.includes(question.question_number) ? 'bg-yellow-400 text-white' :
                    progress.answeredAndMarkedForReview.includes(question.question_number) ? 'bg-yellow-400 text-white relative after:content-["✓"] after:absolute after:text-green-800 after:text-xs after:right-1 after:top-0.5' :
                    progress.visitedQuestions.includes(question.question_number) ? 'bg-red-500 text-white' :
                    'bg-background border border-border'
                  }`}
                >
                  {question.question_number}
                </button>
              ))}
            </div>

            <button className="self-end mb-6 md:hidden" onClick={() => setIsSidebarOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </aside>
      )}
      {/* Main content: responsive paddings and stacking */}
      <main className="flex-1 p-4 sm:p-6 flex flex-col">
        <header className="bg-background border-b border-border flex justify-between items-center py-2 px-4 sticky top-0 z-50">
          <div className="flex items-center">
            <span className="text-blue-600 font-bold text-lg ml-2">eamcet<span className="text-foreground">pro</span></span>
            <span className="ml-4 text-md font-medium hidden md:inline">{testData.test.test_name}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-muted rounded-md px-2 sm:px-3 py-1">
              <span className="font-medium text-xs sm:text-sm md:text-base">Time: {formatTime(progress.timeRemaining)}</span>
            </div>
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="bg-blue-600 text-white p-2 rounded-md md:hidden"
            >
              {isSidebarOpen ? (
                <ChevronRightIcon className="h-5 w-5" />
              ) : (
                <ChevronLeftIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </header>

        <div className="flex-1 flex relative">
          {/* Main test content */}
          <div className="flex-1 p-2 sm:p-4 overflow-y-auto pb-20">
            <div className="flex mb-4 items-center">
              <div className="flex-1 overflow-x-auto">
                <div className="flex items-center whitespace-nowrap">
                  <span className="font-medium mr-2 text-xs sm:text-sm md:text-base">Sections |</span>
                  {testData.sections.map(section => (
                    <button 
                      key={section.section_id}
                      className={`px-2 py-1 mx-1 rounded text-xs sm:text-sm md:text-base ${
                                              progress.activeSection === section.section_name 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-muted'
                      }`}
                      onClick={() => {
                        const firstQuestionNumber = section.section_name.toLowerCase() === 'maths' ? 1 :
                          section.section_name.toLowerCase() === 'physics' ? 81 :
                          section.section_name.toLowerCase() === 'chemistry' ? 121 : 1;
                        goToQuestion(firstQuestionNumber);
                      }}
                    >
                      {section.section_name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-background border border-border rounded-lg shadow-sm p-3 sm:p-6 mb-4">
              <div className="flex justify-between items-center mb-4">
                <div className="font-medium text-sm sm:text-base">Question {progress.currentQuestionId}</div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <div>
                    <span className="text-muted-foreground mr-1 text-xs sm:text-sm">Time:</span>
                    <span className="text-xs sm:text-sm">00:{currentQuestion?.question_number.toString().padStart(2, '0')}</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-base sm:text-lg mb-4">
                  {currentQuestion && renderContent(currentQuestion.question_text)}
                </div>

                <div className="space-y-2 sm:space-y-3 mt-4 sm:mt-6">
                  {currentQuestion && (
                    <>
                      <div className="flex items-start sm:items-center">
                        <input
                          type="radio"
                          id="option-a"
                          name="answer"
                          checked={progress.answers[progress.currentQuestionId] === 'a'}
                          onChange={() => handleSelectAnswer('a')}
                          className="mt-1 sm:mt-0 mr-2 h-4 w-4"
                        />
                        <label htmlFor="option-a" className="flex-1 text-sm sm:text-base">
                          <span className="mr-2">a.</span>
                          {renderContent(currentQuestion.option_a)}
                        </label>
                      </div>
                      <div className="flex items-start sm:items-center">
                        <input
                          type="radio"
                          id="option-b"
                          name="answer"
                          checked={progress.answers[progress.currentQuestionId] === 'b'}
                          onChange={() => handleSelectAnswer('b')}
                          className="mt-1 sm:mt-0 mr-2 h-4 w-4"
                        />
                        <label htmlFor="option-b" className="flex-1 text-sm sm:text-base">
                          <span className="mr-2">b.</span>
                          {renderContent(currentQuestion.option_b)}
                        </label>
                      </div>
                      <div className="flex items-start sm:items-center">
                        <input
                          type="radio"
                          id="option-c"
                          name="answer"
                          checked={progress.answers[progress.currentQuestionId] === 'c'}
                          onChange={() => handleSelectAnswer('c')}
                          className="mt-1 sm:mt-0 mr-2 h-4 w-4"
                        />
                        <label htmlFor="option-c" className="flex-1 text-sm sm:text-base">
                          <span className="mr-2">c.</span>
                          {renderContent(currentQuestion.option_c)}
                        </label>
                      </div>
                      <div className="flex items-start sm:items-center">
                        <input
                          type="radio"
                          id="option-d"
                          name="answer"
                          checked={progress.answers[progress.currentQuestionId] === 'd'}
                          onChange={() => handleSelectAnswer('d')}
                          className="mt-1 sm:mt-0 mr-2 h-4 w-4"
                        />
                        <label htmlFor="option-d" className="flex-1 text-sm sm:text-base">
                          <span className="mr-2">d.</span>
                          {renderContent(currentQuestion.option_d)}
                        </label>
                      </div>
                      {currentQuestion.option_e && (
                        <div className="flex items-start sm:items-center">
                          <input
                            type="radio"
                            id="option-e"
                            name="answer"
                            checked={progress.answers[progress.currentQuestionId] === 'e'}
                            onChange={() => handleSelectAnswer('e')}
                            className="mt-1 sm:mt-0 mr-2 h-4 w-4"
                          />
                          <label htmlFor="option-e" className="flex-1 text-sm sm:text-base">
                            <span className="mr-2">e.</span>
                            {renderContent(currentQuestion.option_e)}
                          </label>
                        </div>
                      )}
                      {currentQuestion.option_f && (
                        <div className="flex items-start sm:items-center">
                          <input
                            type="radio"
                            id="option-f"
                            name="answer"
                            checked={progress.answers[progress.currentQuestionId] === 'f'}
                            onChange={() => handleSelectAnswer('f')}
                            className="mt-1 sm:mt-0 mr-2 h-4 w-4"
                          />
                          <label htmlFor="option-f" className="flex-1 text-sm sm:text-base">
                            <span className="mr-2">f.</span>
                            {renderContent(currentQuestion.option_f)}
                          </label>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 mt-4 sm:mt-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={handleMarkForReview}
                    className="bg-muted text-muted-foreground px-3 sm:px-4 py-2 rounded-md hover:bg-muted/80 transition text-sm"
                  >
                    Mark for Review & Next
                  </button>
                  <button
                    onClick={handleClearResponse}
                    className="bg-muted text-muted-foreground px-3 sm:px-4 py-2 rounded-md hover:bg-muted/80 transition text-sm"
                  >
                    Clear Response
                  </button>
                </div>
                <button
                  onClick={handleSaveAndNext}
                  className="bg-green-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-green-700 transition text-sm"
                >
                  Save & Next
                </button>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <button
                onClick={goToPrevQuestion}
                disabled={progress.currentQuestionId === 1}
                className={`flex items-center text-sm ${
                  progress.currentQuestionId === 1 ? 'text-muted-foreground cursor-not-allowed' : 'text-blue-600 hover:text-blue-800'
                }`}
              >
                <ArrowLeftIcon className="h-4 w-4 mr-1" />
                <span>Previous</span>
              </button>
              <button
                onClick={goToNextQuestion}
                disabled={progress.currentQuestionId === testData.questions.length}
                className={`flex items-center text-sm ${
                  progress.currentQuestionId === testData.questions.length ? 'text-muted-foreground cursor-not-allowed' : 'text-blue-600 hover:text-blue-800'
                }`}
              >
                <span>Next</span>
                <ArrowRightIcon className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

