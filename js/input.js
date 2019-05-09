import Keyboard from './KeyboardState.js';
import {booleanMusica, pauseAudio, loadAudio} from './sound.js';
import {marioDead} from './traits/PlayerController.js';


export var is_paused = false;
export var input = new Keyboard();

export function setupKeyboard(mario) {

    input.addMapping('KeyW', keyState => {
        if (keyState) {
            mario.jump.start();
            var sound = new Howl({
                src: ['./audio/Jump.wav'],
                volume: 0.5,
                
            });
    
            sound.play();
        } else {
            mario.jump.cancel();
        }
    });

    input.addMapping('Space', keyState => {
        mario.turbo(keyState);
    });

    input.addMapping('KeyD', keyState => {
        mario.go.dir += keyState ? 1 : -1;
    });

    input.addMapping('KeyA', keyState => {
        mario.go.dir += keyState ? -1 : 1;
    });
	
	input.addMapping('KeyP', keyState => {            
        //Comprobar si el juego esta en pausa
        if(!is_paused && keyState && !marioDead)
        {
            var sound = new Howl({
                src: ['./audio/pause.wav'],
                volume: 0.8,
                
            });

            sound.play();
            //PAUSAR --> Desactivar controles de Mario
            input.removeTeclas(window);
                        
            is_paused = true;
            
            //Imagen de Pausa
			document.getElementById('imagen').src='./img/pausa.png';
            
            //Pausar Audio
            pauseAudio();

        }
        else if (is_paused && keyState && !marioDead)
        {
            //REANUDAR --> Activar de nuevo controles de Mario           
            //Turbo
			input.addMapping('KeyR', keyState => {
			    mario.turbo(keyState);
			});
			
			//Right
            input.addMapping('KeyD', keyState => {
                mario.go.dir += keyState ? 1 : -1;
                
            });

            //Left
            input.addMapping('KeyA', keyState => {
                mario.go.dir += keyState ? -1 : 1;
        
            });

            //Space
            input.addMapping('KeyW', keyState => {
                if (keyState) {
                    mario.jump.start();
                } else {
                    mario.jump.cancel();
                }
            });

            is_paused = false;
            document.getElementById('imagen').src='./img/negro.jpg';
            if(booleanMusica === true)
            {
                loadAudio();
            }
        }


    });
    
    return input;
}
