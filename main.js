//Declaring a variable for array
var students_array=[];


//Function submit when "Submit" is clicked
function Submit(){
    var fetchValue=[];
    for(i=1; i<=4; i++){
        var name=document.getElementById("student"+i).value;
        console.log(name);
        students_array.push(name);
    }


    console.log(students_array);

    var studentarray_length = students_array.length;
    for (k=0;k,studentarray_length; k++){
        fetchValue.push("<h4>NAME - " + students_array[k] + "</h4>");
        console.log(students_array[k]);
        console.log(fetchValue);
    }

    document.getElementById("resultComma").innerHTML = fetchValue;

    var removeComma = fetchValue.join(" ");
    console.log(removeComma);
    document.getElementById("resultNoComma").innerHTML = removeComma;

    //Making the sort button visible and the submit button invisible
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}


//Function sorting when "Sort" is clicked
function sorting(){
    //Sorting the array in alphabetical order
    fetchValue.sort();
    var studentarray_length = students_array.length;
    for (k=0;k,studentarray_length; k++){
        fetchValue.push("<h4>NAME - " + students_array[k] + "</h4>");
        console.log(students_array[k]);
        console.log(fetchValue);
        
    }

    document.getElementById("resultComma").innerHTML = fetchValue;

    var removeComma = fetchValue.join(" ");
    console.log(removeComma);
    document.getElementById("resultNoComma").innerHTML = removeComma;
}