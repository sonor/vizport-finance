(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_c6af29._.js", {

"[project]/app/hooks/useHydrated.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useHydrated": (()=>useHydrated)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
function subscribe() {
    return ()=>{};
}
function useHydrated() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, {
        "useHydrated.useSyncExternalStore": ()=>true
    }["useHydrated.useSyncExternalStore"], {
        "useHydrated.useSyncExternalStore": ()=>false
    }["useHydrated.useSyncExternalStore"]);
}
_s(useHydrated, "FpwL93IKMLJZuQQXefVtWynbBPQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ClientOnly.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ClientOnly": (()=>ClientOnly)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useHydrated$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/hooks/useHydrated.tsx [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
function ClientOnly({ children, fallback = null }) {
    _s();
    const hydrated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useHydrated$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHydrated"])();
    return hydrated ? children : fallback;
}
_s(ClientOnly, "DcbIFLqDXqbUoTQJ5oKebRthWG8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useHydrated$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHydrated"]
    ];
});
_c = ClientOnly;
var _c;
__turbopack_refresh__.register(_c, "ClientOnly");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Widget.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Widget": (()=>Widget)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ClientOnly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/ClientOnly.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$components$2f$Skeleton$2f$WidgetSkeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@lifi/widget/dist/esm/components/Skeleton/WidgetSkeleton.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__App__as__LiFiWidget$3e$__ = __turbopack_import__("[project]/node_modules/@lifi/widget/dist/esm/App.js [app-client] (ecmascript) <export App as LiFiWidget>");
'use client';
;
;
;
function Widget() {
    const config = {
        appearance: 'dark',
        theme: {
            container: {
                boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.08)',
                borderRadius: '16px'
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ClientOnly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ClientOnly"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$components$2f$Skeleton$2f$WidgetSkeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetSkeleton"], {
                config: config
            }, void 0, false, {
                fileName: "[project]/app/components/Widget.tsx",
                lineNumber: 21,
                columnNumber: 29
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$App$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__App__as__LiFiWidget$3e$__["LiFiWidget"], {
                config: config,
                integrator: "nextjs-example"
            }, void 0, false, {
                fileName: "[project]/app/components/Widget.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/components/Widget.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Widget.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Widget;
var _c;
__turbopack_refresh__.register(_c, "Widget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/WidgetEvents.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WidgetEvents": (()=>WidgetEvents)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$hooks$2f$useWidgetEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@lifi/widget/dist/esm/hooks/useWidgetEvents.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$types$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@lifi/widget/dist/esm/types/events.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const WidgetEvents = ()=>{
    _s();
    const widgetEvents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$hooks$2f$useWidgetEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWidgetEvents"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WidgetEvents.useEffect": ()=>{
            const onRouteExecutionStarted = {
                "WidgetEvents.useEffect.onRouteExecutionStarted": (route)=>{
                    console.log('onRouteExecutionStarted fired with route:', route);
                }
            }["WidgetEvents.useEffect.onRouteExecutionStarted"];
            const onRouteExecutionUpdated = {
                "WidgetEvents.useEffect.onRouteExecutionUpdated": (update)=>{
                    console.log('onRouteExecutionUpdated fired with update:', update);
                }
            }["WidgetEvents.useEffect.onRouteExecutionUpdated"];
            const onRouteExecutionCompleted = {
                "WidgetEvents.useEffect.onRouteExecutionCompleted": (route)=>{
                    console.log('onRouteExecutionCompleted fired with route:', route);
                }
            }["WidgetEvents.useEffect.onRouteExecutionCompleted"];
            const onRouteExecutionFailed = {
                "WidgetEvents.useEffect.onRouteExecutionFailed": (update)=>{
                    console.log('onRouteExecutionFailed fired with update:', update);
                }
            }["WidgetEvents.useEffect.onRouteExecutionFailed"];
            const onRouteHighValueLoss = {
                "WidgetEvents.useEffect.onRouteHighValueLoss": (update)=>{
                    console.log('onRouteHighValueLoss fired with update:', update);
                }
            }["WidgetEvents.useEffect.onRouteHighValueLoss"];
            widgetEvents.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$types$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetEvent"].RouteExecutionStarted, onRouteExecutionStarted);
            widgetEvents.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$types$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetEvent"].RouteExecutionUpdated, onRouteExecutionUpdated);
            widgetEvents.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$types$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetEvent"].RouteExecutionCompleted, onRouteExecutionCompleted);
            widgetEvents.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$types$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetEvent"].RouteHighValueLoss, onRouteHighValueLoss);
            widgetEvents.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$types$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WidgetEvent"].RouteExecutionFailed, onRouteExecutionFailed);
            return ({
                "WidgetEvents.useEffect": ()=>{
                    widgetEvents.all.clear();
                }
            })["WidgetEvents.useEffect"];
        }
    }["WidgetEvents.useEffect"], [
        widgetEvents
    ]);
    return null;
};
_s(WidgetEvents, "8d2nouWLKVpbsPodLM7zN3ZRJdo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$lifi$2f$widget$2f$dist$2f$esm$2f$hooks$2f$useWidgetEvents$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWidgetEvents"]
    ];
});
_c = WidgetEvents;
var _c;
__turbopack_refresh__.register(_c, "WidgetEvents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_c6af29._.js.map