import React from 'react';

const instructorsData = [
  {
    name: 'רמי קאשי',
    role: 'שחקן טלוויזיה וקולנוע, יוצר הדמות המצליחה "פרדי פלברה"',
    image: '/images/instructors/rami-kashi.jpg'
  },
  {
    name: 'לירז עוזרי',
    role: 'שחקנית ויוצרת תוכן עם 310 אלף עוקבים בטיקטוק',
    image: '/images/instructors/liraz-ozeri.jpg'
  },
  {
    name: 'יוני חרל"פ',
    role: 'שחקן ובמאי טלוויזיה, יוצר תוכן מוביל שכתב וביים עבור קווין רובין',
    image: '/images/instructors/yoni-harlap.jpg'
  },
  {
    name: 'הרצל טובי',
    role: 'שחקן מוערך, כוכב הסדרה "שנות ה-80"',
    image: '/images/instructors/hertzel-tobey.jpg'
  },
  {
    name: 'אמיל בן שמעון',
    role: 'במאי קולנוע וטלוויזיה, יוצר הסדרה "זיגי" והסרט "ישמח חתני"',
    image: '/images/instructors/emil-ben-shimon.jpg'
  },
  {
    name: 'מיכל בוזגלו',
    role: 'טיקטוקרית ושחקנית עם מעל 100 אלף עוקבים',
    image: '/images/instructors/michal-buzaglo.jpg'
  }
];

const InstructorCard = ({ name, role, image }) => (
  <div className="group h-full">
    <div className="turquoise-border p-8 custom-shape h-full transform transition-all duration-500 group-hover:translate-y-[-10px]">
      <div className="mb-6 aspect-w-4 aspect-h-5 overflow-hidden instructor-image">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover object-center transform transition-all duration-500 group-hover:scale-110" 
        />
      </div>
      <h3 className="text-3xl font-bold mb-3 turquoise-text">{name}</h3>
      <p className="text-xl text-gray-300 leading-relaxed">{role}</p>
    </div>
  </div>
);

const Instructors = () => {
  const firstRow = instructorsData.slice(0, 3);
  const secondRow = instructorsData.slice(3);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-20 tracking-tight">
          <span className="turquoise-text">צוות המרצים המוביל בישראל</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {firstRow.map((instructor) => (
            <InstructorCard key={instructor.name} {...instructor} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-full mx-auto">
          {secondRow.map((instructor) => (
            <InstructorCard key={instructor.name} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;