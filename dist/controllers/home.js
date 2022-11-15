"use strict";
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var validateId_1 = __importDefault(require("../utils/validateId"));
// @route   GET api/reservations
var getAll = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var home, _a, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                return [4 /*yield*/, models_1.HomeModel.find({})];
            case 1:
                home = _b.sent();
                if (!home)
                    return [2 /*return*/, res.status(200).json({ success: true, message: "No Data found", data: {} })];
                return [2 /*return*/, res.status(200).json({ success: true, message: "", data: home.length ? home[0] : {} })];
            case 2:
                _a = _b.sent();
                message = _a.message;
                return [2 /*return*/, res.status(500).json({ message: message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Get a reservation
var get = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var home, _a, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                if (!(0, validateId_1.default)(req.params.id)) {
                    return [2 /*return*/, res.status(400).json({ success: false, message: "reservation ID is not valid", data: "" })];
                }
                return [4 /*yield*/, models_1.HomeModel.findOne({ _id: req.params.id }).populate("accompanies").populate("guest", "-password")];
            case 1:
                home = _b.sent();
                if (!home)
                    return [2 /*return*/, res.status(200).json({ success: true, message: "No reservation found", data: "" })];
                return [2 /*return*/, res.status(200).json({ success: true, message: "", data: home })];
            case 2:
                _a = _b.sent();
                message = _a.message;
                return [2 /*return*/, res.status(500).json({ success: false, message: "Error found", data: message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Update reservation
var update = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var home, _a, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                if (!(0, validateId_1.default)(req.params.id)) {
                    return [2 /*return*/, res.status(400).json({ success: false, message: "reservation ID is not valid", data: "" })];
                }
                return [4 /*yield*/, models_1.HomeModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).populate("accompanies").populate("guest", "-password")];
            case 1:
                home = _b.sent();
                if (!home)
                    return [2 /*return*/, res.status(200).json({ success: true, message: "No home found", data: "" })];
                return [2 /*return*/, res.status(200).json({ success: true, message: "Home ha sido actualizada", data: home })];
            case 2:
                _a = _b.sent();
                message = _a.message;
                return [2 /*return*/, res.status(500).json({ success: false, message: "Error found", data: message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
// Delete a reservation
var eliminate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var home, _a, message;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                if (!(0, validateId_1.default)(req.params.id)) {
                    return [2 /*return*/, res.status(400).json({ success: false, message: "Reservation ID is not valid", data: "" })];
                }
                return [4 /*yield*/, models_1.HomeModel.findOneAndDelete({ _id: req.params.id })];
            case 1:
                home = _b.sent();
                if (!home)
                    return [2 /*return*/, res.status(200).json({ success: true, message: "No home found", data: "" })];
                return [2 /*return*/, res.status(200).json({ success: true, message: "Home has been deleted", data: home })];
            case 2:
                _a = _b.sent();
                message = _a.message;
                return [2 /*return*/, res.status(500).json({ success: false, message: "Error found", data: message })];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.default = {
    getAll: getAll,
    get: get,
    update: update,
    eliminate: eliminate,
};
//# sourceMappingURL=home.js.map