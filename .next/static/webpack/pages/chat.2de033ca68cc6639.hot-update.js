"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./pages/chat.js":
/*!***********************!*\
  !*** ./pages/chat.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @supabase/supabase-js */ \"./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar SUPABASE_ANON_KEY = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQwNjM5NywiZXhwIjoxOTU4OTgyMzk3fQ.deRaYuCM01B4t4ghxZ-I69zIfSzPqnZmSu6YDOWOeLk\";\nvar SUPABASE_URL = \"https://xkjbnkskqtdtcnxhzara.supabase.co\";\nvar SupabaseClient = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_4__.createClient)(SUPABASE_URL, SUPABASE_ANON_KEY);\n_c = SupabaseClient;\nfunction ChatPage() {\n    var handleNovaMensagem = /*\r\n    // Usuário\r\n    - Usuário digita no campo textarea\r\n    - Aperta enter para enviar\r\n    - Tem que adicionar o texto na listagem\r\n    \r\n    // Dev\r\n    - [X] Campo criado\r\n    - [X] Vamos usar o onChange usa o useState (ter if pra caso seja enter pra limpar a variavel)\r\n    - [X] Lista de mensagens \r\n    */ function handleNovaMensagem(novaMensagem) {\n        var mensagem = {\n            id: listaDeMensagens.length + 1,\n            de: \"vanessametonini\",\n            texto: novaMensagem\n        };\n        SupabaseClient.from(\"mensagens\").insert([\n            mensagem\n        ]).then(function(param) {\n            var data = param.data;\n            setListaDeMensagens([\n                data[0]\n            ].concat(_toConsumableArray(listaDeMensagens)));\n        });\n        setMensagem(\"\");\n    };\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\"), 2), mensagem1 = ref[0], setMensagem = ref[1];\n    var ref1 = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_2___default().useState([]), 2), listaDeMensagens = ref1[0], setListaDeMensagens = ref1[1];\n    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function() {\n        supabaseClient.from(\"mensagens\").select(\"*\").order(\"id\", {\n            ascending: false\n        }).then(function(param) {\n            var data = param.data;\n            console.log(\"Dados da consulta:\", data);\n            setListaDeMensagens(data);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        styleSheet: {\n            display: \"flex\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.primary[500],\n            backgroundImage: \"url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)\",\n            backgroundRepeat: \"no-repeat\",\n            backgroundSize: \"cover\",\n            backgroundBlendMode: \"multiply\",\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"]\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                display: \"flex\",\n                flexDirection: \"column\",\n                flex: 1,\n                boxShadow: \"0 2px 10px 0 rgb(0 0 0 / 20%)\",\n                borderRadius: \"5px\",\n                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700],\n                height: \"100%\",\n                maxWidth: \"95%\",\n                maxHeight: \"95vh\",\n                padding: \"32px\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                    styleSheet: {\n                        position: \"relative\",\n                        display: \"flex\",\n                        flex: 1,\n                        height: \"80%\",\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600],\n                        flexDirection: \"column\",\n                        borderRadius: \"5px\",\n                        padding: \"16px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MessageList, {\n                            mensagens: listaDeMensagens\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                            as: \"form\",\n                            styleSheet: {\n                                display: \"flex\",\n                                alignItems: \"center\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                                value: mensagem1,\n                                onChange: function(event) {\n                                    var valor = event.target.value;\n                                    setMensagem(valor);\n                                },\n                                onKeyPress: function(event) {\n                                    if (event.key === \"Enter\") {\n                                        event.preventDefault();\n                                        handleNovaMensagem(mensagem1);\n                                    }\n                                },\n                                placeholder: \"Insira sua mensagem aqui...\",\n                                type: \"textarea\",\n                                styleSheet: {\n                                    width: \"100%\",\n                                    border: \"0\",\n                                    resize: \"none\",\n                                    borderRadius: \"5px\",\n                                    padding: \"6px 8px\",\n                                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                                    marginRight: \"12px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[200]\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this));\n};\n_s(ChatPage, \"anz6WyZvd9SdKWJI+QG1XCCDN/E=\");\n_c1 = ChatPage;\nfunction Header() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            styleSheet: {\n                width: \"100%\",\n                marginBottom: \"16px\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"space-between\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    variant: \"heading5\",\n                    children: \"Chat\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                    lineNumber: 152,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    variant: \"tertiary\",\n                    colorVariant: \"neutral\",\n                    label: \"Logout\",\n                    href: \"/\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                    lineNumber: 153,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n            lineNumber: 143,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n}\n_c2 = Header;\nfunction MessageList(props) {\n    var _this = this;\n    console.log(props);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        tag: \"ul\",\n        styleSheet: {\n            overflow: \"scroll\",\n            display: \"flex\",\n            flexDirection: \"column-reverse\",\n            flex: 1,\n            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n            marginBottom: \"16px\"\n        },\n        children: props.mensagens.map(function(mensagem) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                tag: \"li\",\n                styleSheet: {\n                    borderRadius: \"5px\",\n                    padding: \"6px\",\n                    marginBottom: \"12px\",\n                    hover: {\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[700]\n                    }\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Box, {\n                        styleSheet: {\n                            marginBottom: \"8px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                styleSheet: {\n                                    width: \"20px\",\n                                    height: \"20px\",\n                                    borderRadius: \"50%\",\n                                    display: \"inline-block\",\n                                    marginRight: \"8px\"\n                                },\n                                src: \"https://github.com/\".concat(mensagem.de, \".png\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                                lineNumber: 197,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                tag: \"strong\",\n                                children: mensagem.de\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                                lineNumber: 207,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                                styleSheet: {\n                                    fontSize: \"10px\",\n                                    marginLeft: \"8px\",\n                                    color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300]\n                                },\n                                tag: \"span\",\n                                children: new Date().toLocaleDateString()\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                                lineNumber: 208,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                        lineNumber: 192,\n                        columnNumber: 13\n                    }, _this),\n                    mensagem.texto\n                ]\n            }, mensagem.id, true, {\n                fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n                lineNumber: 180,\n                columnNumber: 11\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\paulo\\\\Desktop\\\\Programa\\xe7\\xe3o entre outros\\\\Bases Html,Css e JavaScript\\\\Imers\\xe3o React\\\\pages\\\\chat.js\",\n        lineNumber: 167,\n        columnNumber: 5\n    }, this));\n}\n_c3 = MessageList;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"SupabaseClient\");\n$RefreshReg$(_c1, \"ChatPage\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"MessageList\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNOckM7O2dCQUVKLENBQUM7Ozt3QkFHQ0o7NEJBQ0V5QyxZQUFZO3dCQUNkLENBQUM7OztnQ0FHQ3pDLFNBQUFBLG9FQUFhOzs7OytGQUlYQyxDQUFBQSxxREFBUyxDQUFjO29DQUN2QnVDO2dDQUNGLENBQUM7Ozs7Ozs7a0RBR0Z6RSxJQUFJO2dDQUFDZ0YsR0FBRyxFQUFDLENBQVE7MENBQUVuRSxRQUFRLENBQUNJLEVBQUU7Ozs7Ozs7Z0NBRTdCZ0I7b0NBQ0VvRCxNQUFBQSw2REFBZ0I7b0NBQ2hCQyxVQUFVO29DQUNWekMsS0FBSyxFQUFFeEMsU0FBUyxDQUFDaUM7Z0NBQ25CLENBQUM7Z0NBQ0QwQyxHQUFHLEVBQUMsQ0FBTTswQ0FFVCxHQUFHLENBQUNPOzs7Ozs7Ozs7Ozs7b0JBR1IxRSxRQUFRLENBQUNLLEtBQUs7O2VBdENWTCxRQUFRLENBQUNDLEVBQUU7Ozs7O1FBeUN0QixDQUFDOzs7Ozs7QUFHUCxDQUFDO01BN0RRMkMsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGF0LmpzPzRjYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUZXh0LCBUZXh0RmllbGQsIEltYWdlLCBCdXR0b24gfSBmcm9tIFwiQHNreW5leHVpL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXBwQ29uZmlnIGZyb20gXCIuLi9jb25maWcuanNvblwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3N1cGFiYXNlLWpzXCI7XHJcblxyXG5jb25zdCBTVVBBQkFTRV9BTk9OX0tFWSA9XHJcbiAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKeWIyeGxJam9pWVc1dmJpSXNJbWxoZENJNk1UWTBNelF3TmpNNU55d2laWGh3SWpveE9UVTRPVGd5TXprM2ZRLmRlUmFZdUNNMDFCNHQ0Z2h4Wi1JNjl6SWZTelBxblptU3U2WURPV09lTGtcIjtcclxuY29uc3QgU1VQQUJBU0VfVVJMID0gXCJodHRwczovL3hramJua3NrcXRkdGNueGh6YXJhLnN1cGFiYXNlLmNvXCI7XHJcbmNvbnN0IFN1cGFiYXNlQ2xpZW50ID0gY3JlYXRlQ2xpZW50KFNVUEFCQVNFX1VSTCwgU1VQQUJBU0VfQU5PTl9LRVkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhdFBhZ2UoKSB7XHJcbiAgY29uc3QgW21lbnNhZ2VtLCBzZXRNZW5zYWdlbV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbGlzdGFEZU1lbnNhZ2Vucywgc2V0TGlzdGFEZU1lbnNhZ2Vuc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzdXBhYmFzZUNsaWVudFxyXG4gICAgICAuZnJvbShcIm1lbnNhZ2Vuc1wiKVxyXG4gICAgICAuc2VsZWN0KFwiKlwiKVxyXG4gICAgICAub3JkZXIoXCJpZFwiLCB7IGFzY2VuZGluZzogZmFsc2UgfSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEYWRvcyBkYSBjb25zdWx0YTpcIiwgZGF0YSk7XHJcbiAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvKlxyXG4gICAgLy8gVXN1w6FyaW9cclxuICAgIC0gVXN1w6FyaW8gZGlnaXRhIG5vIGNhbXBvIHRleHRhcmVhXHJcbiAgICAtIEFwZXJ0YSBlbnRlciBwYXJhIGVudmlhclxyXG4gICAgLSBUZW0gcXVlIGFkaWNpb25hciBvIHRleHRvIG5hIGxpc3RhZ2VtXHJcbiAgICBcclxuICAgIC8vIERldlxyXG4gICAgLSBbWF0gQ2FtcG8gY3JpYWRvXHJcbiAgICAtIFtYXSBWYW1vcyB1c2FyIG8gb25DaGFuZ2UgdXNhIG8gdXNlU3RhdGUgKHRlciBpZiBwcmEgY2FzbyBzZWphIGVudGVyIHByYSBsaW1wYXIgYSB2YXJpYXZlbClcclxuICAgIC0gW1hdIExpc3RhIGRlIG1lbnNhZ2VucyBcclxuICAgICovXHJcbiAgZnVuY3Rpb24gaGFuZGxlTm92YU1lbnNhZ2VtKG5vdmFNZW5zYWdlbSkge1xyXG4gICAgY29uc3QgbWVuc2FnZW0gPSB7XHJcbiAgICAgIGlkOiBsaXN0YURlTWVuc2FnZW5zLmxlbmd0aCArIDEsXHJcbiAgICAgIGRlOiBcInZhbmVzc2FtZXRvbmluaVwiLFxyXG4gICAgICB0ZXh0bzogbm92YU1lbnNhZ2VtLFxyXG4gICAgfTtcclxuXHJcbiAgICBTdXBhYmFzZUNsaWVudC5mcm9tKFwibWVuc2FnZW5zXCIpXHJcbiAgICAgIC5pbnNlcnQoW21lbnNhZ2VtXSlcclxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XHJcbiAgICAgICAgc2V0TGlzdGFEZU1lbnNhZ2VucyhbZGF0YVswXSwgLi4ubGlzdGFEZU1lbnNhZ2Vuc10pO1xyXG4gICAgICB9KTtcclxuICAgIHNldE1lbnNhZ2VtKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoaHR0cHM6Ly92aXJ0dWFsYmFja2dyb3VuZHMuc2l0ZS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC90aGUtbWF0cml4LWRpZ2l0YWwtcmFpbi5qcGcpYCxcclxuICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZEJsZW5kTW9kZTogXCJtdWx0aXBseVwiLFxyXG4gICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMDAwXCJdLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgIGJveFNoYWRvdzogXCIwIDJweCAxMHB4IDAgcmdiKDAgMCAwIC8gMjAlKVwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzcwMF0sXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgbWF4V2lkdGg6IFwiOTUlXCIsXHJcbiAgICAgICAgICBtYXhIZWlnaHQ6IFwiOTV2aFwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIzMnB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMTZweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVuc2FnZW5zPXtsaXN0YURlTWVuc2FnZW5zfSAvPlxyXG4gICAgICAgICAgey8qIHtsaXN0YURlTWVuc2FnZW5zLm1hcCgobWVuc2FnZW1BdHVhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bWVuc2FnZW1BdHVhbC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnNhZ2VtQXR1YWwuZGV9OiB7bWVuc2FnZW1BdHVhbC50ZXh0b31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9KX0gKi99XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e21lbnNhZ2VtfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVuc2FnZW0odmFsb3IpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlTm92YU1lbnNhZ2VtKG1lbnNhZ2VtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIHN1YSBtZW5zYWdlbSBhcXVpLi4uXCJcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIwXCIsXHJcbiAgICAgICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI2cHggOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxNnB4XCIsXHJcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJoZWFkaW5nNVwiPkNoYXQ8L1RleHQ+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD1cInRlcnRpYXJ5XCJcclxuICAgICAgICAgIGNvbG9yVmFyaWFudD1cIm5ldXRyYWxcIlxyXG4gICAgICAgICAgbGFiZWw9XCJMb2dvdXRcIlxyXG4gICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTWVzc2FnZUxpc3QocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgdGFnPVwidWxcIlxyXG4gICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW4tcmV2ZXJzZVwiLFxyXG4gICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjE2cHhcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLm1lbnNhZ2Vucy5tYXAoKG1lbnNhZ2VtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgIGtleT17bWVuc2FnZW0uaWR9XHJcbiAgICAgICAgICAgIHRhZz1cImxpXCJcclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjZweFwiLFxyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgaG92ZXI6IHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s3MDBdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7bWVuc2FnZW0uZGV9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VGV4dCB0YWc9XCJzdHJvbmdcIj57bWVuc2FnZW0uZGV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbMzAwXSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0YWc9XCJzcGFuXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7bWVuc2FnZW0udGV4dG99XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJCdXR0b24iLCJSZWFjdCIsImFwcENvbmZpZyIsImNyZWF0ZUNsaWVudCIsIlNVUEFCQVNFX0FOT05fS0VZIiwiU1VQQUJBU0VfVVJMIiwiU3VwYWJhc2VDbGllbnQiLCJDaGF0UGFnZSIsImhhbmRsZU5vdmFNZW5zYWdlbSIsIm5vdmFNZW5zYWdlbSIsIm1lbnNhZ2VtIiwiaWQiLCJsaXN0YURlTWVuc2FnZW5zIiwibGVuZ3RoIiwiZGUiLCJ0ZXh0byIsImZyb20iLCJpbnNlcnQiLCJ0aGVuIiwiZGF0YSIsInNldExpc3RhRGVNZW5zYWdlbnMiLCJzZXRNZW5zYWdlbSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3VwYWJhc2VDbGllbnQiLCJzZWxlY3QiLCJvcmRlciIsImFzY2VuZGluZyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJjb2xvciIsIm5ldXRyYWxzIiwiZmxleERpcmVjdGlvbiIsImZsZXgiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInBhZGRpbmciLCJIZWFkZXIiLCJwb3NpdGlvbiIsIk1lc3NhZ2VMaXN0IiwibWVuc2FnZW5zIiwiYXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ2YWxvciIsInRhcmdldCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIndpZHRoIiwiYm9yZGVyIiwicmVzaXplIiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJ2YXJpYW50IiwiY29sb3JWYXJpYW50IiwibGFiZWwiLCJocmVmIiwicHJvcHMiLCJ0YWciLCJvdmVyZmxvdyIsIm1hcCIsImhvdmVyIiwic3JjIiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chat.js\n");

/***/ })

});