import { FAQAccordionItem } from '@/components/FAQAccordionItem';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  {
    number: '01',
    question: 'Donde puedo obtener ayuda?',
    answer: 'Si necesitas asistencia con un script, unete a nuestro servidor de Discord y envia un ticket con tu ID de transaccion para soporte rapido.',
  },
  {
    number: '02',
    question: 'Que tan optimizados estan tus scripts?',
    answer: 'El rendimiento es nuestra prioridad. Nuestros scripts estan meticulosamente optimizados para garantizar un impacto minimo en los recursos del servidor (valores de resmon muy bajos entre 0.0-0.02).',
  },
  {
    number: '03',
    question: 'Ofrecen soporte de instalacion?',
    answer: '¡Si! Cada compra de script incluye documentacion completa con guias de instalacion claras paso a paso. Tambien ofrecemos soporte por Discord para cualquier problema.',
  },
  {
    number: '04',
    question: 'Con que frecuencia se actualizan los scripts?',
    answer: 'Nos comprometemos a mantener y mejorar nuestros scripts. Las actualizaciones se lanzan regularmente para introducir nuevas funciones y corregir errores.',
  },
  {
    number: '05',
    question: 'Puedo personalizar los scripts?',
    answer: '¡Definitivamente! Nuestros scripts estan disenados pensando en la flexibilidad. Todos vienen con archivos de configuracion extensos que permiten personalizacion completa.',
  },
  {
    number: '06',
    question: 'Que hace diferentes a tus scripts?',
    answer: 'Nuestros scripts premium ofrecen mecanicas de juego mejoradas, calidad superior, soporte dedicado continuo y actualizaciones regulares que mantienen tu servidor fresco.',
  },
  {
    number: '07',
    question: 'Como puedo obtener descuento?',
    answer: '¡Unete a nuestro Discord! Regularmente ofrecemos codigos de descuento exclusivos y promociones especiales para miembros de la comunidad.',
  },
];

export function FAQSection() {
  const sectionRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="w-full pt-28 pb-20 bg-rm-bg">
      <div ref={sectionRef} className="section-container">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-white font-bold text-3xl md:text-5xl uppercase tracking-[-1.5px] text-center mb-12">
            PREGUNTAS FRECUENTES
          </h2>

          <div className="divide-y divide-rm-border">
            {faqs.map((faq) => (
              <FAQAccordionItem
                key={faq.number}
                number={faq.number}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
