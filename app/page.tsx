"use client"
// pages/index.js

import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client';

const inter = Inter({ subsets: ['latin'] });

const useCountUp = (end: number, duration: number = 1000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
};

export default function Home() {
  const router = useRouter()
  const [expandedSection, setExpandedSection] = useState('2023');
  const [activeTab, setActiveTab] = useState('previous');
  const successfulStudents = useCountUp(15000, 2000);
  const testPapers = useCountUp(200, 2000);
  const mathScore = useCountUp(72, 1500);
  const physicsScore = useCountUp(81, 1500);
  const chemistryScore = useCountUp(65, 1500);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection('');
    } else {
      setExpandedSection(section);
    }
  };

  const handlePurchase = async () => {
    try {
      // Check if session cookie exists
      const response = await fetch('/api/auth/check-session')
      const data = await response.json()

      // Store redirect path before checking auth
      localStorage.setItem('redirectPath', '/payment')

      if (data.authenticated) {
        // If logged in, go directly to payment
        router.push('/payment')
      } else {
        // If not logged in, go to login page
        router.push('/auth/login')
      }
    } catch (error) {
      console.error('Session check error:', error)
      // On error, redirect to login to be safe
      router.push('/auth/login')
    }
  }

  const supabase = createClient();
  // Fix: Move the async call into a useEffect and useState, since 'await' is not allowed at the top level of a component function.
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [pdfError, setPdfError] = useState<any>(null);

  useEffect(() => {
    const fetchPdfUrl = async () => {
      try {
        const { data, error } = await supabase
          .storage
          .from('pdfs')
          .createSignedUrl('1.Solutions.pdf', 60 * 60); // 1 hour
        if (error) setPdfError(error);
        setPdfUrl(data?.signedUrl || null);
      } catch (err) {
        setPdfError(err);
      }
    };
    fetchPdfUrl();
  }, []);
    // (Removed: invalid top-level code. PDF URL fetching is handled in useEffect above.)

  return (
    <div className={`${inter.className} min-h-screen bg-white text-gray-900`}>
      <Head>
        <title>EAMCET Pro - Master Your EAMCET Preparation</title>
        <meta name="description" content="Ace your EAMCET exam with our smart test preparation platform" />
        {/* Use favico.ico as the favicon for the site. Place favico.ico in the public directory. */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      {/* Header Section */}
      <header className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/recallpro.png" alt="RecallPro Logo" width={120} height={120} className="mr-2 rounded" />
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
          <a href="#test-series" className="text-gray-600 hover:text-blue-600">Test Series</a>
          <Link href="/syllabus" className="text-gray-600 hover:text-blue-600">Syllabus</Link>
          <a href="#marks-vs-rank" className="text-gray-600 hover:text-blue-600">Cutoff's</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
          <Link href="/recall" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Recall</Link>
          <Link href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Get Started</Link>
        </nav>
        {/* Mobile Nav Button */}
        <div className="md:hidden flex items-center">
          <button className="p-2" onClick={() => setMobileNavOpen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Nav Drawer */}
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end">
            <div className="w-4/5 max-w-xs bg-white h-full shadow-lg flex flex-col p-6">
              <button className="self-end mb-6" onClick={() => setMobileNavOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <a href="#features" className="mb-4 text-gray-700 hover:text-blue-600" onClick={() => setMobileNavOpen(false)}>Features</a>
              <a href="#test-series" className="mb-4 text-gray-700 hover:text-blue-600" onClick={() => setMobileNavOpen(false)}>Test Series</a>
              <a href="#marks-vs-rank" className="mb-4 text-gray-700 hover:text-blue-600" onClick={() => setMobileNavOpen(false)}>Cutoff's</a>
              <a href="#pricing" className="mb-4 text-gray-700 hover:text-blue-600" onClick={() => setMobileNavOpen(false)}>Pricing</a>
              <Link href="/recall" className="mb-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={() => setMobileNavOpen(false)}>Recall</Link>
              <Link href="/auth/login" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition" onClick={() => setMobileNavOpen(false)}>Get Started</Link>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-full py-8 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600 inline-block bg-blue-50 px-4 py-1 rounded-full mb-3">#1 EAMCET TEST PREPARATION IN AP & TS</p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Master EAMCET with <span className="text-blue-600">Smart</span> Test Prep</h1>
            <p className="text-gray-600 mb-6">Maximize your score with our previous year papers and AI-powered performance analytics.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/auth/register" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer text-center">Start Preparing Now</Link>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition cursor-pointer text-center">View Test Series</button>
            </div>
            <div className="flex gap-8 sm:gap-12 flex-wrap">
              <div>
                <p className="text-2xl font-bold text-gray-900">{successfulStudents}+</p>
                <p className="text-gray-500 text-sm">Successful Students</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{testPapers}+</p>
                <p className="text-gray-500 text-sm">Test Papers</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Your Performance Analytics</h3>
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Mathematics</span>
                  <span className="text-sm font-medium text-gray-900">{mathScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: `${mathScore}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Physics</span>
                  <span className="text-sm font-medium text-gray-900">{physicsScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: `${physicsScore}%` }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Chemistry</span>
                  <span className="text-sm font-medium text-gray-900">{chemistryScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: `${chemistryScore}%` }}></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="bg-blue-100 rounded-lg p-3">
                <p className="text-blue-600 font-bold text-xl">87%</p>
                <p className="text-gray-600 text-xs">Accuracy</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-3">
                <p className="text-blue-600 font-bold text-xl">142</p>
                <p className="text-gray-600 text-xs">Score</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-3">
                <p className="text-blue-600 font-bold text-xl">32</p>
                <p className="text-gray-600 text-xs">Mock Tests</p>
              </div>
              <div className="bg-blue-100 rounded-lg p-3">
                <p className="text-blue-600 font-bold text-xl">2.5k</p>
                <p className="text-gray-600 text-xs">Est. Rank</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto px-8 max-w-7xl py-16 bg-gray-50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Everything You Need for EAMCET Success</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive features designed to maximize your score and track your progress effectively.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Real Exam Experience</h3>
              <p className="text-gray-600">Practice with realistic question formats and time constraints to simulate the actual EAMCET exam experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
              <p className="text-gray-600">Get comprehensive insights into your strengths and weaknesses with subject-wise performance breakdown.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Previous Year Papers</h3>
              <p className="text-gray-600">Access full sets of past EAMCET papers with detailed solutions to establish exam patterns.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Topic-wise Tests</h3>
              <p className="text-gray-600">Practice specific subjects and topics to improve your understanding in each topic.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Time Management</h3>
              <p className="text-gray-600">Learn to manage your time effectively with our detailed test performance and analysis reports.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Peer Comparison</h3>
              <p className="text-gray-600">Track your progress against other test-takers with comprehensive analytical comparisons.</p>
            </div>
          </div>
        </section>

        {/* Test Collection Section */}
        <section id="test-series" className="container mx-auto px-8 max-w-7xl py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Comprehensive Test Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Practice with our extensive library of previous year papers and mock tests designed for EAMCET success.</p>
          </div>
          <div className="flex gap-4 justify-center mb-12">
            <button 
              className={`px-6 py-3 rounded-md transition ${activeTab === 'previous' ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-600'}`}
              onClick={() => setActiveTab('previous')}
            >
              Previous Year Papers
            </button>
            <button 
              className={`px-6 py-3 rounded-md transition ${activeTab === 'mock' ? 'bg-blue-600 text-white' : 'border border-blue-600 text-blue-600'}`}
              onClick={() => setActiveTab('mock')}
            >
              Mock Test Series
            </button>
          </div>

          {/* Test Paper Accordion */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'previous' ? (
              <>
                <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
                    onClick={() => toggleSection('2023')}
                  >
                    <h3 className="font-semibold">EAMCET 2023 Papers</h3>
                    {expandedSection === '2023' ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                  {expandedSection === '2023' && (
                    <div className="p-4 space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-wrap justify-between mb-2">
                          <h4 className="font-semibold">TS EAMCET 2023 - Set A</h4>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                              </svg>
                              3 hours
                            </span>
                            <span className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              160 questions
                            </span>
                          </div>
                        </div>
                        <button className="bg-blue-600/90 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition inline-block">Take Test</button>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-wrap justify-between mb-2">
                          <h4 className="font-semibold">TS EAMCET 2023 - Set B</h4>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                              </svg>
                              3 hours
                            </span>
                            <span className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              160 questions
                            </span>
                          </div>
                        </div>
                        <button className="bg-blue-600/90 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition inline-block">Take Test</button>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-wrap justify-between mb-2">
                          <h4 className="font-semibold">AP EAMCET 2023 - Set A</h4>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                              </svg>
                              3 hours
                            </span>
                            <span className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              160 questions
                            </span>
                          </div>
                        </div>
                        <button className="bg-blue-600/90 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition inline-block">Take Test</button>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-wrap justify-between mb-2">
                          <h4 className="font-semibold">AP EAMCET 2023 - Set B</h4>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                              </svg>
                              3 hours
                            </span>
                            <span className="flex items-center gap-1">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              160 questions
                            </span>
                          </div>
                        </div>
                        <button className="bg-blue-600/90 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition inline-block">Take Test</button>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
                    onClick={() => toggleSection('2022')}
                  >
                    <h3 className="font-semibold">EAMCET 2022 Papers</h3>
                    {expandedSection === '2022' ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                  {expandedSection === '2022' && (
                    <div className="p-4">
                      {/* Content similar to 2023 papers */}
                    </div>
                  )}
                </div>
                
                <div className="border border-gray-200 rounded-lg mb-8 overflow-hidden">
                  <div 
                    className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
                    onClick={() => toggleSection('2021')}
                  >
                    <h3 className="font-semibold">EAMCET 2021 Papers</h3>
                    {expandedSection === '2021' ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                  {expandedSection === '2021' && (
                    <div className="p-4">
                      {/* Content similar to 2023 papers */}
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition cursor-pointer">View All Test Series</button>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="font-semibold">Full Length Mock Test #1</h4>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        3 hours
                      </span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        160 questions
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-600/90 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition inline-block">Take Test</button>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-wrap justify-between mb-2">
                    <h4 className="font-semibold">Full Length Mock Test #2</h4>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        3 hours
                      </span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        160 questions
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-600/90 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition inline-block">Take Test</button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600/95 py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-700/20"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23fff" fill-opacity="0.05" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
          <div className="container mx-auto px-8 max-w-7xl text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Ace Your EAMCET?</h2>
            <p className="max-w-2xl mx-auto mb-10 text-white/90 text-lg">Join thousands of successful students who have achieved their dream ranks with eamcetpro.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handlePurchase}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer"
              >
                Purchase Now
              </button>
              <p className="text-white/80 text-sm">Limited time offer - Save 64% today!</p>
            </div>
          </div>
        </section>

        {/* Mark's vs Rank Shortcut Button in Navbar */}
        {/* 
          To add the "Mark's vs Rank" shortcut button in the navbar, 
          you should update your main navigation (likely in your layout or header component).
          Example JSX for the navbar (add this after "Features" and after "Pricing"):
        */}
        {/* 
          <nav className="flex items-center gap-4">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#test-series" className="text-gray-700 hover:text-blue-600 transition">Test Series</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
            <a
              href="#marks-vs-rank"
              className="text-gray-700 hover:text-blue-600 transition font-semibold px-3 py-1 rounded-md"
            >
              Mark's vs Rank
            </a>
            {/* ...other buttons */}
          {/* 
            <nav className="flex items-center gap-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
              <a href="#test-series" className="text-gray-700 hover:text-blue-600 transition">Test Series</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</a>
              <a
                href="#marks-vs-rank"
                className="text-gray-700 hover:text-blue-600 transition font-semibold px-3 py-1 rounded-md"
              >
                Mark's vs Rank
              </a>
              {/* ...other buttons */}
            {/* Mark's vs Rank Section */}
            <section id="marks-vs-rank" className="container mx-auto px-4 sm:px-8 max-w-7xl py-24 flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-600">( Mark's vs Rank )</h2>
              <img src="/markvsrank.png" alt="( Mark's vs Rank )" className="w-full max-w-3xl rounded-xl shadow-lg border border-gray-200" />
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="container mx-auto px-8 max-w-7xl py-16">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold text-blue-600 mb-2">Pricing</p>
                <h2 className="text-3xl font-bold mb-3">Affordable Test Preparation</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Get complete access to our test series at a special discount price.</p>
              </div>
              
              <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden">
                <div className="bg-blue-600 text-white p-6 text-center">
                  <h3 className="text-xl font-semibold">Complete Test Series Package</h3>
                  <p className="text-sm opacity-90">Everything you need for EAMCET success</p>
                </div>
                <div className="p-6">
                  <div className="flex justify-center items-baseline mb-6">
                    <span className="text-3xl font-bold">₹900</span>
                    <span className="text-gray-500 line-through ml-2">₹2500</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded ml-2">64% off</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Access to all previous papers
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Full mock test series (10+ tests)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Subject-wise practice tests
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Detailed performance analytics
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      One-time payment (no subscription)
                    </li>
                    <li className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Valid until your EAMCET!
                    </li>
                  </ul>
                  <button 
                    className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
                    onClick={handlePurchase}
                  >
                    Purchase Now
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <img src="https://razorpay.com/assets/razorpay-logo.svg" alt="Razorpay" className="h-5" />
                    <p className="text-xs text-gray-500">Secure payment by Razorpay</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Affiliate Section */}
            <section className="container mx-auto px-8 max-w-7xl py-8 mb-8">
              <div className="max-w-3xl mx-auto border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Affiliate Program</h3>
                <p className="text-gray-600 mb-4">Recommend eamcetpro to others and earn income! Join our affiliate program and earn commission on each successful referral.</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer">Become an Affiliate</button>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-gray-50 pt-12 pb-6">
            <div className="container mx-auto px-8 max-w-7xl">
              <div className="grid md:grid-cols-4 gap-8 mb-12">
                <div>
                  <div className="flex items-center mb-4">
                    {/* If using Next.js, import Image from 'next/image' at the top of your file */}
                    {/* If not using Next.js, replace <Image ... /> with <img ... /> */}
                    <img src="/recallpro.png" alt="RecallPro Logo" width={150} height={150} className="mr-2 rounded" />
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Helping students ace their TS &amp; AP EAMCET exams with comprehensive preparation tools.</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-600">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
                    <li><a href="#features" className="text-gray-600 hover:text-blue-600">Features</a></li>
                    <li><a href="#test-series" className="text-gray-600 hover:text-blue-600">Test Series</a></li>
                    <li><a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-600 hover:text-blue-600">Blog</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-blue-600">Study Tips</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-blue-600">EAMCET Syllabus</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-blue-600">Success Stories</a></li>
                    <li><a href="#" className="text-gray-600 hover:text-blue-600">Affiliate Program</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">Contact Us</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-600">support@eamcetpro.com</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-600">+91 90456 78234</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="text-gray-600">
                        <p>123, Tech Park, Hyderabad City</p>
                        <p>Telangana, 500081</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500">© 2025All rights reserved. eamcetpro. </p>
              </div>
            </div>
          </footer>
        </div>
      );
}