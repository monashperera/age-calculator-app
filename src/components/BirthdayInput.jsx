import { useContext, useEffect, useRef, useState } from 'react';
import btnIcon from '../assets/images/icon-arrow.svg';
import { AgeCal } from '../App';

const BirthDayInput = () => {

    const { setAgeYear, setAgeMonth, setAgeDate } = useContext(AgeCal);

    const [dateInput, setDateInput] = useState('');
    const [monthInput, setMonthInput] = useState('');
    const [yearInput, setYearInput] = useState('');

    const birthDayRef = useRef(null);
    const birthMonthRef = useRef(null);
    const birthYearRef = useRef(null);
    const [bDayVal, setBDayVal] = useState('');
    const [bMonthVal, setBMonthVal] = useState('');
    const [bYearVal, setBYearVal] = useState('');
    const [errorMDate, setErrorMDate] = useState('');
    const [errorMMonth, setErrorMMonth] = useState('');
    const [errorMYear, setErrorMYear] = useState('');
    const [cYear, setCYear] = useState('');
    const [dateMax, setDateMax] = useState('');

    useEffect(() => {
        const timerId = setInterval(() => {
            setCYear((year) => year = new Date().getFullYear());
        }, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, [cYear]);

    useEffect(() => {
        const monthEnd = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const timer2 = setInterval (() => {
            setDateMax((max) =>
                max = monthEnd[birthMonthRef.current.value - 1]
            );
        }, 1000);

        return () => {
            clearInterval(timer2);
        }
    }, [monthInput]);

    function checkValidation() {

        const dayValue = birthDayRef.current.value;
        const monthValue = birthMonthRef.current.value;
        const yearValue = birthYearRef.current.value;

        if ((birthDayRef.current && !birthDayRef.current.checkValidity()) || (birthMonthRef.current && !birthMonthRef.current.checkValidity()) || (birthYearRef.current && !birthYearRef.current.checkValidity())) {
            setBDayVal(!birthDayRef.current.checkValidity());
            setBMonthVal(!birthMonthRef.current.checkValidity());
            setBYearVal(!birthYearRef.current.checkValidity());
            setErrorMDate('This field is required');
            setErrorMMonth('This field is required');
            setErrorMYear('This field is required');

        } else {
            setBDayVal(!birthDayRef.current.checkValidity());
            setBMonthVal(!birthMonthRef.current.checkValidity());
            setBYearVal(!birthYearRef.current.checkValidity());
            setErrorMDate('');
            setErrorMMonth('');
            setErrorMYear('');
        }

        if ((dayValue === '') || (dayValue === null)) {
            setBDayVal(!birthDayRef.current.checkValidity());
            setErrorMDate('This field is required');
        } else {
            if ((dayValue <= birthDayRef.current.min) || (dayValue >= birthDayRef.current.max)) {
                setBDayVal(!birthDayRef.current.checkValidity());
                setErrorMDate('Must be a valid date');
            }
        }

        if ((monthValue === '') || (monthValue === null)) {
            setBMonthVal(!birthMonthRef.current.checkValidity());
            setErrorMMonth('This field is required');
        } else {
            if ((monthValue <= birthMonthRef.current.min) || (monthValue >= birthMonthRef.current.max)) {
                setBMonthVal('true');
                setErrorMMonth('Must be a valid month');
            }
        }

        if ((yearValue === '') || (yearValue === null)) {
            setBYearVal(!birthYearRef.current.checkValidity());
            birthYearRef.current.setCustomValidity('');
            setErrorMYear('This field is required');
        } else {
            if (yearValue > birthYearRef.current.max) {
                setBYearVal(!birthYearRef.current.checkValidity());
                setErrorMYear('Must be in the past');
            }
        }

    }

    const FindAge = () => {
        const today = new Date();
        const birthDay = new Date(`${yearInput}-${monthInput}-${dateInput}`);

        let years = today.getFullYear() - birthDay.getFullYear();
        let months = today.getMonth() - birthDay.getMonth();
        let days = today.getDate() - birthDay.getDate();

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }

        if (days < 0) {
            const daysInPervMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            months--;
            if(months < 0) {
                months = 11;
                years--;
            }
            days = daysInPervMonth + days;
        }
        setAgeYear(years);
        setAgeMonth(months);
        setAgeDate(days);

    }


    const AgeCalculate = (e) => {
        e.preventDefault();
        FindAge();
    }

    return (
        <form onSubmit={AgeCalculate}>
            <div className="container-fluid input-container">
                <div className="row m-0 p-0">
                    <div className="col col-md input-group">
                        <label className={`input-label ${bDayVal ? 'color-error' : ''}`} htmlFor="birthDay">Day</label>
                        <input
                            id="birthDay"
                            ref={birthDayRef}
                            type="number"
                            className={`input-control ${bDayVal ? 'border-error' : ''}`}
                            placeholder="DD"
                            min='1'
                            max={dateMax}
                            autoFocus
                            required
                            value={dateInput}
                            onChange={(e) => {
                                setDateInput(e.target.value);
                            }}
                        />
                        {bDayVal && <span className='error-message'>{errorMDate}</span>}
                    </div>
                    <div className="col col-md input-group">
                        <label className={`input-label ${bMonthVal ? 'color-error' : ''}`} htmlFor="birthMonth">Month</label>
                        <input
                            id="birthMonth"
                            ref={birthMonthRef}
                            type="number"
                            className={`input-control ${bMonthVal ? 'border-error' : ''}`}
                            placeholder="MM"
                            required
                            min='1'
                            max='12'
                            value={monthInput}
                            onChange={(e) => {
                                setMonthInput(e.target.value);
                            }}
                        />
                        {bMonthVal && <span className='error-message'>{errorMMonth}</span>}
                    </div>
                    <div className="col col-md input-group">
                        <label className={`input-label ${bYearVal ? 'color-error' : ''}`} htmlFor="birthYear">Year</label>
                        <input
                            id="birthYear"
                            ref={birthYearRef}
                            type="number"
                            className={`input-control ${bYearVal ? 'border-error' : ''}`}
                            placeholder="YYYY"
                            max={cYear}
                            required
                            value={yearInput}
                            onChange={(e) => {
                                setYearInput(e.target.value);
                            }}
                        />
                        {bYearVal && <span className='error-message'>{errorMYear}</span>}
                    </div>
                    <div className="col-12 col-md-2">
                        <button
                            className='btn-cal'
                            onClick={checkValidation}
                            type="submit"
                            title='Calculate age'>
                            <img src={btnIcon} alt="Age Cal" />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BirthDayInput;