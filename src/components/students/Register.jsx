import React, {Fragment} from 'react';

function Register() {
    return(
        <Fragment>
            <div>
            <div class="container-fluid">
                <h1 class="h3 mb-2 text-gray-800">Registro del estudiante</h1>
                <p class="mb-4">
                    Ingrese los datos del estudiante para inscribirlo.
                </p>
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Formulario inscripcion nivel</h6>
                    </div>
                    <div class="card-body text-left">
                        <div className='col-12'>
                            <form>
                                <div class="form-group col-md-12">
                                    <label for="Id">Id del estudiante</label>
                                    <input type="text" class="form-control" id="Id" placeholder="Email"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Register;