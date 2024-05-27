import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [surnameValid, setSurnameValid] = useState(true);
  const [messageValid, setMessageValid] = useState(true);
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const message = document.getElementById("message").value;

    if (email && email.includes("@") && name && surname && message) {
      setSubmitted(true);
      setEmailValid(true);
      setNameValid(true);
      setSurnameValid(true);
      setMessageValid(true);
    } else {
      setEmailValid(email && email.includes("@"));
      setNameValid(name !== "");
      setSurnameValid(surname !== "");
      setMessageValid(message !== "");

      setMessageError("Tutti i campi devono essere compilati correttamente");
      setTimeout(() => {
        setMessageError("");
      }, 3000);
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <section>
        <h3 className="py-2">Vuoi avere altre info? Contattaci!</h3>
        <div className="container mt-2">
          {!submitted ? (
            <form
              className="border border-solid p-3 text-center"
              onSubmit={handleSubmit}
            >
              <div className="form-group mb-3">
                <input
                  type="text"
                  className={"form-control " + (!nameValid ? "is-invalid" : "")}
                  id="name"
                  placeholder="Inserisci il tuo nome"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className={
                    "form-control " + (!surnameValid ? "is-invalid" : "")
                  }
                  id="surname"
                  placeholder="Inserisci il tuo cognome"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className={
                    "form-control " + (!emailValid ? "is-invalid" : "")
                  }
                  id="email"
                  placeholder="Inserisci la tua email"
                />
              </div>
              <div className="form-group mb-3">
                <textarea
                  className={
                    "form-control " + (!messageValid ? "is-invalid" : "")
                  }
                  id="message"
                  rows="3"
                  placeholder="Inserisci il tuo messaggio"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-success mt-2 rounded-pill"
              >
                Invia
              </button>
              {messageError && (
                <div
                  className="alert alert-danger mt-1 fixed-bottom start-50 translate-middle-x"
                  role="alert"
                >
                  {messageError}
                </div>
              )}
            </form>
          ) : (
            <div className="text-center">
              <p>Grazie per averci contattato!</p>
            </div>
          )}
        </div>
        <div className="d-flex justify-content-center py-4">
          <Link to="/" className="btn btn-success rounded-pill">
            Ritorna alla pagina principale
          </Link>
        </div>
      </section>
    </div>
  );
}
