import React from 'react';
import './sign-in-and-sign-up.styles.scss';




class SignInAndSignUpPage extends React.Component {
    render() {
        return (
            <div className='signup-signin-page'>
               <div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label htmlFor="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<input id="check" type="checkbox" className="check" />
					<label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In"/>
				</div>
				<div className="group">
					<input type="submit" className="button googlesign"   value="Sign-In with Google"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<div className="sign-up-htm">
				<div className="group">
					<label htmlFor="user" className="label">Username</label>
					<input id="user" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password"/>
				</div>
				<div className="group">
					<label htmlFor="email" className="label">Email Address</label>
					<input id="email" type="text" className="input"/>
				</div>
				<div className="group">
					<label htmlFor="pass" className="label">Mobile number:</label>
					<input id="pass" type="text" className="input"/>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up"/>
				</div>
				<div className="hr"></div>
			</div>
		</div>
	</div>
</div>
            </div>
        )
    }
};

export default SignInAndSignUpPage;