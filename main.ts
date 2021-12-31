let Random = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
input.onGesture(Gesture.Shake, function () {
    Random = randint(0, 4)
    if (Random == 0) {
        basic.showIcon(IconNames.Sad)
        basic.pause(300)
        basic.clearScreen()
    } else if (Random == 1) {
        basic.showIcon(IconNames.Duck)
        basic.pause(300)
        basic.clearScreen()
    } else if (Random == 2) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(300)
        basic.clearScreen()
    } else if (Random == 3) {
        basic.showIcon(IconNames.Silly)
        basic.pause(300)
        basic.clearScreen()
    } else if (Random == 4) {
        basic.showIcon(IconNames.EigthNote)
        basic.pause(300)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.compassHeading()))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(100)
        basic.clearScreen()
    }
})
basic.forever(function () {
    led.setBrightness(255 - input.lightLevel())
})
