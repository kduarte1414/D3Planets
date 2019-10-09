// B1
var planetPromise= d3.json("planets.json");
planetPromise.then(
 function(planetData)
    {
       step1(planetData);
       step2(planetData);
       drawPlanets(planetData);
        list(planetData);
        makeTable(planetData);
        table2(planetData);
        console.log("works",planetData)
    },
 function(err)
    {
        console.log("broke",err)
    }
)
//A1
        
var step1 = function(data){
    var Names=["string1","string2","string3"]
    var A1div= d3.select("#A1");
    A1div.append("p") 
        .text(Names)
    }

//A2
var step2= function(data){
    var A2div= d3.select("#A2");
    A2div.append("p").text("Mercury")
    A2div.append("p").text("Venus")
       A2div.append("p").text("Earth")
       A2div.append("p").text("Mars")
       A2div.append("p").text("Jupiter")
       A2div.append("p").text("Saturn")
       A2div.append("p").text("Uranus")
       A2div.append("p").text("Neptune")
}
 
//B3
var drawPlanets= function(data)
{
    var B3div= d3.select("#B3");
    B3div.selectAll("img")
    .data(data)
    .enter()
    .append("img")
    .attr("src",function(planet)
          {
        return planet.img
    })
    
}
    
//B4 

var list= function(data)
{
    var B4div=d3.select("#B4").append("ol");
    B4div.selectAll("li")
    .data(data)
    .enter()
    .append("li")
    .text(function(planet)
         {return planet.name})
    
}
  


//C1
var makeTable= function(data)
{
    var C1div= d3.select("#C1").append("table");
    C1div.selectAll("tr")
    .data(data)
    .enter()
    .append("tr")
    
}

//C2
var table2= function(data)
{
    var C2= d3.select("#C2").append("table");
    var tableRows= C2.selectAll("tr")
    .data(data)
    .enter()
    .append("tr");
    
    tableRows.append("td").text(function(planet){return planet.name})
    
}

/*
var makePlanet = function(name,img,distance,radius,density,moons)
{
    return {name,img,distance,radius,density,moons};
}


var planets = [
makePlanet("Mercury","img/mercury.jpg",
.38,.38,5.43,0),
makePlanet("Venus","img/venus.jpg",
.72,.94,5.24,0),
makePlanet("Earth","img/earth.jpg",
1,1,5.52,1),
makePlanet("Mars","img/mars.jpg",
1.52,.53,3.94,2),
makePlanet("Jupiter","img/jupiter.jpg",
5.2,11.21,1.33,79),
makePlanet("Saturn","img/saturn.jpg",
9.53,9.45,.7,62),
makePlanet("Uranus","img/uranus.jpg",
19.19,4.0,1.3,27),
makePlanet("Neptune","img/neptune.jpg",
30,3.88,1.76,14),
];

console.log(JSON.stringify(planets,null,2))

*/




                      