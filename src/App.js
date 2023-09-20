import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { GreenLightRedLight } from './components/GreenLightRedLight';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [ difficulty, setDifficulty] = useState('easy')


  const handleResister = () => {
     if(!name || !email || !mobile){
      alert("Please fill in all fields");
      return;
     }

     const user = {
      name,
      email,
      mobile,
      difficulty
     };

     alert(`User Registration Data:\nName: ${user.name}\nEmail: ${user.email}\nMobile: ${user.mobile}\nDifficulty: ${user.difficulty}`);

      setName('');
      setEmail('');
      setMobile('');
  }

  return (
    <div className="App">
      <h1>Green Light Red Light Game</h1>

      <div>
        <h3>User Registration</h3>
         <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
         <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
         <input type='tel' placeholder='Mobile Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
         <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value={"easy"}>Easy</option>
          <option value={"medium"}>Medium</option>
          <option value={"hard"}>Hard</option>
         </select>
         <button onClick={handleResister}>Register</button>
      </div>
      <GreenLightRedLight difficulty={difficulty} />
    </div>
  );
}

export default App;
