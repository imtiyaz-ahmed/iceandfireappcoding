import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListHttpService } from '../list-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allItems: any;
  public allBooks: any;
  public allCharacters: any;
  public allHouses: any;
  public errorMessage: any;

  constructor(private _route: ActivatedRoute, private router: Router, private listHttpService: ListHttpService) {
    console.log('Home component constructor is called');
  }

  ngOnInit() {
    console.log('Home component ngOnInit is called');

    this.listHttpService.getAllBooks().subscribe(
      data => {
        console.log(data);
        this.allBooks = data;
        return this.allBooks;
      },
      error => {
        console.log('Some error occured');
        console.log(error.errorMessage);
      }
    );

    this.listHttpService.getAllCharacters().subscribe(
      data => {
        console.log(data);
        this.allCharacters = data;
        return this.allCharacters;
      },
      error => {
        console.log('Some error occured');
        console.log(error.errorMessage);
      }
    );

    this.listHttpService.getAllHouses().subscribe(
      data => {
        console.log(data);
        this.allHouses = data;
        return this.allHouses;
      },
      error => {
        console.log('Some error occured');
        console.log(error.errorMessage);
      }
    );
  } // end of ngOnInit function

} // end of HomeComponenet class
