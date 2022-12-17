input.onSound(DetectedSound.Loud, function () {
	
})
let thingDistance = 0
let drivingSpeed = 25
let imMoving = false
input.setSoundThreshold(SoundThreshold.Loud, 200)
basic.showIcon(IconNames.Asleep)
basic.pause(1000)
basic.showIcon(IconNames.Happy)
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, drivingSpeed)
imMoving = true
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
            basic.pause(2000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, drivingSpeed)
        }
    }
})
