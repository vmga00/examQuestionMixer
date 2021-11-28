let question="";
let valuesArray;
let media;
let standardDeviation;

function getMedia(){
	getValues(document.getElementById("valores").value);
	media = calculateMedia().toFixed(2);
	standardDeviation = calculateStandardDeviation().toFixed(2);
	let toPrint = "Media: "+media+ "\nDesviacion Estandar: "+standardDeviation;
	console.log(toPrint);
	// alert(toPrint);
}

function getValues(values){
	valuesArray=[]
	let vals = "";
	let helper;
	if(values.includes(':')){
		vals = values.split(':')[1];
	}
	helper = vals.split(',');
	helper.forEach(v=>valuesArray.push(parseInt(v)));
}

function calculateMedia(){
	let sum =0;
	valuesArray.forEach(v=>sum=sum+v);
	return sum/valuesArray.length;
}

function calculateStandardDeviation(){
	let helper = [];
	valuesArray.forEach(v => helper.push(Math.pow((v-media),2)));
	let sum = 0;
	helper.forEach(v => sum = sum+v);
	return Math.sqrt((sum/valuesArray.length));
}