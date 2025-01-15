import React from 'react';

const features = [
  {
    title: "בניית דמות ייחודית",
    description: "למדו כיצד לבנות ולפתח דמות שתבלוט ברשת ותמשוך אלפי עוקבים",
    icon: "✨"
  },
  {
    title: "אימפרוביזציה ומשחק",
    description: "תרגילי אילתור שיעזרו לכם להרגיש בנוח מול קהל ויעלו את הביטחון העצמי",
    icon: "✨"
  },
  {
    title: "יצירת תוכן ויראלי",
    description: "למדו את הסודות להפקת תכנים שמושכים צפיות ועוקבים",
    icon: "✨"
  },
  {
    title: "בניית קהל נאמן",
    description: "גלו איך למצוא את הקהל שלכם ולבנות קהילה אמיתית סביב התוכן שלכם",
    icon: "✨"
  }
];

const WhatYoullLearn = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-20 tracking-tight">
          <span className="turquoise-text">מה תלמדו בקורס?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="p-8 rounded-2xl bg-black/30 border border-turquoise/20 hover:border-turquoise/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <span className="turquoise-text text-2xl mt-1">{feature.icon}</span>
                  <h3 className="text-2xl font-bold turquoise-text">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-xl text-gray-100 leading-relaxed pr-10">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;