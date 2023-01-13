let X=["1","2","3","4","5","6","7","8","9","0" ,"A","B" ,"C" ,"D", "E","F" ,"G" ,"H" ,"I","G" ,"K", "L" ,"M" ,"N", "O", "P ","Q" ,"R" ,"S", "T", "U" ]
  
function myfun(){
    var sum2 =0
    var sum1=0
     for(let i=0;i <5 ; i++){
       let  Y = Math.floor(Math.random() * X.length )
       let  Z= Math.floor(Math.random() * X.length )
          sum1 += X[Y] 
          sum2+=X[Z]    
          }
         document.body.style.backgroundColor="black"
           document.getElementById("hi").innerHTML= "your pasword is here donot share to other"
          document.getElementById("h1").innerHTML=  sum1
          document.getElementById("h2").innerHTML= sum2
     }

  

      
