import * as path from "path";
import { HttpServer } from "tsrpc";
import { Global } from './db/Global';
import { serviceProto } from "./shared/protocols/serviceProto";

// Create the Server
export const server = new HttpServer(serviceProto, {
    port: 3000,
    // Remove this to use binary mode (remove from the client too)
    json: true
});

// Initialize before server start
async function init() {
    // Auto implement APIs
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)
    await Global.initDb(server.logger);
};

// Entry function
async function main() {
    await init();
    await server.start();
};
main();