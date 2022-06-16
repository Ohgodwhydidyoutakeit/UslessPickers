import { FC, useEffect, useState } from "react";



interface IBirthDateProps {
    startDate: Date
    endDate: Date
}
export const BirthDate: FC<IBirthDateProps> = ({ startDate, endDate }) => {
    const [dates, setDates] = useState<Date[]>([])
    useEffect(() => {
        const date = new Date(startDate.getTime());

        while (date <= endDate) {
            // dates.push(new Date(date));
            setDates((_prevDates: Date[]) => {
                return [..._prevDates, new Date(date)];
            })
            date.setDate(date.getDate() + 1);
        }
        console.log(dates)
    }, [dates])

    return (

        < div >
            <div>Select your birthdate</div>
            <div> <select>{dates.map((data: Date) => {
                return <option> a</option>
            })}</select></div>
        </div >

    )



}