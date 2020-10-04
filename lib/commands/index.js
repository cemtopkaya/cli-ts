"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = void 0;
var say_1 = require("./say");
var stop_1 = require("./stop");
var commands = [new say_1.SayCommand().cmd, new stop_1.StopCommand().cmd];
exports.commands = commands;
//# sourceMappingURL=index.js.map