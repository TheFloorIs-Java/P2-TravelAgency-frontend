import { Component, OnInit } from '@angular/core';
import { Packages } from 'src/app/model/Packages';
import { TravelServiceService } from 'src/app/service/travel-service.service';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css'],
})
export class PackageComponent implements OnInit {
  packages: Array<Packages> = [];
  constructor(private tservice: TravelServiceService) {}

  ngOnInit(): void {
    this.tservice.getAllTravelPackages().subscribe((data) => {
      this.packages = data;
      console.log(data);
    });
  }

  user: string | null = '';

  getUser(): boolean {
    console.log(sessionStorage.getItem('signedIn'));
    
    if (sessionStorage.getItem('signedIn'))
    {
      this.user = sessionStorage.getItem('token');
      return true;
    }
      
    return false;
  }
}
