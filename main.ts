/**
 * if im moving and
 * 
 *    if thing is less than 12cm away
 * 
 *       turn for 2 seconds. (stop one wheel)
 * 
 *       start the wheel again.
 */
function turn90LeftOrRight () {
    turnRight = Math.randomBoolean()
    if (turnRight) {
        maqueen.motorStop(maqueen.Motors.M2)
        basic.pause(1600)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, drivingSpeed)
    } else {
        maqueen.motorStop(maqueen.Motors.M1)
        basic.pause(1600)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, drivingSpeed)
    }
}
let thingDistance = 0
let turnRight = false
let drivingSpeed = 0
drivingSpeed = 25
basic.showIcon(IconNames.Happy)
let imMoving = true
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, drivingSpeed)
basic.forever(function () {
    if (imMoving) {
        thingDistance = maqueen.Ultrasonic(PingUnit.Centimeters)
        if (thingDistance < 12) {
            turn90LeftOrRight()
        }
    }
})
