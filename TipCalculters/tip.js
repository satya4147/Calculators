

    function result1(){

        let bill = document.getElementById('billAmount').value;
        let service = document.getElementById('service_text').value;

        let preson = document.getElementById('text_person').value;

       
         totalAmount = (bill*service) / preson;

        let result = document.getElementById('result').innerHTML = 'TotoalAmount :' + totalAmount;
    

    }