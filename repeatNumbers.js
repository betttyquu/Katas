// Repeat arguments 1s number from array, by its 2nd number 
// create a for loop, that loops thru until its equal to 2nd number
// every time it loops, var i to increase until its equal to 2nd number
// for each loop return the outcome in a string
// finally console.log the function

var repeatNumbers = function(data){
    var num = "";
        for (var i =0; i < data.length; i++)
        {
            if(i > 0){
                num += ", "
            }
            for(var k =0; k < data[i][1]; k++){
                num += data[i][0];
            } 
        }
        return num;
}

console.log(repeatNumbers([ [1,10], [5,4], [6,9] ] ));