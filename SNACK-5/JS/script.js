const array = []
for(let i = 0; i < 5 ; i++){
    const numeroUtente = parseInt (prompt ('Inserisci un  numero'), 10);

    if(numeroUtente % 2 === 1){
        array.push(numeroUtente)
    }
    else{
        console.log('Non puo essere stampato nell array', numeroUtente)
    }
}


