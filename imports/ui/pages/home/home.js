Template.home.onCreated( function() {
	this.maVar = new ReactiveVar(  );

        
});

Template.home.onRendered( function() {
	$(document).ready(function(){
      $('.slider').slider();
	  $('.slider').slider('pause');

	  $('.datepicker').pickadate({
    	selectMonths: true, // Creates a dropdown to control month
    	selectYears: 15, // Creates a dropdown of 15 years to control year,
    	today: 'Today',
    	clear: 'Clear',
    	close: 'Ok',
    	closeOnSelect: true // Close upon selecting a date,
  		});
    });

	$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left', // Displays dropdown with edge aligned to the left of button
      stopPropagation: false // Stops event propagation
    }
  );
	
});

Template.home.helpers({
	helper () {
		
		return ( true );
	}
});

Template.home.onDestroyed( function() {
	
});

