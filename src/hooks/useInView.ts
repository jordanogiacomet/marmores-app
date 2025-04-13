import { useEffect, useState, RefObject } from 'react';

/**
 * useInView
 * Detecta quando o elemento referenciado entra na viewport.
 * Dispara a animação uma única vez, desconectando o observer quando visível.
 *
 * @param ref - Referência para o elemento a ser observado (aceita T | null).
 * @param threshold - Valor de interseção (padrão 0.1).
 * @returns true se o elemento estiver visível na viewport.
 */
export function useInView<T extends HTMLElement>(
  ref: RefObject<T | null>,
  threshold = 0.1,
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return isInView;
}
