import React from "react";
import { Link } from "react-router-dom";
let ViewContact = () => {
    return (
        <React.Fragment>
            <section className="ver-contato-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">Ver Contato</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ver-contato-dados mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    Nome: <span className="fw-bold">Eu</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Numero: <span className="fw-bold">987654321</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Cidade: <span className="fw-bold">Fortaleza</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/Contacts/ListContact'} className='btn btn-warning mt-3' >Voltar</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ViewContact;