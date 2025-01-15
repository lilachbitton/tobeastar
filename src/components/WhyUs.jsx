import React from 'react';

const reasons = [
  {
    title: "צוות מקצועי ומנוסה",
    description: "לומדים מהטובים ביותר בתעשייה - שחקנים, במאים ויוצרי תוכן מובילים",
    icon: "🌟"
  },
  {
    title: "התנסות מעשית",
    description: "תרגול מעשי, התנסויות אמיתיות ומשובים מקצועיים לאורך כל הקורס",
    icon: "💪"
  },
  {
    title: "קבוצות קטנות",
    description: "יחס אישי וליווי צמוד לכל תלמיד בקבוצות למידה אינטימיות",
    icon: "👥"
  },
  {
    title: "רשת קשרים מקצועית",
    description: "הזדמנות ליצור קשרים עם אנשי מקצוע מובילים בתעשייה",
    icon: "🤝"
  }
];

const WhyUs = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-20 tracking-tight">
          <span className="turquoise-text">למה ללמוד אצלנו?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8 border border-turquoise/20 rounded-2xl hover:border-turquoise/50 transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="text-3xl ml-3">{reason.icon}</span>
                <h3 className="text-2xl font-bold turquoise-text">
                  {reason.title}
                </h3>
              </div>
              <p className="text-xl text-gray-100 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;