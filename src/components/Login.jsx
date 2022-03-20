import React, { Fragment } from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        email: "",
        password: "" 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]: value    
    });
  }
  handleSubmit(event) {
    if (this.state.email === 'ale@gmail.com' && this.state.password === '123456') {
      localStorage.setItem('login', true); 
      window.location.href = '/dashboard';
    }
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Bienvenido!</h1>
                        </div>
                        <form className="user" onSubmit={this.handleSubmit}>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="InputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Correo electronico..."
                              name="email"
                              value={this.state.value} 
                              onChange={this.handleChange} 
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control form-control-user"
                              id="InputPassword"
                              placeholder="Contraseña"
                              name="password"
                              value={this.state.value} 
                              onChange={this.handleChange} 
                            />
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck"
                              >
                                Recuerdame
                              </label>
                            </div>
                          </div>
                          <input type="submit" value="login"  className="btn btn-primary btn-user btn-block"/>
                          <hr />
                          <a
                            href="index.html"
                            className="btn btn-google btn-user btn-block"
                          >
                            <i className="fab fa-google fa-fw"></i> Ingresar con
                            Google
                          </a>
                          <a
                            href="index.html"
                            className="btn btn-facebook btn-user btn-block"
                          >
                            <i className="fab fa-facebook-f fa-fw"></i> Ingresar con
                            Facebook
                          </a>
                        </form>
                        <hr />
                        <div className="text-center">
                          <a className="small" href="forgot-password.html">
                            No recuerda la contraseña?
                          </a>
                        </div>
                        <div className="text-center">
                          <a className="small" href="register.html">
                            Crear Cuenta!
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
