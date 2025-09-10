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
        "flex flex-col items-center text-center p-6 m-0 rounded-2xl w-full h-full card-effect focus-ring",
        className
      )}
      style={{ background: "var(--color-bg-card)" }}
      tabIndex={0}
      role="region"
      aria-label={title}
    >
      <div
        className="mb-4 p-3 rounded-full flex items-center justify-center w-16 h-16"
        style={{ color: "var(--color-point)", background: "var(--color-bg-section)" }}
      >
        {icon}
      </div>
      <h3 className="mb-2" style={{ color: "var(--color-text-main)", fontWeight: 600 }}>
        {title}
      </h3>
      <p
        className="max-w-[280px] mx-auto"
        style={{ color: "var(--color-text-sub)", fontSize: "var(--font-body-size)", fontWeight: 400 }}
      >
        {description}
      </p>
      {children && <div className="mt-auto pt-4">{children}</div>}
    </div>
  );
}

export const ServiceIcons = {
  parking: <LucideParkingCircle size={36} strokeWidth={1.5} className="text-[#7dd3fc]" />,
  iot: <LucideCpu size={36} strokeWidth={1.5} className="text-[#7dd3fc]" />,
  cctv: <LucideCamera size={36} strokeWidth={1.5} className="text-[#7dd3fc]" />,
};
