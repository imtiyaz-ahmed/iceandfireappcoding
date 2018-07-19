import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListHttpService } from '../list-http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css'],
  providers: [Location]
})
export class ViewDetailComponent implements OnInit {

  public eachBook;
  public eachCharacter;
  public eachHouse;
  public currentItem;
  public currentBook;
  public currentCharacter;
  public currentHouse;

  constructor(private _route: ActivatedRoute, private router: Router, private listHttpService: ListHttpService,
    private location: Location) { }

  ngOnInit() {
    console.log('View detail component ngOnInit is called');

    this.eachBook = this._route.snapshot.paramMap.get('url');
    console.log(this.eachBook);
    this.listHttpService.getSingleBook(this.eachBook).subscribe(
      data => {
        console.log(data);
        this.currentBook = data;
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );

    this.eachCharacter = this._route.snapshot.paramMap.get('url');
    console.log(this.eachCharacter);
    this.listHttpService.getSingleCharacter(this.eachCharacter).subscribe(
      data => {
        console.log(data);
        this.currentCharacter = data;
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );

    this.eachHouse = this._route.snapshot.paramMap.get('url');
    console.log(this.eachHouse);
    this.listHttpService.getSingleHouse(this.eachHouse).subscribe(
      data => {
        console.log(data);
        this.currentHouse = data;
      },
      error => {
        console.log('some error occured');
        console.log(error.errorMessage);
      }
    );

  } // end of ngOnInit function

  goBack(): any {
    this.location.back();
  }

} // end of ViewDetailComponent class
