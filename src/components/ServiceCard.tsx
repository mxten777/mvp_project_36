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
        "flex flex-col items-center text-center p-6 m-0 rounded-2xl w-full h-full bg-[#3b4252]",
        className
      )}
    >
      <div className="mb-4 text-[#7dd3fc] p-3 bg-[#232a34] rounded-full flex items-center justify-center w-16 h-16">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-[#f4f4f5]">{title}</h3>
      <p className="text-[#cbd5e1] text-sm md:text-base font-medium max-w-[280px] mx-auto">{description}</p>
      {children && <div className="mt-auto pt-4">{children}</div>}
    </div>
  );
}

export const ServiceIcons = {
  parking: <LucideParkingCircle size={36} strokeWidth={1.5} className="text-[#7dd3fc]" />,
  iot: <LucideCpu size={36} strokeWidth={1.5} className="text-[#7dd3fc]" />,
  cctv: <LucideCamera size={36} strokeWidth={1.5} className="text-[#7dd3fc]" />,
};
