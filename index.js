const express = require("express");
const app = express();
//const url = require("url");
const path = require('path')
//app.use(express.static("public"));
//app.use(express.json());

app.use((req, res, next)=>{
   const host = req.get('host') 
  if(!host.match(/^www.+$/)){
	return res.redirect(301, 'http://www.hzrongye.com' + req.originalUrl)
  } else {return next()}
})
app.use(express.static('public'))
app.get('*', function(req, res){
  res.status(404).sendFile(path.join(__dirname + '/public/404.html'));
});
app.listen(80, (err)=>{
  if(!err){
   console.log("Sever start at port 80");
  }else{
   console.log(err);
  }
})
