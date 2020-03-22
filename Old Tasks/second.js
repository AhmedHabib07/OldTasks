function reverseme(name){
    var x="";
    for(var i=name.length-1;i>=0;i--){
        x+= name[i];
    }
    return x;
}
var y=reverseme("digital");
console.log(y);