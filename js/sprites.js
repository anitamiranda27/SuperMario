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
