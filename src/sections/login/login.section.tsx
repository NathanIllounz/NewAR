import React, { useState, ChangeEvent, FormEvent } from "react";
// interface LoginProps {
//   onFormSwitch: (formName: string) => void;
// }

export const LoginSection: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">
          Enter your Email
          <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        </label>

        <label htmlFor="password">
          Enter your Password
          <input
          value={pass}
          onChange={handlePassChange}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
