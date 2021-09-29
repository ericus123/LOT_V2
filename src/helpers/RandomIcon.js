export const GenerateRandomIcon = (icons) => {
 const icon = icons[Math.floor(Math.random()*icons.length)];

    return icon;
};