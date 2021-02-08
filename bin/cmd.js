"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var yargs_1 = __importDefault(require("yargs"));
// Ortak options (cred, destination)
// let a = commonOptions as { [key: string]: yargs.Options; }
var say_1 = require("commands/say");
// tslint:disable-next-line: no-submodule-imports
// import { module2 } from 'commands/say';
var general_1 = require("../lib/commands/general");
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
var homepage = 'http://www.ulakhaberlesme.com.tr';
var version = '1.0';
// setCredDest()
// tslint:disable-next-line: no-unused-expression
yargs_1.default
    .scriptName('cli-cnnrf')
    .help()
    .version(version)
    .usage('Usage: $0 <varlik> <komut> -c [string] -d [string]')
    .demandCommand(2, chalk_1.default.red('You must provide a valid command!'))
    .options({
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
})
    // .check((a: any) => {
    //   console.log('----->', a)
    //   if (a.c.length < 5) throw new Error('cred olmadiiii')
    //   console.log('----->', a)
    //   if (a.d.length < 5) throw new Error('destination olmadiiii')
    //   return true
    // })
    // .command('sus <hadi>','sus dedik beaa')
    // .command(new SayCommand().module)
    .command(say_1.module2)
    .command(new general_1.GeneralCommand().module)
    // .example('$0 say [name] [surname]', 'Ad ve soyadini soyleyecekk')
    // .example('$0 general <action>', 'General bilgilerini işler')
    .recommendCommands()
    .strict()
    .epilog((!!homepage ? "| Documentation: " + homepage + "\n" : '') +
    (!!version ? "| Version: " + version : '')).argv;
//# sourceMappingURL=cmd.js.map