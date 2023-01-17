// creating a variable day based on the format "D" from dayjs; D represents the day
var day = dayjs().format('D');
// realTime variable is taking the current date
var realTime = new Date();
// hours will be taking the hours from the current date, realTime
var hours = realTime.getHours();
// these variables display1-9 reflects the jquery classes; used for displaying the user inputs
var display1 = $('.display1');
var display2 = $('.display2');
var display3 = $('.display3');
var display4 = $('.display4');
var display5 = $('.display5');
var display6 = $('.display6');
var display7 = $('.display7');
var display8 = $('.display8');
var display9 = $('.display9');
// these variables event1-9 will get the local storage key and values or will be set as an empty string
var event1 = localStorage.getItem('9AM') || '';
var event2 = localStorage.getItem('10AM') || '';
var event3 = localStorage.getItem('11AM') || '';
var event4 = localStorage.getItem('12PM') || '';
var event5 = localStorage.getItem('1PM') || '';
var event6 = localStorage.getItem('2PM') || '';
var event7 = localStorage.getItem('3PM') || '';
var event8 = localStorage.getItem('4PM') || '';
var event9 = localStorage.getItem('5PM') || '';

// this function is created to set the suffix at the end of the day
function suffix(){
    if (day > 3 && day < 21){
        // if day is greater than 3 and less than 21 then return 'th'
        return "th";
    } else if (day % 10 === 1){
        // if day % 10 gives a remainder of 1; then return 'st'
        return "st";
    } else if (day % 10 === 2){
        // if day % 10 gives a remainder of 2; then return 'nd'
        return "nd"
    } else {
        // if none of the if and else if are satisfied then return 'rd'
        return "rd";
    }
}

// this function today will be formatted as 'full name of the day, full name of the month, 
// and the number of the day' then concat with the suffix function above to give it a 'st, 
// nd, rd, or th'; then display the formatted date onto the id date
function today(){
    var date = dayjs().format('dddd, MMMM DD').concat(suffix());
    $('#date').text(date);
}

// this function timer will make the displayed message with the id message disappear after 5 secs
function timer(){
    var myTimer = 5;
    var timeInterval = setInterval(function(){
        if (myTimer > 0){
            myTimer--;
        } else {
            $('#message').text('');
            clearInterval(timeInterval);
        }
    }, 1000);
}

// this function checkTime will check whether to highlight the background colors of those specific
// timezone as past, present or future; hours are measured in military time
function checkTime(){
    // if the hours is less than 9 then the event input box will be erased with an empty string
    // the local storage will be cleared as well because it is a new day
    // highlight all the boxes light green indicating the timezones are the future
    if (hours < 9){
        display1.val((display1.val() + ''));
        display2.val((display2.val() + ''));
        display3.val((display3.val() + ''));
        display4.val((display4.val() + ''));
        display5.val((display5.val() + ''));
        display6.val((display6.val() + ''));
        display7.val((display7.val() + ''));
        display8.val((display8.val() + ''));
        display9.val((display9.val() + ''));
        localStorage.clear();
        $('#user1, #user2, #user3, #user4, #user5, #user6, #user7, #user8, #user9').css('background-color', 'lightgreen');
    } else if (hours === 9){
        // if the hours = 9AM then the 9AM zone will be orange as present and the rest are light green as the future
        $('#user1').css('background-color', 'orange');
        $('#user2, #user3, #user4, #user5, #user6, #user7, #user8, #user9').css('background-color', 'lightgreen');
    } else if (hours === 10){
        // if the hours = 10AM; 9AM is gray as the past and 10AM is orange as the present and everything else is the future
        $('#user1').css('background-color', 'gray');
        $('#user2').css('background-color', 'orange');
        $('#user3, #user4, #user5, #user6, #user7, #user8, #user9').css('background-color', 'lightgreen');
    } else if (hours === 11){
        // hours = 11AM; same condition as before; 11AM is present, before is past, after is future
        $('#user1, #user2').css('background-color', 'gray');
        $('#user3').css('background-color', 'orange');
        $('#user4, #user5, #user6, #user7, #user8, #user9').css('background-color', 'lightgreen');
    } else if (hours === 12){
        // hours == 12PM; same conditions
        $('#user1, #user2, #user3').css('background-color', 'gray');
        $('#user4').css('background-color', 'orange');
        $('#user5, #user6, #user7, #user8, #user9').css('background-color', 'lightgreen');
    } else if (hours === 13){
        // hours == 13 == 1PM; same conditions
        $('#user1, #user2, #user3, #user4').css('background-color', 'gray');
        $('#user5').css('background-color', 'orange');
        $('#user6, #user7, #user8, #user9').css('background-color', 'lightgreen');
    } else if (hours === 14){
        // hours == 14 == 2PM; same conditions
        $('#user1, #user2, #user3, #user4, #user5').css('background-color', 'gray');
        $('#user6').css('background-color', 'orange');
        $('#user7, #user8, #user9').css('background-color', 'lightgreen');
    } else if (hours === 15){
        // hours == 15 == 3PM; same conditions
        $('#user1, #user2, #user3, #user4, #user5, #user6').css('background-color', 'gray');
        $('#user7').css('background-color', 'orange');
        $('#user8, #user9').css('background-color', 'lightgreen');
    } else if (hours === 16){
        // hours == 16 == 4PM; same conditions
        $('#user1, #user2, #user3, #user4, #user5, #user6, #user7').css('background-color', 'gray');
        $('#user8').css('background-color', 'orange');
        $('#user9').css('background-color', 'lightgreen');
    } else if (hours === 17){
        // hours == 17 == 5PM; same conditions
        $('#user1, #user2, #user3, #user4, #user5, #user6, #user7, #user8').css('background-color', 'gray');
        $('#user9').css('background-color', 'orange');
    } else {
        // hours == 18-23 == 6PM-11PM; same conditions
        $('#user1, #user2, #user3, #user4, #user5, #user6, #user7, #user8, #user9').css('background-color', 'gray');
    }
}

