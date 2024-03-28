

const FromSubmit = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e)
        console.log('Submit your name ');
        console.log(e.target.name.value);
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form className="mb-3 text-center" onSubmit={handleSubmit}>
                <input className="mb-4 mt-3" type="text" name="name" /><br />
               <input type="email" name="email" id="" /><br />
                <button className="bg-red-500 p-3 m-3 rounded">Submit</button>
            </form>
            
        </div>
    );
};

export default FromSubmit;