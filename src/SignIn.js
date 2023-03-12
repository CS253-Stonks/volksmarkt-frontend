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
        var found = false;
        console.log(userID);
        console.log(Pass);
        setStatus('');
        setLoading(true);
        e.preventDefault();
        
        users.map((user) => {
            if(user['userID'] == userID && user['password'] == Pass){
                setStatus("Login Successful. Redirecting...");
                setLoading(false);
                //redirect using useHistory: ToDo
            }
        })
        if(!isLoading && loginStatus == ''){
            console.log("there\n" + loginStatus + isLoading);
            setStatus("Incorrect UserID or Password");
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