// this function refresh will keep the event from deleting from the input box
function refresh(){
    if (location.reload){
        display1.val((display1.val() + event1));
        display2.val((display2.val() + event2));
        display3.val((display3.val() + event3));
        display4.val((display4.val() + event4));
        display5.val((display5.val() + event5));
        display6.val((display6.val() + event6));
        display7.val((display7.val() + event7));
        display8.val((display8.val() + event8));
        display9.val((display9.val() + event9));
    }
}

// this is an event listener for all the buttons with an id
$('#saveBtn1, #saveBtn2, #saveBtn3, #saveBtn4, #saveBtn5, #saveBtn6, #saveBtn7, #saveBtn8, #saveBtn9').click(function(event){
    if ($(event.target).attr('id')=='saveBtn1'){
        // this event target will specifically target the button with a specific id
        // the var msg will take the user input value and trim it
        var msg = $('#user1').val().trim();
        // if the user input is something other than an empty box then fire this if statement
        if (msg !== ''){
            // store the key 9AM and user input value into local storage
            localStorage.setItem('9AM', JSON.stringify(msg));
            // display the text message that the event has been saved
            $('#message').text('Appointment has been saved for 9AM! ✅');
            // start the timer and remove the message after 5 secs
            timer();
        }
    } else if ($(event.target).attr('id')=='saveBtn2'){
        // same event target, trimming, getting the user input value and displaying specific message per each time zone
        var msg = $('#user2').val().trim();
        if (msg !== ''){
            localStorage.setItem('10AM', JSON.stringify(msg));
            $('#message').text('Appointment has been saved for 10AM! ✅');
            timer();
        }
    } else if ($(event.target).attr('id')=='saveBtn3'){
        var msg = $('#user3').val().trim();
        if (msg !== ''){
            localStorage.setItem('11AM', JSON.stringify(msg));
            $('#message').text('Appointment has been saved for 11AM! ✅');
            timer();
        }
    } else if ($(event.target).attr('id')=='saveBtn4'){
        var msg = $('#user4').val().trim();
        if (msg !== ''){
            localStorage.setItem('12PM', JSON.stringify(msg));
            $('#message').text('Appointment has been saved for 12PM! ✅');
            timer();
        }
    } else if ($(event.target).attr('id')=='saveBtn5'){
        var msg = $('#user5').val().trim();
        if (msg !== ''){
            localStorage.setItem('1PM', JSON.stringify(msg));
            $('#message').text('Appointment has been saved for 1PM! ✅');
            timer();
        }
    } else if ($(event.target).attr('id')=='saveBtn6'){
        var msg = $('#user6').val().trim();
        if (msg !== ''){
            localStorage.setItem('2PM', JSON.stringify(msg));
            $('#message').text('Appointment has been saved for 2PM! ✅');
            timer();
        }
    } else if ($(event.target).attr('id')=='saveBtn7'){
        var msg = $('#user7').val().trim();
        if (msg !== ''){
            localStorage.setItem('3PM', JSON.stringify(msg));
            $('#message').text('Appointment has been saved for 3PM! ✅');
            timer();
        }
    } else if ($(event.target).attr('id')=='saveBtn8'){
        var msg = $('#user8').val().trim();
        if (msg !== ''){
            localStorage.setItem('4PM', JSON.stringify(msg));
            $('#message').text('Appointment has been saved for 4PM! ✅');
            timer();
        }
    } else {
        var msg = $('#user9').val().trim();
        if (msg !== ''){
            localStorage.setItem('5PM', JSON.stringify(msg));
            $('#message').text('Appointment has been saved for 5PM! ✅');
            timer();
        }
    }
})

// calling the functions
today();
checkTime();
refresh();



