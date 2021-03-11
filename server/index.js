var mysql = require('mysql');
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the DbSearch API...." });
});

app.get("/get", (req, res) => {
  var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "admin123",
    database: "searchTool"
  });

  var sqlStr = "call GetDbObjects(?)";

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sqlStr, req.query.inputAttribute , function (err, result) {
      if (err) throw err;
      //console.log(result);
      setTimeout(function (){
        return res.json(JSON.stringify(result[0]));
      },2000);
    });
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));