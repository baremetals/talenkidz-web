/* eslint-disable no-unused-vars */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, PageConfig } from 'next';
import FormData from 'form-data';
import { Writable } from 'stream';
import formidable from 'formidable';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type Data = {
  message?: string;
  content?: Object;
  err?: any;
};
const formidableConfig = {
  keepExtensions: true,
  maxFileSize: 10_000_000,
  maxFieldsSize: 10_000_000,
  maxFields: 7,
  allowEmptyFiles: false,
  multiples: false,
};

export const config = {
  api: {
    bodyParser: false,
  },
};

function formidablePromise(
  req: NextApiRequest,
  opts?: Parameters<typeof formidable>[0]
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
  return new Promise((accept, reject) => {
    const form = formidable(opts);

    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      return accept({ fields, files });
    });
  });
}

const fileConsumer = <T = unknown>(acc: T[]) => {
  const writable = new Writable({
    write: (chunk, _enc, next) => {
      acc.push(chunk);
      next();
    },
  });

  return writable;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(400).json({ message: 'Invalid Request' });
  }
  const cookies = JSON.parse(req.cookies.talentedKid as string);
  const { jwt } = cookies;
  // console.log('I atleast run up in here')
  try {
    const chunks: never[] = [];

    const { fields, files } = await formidablePromise(req, {
      ...formidableConfig,
      // consume this, otherwise formidable tries to save the file to disk
      fileWriteStreamHandler: () => fileConsumer(chunks),
    });

      // console.log('the fields: ',fields);
      // console.log('the raaas file: ', files);
    const { file } = files;
    // console.log('the bumba file: ', file);

    const fileData = Buffer.concat(chunks); // or is it from? I always mix these up
      // console.log('the fing filedata:', fileData)
    const { originalFilename } = file as any;
    const form = new FormData();
      // form.append('my_field', 'my value');
    form.append('files', fileData, originalFilename);

    const apiRes = await fetch(`${baseUrl}/upload`, {
      method: 'POST',
      headers: {
        Accept: 'multipart/form-data',
        Authorization: `Bearer ${jwt}`,
      },
      body: form as any,
    });

    const image = await apiRes.json();
    // console.log(image);
    const content = image[0];

    res.status(200).json({ content });
  } catch (err) {
    // console.log('the fucking error: ', err);
    res.status(400).json({ err: err });
  }

}
