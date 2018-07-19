import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListHttpService {

  public baseUrl = 'https://www.anapioficeandfire.com/api';
  public booksUrl = 'https://www.anapioficeandfire.com/api/books';
  public charactersUrl = 'https://www.anapioficeandfire.com/api/characters';
  public housesUrl = 'https://www.anapioficeandfire.com/api/houses';

  constructor(private _http: HttpClient) {
    console.log('ListHttpService is called');
  }

  private handleError(err: HttpErrorResponse) {
    console.log('Handle error http calls');
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // methods to get all info
  public getAllBooks(): any {
    const myResponse = this._http.get(this.booksUrl);
    return myResponse;
  }

  public getAllCharacters(): any {
    const myResponse = this._http.get(this.charactersUrl);
    return myResponse;
  }

  public getAllHouses(): any {
    const myResponse = this._http.get(this.housesUrl);
    return myResponse;
  }

  // methods to get specific info
  public getSingleBook(myBook): any {
    const myResponse = this._http.get(myBook);
    return myResponse;
  }

  public getSingleCharacter(myCharacter): any {
    const myResponse = this._http.get(myCharacter);
    return myResponse;
  }

  public getSingleHouse(myHouse): any {
    const myResponse = this._http.get(myHouse);
    return myResponse;
  }

}
