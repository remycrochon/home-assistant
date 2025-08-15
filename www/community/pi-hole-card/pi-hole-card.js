/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $24c52f343453d62d$var$extendStatics = function(d, b) {
    $24c52f343453d62d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $24c52f343453d62d$var$extendStatics(d, b);
};
function $24c52f343453d62d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $24c52f343453d62d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $24c52f343453d62d$export$18ce0697a983be9b = function() {
    $24c52f343453d62d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $24c52f343453d62d$export$18ce0697a983be9b.apply(this, arguments);
};
function $24c52f343453d62d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $24c52f343453d62d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $24c52f343453d62d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $24c52f343453d62d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $24c52f343453d62d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $24c52f343453d62d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $24c52f343453d62d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $24c52f343453d62d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $24c52f343453d62d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $24c52f343453d62d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $24c52f343453d62d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $24c52f343453d62d$export$45d3717a4c69092e(o, m, p);
}
function $24c52f343453d62d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $24c52f343453d62d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $24c52f343453d62d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($24c52f343453d62d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $24c52f343453d62d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $24c52f343453d62d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $24c52f343453d62d$export$10c90e4f7922046c(v) {
    return this instanceof $24c52f343453d62d$export$10c90e4f7922046c ? (this.v = v, this) : new $24c52f343453d62d$export$10c90e4f7922046c(v);
}
function $24c52f343453d62d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $24c52f343453d62d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $24c52f343453d62d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $24c52f343453d62d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $24c52f343453d62d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $24c52f343453d62d$export$19a8beecd37a4c45 === "function" ? $24c52f343453d62d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $24c52f343453d62d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $24c52f343453d62d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $24c52f343453d62d$var$ownKeys = function(o) {
    $24c52f343453d62d$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $24c52f343453d62d$var$ownKeys(o);
};
function $24c52f343453d62d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $24c52f343453d62d$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $24c52f343453d62d$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $24c52f343453d62d$var$__setModuleDefault(result, mod);
    return result;
}
function $24c52f343453d62d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $24c52f343453d62d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $24c52f343453d62d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $24c52f343453d62d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $24c52f343453d62d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $24c52f343453d62d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $24c52f343453d62d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $24c52f343453d62d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $24c52f343453d62d$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $24c52f343453d62d$export$2e2bcd8739ae039 = {
    __extends: $24c52f343453d62d$export$a8ba968b8961cb8a,
    __assign: $24c52f343453d62d$export$18ce0697a983be9b,
    __rest: $24c52f343453d62d$export$3c9a16f847548506,
    __decorate: $24c52f343453d62d$export$29e00dfd3077644b,
    __param: $24c52f343453d62d$export$d5ad3fd78186038f,
    __esDecorate: $24c52f343453d62d$export$3a84e1ae4e97e9b0,
    __runInitializers: $24c52f343453d62d$export$d831c04e792af3d,
    __propKey: $24c52f343453d62d$export$6a2a36740a146cb8,
    __setFunctionName: $24c52f343453d62d$export$d1a06452d3489bc7,
    __metadata: $24c52f343453d62d$export$f1db080c865becb9,
    __awaiter: $24c52f343453d62d$export$1050f835b63b671e,
    __generator: $24c52f343453d62d$export$67ebef60e6f28a6,
    __createBinding: $24c52f343453d62d$export$45d3717a4c69092e,
    __exportStar: $24c52f343453d62d$export$f33643c0debef087,
    __values: $24c52f343453d62d$export$19a8beecd37a4c45,
    __read: $24c52f343453d62d$export$8d051b38c9118094,
    __spread: $24c52f343453d62d$export$afc72e2116322959,
    __spreadArrays: $24c52f343453d62d$export$6388937ca91ccae8,
    __spreadArray: $24c52f343453d62d$export$1216008129fb82ed,
    __await: $24c52f343453d62d$export$10c90e4f7922046c,
    __asyncGenerator: $24c52f343453d62d$export$e427f37a30a4de9b,
    __asyncDelegator: $24c52f343453d62d$export$bbd80228419bb833,
    __asyncValues: $24c52f343453d62d$export$e3b29a3d6162315f,
    __makeTemplateObject: $24c52f343453d62d$export$4fb47efe1390b86f,
    __importStar: $24c52f343453d62d$export$c21735bcef00d192,
    __importDefault: $24c52f343453d62d$export$da59b14a69baef04,
    __classPrivateFieldGet: $24c52f343453d62d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $24c52f343453d62d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $24c52f343453d62d$export$81fdc39f203e4e04,
    __addDisposableResource: $24c52f343453d62d$export$88ac25d8e944e405,
    __disposeResources: $24c52f343453d62d$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $24c52f343453d62d$export$889dfb5d17574b0b
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$h, getOwnPropertyNames: $19fe8e3abedf4df0$var$r, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$b = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $19fe8e3abedf4df0$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $19fe8e3abedf4df0$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$r(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            const e = this.constructor, h = this[t];
            if (i ??= e.getPropertyOptions(t), !((i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(e._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.1.1");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ \t\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$y(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$P(t, i) {
    if (!$f58f44579a4747ac$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$V(t, s);
        if (this.el = $f58f44579a4747ac$var$N.createElement(f, n), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$H : "?" === e[1] ? $f58f44579a4747ac$var$I : "@" === e[1] ? $f58f44579a4747ac$var$L : $f58f44579a4747ac$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$C.currentNode = e;
        let h = $f58f44579a4747ac$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$C.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.O($f58f44579a4747ac$var$l()), this.O($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$S(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$S(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$S(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$e,
    P: $f58f44579a4747ac$var$h,
    A: $f58f44579a4747ac$var$o,
    C: 1,
    L: $f58f44579a4747ac$var$V,
    R: $f58f44579a4747ac$var$M,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    H: $f58f44579a4747ac$var$k,
    N: $f58f44579a4747ac$var$I,
    U: $f58f44579a4747ac$var$L,
    B: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$z
}, $f58f44579a4747ac$var$j = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$j?.($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.3.1");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ab210b2da7b39b9d$var$s = globalThis;
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, $ab210b2da7b39b9d$var$s.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$o = $ab210b2da7b39b9d$var$s.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$o?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($ab210b2da7b39b9d$var$s.litElementVersions ??= []).push("4.2.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




const $81267a1185dd4399$export$57bf213be019eeb0 = (config, section)=>!config.exclude_sections?.includes(section);


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/state_active.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/entity.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/array/literal-includes.ts#L6
 */ /**
 * Creates a type predicate function for determining if an array literal includes a given value
 * @param array - The array to check
 * @returns A type predicate function
 */ const $2dcc326b5e422db7$export$2fff862a498eed4d = (array)=>(searchElement, fromIndex)=>array.includes(searchElement, fromIndex);


const $fa460070836bbf6d$export$f2d101b977a134fd = 'unavailable';
const $fa460070836bbf6d$export$78244dbb77cfa6b6 = 'unknown';
const $fa460070836bbf6d$export$8a4b4288adcd729e = 'on';
const $fa460070836bbf6d$export$173de64b5ad0d5b4 = 'off';
const $fa460070836bbf6d$export$565a86226f245f0b = [
    $fa460070836bbf6d$export$f2d101b977a134fd,
    $fa460070836bbf6d$export$78244dbb77cfa6b6
];
const $fa460070836bbf6d$export$8ccd97e727a09c65 = [
    $fa460070836bbf6d$export$f2d101b977a134fd,
    $fa460070836bbf6d$export$78244dbb77cfa6b6,
    $fa460070836bbf6d$export$173de64b5ad0d5b4
];
const $fa460070836bbf6d$export$dea4173a348a2153 = (0, $2dcc326b5e422db7$export$2fff862a498eed4d)($fa460070836bbf6d$export$565a86226f245f0b);
const $fa460070836bbf6d$export$3473ff6928139ced = (0, $2dcc326b5e422db7$export$2fff862a498eed4d)($fa460070836bbf6d$export$8ccd97e727a09c65);


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_domain.ts
 */ const $e7dc90bb09bfe22d$export$2044bdc9670769ab = (entityId)=>entityId.substring(0, entityId.indexOf('.'));


function $043ab5348dd51237$export$c0e85c3982a3daa6(stateObj, state) {
    const domain = (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(stateObj.entity_id);
    const compareState = state ?? stateObj?.state;
    if ([
        'button',
        'event',
        'input_button',
        'scene'
    ].includes(domain)) return compareState !== (0, $fa460070836bbf6d$export$f2d101b977a134fd);
    if ((0, $fa460070836bbf6d$export$dea4173a348a2153)(compareState)) return false;
    // The "off" check is relevant for most domains, but there are exceptions
    // such as "alert" where "off" is still a somewhat active state and
    // therefore gets a custom color and "idle" is instead the state that
    // matches what most other domains consider inactive.
    if (compareState === (0, $fa460070836bbf6d$export$173de64b5ad0d5b4) && domain !== 'alert') return false;
    // Custom cases
    switch(domain){
        case 'alarm_control_panel':
            return compareState !== 'disarmed';
        case 'alert':
            // "on" and "off" are active, as "off" just means alert was acknowledged but is still active
            return compareState !== 'idle';
        case 'cover':
            return compareState !== 'closed';
        case 'device_tracker':
        case 'person':
            return compareState !== 'not_home';
        case 'lawn_mower':
            return [
                'mowing',
                'error'
            ].includes(compareState);
        case 'lock':
            return compareState !== 'locked';
        case 'media_player':
            return compareState !== 'standby';
        case 'vacuum':
            return ![
                'idle',
                'docked',
                'paused'
            ].includes(compareState);
        case 'valve':
            return compareState !== 'closed';
        case 'plant':
            return compareState === 'problem';
        case 'group':
            return [
                'on',
                'home',
                'open',
                'locked',
                'problem'
            ].includes(compareState);
        case 'timer':
            return compareState === 'active';
        case 'camera':
            return compareState === 'streaming';
    }
    return true;
}



/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/dom/fire_event.ts
 */ // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
const $9c83ab07519e6203$export$43835e9acf248a15 = (node, type, detail, options)=>{
    options = options || {};
    // @ts-ignore
    detail = detail ?? {};
    const event = new Event(type, {
        bubbles: options.bubbles ?? true,
        cancelable: Boolean(options.cancelable),
        composed: options.composed ?? true
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/common/directives/action-handler-directive.ts
 */ 
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}




const $69fb27e443983086$var$getActionHandler = ()=>{
    const body = document.body;
    if (body.querySelector('action-handler')) return body.querySelector('action-handler');
    const actionhandler = document.createElement('action-handler');
    body.appendChild(actionhandler);
    return actionhandler;
};
const $69fb27e443983086$export$520aee61eb0a2770 = (element, options)=>{
    const actionhandler = $69fb27e443983086$var$getActionHandler();
    if (!actionhandler) return;
    actionhandler.bind(element, options);
};
const $69fb27e443983086$export$8a44987212de21b = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    update(part, [options]) {
        $69fb27e443983086$export$520aee61eb0a2770(part.element, options);
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(_options) {}
});


const $57febad8376708f1$export$8a44987212de21b = (config)=>{
    const isActionEnabled = (actionConfig)=>actionConfig?.action !== 'none' && actionConfig?.action !== undefined;
    return (0, $69fb27e443983086$export$8a44987212de21b)({
        hasDoubleClick: isActionEnabled(config?.double_tap_action),
        hasHold: isActionEnabled(config?.hold_action)
    });
};
const $57febad8376708f1$export$3d3654ce4577c53d = (element, sectionConfig, entity)=>{
    return {
        /**
     * Handles an action event by creating and dispatching a 'hass-action' custom event.
     * The event contains the entity configuration and the action type (tap, double_tap, hold).
     *
     * @param {ActionHandlerEvent} ev - The action handler event to process
     */ handleEvent: (ev)=>{
            // Extract action from event detail
            const action = ev.detail?.action;
            if (!action) return;
            // Create configuration object for the action
            const config = {
                entity: entity.entity_id,
                ...sectionConfig || {}
            };
            // @ts-ignore
            (0, $9c83ab07519e6203$export$43835e9acf248a15)(element, 'hass-action', {
                config: config,
                action: action
            });
        }
    };
};
const $57febad8376708f1$export$b6152c9de20cf398 = (element, actionConfigs)=>{
    return {
        /**
     * Handles an action event by creating and dispatching a 'hass-action' custom event.
     * The event contains the entity configuration and the action type (tap, double_tap, hold).
     *
     * @param {ActionHandlerEvent} ev - The action handler event to process
     */ handleEvent: (ev)=>{
            // Extract action from event detail
            const action = ev.detail?.action;
            if (!action) return;
            // Process each action configuration
            actionConfigs.forEach((config)=>{
                // @ts-ignore
                (0, $9c83ab07519e6203$export$43835e9acf248a15)(element, 'hass-action', {
                    config: config,
                    action: action
                });
            });
        }
    };
};



const $0cafd9360b3c4d75$export$1ca1ec8b29a4ce27 = (element, config, setup)=>{
    const infoCount = setup.holes.reduce((acc, h)=>{
        if (h.info_message_count && !Number.isNaN(Number(h.info_message_count.state))) return acc + Number(h.info_message_count.state);
        return acc;
    }, 0);
    // Create ActionConfigParams for each Pi-hole
    const actionConfigs = setup.holes.map((h)=>{
        // If user has custom badge config, apply it to all Pi-holes
        if (config.badge) return {
            entity: h.info_message_count?.entity_id ?? h.status?.entity_id ?? h.device_id,
            ...config.badge
        };
        // Use config.badge if provided, otherwise create custom actions
        const baseConfig = {
            tap_action: {
                action: 'more-info'
            },
            hold_action: {
                action: 'more-info'
            },
            double_tap_action: {
                action: 'more-info'
            }
        };
        // Only setup default actions if the required entities exist
        if (h.purge_diagnosis_messages && h.info_message_count) {
            const purgeEntity = h.purge_diagnosis_messages;
            const infoEntity = h.info_message_count;
            return {
                entity: infoEntity.entity_id,
                ...baseConfig,
                // Override tap_action for default behavior when info messages exist
                tap_action: infoCount > 0 ? {
                    action: 'call-service',
                    perform_action: 'button.press',
                    target: {
                        entity_id: purgeEntity.entity_id
                    }
                } : {
                    action: 'more-info'
                }
            };
        }
        // For Pi-holes without required entities, just use the base config
        return {
            entity: h.status?.entity_id ?? h.device_id,
            ...baseConfig
        };
    });
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div
    class="badge"
    @action=${(0, $57febad8376708f1$export$b6152c9de20cf398)(element, actionConfigs)}
    .actionHandler=${(0, $57febad8376708f1$export$8a44987212de21b)(actionConfigs[0])}
  >
    ${infoCount === 0 ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-icon icon="${config.icon ?? 'mdi:pi-hole'}"></ha-icon>` : (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="warning-badge">${infoCount}</div>`}
  </div>`;
};



const $409574f4dbacb1f1$export$c18c768bbe3223b7 = (hass, entity, className = '')=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<state-display
    .hass=${hass}
    .stateObj=${entity}
    class=${className}
  ></state-display>`;


const $a2b1c365027138cb$export$dfb737c0873de058 = (element, setup, hass, config)=>{
    if (!(0, $81267a1185dd4399$export$57bf213be019eeb0)(config, 'header')) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    const primary = setup.holes[0];
    const activeCount = setup.holes.map((h)=>h.status).filter((status)=>status !== undefined && (0, $043ab5348dd51237$export$c0e85c3982a3daa6)(status, status?.state)).length;
    const mixedStatus = activeCount > 0 && activeCount < setup.holes.length;
    // Check if we should display the remaining time
    const hasRemainingTime = primary.remaining_until_blocking_mode && primary.remaining_until_blocking_mode.state !== '0' && primary.remaining_until_blocking_mode.state !== 'unavailable' && primary.remaining_until_blocking_mode.state !== 'unknown';
    // Get status color based on active count and mixed status
    const getStatusColor = ()=>{
        if (mixedStatus) return 'var(--warning-color, orange)';
        else if (activeCount > 0) return 'var(--success-color, green)';
        else return 'var(--error-color, red)';
    };
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div class="card-header">
      <div class="name">
        ${(0, $0cafd9360b3c4d75$export$1ca1ec8b29a4ce27)(element, config, setup)}${config.title ?? 'Pi-hole'}
        ${setup.holes.length > 1 ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<span class="multi-status"
              >(${activeCount}/${setup.holes.length})</span
            >` : ''}
      </div>
      <div style="color: ${getStatusColor()}">
        <ha-icon
          icon="${activeCount > 0 ? 'mdi:check-circle' : 'mdi:close-circle'}"
        ></ha-icon>
        ${mixedStatus ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`Partial` : (0, $409574f4dbacb1f1$export$c18c768bbe3223b7)(hass, primary.status)}
        ${activeCount <= 0 && hasRemainingTime ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`${(0, $409574f4dbacb1f1$export$c18c768bbe3223b7)(hass, primary.remaining_until_blocking_mode, 'remaining-time')}` : ''}
      </div>
    </div>
  `;
};


const $313ad4784c1ca11f$export$7f14135d73b0f07a = (uniqueClientsCount)=>[
        [
            {
                sensorKey: 'dns_queries_today',
                title: 'card.stats.total_queries',
                footer: {
                    key: 'card.stats.active_clients',
                    search: '{number}',
                    replace: uniqueClientsCount
                },
                className: 'queries-box',
                icon: 'mdi:earth'
            },
            {
                sensorKey: 'ads_blocked_today',
                title: 'card.stats.queries_blocked',
                footer: 'card.stats.list_blocked_queries',
                className: 'blocked-box',
                icon: 'mdi:hand-back-right'
            }
        ],
        [
            {
                sensorKey: 'ads_percentage_blocked_today',
                title: 'card.stats.percentage_blocked',
                footer: 'card.stats.list_all_queries',
                className: 'percentage-box',
                icon: 'mdi:chart-pie'
            },
            {
                sensorKey: 'domains_blocked',
                title: 'card.stats.domains_on_lists',
                footer: 'card.stats.manage_lists',
                className: 'domains-box',
                icon: 'mdi:format-list-bulleted'
            }
        ]
    ];





/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/number/format_number.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/translation.ts
 */ var $5bb8a72e6271facd$export$27bce688931fdfcc = /*#__PURE__*/ function(NumberFormat) {
    NumberFormat["language"] = "language";
    NumberFormat["system"] = "system";
    NumberFormat["comma_decimal"] = "comma_decimal";
    NumberFormat["decimal_comma"] = "decimal_comma";
    NumberFormat["space_comma"] = "space_comma";
    NumberFormat["none"] = "none";
    return NumberFormat;
}({});


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/number/round.ts
 */ const $4531cfec1f90a7c8$export$2077e0241d6afd3c = (value, precision = 2)=>Math.round(value * 10 ** precision) / 10 ** precision;


const $155ab9b902a30933$export$5e25e39d6a8c0c11 = (localeOptions)=>{
    switch(localeOptions.number_format){
        case (0, $5bb8a72e6271facd$export$27bce688931fdfcc).comma_decimal:
            return [
                'en-US',
                'en'
            ]; // Use United States with fallback to English formatting 1,234,567.89
        case (0, $5bb8a72e6271facd$export$27bce688931fdfcc).decimal_comma:
            return [
                'de',
                'es',
                'it'
            ]; // Use German with fallback to Spanish then Italian formatting 1.234.567,89
        case (0, $5bb8a72e6271facd$export$27bce688931fdfcc).space_comma:
            return [
                'fr',
                'sv',
                'cs'
            ]; // Use French with fallback to Swedish and Czech formatting 1 234 567,89
        case (0, $5bb8a72e6271facd$export$27bce688931fdfcc).system:
            return undefined;
        default:
            return localeOptions.language;
    }
};
const $155ab9b902a30933$export$f5dd818bff069720 = (num, localeOptions, options)=>{
    const locale = localeOptions ? $155ab9b902a30933$export$5e25e39d6a8c0c11(localeOptions) : undefined;
    // Polyfill for Number.isNaN, which is more reliable than the global isNaN()
    Number.isNaN = Number.isNaN || function isNaN(input) {
        return typeof input === 'number' && isNaN(input);
    };
    if (localeOptions?.number_format !== (0, $5bb8a72e6271facd$export$27bce688931fdfcc).none && !Number.isNaN(Number(num))) return new Intl.NumberFormat(locale, $155ab9b902a30933$export$d5b7427e28c21e7b(num, options)).format(Number(num));
    if (!Number.isNaN(Number(num)) && num !== '' && localeOptions?.number_format === (0, $5bb8a72e6271facd$export$27bce688931fdfcc).none) // If NumberFormat is none, use en-US format without grouping.
    return new Intl.NumberFormat('en-US', $155ab9b902a30933$export$d5b7427e28c21e7b(num, {
        ...options,
        useGrouping: false
    })).format(Number(num));
    if (typeof num === 'string') return num;
    return `${(0, $4531cfec1f90a7c8$export$2077e0241d6afd3c)(num, options?.maximumFractionDigits).toString()}${options?.style === 'currency' ? ` ${options.currency}` : ''}`;
};
const $155ab9b902a30933$export$d5b7427e28c21e7b = (num, options)=>{
    const defaultOptions = {
        maximumFractionDigits: 2,
        ...options
    };
    if (typeof num !== 'string') return defaultOptions;
    // Keep decimal trailing zeros if they are present in a string numeric value
    if (!options || options.minimumFractionDigits === undefined && options.maximumFractionDigits === undefined) {
        const digits = num.indexOf('.') > -1 ? num.split('.')[1].length : 0;
        defaultOptions.minimumFractionDigits = digits;
        defaultOptions.maximumFractionDigits = digits;
    }
    return defaultOptions;
};


var $9a28a77a5af263d9$exports = {};
$9a28a77a5af263d9$exports = JSON.parse("{\"card\":{\"stats\":{\"total_queries\":\"Total queries\",\"active_clients\":\"{number} active clients\",\"queries_blocked\":\"Queries Blocked\",\"list_blocked_queries\":\"List blocked queries\",\"percentage_blocked\":\"Percentage Blocked\",\"list_all_queries\":\"List all queries\",\"domains_on_lists\":\"Domains on Lists\",\"manage_lists\":\"Manage lists\"},\"sections\":{\"pause\":\"Pause Ad-Blocking\",\"switches\":\"Switches\",\"actions\":\"Actions\"},\"units\":{\"seconds\":\"seconds\"}}}");


var $ac00f57d502abb29$exports = {};
$ac00f57d502abb29$exports = JSON.parse("{\"card\":{\"stats\":{\"total_queries\":\"Peticiones totales\",\"active_clients\":\"{number} clientes activos\",\"queries_blocked\":\"Peticiones bloqueadas\",\"list_blocked_queries\":\"Listar peticiones bloqueadas\",\"percentage_blocked\":\"Porcentaje bloqueos\",\"list_all_queries\":\"Listar todas las peticiones\",\"domains_on_lists\":\"Dominios bloqueados\",\"manage_lists\":\"Gestionar listas\"},\"sections\":{\"pause\":\"Pausar Bloqueo de Anuncios\",\"switches\":\"Interruptores\",\"actions\":\"Acciones\"},\"units\":{\"seconds\":\"segundos\"}}}");


// Import other languages as needed above this line and in order
// Define supported languages
const $623ffaa3e77fea87$var$languages = {
    en: $9a28a77a5af263d9$exports,
    es: $ac00f57d502abb29$exports
};
const $623ffaa3e77fea87$export$b3bd0bc58e36cd63 = (hass, key, search = '', replace = '')=>{
    let translated;
    translated = $623ffaa3e77fea87$var$getNestedTranslation($623ffaa3e77fea87$var$languages[hass.language], key) ?? $623ffaa3e77fea87$var$getNestedTranslation($623ffaa3e77fea87$var$languages.en, key) ?? key;
    // Replace placeholders
    if (search !== '' && replace !== '') translated = translated.replace(search, replace);
    return translated;
};
// Helper function to safely navigate nested objects
function $623ffaa3e77fea87$var$getNestedTranslation(obj, path) {
    if (!obj) return undefined;
    const keys = path.split('.');
    let result = obj;
    for (const key of keys){
        if (result === undefined || result === null || typeof result !== 'object') return undefined;
        result = result[key];
    }
    return typeof result === 'string' ? result : undefined;
}



const $1f2c0e8d95d0a59b$export$c26b385db31056a8 = (element, hass, entity, sectionConfig, statBoxConfig)=>{
    if (!entity) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    const uom = entity.attributes?.unit_of_measurement === '%' ? '%' : '';
    const value = (0, $155ab9b902a30933$export$f5dd818bff069720)(entity.state, undefined, {
        maximumFractionDigits: 1
    });
    const footer = typeof statBoxConfig.footer === 'string' ? (0, $623ffaa3e77fea87$export$b3bd0bc58e36cd63)(hass, statBoxConfig.footer) : (0, $623ffaa3e77fea87$export$b3bd0bc58e36cd63)(hass, statBoxConfig.footer.key, statBoxConfig.footer.search, statBoxConfig.footer.replace);
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div
      class="stat-box ${statBoxConfig.className}"
      @action=${(0, $57febad8376708f1$export$3d3654ce4577c53d)(element, sectionConfig, entity)}
      .actionHandler=${(0, $57febad8376708f1$export$8a44987212de21b)(sectionConfig)}
    >
      <div class="stat-icon">
        <ha-icon icon="${statBoxConfig.icon}"></ha-icon>
      </div>
      <div class="stat-content">
        <div class="stat-header">${(0, $623ffaa3e77fea87$export$b3bd0bc58e36cd63)(hass, statBoxConfig.title)}</div>
        <div class="stat-value">${value}${uom}</div>
      </div>
      <div class="stat-footer">
        <span>${footer}</span>
        <ha-icon icon="mdi:arrow-right-circle-outline"></ha-icon>
      </div>
    </div>
  `;
};


const $b0d8503ad71f8731$export$ceaadd68dd4c5e98 = (element, hass, device, config)=>{
    if (!(0, $81267a1185dd4399$export$57bf213be019eeb0)(config, 'statistics')) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    // Get the unique clients count for the configuration
    const uniqueClientsCount = device.dns_unique_clients?.state ?? '0';
    // Get the stats configuration with the unique clients count
    const statConfigs = (0, $313ad4784c1ca11f$export$7f14135d73b0f07a)(uniqueClientsCount);
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div class="dashboard-stats">
      ${statConfigs.map((group)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
          <div class="stat-group">
            ${group.map((statConfig)=>(0, $1f2c0e8d95d0a59b$export$c26b385db31056a8)(element, hass, device[statConfig.sensorKey], config.stats, statConfig))}
          </div>
        `)}
    </div>
  `;
};


const $e67ba06cac005a46$export$9c903d35b97d0190 = (config, section)=>!!config.collapsed_sections?.includes(section);





/**
 * Toggles the visibility of a section
 * @param e - The click event
 * @param selector - The CSS selector for the section to toggle
 */ const $993360189f76a862$export$b7c305685fc8cb26 = (e, selector)=>{
    const icon = e.currentTarget.querySelector('.caret-icon');
    const section = e.currentTarget.parentElement?.querySelector(selector);
    if (section) {
        const isHidden = section.classList.toggle('hidden');
        if (icon) icon.setAttribute('icon', isHidden ? 'mdi:chevron-right' : 'mdi:chevron-down');
    }
};




/**
 * Provide some default icons for the Pi-hole actions
 * @param entity
 * @returns
 */ const $18c1412eb38d120e$var$actionIcon = (entity)=>{
    const icon = entity?.attributes.icon;
    if (icon) return icon;
    switch(entity.translation_key){
        case 'action_flush_arp':
            return 'mdi:broom';
        case 'action_flush_logs':
            return 'mdi:file-refresh-outline';
        case 'action_gravity':
            return 'mdi:earth';
        case 'action_restartdns':
            return 'mdi:restart';
        case 'action_refresh_data':
            return 'mdi:refresh';
        default:
            return 'mdi:button-pointer';
    }
};
const $18c1412eb38d120e$export$669170fc67fdedb7 = (element, config, entity, buttonClass)=>{
    const icon = $18c1412eb38d120e$var$actionIcon(entity);
    const label = entity?.attributes.friendly_name.replace('Pihole- ', '').replace(' the ', ' ');
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <mwc-button
      class="${buttonClass}"
      @action=${(0, $57febad8376708f1$export$3d3654ce4577c53d)(element, config, entity)}
      .actionHandler=${(0, $57febad8376708f1$export$8a44987212de21b)(config)}
    >
      <ha-icon icon="${icon}"></ha-icon>
      ${label}
    </mwc-button>
  `;
};



/**
 * Converts a number of seconds into a string formatted as "HH:MM:SS".
 *
 * @param totalSeconds - The total number of seconds to convert.
 * @returns A string representing the time in "HH:MM:SS" format, with each unit zero-padded to two digits.
 *
 * @example
 * ```typescript
 * formatSecondsToHHMMSS(3661); // Returns "01:01:01"
 * ```
 */ const $3a2fe8ac0aec50d1$export$7f8cebb87518d95 = (totalSeconds)=>{
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor(totalSeconds % 3600 / 60);
    const seconds = totalSeconds % 60;
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    const paddedSeconds = String(seconds).padStart(2, '0');
    return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
};
const $3a2fe8ac0aec50d1$export$24f99e1414c21927 = (input)=>{
    if (typeof input === 'number') return input;
    const str = input.toString().trim();
    // Check if it's a plain number string
    if (/^\d+$/.test(str)) return parseInt(str, 10);
    // Handle complex format like "4h:20m:69s"
    if (str.includes(':')) {
        const parts = str.split(':');
        let totalSeconds = 0;
        for (const part of parts){
            const match = part.match(/^(\d+)([hms]?)$/);
            if (match && match[1]) {
                const value = parseInt(match[1], 10);
                const unit = match[2] || 's'; // default to seconds if no unit
                switch(unit){
                    case 'h':
                        totalSeconds += value * 3600;
                        break;
                    case 'm':
                        totalSeconds += value * 60;
                        break;
                    case 's':
                        totalSeconds += value;
                        break;
                }
            }
        }
        return totalSeconds;
    }
    // Handle simple format like "10s", "5m", "1h"
    const match = str.match(/^(\d+)([hms])$/);
    if (match && match[1] && match[2]) {
        const value = parseInt(match[1], 10);
        const unit = match[2];
        switch(unit){
            case 'h':
                return value * 3600;
            case 'm':
                return value * 60;
            case 's':
                return value;
        }
    }
    // If we get here, the input is invalid
    return 0;
};
const $3a2fe8ac0aec50d1$export$12fa006f8c81adb2 = (seconds)=>{
    if (seconds === 0) return '0 seconds';
    // Hours - only if it divides evenly
    if (seconds >= 3600 && seconds % 3600 === 0) {
        const hours = seconds / 3600;
        return hours === 1 ? '1 hour' : `${hours} hours`;
    }
    // Minutes - only if it divides evenly AND less than an hour, OR if it divides evenly and is a reasonable number of minutes
    if (seconds >= 60 && seconds % 60 === 0 && seconds < 3600) {
        const minutes = seconds / 60;
        return minutes === 1 ? '1 minute' : `${minutes} minutes`;
    }
    // Seconds - for everything else (including times that are many minutes but not whole hours)
    return seconds === 1 ? '1 second' : `${seconds} seconds`;
};





const $96d0f9845402cf42$export$5635d71bf4c61e2c = (hass, setup, seconds)=>{
    return ()=>{
        const domain = 'pi_hole_v6';
        const service = 'disable';
        setup.holes.forEach((hole)=>{
            hass.callService(domain, service, {
                device_id: hole.device_id,
                duration: (0, $3a2fe8ac0aec50d1$export$7f8cebb87518d95)(seconds)
            });
        });
    };
};




const $7a21f7a279e18689$export$229c72e5fdee233b = (hass, setup, config)=>{
    if (!(0, $81267a1185dd4399$export$57bf213be019eeb0)(config, 'pause')) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    const pauseCollapsed = (0, $e67ba06cac005a46$export$9c903d35b97d0190)(config, 'pause');
    const pauseDuration = config.pause_durations ?? [
        60,
        300,
        900
    ];
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="collapsible-section">
    <div
      class="section-header"
      @click=${(e)=>(0, $993360189f76a862$export$b7c305685fc8cb26)(e, '.pause')}
    >
      <span>${(0, $623ffaa3e77fea87$export$b3bd0bc58e36cd63)(hass, 'card.sections.pause')}</span>
      <ha-icon
        class="caret-icon"
        icon="mdi:chevron-${pauseCollapsed ? 'right' : 'down'}"
      ></ha-icon>
    </div>
    <div class="pause ${pauseCollapsed ? 'hidden' : ''}">
      ${pauseDuration.map((duration)=>{
        const seconds = (0, $3a2fe8ac0aec50d1$export$24f99e1414c21927)(duration);
        const displayText = (0, $3a2fe8ac0aec50d1$export$12fa006f8c81adb2)(seconds);
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<mwc-button @click=${(0, $96d0f9845402cf42$export$5635d71bf4c61e2c)(hass, setup, seconds)}
          >${displayText}</mwc-button
        >`;
    })}
    </div>
  </div>`;
};



const $6cbf4e557bc1fbf1$export$535a09426ee2ea59 = (hass, entity, className)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<state-card-content
    .hass=${hass}
    .stateObj=${entity}
    class=${className}
  ></state-card-content>`;


/**
 * Renders the controls section for the Pi-hole card, including collapsible sections
 * for switches and actions. Each section can be toggled open or closed, and displays
 * the relevant controls based on the provided configuration and device state.
 *
 * @param element - The root HTMLElement for the card.
 * @param hass - The Home Assistant instance.
 * @param device - The PiHoleDevice object containing switches and controls.
 * @param config - The configuration object for the card, including section visibility and entity order.
 * @returns A lit-html TemplateResult representing the controls UI, or `nothing` if the section is hidden.
 */ const $9369c7e3c6702a0b$var$controls = (element, hass, device, config)=>{
    const sectionConfig = config.controls ?? {
        tap_action: {
            action: 'toggle'
        },
        hold_action: {
            action: 'more-info'
        },
        double_tap_action: {
            action: 'more-info'
        }
    };
    const switchCollapsed = (0, $e67ba06cac005a46$export$9c903d35b97d0190)(config, 'switches');
    const actionsCollapsed = (0, $e67ba06cac005a46$export$9c903d35b97d0190)(config, 'actions');
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`${(0, $81267a1185dd4399$export$57bf213be019eeb0)(config, 'switches') ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="collapsible-section">
        <div
          class="section-header"
          @click=${(e)=>(0, $993360189f76a862$export$b7c305685fc8cb26)(e, '.switches')}
        >
          <span>${(0, $623ffaa3e77fea87$export$b3bd0bc58e36cd63)(hass, 'card.sections.switches')}</span>
          <ha-icon
            class="caret-icon"
            icon="mdi:chevron-${switchCollapsed ? 'right' : 'down'}"
          ></ha-icon>
        </div>
        <div
          class="${[
        'switches',
        switchCollapsed ? 'hidden' : undefined,
        config.switch_spacing
    ].filter((s)=>s).join(' ')}"
        >
          ${device.switches.map((piSwitch)=>{
        const orderExists = config.entity_order?.includes(piSwitch.entity_id);
        if (orderExists) {
            const orderIndex = config.entity_order.indexOf(piSwitch.entity_id);
            const nextItem = config.entity_order[orderIndex + 1];
            if (nextItem === 'divider') return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`${(0, $6cbf4e557bc1fbf1$export$535a09426ee2ea59)(hass, piSwitch)}
                  <div class="divider"></div>`;
        }
        return (0, $6cbf4e557bc1fbf1$export$535a09426ee2ea59)(hass, piSwitch);
    })}
        </div>
      </div>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
  ${(0, $81267a1185dd4399$export$57bf213be019eeb0)(config, 'actions') ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="collapsible-section">
        <div
          class="section-header"
          @click=${(e)=>(0, $993360189f76a862$export$b7c305685fc8cb26)(e, '.actions')}
        >
          <span>${(0, $623ffaa3e77fea87$export$b3bd0bc58e36cd63)(hass, 'card.sections.actions')}</span>
          <ha-icon
            class="caret-icon"
            icon="mdi:chevron-${actionsCollapsed ? 'right' : 'down'}"
          ></ha-icon>
        </div>
        <div class="actions ${actionsCollapsed ? 'hidden' : ''}">
          ${device.controls.map((control)=>{
        return (0, $18c1412eb38d120e$export$669170fc67fdedb7)(element, sectionConfig, control, '');
    })}
        </div>
      </div>
    </div>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}`;
};
const $9369c7e3c6702a0b$export$85691f7dcbc38c10 = (element, hass, setup, device, config)=>{
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div>
      ${(0, $7a21f7a279e18689$export$229c72e5fdee233b)(hass, setup, config)}${$9369c7e3c6702a0b$var$controls(element, hass, device, config)}
    </div>
  `;
};







const $ee4ad1f51fb3efca$export$1eed52aab73fe927 = (element, hass, device)=>{
    const clickConfig = {
        tap_action: {
            action: 'toggle'
        }
    };
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="refresh-time">
    ${device.action_refresh_data ? (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-icon
          icon="mdi:refresh"
          @action=${(0, $57febad8376708f1$export$3d3654ce4577c53d)(element, clickConfig, device.action_refresh_data)}
          .actionHandler=${(0, $57febad8376708f1$export$8a44987212de21b)(clickConfig)}
        ></ha-icon>` : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
    ${device.latest_data_refresh ? (0, $409574f4dbacb1f1$export$c18c768bbe3223b7)(hass, device.latest_data_refresh) : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
  </div>`;
};



const $4227987aac09cd77$export$efbe1467c55dee42 = (entity)=>{
    // super hacky - but too lazy to hardcode the names
    const label = entity.attributes.friendly_name.replace(' update', '');
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div class="version-item">
      <span class="version-label">${label}</span>
      <a href="${entity.attributes.release_url}" target="_blank">
        <span>${entity.attributes.installed_version}</span>
      </a>
    </div>
  `;
};


const $49bfcbfa0b6e0050$export$7c88f7b87167f6 = (element, hass, config, device)=>{
    if (!(0, $81267a1185dd4399$export$57bf213be019eeb0)(config, 'footer')) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div class="version-info">
      ${device.updates.map((update)=>{
        return (0, $4227987aac09cd77$export$efbe1467c55dee42)(update);
    })}
    </div>

    <!-- Refesh Time -->
    ${(0, $ee4ad1f51fb3efca$export$1eed52aab73fe927)(element, hass, device)}`;
};







const $0f7838a7e387da95$export$7c3e21e9e0c181da = (hass, element, config, entity)=>{
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div
      class="additional-stat"
      @action=${(0, $57febad8376708f1$export$3d3654ce4577c53d)(element, config, entity)}
      .actionHandler=${(0, $57febad8376708f1$export$8a44987212de21b)(config)}
    >
      <ha-state-icon .hass=${hass} .stateObj=${entity}></ha-state-icon>
      ${(0, $409574f4dbacb1f1$export$c18c768bbe3223b7)(hass, entity)}
    </div>
  `;
};


const $f72adbed169bb149$export$f7d6b8c683630484 = (element, hass, device, config)=>{
    if (!(0, $81267a1185dd4399$export$57bf213be019eeb0)(config, 'sensors')) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <div class="additional-stats">
      ${device.sensors.map((sensor)=>{
        return (0, $0f7838a7e387da95$export$7c3e21e9e0c181da)(hass, element, config.info, sensor);
    })}
    </div>
  `;
};


const $f5cecba293939c1a$export$569cbbd0d9d55043 = (element, hass, setup, config)=>{
    const primary = setup.holes[0];
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <ha-card>
      ${(0, $a2b1c365027138cb$export$dfb737c0873de058)(element, setup, hass, config)}
      <div class="card-content">
        ${(0, $b0d8503ad71f8731$export$ceaadd68dd4c5e98)(element, hass, primary, config)}
        ${(0, $f72adbed169bb149$export$f7d6b8c683630484)(element, hass, primary, config)}
      </div>
      ${(0, $9369c7e3c6702a0b$export$85691f7dcbc38c10)(element, hass, setup, primary, config)}
      ${(0, $49bfcbfa0b6e0050$export$7c88f7b87167f6)(element, hass, config, primary)}
    </ha-card>
  `;
};


const $19442883b2a008d3$export$df7b058ef38e4826 = async (hass)=>{
    const registries = await hass.callWS({
        type: 'config_entries/get',
        domain: 'pi_hole_v6'
    });
    const registry = registries[0];
    if (!registry) return undefined;
    const devices = Object.values(hass.devices).filter((device)=>device.config_entries.includes(registry.entry_id));
    return devices[0];
};


const $28ca676359267166$export$ce4e438906f3b684 = (config, entities)=>{
    if (config.entity_order?.length) {
        const entityOrderMap = new Map();
        // Create a map with entity_id as key and its position in entity_order as value
        config.entity_order.forEach((entityId, index)=>{
            entityOrderMap.set(entityId, index);
        });
        // Sort entities based on their position in entity_order
        // Entities not in entity_order will have undefined position and will be placed at the end
        entities = entities.sort((a, b)=>{
            const aPosition = entityOrderMap.has(a.entity_id) ? entityOrderMap.get(a.entity_id) : Number.MAX_SAFE_INTEGER;
            const bPosition = entityOrderMap.has(b.entity_id) ? entityOrderMap.get(b.entity_id) : Number.MAX_SAFE_INTEGER;
            return (aPosition ?? Number.MAX_SAFE_INTEGER) - (bPosition ?? Number.MAX_SAFE_INTEGER);
        });
    }
    return entities;
};


const $7aa94e0bc82e2c26$export$51bb3e4a8dd2f2ff = (entity, device)=>{
    const keyToPropertyMap = {
        dns_queries_today: 'dns_queries_today',
        domains_blocked: 'domains_blocked',
        ads_percentage_blocked_today: 'ads_percentage_blocked_today',
        ads_blocked_today: 'ads_blocked_today',
        dns_unique_clients: 'dns_unique_clients',
        remaining_until_blocking_mode: 'remaining_until_blocking_mode',
        action_refresh_data: 'action_refresh_data',
        latest_data_refresh: 'latest_data_refresh',
        ftl_info_message_count: 'info_message_count',
        status: 'status',
        action_ftl_purge_diagnosis_messages: 'purge_diagnosis_messages'
    };
    const key = entity.translation_key;
    if (key && key in keyToPropertyMap) {
        // @ts-ignore
        device[keyToPropertyMap[key]] = entity;
        return true;
    }
    return false;
};


const $25a2e2943b63f930$export$2448ebcf2d0e9554 = (entity, config)=>{
    if (!config.exclude_entities?.length) return false;
    return config.exclude_entities.some((entityId)=>entity.entity_id === entityId);
};




const $5bd3a7e1f19a6de3$export$30c823bc834d6ab4 = (hass, deviceId)=>hass.devices[deviceId];


const $e24dedcf9e480b2d$export$50fdfeece43146fd = (hass, entityId, fakeState = false)=>{
    if (!entityId) return undefined;
    const state = hass.states[entityId] ?? (fakeState ? {
        entity_id: entityId,
        state: 'off',
        attributes: {}
    } : undefined);
    if (!state) return undefined;
    return {
        state: state.state,
        attributes: state.attributes,
        entity_id: state.entity_id
    };
};


const $093edc2594769ee5$export$c6a2d06cc40e579 = (hass, deviceId, deviceName)=>{
    const deviceEntities = Object.values(hass.entities).filter((entity)=>entity.device_id === deviceId || entity.entity_id === 'update.pi_hole_v6_integration_update').map((entity)=>{
        const state = (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass, entity.entity_id);
        if (state === undefined) return;
        // convenience
        const name = state.attributes.friendly_name === deviceName ? deviceName : state.attributes.friendly_name.replace(deviceName, '').trim();
        return {
            entity_id: entity.entity_id,
            translation_key: entity.translation_key,
            state: state.state,
            attributes: {
                ...state.attributes,
                friendly_name: name
            }
        };
    }).filter((e)=>e !== undefined);
    return deviceEntities;
};


const $3a8183764d505877$export$b971a190749afcb4 = (hass, config, deviceId)=>{
    const device = {
        device_id: deviceId,
        controls: [],
        sensors: [],
        switches: [],
        updates: []
    };
    const hassDevice = (0, $5bd3a7e1f19a6de3$export$30c823bc834d6ab4)(hass, device.device_id);
    if (!hassDevice) return undefined;
    // Get all entities for the device
    let entities = (0, $093edc2594769ee5$export$c6a2d06cc40e579)(hass, hassDevice.id, hassDevice.name);
    // Map entities to the device object
    (0, $28ca676359267166$export$ce4e438906f3b684)(config, entities).forEach((entity)=>{
        if ((0, $25a2e2943b63f930$export$2448ebcf2d0e9554)(entity, config)) return;
        // Skip already handled entities by translation key
        if ((0, $7aa94e0bc82e2c26$export$51bb3e4a8dd2f2ff)(entity, device)) return;
        // Handle other entities by domain
        const domain = (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(entity.entity_id);
        switch(domain){
            case 'button':
                device.controls.push(entity);
                break;
            case 'sensor':
                device.sensors.push(entity);
                break;
            case 'switch':
                device.switches.push(entity);
                break;
            case 'update':
                device.updates.push(entity);
                break;
        }
    });
    // Sort updates by title (using nullish coalescing for cleaner code)
    device.updates.sort((a, b)=>{
        const aTitle = a.attributes.title ?? 'z';
        const bTitle = b.attributes.title ?? 'z';
        return aTitle.localeCompare(bTitle);
    });
    return device;
};


const $0544f6a0e4690d02$export$9093f1b96efd0145 = (hass, config)=>{
    // Handle both string and array device IDs
    const deviceIds = Array.isArray(config.device_id) ? config.device_id : [
        config.device_id
    ];
    if (deviceIds.length === 0) return undefined;
    // keep track of switches that are not in the first device
    const spareSwitches = [];
    const holes = deviceIds.map((deviceId, i)=>(0, $3a8183764d505877$export$b971a190749afcb4)(hass, config, deviceId)).filter((hole)=>hole !== undefined).map((hole, i)=>{
        if (i > 0) {
            spareSwitches.push(...hole.switches);
            // don't track entites that are not in the first device
            return {
                device_id: hole.device_id,
                // required for the setup state to work
                status: hole.status,
                // required for the badge actions to work
                info_message_count: hole.info_message_count,
                purge_diagnosis_messages: hole.purge_diagnosis_messages,
                controls: [],
                sensors: [],
                switches: [],
                updates: []
            };
        }
        return hole;
    });
    if (holes.length > 1) {
        const primary = holes[0];
        // resort the combined switches
        primary.switches = (0, $28ca676359267166$export$ce4e438906f3b684)(config, [
            ...primary.switches,
            ...spareSwitches
        ]);
    }
    return {
        holes: holes
    };
};



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $14742f68afc766d6$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9cd908ed2625c047$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $19fe8e3abedf4df0$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $19fe8e3abedf4df0$export$53a6892c50694894)
}, $9cd908ed2625c047$export$8d623b1670eb40f4 = (t = $9cd908ed2625c047$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.C(o, void 0, t, e), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $9cd908ed2625c047$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $9cd908ed2625c047$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(r) {
    return (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b4269277b3c48b0c$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $25e9c5a8f7ecfc69$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $02a1f3a787c54a30$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $ed34c589b230c255$var$e;
function $ed34c589b230c255$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($ed34c589b230c255$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ea50f1870b80cbec$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $563fcf7ce7e6c5aa$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $728f1385dd7bf557$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}





const $13632afec4749c69$export$9dd6ff9ea0189349 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  ha-card {
    overflow: hidden;
  }

  /* Card header styles */
  .card-header {
    display: flex;
    justify-content: space-between;
    padding: 16px 16px 0;
  }

  .name {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .name ha-icon {
    margin-right: 8px;
  }

  .status {
    display: flex;
    font-weight: 500;
  }

  .status ha-icon {
    margin-right: 4px;
  }

  .card-content {
    padding: 16px 16px 0px 16px;
  }

  /* Dashboard-style layout with grouped stat boxes */
  .dashboard-stats {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 16px;
  }

  /* Stat groups - will appear side by side on larger screens */
  .stat-group {
    display: flex;
    gap: 12px;
    flex: 1;
  }

  .stat-box {
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    color: white;
    transition: transform 0.2s;
    min-height: 120px;
    min-width: 120px;
    flex: 1;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .stat-box:hover {
    transform: scale(1.02);
  }

  /* New: Stat Icon (Background) */
  .stat-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.2;
    z-index: 1;
  }

  .stat-icon ha-icon {
    --mdc-icon-size: 80px;
    color: rgba(255, 255, 255, 0.8);
  }

  /* Content container to position above the icon */
  .stat-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .stat-header {
    font-size: 1rem;
    padding: 12px 12px 0px 12px;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    padding: 8px 12px 0;
    flex: 1;
  }

  .stat-footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 12px;
    margin-top: auto; /* Push to the bottom */
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    box-sizing: border-box;
  }

  /* Dashboard boxes - muted versions of Pi-hole colors */
  .queries-box {
    background-color: rgba(0, 192, 239, 0.85);
  }

  .blocked-box {
    background-color: rgba(221, 75, 57, 0.85);
  }

  .percentage-box {
    background-color: rgba(243, 156, 18, 0.85);
  }

  .domains-box {
    background-color: rgba(0, 166, 90, 0.85);
  }

  /* Additional stats styling - specialized responsive grid */
  .additional-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    cursor: pointer;
  }

  .additional-stat {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    color: var(--secondary-text-color);
    padding: 8px;
    border-radius: 4px;
    min-width: 120px;
    /* Allow text to wrap if needed */
    white-space: normal;
    overflow: hidden;
  }

  .additional-stat ha-state-icon {
    margin-right: 8px;
    color: var(--secondary-text-color);
  }

  /* Collapsible section styles */
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    cursor: pointer;
    user-select: none;
  }

  .section-header span {
    font-weight: 500;
  }

  .caret-icon {
    transition: transform 0.3s ease;
  }

  .switches,
  .actions {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transition:
      max-height 0.3s ease,
      opacity 0.3s ease;
    overflow: hidden;
    max-height: 500px; /* Adjust as needed */
    opacity: 1;
  }

  .hidden {
    max-height: 0;
    opacity: 0;
    margin: 0;
    padding: 0;
  }

  /* Version information styles */
  .version-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 8px 16px 16px;
    font-size: 0.85rem;
    color: var(--secondary-text-color);
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    gap: 12px;
  }

  .version-item {
    display: flex;
    align-items: center;
    white-space: nowrap;
  }

  .version-label {
    margin-right: 4px;
    font-weight: 700;
  }

  /* Very small screen adjustments */
  @media (max-width: 400px) {
    .stat-group {
      flex-direction: column;
    }
  }

  /* Click action button styles */
  mwc-button {
    margin: 4px;
  }

  mwc-button.primary {
    --mdc-theme-primary: var(--success-color);
  }

  mwc-button.warning {
    --mdc-theme-primary: var(--warning-color);
  }

  mwc-button ha-icon {
    margin-right: 3px;
  }

  /* Switch styles */
  .remaining-time {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .remaining-time::before {
    content: '-';
    margin: 0px 8px;
  }

  .space-around {
    justify-content: space-around;
  }

  .space-between > state-card-content {
    width: 100%;
  }

  /* Refresh time styles */
  .refresh-time {
    display: flex;
    font-size: 0.85rem;
    color: var(--secondary-text-color);
    justify-content: center;
  }

  .refresh-time ha-icon {
    margin-right: 4px;
    color: var(--switch-checked-color);
    cursor: pointer;
  }

  /* Status icon styles */
  .multi-status {
    font-size: 0.9rem;
    margin-left: 8px;
    opacity: 0.8;
  }

  /* Divider styles */
  .divider {
    height: 1px;
    background-color: var(--secondary-text-color);
    width: 100%;
    margin: 10px 16px;
  }

  /* Pause buttons */
  .pause {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .pause mwc-button {
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid transparent;
    transition:
      transform 0.2s ease,
      filter 0.2s ease,
      box-shadow 0.2s ease;
    will-change: transform, filter;
  }

  .pause mwc-button:hover,
  .pause mwc-button:focus-visible {
    transform: translateY(-1px) scale(1.03);
    filter: brightness(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border-color: var(--success-color);
  }

  /* Warning badge styles */
  .warning-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--warning-color, #ff9800);
    color: var(--secondary-text-color);
    font-weight: bolder;
    font-size: 1rem;
    margin-right: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    min-width: 25px;
    transition:
      transform 0.2s ease,
      filter 0.2s ease,
      box-shadow 0.2s ease;
    will-change: transform, filter;
  }

  .warning-badge:hover,
  .warning-badge:focus-visible {
    transform: translateY(-1px) scale(1.06);
    filter: brightness(1.05);
    box-shadow:
      0 6px 12px rgba(0, 0, 0, 0.25),
      0 0 0 3px var(--warning-color, #ff9800);
  }

  .badge {
    cursor: pointer;
  }
`;


var $30856da572fd852b$exports = {};
'use strict';
// do not edit .js files directly - edit src/index.jst
$30856da572fd852b$exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};


class $e4f1b26747081709$export$54063f5d55a7de84 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $13632afec4749c69$export$9dd6ff9ea0189349;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ setConfig(config) {
        if (!$30856da572fd852b$exports(config, this._config)) this._config = config;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ set hass(hass) {
        this._hass = hass;
        const setup = (0, $0544f6a0e4690d02$export$9093f1b96efd0145)(hass, this._config);
        if (setup && !$30856da572fd852b$exports(setup, this._setup)) this._setup = setup;
    }
    // card configuration
    static getConfigElement() {
        return document.createElement('pi-hole-editor');
    }
    static async getStubConfig(hass) {
        const device = await (0, $19442883b2a008d3$export$df7b058ef38e4826)(hass);
        return {
            device_id: device?.id ?? ''
        };
    }
    render() {
        if (!this._hass || !this._config) return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-card>
        <div class="card-content">
          <div class="no-devices">Loading...</div>
        </div>
      </ha-card>`;
        return (0, $f5cecba293939c1a$export$569cbbd0d9d55043)(this, this._hass, this._setup, this._config);
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$54063f5d55a7de84.prototype, "_config", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$54063f5d55a7de84.prototype, "_setup", void 0);






// Constants for repeated patterns
const $b642db848cc622aa$var$PI_HOLE_INTEGRATION_FILTER = [
    {
        integration: 'pi_hole_v6'
    },
    {
        integration: 'pi_hole'
    }
];
const $b642db848cc622aa$var$PI_HOLE_ENTITY_FILTER = [
    {
        integration: 'pi_hole_v6',
        domain: [
            'button',
            'sensor',
            'switch'
        ]
    },
    {
        integration: 'pi_hole',
        domain: [
            'button',
            'sensor',
            'switch'
        ]
    }
];
const $b642db848cc622aa$var$SWITCH_SPACING_OPTIONS = [
    {
        label: 'Flex (default)',
        value: 'flex'
    },
    {
        label: 'Space Around',
        value: 'space-around'
    },
    {
        label: 'Space Between',
        value: 'space-between'
    }
];
const $b642db848cc622aa$var$SECTION_EXCLUDE_OPTIONS = [
    {
        label: 'Actions',
        value: 'actions'
    },
    {
        label: 'Footer',
        value: 'footer'
    },
    {
        label: 'Header',
        value: 'header'
    },
    {
        label: 'Pause Buttons',
        value: 'pause'
    },
    {
        label: 'Statistics',
        value: 'statistics'
    },
    {
        label: 'Sensors',
        value: 'sensors'
    },
    {
        label: 'Switches',
        value: 'switches'
    }
];
const $b642db848cc622aa$var$COLLAPSED_SECTION_OPTIONS = [
    {
        label: 'Pause Buttons',
        value: 'pause'
    },
    {
        label: 'Switches',
        value: 'switches'
    },
    {
        label: 'Actions',
        value: 'actions'
    }
];
const $b642db848cc622aa$var$PAUSE_DURATION_OPTIONS = [
    {
        label: '60 seconds',
        value: '60s'
    },
    {
        label: '5 minutes',
        value: '5m'
    },
    {
        label: '15 minutes',
        value: '15m'
    }
];
const $b642db848cc622aa$var$ACTION_SCHEMA = [
    {
        name: 'tap_action',
        label: 'Tap Action',
        selector: {
            ui_action: {}
        }
    },
    {
        name: 'hold_action',
        label: 'Hold Action',
        selector: {
            ui_action: {}
        }
    },
    {
        name: 'double_tap_action',
        label: 'Double Tap Action',
        selector: {
            ui_action: {}
        }
    }
];
const $b642db848cc622aa$var$SCHEMA = [
    {
        name: 'device_id',
        selector: {
            device: {
                filter: $b642db848cc622aa$var$PI_HOLE_INTEGRATION_FILTER,
                multiple: true
            }
        },
        required: true,
        label: `Pi-hole Device`
    },
    {
        name: 'content',
        label: 'Content',
        type: 'expandable',
        flatten: true,
        icon: 'mdi:text-short',
        schema: [
            {
                name: 'title',
                required: false,
                label: 'Card Title',
                selector: {
                    text: {}
                }
            },
            {
                name: 'icon',
                required: false,
                label: 'Card Icon',
                selector: {
                    icon: {
                        placeholder: 'mdi:pi-hole'
                    }
                }
            }
        ]
    },
    {
        name: 'layout',
        label: 'Layout',
        type: 'expandable',
        flatten: true,
        icon: 'mdi:view-grid-plus',
        schema: [
            {
                name: 'exclude_sections',
                label: 'Sections to exclude',
                required: false,
                selector: {
                    select: {
                        multiple: true,
                        mode: 'list',
                        options: $b642db848cc622aa$var$SECTION_EXCLUDE_OPTIONS
                    }
                }
            },
            {
                name: 'collapsed_sections',
                label: 'Sections collapsed by default',
                required: false,
                selector: {
                    select: {
                        multiple: true,
                        mode: 'list',
                        options: $b642db848cc622aa$var$COLLAPSED_SECTION_OPTIONS
                    }
                }
            },
            {
                name: 'switch_style',
                label: 'Style for switches',
                required: false,
                selector: {
                    select: {
                        multiple: false,
                        mode: 'dropdown',
                        options: $b642db848cc622aa$var$SWITCH_SPACING_OPTIONS
                    }
                }
            },
            {
                name: 'exclude_entities',
                label: 'Entities to exclude',
                required: false,
                selector: {
                    entity: {
                        multiple: true,
                        filter: $b642db848cc622aa$var$PI_HOLE_INTEGRATION_FILTER
                    }
                }
            },
            {
                name: 'entity_order',
                label: 'Entity display order (click in order)',
                required: false,
                selector: {
                    entity: {
                        multiple: true,
                        filter: $b642db848cc622aa$var$PI_HOLE_ENTITY_FILTER
                    }
                }
            }
        ]
    },
    {
        name: 'styles',
        label: 'Styles',
        type: 'expandable',
        flatten: true,
        icon: 'mdi:brush-variant',
        schema: [
            {
                name: 'switch_spacing',
                label: 'Switch Spacing',
                required: false,
                selector: {
                    select: {
                        multiple: false,
                        mode: 'dropdown',
                        options: $b642db848cc622aa$var$SWITCH_SPACING_OPTIONS
                    }
                }
            }
        ]
    },
    {
        name: 'interactions',
        label: 'Interactions',
        type: 'expandable',
        flatten: true,
        icon: 'mdi:gesture-tap',
        schema: [
            {
                name: 'pause_durations',
                label: 'Pause durations',
                required: false,
                selector: {
                    select: {
                        multiple: true,
                        custom_value: true,
                        mode: 'list',
                        options: $b642db848cc622aa$var$PAUSE_DURATION_OPTIONS
                    }
                }
            },
            {
                name: 'badge',
                label: 'Badge',
                type: 'expandable',
                icon: 'mdi:badge-account-horizontal',
                schema: $b642db848cc622aa$var$ACTION_SCHEMA
            },
            {
                name: 'stats',
                label: 'Statistics',
                type: 'expandable',
                icon: 'mdi:counter',
                schema: $b642db848cc622aa$var$ACTION_SCHEMA
            },
            {
                name: 'info',
                label: 'Information',
                type: 'expandable',
                icon: 'mdi:information-outline',
                schema: $b642db848cc622aa$var$ACTION_SCHEMA
            },
            {
                name: 'controls',
                label: 'Controls',
                type: 'expandable',
                icon: 'mdi:remote',
                schema: $b642db848cc622aa$var$ACTION_SCHEMA
            }
        ]
    }
];
class $b642db848cc622aa$export$45a407047dba884a extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        if (!this.hass || !this._config) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${$b642db848cc622aa$var$SCHEMA}
        .computeLabel=${(s)=>s.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ setConfig(config) {
        this._config = config;
    }
    _valueChanged(ev) {
        const config = ev.detail.value;
        const shouldDelete = (obj)=>obj && (Object.keys(obj).length === 0 || Object.values(obj).some((f)=>!f));
        if (shouldDelete(config.stats)) delete config.stats;
        if (shouldDelete(config.info)) delete config.info;
        if (shouldDelete(config.controls)) delete config.controls;
        if (shouldDelete(config.badge)) delete config.badge;
        if (!config.exclude_entities?.length) delete config.exclude_entities;
        if (!config.exclude_sections?.length) delete config.exclude_sections;
        if (!config.entity_order?.length) delete config.entity_order;
        if (!config.collapsed_sections?.length) delete config.collapsed_sections;
        // @ts-ignore
        (0, $9c83ab07519e6203$export$43835e9acf248a15)(this, 'config-changed', {
            config: config
        });
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $b642db848cc622aa$export$45a407047dba884a.prototype, "_config", void 0);


var $b06602ab53bd58a3$exports = {};
$b06602ab53bd58a3$exports = JSON.parse("{\"name\":\"pi-hole\",\"version\":\"0.13.2\",\"author\":\"Patrick Masters\",\"license\":\"ISC\",\"description\":\"UDPATE ME.\",\"source\":\"src/index.ts\",\"module\":\"dist/pi-hole-card.js\",\"targets\":{\"module\":{\"includeNodeModules\":true}},\"scripts\":{\"watch\":\"parcel watch\",\"build\":\"parcel build\",\"format\":\"prettier --write .\",\"test\":\"TS_NODE_PROJECT='./tsconfig.test.json' mocha\",\"test:coverage\":\"nyc npm run test\",\"test:watch\":\"TS_NODE_PROJECT='./tsconfig.test.json' mocha --watch\",\"update\":\"npx npm-check-updates -u && yarn install\"},\"devDependencies\":{\"@istanbuljs/nyc-config-typescript\":\"^1.0.2\",\"@open-wc/testing\":\"^4.0.0\",\"@parcel/transformer-inline-string\":\"^2.15.4\",\"@testing-library/dom\":\"^10.4.1\",\"@trivago/prettier-plugin-sort-imports\":\"^5.2.2\",\"@types/chai\":\"^5.2.2\",\"@types/jsdom\":\"^21.1.7\",\"@types/mocha\":\"^10.0.10\",\"@types/sinon\":\"^17.0.4\",\"chai\":\"^5.2.1\",\"jsdom\":\"^26.1.0\",\"mocha\":\"^11.7.1\",\"nyc\":\"^17.1.0\",\"parcel\":\"^2.15.4\",\"prettier\":\"3.6.2\",\"prettier-plugin-organize-imports\":\"^4.2.0\",\"proxyquire\":\"^2.1.3\",\"sinon\":\"^21.0.0\",\"ts-node\":\"^10.9.2\",\"tsconfig-paths\":\"^4.2.0\",\"typescript\":\"^5.9.2\"},\"dependencies\":{\"@lit/task\":\"^1.0.3\",\"fast-deep-equal\":\"^3.1.3\",\"lit\":\"^3.3.1\"}}");


// Register the custom elements with the browser
customElements.define('pi-hole', (0, $e4f1b26747081709$export$54063f5d55a7de84));
customElements.define('pi-hole-editor', (0, $b642db848cc622aa$export$45a407047dba884a));
// Ensure the customCards array exists on the window object
window.customCards = window.customCards || [];
// Register the cards with Home Assistant's custom card registry
window.customCards.push({
    // Unique identifier for the card type
    type: 'pi-hole',
    // Display name in the UI
    name: 'Pi-hole Card',
    // Card description for the UI
    description: 'A card to summarize and control your Pi-hole instance.',
    // Show a preview of the card in the UI
    preview: true,
    // URL for the card's documentation
    documentationURL: 'https://github.com/homeassistant-extras/pi-hole-card'
});
console.info(`%c\u{1F431} Poat's Tools: pi-hole-card - ${(0, $b06602ab53bd58a3$exports.version)}`, 'color: #CFC493;');


//# sourceMappingURL=pi-hole-card.js.map
