import React from "react";
import { Link } from "react-router-dom";
let ListContact = () => {
    return(
        <React.Fragment>
            <section className="list-contact p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">Gerenciador de Contatos
                                    <Link to={'/Contacts/AddContact'} className="btn btn-primary ms-4">
                                        <i className="fa fa-plus-circle me-2"/>Novo Contato
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row my-2">
                                    <div className="col">
                                        <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="Procurar Contato" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="mb-2">
                                            <button type="submit" className="btn btn-outline-dark">Buscar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-list">
                <div className="contanier">
                    <div className="grid">
                        <div className="row ms-5">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center d-flex justify-content-around">
                                            <div className="col-md-7">
                                                <ul className="list-group">
                                                    <li className="list-group-item list-group-item-action">
                                                        Nome: <span className="fw-bold">Eu</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        Numero: <span className="fw-bold">987654321</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        E-mail: <span className="fw-bold">eu@eu-email.com</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                <Link to={'/contatos/verContato/:contatoId'} className="btn btn-warning my-1">
                                                    <i className="fa fa-eye"/>
                                                </Link>
                                                <Link to={'/contatos/editarContato/:contatoId'} className="btn btn-primary my-1">
                                                    <i className="fa fa-pencil"/>
                                                </Link>
                                                <button className="btn btn-danger my-1">
                                                    <i className="fa fa-trash"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default ListContact;