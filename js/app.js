// immediate invoked function expression

(function() {
  
  const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
  ];

  //const leftBtn,rightBtn,image;
  let index = 0;
 // let index = 0;
  const btn = document.querySelectorAll('.btn');
  const image = document.querySelector('.img-container');
  let clickedBtn; 
  //console.log(btn,image);
  btn.forEach((element)=>{
    element.addEventListener('click',(event)=>{
       clickedBtn = event.target;
      //console.log(clickedBtn);
      if(clickedBtn.classList.contains('btn-left')){
        index--
        if(index < 0){
          index = pictures.length-1;
        }
          image.style.backgroundImage = `url('../img/${pictures[index]}.jpeg')`;
          console.log(pictures[index]);   
        // else{
        //   image.style.backgroundImage = `url('../img/${pictures[index]}.jpeg')`
        //   console.log();
          
        // }
      }
      
      //check if button click is on left button
      else if(clickedBtn.classList.contains('btn-right')){
        index++
        if(index > pictures.length - 1){
          index = 0;
        }
        //set image background Image Element
        image.style.backgroundImage = `url('../img/${pictures[index]}.jpeg')`;
        console.log(pictures[index]);  
      }
    
    });
  });
  
  
  
  
  // btn-left
  // btn-right


})();
