// variable dom
let weightInput = document.querySelector("#weight");
let heightInput = document.querySelector("#height");
let calculateButton = document.querySelector("#calculate");
let result = document.querySelector("#result");
let statement = document.querySelector("#result-statement");
let BMI, height, weight,BMIDecimals;

// variable value

calculateButton.addEventListener("click", ()=>{
    event.preventDefault()
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    BMIDecimals = BMI.toFixed(2);
    result.innerText = "Your BMI result is " + BMIDecimals;

    if(BMI < 18.5){
        statement.innerText = "Your BMI falls within the underweight range." + "      "   +    "You need to eat more or consult a doctor";    
    }else if((BMI > 18.5) && (BMI <= 24.9)){
        statement.innerText = "Your BMI falls within the normal or healthy weight range." + "      "   +  "Good job for taking care of your health";
    }else if((BMI >= 25) && (BMI <= 29.9 )){
        statement.innerText = "Your BMI falls within the overweight range." + "           "   +    "You need to exercise";
    }else{
        statement.innerText = "Your BMI falls within the obese range." + "              "   +      "You need to exercise";
    }
});