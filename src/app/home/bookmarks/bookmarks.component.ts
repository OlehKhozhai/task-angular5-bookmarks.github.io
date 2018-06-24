import {Component, OnInit, Input} from '@angular/core';
import {BookmarkService} from '../service/bookmark.service';
import {Bookmark} from '../service/bookmark.model';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks: Bookmark[];
  editState = false;
  toEditBm:  Bookmark;
  searchBm = '';
  openCreator = false;
  constructor(private bookmarkService: BookmarkService) {
  }

  ngOnInit() {
    this.bookmarkService.getBookmarks().subscribe(bookmarks => {
      console.log(bookmarks);
      this.bookmarks = bookmarks;
    });
  }

  deleteBm(event, bookmark: Bookmark) {
    this.clearState();
    this.bookmarkService.deleteBm(bookmark);
  }

  editBm(event, bookmark: Bookmark) {
    this.editState = true;
    this.toEditBm = bookmark;
    this.openCreator = false;
  }

  clearState() {
    this.editState = false;
    this.toEditBm = null;
  }

  updateBm(bookmark: Bookmark) {
    this.bookmarkService.updateBm(bookmark);
    this.clearState();
  }

}
