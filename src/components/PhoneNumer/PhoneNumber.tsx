import { secureHeapUsed } from "crypto";
import { FC, useState } from "react";


const PhoneNumer: FC = () => {
    /// Todo : 2 select scrolls - one 00- 100 and second from 000 -- 000 -- 000 to 999 -- 999 -- 999

    // from whatever reason it needs a state now :/ -- kinda understand it now doe
    // fuck that 2 states

    const [countrySelect, setCountrySelect] = useState<number>(50)
    const [phoneSelect, setPhoneSelect] = useState<number>(Math.floor(Math.random()*999999999 ))

    return (<div>
        <div>Select your phone number</div>
        <label htmlFor="">{countrySelect}</label>
        <input type="range" min="1" max="100" value={countrySelect} id="myRange" onInput={(e: any) => setCountrySelect(e.target.value)}></input>
        <label htmlFor="">{phoneSelect}</label>
        <input type="range" min="1" max="999999999" value={phoneSelect} id="myRange" onInput={(e: any) => setPhoneSelect(e.target.value)}></input>
    </div >)
}


export default PhoneNumer