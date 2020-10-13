"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopCommand = void 0;
var yargs_1 = require("yargs");
var StopCommand = /** @class */ (function () {
    function StopCommand() {
        this.cmd = yargs_1.command("stop <prefix>", "Prints: <prefix> full name", {
            prefix: {
                desc: 'prefix bilgisi burada',
                choices: ['delete', 'modify']
            },
            fullname: {
                alias: 'f',
                type: 'string',
                describe: 'Full name',
                demand: true
            }
        }, function (argv) {
            var fullname = argv.fullname;
            console.log('stoppppp : ', fullname);
        });
    }
    return StopCommand;
}());
exports.StopCommand = StopCommand;
//# sourceMappingURL=stop.js.map