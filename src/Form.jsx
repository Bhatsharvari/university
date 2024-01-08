import React , {useState}from 'react'

const Form = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    }
  return (
    <div>

        <fieldset className='form'>
        <h2>Looking For Better Option?</h2>
        <h3>Talk to expert counsellors</h3>
        <form action="get" className='box'>
            <input type="text" name="name" id="" placeholder='Name' />
            <input type="number" name="number" id="" placeholder='Mobile' />
            <input type="email" name="email" id="" placeholder='email' />
            <select id="selectBar" value={selectedValue} onChange={handleSelectChange}>
        <option value="select option">
          Select State
          </option>
        <option value="option1">Maharashtra</option>
        <option value="option2">Karnataka</option>
        <option value="option3"></option>
        </select>
        <select id="selectBar" value={selectedValue} onChange={handleSelectChange}>
        <option value="select option">
          Select city
          </option>
        <option value="option1">Pune</option>
        <option value="option2">Bangalore</option>
        <option value="option3">Miraj</option>
        </select>
        <select id="selectBar" value={selectedValue} onChange={handleSelectChange}>
        <option value="select option">
          Select Stream
          </option>
        <option value="option1">Medical</option>
        <option value="option2">Enginering</option>
        <option value="option3">Law</option>
        </select>
        <select id="selectBar" value={selectedValue} onChange={handleSelectChange} placeholder="select course">
        <option value="select option" >
          Select course
          </option>
        <option value="option1"></option>
        <option value="option2"></option>
        <option value="option3"></option>
        </select>
        <br />
        <select id="selectBar" value={selectedValue} onChange={handleSelectChange} placeholder="select specialization">
        <option value="select option" >
          Select Specialization
          </option>
        <option value="option1"></option>
        <option value="option2"></option>
        <option value="option3"></option>
        </select>
     
        <button type="button">Submit Details</button>

        </form>
        </fieldset>


    </div>
  )
}

export default Form