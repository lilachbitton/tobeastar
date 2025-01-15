import React from 'react';

// בתחילת הקובץ
const Hero = () => {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      {/* שאר התוכן נשאר אותו דבר */}
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight hero-text">
            <span className="turquoise-text block">להיות כוכב רשת</span>
          </h1>
          <p className="text-3xl md:text-4xl mb-8 tracking-wide text-center">
            קורס משחק ויצירת תוכן מבית 
            <span className="turquoise-text font-bold">רמי קאשי</span>
          </p>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl mb-12 leading-relaxed text-gray-300">
              הדרך שלך להפוך ליוצר תוכן מצליח, לפתח דמות ייחודית
              <br/>
              ולצבור <span className="turquoise-text font-bold">עשרות אלפי עוקבים</span>
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 max-w-xl mx-auto">
            <a 
              href="#register" 
              className="glowing-btn py-4 px-16 rounded-xl text-2xl text-center">
              קבע אודישן עכשיו
            </a>
            <p className="turquoise-text text-xl">
              ⭐ הטבה מיוחדת לנרשמים עד סוף החודש! ⭐
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;