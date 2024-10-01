/* eslint-disable react/jsx-no-undef */
import './App.css'
import { Calendar } from './components/Calendar/index';


function App() {
  const now = new Date(2017, 2, 8);

  return (
    <Calendar date={now} />
  );

}

export default App
