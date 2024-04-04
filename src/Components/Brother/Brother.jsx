import { useContext } from "react";
import { FoodContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const [money, setMoney] = useContext(FoodContext);
    return (
        <div>
            <h2 className="border-solid border-2 border-yellow-500 m-6 p-6">Brother</h2>
            <p>Today I bring some Food for my brother which price is {money}</p>
            <button className="bg-teal-800 p-3 m-2" onClick={()=>setMoney(money+1000)}> Add more money</button>

            
        </div>
    );
};

export default Brother;