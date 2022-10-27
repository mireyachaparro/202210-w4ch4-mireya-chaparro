export type Robot = {
    id: number;
    name: string;
    img: string;
    speed: number;
    resistance: number;
    creationdate: string;
    isHuman: boolean;
};

export const robots: Array<Robot> = [
    {
        id: 1,
        name: 'BB8',
        img: 'https://www.leprechaun.es/8340-medium_default/figura-bb-8-45-cm-star-wars-episode-vii-big-figs.jpg',
        speed: 5,
        resistance: 5,
        creationdate: '20-05-1900',
        isHuman: false,
    },
    {
        id: 2,
        name: 'wall-e',
        img: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/wall-e/galeria/3139610-3-esl-ES/Wall-E.jpg',
        speed: 5,
        resistance: 5,
        creationdate: '20-05-1900',
        isHuman: false,
    },
    {
        id: 3,
        name: 'R2D2',
        img: 'https://m.media-amazon.com/images/I/81vbwzvCocL.__AC_SX300_SY300_QL70_ML2_.jpg',
        speed: 5,
        resistance: 5,
        creationdate: '20-05-1900',
        isHuman: false,
    },
];
