import yargs, { command, CommandModule } from 'yargs'
// import commonOptions from "../commonOptions"

export class SayCommand {

  module: yargs.CommandModule<{}, {}>
  options: { [key: string]: yargs.Options } = {
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
  } as { [key: string]: yargs.Options }

  get cmd (): yargs.Argv<{}> {
    return command(this.module)
  }

  handler (argv: any) {
    console.log('sayyyy HANDLER ')
    const { prefix, name, surname } = argv
    const message = prefix + (name ? ' ' + name : '') + (surname ? ' ' + surname : '')
    console.log('sayyyy : ', message)
  }

  constructor () {
    // this.options.cred = commonOptions.cred as yargs.Options
    // this.options.destination = commonOptions.destination as yargs.Options
    this.module = {
      command: 'say <action>',
      description: 'Printssss: <action> name surname',
      builder: y => y
        .options(this.options)
        .check((k: any) => {
          console.log('ppppp')
          if (k.name.length < 3) throw new Error('3 karakterden az isim mi olur yahu?')
        }),
      handler: this.handler
    } as CommandModule
  }

}
