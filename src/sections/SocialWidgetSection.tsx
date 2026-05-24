import { Github, BookOpen, Youtube, Globe } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const socialLinks = [
  { icon: Github, label: 'GitHub' },
  { icon: BookOpen, label: 'Docs' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Globe, label: 'Website' },
];

const tags = ['Heist', 'Robbery', 'Drugs'];

export function SocialWidgetSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="w-full py-20 bg-rm-bg">
      <div ref={sectionRef} className="section-container flex flex-col items-center">
        <h2 className="text-white font-bold text-3xl md:text-5xl uppercase tracking-[-1.5px] text-center">
          REDES SOCIALES
        </h2>
        <p className="text-rm-text-secondary text-base text-center mt-3">
          Siguenos en nuestras plataformas de redes sociales
        </p>

        {/* Discord Widget Card */}
        <div className="mt-12 w-full max-w-[360px] bg-rm-surface border border-rm-border rounded-2xl shadow-card overflow-hidden">
          {/* Banner */}
          <div className="h-[120px] bg-gradient-to-br from-rm-coral/30 via-rm-bg to-rm-bg relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 font-extrabold text-3xl uppercase tracking-[-1px]">RAINMAD</span>
            </div>
          </div>

          {/* Server Info */}
          <div className="px-5 pb-5 relative">
            {/* Avatar */}
            <div className="-mt-6 mb-3 flex items-end gap-3">
              <div className="w-12 h-12 rounded-full bg-rm-surface border-[3px] border-rm-surface flex items-center justify-center">
                <svg width="28" height="20" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 0C10 0 4 4 4 10C4 14 7 17 11 18C11 18 10 20 8 22C8 22 12 21 14 18C15.3 18.3 16.6 18.5 18 18.5C26 18.5 32 14.5 32 8.5C32 3.5 26 0 18 0Z" fill="#E8552B"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">RAINMAD Scripts</h3>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-rm-online opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rm-online"></span>
                  </span>
                  <span className="text-rm-text-secondary text-[11px]">4,245 En Linea</span>
                </div>
              </div>
            </div>

            {/* Follow Button */}
            <button className="w-full py-2.5 bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-semibold rounded-lg transition-colors duration-200">
              SEGUIR
            </button>

            {/* Social Links */}
            <div className="mt-5">
              <p className="text-rm-text-muted text-[10px] font-medium uppercase tracking-[0.5px] mb-2">SIGUENOS</p>
              <div className="flex gap-2">
                {socialLinks.map(({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-rm-surface-el border border-rm-border text-rm-text-secondary hover:text-white hover:border-rm-coral transition-colors duration-200"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-5">
              <p className="text-rm-text-muted text-[10px] font-medium uppercase tracking-[0.5px] mb-2">ETIQUETAS</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-rm-border text-rm-text-secondary text-[11px] font-medium uppercase tracking-[0.5px] rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
