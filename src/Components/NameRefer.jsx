import { useEffect, useRef } from "react";

const NameRefer = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(useName.current.value)
        console.log(useEmail.current.value)

    }
    // use hooks for cursol 
    
    // hooks of referce
    const useName = useRef(null);
    const useEmail = useRef(null);

    useEffect(() => {
        useName.current.focus();

    },[])
    return (
        <div>
             <form className="mb-3 text-center" onSubmit={handleSubmit}>
                <input ref={useName} className="mb-4 mt-3" type="text" name="name" /><br />
                <input type="email" name="email" id="" ref={useEmail} /><br />
                <button className="bg-red-500 p-3 m-3 rounded">Submit</button>

            </form>
            
        </div>
    );
};

export default NameRefer;