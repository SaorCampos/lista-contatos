import axios from "axios";
export class ContactService {
    static serverURL = 'http://localhost:8000';
}
static getAllContacts(){
    let dataURL = `${this.serverURL}/contatos`;
    return axios.get(dataURL);
}
static getContact(contatosId){
    let dataURL = `${this.serverURL}./contatos/${contatosId}`;
}