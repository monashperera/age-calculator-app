import { createContext, useState } from "react";
import AgeOutput from "./components/AgeOutput";
import BirthDayInput from "./components/BirthdayInput";

export const AgeCal = createContext();

function App() {

  const [ageYear, setAgeYear] = useState('');
  const [ageMonth, setAgeMonth] = useState('');
  const [ageDate, setAgeDate] = useState('');

  return (
    <div className="app-container">
      <AgeCal.Provider value={{ageYear, setAgeYear, ageMonth, setAgeMonth, ageDate, setAgeDate}}>
        <BirthDayInput />
        <AgeOutput />
      </AgeCal.Provider>
    </div>
  );
}

export default App;
