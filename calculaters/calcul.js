
function v(val){
    document.getElementById('text_filed').value +=val;
    
}
        function add(event){
            if(event.key === '0' ||  event.key === '1' ||
              event.key === '2' || event.key === '3'  ||   event.key === '4' ||
                event.key === '5' || event.key === '6' || event.key === '7' || event.key === '8' || event.key === '9' || event.key === '/'  || event === '+' || event ===  '-'|| event === '*')
                
            document.getElementById("text_filed").valu += event.key;
        }


        function sovle(){
           let x= document.getElementById("text_filed").value;
            let i = eval(x);
            document.getElementById("text_filed").value = i;
        }

        function clear1(){
            //console.log("testststs");
           document.getElementById("text_filed").value = 0;
        }