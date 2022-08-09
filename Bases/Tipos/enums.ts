(()=>{
//Enumeración 
//niveles de audio
    enum AudioLevel{
        min=1,
        medium,
        //Coloca valor directamente, de lo contrario toma el valor de la posición
        max=10
    }

    let currentAudio=AudioLevel.medium;

    console.log(currentAudio);
    console.log(AudioLevel)
})()


