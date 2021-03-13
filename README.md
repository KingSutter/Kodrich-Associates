# Getting Started

If you haven't yet installed Git, please follow [this link](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for instructions.

If you haven't yet installed npm and Node.js, please follow [this link](https://www.npmjs.com/get-npm) for instructions.

## Running the program

1. Clone the repository from [this GitHub link](https://github.com/KingSutter/Kodrich-Associates/tree/AssemblyAI-integration) into VS Code or your preferred code editing software. 
    - Use the following command to clone the specific branch. The master branch DOES NOT have the voice transcription feature: 
    - `git clone -b AssemblyAI-integration https://github.com/KingSutter/Kodrich-Associates.git`
2. Run `npm i` on bash (or your preferred method to install dependencies).
3. Replace `KEY HERE` with your API key on line 15 of the Contact.js file (file path: Kodrich-Associates\src\components\Contact\Contact.js) OR simply type the API key into the text box on the Contact page
4. Run `npm run client`
5. Head to the contact page by using the navbar on the top of the page or go to http://localhost:3000/#/contact
6. Click the "Record" button to use your default microphone to voice what you want to say, then click "Transcribe" when finished recording to put it in text in the message box. This makes sending a message to Kodrich Associates easier!