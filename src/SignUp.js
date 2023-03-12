import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Signup = () => {
    const [userID, setUserID] = useState('');
    const [name, setName] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [msg, setMsg] = useState('');
    const [users, setUsers] = useState(null);
    const tryRegister = (e) => {
        e.preventDefault();
        if(pass1 != pass2){
            setMsg("The passwords don't match");
        }
        else{
            fetch('http://localhost:8000/users').then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                setUsers(data);
            });
            const match = users.filter(user => {
                return user['userID'] == userID;
            })

            if(match.length != 0){
                setMsg("Sorry, User ID already taken");
            }
            else{
                const userDetails = {name, userID, pass1};
                fetch('http://localhost:8000/users', {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(userDetails)
                } ).then(() => {
                    console.log("new user added");
                    setMsg("Registration successful");

                });

            }
        }
    }

    return ( 
        <div className="SignUp">
            <h1>User Sign Up</h1>
            <p>Already have an account? <Link to='/SignIn'></Link></p>
            <form onSubmit={tryRegister}>
            <label>User ID</label>
            <input type="text" required 
            value={userID}
            onChange={(e) => setUserID(e.target.value)}/>
            <label>Name</label>
            <input type="text" required 
            value={name}
            onChange={(e) => setName(e.target.value)}/>
            <label>Enter Password</label>
            <input type="text" required 
            value={pass1}
            onChange={(e) => setPass1(e.target.value)}/>
            <label>Reenter Password</label>
            <input type="text" required 
            value={pass2}
            onChange={(e) => setPass2(e.target.value)}/>
            <button>Sign Up</button>
            </form>
            <p>{ msg }</p>
        </div>
    );
}
 
export default Signup;