
// var inputText = document.getElementById("toolID");
// 			function addLI() 
// 			{

// 				var listNode = document.getElementById("list"),
// 				textNode = document.createTextNode(inputText.value),

// 				liNode = document.createElement("LI");

// 				liNode.appendChild(textNode);
// 				listNode.appendChild(liNode);

				

// 			} ;

//-------------MODAL FUNCTIONS------------

document.getElementById("modalbutton").addEventListener("click", function()
{document.querySelector(".modaladdtools").style.display = "flex"});

document.querySelector(".close").addEventListener("click", function(){
document.querySelector(".modaladdtools").style.display = "none"});

getTools();
function getTools ()
    {
    $.get("/tools",function(data){
        if (!data){
            console.log("No Data Received");
        }
        console.log("Received Data:");
        for(var i=0;i<data.length;i++){
            console.log(data[i].name);
        }
        showTools(data);
    });
    }

function showTools(tools){
    var toolsSection = document.getElementById("listoftools");
    for (var i = 0;i<tools.length;i++)
    {
        var section = document.createElement("section");
        section.className += "listoftools";
        var tools = document.createElement("h4");
        tools.innerHTML = tools[i].tools;
        section.appendChild(tools);
        toolsSection.appendChild(section);
    } 
}



