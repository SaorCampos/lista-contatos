import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let ListContact = () => {
    const [data, setData] = useState([{}]);
    useEffect(() => {
        getContacts();
    }, []);
    const getContacts = async () => {
        await axios.get('http://localhost:8000/contatos')
        .then(response => setData(response.data));
    };
    const handleDelete = async(id) => {
        await axios.delete('http://localhost:8000/contatos/'+ id)
            .then(response => alert('Deletado com Sucesso'));
            getContacts();
    };
    const [updateData, setUpdateData] = useState({
        nome: '',
        numero: '',
        cidade: '',
        id: '',
    });
    const handleUpdate = async(id) =>{
        await axios.put(`http://localhost:8000/contatos/${updateData.id}`,updateData)
        .then((response) => {
            alert('Contato atualizado com sucesso')
            getContacts();
        });
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
                                                        {/* <Link to={`/Contacts/ViewContact/${user.id}`} className="btn btn-warning my-1">
                                                            <i className="fa fa-eye"/>
                                                        </Link> */}
                                                        <button className="btn btn-primary my-1" data-bs-toggle='modal' data-bs-target='#modal' onClick={() => setUpdateData({
                                                            nome: user.nome,
                                                            numero: user.numero,
                                                            cidade: user.cidade,
                                                            id: user.id,
                                                        })}>
                                                            <i className="fa fa-pencil"/>
                                                        </button>
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
            <div className="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Alterar Contato</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <form>
                        <div className="form-group row my-2">
                            <label for="nome" className="col-form-label">Nome</label>
                            <div className="col">
                                <input value={updateData.nome} type="text" className="form-control" id="nome" placeholder='Nome' pattern="(?=.*[A-Z])(?=.*[a-z]){2,}" onChange={(e) => setUpdateData({
                                    ...updateData, nome: e.target.value})}/>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label for="numero" className="col-form-label">Número</label>
                            <div className="col">
                                <input value={updateData.numero} onChange={(e) => setUpdateData({
                                    ...updateData, numero: e.target.value})} type="text" className="form-control" id="numero" placeholder="Número" pattern="[0-9]{8,}"/>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label for="cidade" className=" col-form-label">Cidade</label>
                            <div className="col">
                                <input value={updateData.cidade} onChange={(e) => setUpdateData({
                                    ...updateData, cidade: e.target.value})} type="text" className="form-control" id="cidade" placeholder="Cidade" pattern="(?=.*[A-Z])(?=.*[a-z]){3,}"/>
                            </div>
                        </div>
                        <div className="my-4">
                            <button onClick={() => handleUpdate()} type="submit" className="btn btn-success">Editar</button>
                            <Link to={'/Contacts/ListContact'} className="btn btn-dark mx-2">Cancelar</Link>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default ListContact;