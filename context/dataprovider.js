import React from 'react';
import { useSetState } from 'react-use';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { useContext } from "react";

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

    const setDuckies = (duckies) => setState({ duckies });
    const setRoundabouts = (roundabouts) => setState({ roundabouts });
    const setWsInstance = (wsInstance) => setState({ wsInstance });

    const fetchData = () => {
        if (state.wsInstance == null) {
            const client = new W3CWebSocket('wss://socketsbay.com/wss/v2/2/demo/');
            client.onopen = onOpen
            client.onmessage = onMessage
            client.onError = onError
            client.onClose = onClose
            setWsInstance(client)
        }
    }

    //indicates that the connection is ready to send and receive data
    function onOpen(event) {
        console.log("connected");
    }

    //An event listener to be called when a message is received from the server
    function onMessage(event) {
        const jsonData = JSON.parse(event.data)
        console.log(jsonData)

        switch (jsonData.type) {
            case "allDuckies":
                const allDuckiesData = jsonData.data
                data.map(duck => {
                    const existingDuckiesIds = state.duckies.map(duck => duck.id)
                    if (!existingDuckiesIds.includes(duck.id)) {
                        setDuckies([...state.duckies, duck])
                    } else {
                        setDuckies(
                            state.duckies.map(existingDuck => {
                                return (duck.id === existingDuck.id) ? mergeJSONs(existingDuck, duck) : existingDuck
                            })
                        )
                    }
                })

                break;

            case "locationUpdate":
                const locationUpdateData = jsonData.data

                const existingDuckiesIds = state.duckies.map(duck => duck.id)
                if (!existingDuckiesIds.includes(locationUpdateData.id)) {
                    locationUpdateData["name"] = "Duckie"
                    locationUpdateData["picture"] = null
                    locationUpdateData["lastSeen"] = new Date()

                    setDuckies([...state.duckies, locationUpdateData])
                    console.log("Set new Duckie Location update")
                    console.log(state.duckies)
                } else {
                    setDuckies(
                        state.duckies.map(existingDuck => {
                            return (locationUpdateData.id === existingDuck.id) ? mergeJSONs(existingDuck, locationUpdateData) : existingDuck
                        })
                    )
                    console.log("Updated Duckie Location")
                    console.log(state.duckies)
                }

                break;

            default:
                console.log("unknowen event type")
                console.log(jsonData)

                console.log(state)
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

    const mergeJSONs = (json1, json2) => {
        if (json1 == null) {
            return json2
        }
        if (json2 == null) {
            return json1
        }
        for (var key in json2) {
            json1[key] = json2[key];
        }
        return json1;
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