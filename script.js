function contar(){
    let ini = document.getElementById("txti")
    let fim = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    //Após teste colocamos o resultado
    let res = document.getElementById("res")
    /*
    TESTE logíco simples
       if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] faltam dados!')
    }else{
        alert('Tudo OK!')
    }
}
    */
  
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossevel contar!'
        alert('[ERRO] faltam dados!') 
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            //contagem regressiva
            for(let c = i; c >= f; c-= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}