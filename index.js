const reverse_number = function(n){
    var mod_number, result = 0

    while( n ){
        mod_number = n % 10 ;
        result = (result * 10) + mod_number ;
        n = n/10|0;
    }  
  
    return result
}

module.exports = reverse_number;
