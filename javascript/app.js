
// Welcome Message 

console.log('WELCOME TO TECHNOLOGY WORLD, PLEASE ! IF YOU ARE A NEW VISITOR , DO NOT HESITATE TO REGISTER TO INFORM YOU WITH  OUR NEW PRODUCTS ');


for (var n = 0; n < 3; n++) {
    alert("THE WEBSITE IS ONLY FOR THE OFFICER AND CLIENT AND THEY HAVE THEIR OWN PORTALS IN THE BOTTOM OF THE WEBSITE, SO PLEASE DEAR! SELECT THE TYPE OF YOUR PORTAL IN THE FOLLOWING ASKING BOX ");
}


// First Part - To Know the visitor type


var VisitorType = prompt("Who are you ?");


var getcorrectvisitorType = function () {

    while (VisitorType !== "client" && VisitorType !== "officer") {
        VisitorType = prompt(' To See this page , You must be an officer or a Client . So , You can only write client or officer ');
    }

}

getcorrectvisitorType();

var NumberOfPortals = prompt('how many portals do you want?');

var getNumbersofPortals = function () {

    if (NumberOfPortals > 1) {

        var portals = '<button class="block">User Portal</button><br>';
        var result = '';

        for (var s = 0; s < NumberOfPortals; s++) {

            result += portals;
        }



    } else {

        var portals = '<button class="block">User Portal</button><br>';
        var result = '';

        for (var s = 0; s < NumberOfPortals; s++) {

            result += portals;
        }

    }

    return result

}



// Second Part - To get a Visitor the informations which may used to log into own's portal 


var getVistorInformation = function () {

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


            var myWindow = window.open("", "MsgWindow", "width=400,height=400");
            var Msg = 'THIS IS A WELCOME WINDOW . IF YOU NEED THIS PAGE , PLEASE REGISTER AS A CLINENT IN THIS PAGE :"IOT-ENTELLIGENCE-REGEISTERTION-PAGE.SRC.JO/?chlang=eng" ';

            myWindow.document.write(Msg.bold());

        }
    }
}

getVistorInformation();




