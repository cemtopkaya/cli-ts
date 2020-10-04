import yargs from "yargs";


const commonOptions = {
    cred_dest: {
        opts: {
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
        },
        checks: (a: any) => {
            console.log('----->', a)
            if (a.c.length < 5) throw new Error('cred olmadiiii')

            console.log('----->', a)
            if (a.d.length < 5) throw new Error('destination olmadiiii')
            return true
        }
    },
    action: {
        desc: 'action bilgisi burada',
        choices: ['get', 'set']
    },
};

export function setCredDest() {

    const homepage = 'http://www.ulakhaberlesme.com.tr',
        version = '1.0'

    yargs
        .scriptName("cli-cnnrf")
        .help()
        .options({ cred: commonOptions.cred_dest.opts.cred, destination: commonOptions.cred_dest.opts.destination } as { [key: string]: yargs.Options; })
        // .option(commonOptions.cred as { [key: string]: yargs.Options; })
        .check(commonOptions.cred_dest.checks)

        .epilog(
            (homepage ? `| Documentation: ${homepage}\n` : "") +
            (version ? `| Version: ${version}` : "")
        )

    return yargs

}


// export default commonOptions