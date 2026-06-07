type Colors = 'red' | 'green' | 'blue';
type RGB = [red: number, green: number, blue: number];

// const palette = {
//     red: [255, 0, 0],
//     green: "#00ff00",
//     // bleu: [0, 0, 255],
//     blue: [0, 0, 225],
//     platypus: 'haha' //Error
// } satisfies Record<Colors, string | RGB>

const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    // bleu: [0, 0, 255],
    blue: [0, 0, 225],
    platypus: 'haha'
} satisfies Record<string, string | RGB>


const redComponent = palette.red.at(0);

const greenNormalized = palette.green.toUpperCase();