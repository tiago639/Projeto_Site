interface TechnologyCardProps {
  name: string;
  icon: string;
  description: string;
  category: string;
}

export default function TechnologyCard({ name, icon, description, category }: TechnologyCardProps) {
  return (
    <div className="group bg-card rounded-lg border border-border p-6 hover:border-primary/50 hover:shadow-elevation-md transition-all duration-base hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="text-5xl group-hover:scale-110 transition-transform duration-base">
          {icon}
        </div>
        <h4 className="font-headline font-semibold text-foreground">{name}</h4>
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
          {category}
        </span>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}