import { Button } from "@/ui/button";
import { Gift } from "lucide-react";

interface GiftCouponCardProps {
  title: string;
  code: string;
  description: string;
  expiryDays: number;
}

export default function GiftCouponCard({
  title,
  code,
  description,
  expiryDays,
}: GiftCouponCardProps) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 hover:border-amber-500 transition-colors group">
      <div className="bg-gradient-to-r from-amber-500/20 to-yellow-300/20 p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-amber-500" />
          <h3 className="font-bold text-white">{title}</h3>
        </div>
        <div className="text-xs text-zinc-400">
          Expires in {expiryDays} days
        </div>
      </div>
      <div className="p-4">
        <div className="bg-zinc-900 p-2 rounded flex justify-between items-center mb-4">
          <code className="text-amber-500 font-mono">{code}</code>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs text-zinc-400 hover:text-white"
          >
            Copy
          </Button>
        </div>
        <p className="text-zinc-300 text-sm mb-4">{description}</p>
        <Button
          variant="outline"
          size="sm"
          className="w-full border-amber-500 text-amber-500 hover:bg-amber-500/10 group-hover:bg-amber-500 group-hover:text-black transition-colors"
        >
          Claim Now
        </Button>
      </div>
    </div>
  );
}
