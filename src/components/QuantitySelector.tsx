import { Minus, Plus } from "lucide-react";

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  label = "Quantity",
}: {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  label?: string;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-blush bg-card p-1">
      <button
        type="button"
        aria-label={`Decrease ${label.toLowerCase()}`}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="grid size-9 place-items-center rounded-full text-dusty transition-colors hover:bg-secondary"
      >
        <Minus className="size-4" />
      </button>
      <span aria-live="polite" className="w-8 text-center text-sm font-semibold">
        {value}
      </span>
      <button
        type="button"
        aria-label={`Increase ${label.toLowerCase()}`}
        onClick={() => onChange(value + 1)}
        className="grid size-9 place-items-center rounded-full text-dusty transition-colors hover:bg-secondary"
      >
        <Plus className="size-4" />
      </button>
    </div>
  );
}
