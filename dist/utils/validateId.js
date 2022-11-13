"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ObjectId = mongoose_1.default.Types.ObjectId;
// Validate ObjectId
var validateObjectId = function (id) { return ObjectId.isValid(id) && new ObjectId(id).toString() === id; };
exports.default = validateObjectId;
//# sourceMappingURL=validateId.js.map