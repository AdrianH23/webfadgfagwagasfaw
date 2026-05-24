import { ProductCard } from '@/components/ProductCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const products = [
  {
    image: '/assets/product-heist-sub.jpg',
    title: 'Heist Subscription (30 scripts)',
    price: '40.00 EUR',
    originalPrice: '52.00 EUR',
    discount: '-30%',
    tags: ['QBCORE', 'QBOX', 'ESX'],
    popular: true,
  },
  {
    image: '/assets/product-drugs-v.jpg',
    title: 'Drugs V: Grow, Cook & Space!',
    price: '40.00 EUR',
    originalPrice: '52.00 EUR',
    discount: '-30%',
    tags: ['QBCORE', 'QBOX', 'ESX'],
  },
  {
    image: '/assets/product-custom-plates.jpg',
    title: 'Custom Plates with Flipper [+in-game paint editor]',
    price: '29.99 EUR',
    originalPrice: '38.99 EUR',
    discount: '-30%',
    tags: ['QBCORE', 'QBOX', 'ESX'],
  },
  {
    image: '/assets/product-torture-v.jpg',
    title: 'Torture V: Kidnap & Punish!',
    price: '35.00 EUR',
    originalPrice: '45.50 EUR',
    discount: '-30%',
    tags: ['QBCORE', 'QBOX', 'ESX'],
    popular: true,
  },
  {
    image: '/assets/product-decal-v.jpg',
    title: 'Decal V: Graffiti & Vehicle Sticker',
    price: '35.00 EUR',
    originalPrice: '45.50 EUR',
    discount: '-30%',
    tags: ['QBCORE', 'QBOX', 'ESX'],
  },
  {
    image: '/assets/product-tuning-tablet.jpg',
    title: '3D Tuning Tablet: Colorful Nitro Flames & Props, Glowing Brakes, Anti-Lag & more!',
    price: '24.99 EUR',
    originalPrice: '32.49 EUR',
    discount: '-30%',
    tags: ['QBCORE', 'QBOX', 'ESX'],
    popular: true,
  },
  {
    image: '/assets/product-id-card.jpg',
    title: 'ID Card: 3D View & Fake Cards!',
    price: '35.00 EUR',
    originalPrice: '45.50 EUR',
    discount: '-30%',
    tags: ['QBCORE', 'QBOX', 'ESX'],
  },
  {
    image: '/assets/product-vault-heist.jpg',
    title: 'Vault Heist',
    price: '25.00 EUR',
    originalPrice: '32.50 EUR',
    discount: '-30%',
    tags: ['QBCORE', 'QBOX', 'ESX'],
  },
];

export function MostPopularSection() {
  const gridRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.product-card-wrapper',
    stagger: 100,
  });

  return (
    <section id="scripts" className="w-full py-20 bg-rm-bg">
      <div className="section-container">
        <h2 className="text-white font-bold text-3xl md:text-5xl uppercase tracking-[-1.5px] text-center mb-12">
          MAS POPULARES
        </h2>

        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product, i) => (
            <div key={i} className="product-card-wrapper">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
