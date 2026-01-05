import React from 'react';

interface LocationMapProps {
  className?: string;
}

const LocationMap = ({ className = '' }: LocationMapProps) => {
  const latitude = -23.5505;
  const longitude = -46.6333;

  return (
    <div className={`space-y-6 ${className}`}>
      <div>
        <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
          Localização
        </h2>
        <p className="text-muted-foreground">
          Baseado em São Paulo, atendendo clientes em todo o Brasil e internacionalmente.
        </p>
      </div>

      <div className="relative w-full h-96 rounded-lg overflow-hidden border border-border">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="São Paulo, Brasil - Localização do DataDev"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${latitude},${longitude}&z=14&output=embed`}
          className="absolute inset-0"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-card border border-border">
          <p className="text-sm font-medium text-muted-foreground mb-1">Cidade</p>
          <p className="text-base font-semibold text-foreground">São Paulo</p>
        </div>
        <div className="p-4 rounded-lg bg-card border border-border">
          <p className="text-sm font-medium text-muted-foreground mb-1">Estado</p>
          <p className="text-base font-semibold text-foreground">São Paulo</p>
        </div>
        <div className="p-4 rounded-lg bg-card border border-border">
          <p className="text-sm font-medium text-muted-foreground mb-1">País</p>
          <p className="text-base font-semibold text-foreground">Brasil</p>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;