import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import './Register.css';
import { UrlBase } from "..";
import { useRegister } from "./useRegister";
import { UtenteRegister } from "../../model";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const { close } = useRegister()
    const userRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const[errMsg, setErrMsg] = useState('');
    const[success, setSuccess] = useState(false);
    
    useEffect(() => {
        userRef.current?.focus();
    }, [])

    useEffect(() => {
        emailRef.current?.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);  
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, email, pwd, matchPwd])

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrMsg('');
        const v1 = USER_REGEX.test(user);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = PWD_REGEX.test(pwd);
        if(!v1 || !v2 || !v3) {
            setErrMsg("Campo non valido");
            return;
        }
        const url = UrlBase.API_REGISTER;
        const utente : UtenteRegister = {
            username: user,
            email: email,
            password: pwd,
            idRuolo: 1
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(utente)
            });
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }        
            setSuccess(true);
            setUser('');
            setEmail('');
            setPwd('');
            setMatchPwd('');
        } 
        catch (error) {
            if (`${error}` === 'Error: 400 Bad Request') {
                setErrMsg(`${error} || E-mail già in uso`);
            } else if (`${error}` === 'TypeError: Failed to fetch') {
                setErrMsg(`${error} || Nessuna risposta del server`);
            } else {
                setErrMsg(`${error} || Registrazione non riuscita`)
            }
            errRef.current?.focus();
        }

    }

    return (
        <>
        {success ? (
            <section className="popup">
                <div className="popup-inner">
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn-close" onClick={close}></button>
                    </div>
                    <div className="text-center text-muted">
                        <h6>Registrazione effettuata correttamente!</h6>
                        <a href="#" className="fw-bold text-body ms-1">Accedi</a>
                    </div>
                </div>
            </section>
        ) : (
                <section className="popup">
                    <div className="popup-inner">

                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-between">
                            <h2>Registrazione</h2>
                            <button type="button" className="btn-close" onClick={close}></button>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="form-group mt-3">
                                <label htmlFor="username">
                                    <h6>
                                        Username
                                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                                    </h6>
                                </label> <br />
                                <input 
                                    type="text" 
                                    id="username" 
                                    ref={userRef} 
                                    autoComplete="off" 
                                    onChange={(e) => setUser(e.target.value)} 
                                    value={user} 
                                    required 
                                    aria-invalid={validName ? "false" : "true"} 
                                    aria-describedby="uidnote" 
                                    onFocus={() => setUserFocus(true)} 
                                    onBlur={() => setUserFocus(false)} 
                                    className="form-control" 
                                />
                                <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
                                    Da 4 a 24 caratteri.<br />
                                    Deve iniziare con una lettera.<br />
                                    Sono ammessi lettere, numeri, trattini bassi e trattini.
                                </p>
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="email">
                                    <h6>
                                        E-mail
                                        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                                    </h6>
                                </label> <br />
                                <input 
                                    type="text" 
                                    id="email" 
                                    ref={emailRef} 
                                    autoComplete="off" 
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} 
                                    required 
                                    aria-invalid={validEmail ? "false" : "true"} 
                                    aria-describedby="emailnote" 
                                    onFocus={() => setEmailFocus(true)} 
                                    onBlur={() => setEmailFocus(false)} 
                                    className="form-control" 
                                />
                                <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
                                    L'e-mail e il dominio di primo livello non possono iniziare con un punto.<br />
                                    Non sono ammessi punti consecutivi. Deve contenere una <span aria-label="at symbol">@</span> e un carattere prima.<br />
                                    Sono ammessi lettere, numeri, trattini bassi e trattini.<br />
                                </p>
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="password">
                                    <h6>
                                        Password
                                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                    </h6>
                                </label> <br />
                                <input 
                                    type="password" 
                                    id="password" 
                                    onChange={(e) => setPwd(e.target.value)} 
                                    value={pwd}
                                    required 
                                    aria-invalid={validPwd ? "false" : "true"} 
                                    aria-describedby="pwdnote" 
                                    onFocus={() => setPwdFocus(true)} 
                                    onBlur={() => setPwdFocus(false)} 
                                    className="form-control" 
                                />
                                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
                                    Da 8 a 24 caratteri.<br />
                                    Deve includere lettere maiuscole e minuscole, un numero e un carattere speciale.<br />
                                    Caratteri speciali consentiti: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                </p>
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="confirm_pwd">
                                    <h6>
                                        Conferma password
                                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                    </h6>
                                </label> <br />
                                <input 
                                    type="password" 
                                    id="confirm_pwd" 
                                    onChange={(e) => setMatchPwd(e.target.value)} 
                                    value={matchPwd} 
                                    required 
                                    aria-invalid={validMatch ? "false" : "true"} 
                                    aria-describedby="confirmnote" 
                                    onFocus={() => setMatchFocus(true)} 
                                    onBlur={() => setMatchFocus(false)} 
                                    className="form-control" 
                                />
                                <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
                                    Da 8 a 24 caratteri.<br />
                                    Deve corrispondere alla password inserita sopra.
                                </p>
                            </div>

                            <div className="d-grid gap-2 col-6 mx-auto my-3">
                                <button className="btn btn-primary" disabled={!validName || !validEmail || !validPwd || !validMatch ? true : false}>Registrati</button>
                            </div>

                        </form>

                        <p className="text-center text-muted">
                            Sei già registrato?
                            <a href="#" className="fw-bold text-body ms-1">Accedi</a>
                        </p>

                    </div>
                </section>
            )}
        </>
    )
}

export default Register
