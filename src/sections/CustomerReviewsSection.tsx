import { ReviewCard } from '@/components/ReviewCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const reviews = [
  {
    username: 'Rudel89',
    avatarColor: '#8B5CF6',
    rating: 5,
    quote: 'Muy bellos y cinematograficos los atracos. Llenos de emocion y variedad. La atencion al detalle se nota claramente en los scripts. Los atracos de Rainmad son una adicion significativa a mi servidor.',
    product: 'Heist Subscription',
  },
  {
    username: 'Hipyxsol11P',
    avatarColor: '#3B82F6',
    rating: 5,
    quote: 'Empezare con esto, probablemente el mejor creador de atracos en FiveM. El soporte es increible tambien, es basicamente asi: "Enviame el archivo" y te devuelven una version corregida. Un gran aplauso para Rainmad y Frostmad.',
    product: 'Mountain Vault Heist, Cargo Ship Heist',
  },
  {
    username: 'Giostro1988',
    avatarColor: '#10B981',
    rating: 5,
    quote: 'El script Drugs V: Grow, Cook & Space esta increiblemente bien hecho, optimizado y anade una gran experiencia inmersiva a cualquier servidor FiveM. Las mecanicas son fluidas y la calidad es de primer nivel. Muy recomendado!',
    product: 'Drugs V: Grow, Cook & Space!',
  },
  {
    username: 'Elias._0',
    avatarColor: '#F59E0B',
    rating: 5,
    quote: 'Los scripts de Yacht, Fleeca y Shop Robbery de Rainmad son imprescindibles para cualquier servidor FiveM. La atencion al detalle, las mecanicas inmersivas y la integracion impecable hacen destacar estos scripts.',
    product: 'Yacht Heist, Fleeca Heist',
  },
  {
    username: 'Xfideep',
    avatarColor: '#EC4899',
    rating: 5,
    quote: 'El creador de atracos mas grande de FiveM @rainmad con el mejor soporte y tambien el mejor equipo. Camper V: Drug Caravans es un script alucinante.',
    product: 'Camper V: Drug Caravans',
  },
  {
    username: 'Mir_mikeeee',
    avatarColor: '#06B6D4',
    rating: 5,
    quote: 'Hay muchas opciones de atracos y recibi atencion inmediata a traves del ticket, lo cual fue genial.',
    product: 'ATM Robbery - 4 in 1!',
  },
  {
    username: 'Scootermiesmichelvermeulen',
    avatarColor: '#6366F1',
    rating: 5,
    quote: 'Gran soporte. Sin quejas aqui. Muy servicial.',
    product: 'Mad RC Cars',
  },
  {
    username: 'Darkboyur',
    avatarColor: '#14B8A6',
    rating: 5,
    quote: 'No esperes al GTA 6, solo compra los scripts de rainmad y lleva tu servidor a otro nivel',
    product: 'Mad Mini Bikes',
  },
];

export function CustomerReviewsSection() {
  const gridRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.review-card-wrapper',
    stagger: 100,
  });

  return (
    <section className="w-full py-20 bg-rm-bg">
      <div className="section-container">
        {/* Title */}
        <h2 className="text-white font-bold text-3xl md:text-5xl uppercase tracking-[-1.5px] text-center">
          OPINIONES DE CLIENTES
        </h2>

        {/* Badge */}
        <div className="flex justify-center mt-4">
          <span className="inline-flex items-center px-4 py-1.5 bg-white/[0.06] border border-white/[0.1] rounded-full text-rm-text-secondary text-[11px] font-medium uppercase tracking-[0.5px]">
            Basado en 10,000+ reviews
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-rm-text-secondary text-base text-center mt-3">
          Opiniones reales de nuestra comunidad despues de instalar y usar nuestros recursos.
        </p>

        {/* Reviews Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {reviews.map((review, i) => (
            <div key={i} className="review-card-wrapper">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
