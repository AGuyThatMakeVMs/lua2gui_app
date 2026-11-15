import { cp, mkdir, rm } from 'node:fs/promises';
await rm('www',{recursive:true,force:true});
await mkdir('www',{recursive:true});
for (const path of ['index.html','favicon.svg','assets']) await cp(path,'www/'+path,{recursive:true});
console.log('Web app copied to www/');
