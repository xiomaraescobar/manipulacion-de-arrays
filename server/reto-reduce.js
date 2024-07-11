
const a = [1,2,5,7,1,1,2,3,4,3,2,4,4,5,6,7,9,10,8,45,7,3,2,20]

const rst = a.reduce((obj, item) => {

   if (item >= 1 && item <= 5 ) {
       obj.de1a5 = obj.de1a5 + 1;
   } else if (item >= 6 && item <= 8) {
    obj.de6a8 = obj.de6a8 + 1;
   } else if(item >= 9 && item <= 10) {
    obj.de9a10 = obj.de9a10 + 1;
   } else if (item >= 20) {
    obj.mayor20 = obj.mayor20 + 1;
   };

      return obj
}, {de1a5: 0,  de6a8: 0, de9a10: 0, mayor20: 0})

console.log(rst);