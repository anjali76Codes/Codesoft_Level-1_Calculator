function getValue(val){
    document.getElementById("value").value += val;

}

function clearAll(){
    document.getElementById("value").value = "";
    
}

function Delete(){
        var currentValue = document.getElementById("value").value;
        document.getElementById("value").value = currentValue.slice(0, -1);
    }
    

function solve(){
    var x =  document.getElementById("value").value ;
    var y = eval(x);
    document.getElementById("value").value = y ;
    
}