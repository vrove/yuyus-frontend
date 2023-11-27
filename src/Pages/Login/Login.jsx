import styles from './Login.module.css'

const Login = () => {
    return (
        <section className={styles.loginSection}>
            <div className={styles.loginContainer}>
            <h1>Login Page</h1>
            <form>
                <label>
                    Username
                </label>
                    <input type='text' />
                <br />
                <label>
                    Password                
                </label>
                    <input type='password' />
                <br />
                <button type="button">
                    Login
                </button>
            </form>
        </div>
        </section>
        
    )
}

export default Login;