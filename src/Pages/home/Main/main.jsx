import React from 'react'
import styles from '../styles.css'

// components 
import Navigation from '../../../components/nav'

const MainComponent = ()=>{
    return (
        <div className={"container"}>
            {/* main section  */}
            <div className={"mainSection"}>
                <div className={"subSection1"}>
                     {/* navigation section  */}
                    <Navigation/>
                </div>
                <div className={"subSection2"}>second</div>
                <div className={"subSection3"}>third</div>
            </div>
        </div>
    )
}

export default MainComponent