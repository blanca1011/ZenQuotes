// import express and axios
import express from "express";
import axios from "axios";
import date from 'date-and-time';

// create an express app and set the port number
const app = express();
const port = 3000;
const API_URL = "https://zenquotes.io/api";

const now = new Date();
const d = date.format(now, 'MMMM DD, YYYY'); 

// use the public folder for static files
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(API_URL + "/today");
    const quoteData = response.data[0]; // Access the first quote in the array
    const quote = quoteData.q;
    const author = quoteData.a;
    res.render("index.ejs", { date: d, quote: quote, author: author });
  } catch (error) {
    console.log(error.response.data);
    res.status(500).send("Error fetching data from ZenQuotes API");;
  }
});


// listen on predefined port and start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

