import { useEffect, useRef, useState } from 'react';
import { UrlBase, useLogin, useRegister } from '..';
import { UtenteLogin } from '../../model';
import './Popup.css';

const Login = () => {
    const { closeLogin } = useLogin()
    const { openRegister } = useRegister()

    const emailRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current?.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrMsg('');
        const url = UrlBase.API_LOGIN;
        const utente : UtenteLogin = {
            email: email,
            password: pwd
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(utente)
            });
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`)
            }   
            setEmail('');
            setPwd('');
            setSuccess(true);
        } catch (error) {
            console.log(error);
            if (`${error}` === 'Error: 400 Bad Request') {
                setErrMsg(`${error} || E-mail o Password errata`);
            } else if (`${error}` === 'TypeError: Failed to fetch') {
                setErrMsg(`${error} || Nessuna risposta dal server`);
            } else {
                setErrMsg(`${error} || Registrazione non riuscita`)
            }
            errRef.current?.focus();
        }
    }

    return (
        <>
            { success ? (
                <section className="popup">
                    <div className="popup-inner">
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn-close" onClick={closeLogin}></button>
                        </div>
                        <div className="text-center text-muted">
                            <h6>Accesso effettuato correttamente!</h6>
                            <a href="/" className="fw-bold text-body ms-1">Home</a>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="popup">
                    <div className="popup-inner">

                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

                        <div className="d-grid gap-2 d-md-flex justify-content-md-between">
                            <h2>Accedi</h2>
                            <button type="button" className="btn-close" onClick={closeLogin}></button>
                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="form-group mt-3">
                                <label htmlFor="email">
                                    <h6>E-mail</h6>
                                </label>
                                <input 
                                    type="text" 
                                    id="email" 
                                    ref={emailRef} 
                                    autoComplete="off" 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    value={email} 
                                    required 
                                    className="form-control"
                                />
                            </div>

                            <div className="form-group mt-3">
                                <label htmlFor="password">
                                    <h6>Password</h6>
                                </label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    onChange={(e) => setPwd(e.target.value)} 
                                    value={pwd} 
                                    required 
                                    className="form-control"
                                />
                            </div>

                            <div className="d-grid gap-2 col-6 mx-auto my-3">
                                <button className="btn btn-primary">Accedi</button>
                            </div>

                        </form>

                        <p className="text-center text-muted">
                            Non sei registrato?
                            <a className="fw-bold text-body ms-1" onClick={() => { closeLogin(); openRegister(); }} style={{cursor: "pointer"}}>Registrati</a>
                        </p>

                    </div>
                </section>
            )}
        </>
    )
}

export default Login
