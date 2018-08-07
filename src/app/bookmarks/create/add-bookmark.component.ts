import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BookmarkService} from '../service/bookmark.service';
import {Bookmark} from '../service/bookmark.model';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {
  // toEditBm: Bookmark;

  step = 1;
  bookmark: Bookmark = {
    title: '',
    description: ''
  };

  constructor(private bookmarkService: BookmarkService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.bookmark.title !== '' && this.bookmark.description !== '') {
      this.bookmarkService.addBookmark(this.bookmark);
      this.step++;
      this.bookmark.title = '';
      this.bookmark.description = '';
    } else if (this.bookmark.title === '' && this.bookmark.description === '') {
      this.cancelBt();
    }
  }

  cancelBt() {
    this.step++;
    this.bookmark.title = '';
    this.bookmark.description = '';
  }

  setStep(index: number) {
    this.step = index;
  }


}
