import React from 'react'
import './login.css'
import { auth,provider } from './firebase';
import {button} from '@material-ui/core'


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message));
    }
    return (
        <div className='login'>
            <div className='login_logo'>
                <img className='logo_discord' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Flearningisliving.dk%2Fwp-content%2Fuploads%2F2019%2F06%2Fdiscord-logo-small.png%3Fssl%3D1&f=1&nofb=1' alt='discord-logo'/>
            </div>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login