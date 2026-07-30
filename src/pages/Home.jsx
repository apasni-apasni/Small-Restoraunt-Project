import foods from "../data/foods.json";

export default function Home() {
  return (
    <div
      className="p-10 min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >

      {/* მთავარი კონტეინერი */}
      <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-10">


        <h1 className="text-5xl font-bold text-center mb-10 text-red-400 drop-shadow-lg">
          ქართული კერძები 
        </h1>


        {/* კერძების ქარდები */}
        <div className="grid md:grid-cols-3 gap-8">

          {foods.map((food) => (
            <div
              key={food.id}
              className="
                bg-white/70 
                backdrop-blur-md
                border 
                border-white/40
                rounded-xl 
                shadow-xl 
                overflow-hidden 
                hover:scale-105 
                transition 
                duration-300
              "
            >

              <img
                src={food.image}
                alt={food.name}
                className="w-full h-64 object-cover"
              />


              <div className="p-5">

                <h2 className="text-2xl font-bold text-red-700">
                  {food.name}
                </h2>


                <p className="text-gray-700 mt-3 leading-relaxed">
                  {food.description}
                </p>


                <div className="mt-5 flex justify-between items-center">

                  <span className="text-yellow-500 font-bold text-lg">
                    ⭐ {food.rating}
                  </span>


                  <span className="text-gray-600">
                    ({food.reviews} შეფასება)
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>



        {/* რესტორნის შესახებ */}
        <section className="
          mt-20
          bg-white/70
          backdrop-blur-md
          rounded-2xl
          p-10
          shadow-xl
          border
          border-white/40
        ">

          <h2 className="text-4xl font-bold text-center text-red-700 mb-6">
            ჩვენი რესტორნის შესახებ 
          </h2>


          <p className="text-gray-700 text-lg leading-relaxed text-center">
            კეთილი იყოს თქვენი მობრძანება ჩვენს ქართულ რესტორანში.
            ჩვენ გთავაზობთ ტრადიციულ ქართულ კერძებს, რომლებიც მზადდება
            სიყვარულით, ხარისხიანი პროდუქტებით და ძველი ქართული
            რეცეპტების მიხედვით.
          </p>


          <p className="text-gray-700 text-lg leading-relaxed text-center mt-5">
            ჩვენს მენიუში შეხვდებით აჭარულ ხაჭაპურს, ხინკალს,
            მწვადს, ქაბაბს და სხვა მრავალ ქართულ კერძს.
            ჩვენი მიზანია თითოეულ სტუმარს შევუქმნათ თბილი გარემო,
            დაუვიწყარი გემო და ქართული სტუმართმოყვარეობის განცდა.
          </p>


          <div className="mt-8 flex flex-wrap justify-center gap-6 text-red-700 font-semibold">

            <span>📍 ბათუმი, საქართველო</span>

            <span>🕒 ყოველდღე 10:00 - 23:00</span>

            <span>⭐ ხარისხი და ტრადიცია</span>

          </div>


        </section>


      </div>

    </div>
  );
}