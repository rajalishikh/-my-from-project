import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const CousinRohan = () => {
    const gold=useContext(AssetContext)
    return (
        <div className="border-solid border-2 border-yellow-500 m-6 p-6">
            <h2>CousinRohan</h2>
            <p>{ gold}</p>
        </div>
    );
};

export default CousinRohan;