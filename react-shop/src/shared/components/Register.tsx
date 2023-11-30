import { useEffect, useRef, useState } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

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
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

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
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if(!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        // console.log(user, pwd);
        // setSuccess(true);
        try {
            const response = await axios.post(REGISTER_URL, 
                JSON.stringify({ user, pwd,  }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response))
            // const url = UrlBase;
            // const response = await fetch(url, {
            //     method: 'POST',
            //     headers: {
            //         'Content-type': 'application/json'
            //     },
            //     body: JSON.stringify({ user, pwd,  })
            // })
            // .then(response => response.json())
            // .then(responseFromServer => {
            //     console.log(responseFromServer);
            //     window.location.reload();
            // });
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <a href="#">Sign In</a>
                </p>
            </section>
        ) : (
                <section>

                    <p ref={errRef} className={errMsg ? "errmsg" : 
                    "offscreen"} aria-live="assertive">{errMsg}</p>

                    <h1>Register</h1>

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
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
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
                            ref={userRef} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                            aria-invalid={validEmail ? "false" : "true"} 
                            aria-describedby="emailnote" 
                            onFocus={() => setEmailFocus(true)} 
                            onBlur={() => setEmailFocus(false)} 
                        />
                        <p id="emailnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                            {/* 4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed. */}
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
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirm Password:
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
                            8 to 24 characters.<br />
                            Must match the first password input field.
                        </p>

                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>

                    <p>
                        Already registered?<br />
                        <span className="line">
                            <a href="#">Sign In</a>
                        </span>
                    </p>

                </section>
            )}
        </>
    )
}

export default Register
