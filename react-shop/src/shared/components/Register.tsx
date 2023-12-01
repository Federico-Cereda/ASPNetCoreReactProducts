import { useEffect, useRef, useState } from "react";
import { UrlBase } from "..";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef<any>();
    const emailRef = useRef<any>();
    const errRef = useRef<any>();

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
        userRef.current.focus();
    }, [])

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, email, pwd, matchPwd])

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = EMAIL_REGEX.test(email);
        const v3 = PWD_REGEX.test(pwd);
        if(!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            // const response = await axios.post(UrlBase.API_REGISTER, 
            //     JSON.stringify({ user, email, pwd }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         withCredentials: true
            //     }
            // );
            // console.log(response.data);
            // console.log(response.accessToken);
            // console.log(JSON.stringify(response))
            const url = UrlBase.API_REGISTER;
            const idRole = 1;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ user, email, pwd, idRole })
            })
            console.log(JSON.stringify(response))
            setSuccess(true);
        } catch (err : any) {
            if (!err?.response) {
                setErrMsg('Nessuna risposta del server.');
            } else if (err.response?.status === 409) {
                setErrMsg('E-mail già in uso.');
            } else {
                setErrMsg('Registrazione non riuscita.');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
        {success ? (
            <section>
                <h1>Successo!</h1>
                <p>
                    <a href="#">Accedi</a>
                </p>
            </section>
        ) : (
                <section>

                    <p ref={errRef} className={errMsg ? "errmsg" : 
                    "offscreen"} aria-live="assertive">{errMsg}</p>

                    <h1>Registrazione</h1>

                    <form onSubmit={handleSubmit}>

                        <label htmlFor="username">
                            Username:
                            <span className={validName ? "valid" : "hide"}>
                                {/* <FontAwesomeIcon icon={faCheck} /> */}
                            </span>
                            <span className={validName || !user ? "hide" : "invalid"}>
                                {/* <FontAwesomeIcon icon={faTimes} /> */}
                            </span>
                        </label>
                        <input 
                            type="text" 
                            id="username" 
                            ref={userRef} 
                            onChange={(e) => setUser(e.target.value)} 
                            required 
                            aria-invalid={validName ? "false" : "true"} 
                            aria-describedby="uidnote" 
                            onFocus={() => setUserFocus(true)} 
                            onBlur={() => setUserFocus(false)} 
                        />
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                            Da 4 a 24 caratteri.<br />
                            Deve iniziare con una lettera.<br />
                            Sono ammessi lettere, numeri, trattini bassi e trattini.
                        </p>

                        <label htmlFor="email">
                            E-mail:
                            <span className={validEmail ? "valid" : "hide"}>
                                {/* <FontAwesomeIcon icon={faCheck} /> */}
                            </span>
                            <span className={validEmail || !email ? "hide" : "invalid"}>
                                {/* <FontAwesomeIcon icon={faTimes} /> */}
                            </span>
                        </label>
                        <input 
                            type="text" 
                            id="email" 
                            ref={emailRef} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            aria-invalid={validEmail ? "false" : "true"} 
                            aria-describedby="emailnote" 
                            onFocus={() => setEmailFocus(true)} 
                            onBlur={() => setEmailFocus(false)} 
                        />
                        <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                            Deve contenere una <span aria-label="at symbol">@</span>.<br />
                            L'e-mail e il dominio di primo livello non possono iniziare con un punto.<br />
                            Non sono permessi due punti consecutivi.<br />
                            Sono ammessi lettere, numeri, trattini bassi e trattini.<br />
                            Deve contenere un carattere prima della <span aria-label="at symbol">@</span>.
                        </p>

                        <label htmlFor="password">
                            Password:
                            <span className={validPwd ? "valid" : "hide"}>
                                {/* <FontAwesomeIcon icon={faCheck} /> */}
                            </span>
                            <span className={validPwd || !pwd ? "hide" : "invalid"}>
                                {/* <FontAwesomeIcon icon={faTimes} /> */}
                            </span>
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            onChange={(e) => setPwd(e.target.value)} 
                            required 
                            aria-invalid={validPwd ? "false" : "true"} 
                            aria-describedby="pwdnote" 
                            onFocus={() => setPwdFocus(true)} 
                            onBlur={() => setPwdFocus(false)} 
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                            Da 8 a 24 caratteri.<br />
                            Deve includere lettere maiuscole e minuscole, un numero e un carattere speciale.<br />
                            Caratteri speciali consentiti: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="confirm_pwd">
                            Conferma password:
                            <span className={validMatch && matchPwd ? "valid" : "hide"}>
                                {/* <FontAwesomeIcon icon={faCheck} /> */}
                            </span>
                            <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                                {/* <FontAwesomeIcon icon={faTimes} /> */}
                            </span>
                        </label>
                        <input 
                            type="password" 
                            id="confirm_pwd" 
                            onChange={(e) => setMatchPwd(e.target.value)} 
                            required 
                            aria-invalid={validMatch ? "false" : "true"} 
                            aria-describedby="confirmnote" 
                            onFocus={() => setMatchFocus(true)} 
                            onBlur={() => setMatchFocus(false)} 
                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                            Da 8 a 24 caratteri.<br />
                            Deve corrispondere alla password inserita sopra.
                        </p>

                        <button disabled={!validName || !validEmail || !validPwd || !validMatch ? true : false}>Registrati</button>
                    </form>

                    <p>
                        Sei già registrato?<br />
                        <span className="line">
                            <a href="#">Accedi</a>
                        </span>
                    </p>

                </section>
            )}
        </>
    )
}

export default Register
