//values
var data=[];
var descr=[];
var all=0;
var inputs=$(".number").length;
var grafs=$(".line").length;
// add items
$(".add").click(function(){
    $(".data").append('<div class="dataS"><p>'+($(".dataS").length+1)+'.</p><input type="text" maxlength="15" class="input text" placeholder="describe data (15ch)"> <input type="number" min="0" class="input number" placeholder="data"></div>')
    $(".lines").append('<div class="line n'+$(".line").length+'"></div>');
   $(".descr").append('<p class="n'+$(".descr p").length+'"></p>');
    inputs=$(".number").length;
    grafs=$(".line").length;
});
//delete items
$(".delete").click(function(){
    var inp=$(".dataS");
    var lin=$(".line");
    if(inp.length!==2){
    inp[inp.length-1].remove();
    lin[lin.length-1].remove();
    inputs=$(".dataS").length;
    grafs=$(".line").length;
    data.pop();
}else{
    alert("There must be at least 2 items.");
}
});
//describtion for grafic
function describeText(){
    for(var i=0;i<inputs;i++){
        if($(".input.text")[i].value!==""){
            $("p.n"+i).text($(".input.text")[i].value);}
        else{
           $("p.n"+i).text("No desription");
        }       
        
        var name=document.querySelector(".name").value;
        if(name!=="") {
        console.log("Name: "+name);
        $(".N").text(name);
        $(".N").css("opacity","1");}

    }

}
//getting and returning redactured data
function dataGetter(){
    for(var i=0;i<inputs;i++){
        if(+$(".number")[i].value>=0){
        data[i]=+$(".number")[i].value;}
    }
    console.log("-------------");
    console.log("Original:"+data);
    mathPerc();
    for(var i=0;i<data.length;i++){
        $(".line.n"+i).css("width",data[i]+"%");
        if(data[i]>=80){
            $(".line.n"+i).css("background","rgba(0, 128, 0, 0.647)");
            $(".line.n"+i).css("color","rgb(255, 215, 196)");
        }
        else if(data[i]>=50){
            $(".line.n"+i).css("background","rgba(149, 255, 0, 0.784)");
            $(".line.n"+i).css("color","#fa7c4e");
        }
        else if(data[i]>=20){
            $(".line.n"+i).css("background","rgba(255, 255, 0, 0.647)");
            $(".line.n"+i).css("color","#fa7c4e");
        }else if(data[i]>=10){
            $(".line.n"+i).css("background","rgba(255, 102, 0, 0.647)");
            $(".line.n"+i).css("color","rgb(255, 215, 196)");
        }else{
            $(".line.n"+i).css("background","rgba(255, 0, 0, 0.647)");
            $(".line.n"+i).css("color","rgb(255, 215, 196)");
        }
        $(".line.n"+i).text(data[i]+"%");
    }
    console.log("Converted:"+data);
    }
//translate data into percentage value
function mathPerc(){   
    for(var i=0;i<data.length;i++){
        all=all+data[i];
    }
    for(var i=0;i<data.length;i++){
        var e=(100/all)*data[i];
        data[i]=e.toFixed(2);
    }
}

//tab button reaction
document.addEventListener("keydown",function(event){
    if(event.key==="Tab"){
        dataGetter();
        describeText();
        all=0;
        evr=0;
    };
    });
