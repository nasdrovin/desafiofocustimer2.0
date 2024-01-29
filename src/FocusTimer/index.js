<<<<<<< HEAD
import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()
    
    events.registerControls()
=======
import state from './state.js'
import * as events from './events.js'
import * as timer from './timer.js'

export function start(minutes, seconds) {
    state.minutes = minutes
    state.seconds = seconds

    timer.updateDisplay()
    
    events.registerControls()
>>>>>>> 6410dd5bbc0cc682ac445fcf6c90536ef909f088
}