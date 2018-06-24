import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})

export  class SearchPipe implements PipeTransform {
  transform(bookmarks, value) {
    return bookmarks.filter(bookmark => {
      return bookmark.title.includes(value);
    });
  }
}
