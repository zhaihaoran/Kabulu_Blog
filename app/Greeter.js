import React from "react"
import config from './config.json'
import avatar from '@/style/img/favicon.png'
import Register from '@/components/views/Register'

import styles from "./Greeter.css"

class Greeter extends React.Component {
    render() {
        return (
            <div className={styles.root}>
                <img src={avatar} alt="logo" />
                {config.greetText}
                <Register />
            </div>
        )
    }
}

export default Greeter