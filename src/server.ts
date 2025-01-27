import { Server } from 'http';
import app from './app';
import { Request, Response} from 'express';

let server: Server;

async function bootstrap() {
    // Listening to server
    server = app.listen(5000, () => console.log("Server Running On Port 5000"));

    //
    app.get("/", (req: Request, res: Response)=> {
        res.send({success: true, message: "Successfully Created First Server!"})
    })
}

bootstrap();