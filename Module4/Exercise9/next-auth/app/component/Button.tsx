"use client"
import './Button.css'
type ButtonProps={
    label:string,
    onClickHandler:()=> void
}
export default function Button({label,onClickHandler}:ButtonProps){
    return(
        <button className="btn" type="button" onClick={onClickHandler}>{label}</button>
    )
}