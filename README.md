# ZenQuotes

ZenQuotes is a simple application that fetches and displays a daily inspirational quote from the ZenQuotes API. It provides users with a daily dose of motivation and positivity.

Video Demo: https://youtu.be/D_6RODvmiGM

## Table of Contents

- [Project Overview](#project-overview)
- [Files in the Project](#files-in-the-project)
- [Design Choices](#design-choices)
- [Usage](#usage)
- [Example Quote of The Day](#example-quote-of-the-day)

## Project Overview

The ZenQuotes Web App is built using Node.js and Express.js to create a server that fetches a daily quote from the ZenQuotes API. The fetched quote is then displayed to the user along with the current date. The project aims to deliver a straightforward and visually appealing way for users to start their day with motivation.

## Files in the Project
1. **index.js**: This is the main JavaScript file for the application. It sets up the Express server, handles API requests, and renders the EJS template for the web page. It imports the necessary libraries, sets up the server, and defines the routes.
2. **index.ejs**: This EJS (Embedded JavaScript) template file defines the structure of the HTML that is sent to the user's web browser. It includes placeholders for the date, quote, and author, which are filled in dynamically when rendering the page.
3. **main.css**: This CSS file provides styling for the web page, enhancing the visual presentation of the quote and ensuring a pleasant user experience. It styles the fonts, colors, and layout of the page elements.

## Design Choices
- **Clean and Minimalistic Design**: The choice of a clean and minimalistic design was made to keep the user interface simple and focused on the daily quote. This approach ensures that users can quickly absorb the motivational message without distraction.
- **Date Display**: Displaying the current date alongside the quote was chosen to provide context and emphasize the recency of the message. It helps users relate the quote to their daily lives.
- **CSS Styles**: The use of an external CSS file (main.css) allows for easy customization and separation of concerns. It simplifies the styling process and enhances maintainability.
- **API Key**: While not included in this example, in a production environment, it is essential to use an API key for authentication when making requests to external APIs like ZenQuotes. This ensures data security and compliance with API usage terms.

## Usage

### 1. Navigate to the Project Directory
Open the terminal or command prompt and navigate to the directory where the ZenQuotes Web App project is stored. Use the ```cd``` command to change directories.
### 2. Install Dependencies
Before running the app, make sure all the necessary dependencies have been installed. In the project directory, run the following command to install the required packages: ```npm i```. This command will fetch and install the Express, Axios, and date-and-time libraries, ensuring that your project has all the required components.
### 3. Run the Server
Start the Express server in one of two ways:
- Using ```node index.js``` - This command will launch your server, and you should see a message in the terminal indicating that the server is running on port 3000.
- Using ```nodemon index.js``` - If you have Nodemon installed (a development tool that automatically restarts your server when changes are detected), you can use it for a smoother development experience. Nodemon will monitor your files for changes and automatically restart the server, eliminating the need to manually stop and start it after making code modifications.
### 4. Access the Web App
Once the server is running, open your web browser and navigate to the following URL: http://localhost:3000/
### 5. Explore the Web App
Upon accessing the URL, you will be greeted with the "Quote of The Day" web page, which includes:

- The current date.
- A motivational quote fetched from the ZenQuotes API.
- The author of the quote.

By following these steps, you can run the ZenQuotes Web App locally and access it through your web browser. This allows you to enjoy a fresh dose of motivation each day you visit the web page.


## Example Quote of The Day
![](/assets/example.png)
