import React,{useState} from 'react'

export default function Login() {
const [Passwordtext,setTextPass] = useState("Enter Password");
const [Emailtext,setTextEmail] = useState("Enter email");
  
const loginform = (e)=>{
     e.preventDefault();
    setTextPass("Password");
    setTextEmail("Email");
}


    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-body">
                <h3 className="card-title text-center mb-4 text-primary">Login</h3>
                <form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder={Emailtext} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder={Passwordtext} />
                  </div>
                  <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                  </div>
                  <button type="submit" className="btn btn-primary w-100" onClick={loginform}>Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
