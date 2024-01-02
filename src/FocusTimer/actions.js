import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')

    timer.updateDisplay()
}

export function plusMinutes() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    if (minutes < 60) {
        minutes += 5
    }

    updateDisplay(minutes, seconds)
}

export function minusMinutes() {
    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    if (minutes > 5) {
        minutes -= 5
    }

    updateDisplay(minutes, seconds)
}

export function toggleMusicTree() {
    const treeBtn = document.querySelector('.ph-tree')
    treeBtn.classList.toggle('music-on')
    treeBtn.classList.toggle('tree')
    
    if(treeBtn.classList.contains('tree')) {
        sounds.forest.play()
    } else {
        sounds.forest.pause()
    }
    
}

export function toggleMusicRain() {
    const rainBtn = document.querySelector('.ph-cloud-rain')
    rainBtn.classList.toggle('music-on')
    rainBtn.classList.toggle('rain')

    if(rainBtn.classList.contains('rain')) {
        sounds.rain.play()
    } else {
        sounds.rain.pause()
    }
}

export function toggleMusicStore() {
    const storeBtn = document.querySelector('.ph-storefront')
    storeBtn.classList.toggle('music-on')
    storeBtn.classList.toggle('store')

    if(storeBtn.classList.contains('store')) {
        sounds.store.play()
    } else {
        sounds.store.pause()
    }
}

export function toggleMusicFire() {
    const fireBtn = document.querySelector('.ph-fire')
    fireBtn.classList.toggle('music-on')
    fireBtn.classList.toggle('fire')

    if(fireBtn.classList.contains('fire')) {
        sounds.fire.play()
    } else {
        sounds.fire.pause()
    }
}