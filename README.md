# EditDOMX

EditDOMX is a chrome extension that allows users to edit the DOM of a webpage by specifying a class name and new content. It uses chrome storage to save the class name and new content, and then on load, it checks if the class name exists on the current page and if it does, it replaces the content of all elements with that class name with the new content specified by the user.

## Features
- Edit the DOM of a webpage by specifying a class name and the new content
- Use chrome storage to save the class name and new content
- Check if the class name exists on the current page
- Replace the content of all elements with that class name with the new content specified by the user
- Includes a reset button to clear the stored class name and content
- Refresh the page to see the changes

## Installation
1. Clone the repository or download the zip file
2. Go to chrome://extensions/ in your chrome browser
3. Turn on developer mode in the top right corner
4. Click on "Load unpacked" and select the folder containing the extension files
5. The extension should now be installed and appear in your browser

## Usage
1. Click on the extension icon in your browser
2. Enter the class name and new content in the input fields
3. Click on the "Save" button to save the changes
4. Refresh the page to see the changes
5. Click on the "Reset" button to clear the stored class name and content

## Note
This is just a basic example of a tool to edit the DOM, you can edit and customize it as you like.

## Contributing
1. Fork the repository
2. Create your feature branch (git checkout -b my-new-feature)
