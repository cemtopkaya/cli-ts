"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SayCommand = void 0;
var yargs_1 = require("yargs");
// import commonOptions from "../commonOptions"
var SayCommand = /** @class */ (function () {
    function SayCommand() {
        var _this = this;
        this.options = {
            name: {
                alias: 'n',
                describe: 'Pass the name',
                type: 'string',
                demand: true
            },
            surname: {
                alias: 's',
                type: 'string',
                describe: 'Pass the surname',
                demand: false
            }
        };
        // this.options.cred = commonOptions.cred as yargs.Options
        // this.options.destination = commonOptions.destination as yargs.Options
        this.module = {
            command: 'say <action>',
            description: 'Printssss: <action> name surname',
            builder: function (y) { return y
                .options(_this.options)
                .check(function (k) {
                console.log('ppppp');
                if (k.name.length < 3)
                    throw new Error('3 karakterden az isim mi olur yahu?');
            }); },
            handler: this.handler
        };
    }
    Object.defineProperty(SayCommand.prototype, "cmd", {
        get: function () {
            return yargs_1.command(this.module);
        },
        enumerable: false,
        configurable: true
    });
    SayCommand.prototype.handler = function (argv) {
        var prefix = argv.prefix, name = argv.name, surname = argv.surname;
        var message = prefix + (name ? ' ' + name : '') + (surname ? ' ' + surname : '');
        console.log('sayyyy : ', message);
    };
    return SayCommand;
}());
exports.SayCommand = SayCommand;
//# sourceMappingURL=say.js.map