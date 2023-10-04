function convert() {
    const fromValue = parseFloat(document.getElementById("fromValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result = 0;

    if (fromUnit === "inches" && toUnit === "centimeters") {
        result = fromValue * 2.54;
    } else if (fromUnit === "pounds" && toUnit === "kilograms") {
        result = fromValue * 0.453592;
    } else if (fromUnit === "miles" && toUnit === "kilometers") {
        result = fromValue * 1.60934;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
        result = (fromValue - 32) * 5/9;
    }

    document.getElementById("toValue").value = result.toFixed(2);
}