

const ResubleCom = ({ hadingName, handleSubmit, Submit }) => {
    const localHandleSubmit = e => {
        e.preventDefault();
         const data={
            name: e.target.name.value,
             
             email: e.target.email.value,
             password:e.target.password.value
             
                
        }
        handleSubmit(data);
    }
    
    return (
        <div>
            <h1 className="text-center text-3xl">{ hadingName}</h1>
            <form className="mb-3 text-center" onSubmit={localHandleSubmit}>
                
                
                <input className="mb-4 mt-3 w-64" type="text" name="name" placeholder="Please write your name " /><br />
                <input className="w-64" type="email" name="email" id="" placeholder="please give your email" /> <br />
                
                <input type="password" name="password" id="" />
               
                <button className="bg-red-500 p-3 m-3 rounded">{ Submit}</button><br />
                </form>
            
        </div>
    );
};

export default ResubleCom;