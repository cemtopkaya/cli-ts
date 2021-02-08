"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var http2 = __importStar(require("http2"));
function put(_a) {
    var url = _a.url, path = _a.path, body = _a.body, _b = _a.cert, cert = _b === void 0 ? null : _b;
    return new Promise(function (resolve) {
        var _a;
        var client;
        client = !!cert ? http2.connect(url, { key: fs.readFileSync(cert) }) : client = http2.connect(url);
        var bodyString = JSON.stringify(body);
        var buffer = Buffer.from(bodyString);
        var hdr_sch = url.includes('https') ? 'https' : 'http';
        var req = client.request((_a = {},
            _a[http2.constants.HTTP2_HEADER_SCHEME] = hdr_sch,
            _a[http2.constants.HTTP2_HEADER_METHOD] = http2.constants.HTTP2_METHOD_PUT,
            _a[http2.constants.HTTP2_HEADER_PATH] = "" + path,
            _a['Content-Type'] = 'application/json',
            _a['Content-Length'] = buffer.length,
            _a));
        req.setEncoding('utf8');
        var data = [];
        req.on('data', function (chunk) {
            data.push(chunk);
        });
        req.write(buffer);
        req.end();
        req.on('end', function () {
            resolve({ data: data.join() });
            client.close();
        });
    });
}
exports.default = put;
//# sourceMappingURL=put.js.map