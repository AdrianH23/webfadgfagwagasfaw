export function AnnouncementBar() {
  const text = '🔥 DESCUENTO ACTIVO — NO TE LO PIERDAS (Código: MAD30)  |  💥 30% EXTRA EN TODOS LOS SCRIPTS';
  const separator = '    ◆◆◆◆    ';
  const fullText = `${text}${separator}`;
  const repeated = Array(4).fill(fullText).join('');

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-rm-coral overflow-hidden flex items-center">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        <span className="text-white font-inter font-semibold text-[13px] uppercase tracking-[0.5px]">
          {repeated}
        </span>
        <span className="text-white font-inter font-semibold text-[13px] uppercase tracking-[0.5px]">
          {repeated}
        </span>
      </div>
    </div>
  );
}
