import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Scripts', href: '#scripts', hasDropdown: true },
  { label: 'Subscription', href: '#subscription' },
  { label: 'Bundles', href: '#bundles' },
  { label: 'Item Icons', href: '#icons' },
  { label: 'Documentation', href: '#docs' },
  { label: 'Team', href: '#team' },
];

const scriptCategories = ['Heists', 'Drugs', 'Vehicles', 'UI & Tools', 'Jobs', 'Misc'];

export function Navbar() {
  const scrolled = useNavbarScroll(100);
  const [scriptsOpen, setScriptsOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 z-40 h-[72px] border-b border-rm-border transition-all duration-300 ${
          scrolled
            ? 'top-10 bg-[rgba(12,12,14,0.95)] backdrop-blur-lg'
            : 'top-10 bg-rm-bg/80 backdrop-blur-md'
        }`}
      >
        <div className="section-container h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 transition-transform duration-200 hover:scale-105">
            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0C10 0 4 4 4 10C4 14 7 17 11 18C11 18 10 20 8 22C8 22 12 21 14 18C15.3 18.3 16.6 18.5 18 18.5C26 18.5 32 14.5 32 8.5C32 3.5 26 0 18 0Z" fill="#E8552B"/>
              <ellipse cx="12" cy="9" rx="3" ry="4" fill="#0C0C0E"/>
              <ellipse cx="24" cy="9" rx="3" ry="4" fill="#0C0C0E"/>
            </svg>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                {link.hasDropdown ? (
                  <button
                    onClick={() => setScriptsOpen(!scriptsOpen)}
                    className="flex items-center gap-1 text-sm font-medium tracking-[0.3px] text-rm-text-secondary hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${scriptsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className={`text-sm font-medium tracking-[0.3px] transition-colors duration-150 relative ${
                      link.active
                        ? 'text-white after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-rm-coral'
                        : 'text-rm-text-secondary hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                )}

                {/* Scripts Dropdown */}
                {link.hasDropdown && scriptsOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setScriptsOpen(false)} />
                    <div className="absolute top-full left-0 mt-2 w-48 bg-rm-surface border border-rm-border rounded-lg shadow-card py-2 z-40">
                      {scriptCategories.map((cat) => (
                        <a
                          key={cat}
                          href="#"
                          className="block px-5 py-2.5 text-sm text-white hover:bg-rm-surface-el transition-colors"
                          onClick={() => setScriptsOpen(false)}
                        >
                          {cat}
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Currency Selector */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1.5 px-4 py-2 border border-rm-border rounded-full text-sm text-white hover:border-rm-border-hover transition-colors"
              >
                EUR
                <ChevronDown size={12} />
              </button>
              {currencyOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setCurrencyOpen(false)} />
                  <div className="absolute top-full right-0 mt-2 w-24 bg-rm-surface border border-rm-border rounded-lg shadow-card py-1 z-40">
                    {['EUR', 'USD', 'GBP'].map((c) => (
                      <button
                        key={c}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-rm-surface-el transition-colors"
                        onClick={() => setCurrencyOpen(false)}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Login Button */}
            <a
              href="#"
              className="hidden sm:inline-flex px-6 py-2.5 bg-white text-rm-bg text-sm font-semibold uppercase tracking-[0.3px] rounded-full hover:scale-[1.02] hover:shadow-[0_4px_16px_rgba(255,255,255,0.15)] transition-all duration-200"
            >
              Login
            </a>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-[60] lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-[80%] max-w-[360px] bg-rm-surface z-[70] lg:hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-rm-border">
              <span className="text-lg font-semibold text-white">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="text-white p-2">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-6 py-4 text-lg font-semibold text-white hover:text-rm-coral transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="p-6 border-t border-rm-border">
              <a
                href="#"
                className="block w-full text-center px-6 py-3 bg-white text-rm-bg text-sm font-semibold uppercase rounded-full"
              >
                Login
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
