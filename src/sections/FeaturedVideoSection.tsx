import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function FeaturedVideoSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="w-full py-20 bg-rm-bg">
      <div ref={sectionRef} className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Embed */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-rm-border">
            <iframe
              src="https://www.youtube.com/embed/izCJmGcBLNg"
              title="Ropes V: G-Rappel/Lasso/Zipline | FiveM Script"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-white font-bold text-4xl md:text-5xl uppercase tracking-[-1.5px]">
              ROPES V
            </h2>
            <p className="mt-4 text-rm-text-secondary text-base max-w-[400px]">
              Eleva tu servidor FiveM con las mecanicas de cuerdas definitivas.
            </p>
            <a
              href="https://youtu.be/izCJmGcBLNg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-rm-bg text-sm font-semibold uppercase tracking-[0.3px] rounded-full hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(255,255,255,0.15)] transition-all duration-200 mt-8 w-fit"
            >
              VER VIDEO
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
