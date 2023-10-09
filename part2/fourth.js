(function () { 
	try { 
		throw new Error(); 
	} catch (x) { 
		var x = 1, y = 2; 
		console.log(x); 
	} 
	
	console.log(x); 
	console.log(y);
})();

/*
Inside the catch block, a new variable x is declared and assigned the value 1, shadowing the x from the catch block's parameter.

A variable y is declared inside the catch block and assigned the value 2.

The console.log(x) inside the catch block logs the value of the local variable x, which is 1.

The console.log(x) outside the catch block logs the value of the outer scope variable x, which is undefined due to hoisting.

The console.log(y) statement logs the value of y, which is 2.
*/