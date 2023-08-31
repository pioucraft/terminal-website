var theString = ""
var data = {"commands": [{"name": "testcommand", "value": "test HI"}], "files": []}
document.getElementById("input").innerHTML = "input : "
document.onkeydown = function (e) {
    console.log('key down');
    console.log(e.key);
    if(e.key == "Enter") {
        console.log("enter")
        execute(theString)
        console.log(theString)
        theString = ""
        document.getElementById("input").setAttribute("id", "")
        document.getElementById("window-content").innerHTML += `<li id="input">input : </li>`
    }
    else if(e.key == "Backspace") {
        console.log("back")
        document.getElementById("input").innerHTML = "input : " + theString.slice(0, -1)
        theString = theString.slice(0, -1)
    }
    else if(e.key == "CapsLock") {
        console.log("caps")
    }
    else if(e.key == "Shift") {
        console.log("shift")
    }
    else {
        theString += e.key
        document.getElementById("input").innerHTML += e.key
    }
};

function execute(command) {
    for(let i=0; i<data.commands.length; i++) {
        if(command == data.commands[i].name) {
            console.log("test")
        }
    }
}
