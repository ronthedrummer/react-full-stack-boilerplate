import http from 'http';
import config from './config';

const server = http.createServer();
server.listen(config.port);

console.log('node http server started on port '+config.port);
