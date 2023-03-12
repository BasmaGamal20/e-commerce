import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { manageProductService } from '../manage-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AdminDashboardComponent implements OnInit {
  public get router(): Router {
    return this._router;
  }
  public set router(value: Router) {
    this._router = value;
  }

  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'description', 'image','ActionIcon'];
  productArr: productElement[] =[];
  dataSource = new MatTableDataSource<productElement>(this.productArr);

  @ViewChild(MatPaginator)  paginator!: MatPaginator;

  
  constructor(public manageProductService:manageProductService,
    private _router: Router) { 
  }

  ngOnInit(): void {
   this.showConfig()

  }
  showConfig() {
    this.manageProductService.getAllProduct()
      .subscribe(data=>{ 
      console.log(data)
      this.productArr = data as productElement[] ;
      this.dataSource = new MatTableDataSource<productElement>(this.productArr);
      this.dataSource.paginator = this.paginator;

      })
  }

  ngAfterViewInit() {
  }


  deleteclick(id:any){
    this.manageProductService.delete(id).subscribe(res=>{
      this.showConfig()
    })
  }

  updateclick(id:any){
    this.router.navigate(['/addPage']);

  }

  Addlick(){

      this.router.navigate(['/addPage']);
    }
  }





export interface productElement {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;

}



