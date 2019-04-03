import Entity from './entity.js';
import {loadMarioSprites} from './sprites.js'

export function createMario()
{
    return loadMarioSprites()
    .then(sprite =>{
        const mario = new Entity();
        

        mario.draw = function drawMario(context)
        {   
            sprite.draw('mario',context,this.pos.x,this.pos.y);
        }

        mario.update = function updateMario(deltaTime)
        {
            this.pos.x += this.vel.x * deltaTime;
            this.pos.y += this.vel.y * deltaTime;
        }

        return mario;
    }); 
}