/**
 * ПРОСТАЯ СИСТЕМА ИЗОБРАЖЕНИЙ
 *
 * Все обложки импортируются напрямую в Cover компонентах.
 * Этот файл нужен ТОЛЬКО для CaseDetailPage, который работает с URL строками.
 */

// ============================================
// ПРЯМЫЕ ИМПОРТЫ ОБЛОЖЕК
// ============================================
import vtorichkinCover from 'figma:asset/5a078efff0031a2307c935e3d01bbf68ac7e14dd.png';
import getlogistCover from 'figma:asset/a96f68f3e3253c35d3128c179d5d64993ea951d5.png';
import goldmileCover from 'figma:asset/6b5429d6f764c4a2fcef954c6de9aacddf78d477.png';
import kombo499Cover from 'figma:asset/6c488546c263d64cd5718f303fdabe405db11934.png';
import okogoraCover from 'figma:asset/b037e7eed6eef7992486bffefd90173d2266f227.png';
import cherekhinCover from 'figma:asset/5d08fe25699b425d4756dfdfc0c5c0e5f9c6cecc.png';
import nexteventCover from 'figma:asset/a08922954fb55abcd1cae7d71de2e275184b0c63.png';
import tectumCover from 'figma:asset/3a7069d0f079364ceca3c29680d9b4cbe0a93f1e.png';
import promartCover from 'figma:asset/b0f47ba06f722de7adc5139d16ec4964385d8782.png';

export const COVERS = {
  vtorichkin: vtorichkinCover,
  getlogist: getlogistCover,
  goldmile: goldmileCover,
  kombo499: kombo499Cover,
  okogora: okogoraCover,
  cherekhin: cherekhinCover,
  nextevent: nexteventCover,
  tectum: tectumCover,
  promart: promartCover,
};

export const CASE_IMAGES = {
  vtorichkin: [vtorichkinCover],
  getlogist: [getlogistCover],
  goldmile: [goldmileCover],
  kombo499: [kombo499Cover],
  okogora: [okogoraCover],
  cherekhin: [cherekhinCover],
  nextevent: [nexteventCover],
  tectum: [tectumCover],
  promart: [promartCover],
};

// Типы для TypeScript
export type CoverSlug = keyof typeof COVERS;
export type CaseImageSlug = keyof typeof CASE_IMAGES;
