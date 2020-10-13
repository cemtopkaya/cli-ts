"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCredDest = void 0;
var yargs_1 = __importDefault(require("yargs"));
var commonOptions = {
    cred_dest: {
        opts: {
            destination: {
                alias: 'd',
                describe: 'Host server socket',
                // default: "10.5.5.2:8001",
                type: 'string',
                nargs: 1,
                demand: true
            },
            cred: {
                alias: 'c',
                describe: 'Client side sertificate',
                type: 'string',
                nargs: 1,
                demand: true
            }
        },
        checks: function (a) {
            console.log('----->', a);
            if (a.c.length < 5) {
                throw new Error('cred olmadiiii');
            }
            console.log('----->', a);
            if (a.d.length < 5) {
                throw new Error('destination olmadiiii');
            }
            return true;
        }
    },
    action: {
        desc: 'action bilgisi burada',
        choices: ['get', 'set']
    }
};
function setCredDest() {
    var homepage = "http://www.ulakhaberlesme.com.tr";
    var version = '1.0';
    yargs_1.default
        .scriptName('cli-cnnrf')
        .help()
        .options({
        cred: commonOptions.cred_dest.opts.cred,
        destination: commonOptions.cred_dest.opts.destination
    })
        // .option(commonOptions.cred as { [key: string]: yargs.Options; })
        .check(commonOptions.cred_dest.checks)
        .epilog((homepage ? "| Documentation: " + homepage + "\n" : '') +
        (version ? "| Version: " + version : ''));
    return yargs_1.default;
}
exports.setCredDest = setCredDest;
// export default commonOptions
//# sourceMappingURL=commonOptions.js.map