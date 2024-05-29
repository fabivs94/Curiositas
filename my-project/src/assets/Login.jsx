import { useState } from "react";

export default function Login() {
  const users = [
    { username: "Fabio", password: "sitar" },
    { username: "John", password: "walrus" },
    { username: "Fab4", password: "bandontherun" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [wrongLogin, setWrongLogin] = useState(false);

  function formSubmissionHandler(event) {
    event.preventDefault();
  }

  function checkLogin() {
    let found = false;
    for (let i = 0; i < users.length; i++) {
      if (username === users[i].username && password === users[i].password) {
        found = true;
        break;
      }
    }
    if (found) {
      setWrongLogin(false);
      setTimeout(() => {
        alert("Benvenuto " + username);
        window.location.href = "/";
      }, 0);
    } else {
      setWrongLogin(true);
    }
  }

  return (
    <div className="d-flex justify-content-center">
      <section>
        <div className="container mt-3">
          <form className="border border-secondary rounded p-5 text-center" 
            onSubmit={formSubmissionHandler}>
            <div className="form-group mb-3">
              <input
                value={username}
                type="text"
                className="form-control mx-auto w-77"
                onChange={(event) => setUsername(event.target.value)}
                placeholder="username"
              />
            </div>
            <div className="form-group mb-2">
              <input
                value={password}
                type="password"
                className="form-control mx-auto w-77"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="password"
              />
            </div>
            <button
              type="submit"
              onClick={checkLogin}
              className="btn btn-success rounded-pill mx-auto w-20 mt-3"
            >
              Login
            </button>
            {wrongLogin && (
              <div className="text-center text-danger">
                Credenziali errate!
              </div>
            )}
          </form>
        </div>
        <div className="d-flex justify-content-center">
        </div>
      </section>
    </div>
  );
}