
var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
canvas.style.backgroundColor="white";
var c=canvas.getContext('2d');
 var colors=['#393939','#FF5A09','#be4f0c','#fa625f'];



 function Circle(x,y,radius,index,omega,min,max)
 { this.x=x;
   this.y=y;
  this.min=min;
  this.max=max;
   this.omega=omega; 
  
   this.radius=radius;
  this.index=index;

  this.radian=Math.random()*Math.PI*2;
  this.distancefromcenter= this.min+Math.random()*this.max;
                 

  
  
         this.draw=function(){  
                               
                  
                          
                              c.beginPath();
                              c.arc(this.x,this.y,this.radius,0,Math.PI*2,0);
                              c.strokeStyle="red";
                              c.stroke();

                              c.fillStyle="red";
                              
                              c.fill();

                            
                            }




         this.update=function(value)
             {    
                   this.distancefromcenter=value;

              
                       
                                      
   
                   
                     

            

                                   this.radian+=this.omega;      ////////omega
             
  
                                   this.x=x+Math.cos(this.radian)*(this.distancefromcenter);
            

                                   this.y=y+Math.sin(this.radian)*(this.distancefromcenter);
         
                                   


                                   this.draw();  
         





            }                    


    }
    






    

function design(Circle,x,y,omega,maxradii,minradii)
{   this.Circle=Circle;
    this.x=x;
    this.y=y;
    this.omega=omega;
    this.maxradii=maxradii;
    this.minradii=minradii;
    this.radius=0.5;


    this.circlearray=[];
     for(var i=0; i<300; i++){

        this.circlearray.push(new this.Circle(this.x,this.y,this.radius,i,this.omega,100,150));
  
    
    }

}

function animation(design)

{  setInterval(function(){    
      c.fillStyle='rgba(0,0,0,0.05)' ;
       c.fillRect(0,0,innerWidth,innerHeight);

        

       var fftdata= new Uint8Array(analyser.frequencyBinCount);                 //////////makes array of size analyser.frequencyBinCount....

       analyser.getByteFrequencyData(fftdata);   ////////fills the fftdataarray to the value o-255
         
       for(var i=0; i<design.circlearray.length; i++)
       {  
          design.circlearray[i].update(fftdata[4]);
       }
    

  } ,1);
}
 

var design1=new design(Circle,250,400,0.05,500,500);
animation(design1);
 

//var design2=new design(Circle,750,500,0.05,800,100);
//animation(design2);
 


var design3=new design(Circle,1250,400,-0.05,500,500);
animation(design3);

 