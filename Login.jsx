import React, {useState} from "react";




export const Login = (props) => {
    const [email, setEmail] = useState ('');
    const [pass, setPass] = useState ('');
    const [Forgetpassword, setForgetPassword] = useState ('');
    const [rememberMe, setRememberMe] = useState ('');
    const [user, setUser] = useState ('');
   




    const handleSubmit = (e) => {
        e.preventDefault ();
        console.log(email);

 }

     return (
        <div className="auth-form-container" >
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
        
        <label htmlFor="email">email</label>
        <input value= {email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Username" id="email" name="email"  />
        <label htmlFor="password">password</label>
        <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password"  />
        
        {'ForgetPassword'? (
          <>
            <label htmlFor="forget-password">
              <button
                className="link-btn"
                id="forget-password"
                onClick="handleForgotPassword"
              >
                Forgot password?
              </button>
            </label>
            <label htmlFor="rememberMe">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                id="rememberMe"
                name="rememberMe"
              />
              Remember me
            </label>
            <button type="submit">LOG IN</button>
          </>
        ) : (
          <p>Forgot password form goes here</p>
          // Implement your forgot password form or logic here
        )}
      </form>

        <button className="link-btn" onClick={() => props.onFormSwitch('register')} >Not a user? Sing up for the best deals!</button>

        </div>
    )
}