interface SoapPlaceholderProps {
  name: string;
  className?: string;
}

const soapColors: Record<string, { bg: string; accent: string }> = {
  'Дитяче': { bg: 'from-blue-100 to-pink-100', accent: 'bg-blue-200' },
  'Алеппське': { bg: 'from-green-700 to-green-900', accent: 'bg-green-600' },
  'Екзотичне': { bg: 'from-orange-400 to-pink-500', accent: 'bg-yellow-300' },
  'Лавандове': { bg: 'from-purple-300 to-purple-500', accent: 'bg-purple-200' },
  'Медове': { bg: 'from-yellow-600 to-amber-700', accent: 'bg-yellow-400' },
  'Полин-шавлія-пижмо': { bg: 'from-green-500 to-green-700', accent: 'bg-green-300' },
  'Сольове': { bg: 'from-cyan-100 to-blue-200', accent: 'bg-white' },
  'Трояндове': { bg: 'from-pink-300 to-rose-500', accent: 'bg-pink-200' },
  'Квіткове': { bg: 'from-pink-200 to-purple-200', accent: 'bg-violet-200' },
  'Полуничне (з подорожником)': { bg: 'from-red-300 to-pink-400', accent: 'bg-red-200' },
  'Набори': { bg: 'from-amber-200 to-orange-300', accent: 'bg-yellow-200' },
};

export function SoapPlaceholder({ name, className = '' }: SoapPlaceholderProps) {
  const colors = soapColors[name] || { bg: 'from-stone-300 to-stone-400', accent: 'bg-stone-200' };

  return (
    <div className={`relative bg-gradient-to-br ${colors.bg} ${className} flex items-center justify-center overflow-hidden`}>
      {/* Soap texture pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className={`absolute top-10 left-10 w-20 h-20 rounded-full ${colors.accent} blur-2xl`}></div>
        <div className={`absolute bottom-10 right-10 w-32 h-32 rounded-full ${colors.accent} blur-3xl`}></div>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full ${colors.accent} blur-3xl`}></div>
      </div>

      {/* Soap bar shape */}
      <div className="relative z-10 text-white/90 text-center p-6">
        <div className="text-2xl drop-shadow-lg">
          {name}
        </div>
      </div>
    </div>
  );
}
