var b = 1;
function outer(){	
	var b = 2 
	function inner(){ 
		b++; 
		var b = 3; 
		console.log(b) 
	} 
	inner();
}
outer();

/*
Inside the outer function, there's a variable b declared with the value 2, and then the inner function is called.

Inside the inner function, b++ increments the local variable b (which is 2) to 3.

The console.log(b) statement inside the inner function logs the local variable b, which is 3.

So, the output is 3.
*/