import data from '../ascii-data.json';

const asciiDecode = (source) => {
   for (const [key, value] of Object.entries(data)) {
      source = source.replace(new RegExp(key, 'g'), value);
   }
   return source;
};

export default asciiDecode;
