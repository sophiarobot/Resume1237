function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}
getfile("main.json",function(text){
	let data=JSON.parse(text);
    console.log(data);
    profile(data.profile);
    career(data.career);
    educational(data.educational);
    languages(data.languages);
    skills(data.skills);

}
)
var left=document.querySelector(".left");
function profile(pro){
	var img=document.createElement("img");
	img.src=pro.img;
	left.appendChild(img);

	var h1=document.createElement("h1");
	h1.textContent=pro.name;
	left.appendChild(h1);

	var h2=document.createElement("h2");
	h2.textContent=pro.rollno;
	left.appendChild(h2);
	
	var h3=document.createElement("h3");
	h3.textContent=pro.institute;
	left.appendChild(h3);

}
var right=document.querySelector(".right");
function career(car){
	var h1=document.createElement("h1");
	h1.textContent="Resume";
	right.appendChild(h1);

	var hr=document.createElement("hr");
    right.appendChild(hr);

    var h2=document.createElement("h2");
    h2.textContent="Career Objective";
    right.appendChild(h2);

    var p=document.createElement("p");
    p.textContent=car.info;
    right.appendChild(p);

    var hr=document.createElement("hr");
    right.appendChild(hr);
}
function educational(edu){
	var h2=document.createElement("h2");
	h2.textContent="Educational Details";
	right.appendChild(h2);

	var tb=document.createElement("table");
    tb.border="2";
    var tr1="<tr><td>Degree</td><td>Institution</td><td>year of passing</td></tr>";
    var tr2="";
    for(i=0;i<edu.length;i++){
    	tr2=tr2+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].institution+"</td><td>"+edu[i].yearofpassing+"</td></tr>";
    }
    tb.innerHTML=tr1+tr2;
    right.appendChild(tb);

    var hr=document.createElement("hr");
	right.appendChild(hr);
}
function languages(lan){
	var h2=document.createElement("h2");
	h2.textContent="Languages";
	right.appendChild(h2);

	var ul=document.createElement("ul");
	right.appendChild(ul);
	for(i=0;i<lan.length;i++){
		var li=document.createElement("li");
		li.textContent=lan[i].lng;
		ul.appendChild(li);
	}
	var hr=document.createElement("hr");
	right.appendChild(hr);
}
function skills(s){
	var h2=document.createElement("h2");
	h2.textContent="Skills";
	right.appendChild(h2);

	var ul=document.createElement("ul");
	for(i=0;i<s.length;i++){
		var li=document.createElement("li");
		li.textContent=s[i].title+":"+s[i].content;
		ul.appendChild(li);
	}
	right.appendChild(ul);
}