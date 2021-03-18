

alert("THE OFFICER AND CLIENT HAVE PORTALS IN THE  BOTTOM OF THE WEBSITE,SO PLEASE DEAR! SELECT YOUR PORTAL IN THE FOLLOWING ASKING BOX");

var VisitorType = prompt("Who are you ?");



if (VisitorType == 'officer') {

    var myWindow = window.open("", "MsgWindow", "width=400,height=400");

    var Msg = 'THIS IS OFFICER WINDOW . CLICK ON YOUR PORTAL BUTTON THEN ENTER YOUR BRANCH , JOB NUMBER AND PASSWORD.  ';

    myWindow.document.write(Msg.bold());


} else {


    if (VisitorType == 'client') {
        var myWindow = window.open("", "MsgWindow", "width=400,height=400");
        var Msg = 'THIS IS CLIENT WINDOW . CLICK ON YOUR PORTAL BUTTON THEN ENTER YOUR USERNAME AND PASSWORD. ';

        myWindow.document.write(Msg.bold());

    } else {


        var Message = '   WELCOME ' + VisitorType + ' TO  TECHNOLOGY WORLD, PLEASE ! DO NOT HESITATE TO REGISTER TO INFORM YOU WITH  OUR NEW PRODUCTS.   '


        document.write("<p>" + Message.bold() + "</p>");

    }
}



console.log('WELCOME TO TECHNOLOGY WORLD, PLEASE ! DO NOT HESITATE TO REGISTER TO INFORM YOU WITH  OUR NEW PRODUCTS ');
