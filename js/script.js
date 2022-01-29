var button = $('.saveBtn')


//Add current date at the top of the planner 

$(document).ready(function () {
  var date = moment().format('dddd MMMM Do');

  $('#currentDay').append(currentDay);

  //Create code that adds in business hours (9am - 5pm) into file for adding in hourly events to the left of the 
  //event text box


  //Set styling so that business hours that have passed are greyed out;  if / else for time component 
  //Set styling so that the current time/hour is a red color;
  //Set styling so that hours that have not yet occured are in green 


  function currentTime() {
    var current = moment().hours()
    var time = $('.time-block');

    //    console.log(current);

    time.each(function () {
      var hour = parseInt($(this).attr('id'))

    //  console.log(hour);

      if (hour === current) {
        $(this).children('.col-sm-10').attr('class', 'present col-sm-10 description')
    //    console.log(('present' + hour + current))
      } else if (current > hour) {
        $(this).children('.col-sm-10').attr('class', 'past col-sm-10 description')
    //    console.log(('past' + hour + current))
      } else {
        $(this).children('.col-sm-10').attr('class', 'future col-sm-10 description')
    //    console.log(('future' + hour + current))
      }
    })
  }
  currentTime()

  //Set up local storage to store persistent changes in events by timeblock

  button.on('click', function (event) {
    event.preventDefault();
    var text = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
    var parent = $(this).parent().attr('id');
    localStorage.setItem(parent, JSON.stringify(text));

  })

  $('#9 textarea').val(localStorage.getItem('9').replace(/['"]+/g, ''));
  $('#10 textarea').val(localStorage.getItem('10').replace(/['"]+/g, ''));
  $('#11 textarea').val(localStorage.getItem('11').replace(/['"]+/g, ''));
  $('#12 textarea').val(localStorage.getItem('12').replace(/['"]+/g, ''));
  $('#13 textarea').val(localStorage.getItem('13').replace(/['"]+/g, ''));
  $('#14 textarea').val(localStorage.getItem('14').replace(/['"]+/g, ''));
  $('#15 textarea').val(localStorage.getItem('15').replace(/['"]+/g, ''));
  $('#16 textarea').val(localStorage.getItem('16').replace(/['"]+/g, ''));
  $('#17 textarea').val(localStorage.getItem('17')).replace(/['"]+/g, '');
//  console.log(parent);

  //Use styling to transform pointer into a disk icon at the time of click event (saving of event)

  button.on('click', function (event) {
    $('selector').css('cursor', 'i')
  })
  


});