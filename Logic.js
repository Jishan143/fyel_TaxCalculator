function calculateTax() {
 
  const grossAnnualIncome = parseFloat(document.getElementById('gross-income').value);
  const extraIncome = parseFloat(document.getElementById('extra-income').value);
  const age = document.getElementById('age').value;
  const deductions = parseFloat(document.getElementById('deduction').value);

  
  const totalIncome = grossAnnualIncome + extraIncome - deductions;
if(isNaN(grossAnnualIncome) || isNaN(extraIncome) || isNaN(deductions) ){
  console.log("wrong Datatype");
return ;
}
 
  let taxAmount;
  if (totalIncome <= 800000) {
    taxAmount = 0;
  } else {
    const taxableIncome = totalIncome - 800000;
    if (age === 'under-40') {
      taxAmount = taxableIncome * 0.3;
    } else if (age === '40-or-less-then-60') {
      taxAmount = taxableIncome * 0.4;
    } else {
      taxAmount = taxableIncome * 0.1;
    }
  }

  
  const finalIncome = totalIncome - taxAmount;

  
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('result-container');
  resultDiv.innerHTML = `
    <div class="result-header" >Your overall income will be</div>
    <div class="result-value">${finalIncome.toFixed(2)}</div>
    <div class="result-footer">after tax deductions</div>
    <button class="close-button">Close</button>
  `;

  
  document.getElementById('tax-results').innerHTML = '';
  document.getElementById('tax-results').appendChild(resultDiv);
  var elem = document.getElementById("tax-results");
  elem.style.display = "block";
  var elem1 = document.getElementById("tax-form-container");
  elem1.style.display = "none";


 
  const closeButton = resultDiv.querySelector('.close-button');
  closeButton.addEventListener('click', () => {
    resultDiv.remove();
    var elem2 = document.getElementById("tax-form-container");
  elem2.style.display = "block";

  });
}
