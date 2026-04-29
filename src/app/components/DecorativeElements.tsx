export function DecorativeFlower({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-sage-200 ${className}`} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M50,30 Q60,40 50,50 Q40,40 50,30" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M70,50 Q60,60 50,50 Q60,40 70,50" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M50,70 Q40,60 50,50 Q60,60 50,70" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M30,50 Q40,40 50,50 Q40,60 30,50" stroke="currentColor" strokeWidth="1" fill="none"/>
    </svg>
  );
}

export function DecorativeLeaf({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-sage-200 ${className}`} viewBox="0 0 100 100" fill="none">
      <path d="M50,10 Q70,30 60,50 Q55,70 50,90" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M50,10 Q30,30 40,50 Q45,70 50,90" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M50,30 Q60,35 55,45" stroke="currentColor" strokeWidth="0.8"/>
      <path d="M50,50 Q40,55 45,65" stroke="currentColor" strokeWidth="0.8"/>
    </svg>
  );
}

export function DecorativeWave({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-sage-200 ${className}`} viewBox="0 0 200 100" fill="none">
      <path d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50" stroke="currentColor" strokeWidth="1" fill="none"/>
      <path d="M0,60 Q25,40 50,60 T100,60 T150,60 T200,60" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6"/>
    </svg>
  );
}

export function DecorativeCircles({ className = "" }: { className?: string }) {
  return (
    <svg className={`text-sage-200 ${className}`} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.8" opacity="0.8"/>
      <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.8" opacity="0.6"/>
      <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="0.8" opacity="0.4"/>
    </svg>
  );
}
