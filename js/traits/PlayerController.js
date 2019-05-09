import {Trait} from '../Entity.js';
import {Vec2} from '../math.js';
import {is_paused, input} from '../input.js';

export var firstKill = 4;
export var marioDead = false;

export default class PlayerController extends Trait {
    constructor() {
        super('playerController');
        this.checkpoint = new Vec2(0, 0);
        this.player = null;
        this.score = 0;
        this.time = 300;
    }

    setPlayer(entity) {
        this.player = entity;

        this.player.stomper.onStomp = () => {
            this.score += 100;
        }
    }

    update(entity, deltaTime, level) {
        if(!is_paused)
        {
            if(marioDead)
            {

                input.removeTeclas(window);          

            }
            //Comprobar HS
            else if(this.score > localStorage.getItem("hs"))
            {
                localStorage.setItem("hs", this.score)
            }   
            else if (!level.entities.has(this.player)) {
                console.log(firstKill)
                //Reducir vidas
                if(!marioDead && firstKill > 1 && firstKill < 4)
                {
                    var sound = new Howl({
                        src: ['./audio/Die.wav'],
                        volume: 0.5,         
                        });
                    sound.play();
            
                }
                if(firstKill === 1)
                {
                    console.log("MUERTO")
                    //GAME OVER
                    var sound = new Howl({
                        src: ['./audio/GameOver.wav'],
                        volume: 0.5,         
                        });
                    sound.play();
                    marioDead = true;
                }
                firstKill -= 1;
                this.player.killable.revive();               
                this.player.pos.set(this.checkpoint.x, this.checkpoint.y);
                level.entities.add(this.player);
                
            } else {
                this.time -= deltaTime;
            }
        }
    }
}
