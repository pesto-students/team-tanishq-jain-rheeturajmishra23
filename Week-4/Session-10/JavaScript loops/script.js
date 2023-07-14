function drawTriangle(triangleSize) {
   let output=""
   for(let i = 1 ; i<=triangleSize ;i++){
         for(let j=1 ; j<=i ; j++){
            output+="*";
         }
         output+="\n";
   }
   return output; 
}
console.log(drawTriangle(4));