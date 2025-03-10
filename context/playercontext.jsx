import { createContext } from "react";

export const Playercontext = createContext();

const PlayercontextProvider = (props)=>{


    const contextValue = {


    }

    return (


        <Playercontext.Provider value={contextValue}>

            {props.children}
        </Playercontext.Provider>
    )
}

export default PlayercontextProvider