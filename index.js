//task 1
var obj1 = { 
    name: "person 1",
    age: 5
};
var obj2 = { 
    age: 5,
    name: "person 1"
};
JSON .stringify(obj1) === JSON .stringify(obj2)
console.log(JSON .stringify(obj1) === JSON .stringify(obj2))


//task 2
    var request=new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v2/all");
    request.send();
    request.onload=function(){
        var res=JSON.parse(request.response);
        
        for (var i =0; i<res.length; i++){
            console.log(res[i].flag)
        }
        }
    

//task 3

        var request=new XMLHttpRequest();
        request.open("GET","https://restcountries.com/v2/all");
        request.send();
        request.onload=function(){
            var res=JSON.parse(request.response);
            
            for (var i =0; i<res.length; i++){
                console.log(res[i].name, res[i].region, res[i].subregion, res[i].population)
            }
            }
        









