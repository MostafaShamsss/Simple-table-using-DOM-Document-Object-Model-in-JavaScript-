var inpNumber = document.getElementById("inp");
var subBt = document.getElementById("subButt");
var paraError = document.getElementById("parError");

function createTable()
{
    var tab = document.getElementById("display");

    if(inpNumber.value < 2 || inpNumber.value > 10)
    {
        paraError.textContent = "please enter a valid number";
    }

    counter = 1;

    for(let i=1; i<=inpNumber.value; i++)
    {
        var tr = document.createElement('tr');

        for(let j=1; j<=inpNumber.value; j++)
        {
            var td = document.createElement('td');
            var text = document.createTextNode(counter);

            counter++;

            td.appendChild(text);
            tr.appendChild(td);
        }

        tab.appendChild(tr);
    }

}

subBt.addEventListener('click',createTable);