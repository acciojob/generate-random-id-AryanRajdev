function makeid(l) {
  // write your code here
   let res = "";
   const char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

   for(int i =0 ; i<l ; i++){
	   res += charAt(
		   Math.floor(Math.random()*char_list.length)
	   )
   }

	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
