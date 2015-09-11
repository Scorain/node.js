var express=require('express');
var path=require('path');
var app=express();
var router=require('./routes/index');

app.set('views', path.join(__dirname+'/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname+'/public')));

router(app);


app.listen(3000,console.log('server listen 3000 port'));