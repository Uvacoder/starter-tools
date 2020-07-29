const Copy = (value: string) => {
   var input = document.createElement('input');
   input.setAttribute('value', value);
   document.body.appendChild(input);
   input.select();
   // eslint-disable-next-line
   document.execCommand('copy');
   document.body.removeChild(input);
};

export default Copy;
