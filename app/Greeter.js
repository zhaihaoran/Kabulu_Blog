import React from "react"
import config from './config.json'

import styles from "./Greeter.css"

class Greeter extends React.Component {
    render() {
        return (
            <div className={styles.root}>{config.greetText}</div>
        )
    }
}

export default Greeter