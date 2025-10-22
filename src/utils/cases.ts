import {
  VtorichkinCover,
  GetlogistCover,
  GoldmileCover,
  OkogoraCover,
  CherekhinCover,
  NexteventCover,
  TectumCover,
  Kombo499Cover,
  PromartCover
} from "../components/covers";

export interface CaseMeta {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  CoverComponent: React.ComponentType<{ className?: string; alt?: string }>;
  year: string;
  externalLink?: string;
  hasDetail?: boolean;
}

export const CASE_STUDIES: CaseMeta[] = [
  {
    id: "1",
    slug: "vtorichkin",
    title: "Вторичкин",
    category: "UX/UI design",
    description: "Платформа для поиска вторичной недвижимости в Москве",
    CoverComponent: VtorichkinCover,
    year: "2025"
  },
  {
    id: "2",
    slug: "getlogist",
    title: "Getlogist",
    category: "UX/UI design",
    description: "Рейтинг логистических компаний в России",
    CoverComponent: GetlogistCover,
    year: "2025"
  },
  {
    id: "3",
    slug: "goldmile",
    title: "Золотая миля",
    category: "Брендинг / Игровая механика",
    description: "Специальный проект для трубного завода Икапласт",
    CoverComponent: GoldmileCover,
    year: "2025"
  },
  {
    id: "4",
    slug: "kombo499",
    title: "Комбо за 499",
    category: "Брендинг / Продвижение",
    description: "Айдентика и digital-кампания для музыкального мероприятия",
    CoverComponent: Kombo499Cover,
    year: "2024"
  },
  {
    id: "5",
    slug: "okogora",
    title: "Око Гора",
    category: "Экспресс-дизайн",
    description: "Визуальная айдентика для школы самообороны",
    CoverComponent: OkogoraCover,
    year: "2024"
  },
  {
    id: "6",
    slug: "cherekhin",
    title: "Черёхин парк",
    category: "Брендинг / Айдентика",
    description: "Айдентика загородного отеля среди соснового леса",
    CoverComponent: CherekhinCover,
    year: "2024"
  },
  {
    id: "7",
    slug: "nextevent",
    title: "NextEvent",
    category: "Веб-разработка",
    description: "Платформа для организации мероприятий",
    CoverComponent: NexteventCover,
    year: "2024",
    externalLink: "https://www.next-event.ru/",
    hasDetail: false
  },
  {
    id: "8",
    slug: "tectum",
    title: "Tectum",
    category: "Дизайн баннеров / Маркетинг",
    description: "Более 500 баннеров для криптовалютной компании",
    CoverComponent: TectumCover,
    year: "2024",
    externalLink: "https://tectum.io/tectum-blog/",
    hasDetail: false
  },
  {
    id: "9",
    slug: "promart",
    title: "ПромАрт",
    category: "Веб-разработка / Дизайн",
    description: "Сайт для компании металлообработки и монтажа",
    CoverComponent: PromartCover,
    year: "2024",
    externalLink: "http://prom-art.pro/"
  }
];

const CASE_META_BY_ID = new Map<string, CaseMeta>(CASE_STUDIES.map((caseMeta) => [caseMeta.id, caseMeta]));
const CASE_META_BY_SLUG = new Map<string, CaseMeta>(CASE_STUDIES.map((caseMeta) => [caseMeta.slug, caseMeta]));

export function getCaseMetaById(id: string) {
  return CASE_META_BY_ID.get(id);
}

export function getCaseMetaBySlug(slug: string) {
  return CASE_META_BY_SLUG.get(slug);
}

export function getCaseSlugById(id: string) {
  return CASE_META_BY_ID.get(id)?.slug;
}
