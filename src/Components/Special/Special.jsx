import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = () => {
    const Gold=useContext(AssetContext)
    return (
        <div>
            <h1 className="border-solid border-2 border-yellow-500 m-6 p-6">Special</h1>
            <p>Dada Tar nat bou er jonno ata diesilo { Gold}</p>
            
        </div>
    );
};

export default Special;