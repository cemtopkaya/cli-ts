import * as fs from 'fs';
import * as http2 from 'http2';

export default function put({ url, path, body, cert = null }: { url: string; path: string; body: any; cert?: string | null }) {

    return new Promise((resolve) => {

        let client: any;
        client = !!cert ? http2.connect(url, { key: fs.readFileSync(cert) }) : client = http2.connect(url);

        const bodyString = JSON.stringify(body)
        const buffer: Buffer = Buffer.from(bodyString);

        const hdr_sch = url.includes('https') ? 'https' : 'http';

        const req = client.request({
            [http2.constants.HTTP2_HEADER_SCHEME]: hdr_sch,
            [http2.constants.HTTP2_HEADER_METHOD]: http2.constants.HTTP2_METHOD_PUT,
            [http2.constants.HTTP2_HEADER_PATH]: `${path}`,
            'Content-Type': 'application/json',
            'Content-Length': buffer.length,
        });

        req.setEncoding('utf8');
        const data: any[] = [];
        req.on('data', (chunk: any) => {
            data.push(chunk);
        });
        req.write(buffer);
        req.end();
        req.on('end', () => {
            resolve({ data: data.join() });
            client.close();
        });
    });
}

