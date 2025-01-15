import React from 'react';

const instructorsData = [
  {
    name: 'רמי קאשי',
    role: 'שחקן מוביל בטלוויזיה, קולנוע ותיאטרון, בוגר בית הספר למשחק של יורם לוינשטיין. כוכב הסדרות "שנות ה-80", "זיגי", "כפולה" ויוצר הדמות האהובה "פרדי פלברה". השתתף במגוון סרטים והצגות מצליחות',
    image: '/images/instructors/rami-kashi.jpg'
  },
  {
    name: 'לירז עוזרי',
    role: 'שחקנית ויוצרת תוכן מצליחה עם 310 אלף עוקבים בטיקטוק, יוצרת הדמות הוויראלית "פירחית". מובילה בתחום הקומדיה והיצירה הדיגיטלית',
    image: '/images/instructors/liraz-ozeri.jpg'
  },
  {
    name: 'יוני חרל"פ',
    role: 'איש קריאייטיב מהבולטים בארץ, במאי ויוצר תוכן שמלווה טאלנטים וארגונים להצלחה בסושיאל עם סרטונים של מאות מיליוני צפיות. מהמקימים של הערוץ "קווין רובין" והעורך הראשי של הבנים והבנות',
    image: '/images/instructors/yoni-harlap.jpg'
  },
  {
    name: 'הרצל טובי',
    role: 'שחקן בינלאומי בעל ניסיון עשיר על במות תיאטרון בבריטניה, כוכב סרטים וסדרות בהוליווד ובישראל. מוכר בתפקידו המרשים כחלבי בסדרה "שנות ה-80"',
    image: '/images/instructors/hertzel-tobey.jpg'
  },
  {
    name: 'אמיל בן שמעון',
    role: 'במאי קולנוע וטלוויזיה מוערך, יוצר סרט הקולנוע "ישמח חתני", הסדרה המצליחה "זיגי" וסדרת הריאליטי "גולסטאר". זוכה פרסים ומהבמאים המובילים בתעשייה',
    image: '/images/instructors/emil-ben-shimon.jpg'
  },
  {
    name: 'מיכל בוזגלו',
    role: 'יוצרת תוכן וכוכבת רשת עם למעלה מ-100 אלף עוקבים, מורה למשחק מנוסה המתמחה בפיתוח דמויות ויצירת תוכן ויראלי. מלמדת טכניקות להשגת מיליוני צפיות',
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