import { Server } from "http";
import  {NextApiRequest} from "next";
import {Server as ServerId} from "socket.io";

import { NextApiResponseServerIo } from "@/types";

export const config = {
    api: {
        bodyParser: false,
    },
};

const ioHandler = (req: NextApiRequest, res: NextApiResponseServerIo) => {
    if (!res.socket.server.io) {
        const path = "/api/socket/io";
        const httpServer = res.socket.server as any;
        const io = new ServerId(httpServer, {
            path: path,
            addTrailingSlash: false,
        });
        res.socket.server.io = io;
    }
    res.end();
}
 
export default ioHandler;