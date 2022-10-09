import axios from 'axios';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

const AddContact = () => {
    const[formData, setFormData] = useState({
        nome: '',
        numero: '',
        cidade: '',
    });
    const handleFormSubmuit = async(e) =>{
        let response = await axios.post('http://localhost:8000/contatos',formData);
        response ? alert('Contato Criado') : alert('Algo deu errado');
        setFormData({
            nome: '',
            numero: '',
            cidade: '',});
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className='my-2'>
                            Adicionar Novo Contato
                        </h1>
                    </div>
                    <form>
                        <div class="form-group row my-2">
                            <label for="nome" class="col-form-label">Nome</label>
                            <div class="col">
                                <input value={formData.nome} type="text" class="form-control" id="nome" placeholder='Nome' pattern="(?=.*[A-Z])(?=.*[a-z]){2,}" onChange={(e) => setFormData({
                                    ...formData, nome: e.target.value})}/>
                            </div>
                        </div>
                        <div class="form-group row my-2">
                            <label for="numero" class="col-form-label">Número</label>
                            <div class="col">
                                <input value={formData.numero} onChange={(e) => setFormData({
                                    ...formData, numero: e.target.value})} type="text" class="form-control" id="numero" placeholder="Número" pattern="[0-9]{8,}"/>
                            </div>
                        </div>
                        <div class="form-group row my-2">
                            <label for="cidade" class=" col-form-label">Cidade</label>
                            <div class="col">
                                <input value={formData.cidade} onChange={(e) => setFormData({
                                    ...formData, cidade: e.target.value})} type="text" class="form-control" id="cidade" placeholder="Cidade" pattern="(?=.*[A-Z])(?=.*[a-z]){3,}"/>
                            </div>
                        </div>
                        <div className="my-4">
                            <button onClick={handleFormSubmuit} type="submit" className="btn btn-success">Adicionar</button>
                            <Link to={'/Contacts/ListContact'} className="btn btn-dark mx-2">Cancelar</Link>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddContact