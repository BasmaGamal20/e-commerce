import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { productElement } from '../admin-dashboard/admin-dashboard.component';
import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { manageProductService } from '../manage-product.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class UserPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'description', 'image'];
  productArr: productElement[] =[];

  catogryArr: [] =[];

  items:productElement[] =[];
  dataSource = new MatTableDataSource<productElement>(this.items);
  @ViewChild(MatPaginator)  paginator!: MatPaginator;


  
  constructor(public manageProductService:manageProductService,
    private _router: Router) { }

  ngOnInit() {
    this.showCatogry();
    this.showConfig();
  }
  selectedCatogry: any ;
 

  showConfig() {
    this.manageProductService.getAllProduct()
      .subscribe(data=>{ 
      console.log(data)
      this.productArr = data as productElement[] ;
      this.items =this.productArr;
      this.dataSource = new MatTableDataSource<productElement>(this.items);
      this.dataSource.paginator = this.paginator;

      })
  }

  onOptionSelected(event: any) {
    this.items =[];
    // this.selectedCatogry = event;
    // console.log(event.target);
    if (this.selectedCatogry) {
      this.items = this.productArr.filter(item => item.category === this.selectedCatogry);
    } else {
      this.items = this.productArr;
    }
    this.dataSource = new MatTableDataSource<productElement>(this.items);
    this.dataSource.paginator = this.paginator;
    return this.items;
    
  }

  showCatogry() {
    this.manageProductService.getAllcatogries()
      .subscribe(data=>{ 
      console.log(data)
      this.catogryArr = data as [] ;
      })
  }

  ngAfterViewInit() {
  }
}
