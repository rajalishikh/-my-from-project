import CousinRohan from "../CousinRohan/CousinRohan";
import CousinSohan from "../CousinSohan/CousinSohan";


const Unty = () => {
    return (
        <div className="border-solid border-2 border-yellow-500 m-6 p-6">
            <h1 className="text-center" >Aunty</h1>
            <section className="flex justify-between gap-3">
                <CousinRohan  ></CousinRohan>
                <CousinSohan></CousinSohan>
            </section>
        </div>
    );
};

export default Unty;