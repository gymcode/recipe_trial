import React from 'react'
import { Link} from 'react-router-dom'

const Navigation = ()=>{
    return (
        <div>
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