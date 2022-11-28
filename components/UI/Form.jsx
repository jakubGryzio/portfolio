import React from 'react'
import classes from '../../styles/Form.module.css'

const Form = () => {
    return (
        <form className={classes.form}>
            <div className={classes.form__group}>
                <input type="text" placeholder='Your Name' required></input>
            </div>
            <div className={classes.form__group}>
                <input type="email" placeholder='Email' required></input>
            </div>
            <div className={classes.form__group}>
                <textarea type="text" rows={5} placeholder='Message'></textarea>
            </div>

            <button className="primary__btn" type="submit">Send</button>
        </form >
    )
}

export default Form