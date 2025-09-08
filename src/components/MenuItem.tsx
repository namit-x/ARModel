import { Button } from "./ui/button";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  onViewAR: () => void;
}

export function MenuItem({ name, description, price, onViewAR }: MenuItemProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 border-b border-dashed border-gold/30 mb-4 pb-2">
      <div className="flex-1">
        <div className="font-bold text-lg cursor-pointer text-white hover:text-gold transition-colors">
          {name}
        </div>
        <div className="italic text-sm text-text-light mt-1">
          {description}
        </div>
      </div>
      <div className="flex items-center sm:items-end sm:flex-col gap-2 sm:ml-4">
        <div className="text-gold font-bold whitespace-nowrap">
          {price}
        </div>
        <Button
          size="sm"
          onClick={onViewAR}
          className="bg-gold text-burgundy hover:bg-gold-dark text-sm whitespace-nowrap"
        >
          View in AR
        </Button>
      </div>
    </div>
  );
}