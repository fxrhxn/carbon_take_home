// Write code that takes in any integer and returns true if it has an even number of 1’s in the binary expression. You must use table lookup and XOR bitwise operator.

function int_to_binary(dec){

    // Convert integer to binary array.
    var binary_int = (dec >>> 0).toString(2).split('')

    //Count the number of 1s
    var counter = 0;

    //Loop through array to find ones.
    for (var i = 0; i < binary_int.length; i++) {

      if (binary_int[i] == 1) {
          counter++
      }

    }

    //Return true if even, false if odd.
    if(counter % 2 == 0){
      return true
    }else{
      return false
    }

}

console.log(int_to_binary(22))
