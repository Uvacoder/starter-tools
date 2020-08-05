interface More {
   [key: string]: any;
}

const parserWords = (data: any[]) => {
   let payload: More = {};
   for (const key of data) {
      payload[key] = key;
   }
   return payload;
};
const oldWords = parserWords([
   'salvacion',
   'devocion matutina',
   'jovenes',
   'jóvenes',
   'felicidad',
   'familia',
   'naturaleza humana',
   'voluntad de dios',
   'espiritu santo',
   'salvacion',
   'segunda venida',
   'testimonios biblicos',
   'hijo del hombre',
   'oracion a dios',
   'reino de los cielos',
   'el salvador',
   'el evangelio',
   'vida eternal',
   'reino de dios',
   'jerusalon',
]);

export const tagExtractor = (
   input: string,
   _words: More = oldWords,
   quantity: number = 4,
) => {
   const payload: string[] = [];
   input.replace(
      new RegExp(Object.values(_words).join('|'), 'gi'),
      (matched) => {
         if (!payload.includes(matched)) {
            payload.push(matched);
         }
         return oldWords[matched];
      },
   );
   return payload.slice(0, quantity);
};
