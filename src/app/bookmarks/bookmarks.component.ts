import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookmarkService} from './service/bookmark.service';
import {Bookmark} from './service/bookmark.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnDestroy, OnInit {
  bookmarks: Bookmark[];
  editState = false;
  toEditBm: Bookmark;
  searchBm = '';
  bookmarkSubscribe: Subscription;

  constructor(private bookmarkService: BookmarkService) {
  }

  ngOnInit() {
    this.bookmarkSubscribe = this.bookmarkService.getBookmarks().subscribe(bookmarks => {
      this.bookmarks = bookmarks;
    });
  }

  ngOnDestroy() {
    this.bookmarkSubscribe.unsubscribe();
  }

  deleteBm(event, bookmark: Bookmark) {
    this.clearState();
    this.bookmarkService.deleteBm(bookmark);
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
