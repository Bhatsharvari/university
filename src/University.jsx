// UniversityList.js
import React from 'react';
import './University.css'

const universities = [
  { name: 'Animation', logo: 'https://cdn.svgator.com/images/2021/08/logo-animation-example-conversable.gif' },
  { name: 'Arts', logo: 'https://w7.pngwing.com/pngs/475/339/png-transparent-european-capital-of-culture-the-arts-visual-arts-culture-miscellaneous-culture-logo.png' },
  { name: 'Education', logo: 'https://media.gettyimages.com/id/1038617836/vector/education-concept-flat-line-icons-banner.jpg?s=612x612&w=gi&k=20&c=rlOpVwd06xUDq_Md-oul6wYMxzUo0ziyZoF6mU-6jCQ=' },
  { name: 'Engineering', logo: 'https://w1.pngwing.com/pngs/143/524/png-transparent-engineering-logo-civil-engineering-construction-construction-management-project-management-building-building-materials-management-consulting.png' },
  { name: 'Law', logo: 'https://image.similarpng.com/very-thumbnail/2021/06/Justice-law-badge-logo-design-template.png' },
  { name: 'Management', logo: 'https://thumbs.dreamstime.com/b/supplier-agreement-line-color-icon-event-management-sign-web-page-mobile-app-button-logo-vector-isolated-element-editable-191711094.jpg' },
  { name: 'Computer Application', logo: 'https://previews.123rf.com/images/putracetol/putracetol1706/putracetol170600648/80594577-app-computer-icon-logo-design-element.jpg' },
  { name: 'Fashion Design', logo: 'https://previews.123rf.com/images/aleksandrax/aleksandrax1805/aleksandrax180500035/102645740-logo-for-atelier-women-s-clothing-store-vector-template-of-the-brand-for-the-fashion-designer.jpg' },
  { name: 'Medical', logo: 'https://static.vecteezy.com/system/resources/thumbnails/013/218/336/small/herbal-capsule-pill-leaf-medicine-logo-icon-illustration-template-capsule-pharmacy-medical-logo-template-free-vector.jpg' },
  { name: 'Science', logo: 'https://i.pinimg.com/736x/82/e7/28/82e7287b91acb66d6f024e07c98845b1.jpg' },
  { name: 'Hotel Management', logo: 'https://cdni.iconscout.com/illustration/premium/thumb/hotel-manager-5070977-4246780.png?f=webp' },
  { name: 'journalism', logo: 'https://e7.pngegg.com/pngimages/184/408/png-clipart-journalism-news-journalist-design-text-logo-thumbnail.png' },
];

const University = () => {
  return (
    <div>
    <u><h6>Explore Education Interest</h6></u>
    <div className="university-list">
      
       <br />
       {/* <button type="button">Colleges</button> */}
    {universities.map((uni, index) => (
      <div key={index} className="university">
        <img src={uni.logo} alt={uni.name} className="university-logo" />
        <p className="university-name">{uni.name}</p>
       {/* <p> <a href={uni.name}className='university-name'>{uni.name}</a></p> */}
      </div>
    ))}
  </div>
  </div>  

  );
};

export default University;
