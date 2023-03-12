import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { manageProductService } from '../manage-product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { productElement } from '../admin-dashboard/admin-dashboard.component';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {


  productElement: productElement = <productElement>{};

  constructor(private service: manageProductService,
              private _fb: FormBuilder,) { }

  ngOnInit() {

    

    this.service.product = {
      id: 0,
      title: '',
      price: 0,
      category: '',
      description: '',
      image: '',

    }
  }

  onClicked(){
    this.save();
  }

  save() {
    if (this.service.product.id == 0) {
      this.service.postproduct().subscribe(res => {
        this.service.getAllProduct()
      },
        err => {
          console.log(err)
        })
    }
    else {
      this.service.putproduct().subscribe(res => {
        this.service.getAllProduct()
      },
        err => {
          console.log(err)
        })
    }

  }


}
