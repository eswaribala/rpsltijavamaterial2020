import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

 categoryName:FormControl;
 productName:FormControl;
 dop:FormControl;
 cost:FormControl;
 categoryForm:FormGroup;

  constructor(private formBuilder:FormBuilder) {

  this.categoryName=new FormControl('',
    [Validators.required,Validators.pattern('[A-Za-z]{3,20}')
  ]);
  this.productName=new FormControl('',
      [Validators.required,Validators.pattern('[A-Za-z]{3,20}')
      ])
    this.dop=new FormControl('',Validators.required);
    this.cost=new FormControl('',
      [Validators.required,Validators.pattern('[0-9]{3,6}')
      ]);

    this.categoryForm=this.formBuilder.group({
      categoryName:this.categoryName,
      productName:this.productName,
      dop:this.dop,
      cost:this.cost
    })

  }

  ngOnInit() {
  }

  save() {

  }
}
