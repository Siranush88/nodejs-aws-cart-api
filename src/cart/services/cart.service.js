"use strict";
// import { Injectable } from '@nestjs/common';
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
// import { v4 } from 'uuid';
// import { Cart } from '../models';
// @Injectable()
// export class CartService {
//   private userCarts: Record<string, Cart> = {};
//   findByUserId(userId: string): Cart {
//     return this.userCarts[ userId ];
//   }
//   createByUserId(userId: string) {
//     const id = v4();
//     const userCart = {
//       id,
//       items: [],
//     };
//     this.userCarts[ userId ] = userCart;
//     return userCart;
//   }
//   findOrCreateByUserId(userId: string): Cart {
//     const userCart = this.findByUserId(userId);
//     if (userCart) {
//       return userCart;
//     }
//     return this.createByUserId(userId);
//   }
//   updateByUserId(userId: string, { items }: Cart): Cart {
//     const { id, ...rest } = this.findOrCreateByUserId(userId);
//     const updatedCart = {
//       id,
//       ...rest,
//       items: [ ...items ],
//     }
//     this.userCarts[ userId ] = { ...updatedCart };
//     return { ...updatedCart };
//   }
//   removeByUserId(userId): void {
//     this.userCarts[ userId ] = null;
//   }
// }
var common_1 = require("@nestjs/common");
var uuid_1 = require("uuid");
var CartService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var CartService = _classThis = /** @class */ (function () {
        function CartService_1(cartRepository) {
            this.cartRepository = cartRepository;
        }
        CartService_1.prototype.findByUserId = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.cartRepository.findOne({
                            where: { userId: userId },
                        })];
                });
            });
        };
        CartService_1.prototype.createByUserId = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var id, userCart;
                return __generator(this, function (_a) {
                    id = (0, uuid_1.v4)();
                    userCart = this.cartRepository.create({
                        id: id,
                        user_id: userId,
                        items: [],
                    });
                    return [2 /*return*/, this.cartRepository.save(userCart)];
                });
            });
        };
        CartService_1.prototype.findOrCreateByUserId = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var userCart;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findByUserId(userId)];
                        case 1:
                            userCart = _a.sent();
                            if (userCart) {
                                return [2 /*return*/, userCart];
                            }
                            return [2 /*return*/, this.createByUserId(userId)];
                    }
                });
            });
        };
        CartService_1.prototype.updateByUserId = function (userId, _a) {
            var items = _a.items;
            return __awaiter(this, void 0, void 0, function () {
                var userCart;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.findOrCreateByUserId(userId)];
                        case 1:
                            userCart = _b.sent();
                            userCart.items = items;
                            return [2 /*return*/, this.cartRepository.save(userCart)];
                    }
                });
            });
        };
        CartService_1.prototype.removeByUserId = function (userId) {
            return __awaiter(this, void 0, void 0, function () {
                var userCart;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.findByUserId(userId)];
                        case 1:
                            userCart = _a.sent();
                            if (!userCart) {
                                throw new common_1.NotFoundException("Cart not found for user with ID ".concat(userId));
                            }
                            return [4 /*yield*/, this.cartRepository.remove(userCart)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return CartService_1;
    }());
    __setFunctionName(_classThis, "CartService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CartService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CartService = _classThis;
}();
exports.CartService = CartService;
