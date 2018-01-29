//This function prints a range given a start, end and skip amount and skips by 1 if skip amount is undefined
function printRange(startpoint, endpoint, skipamount){
  	if(skipamount === undefined){
			skipamount = 1; 
		}
		if(endpoint === undefined){
		  endpoint = startpoint; 
		  startpoint = 0; 
		}
	var count=[]; 
	for (var i= startpoint; i< endpoint; i+=skipamount){
		count.push(i); 
		}
	return count; 
}

printRange(1, 14); 