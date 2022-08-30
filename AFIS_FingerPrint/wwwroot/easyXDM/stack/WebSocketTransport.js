// Based on HTTPTransport.js from EasyXDM

/**
 * @class easyXDM.stack.WebSocketTransport
 * WebSocketTransport is a transport class that can be used to call functions on a remote server over a web socket connection.<br/>
 * This can be useful for testing and for when the main application supports both internal and external sources.
 * @namespace easyXDM.stack
 * @constructor
 * @param {Object} config The transports configuration.
 * @cfg {String} remote The remote communication endpoint.
 */
easyXDM.stack.WebSocketTransport = function (config) {
    // #ifdef debug
    var trace = debug.getTracer("easyXDM.stack.WebSocketTransport");
    trace("constructor");
    // #endif
    var pub, frame, ready, url;

    var onWebsocketMessage;
    var outgoingMessage;

    ready = false;


    var rpcWebSocket;


    websocket_JSON_Post = function (url, data, callback, sync) {
        onWebsocketMessage = callback;
        if (ready) {
            rpcWebSocket.send(data);
            outgoingMessage = undefined;
        } else {
            outgoingMessage = data;
        }
    };


    return (pub = {
        outgoing: function (message, domain, fn) {
            websocket_JSON_Post(url, message, fn, true);
        },
        destroy: function () {
            // #ifdef debug
            trace("destroy");
            // #endif
            if (frame) {
                frame.parentNode.removeChild(frame);
                frame = null;
            }
        },
        onDOMReady: function () {
            // #ifdef debug
            trace("init");
            // #endif
            url = config.remote;

            rpcWebSocket = new WebSocket(url);
            rpcWebSocket.onopen = function (event) {
                ready = true;
                if (outgoingMessage) {
                    rpcWebSocket.send(outgoingMessage);
                }
            };
            rpcWebSocket.onclose = function (event) {
                ready = false;
            };
            rpcWebSocket.onerror = function () {
                ready = false;
                if (rpcWebSocket)
                    rpcWebSocket.close();
                rpc = undefined;
                trace("Lost connection to web SDK service")
                // Retry after delay in case service wasn't running yet
                setTimeout(() => {
                        rpcWebSocket = new WebSocket(url);
                    },
                        5 * 1000
                    );

            };
            rpcWebSocket.onmessage = function (event) {

                onWebsocketMessage(event.data);
            };


        },
        init: function () {
            whenReady(pub.onDOMReady, pub);
        }
    });
};
