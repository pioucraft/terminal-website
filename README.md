# Terminal-website
This is a simple website that you can customize to make your own terminal-like website.
If you want to make your own terminal website, you should use a real tool, not mine.


## How to make your own terminal-like website :

### Part 1, Set up the "file system" :
In the index.js file, you can see, on the second line, a public variable "data", it's all JSON inside. You can add a list "files", the variable should look like this : {"files": []}. In this array, you can add two things, files or directories.

To add a file, you can add an array. Here's an example on how to add data inside the array : `{"parentFolder": "", "name": "", "type": "file", content: []}`, the "parentFolder" can be "/" if it's in the root of your "file system", but it can be something like "/hi" if it's in the directory "hi". "/hi/newfolder" is possible too. In the parentFolder, you mustn't add a slash at the end nor add spaces in it. the "name" is simpler, you just need to add a name, no space nor slashes. The "content" is a bit harder, it's a list of strings, so for example, "['first line', 'second line']". And with the example I provided, you can understand how lines work in this.

To add folders, it's similar, you need to change the "type" to "folder"and change the content to the full path of the folder, for example : "/hi/newFolder", without a backslash at the end.

### Part 2, add commands :
To add commands, it's pretty simple, just add a "commands" list to your "data". Then, you can add an array in the list. In this array, you can add a "name" (no spaces in the name !) and a response, it'll be what the command will print out. The response is a string.

### Part 3, more things to know :
You can change the background image in the index.css file.
