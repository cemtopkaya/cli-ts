"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.module2 = exports.module1 = exports.SayCommand = void 0;
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
            describe: 'Prints name and surname',
            builder: function (y) {
                console.log('------>');
                return y.options(_this.options)
                    .check(function (k) {
                    console.log('ppppp: ', k);
                    if (k.name.length < 3) {
                        throw new Error('3 karakterden az isim mi olur yahu?');
                    }
                    return true;
                });
            },
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
        var message = (prefix !== null && prefix !== void 0 ? prefix : 'prefix YOK!') + " " + (name !== null && name !== void 0 ? name : 'name YOK!') + " " + (surname !== null && surname !== void 0 ? surname : 'surname YOK!');
        console.log('sayyyy handler: ', message);
    };
    return SayCommand;
}());
exports.SayCommand = SayCommand;
exports.module1 = {
    command: 'say <source> [proxy]',
    describe: 'make a get HTTP request',
    builder: {
        source: {
            default: 'cool'
        },
        batman: {
            default: 'sad',
            demand: true
        }
    },
    handler: function (argv) {
        // do something with argv.
        console.log('>>>> ', argv);
    }
};
exports.module2 = {
    command: 'say <source> [proxy]',
    describe: 'make a get HTTP request',
    builder: function (y) {
        console.log('->----->');
        return y.options({
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
        })
            .check(function (k) {
            console.log('ppppp: ', k);
            if (k.name.length < 3) {
                throw new Error('3 karakterden az isim mi olur yahu?');
            }
            return true;
        });
    },
    handler: function (argv) {
        // do something with argv.
        console.log('>>>> ', argv);
    }
};
//# sourceMappingURL=say.js.map