import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SignIn = () => {
    const [userID, changeUserID] = useState('');
    const [Pass, changePass] = useState('');
    const [loginStatus, setStatus] = useState('');
    const [users, setUsers] = useState(null);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        fetch('http://localhost:8000/users').then(res => {
            return res.json();
        }).then((data) => {
            setUsers(data);
        })
    }, [])
    const tryLogin = (e) => {
        e.preventDefault();
        const match = users.filter((user) => {
            return user['userID'] == userID && user['password'] == Pass;
        })
        if(match.length == 0){
            setStatus("Incorrect User ID or Password");
        }
        else{
            setStatus("Welcome back, " + match[0]['name']);
        }
    }
    return (  
        <div className="SignIn">
        <h1 className="SignInheader">
            User Sign In
        </h1>
        <p>Do not have an account? <Link to='/SignUp'>Click here</Link></p>
        <form onSubmit={tryLogin}>
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
            <p>{loginStatus}</p>
        </form>
        <p></p>
        </div>
        
    );
}
 
export default SignIn;