input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
basic.showString("APETOR!!")
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.pause(1000)
basic.showLeds(`
    # # # . .
    # . . # .
    # . . # .
    # . . # .
    # # # . .
    `)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            }
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
                if ((0 as any) == (1 as any) && (0 as any) == (1 as any)) {
                    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
                    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
                }
            }
        }
    }
})
