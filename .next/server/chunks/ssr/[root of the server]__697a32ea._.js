module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/components/LessonView.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LessonView)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './PdfViewer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
function LessonView({ subject, lesson }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-4 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold text-cyan-500",
                children: [
                    subject,
                    " / ",
                    lesson
                ]
            }, void 0, true, {
                fileName: "[project]/components/LessonView.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PdfViewer, {}, void 0, false, {
                fileName: "[project]/components/LessonView.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LessonView.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/recall/lessons.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"subject\":\"Mathematic's\",\"lesson\":\"Lesson 1\"},{\"subject\":\"Mathematic's\",\"lesson\":\"Lesson 2\"},{\"subject\":\"Mathematic's\",\"lesson\":\"Lesson 3\"},{\"subject\":\"Mathematic's\",\"lesson\":\"Lesson 4\"},{\"subject\":\"Mathematic's\",\"lesson\":\"Lesson 5\"},{\"subject\":\"Mathematic's\",\"lesson\":\"Lesson 6\"},{\"subject\":\"Mathematic's\",\"lesson\":\"Lesson 7\"},{\"subject\":\"Mathematic's\",\"lesson\":\"Lesson 8\"},{\"subject\":\"Mathematic's\",\"lesson\":\"Lesson 9\"},{\"subject\":\"Mathematic's\",\"lesson\":\"Lesson 10\"},{\"subject\":\"Physics\",\"lesson\":\"Lesson 1\"},{\"subject\":\"Physics\",\"lesson\":\"Lesson 2\"},{\"subject\":\"Physics\",\"lesson\":\"Lesson 3\"},{\"subject\":\"Physics\",\"lesson\":\"Lesson 4\"},{\"subject\":\"Physics\",\"lesson\":\"Lesson 5\"},{\"subject\":\"Physics\",\"lesson\":\"Lesson 6\"},{\"subject\":\"Physics\",\"lesson\":\"Lesson 7\"},{\"subject\":\"Physics\",\"lesson\":\"Lesson 8\"},{\"subject\":\"Physics\",\"lesson\":\"Lesson 9\"},{\"subject\":\"Physics\",\"lesson\":\"Lesson 10\"},{\"subject\":\"Chemistry\",\"lesson\":\"Lesson 1\"},{\"subject\":\"Chemistry\",\"lesson\":\"Lesson 2\"},{\"subject\":\"Chemistry\",\"lesson\":\"Lesson 3\"},{\"subject\":\"Chemistry\",\"lesson\":\"Lesson 4\"},{\"subject\":\"Chemistry\",\"lesson\":\"Lesson 5\"},{\"subject\":\"Chemistry\",\"lesson\":\"Lesson 6\"},{\"subject\":\"Chemistry\",\"lesson\":\"Lesson 7\"},{\"subject\":\"Chemistry\",\"lesson\":\"Lesson 8\"},{\"subject\":\"Chemistry\",\"lesson\":\"Lesson 9\"},{\"subject\":\"Chemistry\",\"lesson\":\"Lesson 10\"}]"));}}),
"[project]/app/recall/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RecallPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LessonView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LessonView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$recall$2f$lessons$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/app/recall/lessons.json (json)");
"use client";
;
;
;
const lessons = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$recall$2f$lessons$2e$json__$28$json$29$__["default"];
function RecallPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: lessons.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LessonView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                subject: l.subject,
                lesson: l.lesson
            }, i, false, {
                fileName: "[project]/app/recall/page.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/app/recall/page.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__697a32ea._.js.map