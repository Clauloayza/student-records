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
	allDate = allDate.filter(function(allDate){
        let letsgo = (allDate.techPoint + allDate.lifePoint)/2
        return (letsgo >= 70);
        
    });
    return allDate;
   
}


/*allStudent(allDate.filter(function(obj){
		return (parseInt(obj.techPoint)+parseInt(obj.lifePoint))/2 >= 70;
	}));
	
	allDate.filter(function(e) {
    if (e[1] + e[2] >= 70) {
        e[4] = "Frontend Dev";
	}
	});
  allStudent(allDate);*/
