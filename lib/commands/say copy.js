"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SayCommand = void 0;
var yargs_1 = require("yargs");
var SayCommand = /** @class */ (function () {
    function SayCommand() {
        this.cmd = yargs_1.command('say <prefix>', 'Prints: <prefix> name surname', {
            name: {
                alias: 'n',
                describe: 'Pass the name',
                demand: true
            },
            surname: {
                alias: 's',
                describe: 'Pass the surname',
                demand: false
            }
        }, function (argv) {
            var prefix = argv.prefix, name = argv.name, surname = argv.surname;
            var message = prefix + (name ? ' ' + name : '') + (surname ? ' ' + surname : '');
            console.log(message);
        });
    }
    return SayCommand;
}());
exports.SayCommand = SayCommand;
//# sourceMappingURL=say copy.js.map