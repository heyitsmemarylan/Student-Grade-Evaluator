function Evaluate(){
    var grade1 = parseInt(document.getElementsByTagName('input')[1].value);
    if (grade1 >= 90 && grade1 <= 100)
    {
        document.getElementsByTagName('p')[0].textContent = "Excellent";
    }
    else if (grade1 >= 80 && grade1 <= 89)
    {
        document.getElementsByTagName('p')[0].textContent = "Good";
    }
    else if (grade1 >= 70 && grade1 <= 79)
    {
        document.getElementsByTagName('p')[0].textContent = "Average";
    }
    else if (grade1 >= 60 && grade1 <= 69)
    {
        document.getElementsByTagName('p')[0].textContent = "Poor";
    }
    else
    {
        document.getElementsByTagName('p')[0].textContent = "Fair";
    }

    var grade2 = parseInt(document.getElementsByTagName('input')[2].value);
    if (grade2 >= 90 && grade2 <= 100)
    {
        document.getElementsByTagName('p')[1].textContent = "Excellent";
    }
    else if (grade2 >= 80 && grade2 <= 89)
    {
        document.getElementsByTagName('p')[1].textContent = "Good";
    }
    else if (grade2 >= 70 && grade2 <= 79)
    {
        document.getElementsByTagName('p')[1].textContent = "Average";
    }
    else if (grade2 >= 60 && grade2 <= 69)
    {
        document.getElementsByTagName('p')[1].textContent = "Poor";
    }
    else
    {
        document.getElementsByTagName('p')[1].textContent = "Fair";
    }

    var grade3 = parseInt(document.getElementsByTagName('input')[3].value);
    if (grade3 >= 90 && grade3 <= 100)
    {
        document.getElementsByTagName('p')[2].textContent = "Excellent";
    }
    else if (grade3 >= 80 && grade3 <= 89)
    {
        document.getElementsByTagName('p')[2].textContent = "Good";
    }
    else if (grade3 >=70 && grade3 <= 79)
    {
        document.getElementsByTagName('p')[2].textContent = "Average";
    }
    else if (grade3 >= 60 && grade3 <= 69)
    {
        document.getElementsByTagName('p')[2].textContent = "Poor";
    }
    else
    {
        document.getElementsByTagName('p')[2].textContent = "Fair";
    }

    var grade4 = parseInt(document.getElementsByTagName('input')[4].value);
    if (grade4 >= 90 && grade4 <= 100)
    {
        document.getElementsByTagName('p')[3].textContent = "Excellent";
    }
    else if (grade4 >= 80 && grade4 <= 89)
    {
        document.getElementsByTagName('p')[3].textContent = "Good";
    }
    else if (grade4 >=70 && grade4 <= 79)
    {
        document.getElementsByTagName('p')[3].textContent = "Average";
    }
    else if (grade4 >= 60 && grade4 <= 69)
    {
        document.getElementsByTagName('p')[3].textContent = "Poor";
    }
    else
    {
        document.getElementsByTagName('p')[3].textContent = "Fair";
    }

    var grade5 = parseInt(document.getElementsByTagName('input')[5].value);
    if (grade5 >= 90 && grade5 <= 100)
    {
        document.getElementsByTagName('p')[4].textContent = "Excellent";
    }
    else if (grade5 >= 80 && grade5 <= 89)
    {
        document.getElementsByTagName('p')[4].textContent = "Good";
    }
    else if (grade5 >= 70 && grade5 <= 79)
    {
        document.getElementsByTagName('p')[4].textContent = "Average";
    }
    else if (grade5 >= 60 && grade5 <= 69)
    {
        document.getElementsByTagName('p')[4].textContent = "Poor";
    }
    else
    {
        document.getElementsByTagName('p')[4].textContent = "Fair";
    }

    /**Rank */
    if (grade1 && grade2 && grade3 && grade4 && grade5 >= 90 && grade1 && grade2 && grade3 && grade4 && grade5 <= 100)
    {
        document.querySelector(".rankhere").textContent = "Top Honor Student";
        document.querySelector(".rankhere").style.color = "white";
        if (grade1 < 90 || grade1 && grade2 < 90 || grade1 && grade3 < 90 || grade1 && grade4 < 90 || grade1 && grade5 < 90)
        {
            document.querySelector(".rankhere").textContent = "Second Honorable Student";
            document.querySelector(".rankhere").style.color = "blue";
        }
        else if (grade2 < 90 || grade2 && grade3 < 90 || grade2 && grade4 < 90 || grade2 && grade5 < 90)
        {
            document.querySelector(".rankhere").textContent = "Second Honorable Student";
            document.querySelector(".rankhere").style.color = "blue";
        }
        else if (grade3 < 90 || grade3 && grade4 < 90 || grade3 && grade5 < 90)
        {
            document.querySelector(".rankhere").textContent = "Second Honorable Student";
            document.querySelector(".rankhere").style.color = "blue";
        }
        else if (grade4 < 90 || grade4 && grade5 < 90)
        {
            document.querySelector(".rankhere").textContent = "Second Honorable Student";
            document.querySelector(".rankhere").style.color = "blue";
        }
        else if (grade5 < 90)
        {
            document.querySelector(".rankhere").textContent = "Second Honorable Student";
            document.querySelector(".rankhere").style.color = "blue";
        }
    }
    else if (grade1 && grade2 && grade3 && grade4 && grade5 <= 69 && grade1 && grade2 && grade3 && grade4 && grade5 >= 0 )
    {
        document.querySelector(".rankhere").textContent = "Repeater";
        document.querySelector(".rankhere").style.color = "red";
        if (grade1 >= 70 || grade1 && grade2 >= 70 || grade1 && grade3 >= 70 || grade1 && grade4 >= 70 || grade1 && grade5 >= 70)
        {
            document.querySelector(".rankhere").textContent = "Repeater"; 
            document.querySelector(".rankhere").style.color = "red";   
        }
        else if (grade2 >= 70 || grade2 && grade3 >= 70 || grade2 && grade4 >= 70 || grade2 && grade5 >= 70)
        {
            document.querySelector(".rankhere").textContent = "Repeater";
            document.querySelector(".rankhere").style.color = "red";
        }
        else if (grade3 >= 70 || grade3 && grade4 >= 70 || grade3 && grade5 >= 70)
        {
            document.querySelector(".rankhere").textContent = "Repeater";
            document.querySelector(".rankhere").style.color = "red";
        }
        else if (grade4 >= 70 || grade4 && grade5 >= 70)
        {
            document.querySelector(".rankhere").textContent = "Repeater";
            document.querySelector(".rankhere").style.color = "red";
        }
        else if (grade5 >= 70)
        {
            document.querySelector(".rankhere").textContent = "Repeater";
            document.querySelector(".rankhere").style.color = "red";
        }
}
}