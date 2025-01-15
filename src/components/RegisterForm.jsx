import React, { useState } from 'react';

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get('fullName'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      age: formData.get('age'),
      area: formData.get('area'),
      source: window.location.href,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://hook.eu2.make.com/17gygbgel56tnhnuqo44derybyhr3mfr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000); // נקה את ההודעה אחרי 5 שניות
    }
  };

  return (
    <section id="register" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6 tracking-tight">
          <span className="turquoise-text">מעוניינים להפוך לכוכבי רשת?</span>
        </h2>
        <p className="text-center text-xl mb-6 text-gray-300">
          השאירו פרטים ונחזור אליכם בהקדם לתיאום אודישן
        </p>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="turquoise-border p-10 rounded-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-lg">שם מלא</label>
                <input 
                  type="text" 
                  name="fullName"
                  className="w-full p-4 rounded-xl form-input text-lg" 
                  required 
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">טלפון</label>
                <input 
                  type="tel" 
                  name="phone"
                  className="w-full p-4 rounded-xl form-input text-lg" 
                  required 
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">מייל</label>
                <input 
                  type="email" 
                  name="email"
                  className="w-full p-4 rounded-xl form-input text-lg" 
                  required 
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">גיל</label>
                <input 
                  type="number" 
                  name="age"
                  className="w-full p-4 rounded-xl form-input text-lg" 
                  required 
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-lg">אזור מגורים</label>
              <select 
                name="area"
                className="w-full p-4 rounded-xl form-input text-lg bg-transparent" 
                required
              >
                <option value="" disabled selected>בחר אזור</option>
                <option value="תל אביב והמרכז">תל אביב והמרכז</option>
                <option value="ירושלים והסביבה">ירושלים והסביבה</option>
                <option value="חיפה והצפון">חיפה והצפון</option>
                <option value="באר שבע והדרום">באר שבע והדרום</option>
                <option value="השרון">השרון</option>
                <option value="השפלה">השפלה</option>
              </select>
            </div>
            
            <button 
              type="submit" 
              className="mx-auto block glowing-btn py-5 px-16 rounded-xl text-2xl hover:transform hover:scale-105 transition duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'שולח...' : 'קבע אודישן עכשיו'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-center text-green-400 font-bold mt-4">
                הטופס נשלח בהצלחה! ניצור איתך קשר בהקדם
              </p>
            )}
            
            {submitStatus === 'error' && (
              <p className="text-center text-red-400 font-bold mt-4">
                אירעה שגיאה בשליחת הטופס, אנא נסו שוב מאוחר יותר
              </p>
            )}

            <p className="text-center text-xl turquoise-text font-bold mt-4">
              * הקבלה לקורס מותנית באודישן *
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;