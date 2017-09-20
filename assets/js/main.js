let addStudent = document.getElementById("addStudent");
let printAll = document.getElementById("imprime");
let upDate = document.getElementById("clearProm");
let listAll = document.getElementById("list");
let recordAll = document.getElementById("student");

var allDate=[];

addStudent.addEventListener("click",function(){
	let name = prompt("Nombre:","");
	let techPoint = prompt("Porcentaje técnico:","");
	let lifePoint = prompt("Porcentaje Habilidad Socio-Emocional","");
	let status = true;
		
	let student = [name,techPoint,lifePoint,status];
	
	allDate.push(student);
	recordAll.innerHTML = impr(name,techPoint,lifePoint,status);
});
	
	function impr(name, techPoint,lifePoint,status){
		return "<p class='name'>"  + name + "</p>" + "<b>Tech Skills:</b>" + techPoint + " %" + "<br>" + "<b>life Skills:</b>" + lifePoint + " %" + "<br>"+ "<b>Status:</b>" + (status ? "Activo" : "Inactivo" );
	}

printAll.addEventListener("click",function(){
	allStudent();
});

function allStudent(list){
	var printStudents = "";
    allDate.forEach(function (element) {
   
	if (list) {
      var alladd = impr(element[0],element[1],element[2],element[3],element[4]);
    } else {
      var alladd = impr(element[0],element[1],element[2],element[3]);
    }
    printStudents +=alladd;
  });
  recordAll.innerHTML = printStudents;
	/*for(let i in allDate){
		console.log(allDate[i]);
		recordAll.innerHTML=allDate;*/
}
	
$(function(){
	$("#addStudent").on('click', function(){
		//alert("") 
	})
})


//PROGRAMACIÓN DECLARATIVA :D

upDate.addEventListener("click", function(){
	UpdateDropout();
})

function UpdateDropout(){
	//alert("num > 70%");
	allStudent(allDate.filter(function(obj){
		return (parseInt(obj.techPoint)+parseInt(obj.lifePoint))/2 >= 70;
	}));
}



/*function alumn(){
	var allDate = [];
	var s = [];
	var l = [];
	var cont = "";
	
	for( var i=0; i<name; i++){
		for(var j=0; j<techPoint; j++){
			for(var k=0; k<lifePoint; k++){
				var name = prompt("Nombre:","");
				var techPoint = prompt("Porcentaje técnico:","");
				var lifePoint = prompt("Porcentaje Hablidad Socio-Emocional","");
				
				allDate[i] = name;
				s[j] = techPoint;
				l[k] = lifePoint;
			}
		}
	}
	
	for( var i=0; i<name; i++){
		for(var j=0; j<techPoint; j++){
			for(var k=0; k<lifePoint; k++){
				cont += allDate[i] + " ";
				cont += s[j] + " ";
				cont += l[k] + " ";
			}
		}
	}
	document.getElementById("student").innerHTML = cont;
}*/

