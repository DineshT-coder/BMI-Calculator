let isUsingFeet = false;

function toggleHeightUnit() {
  const heightFt = document.getElementById('height-ft');
  const heightCm = document.getElementById('height-cm');
  const toggleButton = document.getElementById('toggle-height');

  if (isUsingFeet) {
 
    heightFt.style.display = 'none';
    heightCm.style.display = 'block';
    toggleButton.innerText = 'Switch to ft';
  } else {
    
    heightFt.style.display = 'block';
    heightCm.style.display = 'none';
    toggleButton.innerText = 'Switch to cm';
  }
  isUsingFeet = !isUsingFeet;
}

function calculateBMI() {
  const name = document.getElementById('name').value;
  const gender = document.getElementById('gender').value;
  const age = parseFloat(document.getElementById('age').value);
  let height = 0;
  const weight = parseFloat(document.getElementById('weight').value);
  const resultText = document.getElementById('result');
  const needle = document.querySelector('.needle');

  if (isUsingFeet) {
    const heightFt = parseFloat(document.getElementById('height-ft').value) || 0;
    height = heightFt * 0.3048; // Convert ft to meters
  } else {
    height = parseFloat(document.getElementById('height-cm').value) / 100; // Convert cm to meters
  }

  if (name && gender && age > 0 && weight > 0 && height > 0) {
    const bmi = (weight / (height * height)).toFixed(2);
    let rotation = 0;
    let category = '';

    if (bmi < 18.5) {
      rotation = -45;
      category = 'Low';
    } else if (bmi <= 24.9) {
      rotation = 45;
      category = 'Normal';
    } else if (bmi <= 29.9) {
      rotation = 135;
      category = 'Overweight';
    } else {
      rotation = 225;
      category = 'Obese';
    }

    resultText.innerHTML = `${name}, based on your BMI of ${bmi}, you are in the ${category} category.`;
    resultText.style.color = 'black';
    resultText.style.display = 'block';
    needle.style.transform = `rotate(${rotation}deg)`;
    resultText.style.fontWeight = 'bold';
    
  } else {
    resultText.innerText = 'Please fill all details.';
    resultText.style.color = 'red';
    resultText.style.display = 'block';
    resultText.style.fontWeight = 'bold';
  }
}

function resetForm() {
  document.getElementById('bmi-form').reset();
  const resultText = document.getElementById('result');
  const needle = document.querySelector('.needle');
  resultText.style.display = 'none';
  needle.style.transform = 'rotate(-90deg)';
}
