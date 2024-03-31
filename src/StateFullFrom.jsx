import { useState } from "react";


const StateFullFrom = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit = e => {
        e.preventDefault()
        
        if (password.length < 6) {
            setError('Please add at least 6 characters or more then Six word')
        } else {
            setError('');
            console.log(email, password)

        }
    }
    // handle click for email 
    const handleChangeEmail = e => {
        console.log(e.target.value)
        setEmail(e.target.value);
    }
    // handle click for Password 
    const handleChangePassword = e => {
        console.log(e.target.value)
        setPassword(e.target.value);
        
    }


    return (
        <div>
             <div>
                <form className="mb-3 text-center " onSubmit={handleSubmit} >
                    {/* input of name  */}
                    <input
                        
                        className="mb-4 mt-3 w-96 p-3 text-center" type="text" name="name" placeholder="Please give me your name " /><br />
                    {/* input of email */}
                    <input
                        onChange={handleChangeEmail}
                        className="mb-4 mt-3 w-96 p-3 text-center" type="email" name="email" id="" placeholder="give me your email " /><br />
                    {/* input of password */}
                    <input
                        onChange={handleChangePassword}
                        className="mb-4 mt-3 w-96 p-3 text-center" type="password" name="password " placeholder="Give me your password" /><br />

                    <button className="bg-red-500 p-3 m-3 rounded">Submit</button>
                    {
                        error &&<p> {error} </p> 
                    }
            </form>
            
        </div>
            
        </div>
    );
};

export default StateFullFrom;