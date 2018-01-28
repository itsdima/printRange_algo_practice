//This function prints a range given a start, end and skip amount and skips by 1 if skip amount is undefined
function printRange(startpoint, endpoint, skipamount){
	var count = []; 
	for (var i= startpoint; i< endpoint; i+=skipamount){
		if(skipamount === undefined){
			skipamount = 1; 
		}
		count.push(i);
	}
	return count; 
}

printRange(1, 14); 