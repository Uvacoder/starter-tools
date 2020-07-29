import Cors from 'cors';
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
export default function middleware(middleware) {
   return (req, res) =>
      new Promise((resolve, reject) => {
         middleware(req, res, (result) => {
            if (result instanceof Error) {
               return reject(result);
            }
            return resolve(result);
         });
      });
}
export const cqrs = middleware(
   Cors({
      methods: ['GET'],
   }),
);
