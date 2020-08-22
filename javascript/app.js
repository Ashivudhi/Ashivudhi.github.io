
var app = document.getElementById("app");

function setAbout() {
    var typewriter = new Typewriter(app, {
        delay: 75,
        cursor: "█",
        autoStart:True,
    });

    typewriter.pasteString(
        '<span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: lightblue;">~</span>$ '
    );
    typewriter.pauseFor(500);

    typewriter.typeString("Hello world!");
    typewriter.pauseFor(500);
    typewriter.pasteString(
        '<br><span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: lightblue;">~</span>$ '
    );
    typewriter.pauseFor(500);

    typewriter.typeString("Welcome to my page Recruiters");
    typewriter.pauseFor(500);
    typewriter.pasteString(
        '<br><span style="color: greenyellow;">erro-remaider@ashivudhi</span>:<span style="color: lightblue;">~</span>$ '
    );
    typewriter.pauseFor(500);

    typewriter.typeString(
        "Computer Science Student specializing in software development. Experienced with\n" +
        "all stages of the development cycle for Web projects, Android and IOS Applications.\n" +
        "Well-versed in Installing, setting up monitoring and maintaining systems. Strong\n" +
        "background in customer relations."
    );
    typewriter.start();
}
setAbout();