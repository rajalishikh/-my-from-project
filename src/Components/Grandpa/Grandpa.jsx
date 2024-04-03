import Son from "../Son/Son";
import Uncle from "../Uncle/Uncle";
import Unty from "../Unty/Unty";


const Grandpa = () => {
    return (
        <div className=" border-solid border-2 border-yellow-500 m-6 p-6">
            <h1 className="text-2xl text-center">Grandpa</h1>
            <section className="flex justify-around ">
                <Son></Son>
                <Uncle></Uncle>
                <Unty></Unty>
            </section>
            
        </div>
    );
};

export default Grandpa;