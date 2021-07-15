import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    // check if search is undefined
    // console.log(term)
    if(term === null){
      return ninjas
    }
    return ninjas.filter(function (ninja) {
        return ninja.name.includes(term);
    })
  }

}
