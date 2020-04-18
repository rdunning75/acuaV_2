import { Socket } from 'socket.io';
/**
 * A demo controller for websocket
 */
export declare class WebSocketController {
    private socket;
    constructor(socket: Socket);
    /**
     * The method is invoked when a client connects to the server
     * @param socket
     */
    connect(socket: Socket): void;
    /**
     * Register a handler for 'chat message' events
     * @param msg
     */
    handleChatMessage(msg: unknown): void;
    /**
     * Register a handler for all events
     * @param msg
     */
    logMessage(...args: unknown[]): void;
    /**
     * The method is invoked when a client disconnects from the server
     * @param socket
     */
    disconnect(): void;
}
