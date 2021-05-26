import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation, useRouteMatch } from "react-router";



if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
function LogIn() {
 
  const [newUser,setNewUser]=useState(false);
  
  const [user,setUser]=useState({
    isSingedIn:false,
    name:'',
    email:'',
    password:'',
    photo:''

  });
  

    const [LoggedInUser,setLoggedInUser]=useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    
    let { from } = location.state || { from: { pathname: "/" } };


  
  const handleSignIn=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
   
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
      const {displayName,email,photoURL}=res.user;
      const signedInUser={
        isSingedIn:true,
        name:displayName,
        email:email,
        photo:photoURL

      }
      setUser(signedInUser);
      setLoggedInUser(signedInUser);
      history.replace(from);
    })
  }
  const handleSignOut=()=>{
    firebase.auth().signOut()
    .then(res => {    
      const signOutUser={
        isSingedIn:false,
        name:'',
        email:'',
        photo:'',
        error: '',
        succes:false
      }
      setUser(signOutUser);
    })
  }

  const handleBlur=(e)=>{
    let isFieldValid=true;
    if(e.target.name==="email"){
       isFieldValid=/\S+@\S+\.\S+/.test(e.target.value);
      
    }
    if(e.target.name==="password"){
      isFieldValid=e.target.value.length>6;
      
    }
    if(isFieldValid){
      const newUserInfo={...user};
      newUserInfo[e.target.name]=e.target.value;
      setUser(newUserInfo);
    }

  }

  const handleSubmit=(e)=>{
    console.log(user.name,user.name,user.email,user.password)
    if(newUser && user.email && user.password ){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  .then(res => {
    const newUserInfo={...user};
    newUserInfo.error='';
    newUserInfo.succes=true;
    setUser(newUserInfo);
  })
  .catch((error) => {
    const newUserInfo={...user};
    newUserInfo.error=error.message;
    newUserInfo.succes=false;
    setUser(newUserInfo);
   
  });

    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then(res => {
    const newUserInfo={...user};
    newUserInfo.error='';
    newUserInfo.succes=true;
    setUser(newUserInfo);
    
    setLoggedInUser(newUserInfo);
    history.replace(from);
    console.log('sign in user info',res.user);
  
  })
  .catch((error) => {
    const newUserInfo={...user};
    newUserInfo.error=error.message;
    newUserInfo.succes=false;
    setUser(newUserInfo);
  });
    }
    e.preventDefault();

  }
  return (
    <div style={{textAlign:"center",backgroundColor:"whitesmoke",width:"400px",margin:"auto"}}>
     
     <div className="form-border">
     <h1>Log In</h1>
      <input type="checkbox" name="checkbox" id="" onChange={()=> setNewUser(!newUser)}/>
      <label htmlFor="newUser">New User Sign Up</label>
      
      
      <form onSubmit={handleSubmit}>
        <br/>
        <br/>
       
       { newUser && <input name="name" placeholder="First name" onBlur={handleBlur}/> }
       <br/>
       <br/>
       { newUser && <input name="name" placeholder="Last name" onBlur={handleBlur}/>}
          
          
         
          <br/>
          <br/>
        <input type="email" name="email" id="" placeholder="your email" onBlur={handleBlur} required/>
        <br/>
        <br/>
        <input type="password" name="password" id="" placeholder="your password" onBlur={handleBlur} required/>
        <br/>
        <br/>
        <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
        </form>
        <br/>
        <br/>
        {
        user.isSingedIn ?<button onClick={ handleSignOut} >sing out</button>:
        <button onClick={ handleSignIn} >Sing in with Google</button>
      }
      
      {
        user.isSingedIn && <div>
          <p>welcome,{user.name}</p>
          <p>{user.email}</p>
          <img src={user.photo} alt=""></img>
          
        </div>

      }
        <p style={{color:'red'}}>{user.error}</p>
        {user.succes && <p style={{color:'green'}}>user {newUser ? 'created' : 'Logged In'} successfully</p>}
        
       
     </div>

      </div>
     
    
  );
}

export default LogIn;