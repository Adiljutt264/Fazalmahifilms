import React from 'react'

const Section = ({heading, text, hasBtn = true, btnText, imgSrc, imgSize="70%", backgroundColor, headingColor, textColor, btnColor }) => {
  return (
    <section style={{backgroundColor:backgroundColor}} className='section'>
    <div>
        <h3 style={{color:headingColor}}>{heading}</h3>
        <p style={{color:textColor}}>{text}</p>
       { hasBtn && <button style={{color:btnText, backgroundColor:btnColor}}>{btnText}</button> }
        <div>
            <img style={{width:imgSize}} src={imgSrc} alt="imgSrc"/>
        </div>
    </div>
    </section>
  )
}

export default Section