interface PaymentRowProps {
  username: string;
  product: string;
  price: string;
  color: string;
}

export function PaymentRow({ username, product, price, color }: PaymentRowProps) {
  const initials = username.slice(0, 2).toUpperCase();

  return (
    <div className="flex items-center gap-3 py-3 border-b border-rm-border last:border-b-0">
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
        style={{ backgroundColor: color }}
      >
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-semibold truncate">{username}</p>
        <p className="text-rm-text-muted text-[11px] uppercase tracking-[0.5px] truncate">{product}</p>
      </div>
      <span className="text-rm-coral font-bold text-sm flex-shrink-0">{price}</span>
    </div>
  );
}
