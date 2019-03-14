import {loadImage} from './loaders.js'
import SpriteSheet from './SpriteSheet.js'

export function loadMarioSprites()
{
    return loadImage('/proyecto/img/characters.gif')
    .then(image => {
        const sprites = new SpriteSheet(image,16,16);
        sprites.define('mario', 276,44,16,16);
        sprites.define('luigi', 276,106,16,16);
        return sprites;
    });
}

export function loadBackgroundSprites()
{
    return loadImage('/proyecto/img/tiles.png')
    .then(image => {
        const sprites = new SpriteSheet(image,16,16);
        sprites.defineTile('ground', 0,0);
        sprites.defineTile('sky', 3,23);
        return sprites;
    });
}