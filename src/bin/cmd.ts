import chalk from 'chalk';
import yargs from 'yargs';
import { setCredDest } from '../lib/commonOptions';

// Ortak options (cred, destination)
// let a = commonOptions as { [key: string]: yargs.Options; }





import { module2, SayCommand, module1 } from 'commands/say';




// tslint:disable-next-line: no-submodule-imports
// import { module2 } from 'commands/say';





import { GeneralCommand } from '../lib/commands/general';

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

const homepage = 'http://www.ulakhaberlesme.com.tr';
const version = '1.0';

// setCredDest()
// tslint:disable-next-line: no-unused-expression
yargs
  .scriptName('cli-cnnrf')
  .help()
  .version(version)
  .usage('Usage: $0 <varlik> <komut> -c [string] -d [string]')
  .demandCommand(2, chalk.red('You must provide a valid command!'))
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
  .command(module2)
  .command(new GeneralCommand().module)
  // .example('$0 say [name] [surname]', 'Ad ve soyadini soyleyecekk')
  // .example('$0 general <action>', 'General bilgilerini işler')

  .recommendCommands()
  .strict()
  .epilog(
    (!!homepage ? `| Documentation: ${homepage}\n` : '') +
    (!!version ? `| Version: ${version}` : '')
  ).argv;
