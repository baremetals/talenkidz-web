import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(calendar, relativeTime);
// dayjs.extend(relativeTime);
import { uploadProps } from 'src/types';
import { toBase64 } from './base64';
import axios from 'axios';

export function cutTextToLength(str: string | undefined, maxLength: number): string | undefined {
  if (str === undefined) return
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
}

export function customSlugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function composeArticleSlug(id: string, title: string): string {
  return `${customSlugify(title)}-${id}`;
}

export function extractArticleIdFromSlug(slug: string) {
  return slug.split('-').pop();
}

export const upperCase = (
  word: string | undefined = 'talentkids'
): string | undefined => {
  if (word === undefined) return;
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatDayJSTime = (date: string | Date | any) => {
  if (typeof date === 'string') {
    return dayjs(date).fromNow();
  } else {
    return dayjs.unix(date?.seconds).fromNow();
  }
}

type TErrorType = {
  error: string;
};

type TImageReturnType = TErrorType | null

// 209715200
export const handleImgChange = async ({
  event,
  setUploadImg,
  setDisplayImg,
}: uploadProps): Promise<TImageReturnType> => {
  if (!event.target.files) return null;
  const image = event?.target?.files![0];
  if (image.size > 209715200) {
    return {
      error: 'File size cannot exceed more than 256MB',
    };
  }
  const base64 = await toBase64(event.target.files[0]);
  setUploadImg(image);
  setDisplayImg(base64);
  return null;
};

export const uploadNewImage = async (upload: File, field: string) => {
  console.log('The fucking upload utils function========>', upload);
  let form = new FormData();
  form.append('file', upload, upload?.name);
  try {
    //   console.log(uploadImg);
    const res = await axios(`/api/upload`, {
      method: 'post',
      headers: {
        Accept: 'multipart/form-data',
      },
      data: form,
    });
    console.log('The response utils function========>', res);
    const data = {
      imagefile: res?.data?.content?.url,
      flag: 'user-image',
      field,
    };
    return axios.post('/api/user/update', {
      data,
    });
    // console.log('The test utils function========>', test);
  } catch (err: any) {
    // console.log('The error utils function========>', err);
    return err
  }
};

export const formatTimeAndDate = (date: string, time: string): string => {
  const combinedTimeAndDate = date + time;
  const formattedTimeAndDate = dayjs(combinedTimeAndDate).calendar();
  const formattedDateAndTime =
    dayjs(combinedTimeAndDate).format('D MMM - HH:mm A');
  const testFirstCharacter = formattedTimeAndDate.charAt(0)
  if (!Number.isNaN(Number(testFirstCharacter))) {
    return formattedDateAndTime;
  } else return formattedTimeAndDate;
};

export const getCurrentWeek = (currentDate: Date) => {
  const startDate = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor(
    (currentDate.valueOf() - startDate.valueOf()) / (24 * 60 * 60 * 1000)
  );
  const weekNumber = Math.ceil(days / 7);
  return weekNumber;
};

export const getDuration = (
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string
) => {
  const combinedStartDateAndStartTime = startDate + startTime;
  const combinedEndDateAndEndTime = endDate + endTime;

  const finishDate = dayjs(combinedEndDateAndEndTime);
  const start = dayjs(combinedStartDateAndStartTime);
  // const durationInMinutes = finishDate.diff(start, 'm', true);
  const durationInHours = finishDate.diff(start, 'h', true);
  const durationInDays = finishDate.diff(start, 'd');
  // const hours = Math.floor(durationInHours / 24);
  // let minutes = Math.floor((durationInMinutes % 3600) / 60);
  // let days = Math.floor((durationInDays) / 60);

  // console.log(hours);
  // console.log(minutes);
  // console.log(days);
  // console.log('The Hours: ', durationInHours);
  // console.log('The Minutes: ', durationInMinutes);
  // console.log('The Days: ', durationInDays);


  switch (durationInDays > 0) {
    case durationInDays > 0 && durationInDays < 1:
      return `${durationInHours} hours`;
    case durationInDays >= 1 && durationInDays < 28:
      return durationInDays === 1
        ? `${durationInDays} day`
        : `${durationInDays} days`;
    case durationInDays > 28 && durationInDays <= 31:
      return '1 month';
    case durationInDays > 31:
      return `${durationInDays} days`;
    default:
      `${durationInHours} hours`;
  }
};