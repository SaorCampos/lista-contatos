import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

let EditContact = (id) => {
    const[formUpdateData, setFormUpdateData] = useState({
        nome: '',
        numero: '',
        cidade: '',
    });
    const handleFormSubmuit = (e) =>{
        let response = axios.patch('http://localhost:8000/contatos/' + id,formUpdateData);
        if(response){
            alert('Contato Editado');
            return;
        }else{
            alert('Algo deu errado');
        }
        setFormUpdateData({
            nome: '',
            numero: '',
            cidade: '',
        });
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className='my-2'>
                            Editar Contato
                        </h1>
                    </div>
                    <form>
                        <div className="form-group row my-2">
                            <label for="nome" className="col-form-label">Nome</label>
                            <div className="col">
                                <input value={formUpdateData.nome} type="text" className="form-control" id="nome" placeholder='Nome' pattern="(?=.*[A-Z])(?=.*[a-z]){2,}" onChange={(e) => setFormUpdateData({
                                    ...formUpdateData, nome: e.target.value})}/>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label for="numero" className="col-form-label">Número</label>
                            <div className="col">
                                <input value={formUpdateData.numero} onChange={(e) => setFormUpdateData({
                                    ...formUpdateData, numero: e.target.value})} type="text" className="form-control" id="numero" placeholder="Número" pattern="[0-9]{8,}"/>
                            </div>
                        </div>
                        <div className="form-group row my-2">
                            <label for="cidade" className=" col-form-label">Cidade</label>
                            <div className="col">
                                <input value={formUpdateData.cidade} onChange={(e) => setFormUpdateData({
                                    ...formUpdateData, cidade: e.target.value})} type="text" className="form-control" id="cidade" placeholder="Cidade" pattern="(?=.*[A-Z])(?=.*[a-z]){3,}"/>
                            </div>
                        </div>
                        <div className="my-4">
                            <button onClick={handleFormSubmuit} type="submit" className="btn btn-success">Editar</button>
                            <Link to={'/Contacts/ListContact'} className="btn btn-dark mx-2">Cancelar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
};
export default EditContact;