import React, { useState} from "react";



export const Register = (props) => {

    
    

    const [email, setEmail] = useState ('');
    const [emailError, setEmailError] = useState(false);
     const [pass, setPass] = useState ('');
    const [FirstName, setFirstName] = useState ('');
    const [LastName, setLastName] = useState ('');
    const [PhoneNumber,setPhoneNumber] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [step, setStep] = useState(1);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordError, setPasswordError] = useState(false);


    const handleNextStep = () => {
      if (step === 1 && (!email || !FirstName || !LastName || !PhoneNumber)) {
        console.log("Please fill in all the required fields");
        return;
      }

      if (step === 1 && !email.includes("@")) {
        setEmailError(true);
        return;
      }
  
      if (step === 2 && (password !== confirmPassword)) {
        console.log("Passwords do not match");
        return;
      }
      if (step === 2 && password !== "correct") {
        setPasswordError(true);
        return;
      }

      if (step === 1 && (!/^\d+$/.test(PhoneNumber) || PhoneNumber.length < 10)) {
        console.log("Phone number must contain at least 10 digits");
        return;
      }
  
      setPasswordError(false);
      setStep(step + 1);
   
    };

    const validateEmail = (email) => {
      // Basic email validation regex (can be improved depending on your requirements)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
  
    const handlePreviousStep = () => {
      setStep(step - 1);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setPasswordsMatch(e.target.value === confirmPassword);
      setPasswordError(false);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
      setPasswordsMatch(e.target.value === password);
      setPasswordError(false);
    };

    const validatePassword = (value) => {
      // At least 8 characters, one number digit, and one special character
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
      return passwordRegex.test(value);
    };
  

    return (
      <div className="auth-form-container">
        <h2>Create an account</h2>
  
        <div className="step-buttons">
          <button
            className={step === 1 ? "active-step" : "signup"}
            onClick={() => setStep(1)}
          >
            Sign Up
          </button>
          <button
            className={step === 2 ? "active-step" : ""}
            onClick={() => setStep(2)}
          >
            Create Password
          </button>
          <button
            className={step === 3 ? "active-step" : ""}
            onClick={() => setStep(3)}
          >
            Register Successful
          </button>
        </div>

    {step ===1 && (
     <form className="register-form" >
     
        <label htmlFor="FirstName"></label>
        <div className="register form"></div>
        <input value= {FirstName} onChange={(e) => setFirstName(e.target.value)} type ="FirstNamee" placeholder="FirstName" id="FirstName" name="FirstName"  />
        <label htmlFor="LastName"></label>
        <input value= {LastName} onChange={(e) => setLastName(e.target.value)} type ="LastName" placeholder="LastName" id="LastName" name="LastName"  />
        <label htmlFor="PhoneNumber"></label>
        <input value= {PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} type ="tel" pattern="[0-9]*" inputMode="numeric" placeholder="PhoneNumber" id="PhoneNumber" name="Phone Number"  /> 
        <label htmlFor="email"></label>
        <input value= {email} onChange={(e) => setEmail(e.target.value)} type ="email" placeholder="email" id="email" name="email"  />
        <span className="additional-text">This is the email you will use to login to your Travels account</span>
      
        <button type="button" onClick={handleNextStep}>
            Next
          </button>
          <button type="button" onClick={() => setStep(1)}>
            Previous
          </button>

        </form>
        )}
      

      
      {step === 2 && (
        <form>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            id="confirm-password"
            name="confirm-password"
          />
          {!passwordsMatch && (
            <p className="error-message">Passwords do not match</p>
          )}
          {passwordError && (
            <p className="error-message">Incorrect password</p>
          )}
          
          <button type="button" onClick={handleNextStep}>
            Next
          </button>
          <button type="button" onClick={handlePreviousStep}>
            Previous
          </button>
        </form>
      )}

      {step === 3 && (
        <div>
          <h3>Registration Successful!</h3>
          <p>You have successfully registered your account.</p>
        </div>
      )}
    </div>
  );
}