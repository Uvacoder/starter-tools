import { Request, Response } from 'express';
import slugify from 'slugify';
import { cqrs } from '../../../lib/middleware';

export default async (req: Request, res: Response) => {
   await cqrs(req, res);
   const { text, type } = req.query;

   const newData = slugify(text as string, {
      strict: true,
   });

   res.status(200);

   switch (type) {
      case 'text':
         res.send(newData);
         break;
      default:
         res.json({
            data: newData,
         });
         break;
   }
};
