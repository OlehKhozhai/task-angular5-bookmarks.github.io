import { Component, OnInit } from '@angular/core';
import { BookmarkService } from '../service/bookmark.service';
import { Bookmark } from '../service/bookmark.model';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {
  openCreator = false;
  bookmark: Bookmark = {
    title : '',
    description : ''
  };

  constructor( private bookmarkService: BookmarkService) { }

  ngOnInit() {
  }
  onSubmit() {
    if (this.bookmark.title !== '' && this.bookmark.description !== '') {
      this.bookmarkService.addBookmark(this.bookmark);
      this.bookmark.title = '';
      this.bookmark.description = '';
    }
  }
  createBm() {
    this.openCreator = true;
  }

  cancelEditForm() {
    this.openCreator = false;
  }

}
