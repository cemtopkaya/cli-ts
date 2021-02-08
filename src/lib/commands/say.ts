import yargs, { command, CommandModule } from 'yargs';
// import commonOptions from "../commonOptions"

export class SayCommand {

    public module: yargs.CommandModule;
    public options: { [key: string]: yargs.Options } = {
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

    constructor() {
        // this.options.cred = commonOptions.cred as yargs.Options
        // this.options.destination = commonOptions.destination as yargs.Options
        this.module = {
            command: 'say <action>',
            describe: 'Prints name and surname',
            builder: (y) => {
                console.log('------>');

                return y.options(this.options)
                    .check((k: any) => {
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

    get cmd(): yargs.Argv {
        return command(this.module);
    }

    public handler(argv: any): void {
        const { prefix, name, surname } = argv;
        const message = `${prefix ?? 'prefix YOK!'} ${name ?? 'name YOK!'} ${surname ?? 'surname YOK!'}`;
        console.log('sayyyy handler: ', message);
    }

}

export const module1 = {
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
    handler: (argv: any) => {
        // do something with argv.
        console.log('>>>> ', argv);
    }
};

export const module2 = {
    command: 'say <source> [proxy]',
    describe: 'make a get HTTP request',
    builder: (y: yargs.Argv) => {
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
            .check((k: any) => {
                console.log('ppppp: ', k);
                if (k.name.length < 3) {
                    throw new Error('3 karakterden az isim mi olur yahu?');
                }

                return true;
            });
    },
    handler: function (argv: any) {
        // do something with argv.
        console.log('>>>> ', argv);
    }
};
