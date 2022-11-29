import 'reflect-metadata';
import * as http from 'http';
import App from './app';

const port = process.env.PORT || 3000;

App.set('port', port);
const server = http.createServer(App);
server.listen(port);

server.on('listening', function(): void {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr?.port}`;

    console.info(`Listening on ${bind}`);
 });

module.exports = App;
