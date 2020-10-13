import yargs, { command } from 'yargs';
// import commonOptions from "../commonOptions"

export class GeneralCommand {
  public module: yargs.CommandModule;

  public options: { [key: string]: yargs.Options } = {
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
      demand: true,
    },
    // ,surname: {
    //   alias: 's',
    //   type: 'string',
    //   describe: 'Pass the surname',
    //   demand: false
    // }
  };

  constructor() {
    // this.options.cred = commonOptions.cred as yargs.Options
    // this.options.destination = commonOptions.destination as yargs.Options
    this.module = {
      command: 'general <action> [destination] [cred]',
      describe: 'Get parameters under General tag',
      builder: (y) =>
        y.options(this.options)
          .check((args: any) => {
            console.log('ppppp  args: ', args);

            if (args.destination.length < 3 || args.cred.length < 3) {
              throw new Error('3 karakterden az cred veya destination olmaz?');
            }

            return true;
          }),
      handler: this.handler,
    };
  }

  get cmd(): yargs.Argv {
    return command(this.module);
  }

  public handler(argv: any): void {
    const { prefix, name, surname } = argv;
    const message = `${prefix} ${name ?? ''} ${surname ?? ''}`;
    console.log('sayyyy : ', message);
  }
}
