import Hero from './components/Hero';
import Layer from './components/Layer';

export default function Home() {
  return (
    <main>
      <div className="container mx-2 px-4" />
      <section className="overflow-hidden perspective-1000">
        <div
          className="
            h-screen
            min-h-[500px]
            transition-transform
            duration-1000
            ease-[cubic-bezier(.05,.5,0,1)]
            will-change-transform
            transform-style-3d
            rotate-x-[--move-y]
            rotate-y-[--move-x]
          "
        >
          <Layer className="bg-[url('../public/img/layer-1.jpg')] translate-z-[-55px] scale-[1.06]" />
          <Layer className="bg-[url('../public/img/layer-2.png')] translate-z-[80px] scale-[.88]" />
          <Layer className="translate-z-[180px] scale-[.8]">
            <Hero />
          </Layer>
          <Layer className="pointer-events-none translate-z-[190px] scale-[.9]">
            <canvas id="rain" />
          </Layer>
          <Layer className="pointer-events-none bg-[url('../public/img/layer-5.png')] translate-z-[300px] scale-[.9]" />
          <Layer className="pointer-events-none bg-[url('../public/img/layer-6.png')] translate-z-[380px]" />
        </div>
      </section>
    </main>
  );
}
