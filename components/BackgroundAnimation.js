import React from 'react'
export const BackgroundAnimation = ({ children }) => {
    return (
        <>
            <div className="context">
                <div className="allchildren">{children}</div>
            </div>


            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </>
    )
}



