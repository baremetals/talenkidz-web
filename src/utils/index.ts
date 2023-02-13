import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
dayjs.extend(calendar);
import { uploadProps } from 'src/types';
import { toBase64 } from './base64';

export function cutTextToLength(str: string, maxLength: number): string {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function composeArticleSlug(id: string, title: string): string {
  return `${slugify(title)}-${id}`;
}

export function extractArticleIdFromSlug(slug: string) {
  return slug.split('-').pop();
}

export const upperCase = (word: string = 'talentkids') => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const handleImgChange = async ({
  event,
  setUploadImg,
  setDisplayImg,
}: uploadProps) => {
  if (!event.target.files) return;
  const image = event?.target?.files![0];
  if (image.size > 209715200) {
    return {
      error: 'File size cannot exceed more than 256MB',
    };
  }
  const base64 = await toBase64(event.target.files[0]);
  setUploadImg(image);
  setDisplayImg(base64);
  return;
};

export const formatTimeAndDate = (date: string, time: string): string => {
  const combinedTimeAndDate = date + time;
  const formatedTimeAndDate = dayjs(combinedTimeAndDate).calendar();
  const formatedDateAndTime =
    dayjs(combinedTimeAndDate).format('D MMM YY - HH:mm A');
  const testFirstCharacter = formatedTimeAndDate.charAt(0)
  if (!Number.isNaN(Number(testFirstCharacter))) {
    return formatedDateAndTime;
  } else return formatedTimeAndDate;
};

export const getCurrentWeek = (currentDate: any) => {
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor(
    (currentDate.valueOf() - startDate.valueOf()) / (24 * 60 * 60 * 1000)
  );
  const weekNumber = Math.ceil(days / 7);
  return weekNumber;
};

