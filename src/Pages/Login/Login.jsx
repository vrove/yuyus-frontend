import './Login.css'

const Login = () => {
    return (
        <div className='container'>
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
    )
}

export default Login