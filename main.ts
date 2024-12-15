
let min: number = 0
let max = 10
input.onButtonPressed(Button.A, function (): void {
    max = max - 1; 
    console.logValue("max", max);
});
input.onButtonPressed(Button.B, function (): void {
min = min + 1
    console.logValue('idl', min)
}); 
input.onButtonPressed(Button.AB,function(){


    let a = randint(min, max)
    switch (a) {
        case 0:
            basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `
            ); break;
        case 1:
            basic.showLeds(`
        . . # . .
        . # # . .
        # . # . .
        . . # . .
        . . # . .
        `
            ); break;
        case 2:
            basic.showLeds(`
        . . # . .
        . # . # .
        . . # . .
        . # . . .
        # # # # #
        `
            ); break;
        case 3:
            basic.showLeds(`
        . # # . .
        . . . # .
        . . # . .
        . . . # .
        . # # . .
        `
            ); break;
        case 4:
            basic.showLeds(`
        . . . # .
        . . # # .
        . # . # .
        # # # # #
        . . . # .
        `
            ); break;
        case 5:
            basic.showLeds(`
        . . # # #
        . . # . .
        . . # . .
        . . . # .
        # # # . .
        `
            ); break;
        case 6:
            basic.showLeds(`
        . . # . .
        . # . . .
        # . # . .
        # . # . .
        . # . . .
        `
            ); break;
        case 7:
            basic.showLeds(`
        . # # # #
        . . . # .
        . . # . .
        . # . . .
        # . . . .
        `
            ); break;
        case 8:
            basic.showLeds(`
        . . # . .
        . # . # .
        . . # . .
        . # . # .
        . . # . .
        `
            ); break;
        case 9:
            basic.showLeds(`
        . . . # .
        . . # . #
        . . . # .
        . . . # .
        . . # . .
        `
            ); break;
        case 10:
            basic.showLeds(`
        . # . # .
        # # # . #
        . # # . #
        . # # . #
        . # . # .
        `
            ); break;
    }}
) 
