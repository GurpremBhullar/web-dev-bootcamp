$(document).ready(function() {

      let currentDate = moment().format('MMMM Do YYYY, h:mm a');   
      let currentTime = moment().format('LT');
      
      var displayDate= $("#current-date-holder");
      displayDate.text(currentDate);  
  })
  
  var plannerContainer = $('#plannerHolder'); 
  
  
  var dailySchedule = $('#dailySchedule');

     var workHours = [
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
  
   for (i = 0; i < workHours.length; i++) {
  
  var planRow= $('<div>');
  planrRow.addClass('row')
  
  var timeCol = $('<div>'); 
  timeCol.addClass('col-md-2');  
  
  var timeDisplay = $('<span>');
  timeDisplay.attr('class','timeBox')
  timeDisplay.text(workHours[i]);
  
  planRow.append(timeCol);
  timeCol.append(timeDisplay);
  
  var eventCol = $('<div>'); 
  eventCol.addClass('col-md-8'); 
  
  var eventInput = $('<input>');
  eventInput.attr('class', 'dailyPlan')
  
  planRow.append(eventCol);
  eventCol.append(eventInput); 
  
  var saveCol = $('<div>'); 
  saveCol.addClass('col-md-2') 
  
  var saveButton = $('<button>');  
  saveButton.text("💾") 
  saveButton.attr('class', 'saveMe')

  planRow.append(saveCol)
  saveCol.append(saveButton)
  
  
  dailySchedule.append(planRow);
   } 
  
  function adjustRowColour(){
      if (timeDisplay.text == currentTime) {
          $('col-md-8').css("background-color","#d3d3d3")
  
      } else if (timeDisplay.text > currentTime) {
          $('col-md-8').css("background-color","#008000")
     
      } else if (timeDisplay.text < currentTime) 
          $('col-md-8').css("background-color","#ff0000")
      } 
   