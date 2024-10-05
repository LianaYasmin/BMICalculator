import { useState } from 'react'

import './App.css'

function App() {
  const [age,setAge]=useState('')
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');
  
  const clear=()=>{
    setWeight("")
    setHeight("")
    setBmi("")
    setStatus("")
    setAge("")

  }

  const calculateBMI = () => {
    if (!weight || !height) {
      alert('Please enter both weight and height!');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let bmiStatus = '';
    if (bmiValue < 18.5) {
      bmiStatus = 'Underweight';
      
       
    } else if (bmiValue < 24.9) {
      bmiStatus = 'Normal weight';
     
      
    } else if (bmiValue < 29.9) {
      bmiStatus = 'Overweight';
    } else {
      bmiStatus = 'Obesity';
    }
    setStatus(bmiStatus);
  };


  return (
    <>
      <div className="container" style={{ height: '100vh' }} >
        <h1 className='mt-5 text-center'>Calculate your BMI !</h1>
        <div className="row">
          <div className="col-md-4 mt-5 ">

            <div className='d-flex mt-3'>
              <h4 className='text-success' >Age</h4>
            
              <input type="text" placeholder='Enter your age' className='form-control  w-75  ms-3 ' value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>
            <div className='d-flex mt-4'>
              <h4 className='text-success'>Gender</h4>
              <input type="radio" name='group' className='ms-3' />
              <p className='ms-3'>Male</p>
              <input type="radio" name='group' className='ms-3' />
              <p className='ms-3'>Female</p>

            </div>
            <div className='d-flex mt-4'>
              <h4 className='text-success' >Height</h4>
              <input type="number" placeholder='Enter height in cm' className='form-control ms-3  w-75' value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div className='d-flex mt-4'>
              <h4 className='text-success'>Weight</h4>
              <input type="number" placeholder='Enter weight in kg' className='form-control ms-3  w-75'  value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className='mt-4 '>
              <button className='btn btn-success me-5' onClick={calculateBMI} >Calculate</button>
              <button className='btn btn-secondary ms-5' onClick={clear}>Clear</button>
            </div>
          </div>

          <div className="col-md-4 mt-5">
            <h3 className='text-center text-success'>Your BMI ? {bmi}</h3>
            <h3 className='text-center'>status:{status}</h3>
          
            <img src="https://drademtopaloglu.com/wp-content/uploads/2023/11/drademtopalogluAdsiz-tasarim-34.webp" alt="no img" className='w-100  mt-2 ' />


          </div>
          <div className="col-md-4 mt-5">
            <table className="table">
              <thead>
                <tr>

                  <th scope="col">Classification</th>
                  <th scope="col">BMI range - kg/m2</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Severe Thinness</td>
                  <td>Less than 16</td>

                </tr>
                <tr>
                  <td >Moderate Thinness	</td>
                  <td>16-17</td>

                </tr>
                <tr>
                  <td>Mild Thinness</td>
                  <td >17-18.5</td>

                </tr>
                <tr>
                  <td>Normal</td>
                  <td>18.5-25</td>

                </tr>
                <tr>
                  <td>Overweight</td>
                  <td >25-30</td>

                </tr>
                <tr>
                  <td>Obese Class I</td>
                  <td >30-35</td>

                </tr>
                <tr>
                  <td>Obese Class II</td>
                  <td >35-40</td>

                </tr>
                <tr>
                  <td >Obese Class III</td>
                  <td >More than 40</td>

                </tr>
              </tbody>
            </table>
          </div>





        </div>
      </div>

    </>
  )
}

export default App
