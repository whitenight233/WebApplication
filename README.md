# WebApplication
## Code Test

Name: 
A simple WebApplication 

Description:
This application developed with HTML/CSS. The aim of this application is to build an application allow user uses a simple graphic web interface to swtich between webpages. It should let user go to login page by clicking "login" button in Navigation menu. User can fill up this form then make decisions of submit this form or cancel their submission. by clicking submit button in login page, this application will be able to send the form data to a fake endpoint (a Node js local server for mock up data handling). Clciking cancel button will take user to their previous page.This application is required to pass unit tests.

Before start:
Before you start we recommmend you to have some experience about some basic elements that assembled A simple WebApplication:
- HTML/CSS - read through CSS Tutorial/HTML Tutorial W33 School and try to use its online editor should help you understand HTML/CSS better.
- Node.js -Start by going through Node.js official Website and StackOverFlow (https://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js). it should help you to learn more abouth Node.js
- Bootstrap 4 - The best way to understand Bootstrap 4 is through its Offical Website (https://getbootstrap.com/docs/4.0/getting-started/introduction/), Also, commom problems during developing period can refered to StackOverflow (https://stackoverflow.com/questions/tagged/bootstrap-4).
- Jasmine Jasmine's Github offical page is a good start point. Also, Codecrafts.TV's YouTube video can be used (https://jasmine.github.io/pages/docs_home.html).

Prerequesites:
Make sure your development machines install the following prerequisites. 
-Git, only required to windows. OSX and Linux machines already installed.https://git-scm.com/downloads
-Bootstrap 4, https://getbootstrap.com/docs/4.0/getting-started/download/. Some IDE have their own package for Bootstrap 4, make sure you checked before downloading.
-Node.js, https://nodejs.org/en/download/ Maksure you download both Node.js and npm package manager. If there is any issue, you can also install it from GitHub Gist.https://gist.github.com/isaacs/579814
-Jasmine https://getbootstrap.com/docs/4.0/getting-started/download/

Usages:
Open Terminal Console. 
Change directory to project folder.
At console input command: Node local.js
A local server should be created at http://localhost:8080
Open Home.html file in WebApplication Root folder.
Click buttons on the top Navigation Bar.
Click Login button on the top Navigation Bar.
Fill up the usename and password in random string or integers.
Console will display "recieved".
"Login Success" message should be displayed.
Close the web browser. 
Close the console. 

Roadmap:
In current state, the unit test function has error and due to this WebApplication is highly based on HTML/CSS, it increased the difficulty to process more qualitative test. Most of the function outputs are visible. The POST data from HTML can not directly used in Node.js which requires Node.js advance framework Express.js and may need an API client to extract data into JSON format. The communication bettwen HTML and Node.js does not consist which causes the application can not return after send the data to Node.js local server. In the future, the WebApplication may fully complied by JavaScript Environment. Also, the additional requirement ,reuse this menu by pass a JSON data structure to render a nested menu containing buttons and clicking some buttons in the menue will further go on , is not completed, It should be marked as one of the future milestone as well.

Contributing:
All pull requests from the community is welcome. Feel free to comment any idea to improve this application. 

Project status:
Development is slowed down and almost completed stopped.

License:
GitBook




