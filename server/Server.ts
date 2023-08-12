import express,{Application} from 'express';
import cors from 'cors';
import user from '../routes/user';

class Server {
    private app: Application;
    private server:  any;
    private port: string;
    private apiPaths = {
        user: "/api/user"
    };
    middleware() {
        this.app.use(cors({origin: '*'}));
        this.app.use(express.json())
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '7070';
        this.server = require('http').createServer(this.app);
        this.middleware();
        this.routes();

    }

    routes() {
        this.app.use(this.apiPaths.user, user);
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log('✓ The server Teletaxi is runing in port: '+this.port);
        })
    }
}
export default Server;