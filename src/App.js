import Navbar from './component/navbar'
import Textarea from './component/text'
import Footer from './component/footer'
import './App.css';
import { useState } from 'react';
import Alert from './component/Alert';
// import About from './component/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState('Enable Dark Mode')
  const modeChange = () => {
    if (mode === 'dark') {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      setModeText('Enable Dark Mode')
      showAlert("Success", "Dark mode has been enable")

    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(0 33 144 / 92%)'
      document.body.style.color = 'white'
      setModeText('Enable Light Mode')
      showAlert("Success", "Light mode has been enable")
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>

      <Navbar title="Text Analytics" modeChange={modeChange} modeText={modeText} mode={mode} about="About Us" />
      <Alert showAlert={showAlert} alert={alert} />
      <Textarea showAlert={showAlert} alert={alert} mode={mode} />
      <Footer />



    </>


  );
}
