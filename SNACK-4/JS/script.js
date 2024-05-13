const nomeUtente = prompt ('Inserisci il tuo nome');
const listaInvitati = ["Giuseppe", "Alessia","Gianmarco","Tony","Greta"]
if(listaInvitati.includes(nomeUtente)){
    console.log('Puoi entrare')
}
else{
    console.log('Non puoi entrare')
}
