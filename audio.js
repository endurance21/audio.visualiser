 
                                
    var audio = document.createElement('audio');                                      /////////audio setup using web audio inbuilt API,NO OTHER API USED, SIMPLE CONCEPT OF AUDIO PIPELINE IS USED..................
    audio.src = 'audio/song.mp3';
    audio.controls = 'true';
    document.body.appendChild(audio);                                               ////////////AUDIO TOOL BAR IS APPENDED IN MY HTML    
    audio.style.width = window.innerWidth;
    var audioContext=new AudioContext();
    var  analyser = audioContext.createAnalyser();                                   ///////////ANAYLYSER WILL RETRIEV DATA WE WANT 
    var source = audioContext.createMediaElementSource(audio);
    source.connect(analyser);                                                     
    analyser.connect(audioContext.destination);
    

    var animationvariable;

/*
  function frequencydata()
  {
          animationvariable=requestAnimationFrame(frequencydata);

            var fftdata= new Uint8Array(analyser.frequencyBinCount);                 //////////makes array of size analyser.frequencyBinCount....

            analyser.getByteFrequencyData(fftdata);   ////////fills the fftdataarray to the value o-255
   
           
               
  }

frequencydata();
 
 */
    

 