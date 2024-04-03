import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";


const Son = () => {
    return (
        <div className="border-solid border-2 border-yellow-500 m-6 p-6">
            <h1 className="text-2xl text-center">Dad</h1>
            <section className="flex justify-around gap-3">
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
            
        </div>
    );
};

export default Son;