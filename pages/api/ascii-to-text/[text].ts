import { Request, Response } from 'express';
import { cqrs } from '../../../lib/middleware';
import asciiDecode from '../../../utils/ascii-decode.util';

export default async (req: Request, res: Response) => {
   await cqrs(req, res);

   const { text, type } = req.query;

   const newData = asciiDecode(text);

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
