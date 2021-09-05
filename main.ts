input.onSound(DetectedSound.Loud, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    Kerenteluid += 1
    basic.showNumber(Kerenteluid)
})
let Kerenteluid = 0
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
	
})
