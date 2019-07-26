document.querySelector('#splitBtn').addEventListener('click', (e) => {
    e.preventDefault();
    split();
})

document.querySelector('#addTip').addEventListener('click', (e) => {
  e.preventDefault();
  showTipInput();
})

document.querySelector('#resetBtn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('form').reset();
  document.querySelector('#perPerson').innerHTML = "$0"
})

function split() {
  var total = parseInt(document.querySelector('#total').value);
  var people = parseInt(document.querySelector('#people').value);
  var tipPercent = document.querySelector('#tipPercent').value;
  var tipCustom = document.querySelector('#tipCustom').value;
  var perPerson = total / people; // default is assuming no tip was given
  if(tipCustom != "" || tipPercent != "")
  {
    // tip was given
    if(tipCustom == "")
    {
      tipPercent = parseInt(tipPercent);
      perPerson = (total + (tipPercent/100 * total)) / people;
    }
    else
    {
      tipCustom = parseInt(tipCustom);
      perPerson = (total + tipCustom) / people;
    }
  }
  document.querySelector('#perPerson').innerHTML = "$"+perPerson.toFixed(2);
}

function showTipInput()
{
  var tipInputs = document.querySelector('#tipInput');
  if(tipInputs.style.display === "block")
  {
    tipInputs.style.display = "none";
  }
  else
  {
    tipInputs.style.display = "block";
  }
}