import {marioDead, firstKill} from '../traits/PlayerController.js';


export function createDashboardLayer(font, playerEnv) {
    const LINE1 = font.size;
    const LINE2 = font.size * 2;
    const LINE3 = font.size * 4;
    const LINE4 = font.size * 16;

    const coins = 13;

    return function drawDashboard(context) {
        const {score, time} = playerEnv.playerController;

        font.print('MARIO', context, 16, LINE1);
        font.print(score.toString().padStart(6, '0'), context, 16, LINE2);

        font.print('LIFES x'+firstKill, context,80,LINE1)
        font.print('@x' + coins.toString().padStart(2, '0'), context, 80, LINE2);

        font.print('WORLD', context, 152, LINE1);
        font.print('1-1', context, 160, LINE2);

        font.print('TIME', context, 208, LINE1);
        font.print(time.toFixed().toString().padStart(3, '0'), context, 216, LINE2);

        if(localStorage)
        {
            if(localStorage.getItem("hs"))
            {
                var hs = localStorage.getItem("hs");
            }
            else
            {
                hs = 0;
            }
        }

        font.print('HS', context, 16, LINE3);
        font.print(hs.toString().padStart(6, '0'), context, 35, LINE3);

        if(marioDead)
        {
            font.print('GAME OVER', context, 100, LINE4);
        }
       

    };
}
