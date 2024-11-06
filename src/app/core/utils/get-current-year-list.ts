import dayjs from 'dayjs';
import { SearchItem } from '../../shared/models/films/small-interfaces';

export function getCurrentYearList(): SearchItem[] {
  const currentYear: number = dayjs().year();
  const lastYear: number = currentYear - 1;
  let startYear = 2019;

  const result: SearchItem[] = [
    { name: 'Годы выхода', slug: '' },
    { name: `${lastYear}-${currentYear}`, slug: `${lastYear}-${currentYear}` },
    { name: `2020-${lastYear - 1}`, slug: `2020-${lastYear - 1}` },
  ];

  while (startYear > 1959) {
    result.push({ name: `${startYear - 10}-${startYear}`, slug: `${startYear - 10}-${startYear}` });
    startYear -= 10;
  }

  result.push({ name: `до 1959`, slug: '1874-1958' });

  return result;
}
