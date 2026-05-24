import { ArrowUpRight, Github, BookOpen, Youtube, Globe } from 'lucide-react';

const socialIcons = [
  { icon: Github, label: 'GitHub' },
  { icon: BookOpen, label: 'Docs' },
  { icon: Youtube, label: 'YouTube' },
  { icon: Globe, label: 'Website' },
];

const sitemapLinks = ['Home', 'Scripts', 'Subscription', 'Bundles'];
const legalLinks = ['Terms of Service', 'Privacy Policy', 'Impressum'];

export function Footer() {
  return (
    <footer className="w-full bg-rm-bg">
      {/* Upper section */}
      <div className="section-container pt-20 pb-12">
        {/* Giant logo */}
        <div className="relative">
          <h2 className="text-white font-extrabold text-5xl md:text-6xl uppercase tracking-[-2.5px] leading-none">
            rainmad scripts
            <span className="text-rm-text-muted font-normal text-xl normal-case tracking-normal align-super ml-1">
              studio
            </span>
          </h2>
        </div>

        <p className="mt-4 text-rm-text-secondary text-[15px] max-w-[480px]">
          Eleva tu experiencia FiveM con scripts innovadores, seguros y creativos.
        </p>

        {/* Actions row */}
        <div className="flex flex-wrap items-center gap-4 mt-10">
          <button className="inline-flex items-center gap-2 px-5 py-3 bg-rm-surface border border-rm-border rounded-full text-white text-sm font-medium hover:border-rm-border-hover transition-colors">
            Do you need help?
            <ArrowUpRight size={16} />
          </button>

          <div className="inline-flex items-center gap-2 px-5 py-3 bg-rm-surface border border-rm-border rounded-full">
            <span className="text-rm-text-secondary text-sm font-medium mr-1">Socials</span>
            {socialIcons.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-rm-surface-el border border-rm-border text-rm-text-secondary hover:text-white hover:border-rm-coral transition-colors"
                aria-label={label}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 px-5 py-3 bg-rm-surface border border-rm-border rounded-full text-white text-sm font-medium hover:border-rm-border-hover transition-colors">
            Theme
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Sitemap + Legal */}
        <div className="flex flex-wrap gap-16 mt-12 lg:mt-0 lg:absolute lg:right-12 lg:top-20">
          <div className="hidden lg:block">
            <h4 className="text-rm-text-muted text-[11px] font-medium uppercase tracking-[0.5px] mb-4">SITEMAP</h4>
            <ul className="space-y-2">
              {sitemapLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-rm-text-secondary text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <h4 className="text-rm-text-muted text-[11px] font-medium uppercase tracking-[0.5px] mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-rm-text-secondary text-sm hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lower section */}
      <div className="border-t border-rm-border">
        <div className="section-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-rm-text-muted text-[11px] uppercase tracking-[0.5px] text-center md:text-left">
            <p>&copy; 2025 RAINMAD Scripts. Todos los derechos reservados.</p>
            <p className="mt-1">RAINMAD no esta afiliado ni respaldado por Rockstar North, Take-Two Interactive u otros titulares de derechos.</p>
          </div>
          <div className="flex gap-4 text-rm-text-muted text-[11px] uppercase tracking-[0.5px]">
            {legalLinks.map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Tebex bar */}
      <div className="bg-rm-surface border-t border-rm-border">
        <div className="section-container py-3 text-center">
          <p className="text-rm-text-muted text-[11px]">
            Este sitio web y su proceso de pago son propiedad y operados por Tebex Limited, quienes manejan el cumplimiento de productos, soporte de facturacion y reembolsos.
          </p>
        </div>
      </div>
    </footer>
  );
}
