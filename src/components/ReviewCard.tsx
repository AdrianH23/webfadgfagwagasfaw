import { Star, ShoppingCart } from 'lucide-react';

interface ReviewCardProps {
  username: string;
  avatarColor: string;
  rating: number;
  quote: string;
  product: string;
}

export function ReviewCard({ username, avatarColor, rating, quote, product }: ReviewCardProps) {
  return (
    <div className="bg-rm-surface border border-rm-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-rm-border-hover hover:shadow-card-hover">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {username.charAt(0).toUpperCase()}
        </div>
        <span className="text-white font-semibold text-sm">{username}</span>
        <div className="flex gap-0.5 ml-auto">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < rating ? 'text-rm-star fill-rm-star' : 'text-rm-text-muted'}
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="relative mt-4">
        <span className="absolute -top-2 -left-1 text-rm-coral/30 text-5xl font-serif leading-none">"</span>
        <p className="text-rm-text-secondary text-[15px] leading-relaxed pl-4">
          {quote}
        </p>
      </div>

      {/* Product */}
      <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 bg-rm-surface-el border border-rm-border rounded-full">
        <ShoppingCart size={12} className="text-rm-text-muted" />
        <span className="text-rm-text-secondary text-[11px] font-medium uppercase tracking-[0.5px]">
          {product}
        </span>
      </div>
    </div>
  );
}
