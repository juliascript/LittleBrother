// Averaging with equal weights
// Takes in an array of ints
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

// Averaging with unequal weights
// Takes in a dict with key/value pairs of ints
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

private function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}