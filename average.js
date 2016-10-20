
// Averaging with equal weights
public function avgEqualWeight(arrayOfPercentages){
	var numberOfPercentages = arrayOfPercentages.length;
	var sumOfPercentages = 0;
	for (var i = 0; i < numberOfPercentages; i++) {
		sumOfPercentages += arrayOfPercentages[i];
	} 
	var average = sumOfPercentages / numberOfPercentages;
	// Round to one decimal place
	round(average, 1) 
	return average;
}

// Sample array to pass in
// sampleArray = [78, 88, 25, 55];

// print(avgEqualWeight(sampleArray));


// Averaging with unequal weights
public function avgUnequalWeight(dictionaryOfPercentagesAndWeights){
	var weightedAverageDecimalVal = 0;
	for (var percentage in dictionaryOfPercentagesAndWeights){
		// Get weight by accessing the percentage key's value
		var weight = dictionaryOfPercentagesAndWeights[percentage];
		// Convert the percentages and their weights into decimals
		percentageDecimalVal = percentage / 100;
		weightDecimalVal = weight / 100;
		// Calculate the weighted percentage (in decimal val)
		weightedPercentDecimalVal = percentageDecimalVal * weightDecimalVal;
		// Add weighted percentage to weighted average
		weightedAverageDecimalVal += weightedPercentDecimalVal;
	}
	var weightedAverage = weightedAverageDecimalVal * 100;
	// Round to one decimal place
	round(weightedAverage, 1) 
	return weightedAverage;
}

// Sample dict to pass in
// sampleDict = {78: 20, 88: 20, 25: 50, 55: 10};

// print(avgUnequalWeight(sampleDict));

private function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}