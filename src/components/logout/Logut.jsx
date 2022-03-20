import React, { Fragment } from "react";

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleSubmit(event) {
        localStorage.setItem('login', false); 
        window.location.href = '/login';
        event.preventDefault();
    }
    render() {
        return (
            <Fragment>
                <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">=Listo para irte?</h5>
                                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">Selecciona "Salir" si estas listo para finalizar sesion.</div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                                <button className="btn btn-primary" onClick={this.handleSubmit}>Salir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Logout;