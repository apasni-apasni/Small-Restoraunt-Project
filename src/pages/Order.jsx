import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Order() {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ot9takj",
        "template_b21pjmt",
        formRef.current,
        "atflFMvAXuRFrJ9Kl"
      )
      .then(() => {
        alert("✅ შეკვეთა წარმატებით გაიგზავნა!");
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
        alert("❌ შეცდომა");
      });
  };


  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/order.jpg')",
      }}
    >

      <div className="min-h-screen bg-black/50 flex items-center justify-center p-6">

        <div className="w-full max-w-lg bg-white/85 backdrop-blur-lg rounded-3xl shadow-2xl p-10">

          <h1 className="text-4xl font-bold text-center text-red-700 mb-8">
            🍽️ შეკვეთა
          </h1>


          <form 
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="👤 თქვენი სახელი"
              className="w-full p-4 rounded-xl border border-gray-300"
              required
            />


            <input
              type="tel"
              name="phone"
              placeholder="📞 ტელეფონის ნომერი"
              className="w-full p-4 rounded-xl border border-gray-300"
              required
            />


            <select
              name="food"
              className="w-full p-4 rounded-xl border border-gray-300"
            >
              <option>🍽️ აირჩიეთ კერძი</option>
              <option>აჭარული ხაჭაპური</option>
              <option>ხინკალი</option>
              <option>ქაბაბი</option>
              <option>მწვადი</option>
              <option>იმერული ხაჭაპური</option>
              <option>ლობიანი</option>
              <option>ჩაქაფული</option>
              <option>საცივი</option>
            </select>


            <input
              type="number"
              name="quantity"
              min="1"
              placeholder="🔢 რაოდენობა"
              className="w-full p-4 rounded-xl border border-gray-300"
            />


            <textarea
              name="address"
              rows="4"
              placeholder="📍 მიუთითეთ მისამართი"
              className="w-full p-4 rounded-xl border border-gray-300 resize-none"
            />


            <button
              type="submit"
              className="
                w-full
                bg-red-600
                text-white
                py-4
                rounded-xl
                font-bold
                text-lg
                hover:bg-red-700
                hover:scale-105
                transition-all
              "
            >
              ✅ შეკვეთის დადასტურება
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}