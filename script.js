const form = document.querySelector("form");

document.getElementById("reset").addEventListener("click",()=>{
    document.getElementById("height").value="";
    document.getElementById("weight").value="";
    document.getElementById("results").innerHTML="";
});

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseFloat(document.querySelector("#height").value)

    const weight = parseFloat(document.querySelector("#weight").value)

    const results = document.querySelector("#results")

    if (!height || height < 0 || isNaN(height)) {
        results.innerHTML = "Enter valid ht Input !"
    }
    else if (!weight || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Enter valid wt Input !"
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        //show the results
        const condition = bmi < 18.6 ? "Under Weight" : bmi >= 18.6 && bmi < 24.9 ? "In normal Range" : "Overweight";
        results.innerHTML = `<span>Your BMI is : ${bmi} </span><br><span>You are ${condition}</span>`;
    }
});
