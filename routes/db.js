

var collections=[
  {
	student_name: '孙元',
    sex: 'male',	
	student_number: '20102210',
	native_place: '湖北洪湖',
	live_place: '广东深圳',
	job: '比亚迪汽车工业有限公司',
    picture: 'sunyuan'	
  },
  {
	student_name: '兰琪',
    sex: 'male',	
	student_number: '20102208',
	native_place: '河南洛阳',
	live_place: '四川成都',
	job: '西南交通大学',
    picture: 'lanqi'	
  },
  {
	student_name: '许俊豪',
    sex: 'male',	
	student_number: '20102222',
	native_place: '四川绵阳',
	live_place: '四川成都',
	job: '中建钢构',
    picture: 'xujunhao'	
  },
  {
	student_name: '张勇',
    sex: 'male',	
	student_number: '20102207',
	native_place: '辽宁葫芦岛',
	live_place: '重庆',
	job: '中铁四局',	
    picture: 'zhangyong'	
  },
  {
	student_name: '王伟',
    sex: 'male',	
	student_number: '20102205',
	native_place: '山东菏泽',
	live_place: '山东青岛',
	job: '南车青岛四方',
    picture: 'wangwei'	
  }  
];

exports.stu=function(student_name,student_number){
  for(var i=0;i<collections.length;i++){
	if((student_number && (collections[i].student_number===student_number)) ||
	   (student_name && (collections[i].student_name===student_name)) ){
	  return collections[i];	
	};  
  };	
};