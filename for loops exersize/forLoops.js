console.log("PRINTING ALL NUMBERS BETWEEN -10 AND 19")

for(var i = -10; i < 20; i++){
	console.log(i)
}

console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40")
	
for(var i = 10; i < 41; i += 2){
	console.log(i)
}

console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 AND 40 (CHECKING FOR EVEN NUMBERS)")

for(var i = 10; i <= 40; i++){
	if(i % 2 === 0) {
		console.log(i)
	}
}

console.log("PRINTING ALL THE ODD NUMBERS BETWEEN 300 AND 333")

for(i = 300; i <= 333; i++){
	if(i % 2 !== 0){
		console.log(i)
	}
}

console.log("PRINTING ALL THE NUMBERS BETWEEN 5 AND 50 DIVISIBLE BY 3 AND 5")

for(i = 5; i <= 50; i++){
	if(i % 5 === 0 && i % 3 === 0){
		console.log(i)
	}
}