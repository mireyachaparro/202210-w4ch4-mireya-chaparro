export interface IRobot {
    name: string;
    img: string;
    speed: number;
    resistance: number;
    creationdate: string;
}

export const robots = [
    {
        name: 'BB8',
        img: 'https://www.leprechaun.es/8340-medium_default/figura-bb-8-45-cm-star-wars-episode-vii-big-figs.jpg',
        speed: 5,
        resistance: 5,
        creationdate: '20-05-1900',
    },
    {
        name: 'wall-e',
        img: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/wall-e/galeria/3139610-3-esl-ES/Wall-E.jpg',
        speed: 5,
        resistance: 5,
        creationdate: '20-05-1900',
    },
    {
        name: 'R2D2',
        img: 'https://m.media-amazon.com/images/I/81vbwzvCocL.__AC_SX300_SY300_QL70_ML2_.jpg',
        speed: 5,
        resistance: 5,
        creationdate: '20-05-1900',
    },
];
