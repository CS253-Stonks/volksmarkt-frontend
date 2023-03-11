import { Link } from "react-router-dom";
import { useState } from "react";

const SignIn = () => {
    const [userID, changeUserID] = useState('');
    const [Pass, changePass] = useState('');

    return (  
        <body className="SignIn">
            <div className="SignIn">
            <h1 className="SignInheader">
                User Sign In
            </h1>
            <p>Do not have an account? <Link to='/SignUp'>Click here</Link></p>
            <form >
                <label>User ID</label>
                <div className="input"></div>
                <input type="text" required 
                value={userID}
                onChange={(e) => changeUserID(e.target.value)}/>
                <label>Password</label>
                <input type="Password" required 
                value={Pass}
                onChange={(e) => changePass(e.target.value)}/>
                <button>Sign In</button>
            </form>
            </div>
        </body>
        
    );
}
 
export default SignIn;