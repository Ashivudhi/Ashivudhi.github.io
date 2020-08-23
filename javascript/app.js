var app = document.getElementById("app");

function setAbout() {
    var typewriter = new Typewriter(app, {
        delay: 75,
        cursor: "█",
    });

    typewriter.pasteString(
        '<span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: whitesmoke;">~</span>$ '
    );
    // typewriter.pauseFor(500);
    //
    // typewriter.typeString("Hello world!");
    // typewriter.pauseFor(500);
    // typewriter.pasteString(
    //     '<br><span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: lightblue;">~</span>$ '
    // );
    typewriter.pauseFor(500);

    typewriter.typeString("Welcome to my website");
    typewriter.pauseFor(500);
    typewriter.pasteString(
        '<br><span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: lightblue;">~</span>$ '
    );
    typewriter.pauseFor(500);

    typewriter.typeString(
        "I am a Computer Science Student specializing in software development. Experienced with\n" +
        "all stages of the development cycle for Web projects, Android and IOS Applications.\n" +
        "Well-versed in Installing, setting up monitoring and maintaining systems."
    );
     typewriter.start();
}

// function setProjects() {
//     var typewriter = new Typewriter(app, {
//         delay: 75,
//         cursor: "█",
//     });
//     typewriter.pasteString(
//         '<span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: lightblue;">~</span>$ '
//     );
//     typewriter.pauseFor(500);
//
//     typewriter.typeString("My projects!");
//     typewriter.pauseFor(500);
//     typewriter.pasteString(
//         '<br><span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: lightblue;">~</span>$ '
//     );
//     typewriter.pauseFor(500);
//
//     typewriter.typeString("These are the most popular ones");
//     typewriter.pauseFor(500);
//     typewriter.pasteString(
//         '<br><span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: lightblue;">~</span>$ '
//     );
//     typewriter.pauseFor(500);
//
//     typewriter.typeString(
//         "You can find the rest on my <a href='https://github.com/Ashivudhi'><u>GitHub</u></a>"
//     );
//
//     typewriter.start();
// }
//
// function setSetup() {
//     var typewriter = new Typewriter(app, {
//         delay: 75,
//         cursor: "█",
//     });
//     typewriter.pasteString(
//         '<span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: lightblue;">~</span>$ '
//     );
//     typewriter.pauseFor(500);
//
//     typewriter.typeString("neofetch");
//     typewriter.pauseFor(500);
//     typewriter.pasteString(
//         '<br><img id="neofetch" src="images/neofetch.png" alt="Neofetch" /><div style="height'
//     );
//     typewriter.pasteString(
//         '<br><span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: lightblue;">~</span>$ '
//     );
//     typewriter.start();
// }

function setInfo(evt, info) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";

    if (info != "setup") {
        document.getElementById("terminal-padded").style.height = "120px";
    }

    switch (info) {
        case "about":
            setAbout();
            document.getElementById(info).style.display = "block";
            break;
        case "projects":
            setProjects();
            document.getElementById(info).style.display = "block";
            break;
        case "setup":
            setSetup();
            document.getElementById("terminal-padded").style.height = "375px";
            document.getElementById(info).style.display = "block";
            break;
        default:
            setAbout();
    }
}

document.getElementById("projects").style.display = "none";
setAbout();