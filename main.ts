input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    时间 = 0
    tm.showNumber(0)
})
let tm: zmrobo.TM1637LEDs = null
let 时间 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
basic.pause(2000)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        while (input.buttonIsPressed(Button.B)) {
            basic.pause(1000)
            时间 += 1
            tm.showNumber(时间)
        }
    }
})
