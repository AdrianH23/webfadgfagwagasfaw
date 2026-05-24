import { Flame } from 'lucide-react';

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  tags: string[];
  popular?: boolean;
}

export function ProductCard({ image, title, price, originalPrice, discount, tags, popular }: ProductCardProps) {
  return (
    <div className="group bg-rm-surface border border-rm-border rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-rm-border-hover hover:shadow-card-hover">
      {/* Image */}
      <div className="relative overflow-hidden aspect-[16/10]">
        {popular && (
          <div className="absolute top-0 left-0 z-10 flex items-center gap-1.5 bg-rm-coral text-white text-[11px] font-medium uppercase tracking-[0.5px] px-3 py-1.5 rounded-br-md">
            <Flame size={12} />
            POPULAR
          </div>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 px-4 pt-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 border border-rm-border text-rm-text-secondary text-[11px] font-medium uppercase tracking-[0.5px] rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="px-4 pt-2 pb-4">
        <h3 className="text-white font-semibold text-base leading-tight line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-rm-coral font-bold text-lg">{price}</span>
          <span className="text-rm-text-muted text-sm line-through">{originalPrice}</span>
          <span className="px-2 py-0.5 bg-rm-coral/15 text-rm-coral text-[11px] font-medium rounded-md">
            {discount}
          </span>
        </div>

        {/* Button */}
        <button className="w-full mt-3 py-3 bg-rm-surface-el border border-rm-border text-white text-sm font-semibold uppercase tracking-[0.3px] rounded-lg hover:bg-rm-coral hover:border-rm-coral hover:text-white transition-all duration-200">
          Add to Basket
        </button>
      </div>
    </div>
  );
}
