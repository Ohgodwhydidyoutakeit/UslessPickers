import { FC, useEffect, useState } from "react";
interface IBirthDateProps {
    startDate: Date
    endDate: Date
}

const returnArrayOfDates = ({ startDate, endDate }: IBirthDateProps): Date[] => {
    let dates: Date[] = []
    //to avoid modifying the original date
    const theDate = new Date(startDate)
    while (theDate < endDate) {
        dates = [...dates, new Date(theDate)]
        theDate.setDate(theDate.getDate() + 1)
    }
    return dates
}

const BirthDate: FC<IBirthDateProps> = ({ startDate, endDate }) => {


    const dates = returnArrayOfDates({ startDate, endDate }) || null

    return (
        < div >
            <div>Select your birthdate</div>
            <div> <select>{dates.map((data: Date, index: number) => {
                return <option key={index}> {data.toDateString()}</option>
            })}</select></div>
        </div >

    )



}

export default BirthDate