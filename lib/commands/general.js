"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralCommand = void 0;
var yargs_1 = require("yargs");
// import commonOptions from "../commonOptions"
var GeneralCommand = /** @class */ (function () {
    function GeneralCommand() {
        var _this = this;
        this.options = {
            // destination: {
            //   alias: 'd',
            //   describe: 'Host server socket',
            //   // default: "10.5.5.2:8001",
            //   type: 'string',
            //   nargs: 1,
            //   demand: true
            // },
            // cred: {
            //   alias: 'c',
            //   describe: 'Client side sertificate',
            //   type: 'string',
            //   nargs: 1,
            //   demand: true
            // },
            action: {
                // alias: 'n',
                describe: 'General üstünde yapılacak işler GET, PATCH, PUT, DELETE',
                type: 'string',
                choices: ['get', 'put', 'delete'],
                demand: true
            }
            // ,surname: {
            //   alias: 's',
            //   type: 'string',
            //   describe: 'Pass the surname',
            //   demand: false
            // }
        };
        // this.options.cred = commonOptions.cred as yargs.Options
        // this.options.destination = commonOptions.destination as yargs.Options
        this.module = {
            command: 'general <action> [destination] [cred]',
            description: 'Get parameters under General tag',
            builder: function (y) { return y
                .options(_this.options)
                .check(function (args) {
                console.log('ppppp  args: ', args);
                if ((args.destination.length < 3) || (args.cred.length < 3)) {
                    throw new Error('3 karakterden az cred veya destination olmaz?');
                }
                return true;
            }); },
            handler: this.handler
        };
    }
    Object.defineProperty(GeneralCommand.prototype, "cmd", {
        get: function () {
            return yargs_1.command(this.module);
        },
        enumerable: false,
        configurable: true
    });
    GeneralCommand.prototype.handler = function (argv) {
        var prefix = argv.prefix, name = argv.name, surname = argv.surname;
        var message = prefix + (name ? ' ' + name : '') + (surname ? ' ' + surname : '');
        console.log('sayyyy : ', message);
    };
    return GeneralCommand;
}());
exports.GeneralCommand = GeneralCommand;
//# sourceMappingURL=general.js.map