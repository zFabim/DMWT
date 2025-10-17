import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col items-center bg-white text-gray-800 font-sans">
        <div className="w-full max-w-[1200px]">
        {/* Header */}
        <header className="w-full flex items-center px-10 py-6 border-b border-gray-200">
          <Image
                src="/images/logo.svg"
                alt="Logo"
                width={50}
                height={50}
                unoptimized
          />
          <nav className="flex space-x-6 ml-10">
            <a href="#" className="hover:text-gray-500">Sektion 1</a>
            <a href="#" className="hover:text-gray-500">Sektion 2</a>
            <a href="#" className="hover:text-gray-500">Sektion 3</a>
            <a href="#" className="hover:text-gray-500">Sektion 4</a>
          </nav>
        </header>


        {/* Hero Section */}
        <section className="relative flex flex-col lg:flex-row items-center justify-between px-10 py-20 max-w-6xl w-full overflow-hidden">
          <div className="max-w-xl z-10">
            <p className="uppercase text-sm tracking-wider text-gray-500 mb-2">Investieren mit Strategie</p>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Ist dir dein täglicher Coffee To Go <br />
              <span className="">100.000 € wert?</span>
            </h1>
            <button className="bg-transparent text-black border-2 px-6 py-3 font rounded-md hover:bg-gray-300 transition">Beginne deine Reise</button>
          </div>
          <img src="/images/coffee.png" alt="Coffee" className="absolute right-0 top-0 mt-10 lg:mt-0 lg:w-[1000px] z-0" />
        </section>


        {/* Section 1 */}
        <section className="relative flex flex-col items-center text-center py-24 px-6 bg-white">
          <h2 className="text-3xl italic mb-2">Glaubst du, hast nicht genug Geld,</h2>
          <h3 className="text-4xl font-extrabold mb-6">um sinnvoll zu investieren?</h3>
          <p className="text-gray-500 max-w-md mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
          <button className="bg-black text-white px-5 py-2 rounded-md">Erfahre mehr</button>
          <img src="/images/coins.png" alt="Coins" className="mt-10 w-[300px]" />
        </section>


        {/* Section 2 */}
        <section className="flex flex-col md:flex-row items-center justify-between py-20 px-10 max-w-6xl w-full">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">So wird aus deinem Kaffee Kapital</h2>
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-black text-white px-6 py-2 rounded-md">Erfahre mehr</button>
          </div>
          <img src="/images/coins2.png" alt="Coins stack" className="md:w-1/3 mt-10 md:mt-0" />
        </section>


        {/* Section 3 */}
        <section className="flex flex-col md:flex-row-reverse items-center justify-between py-20 px-10 max-w-6xl w-full">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">3€ täglich für deinen Kaffee</h2>
            <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="bg-black text-white px-6 py-2 rounded-md">Erfahre mehr</button>
          </div>
          <img src="/images/piggy.png" alt="Piggybank" className="md:w-1/3 mt-10 md:mt-0" />
        </section>


        {/* Call to Action */}
        <section className="text-center py-24 bg-gray-50 w-full">
          <h2 className="text-4xl font-extrabold mb-6">Fange schon <span className="text-amber-600">heute an!</span></h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 mb-10">
            <div className="flex flex-col items-center text-center">
              <Image
                  src="/images/sparplan-icon.png"
                  alt="Sparplan Icon"
                  width={60}
                  height={60}
                  className="mb-4"
              />
              <h4 className="font-bold mb-2">Sparplan</h4>
              <p className="text-gray-500">Finde den Sparplan, der zu dir passt.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                  src="/images/start-icon.png"
                  alt="Fang An Icon"
                  width={60}
                  height={60}
                  className="mb-4"
              />
              <h4 className="font-bold mb-2">Fange jetzt an!</h4>
              <p className="text-gray-500">Jeder weitere verschobene Tag kostet dich Rendite.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Image
                  src="/images/consistency-icon.png"
                  alt="Bleib Dran Icon"
                  width={80}
                  height={80}
                  className="mb-4"
              />
              <h4 className="font-bold mb-2">Bleib dran!</h4>
              <p className="text-gray-500">Nutze den Zinseszins-Effekt für dich!</p>
            </div>
          </div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-10 rounded-full transition">
            Anfangen
          </button>
        </section>
        </div>

        {/* Footer */}
        <footer className="bg-black text-gray-300 text-center py-6 w-full text-sm">
          <p>© 2025 Skibidi Gyattington. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline">Rechtliches</a>
            <a href="#" className="hover:underline">Privatsphäre</a>
            <a href="#" className="hover:underline">Barrierefreiheit</a>
          </div>
        </footer>

      </main>
  );
}
