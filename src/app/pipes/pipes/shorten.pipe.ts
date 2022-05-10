import { Pipe, PipeTransform } from "@angular/core";
/* 1) implement transform from PipeTransform  */
/* 2) use @Pipe anotation  and set name for it    */
/* 3) add pipe to module.ts  */

@Pipe({
    name:"shorten"
})
/* static version not best practise  */
// export class ShortenPipe implements PipeTransform {
//     transform(value: any, ...args: any[]) {
//         if(value.length > 10){
//             return value.substr(0,10) + " ...";
//         }
//         return value;
//     }
// }

/*  best practise */
export class ShortenPipe implements PipeTransform {
    transform(value: any, limit:number) {
        if(value.length > 10){
            return value.substr(0,limit) + " ...";
        }
        return value;
    }
}





