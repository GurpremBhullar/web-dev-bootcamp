$(document).ready(function() {

        let currentDate = moment().format('MMMM Do YYYY, h:mm a');   
        let currentTime = moment().format('LT');
        
        var displayDate= $("#current-date-holder");
        displayDate.text(currentDate);  
    })
    
    var plannerContainer = $('#plannerHolder'); 

    var timeTable = $('#timeTable');
    
       var workoutHours = [
         "9:00 AM", 
         "10:00 AM", 
         "11:00 AM", 
         "12:00 PM", 
         "1:00 PM", 
         "2:00 PM", 
         "3:00 PM", 
         "4:00 PM", 
         "5:00 PM"
     ]; 
    
     for (i = 0; i < workOutHours.length; i++) {
    
    var plannerRow= $('<div>');
    plannerRow.addClass('row')
    
    var timeCol = $('<div>'); 
    timeCol.addClass('col-md-2');  

    var timeDisplay = $('<span>');
    timeDisplay.attr('class','timeBox')
    timeDisplay.text(workHours[i]);

    plannerRow.append(timeCol);
    timeCol.append(timeDisplay);
    
    var eventCol = $('<div>'); 
    eventCol.addClass('col-md-8'); 
     
    var eventInput = $('<input>');
    eventInput.attr('class', 'dailyPlan')
    
    plannerRow.append(eventCol);
    eventCol.append(eventInput); 
    
    var saveCol = $('<div>'); 
    saveCol.addClass('col-md-2') 
    
    var saveButton = $('<button>');  
    saveButton.text("💾") 
    saveButton.attr('class', 'saveMe')

    plannerRow.append(saveCol)
    saveCol.append(saveButton)
    
    
    timeTable.append(plannerRow);
     } 
    
 
    function adjustRowColour(){
        if (timeDisplay.text == currentTime) {
            $('col-md-6').css("background-color","#d3d3d3")
    
        } else if (timeDisplay.text > currentTime) {
            $('col-md-4').css("background-color","#008000")
       
        } else if (timeDisplay.text < currentTime) 
            $('col-md-6').css("background-color","#ff0000")
        } 
    