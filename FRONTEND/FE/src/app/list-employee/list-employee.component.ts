import { Component } from '@angular/core';
import { Router } from '@angular/router';

export class PeriodicElement {
  id: number = 0
  FirstName: string = ''
  LastName: string = ''
  Age: number = 0
  Position: string = ''
  Country: string = ''
}


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.scss'
})
export class ListEmployeeComponent {
  constructor(private router: Router) { }


  displayedColumns: string[] = ['index', 'name', 'age', 'position', 'country', 'action'];

  dataSource: PeriodicElement[] = [
    { id: 1, FirstName: 'Helium', LastName: 'Beryllium', Age: 25, Position: 'Assistance Tech', Country: 'USA' },
    { id: 2, FirstName: 'Helium', LastName: 'Beryllium', Age: 25, Position: 'Assistance Tech', Country: 'USA' },
    { id: 3, FirstName: 'Helium', LastName: 'Beryllium', Age: 25, Position: 'Assistance Tech', Country: 'USA' },
    { id: 4, FirstName: 'Helium', LastName: 'Beryllium', Age: 25, Position: 'Assistance Tech', Country: 'USA' },
    { id: 5, FirstName: 'Helium', LastName: 'Beryllium', Age: 25, Position: 'Assistance Tech', Country: 'USA' },
    { id: 6, FirstName: 'Helium', LastName: 'Beryllium', Age: 25, Position: 'Assistance Tech', Country: 'USA' },
  ];

  Edit(e: any) {

    this.router.navigate(['DetailEmployee', e.id])

    console.log(e);
  }
}
