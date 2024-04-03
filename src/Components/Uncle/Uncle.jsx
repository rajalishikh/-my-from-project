import CousinAyesha from "../CousinAyesha/CousinAyesha";
import CousinMaisha from "../CousinMaisha/CousinMaisha";


const Uncle = () => {
    return (
        <div className="border-solid border-2 border-yellow-500 m-6 p-6">
            <h1 className="text-center">Uncle</h1>
            <section className="flex justify-between gap-4">
            <CousinAyesha></CousinAyesha>
            <CousinMaisha></CousinMaisha>
           </section>
        </div>
    );
};

export default Uncle;