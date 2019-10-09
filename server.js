const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("client/public"));
// app.use("/static", express.static(path.join(__dirname, "client/public")));
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


require("./routes/html-routes")(app);

app.listen(PORT, function() {
  console.log("App listening on port" + PORT + "\nhttps://localhost:" + PORT);
});
