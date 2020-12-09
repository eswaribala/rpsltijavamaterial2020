import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-category-view-all',
  templateUrl: './category-view-all.component.html',
  styleUrls: ['./category-view-all.component.css']
})
export class CategoryViewAllComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private categoryService:CategoryService) { }
  displayedColumns: string[] = [ 'categoryId', 'name'];
  tableSource = new MatTableDataSource();
  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(response=>{
      console.log(response);
      this.tableSource.data = response;
    })

  }

  ngAfterViewInit(): void {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;

  }


}
