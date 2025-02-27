import { useContext } from "react";
import { AgeCal } from "../App";
import CountUp from "react-countup";

const AgeOutput = () => {

    const {ageYear, ageMonth, ageDate} = useContext(AgeCal);
    const duration = 1;

    return (
        <div className="output-container">
            <p>
                <span>{ageYear === ''? '--': <CountUp end={ageYear} duration={duration} />}</span>&nbsp;years
            </p>
            <p>
                <span>{ageMonth === ''? '--': <CountUp end={ageMonth} duration={duration} />}</span>&nbsp;months
            </p>
            <p>
                <span>{ageDate === ''? '--': <CountUp end={ageDate} duration={duration} />}</span>&nbsp;days
            </p>
        </div>
    );
};

export default AgeOutput;