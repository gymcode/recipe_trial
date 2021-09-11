import React from 'react'
import { Link} from 'react-router-dom'
import './nav.css'

const Navigation = ()=>{
    return (
        <div className={"nav"}>
            <div>
                <Link>Overview</Link>
            </div>
            <div>
                <Link>Recipe</Link>
            </div>
            <div>
                <Link>Favorite</Link>
            </div>
            <div>
                <Link>Community</Link>
            </div>
            <div>
                <Link>Setting</Link>
            </div>
        </div>
    )
}

export  default Navigation