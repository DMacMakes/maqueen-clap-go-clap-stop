let thingDistance = 0
let drivingSpeed = 25
basic.showIcon(IconNames.Happy)
let imMoving = true
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, drivingSpeed)
/**
 * if im moving and
 * 
 *    if thing is less than 12cm away
 * 
 *       turn for 2 seconds. (stop one wheel)
 * 
 *       start the wheel again.
 */
basic.forever(function () {
    if (imMoving) {
        thingDistance = maqueen.Ultrasonic(PingUnit.Centimeters)
        if (thingDistance < 12) {
            maqueen.motorStop(maqueen.Motors.M2)
            basic.pause(1600)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, drivingSpeed)
        }
    }
    if (input.soundLevel() > 250) {
        music.playMelody("F G A B C5 A G - ", 1500)
    }
})
