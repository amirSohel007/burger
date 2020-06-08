import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "myfilter",
})

export class MyFilterPipe implements PipeTransform {
  transform(items: any[], userString: String): any {
      if (!items || !userString) {
          return items;
      }
      return items.filter(item => (item.name.toLowerCase().includes(userString)));
}
}