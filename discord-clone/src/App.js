import React, {useEffect} from 'react';
import Sidebar from './sidebar'
import { useDispatch,useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Chat from './chat'
import './App.css';
import Login from './login'
import { login, logout } from './features/userSlice'
import {auth} from "./firebase";

function App() {
    const dispatch = useDispatch(); //used to shoot the data into layer (here user data into data layer)
    const user = useSelector(selectUser);
    useEffect(()=> {
        auth.onAuthStateChanged((authUser)=>{
            console.log('user is',authUser)
            if(authUser){
                //the user is logged in
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photoURL,
                    email: authUser.email,
                    displayName: authUser.displayName
                })
            )
            }else{
                //the user is logged out
                dispatch(logout());
            }
        })
    },[dispatch])
  return (
    <div className="app">
        {user ? (
            <>
                <Sidebar />
                <Chat />
            </>
        ):(
            <Login/>
        )}
    </div>
  );
}

export default App;
