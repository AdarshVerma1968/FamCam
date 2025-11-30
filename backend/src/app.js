import express from 'express';
import { createServer } from 'node:http'; // connecting socket.io with http server
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import cors from 'cors';
import { connect } from 'node:http2';
import { connectToSocket } from './controllers/socketManager.js';
import userRoutes from './routes/users.routes.js';
// import { log } from 'node:console';

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: '40kb'}));
app.use(express.urlencoded({ limit: '40kb', extended: true}));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user");
    const connectionDb = await mongoose.connect('mongodb+srv://adarshvermabhel_db_user:3KzLebQCWnhnydmI@cluster0.emhze6z.mongodb.net/')
    console.log(`MONGO Connected DB HOst: ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("listing to port 8000");
    });
 
}

start();