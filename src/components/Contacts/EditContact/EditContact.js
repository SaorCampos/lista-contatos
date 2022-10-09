import React from "react";
import { Link } from "react-router-dom";
let EditContact = () => {
    return (
        <React.Fragment>
        <section className="edit-contact p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-success fw-bold">Editar Contato</p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <form>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Nome" pattern="(?=.*[A-Z])(?=.*[a-z]){2,}" />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Número" pattern="[0-9]{8,}" />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Cidade" pattern="(?=.*[A-Z])(?=.*[a-z]){2,}" />
                            </div>
                            <div className="mb-2">
                                <button type="submit" className="btn btn-primary">Editar</button>
                                <Link to={'/Contacts/ListContact'} className="btn btn-dark ms-2">Cancelar</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
    )
};
export default EditContact;