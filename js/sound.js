var sound = new Howl({
        src: ['./audio/supermario.mp3', './audio/supermario.opus', './audio/supermario.ogg' ],
        volume: 0.5,
        loop: true
    });

var is_paused = true;
export var booleanMusica = false;

var botonPlay = document.getElementById("howler-play");
    botonPlay.onclick = loadAudio;

var botonPause = document.getElementById("howler-pause");
    botonPause.onclick = pauseAudio;

var botonStop = document.getElementById("howler-stop");
    botonStop.onclick = stopAudio;

var botonVolUp = document.getElementById("howler-volup");
    botonVolUp.onclick = audioUp;

var botonVolDown = document.getElementById("howler-voldown");
    botonVolDown.onclick = audioDown;

export function loadAudio(){
    if(is_paused)
    {
        var src = document.getElementById('imagen').src
        if(src === 'http://localhost:5000/img/pausa.png')
        {
            pauseAudio();
        }
        else
        {
            sound.play();
            is_paused = false;
            booleanMusica = true;
        }    
    }            
}

export function pauseAudio()
{
    if(!is_paused)
    {
        sound.pause();
        is_paused = true;
        
    }
}

function stopAudio()
{
    sound.stop();
    is_paused = true;
}

function audioUp()
{
    var vol = sound.volume();
	vol += 0.1;
		if (vol > 1) {
			vol = 1;
		}
	sound.volume(vol);
}

function audioDown()
{
    var vol = sound.volume();
	vol -= 0.1;
		if (vol < 0) {
			vol = 0;
		}
	sound.volume(vol);
}