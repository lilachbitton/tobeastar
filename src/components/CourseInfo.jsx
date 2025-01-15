import React from 'react';

const courseDetails = [
  '10 מפגשים פרונטליים, פעם בשבוע במשך חודשיים וחצי',
  'כל מפגש בין השעות 19:00-21:30',
  'תרגילי אימפרוביזציה ומשחק מול קהל',
  'סדנאות מעשיות ליצירת תוכן ויראלי'
];

const CourseInfo = () => {
  return (
    <section className="py-24 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-20 tracking-tight">
          <span className="turquoise-text">מה כולל הקורס?</span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="turquoise-border p-10 rounded-2xl">
            <ul className="space-y-6">
              {courseDetails.map((detail, index) => (
                <li key={index} className="flex items-start space-x-4 text-xl">
                  <span className="text-turquoise text-2xl ml-4">✦</span>
                  <span className="text-gray-100 text-2xl">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-2xl text-center mt-8 font-bold turquoise-text">
            * הקבלה לקורס מותנית באודישן *
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseInfo;