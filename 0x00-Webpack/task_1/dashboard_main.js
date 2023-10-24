// Import jQuery (make sure you have jQuery installed or linked in your HTML file)
import $ from 'jquery';

// Create and add the specified elements to the HTML document
$(document).ready(function() {
  // Paragraph element: Holberton Dashboard
  $('body').append('<p>Holberton Dashboard</p>');

  // Paragraph element: Dashboard data for the students
  $('body').append('<p>Dashboard data for the students</p>');

  // Button element with the text "Click here to get started"
  $('body').append('<button id="startButton">Click here to get started</button>');

  // Add a paragraph element with the id 'count'
  $('body').append('<p id="count"></p>');

  // Add another paragraph: Copyright - Holberton School
  $('body').append('<p>Copyright - Holberton School</p>');
});

