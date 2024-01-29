<<<<<<< HEAD
import { controls } from './elements.js'
import { clima } from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function') {
            return
        }
        
        actions[action]()
    })

    clima.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function') {
            return
        }
        
        actions[action]()
    })
=======
import { controls } from './elements.js'
import { clima } from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function') {
            return
        }
        
        actions[action]()
    })

    clima.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if(typeof actions[action] != 'function') {
            return
        }
        
        actions[action]()
    })
>>>>>>> 6410dd5bbc0cc682ac445fcf6c90536ef909f088
}