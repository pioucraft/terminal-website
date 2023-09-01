var theString = ""
var data = {"commands": [{"name": "testcommand", "response": "test HI"}], "files": [{"parentFolder": "/", "name": "hello", "type": "file", "content": "HI GIME MONEY !!!"}, {"parentFolder": "/", "name": "hi", "type": "folder", "content": "/hi"}, {"parentFolder": "/hi", "name": "catME", "content": ["Hello !", "How are you ??"], "type": "file"}]}
var currentPath = "/"

document.getElementById("input").innerHTML = currentPath + " input : "


document.onkeydown = function (e) {
    console.log('key down');
    console.log(e.key);
    if(e.key == "Enter") {
        console.log("enter")
        execute(theString)
        console.log(theString)
        theString = ""
        document.getElementById("input").setAttribute("id", "")
        document.getElementById("window-content").innerHTML += `<li id="input">${currentPath} input : </li>`
    }
    else if(e.key == "Backspace") {
        console.log("back")
        document.getElementById("input").innerHTML = currentPath + " input : " + theString.slice(0, -1)
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
    if(command == "ls") {
        for(let i=0; i<data.files.length; i++) {
            console.log(currentPath)
            console.log(data.files[i].parentFolder)
            console.log(data.files.length)
            if(data.files[i].parentFolder == currentPath) {
                document.getElementById("window-content").innerHTML += `<li>${data.files[i].name}</li>`
            }
        }
    }
    else if(command.startsWith("cd")) {
        for(let i=0; i<data.files.length;i++) {
            console.log("\n")
            console.log(data.files[i])
            console.log(command.split(" ")[1])
            if(data.files[i].name == command.split(" ")[1] && data.files[i].parentFolder == currentPath) {
                console.log("hi")
                if(data.files[i].type == "file") {
                    document.getElementById("window-content").innerHTML += `<li>Error, can't cd into a file, it must be a directory.</li>`
                    return 0;
                }
                currentPath = data.files[i].content
                return 0;
            }
        }
        if(command == "cd") {
            currentPath = "/"
            return 0;
        }
        document.getElementById("window-content").innerHTML += `<li>Error, the folder does not exist.</li>`
    }
    else if(command.startsWith("cat")) {
        for(let i=0;i<data.files.length;i++) {
            if(data.files[i].name == command.split(" ")[1] && data.files[i].parentFolder == currentPath) {
                    console.log("hi")
                    if(data.files[i].type == "folder") {
                        document.getElementById("window-content").innerHTML += `<li>Error, can't read the content of a folder, it must be a file.</li>`
                        return 0;
                    }
                    for(let j=0; j<data.files[i].content.length; j++) {
                        document.getElementById("window-content").innerHTML += `<li>${data.files[i].content[j]}</li>`
                    } 
                    return 0;
            }
        }
    }
    else {
        for(let i=0; i<data.commands.length; i++) {
            if(command == data.commands[i].name) {
                document.getElementById("window-content").innerHTML += `<li>${data.commands[i].response}</li>` 
                return 0;
            }
        }
        document.getElementById("window-content").innerHTML += `<li>Error, the command doesn't exist</li>` 
    }
    
}
