import React from 'react';
import { Carousel } from 'react-bootstrap'
import './ImageSlider.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const ImageSlider = () => {
  return (
    <Carousel className='slider'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.jagranjosh.com/images/2022/December/1122022/Bharathiar-University-Coimbatore-Campus-View-1.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
        <table>
      <tr>
        <td>
          <select name="Demo" id="Demo">
            <option value="Colleges" id='Demo'>Colleges</option>
            <option value="School" id='Demo'>School</option>
       </select>
          <td>
          <input type="text" id='text' placeholder='Search colleges/Schools/university/Exam' />
          </td>
        <tr>
          <td className='scl'>
          <button>school</button>
            <button>colleges</button>
            <button>course</button>
            <br />
            <button>medical colleges</button>
            <br />
            <button>Confused?</button>
          </td>
        </tr>
        </td>
       
      </tr>
    </table>
           
          

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.cuhimachal.ac.in/admin/assets/uploads/slider/new1.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <table>
      <tr>
        <td>
          <select name="Demo" id="Demo">
            <option value="Colleges" id='Demo'>Colleges</option>
            <option value="School" id='Demo'>School</option>
       </select>
          <td>
          <input type="text" id='text' placeholder='Search colleges/Schools/university/Exam' />
          </td>
        <tr>
          <td className='scl'>
          <button>school</button>
            <button>colleges</button>
            <button>course</button>
            <br />
            <button>medical colleges</button>
            <br />
            <button>Confused?</button>
          </td>
        </tr>
        </td>
       
      </tr>
    </table>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <table>
      <tr>
        <td>
          <select name="Demo" id="Demo">
            <option value="Colleges" id='Demo'>Colleges</option>
            <option value="School" id='Demo'>School</option>
       </select>
          <td>
          <input type="text" id='text' placeholder='Search colleges/Schools/university/Exam' />
          </td>
        <tr>
          <td className='scl'>
          <button>school</button>
            <button>colleges</button>
            <button>course</button>
            <br />
            <button>medical colleges</button>
            <br />
            <button>Confused?</button>
          </td>
        </tr>
        </td>
       
      </tr>
    </table>
        </Carousel.Caption>
      </Carousel.Item>

    

    </Carousel>
  );
};

export default ImageSlider;
