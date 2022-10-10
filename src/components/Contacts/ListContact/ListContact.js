import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let ListContact = () => {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        getContacts();
        console.log(data);
    }, []);
    const getContacts = async () => {
        await axios.get('http://localhost:8000/contatos')
        .then(response => setData(response.data));
    };
    const handleDelete = async(id) => {
        await axios.delete('http://localhost:8000/contatos/'+ id)
            .then(response => alert('Deletado com Sucesso'));
    };
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
                            {
                                data && data.map(user =>(
                                    <div className="col-md-6">
                                        <div className="card my-2">
                                            <div className="card-body">
                                                <div className="row align-items-center d-flex justify-content-around">
                                                    <div className="col-md-7">
                                                        <ul className="list-group">
                                                        <li className="list-group-item list-group-item-action">
                                                                Id: <span className="fw-bold">{user.id}</span>
                                                            </li>
                                                            <li className="list-group-item list-group-item-action">
                                                                Nome: <span className="fw-bold">{user.nome}</span>
                                                            </li>
                                                            <li className="list-group-item list-group-item-action">
                                                                Numero: <span className="fw-bold">{user.numero}</span>
                                                            </li>
                                                            <li className="list-group-item list-group-item-action">
                                                                Cidade: <span className="fw-bold">{user.cidade}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-1 d-flex flex-column align-items-center">
                                                        <Link to={'/Contacts/ViewContact/user.id'} className="btn btn-warning my-1">
                                                            <i className="fa fa-eye"/>
                                                        </Link>
                                                        <Link to={'/Contacts/EditContact/user.id'} className="btn btn-primary my-1">
                                                            <i className="fa fa-pencil"/>
                                                        </Link>
                                                        <button onClick={() => handleDelete(user.id)} className="btn btn-danger my-1">
                                                            <i className="fa fa-trash"/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default ListContact;