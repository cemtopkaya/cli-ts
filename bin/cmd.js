"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
// Ortak options (cred, destination)
// let a = commonOptions as { [key: string]: yargs.Options; }
var say_1 = require("../lib/commands/say");
var chalk_1 = __importDefault(require("chalk"));
/**
 * import yargs from "yargs";
 * modulu her cagirildigi yerde (farkli .ts dosyalarinda) islem gorup
 * bir sonraki kullanildigi yerde de kaldigi yerden devam edebiliyor
 * Bu yuzden
 *   ister tum komutlari kendi siniflari icinde
 *      import { commands } from "../index";
 *      commands.map((cmd) => cmd.argv);
 *   komutuyla calistirabiliriz
 *
 *   ister diger komutlari modul haline getirip burada calistirabilir
 *   yargs.
 *        ...
 *       .command(new SayCommand().module)
 *       .command(new CookCommand().module)
 *       ...argv
 *
 * CLI komutlarini yargs statik degiskenine islemek icin
 *
 */
// import { commands } from "../lib/commands";
// commands.map((cmd:any) => cmd.argv);
var homepage = 'http://www.ulakhaberlesme.com.tr', version = '1.0';
// setCredDest()
yargs_1.default
    .scriptName("cli-cnnrf")
    .help()
    .version()
    .usage('Usage: $0 <komut> -c [string] -d [string]')
    .demandCommand(1, chalk_1.default.red('You must provide a valid command!'))
    .options({
    destination: {
        alias: "d",
        describe: "Host server socket",
        // default: "10.5.5.2:8001",
        type: "string",
        nargs: 1,
        demand: true,
    },
    cred: {
        alias: "c",
        describe: "Client side sertificate",
        type: "string",
        nargs: 1,
        demand: true,
    }
})
    .check(function (a) {
    console.log('----->', a);
    if (a.c.length < 5)
        throw new Error('cred olmadiiii');
    console.log('----->', a);
    if (a.d.length < 5)
        throw new Error('destination olmadiiii');
    return true;
})
    // .command('sus <hadi>','sus dedik beaa')
    .command(new say_1.SayCommand().module)
    .example('$0 say [name] [surname]', 'Adini ve soyadini soyleyecekk')
    .recommendCommands()
    .strict()
    .epilog((homepage ? "| Documentation: " + homepage + "\n" : "") +
    (version ? "| Version: " + version : ""))
    .argv;
//# sourceMappingURL=cmd.js.map