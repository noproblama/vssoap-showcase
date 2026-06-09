import { createContext, useContext, useState, type ReactNode } from 'react';

export type Lang = 'uk' | 'en';

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: 'uk',
  setLang: () => {},
});

export function LangProvider({ children, initial }: { children: ReactNode; initial: Lang }) {
  const [lang, setLang] = useState<Lang>(initial);

  const handleSetLang = (l: Lang) => {
    setLang(l);
    const url = new URL(window.location.href);
    if (l === 'uk') {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', l);
    }
    window.history.pushState({}, '', url.toString());
  };

  return (
    <LangContext.Provider value={{ lang, setLang: handleSetLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);

export function useT() {
  const { lang } = useLang();
  return lang;
}
