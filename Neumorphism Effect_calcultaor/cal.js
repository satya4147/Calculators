
function calculat(vale){

   if(vale === 'result'){
        let res = document.getElementById('display').value;
        let output = eval(res);

        document.getElementById('display').value = output;

    }else if(vale === 'codeClear'){
        document.getElementById('display').value = 0;
    }else{

        document.getElementById('display').value += vale;

    }

    
    
}

   