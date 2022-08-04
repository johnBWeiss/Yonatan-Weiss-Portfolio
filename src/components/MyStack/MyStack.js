import React from 'react'
import logos from "../../assets/images/logos";
import './MyStack.css'


export const MyStack = () => {

    const { react, vue, vuetify, git, mongo, css, html, redux, JS } = logos

    const logoArray = [react, vue, vuetify, git, mongo, css, html, redux, JS]
    return (


        <div className='myStackContainer'>
            <div className='myStackInnerContainer'>
                {logoArray.map((v, i) => (<div className='singleStack' style={{ animation: `singleStack 1s linear ${i / 1.1}s infinite forwards` }
                }>
                    <img
                        className='stackLogo'
                        src={v.src}
                        title=''
                        alt="" />
                    <div className='stackTitle'>{v.title}</div>
                </div>))
                }

            </div>
        </div >
    )
}
