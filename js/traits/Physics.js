import {Trait} from '../Entity.js';
import {is_paused} from '../input.js';
import {marioDead} from '../traits/PlayerController.js';


export default class Physics extends Trait {
    constructor() {
        super('physics');
    }

    update(entity, deltaTime, level) {
        if(!is_paused && !marioDead)
        {
            entity.pos.x += entity.vel.x * deltaTime;
            level.tileCollider.checkX(entity);
    
            entity.pos.y += entity.vel.y * deltaTime;
            level.tileCollider.checkY(entity);
    
            entity.vel.y += level.gravity * deltaTime;
        }
        
    }
}
