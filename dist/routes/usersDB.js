"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("firebase/database");
const firebaseConnection_1 = __importDefault(require("../controllers/firebaseConnection"));
const database = (0, database_1.getDatabase)(firebaseConnection_1.default);
