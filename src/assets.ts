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

import { goldmileImagesExport } from './imports/Goldmile';
import { okogoraImagesExport } from './imports/Okogora';

import kombo499Poster1 from 'figma:asset/818cfb3cbde93dcee652d1d76985b3550f51865f.png';
import kombo499Poster2 from 'figma:asset/41f0743b6e49f23d0067499b8918b4655f485cf9.png';
import kombo499Poster3 from 'figma:asset/f058c455018356b69a01413c2f0a5e35642459e1.png';
import kombo499Poster4 from 'figma:asset/0ee26efd596827852523af76d126523b304e80c4.png';
import kombo499Poster5 from 'figma:asset/063c08fb61fd1609c2e46d7b5af325fadd1f4b04.png';
import kombo499Poster6 from 'figma:asset/6f1d073a18bbcf5096c8c9dabcf6eaa4959324e0.png';

import nexteventBackstage from 'figma:asset/868898f80742456c5e7d1c2f98f4822ab108ba13.png';

import vtorichkinDashboard from 'figma:asset/3f9554394c261f3848852f2a72b8433154f79f02.png';
import vtorichkinFavorites from 'figma:asset/9a0a2d818ac6d1302b27ac13cb4920691719998c.png';
import vtorichkinMobile from 'figma:asset/087378e9d0c28de5bbac1ec2aefa117163f900c6.png';

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

const vtorichkinImages = [
  vtorichkinCover,
  vtorichkinDashboard,
  vtorichkinFavorites,
  vtorichkinMobile,
];

const goldmileImages = goldmileImagesExport;
const okogoraImages = [
  ...okogoraImagesExport,
  okogoraImagesExport[9],
  okogoraImagesExport[10],
];

const kombo499Images = [
  kombo499Cover,
  kombo499Poster1,
  kombo499Poster2,
  kombo499Poster3,
  kombo499Poster4,
  kombo499Poster5,
  kombo499Poster6,
];

const nexteventImages = [nexteventCover, nexteventBackstage];

export const CASE_IMAGES = {
  vtorichkin: vtorichkinImages,
  getlogist: [getlogistCover],
  goldmile: goldmileImages,
  kombo499: kombo499Images,
  okogora: okogoraImages,
  cherekhin: [cherekhinCover],
  nextevent: nexteventImages,
  tectum: [tectumCover],
  promart: [promartCover],
};

// Типы для TypeScript
export type CoverSlug = keyof typeof COVERS;
export type CaseImageSlug = keyof typeof CASE_IMAGES;
