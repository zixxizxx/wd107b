function degree(sor){
    if (sor >= 90) return "A";
    else if (sor >= 80 ) return "B";
    else if (sor >= 70 ) return "'C'";
    else if (sor <= 69 ) return "'D'"
}
var sor = 85;
console.log("degree("+sor+")=>", degree(sor));