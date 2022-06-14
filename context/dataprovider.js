import React from 'react';
import { useSetState } from 'react-use';
import { w3cwebsocket as W3CWebSocket } from "websocket";

export const DataContext = React.createContext(null);

const initialState = {
    duckies: [

    ],
    roundabouts: [

    ],
    wsInstance: null
}

export const ContextProvider = props => {
    const [state, setState] = useSetState(initialState);

    const setDuckies = (dukies) => setState({ dukies });
    const setRoundabouts = (roundabouts) => setState({ roundabouts });
    const setWsInstance = (wsInstance) => setState({ wsInstance });

    const fetchData = () => {
        if (state.wsInstance == null) {
            const client = new W3CWebSocket('wss://socketsbay.com/wss/v2/2/demo/');
            client.onopen = onOpen
            client.onmessage = onMessage
            client.onError = onError
            setWsInstance(client)
        }
    }

    //indicates that the connection is ready to send and receive data
    function onOpen(event) {
        console.log("connected");
    }

    //An event listener to be called when a message is received from the server
    function onMessage(event) {
        const data = JSON.parse(event.data)
        console.log(data)

        switch (data.type) {
            case "locationUpdate":



                break;
            case "allDuckies":
                // code block
                break;
            default:
                console.log("unknowen event type")
                console.log(data)
        }
    }

    //An event listener to be called when an error occurs. This is a simple event named "error".
    function onError(event) {
        console.log(JSON.stringify(event.data));
    }

    //An event listener to be called when the WebSocket connection's readyState changes to CLOSED.
    function onClose(event) {
        console.log(JSON.stringify(event.data));
    }

    return (
        <DataContext.Provider
            value={{
                state,
                fetchData
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};