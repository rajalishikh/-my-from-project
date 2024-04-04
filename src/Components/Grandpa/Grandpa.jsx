import { createContext, useState } from "react";
import Son from "../Son/Son";
import Uncle from "../Uncle/Uncle";
import Unty from "../Unty/Unty";

export const AssetContext = createContext('Dimond');
export const FoodContext = createContext();



const Grandpa = () => {
    const[money,setMoney]=useState(1000)
    return (
        <div className=" border-solid border-2 border-yellow-500 m-6 p-6">
            <h1 className="text-2xl text-center">Grandpa</h1>
            <p>My grandpa Have total money { money}</p>
            <FoodContext.Provider value={[money,setMoney]}>
            <AssetContext.Provider value={'Gold Ring'}>
            <section className="flex justify-around ">
                <Son></Son>
                <Uncle></Uncle>
                <Unty></Unty>
            </section>
            </AssetContext.Provider>
            </FoodContext.Provider>
            
        </div>
    );
};

export default Grandpa;