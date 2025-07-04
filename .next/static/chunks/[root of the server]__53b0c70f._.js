(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__53b0c70f._.js", {

"[next]/internal/font/google/inter_4617584a.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "className": "inter_4617584a-module__PibPIa__className",
});
}}),
"[next]/internal/font/google/inter_4617584a.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_4617584a$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_4617584a.module.css [app-client] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_4617584a$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_4617584a$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_4617584a$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}}),
"[project]/utils/supabase/client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "createClient": (()=>createClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const createClient = ()=>{
    const supabaseUrl = ("TURBOPACK compile-time value", "https://gywajswoztldhjdwepkv.supabase.co");
    const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd5d2Fqc3dvenRsZGhqZHdlcGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NDI3OTIsImV4cCI6MjA2NDExODc5Mn0.W1K-UrncnN57sC5xqjwKE2OWc2WHvQqIQh0F-nCSFQI");
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseKey);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utils/test.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getQuestionNumber": (()=>getQuestionNumber),
    "getQuestionOptions": (()=>getQuestionOptions),
    "getQuestionsBySection": (()=>getQuestionsBySection),
    "getTestData": (()=>getTestData),
    "submitTest": (()=>submitTest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/supabase/client.ts [app-client] (ecmascript)");
;
async function getTestData(testId) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    // Fetch test details
    const { data: test, error: testError } = await supabase.from('tests').select('*').eq('test_id', testId).single();
    if (testError) throw testError;
    // Fetch sections
    const { data: sections, error: sectionsError } = await supabase.from('sections').select('*').eq('test_id', testId);
    if (sectionsError) throw sectionsError;
    // Fetch questions for all sections
    const sectionIds = sections.map((s)=>s.section_id);
    const { data: questions, error: questionsError } = await supabase.from('questions').select('*').in('section_id', sectionIds);
    if (questionsError) throw questionsError;
    // Group and number questions by section
    const orderedQuestions = questions.reduce((acc, question)=>{
        const sectionName = question.section_id.split('_')[2].toLowerCase();
        const baseNumber = sectionName === 'maths' ? 0 : sectionName === 'physics' ? 80 : sectionName === 'chemistry' ? 120 : 0;
        // Adjust question numbers based on section
        // question.question_number is 1-based within each section
        const questionNumber = baseNumber + question.question_number;
        acc.push({
            ...question,
            question_number: questionNumber
        });
        return acc;
    }, []);
    // Sort questions by their new question numbers
    orderedQuestions.sort((a, b)=>a.question_number - b.question_number);
    // Calculate section instructions
    const sectionInstructions = sections.map((section)=>{
        const sectionName = section.section_name.toLowerCase();
        let questionCount = 0;
        switch(sectionName){
            case 'maths':
                questionCount = 80;
                break;
            case 'physics':
            case 'chemistry':
                questionCount = 40;
                break;
            default:
                questionCount = questions.filter((q)=>q.section_id === section.section_id).length;
        }
        return {
            name: section.section_name,
            questions: questionCount
        };
    });
    return {
        test,
        sections,
        questions: orderedQuestions,
        instructions: {
            duration: 180,
            sectionInstructions
        }
    };
}
function getQuestionsBySection(questions, sectionName) {
    return questions.filter((q)=>{
        const section = q.section_id.split('_')[1]; // Extract section name from section_id
        return section.toLowerCase() === sectionName.toLowerCase();
    });
}
function getQuestionNumber(question) {
    return question.question_number;
}
function getQuestionOptions(question) {
    const options = [
        {
            id: 'a',
            content: question.option_a
        },
        {
            id: 'b',
            content: question.option_b
        },
        {
            id: 'c',
            content: question.option_c
        },
        {
            id: 'd',
            content: question.option_d
        }
    ];
    if (question.option_e) {
        options.push({
            id: 'e',
            content: question.option_e
        });
    }
    if (question.option_f) {
        options.push({
            id: 'f',
            content: question.option_f
        });
    }
    return options;
}
async function submitTest(testId, answers, timeTaken, userId) {
    try {
        const response = await fetch('/api/test/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                testId,
                answers,
                timeTaken
            })
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to submit test');
        }
        return response.json();
    } catch (error) {
        console.error('Error submitting test:', error);
        throw error;
    }
}
function evaluateTest(answers, questions) {
    const sectionAnalysis = {
        maths: {
            correct: 0,
            wrong: 0,
            unattempted: 0,
            marks: 0
        },
        physics: {
            correct: 0,
            wrong: 0,
            unattempted: 0,
            marks: 0
        },
        chemistry: {
            correct: 0,
            wrong: 0,
            unattempted: 0,
            marks: 0
        }
    };
    let totalCorrect = 0;
    let totalWrong = 0;
    let totalUnattempted = 0;
    questions.forEach((question)=>{
        const section = question.section_id.split('_')[2].toLowerCase();
        const answer = answers[question.question_number];
        if (!answer) {
            totalUnattempted++;
            sectionAnalysis[section].unattempted++;
        } else if (answer === question.correct_option) {
            totalCorrect++;
            sectionAnalysis[section].correct++;
            sectionAnalysis[section].marks += 1;
        } else {
            totalWrong++;
            sectionAnalysis[section].wrong++;
        }
    });
    return {
        section_wise_marks: {
            maths: sectionAnalysis.maths.marks,
            physics: sectionAnalysis.physics.marks,
            chemistry: sectionAnalysis.chemistry.marks
        },
        total_marks: totalCorrect,
        correct_answers: totalCorrect,
        wrong_answers: totalWrong,
        unattempted: totalUnattempted,
        section_wise_analysis: sectionAnalysis
    };
}
async function updateUserAnalytics(userId, result) {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
    // Get existing analytics
    const { data: existingAnalytics } = await supabase.from('user_analytics').select('*').eq('user_id', userId).single();
    if (!existingAnalytics) {
        // Create new analytics
        const newAnalytics = {
            user_id: userId,
            total_tests_taken: 1,
            average_score: result.total_marks,
            section_wise_average: {
                maths: result.section_wise_marks.maths,
                physics: result.section_wise_marks.physics,
                chemistry: result.section_wise_marks.chemistry
            },
            improvement_trend: [
                {
                    date: result.submitted_at,
                    score: result.total_marks
                }
            ],
            weak_areas: determineWeakAreas(result.section_wise_analysis),
            strong_areas: determineStrongAreas(result.section_wise_analysis),
            time_management: {
                average_time_per_question: result.time_taken / 160,
                section_wise_time: {
                    maths: result.time_taken * 0.5,
                    physics: result.time_taken * 0.25,
                    chemistry: result.time_taken * 0.25
                }
            }
        };
        await supabase.from('user_analytics').insert(newAnalytics);
    } else {
        // Update existing analytics
        const updatedAnalytics = {
            total_tests_taken: existingAnalytics.total_tests_taken + 1,
            average_score: (existingAnalytics.average_score * existingAnalytics.total_tests_taken + result.total_marks) / (existingAnalytics.total_tests_taken + 1),
            section_wise_average: {
                maths: (existingAnalytics.section_wise_average.maths * existingAnalytics.total_tests_taken + result.section_wise_marks.maths) / (existingAnalytics.total_tests_taken + 1),
                physics: (existingAnalytics.section_wise_average.physics * existingAnalytics.total_tests_taken + result.section_wise_marks.physics) / (existingAnalytics.total_tests_taken + 1),
                chemistry: (existingAnalytics.section_wise_average.chemistry * existingAnalytics.total_tests_taken + result.section_wise_marks.chemistry) / (existingAnalytics.total_tests_taken + 1)
            },
            improvement_trend: [
                ...existingAnalytics.improvement_trend,
                {
                    date: result.submitted_at,
                    score: result.total_marks
                }
            ],
            weak_areas: determineWeakAreas(result.section_wise_analysis),
            strong_areas: determineStrongAreas(result.section_wise_analysis),
            time_management: {
                average_time_per_question: (existingAnalytics.time_management.average_time_per_question * existingAnalytics.total_tests_taken + result.time_taken / 160) / (existingAnalytics.total_tests_taken + 1),
                section_wise_time: {
                    maths: (existingAnalytics.time_management.section_wise_time.maths * existingAnalytics.total_tests_taken + result.time_taken * 0.5) / (existingAnalytics.total_tests_taken + 1),
                    physics: (existingAnalytics.time_management.section_wise_time.physics * existingAnalytics.total_tests_taken + result.time_taken * 0.25) / (existingAnalytics.total_tests_taken + 1),
                    chemistry: (existingAnalytics.time_management.section_wise_time.chemistry * existingAnalytics.total_tests_taken + result.time_taken * 0.25) / (existingAnalytics.total_tests_taken + 1)
                }
            }
        };
        await supabase.from('user_analytics').update(updatedAnalytics).eq('user_id', userId);
    }
}
function determineWeakAreas(sectionAnalysis) {
    const weakAreas = [];
    const sections = Object.entries(sectionAnalysis);
    sections.forEach(([section, analysis])=>{
        // Ensure analysis is the expected type
        const totalQuestions = section === 'maths' ? 80 : 40;
        const scorePercentage = analysis.correct / totalQuestions * 100;
        if (scorePercentage < 50) {
            weakAreas.push(section.charAt(0).toUpperCase() + section.slice(1));
        }
    });
    return weakAreas;
}
function determineStrongAreas(sectionAnalysis) {
    const strongAreas = [];
    const sections = Object.entries(sectionAnalysis);
    sections.forEach(([section, analysis])=>{
        const totalQuestions = section === 'maths' ? 80 : 40;
        const scorePercentage = analysis.correct / totalQuestions * 100;
        if (scorePercentage >= 75) {
            strongAreas.push(section.charAt(0).toUpperCase() + section.slice(1));
        }
    });
    return strongAreas;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/test/take/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
__turbopack_context__.s({
    "default": (()=>TestPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_4617584a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_4617584a.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowLeftIcon.js [app-client] (ecmascript) <export default as ArrowLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-client] (ecmascript) <export default as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js [app-client] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$test$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/test.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$katex$2f$dist$2f$react$2d$katex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-katex/dist/react-katex.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Add this helper function after the imports
const getActiveSectionFromQuestionNumber = (questionNumber)=>{
    if (questionNumber >= 1 && questionNumber <= 80) return 'Maths';
    if (questionNumber >= 81 && questionNumber <= 120) return 'Physics';
    if (questionNumber >= 121 && questionNumber <= 160) return 'Chemistry';
    return 'Maths'; // Default to Maths if out of range
};
function TestPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const testId = parseInt(searchParams.get('testId') || '1', 10);
    const [isSidebarOpen, setIsSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [testData, setTestData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        currentQuestionId: 1,
        activeSection: '',
        answers: {},
        markedForReview: [],
        answeredAndMarkedForReview: [],
        visitedQuestions: [
            1
        ],
        timeRemaining: 180 * 60
    });
    const [showInstructions, setShowInstructions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check authentication on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestPage.useEffect": ()=>{
            const checkAuth = {
                "TestPage.useEffect.checkAuth": async ()=>{
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
                }
            }["TestPage.useEffect.checkAuth"];
            checkAuth();
        }
    }["TestPage.useEffect"], [
        router,
        testId
    ]);
    // Timer functionality
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestPage.useEffect": ()=>{
            if (!testData) return;
            const timer = setInterval({
                "TestPage.useEffect.timer": ()=>{
                    setProgress({
                        "TestPage.useEffect.timer": (prev)=>({
                                ...prev,
                                timeRemaining: prev.timeRemaining - 1
                            })
                    }["TestPage.useEffect.timer"]);
                    if (progress.timeRemaining <= 0) {
                        clearInterval(timer);
                        // Handle time's up scenario - auto submit
                        handleSubmitTest();
                    }
                }
            }["TestPage.useEffect.timer"], 1000);
            return ({
                "TestPage.useEffect": ()=>clearInterval(timer)
            })["TestPage.useEffect"];
        }
    }["TestPage.useEffect"], [
        progress.timeRemaining,
        testData
    ]);
    // Format time as HH:MM:SS
    const formatTime = (timeInSeconds)=>{
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor(timeInSeconds % 3600 / 60);
        const seconds = timeInSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    // Current question data
    const currentQuestion = testData?.questions.find((q)=>q.question_number === progress.currentQuestionId);
    // Navigation functions
    const goToQuestion = (questionId)=>{
        if (!progress.visitedQuestions.includes(questionId)) {
            setProgress((prev)=>({
                    ...prev,
                    visitedQuestions: [
                        ...prev.visitedQuestions,
                        questionId
                    ]
                }));
        }
        const newActiveSection = getActiveSectionFromQuestionNumber(questionId);
        setProgress((prev)=>({
                ...prev,
                currentQuestionId: questionId,
                activeSection: newActiveSection
            }));
    };
    const goToNextQuestion = ()=>{
        if (!testData) return;
        const nextId = progress.currentQuestionId + 1;
        if (nextId <= testData.questions.length) {
            goToQuestion(nextId);
        }
    };
    const goToPrevQuestion = ()=>{
        const prevId = progress.currentQuestionId - 1;
        if (prevId >= 1) {
            goToQuestion(prevId);
        }
    };
    // Answer handling
    const handleSelectAnswer = (optionId)=>{
        setProgress((prev)=>({
                ...prev,
                answers: {
                    ...prev.answers,
                    [progress.currentQuestionId]: optionId
                },
                answeredAndMarkedForReview: prev.markedForReview.includes(progress.currentQuestionId) ? [
                    ...prev.answeredAndMarkedForReview.filter((id)=>id !== progress.currentQuestionId),
                    progress.currentQuestionId
                ] : prev.answeredAndMarkedForReview,
                markedForReview: prev.markedForReview.includes(progress.currentQuestionId) ? prev.markedForReview.filter((id)=>id !== progress.currentQuestionId) : prev.markedForReview
            }));
    };
    // Review marking
    const handleMarkForReview = ()=>{
        const questionId = progress.currentQuestionId;
        const isAnswered = progress.answers[questionId] !== undefined;
        setProgress((prev)=>{
            // If already marked for review, unmark it
            if (prev.markedForReview.includes(questionId) || prev.answeredAndMarkedForReview.includes(questionId)) {
                return {
                    ...prev,
                    markedForReview: prev.markedForReview.filter((id)=>id !== questionId),
                    answeredAndMarkedForReview: prev.answeredAndMarkedForReview.filter((id)=>id !== questionId)
                };
            }
            // Otherwise mark it based on whether it's answered
            if (isAnswered) {
                return {
                    ...prev,
                    answeredAndMarkedForReview: [
                        ...prev.answeredAndMarkedForReview,
                        questionId
                    ],
                    markedForReview: prev.markedForReview.filter((id)=>id !== questionId)
                };
            } else {
                return {
                    ...prev,
                    markedForReview: [
                        ...prev.markedForReview,
                        questionId
                    ],
                    answeredAndMarkedForReview: prev.answeredAndMarkedForReview.filter((id)=>id !== questionId)
                };
            }
        });
        goToNextQuestion();
    };
    // Clear response
    const handleClearResponse = ()=>{
        setProgress((prev)=>({
                ...prev,
                answers: {
                    ...prev.answers,
                    [progress.currentQuestionId]: null
                },
                answeredAndMarkedForReview: prev.answeredAndMarkedForReview.filter((id)=>id !== progress.currentQuestionId)
            }));
    };
    // Save and next
    const handleSaveAndNext = ()=>{
        goToNextQuestion();
    };
    // Submit test
    const handleSubmitTest = async ()=>{
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
            const submittedAnswers = Object.entries(progress.answers).reduce((acc, [key, value])=>{
                if (value !== null) {
                    acc[parseInt(key)] = value;
                }
                return acc;
            }, {});
            // Submit test and get result
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$test$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["submitTest"])(testId, submittedAnswers, timeTaken, userId);
            // Navigate to results page with result ID
            router.push(`/test/result?resultId=${result.result_id}`);
        } catch (error) {
            console.error('Error submitting test:', error);
            alert('Failed to submit test. Please try again.');
        }
    };
    // Get question status class
    const getQuestionStatusClass = (questionId)=>{
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
        return 'bg-white border border-gray-300';
    };
    // Count stats
    const attemptedCount = Object.values(progress.answers).filter((answer)=>answer !== null).length;
    const notAnsweredCount = progress.visitedQuestions.length - attemptedCount;
    const notVisitedCount = (testData?.questions.length || 0) - progress.visitedQuestions.length;
    const markedCount = progress.markedForReview.length;
    const answeredAndMarkedCount = progress.answeredAndMarkedForReview.length;
    // Get questions by section
    const getQuestionsBySection = (sectionName)=>{
        if (!testData) return [];
        return testData.questions.filter((q)=>{
            const section = q.section_id.split('_')[2]; // Extract section name from section_id
            return section.toLowerCase() === sectionName.toLowerCase();
        });
    };
    // Render LaTeX and HTML content
    const renderContent = (content)=>{
        // This is a simplified approach - in a real app you'd need more robust parsing
        const hasLatex = content.includes('$');
        // Create a temporary div to parse HTML and modify image sources
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;
        // Find all images and update their src if needed
        const images = tempDiv.getElementsByTagName('img');
        for(let i = 0; i < images.length; i++){
            const img = images[i];
            const src = img.getAttribute('src');
            if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                img.setAttribute('src', `https://testseries.edugorilla.com/${src.startsWith('/') ? src.slice(1) : src}`);
            }
        }
        const processedHtml = tempDiv.innerHTML;
        if (hasLatex) {
            // Very basic LaTeX handling - actual implementation would be more sophisticated
            return processedHtml.split('$').map((part, index)=>{
                if (index % 2 === 1) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$katex$2f$dist$2f$react$2d$katex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineMath"], {
                        math: part
                    }, index, false, {
                        fileName: "[project]/app/test/take/page.tsx",
                        lineNumber: 328,
                        columnNumber: 18
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    dangerouslySetInnerHTML: {
                        __html: part
                    }
                }, index, false, {
                    fileName: "[project]/app/test/take/page.tsx",
                    lineNumber: 330,
                    columnNumber: 16
                }, this);
            });
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            dangerouslySetInnerHTML: {
                __html: processedHtml
            }
        }, void 0, false, {
            fileName: "[project]/app/test/take/page.tsx",
            lineNumber: 334,
            columnNumber: 12
        }, this);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestPage.useEffect": ()=>{
            async function fetchTestData() {
                try {
                    const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$test$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTestData"])(testId);
                    console.log('Test Data:', {
                        test: data.test,
                        sections: data.sections,
                        questions: data.questions,
                        instructions: data.instructions
                    });
                    setTestData(data);
                    setProgress({
                        "TestPage.useEffect.fetchTestData": (prev)=>({
                                ...prev,
                                activeSection: data.sections[0].section_name
                            })
                    }["TestPage.useEffect.fetchTestData"]);
                } catch (err) {
                    setError('Failed to load test data. Please try again.');
                    console.error('Error fetching test data:', err);
                } finally{
                    setLoading(false);
                }
            }
            fetchTestData();
        }
    }["TestPage.useEffect"], [
        testId
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl",
                children: "Loading test..."
            }, void 0, false, {
                fileName: "[project]/app/test/take/page.tsx",
                lineNumber: 366,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/test/take/page.tsx",
            lineNumber: 365,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/test/take/page.tsx",
                lineNumber: 374,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/test/take/page.tsx",
            lineNumber: 373,
            columnNumber: 7
        }, this);
    }
    if (!testData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xl",
                children: "Test not found"
            }, void 0, false, {
                fileName: "[project]/app/test/take/page.tsx",
                lineNumber: 382,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/test/take/page.tsx",
            lineNumber: 381,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row min-h-screen w-full",
        children: [
            isSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end md:static md:bg-transparent md:w-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-4/5 max-w-xs bg-white h-full shadow-lg flex flex-col p-4 md:p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#3B4B6B] text-white p-3 sm:p-4 rounded-lg mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 mb-3 sm:mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-5 w-5 text-white",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/take/page.tsx",
                                                lineNumber: 397,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-sm",
                                            children: userName
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/take/page.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-2 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#2D3B59] rounded p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-green-400 font-bold mr-1",
                                                    children: attemptedCount
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 406,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Attempted"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 405,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#2D3B59] rounded p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-yellow-400 font-bold mr-1",
                                                    children: markedCount
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Marked"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#2D3B59] rounded p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white font-bold mr-1",
                                                    children: notVisitedCount
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Not Visited"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 415,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#2D3B59] rounded p-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-400 font-bold mr-1",
                                                    children: notAnsweredCount
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Not Answered"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 419,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 417,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#2D3B59] rounded p-2 col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-yellow-400 font-bold mr-1",
                                                    children: answeredAndMarkedCount
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Marked & Answered"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/take/page.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/take/page.tsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 sm:mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium text-gray-900 text-xs sm:text-sm",
                                children: [
                                    "Section: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600",
                                        children: progress.activeSection
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/take/page.tsx",
                                        lineNumber: 430,
                                        columnNumber: 85
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/take/page.tsx",
                                lineNumber: 430,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/test/take/page.tsx",
                            lineNumber: 429,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-5 gap-1 sm:gap-2 mb-4",
                            children: getQuestionsBySection(progress.activeSection).map((question)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        goToQuestion(question.question_number);
                                        if (window.innerWidth < 768) {
                                            setIsSidebarOpen(false);
                                        }
                                    },
                                    className: `w-full h-8 sm:h-9 flex items-center justify-center rounded text-xs sm:text-sm ${progress.currentQuestionId === question.question_number ? 'bg-red-500 text-white' : progress.answers[question.question_number] ? 'bg-green-500 text-white' : progress.markedForReview.includes(question.question_number) ? 'bg-yellow-400 text-white' : progress.answeredAndMarkedForReview.includes(question.question_number) ? 'bg-yellow-400 text-white relative after:content-["✓"] after:absolute after:text-green-800 after:text-xs after:right-1 after:top-0.5' : progress.visitedQuestions.includes(question.question_number) ? 'bg-red-500 text-white' : 'bg-white border border-gray-300'}`,
                                    children: question.question_number
                                }, question.question_id, false, {
                                    fileName: "[project]/app/test/take/page.tsx",
                                    lineNumber: 436,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/test/take/page.tsx",
                            lineNumber: 434,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "self-end mb-6 md:hidden",
                            onClick: ()=>setIsSidebarOpen(false),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/app/test/take/page.tsx",
                                    lineNumber: 460,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/test/take/page.tsx",
                                lineNumber: 459,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/test/take/page.tsx",
                            lineNumber: 458,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/test/take/page.tsx",
                    lineNumber: 392,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/test/take/page.tsx",
                lineNumber: 391,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-4 sm:p-6 flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "bg-white border-b border-gray-200 flex justify-between items-center py-2 px-4 sticky top-0 z-50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-600 font-bold text-lg ml-2",
                                        children: [
                                            "eamcet",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-900",
                                                children: "pro"
                                            }, void 0, false, {
                                                fileName: "[project]/app/test/take/page.tsx",
                                                lineNumber: 470,
                                                columnNumber: 74
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/test/take/page.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-4 text-md font-medium hidden md:inline",
                                        children: testData.test.test_name
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/take/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/take/page.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-200 rounded-md px-2 sm:px-3 py-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-xs sm:text-sm md:text-base",
                                            children: [
                                                "Time: ",
                                                formatTime(progress.timeRemaining)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 475,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/take/page.tsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsSidebarOpen(!isSidebarOpen),
                                        className: "bg-blue-600 text-white p-2 rounded-md md:hidden",
                                        children: isSidebarOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 482,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 484,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/take/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/test/take/page.tsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/test/take/page.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 p-2 sm:p-4 overflow-y-auto pb-20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex mb-4 items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center whitespace-nowrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium mr-2 text-xs sm:text-sm md:text-base",
                                                    children: "Sections |"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 496,
                                                    columnNumber: 19
                                                }, this),
                                                testData.sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `px-2 py-1 mx-1 rounded text-xs sm:text-sm md:text-base ${progress.activeSection === section.section_name ? 'bg-blue-600 text-white' : 'bg-gray-200'}`,
                                                        onClick: ()=>{
                                                            const firstQuestionNumber = section.section_name.toLowerCase() === 'maths' ? 1 : section.section_name.toLowerCase() === 'physics' ? 81 : section.section_name.toLowerCase() === 'chemistry' ? 121 : 1;
                                                            goToQuestion(firstQuestionNumber);
                                                        },
                                                        children: section.section_name
                                                    }, section.section_id, false, {
                                                        fileName: "[project]/app/test/take/page.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 21
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 495,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/test/take/page.tsx",
                                        lineNumber: 494,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/test/take/page.tsx",
                                    lineNumber: 493,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg shadow-sm p-3 sm:p-6 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-medium text-sm sm:text-base",
                                                    children: [
                                                        "Question ",
                                                        progress.currentQuestionId
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 521,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-2 sm:space-x-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-gray-600 mr-1 text-xs sm:text-sm",
                                                                children: "Time:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                lineNumber: 524,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs sm:text-sm",
                                                                children: [
                                                                    "00:",
                                                                    currentQuestion?.question_number.toString().padStart(2, '0')
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/test/take/page.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 522,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 520,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-base sm:text-lg mb-4",
                                                    children: currentQuestion && renderContent(currentQuestion.question_text)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 sm:space-y-3 mt-4 sm:mt-6",
                                                    children: currentQuestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start sm:items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        id: "option-a",
                                                                        name: "answer",
                                                                        checked: progress.answers[progress.currentQuestionId] === 'a',
                                                                        onChange: ()=>handleSelectAnswer('a'),
                                                                        className: "mt-1 sm:mt-0 mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 539,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "option-a",
                                                                        className: "flex-1 text-sm sm:text-base",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mr-2",
                                                                                children: "a."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                                lineNumber: 548,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            renderContent(currentQuestion.option_a)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 547,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                lineNumber: 538,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start sm:items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        id: "option-b",
                                                                        name: "answer",
                                                                        checked: progress.answers[progress.currentQuestionId] === 'b',
                                                                        onChange: ()=>handleSelectAnswer('b'),
                                                                        className: "mt-1 sm:mt-0 mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 553,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "option-b",
                                                                        className: "flex-1 text-sm sm:text-base",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mr-2",
                                                                                children: "b."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                                lineNumber: 562,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            renderContent(currentQuestion.option_b)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 561,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                lineNumber: 552,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start sm:items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        id: "option-c",
                                                                        name: "answer",
                                                                        checked: progress.answers[progress.currentQuestionId] === 'c',
                                                                        onChange: ()=>handleSelectAnswer('c'),
                                                                        className: "mt-1 sm:mt-0 mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 567,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "option-c",
                                                                        className: "flex-1 text-sm sm:text-base",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mr-2",
                                                                                children: "c."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                                lineNumber: 576,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            renderContent(currentQuestion.option_c)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 575,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start sm:items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        id: "option-d",
                                                                        name: "answer",
                                                                        checked: progress.answers[progress.currentQuestionId] === 'd',
                                                                        onChange: ()=>handleSelectAnswer('d'),
                                                                        className: "mt-1 sm:mt-0 mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 581,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "option-d",
                                                                        className: "flex-1 text-sm sm:text-base",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mr-2",
                                                                                children: "d."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                                lineNumber: 590,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            renderContent(currentQuestion.option_d)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 589,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                lineNumber: 580,
                                                                columnNumber: 23
                                                            }, this),
                                                            currentQuestion.option_e && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start sm:items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        id: "option-e",
                                                                        name: "answer",
                                                                        checked: progress.answers[progress.currentQuestionId] === 'e',
                                                                        onChange: ()=>handleSelectAnswer('e'),
                                                                        className: "mt-1 sm:mt-0 mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 596,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "option-e",
                                                                        className: "flex-1 text-sm sm:text-base",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mr-2",
                                                                                children: "e."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                                lineNumber: 605,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            renderContent(currentQuestion.option_e)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 604,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                lineNumber: 595,
                                                                columnNumber: 25
                                                            }, this),
                                                            currentQuestion.option_f && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start sm:items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        id: "option-f",
                                                                        name: "answer",
                                                                        checked: progress.answers[progress.currentQuestionId] === 'f',
                                                                        onChange: ()=>handleSelectAnswer('f'),
                                                                        className: "mt-1 sm:mt-0 mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 612,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "option-f",
                                                                        className: "flex-1 text-sm sm:text-base",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "mr-2",
                                                                                children: "f."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                                lineNumber: 621,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            renderContent(currentQuestion.option_f)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/test/take/page.tsx",
                                                                        lineNumber: 620,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/test/take/page.tsx",
                                                                lineNumber: 611,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 mt-4 sm:mt-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row gap-2 sm:gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleMarkForReview,
                                                            className: "bg-gray-200 text-gray-800 px-3 sm:px-4 py-2 rounded-md hover:bg-gray-300 transition text-sm",
                                                            children: "Mark for Review & Next"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/take/page.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleClearResponse,
                                                            className: "bg-gray-200 text-gray-800 px-3 sm:px-4 py-2 rounded-md hover:bg-gray-300 transition text-sm",
                                                            children: "Clear Response"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/test/take/page.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 632,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSaveAndNext,
                                                    className: "bg-green-600 text-white px-3 sm:px-4 py-2 rounded-md hover:bg-green-700 transition text-sm",
                                                    children: "Save & Next"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 646,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 631,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/take/page.tsx",
                                    lineNumber: 519,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between mt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goToPrevQuestion,
                                            disabled: progress.currentQuestionId === 1,
                                            className: `flex items-center text-sm ${progress.currentQuestionId === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-800'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeftIcon$3e$__["ArrowLeftIcon"], {
                                                    className: "h-4 w-4 mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Previous"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 656,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: goToNextQuestion,
                                            disabled: progress.currentQuestionId === testData.questions.length,
                                            className: `flex items-center text-sm ${progress.currentQuestionId === testData.questions.length ? 'text-gray-400 cursor-not-allowed' : 'text-blue-600 hover:text-blue-800'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Next"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                                    className: "h-4 w-4 ml-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/test/take/page.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/test/take/page.tsx",
                                            lineNumber: 666,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/test/take/page.tsx",
                                    lineNumber: 655,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/test/take/page.tsx",
                            lineNumber: 492,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/test/take/page.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/test/take/page.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/test/take/page.tsx",
        lineNumber: 388,
        columnNumber: 5
    }, this);
}
_s(TestPage, "oMFrbDgmmzUqOpmdPDayPubzfLs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = TestPage;
var _c;
__turbopack_context__.k.register(_c, "TestPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__53b0c70f._.js.map