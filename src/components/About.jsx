import React from 'react';

const About = () => {
  return (
    <section className="py-24 relative bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12 tracking-tight">
          <span className="turquoise-text">הכירו את רמי קאשי</span>
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="turquoise-border p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/images/instructors/rami-kashi-about.jpg" 
                  alt="רמי קאשי" 
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-xl leading-relaxed text-gray-100 mb-6">
                  "מאז שאני זוכר את עצמי הייתי המצחיק של הכיתה. עוד כשהייתי בן 16 ידעתי שהייעוד שלי היה להיות שחקן, אבל לא היה לי מי שיכוון אותי, שיראה אותי. אני זוכר את האודישן הראשון שלי בבית הספר למשחק ביורם לוינשטיין - הלחץ, ההתרגשות, הפחד. לא היו לי את הכלים, אבל היה לי את הרצון העז."
                </p>
                <p className="text-2xl font-bold text-center turquoise-text mt-8">
                  "אל תחכו לאף אחד שיאמין בכם. קומו תעשו שינוי ותאמינו בעצמכם!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;