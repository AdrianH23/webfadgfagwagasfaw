import { PaymentRow } from '@/components/PaymentRow';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const payments = [
  { username: 'Solaris_Roleplay99', product: 'Torture V: Kidnap & Punish!', price: '24.50 EUR', color: '#3B82F6' },
  { username: 'syoha70', product: 'Heist Subscription (30 scripts)', price: '40.00 EUR', color: '#8B5CF6' },
  { username: 'Joey_Big', product: 'Heist Subscription (30 scripts)', price: '48.61 EUR', color: '#10B981' },
  { username: 'moxyshubaban', product: 'Realistic Airdrop', price: '21.88 EUR', color: '#F59E0B' },
  { username: 'TheBranch_TVV', product: 'Torture V: Kidnap & Punish!', price: '35.00 EUR', color: '#EF4444' },
  { username: 'Stellar72', product: 'Torture V: Kidnap & Punish!', price: '35.00 EUR', color: '#EC4899' },
  { username: 'Sebby2000', product: 'ATM Robbery - 4 in 1!', price: '25.00 EUR', color: '#06B6D4' },
  { username: 'Hakim_tm', product: 'Torture V: Kidnap & Punish!', price: '29.65 EUR', color: '#6366F1' },
  { username: 'PartizaNRP', product: 'ID Card: 3D View & Fake Cards!', price: '24.50 EUR', color: '#14B8A6' },
  { username: 'Product716', product: 'Torture V: Kidnap & Punish!', price: '24.50 EUR', color: '#F97316' },
];

export function RecentPaymentsSection() {
  const listRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.payment-row-wrapper',
    stagger: 80,
  });

  return (
    <section className="w-full py-20 bg-rm-bg">
      <div className="section-container">
        <div className="max-w-[600px] mx-auto">
          {/* Title with live indicator */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="relative flex h-3 w-3">
              <span className="animate-pulse-live absolute inline-flex h-full w-full rounded-full bg-rm-online opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rm-online"></span>
            </span>
            <h2 className="text-white font-bold text-3xl md:text-5xl uppercase tracking-[-1.5px]">
              PAGOS RECIENTES
            </h2>
          </div>

          {/* Payment List */}
          <div ref={listRef}>
            {payments.map((payment, i) => (
              <div key={i} className="payment-row-wrapper">
                <PaymentRow {...payment} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
