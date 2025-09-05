import { LucideParkingCircle, LucideCpu, LucideCamera } from "lucide-react";
import { cn } from "../lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceCard({ icon, title, description, className, children }: ServiceCardProps) {
  return (
    <div 
      className={cn(
  "flex flex-col items-center text-center p-6 m-0 border-4 border-[#10b981] rounded-2xl outline-none w-full h-full transition-all duration-300 bg-[#10b981] hover:bg-[#059669] shadow-lg shadow-[0_0_0_6px_#10b98188]",
        className
      )}
    >
      <div className="mb-4 text-[#38bdf8] border-0 outline-none p-3 bg-[#1e293b] rounded-full flex items-center justify-center w-16 h-16">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-[#f4f4f5] border-0 outline-none">{title}</h3>
      <p className="text-[#cbd5e1] text-sm md:text-base font-medium border-0 outline-none max-w-[280px] mx-auto">{description}</p>
      {children && <div className="mt-auto pt-4 border-0 outline-none">{children}</div>}
    </div>
  );
}

export const ServiceIcons = {
  parking: <LucideParkingCircle size={36} strokeWidth={1.5} className="text-[#38bdf8]" />,
  iot: <LucideCpu size={36} strokeWidth={1.5} className="text-[#38bdf8]" />,
  cctv: <LucideCamera size={36} strokeWidth={1.5} className="text-[#38bdf8]" />,
};
