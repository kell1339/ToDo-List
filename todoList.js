var taskArray = new Array();
var colNum = 0;
var colCount = 0;

function clearErrors() {
    for (var i = 0; 
        i < document.forms["taskForm"].elements.length;
        i++) {
            if (document.forms["taskForm"].elements[i]
        .parentElement.className.indexOf("has-") != -1) {
            document.forms["taskForm"].elements[i]
            .parentElement.className = "form-group";
        }
    }
}

function validateForms() {
    clearErrors();
    var taskInput = document.forms["taskForm"]["task"].value;
    var numDays = document.forms["taskForm"]["daysToComplete"].value;

	//Require task field to be filled out. Allow for things like "Take out $ from bank" and "Buy 2 dozen eggs"
    if (taskInput === "") {
        alert("Please fill out this field.");
        document.forms["taskForm"]["task"].parentElement.className = "form-group has-error";
        document.forms["taskForm"]["task"].focus();
        return false;
    }
    
	//Require number of days to be filled out. Note: I already set it to require a number >0 in HTML document.
    if (numDays ==="") {
        alert("Please select a value that is no less than 1.");
        document.forms["taskForm"]["daysToComplete"].parentElement.className = "form-group has-error";
        document.forms["taskForm"]["daysToComplete"].focus();
        return false;
    }

    var newTask = document.forms["taskForm"]["task"].value;
    var countdown = document.forms["taskForm"]["daysToComplete"].value;

    var taskList = document.getElementById("displayArea");

	//Can use single quotation marks inside quotation marks or vice versa when necessary.
	//Set color to red if countdown < 3days. Use simple danger alert. Add "day(s)" to alert. Make a close button element and use data attributes to remove alert.
    //Add padding to right side of alert margins
	if (countdown < 3) {
        taskList.innerHTML += "<div class='col-auto mr-3 alert alert-danger alert-dismissable fade show' role='alert'>"
            + newTask + "<br>" + countdown + " day(s)" +
            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" 
            + "<span aria-hidden='true'>" + "&times;" + "</span>" + "</button></div>";
    }
	//Set color to yellow if 2 days < countdown < 7 days. Use simple warning alert. Add "day(s)" to alert. Make a close button element and use data attributes to remove alert.
    //Add padding to right side of alert margins.
	else if (countdown < 7 && countdown > 2) {
        taskList.innerHTML += "<div class='col-auto mr-3 alert alert-warning alert-dismissable fade show' role='alert'>" +
            newTask + "<br>" + countdown + " day(s)" + 
            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" 
            + "<span aria-hidden='true'>" + "&times;" + "</span>" + "</button></div>";"</div>";
    }
	//Set color to grey if countdown > 6 days. Use simple secondary alert. Add "day(s)" to alert. Make a close button element and use data attributes to remove alert.
   //Add padding to right side of alert margins.
   else if (countdown >= 7) {
        taskList.innerHTML += "<div class='col-auto mr-3 alert alert-secondary alert-dismissable fade show' role='alert'>" +
            newTask + "<br>" + countdown + " day(s)" + 
            "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" 
            + "<span aria-hidden='true'>" + "&times;" + "</span>" + "</button></div>";"</div>";
    }
	
	//Move tasks to new row once all 12 columns have been 
    colCount += 1;
    if (colCount > 12) {
        taskList.innerHTML += "</div>" + "<br>" + "<div class='row'>";
        colCount = 0;
    }
   document.getElementById("displayArea").innerHTML.displayArea = taskList.innerHTML;
    taskForm.reset();
    return false;
}

