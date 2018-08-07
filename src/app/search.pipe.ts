import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform (bookmarks, value) {
    return bookmarks.filter(bookmark => {
      return bookmark.title.includes(value);
    });
  }
  // transform(bookmarks: any[], searchBm: string): any[] {
  //   if(!bookmarks) return [];
  //   if(!searchBm) return bookmarks;
  //   searchBm = searchBm.toLowerCase();
  //   return bookmarks.filter( it => {
  //     return it.toLowerCase().includes(searchBm);
  //   });
  // }
}
