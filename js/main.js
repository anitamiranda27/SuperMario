import Compositor from './Compositor.js'
import {loadLevel} from './loaders.js'
import {loadMarioSprites, loadBackgroundSprites} from './sprites.js'
import {createBackgroundLayer} from './layers.js'


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

function createSpriteLayer(sprite, pos, name)
{
    return function drawSpriteLayer(context){
        sprite.draw(name,context,pos.x,pos.y);
    }
}

Promise.all([
    loadMarioSprites(),
    loadBackgroundSprites(),
    loadLevel('1-1')
])
.then(([marioSprite,backgroundSprites,level,]) => {
    const comp = new Compositor();

    const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites);
    comp.layers.push(backgroundLayer);

    const pos = {
        x: 64,
        y: 64
    }

    const pos2 = {
        x: 74,
        y: 64,
    }

    const spriteLayer = createSpriteLayer(marioSprite,pos,'mario');
    const spriteLayer2 = createSpriteLayer(marioSprite,pos2,'luigi');
    comp.layers.push(spriteLayer);
    comp.layers.push(spriteLayer2);


    function update()
    {
        comp.draw(context);
        pos.x += 2;
        pos.y += 2;
        pos2.x += 2;
        pos2.y += 2;
        requestAnimationFrame(update);
    }
    update();

});

