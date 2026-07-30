export default function Contact() {
  return (
    <div
      className="
        min-h-screen
        flex
        justify-center
        items-center
        p-10
        bg-gradient-to-r
        from-red-600
        via-white
        to-red-600
        bg-[length:200%_200%]
        animate-gradient
      "
    >

      <div
        className="
          bg-white/80
          backdrop-blur-xl
          border
          border-white/40
          rounded-3xl
          shadow-2xl
          p-10
          w-full
          max-w-md
          text-center
          hover:scale-105
          transition
          duration-500
        "
      >

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <div
            className="
              w-24
              h-24
              rounded-full
              bg-red-600
              flex
              items-center
              justify-center
              text-5xl
              shadow-lg
              animate-bounce
            "
          >
            🍽️
          </div>
        </div>


        <h1 className="
          text-4xl
          font-bold
          text-red-700
          mb-8
        ">
          📞 კონტაქტი
        </h1>



        <div className="space-y-6 text-lg">


          <div className="hover:scale-105 transition">
            <h2 className="font-bold text-red-700">
              🏪 რესტორნის სახელი
            </h2>

            <p className="text-gray-700">
              Sweet Food 
            </p>
          </div>



          <div className="hover:scale-105 transition">
            <h2 className="font-bold text-red-700">
              📍 მისამართი
            </h2>

            <p className="text-gray-700">
              Kote Abkhazis N36
            </p>
          </div>



          <div className="hover:scale-105 transition">
            <h2 className="font-bold text-red-700">
              📱 საკონტაქტო ნომერი
            </h2>

            <a
              href="tel:+995558128030"
              className="
                text-red-600
                font-semibold
                hover:text-red-800
              "
            >
              +995 558 128 030
            </a>
          </div>



          <div className="hover:scale-105 transition">

            <h2 className="font-bold text-red-700">
              🕒 სამუშაო საათები
            </h2>

            <p className="text-gray-700">
              ყოველდღე 10:00 - 23:00
            </p>

          </div>


        </div>


        <button
          className="
            mt-8
            bg-red-600
            text-white
            px-8
            py-3
            rounded-full
            font-bold
            hover:bg-red-700
            hover:shadow-lg
            transition
          "
        >
          დაგვიკავშირდით
        </button>


      </div>

    </div>
  );
}