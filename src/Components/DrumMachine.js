import React, { Component } from 'react'
import styles from '../Styles/DrumMachine.module.css'
import structure, { barSize, barsAmount, tabsAmount } from '../Data/structure'

class DrumMachine extends Component {
    state = {
        bpm: 120,
        structure,
        barSize,
        barsAmount,
        tabsAmount
    }
    render = () => {

        return (
            <div className={styles.main}>
                <div className={styles.tabs}>
                    
                </div>
                <div className={styles.pads}>

                </div>
                Hello
            </div>
        )
    }
}

export default DrumMachine