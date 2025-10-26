/**
 * ========================================
 * КОМПОНЕНТЫ-ОБЛОЖКИ для кейсов
 * ========================================
 * 
 * ВАЖНО: figma:asset импорты работают ТОЛЬКО внутри React компонентов.
 * Попытка извлечь URL из импорта возвращает только имя файла.
 * 
 * РЕШЕНИЕ: Каждая обложка - это отдельный React компонент с прямым figma:asset импортом.
 * 
 * ИСПОЛЬЗОВАНИЕ:
 * import { OkogoraCover } from './components/covers';
 * <OkogoraCover className="w-full h-full object-cover" alt="..." />
 */

export { VtorichkinCover } from './VtorichkinCover';
export { GetlogistCover } from './GetlogistCover';
export { GoldmileCover } from './GoldmileCover';
export { OkogoraCover } from './OkogoraCover';
export { CherekhinCover } from './CherekhinCover';
export { NexteventCover } from './NexteventCover';
export { TectumCover } from './TectumCover';
export { Kombo499Cover } from './Kombo499Cover';
export { PromartCover } from './PromartCover';
export { VetstatusCover } from './VetstatusCover';
export { MatritsaCover } from './MatritsaCover';
export { AutoservisCover } from './AutoservisCover';
