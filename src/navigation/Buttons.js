import React from 'react';
import './Buttons.css'

export const Buttons = ( {next, previous} ) => {

    return (
        <div>

            <button className="buttons" onClick={ previous }>Vorige</button>
            <button className="buttons" onClick={ next }>Volgende</button>

        </div>
    )
}

export default Buttons;