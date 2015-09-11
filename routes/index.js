

module.exports=function(app){
  app.get('/',function(req,res){
	res.render('index',{title: '登陆系统'});  
  });
  app.post('/',function(req,res){
	var post='';
    req.on('data',function(chunk){
      post+=chunk;
	});	  
    req.on('end',function(){
	  var querystring=require('querystring');	
	  post=querystring.parse(post);
      if(post.id==='swjtc6' && post.psd==='2010to2014'){
		res.redirect('/infor');
	
	  }	else {
	  res.render('index',{title: '登陆系统'});  
	  }  	  
	});	
  });
  app.get('/infor',function(req,res){
	res.render('infor',{});  
  });
  app.post('/infor',function(req,res){
	var post='';
    req.on('data',function(chunk){
	  post+=chunk;	
	});
    req.on('end',function(){
	  var querystring=require('querystring');
	  var db=require('./db');
	  var student_name='';
	  var student_number='';
	  var concrete='';
      post=querystring.parse(post);
      if(post.searching==='student_name'){
		student_name=post.student_index; 
	  }else if(post.searching==='student_number'){
		student_number=post.student_index;  
	  };
	  /* console.log('hello');
	  res.send(student_name+student_number); */
      concrete=db.stu(student_name,student_number);

      res.render('classsix',{
		student_name: concrete.student_name,
        sex: concrete.sex,	
	    student_number: concrete.student_number,
	    native_place: concrete.native_place,
	    live_place: concrete.live_place,
	    job: concrete.job,	
		picture: concrete.picture
	  })    
	})	
  })  
};