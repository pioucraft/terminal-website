# Terminal-website
This is a simple website that you can customize to make your own terminal-like website.
If you want to make your own terminal website, you should use a real tool, not mine.


## How to make your own terminal-like website :

### Part 1 : Set up the "file system"
In the index.js file, you can see, on the second line, a public variable "data", it's all JSON inside. You can add a list "files", the variable should look like this : {"files": []}. In this array, you can add two things, files or directories.

To add a file, you can add an array. Here's an example on how to add data inside the array : '''{"parentFolder": "", "name": "", "type": "file", content: []}''', 
