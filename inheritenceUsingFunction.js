
function event1(eventdate)
{
    this.eventdate=eventdate;
}

event1.prototype.displayEventDate=function()
{
    console.log("Event Date: "+this.eventdate);
}




function bookticket(name,eventdate)
{
    this.name=name;
    event1.call(this,eventdate);
}
bookticket.prototype= Object.create(event1.prototype);

bookticket.prototype.constructor=bookticket;

bookticket.prototype.book=function()
{
    console.log("Ticket booked successfully for "+this.name+" "+this.eventdate);
}



let ticket =new bookticket('raj','2/01/2015');

ticket.book();


