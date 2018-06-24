import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {Bookmark} from './bookmark.model';


@Injectable()
export class BookmarkService {
  bookmarksCollection: AngularFirestoreCollection<Bookmark>;
  bookmarks: Observable<Bookmark[]>;
  bookmarkDoc: AngularFirestoreDocument<Bookmark>;



  constructor(public afs: AngularFirestore) {
    // this.bookmarks = this.afs.collection('bookmarks').valueChanges();
    this.bookmarksCollection = this.afs.collection('bookmarks', ref => ref.orderBy('title','asc'));

    this.bookmarks = this.bookmarksCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Bookmark;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getBookmarks() {
    return this.bookmarks;
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmarksCollection.add(bookmark);
  }

  deleteBm(bookmark: Bookmark) {
    this.bookmarkDoc = this.afs.doc(`bookmarks/${bookmark.id}`);
    this.bookmarkDoc.delete();
  }

  updateBm(bookmark: Bookmark) {
    this.bookmarkDoc = this.afs.doc(`bookmarks/${bookmark.id}`);
    this.bookmarkDoc.update(bookmark);
  }

  public print(printEl: HTMLElement) {
    let printContainer: HTMLElement = document.querySelector('#print-container');

    if (!printContainer) {
      printContainer = document.createElement('div');
      printContainer.id = 'print-container';
    }

    printContainer.innerHTML = '';

    let elementCopy = printEl.cloneNode(true);
    printContainer.appendChild(elementCopy);
    document.body.appendChild(printContainer);

    window.print();
  }

}

