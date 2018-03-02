import { Component, OnInit } from '@angular/core';

import {ItemsService} from '../../items.service';
@Component({
  selector: 'app-dashboard-items',
  templateUrl: `./items.component.html`,
  styleUrls:['./items.component.scss']
})
export class ItemsComponent implements OnInit{
  
  tableData : any[]
  divaya=false;
  divaya2=false;
  MyName: String = "";
  MyPrice: Number = 0;
  MySeller: String = "";
  MyProduct: any;

constructor( private itemsService : ItemsService) {}
 


  ngOnInit()
    {
      this.getProducts();
    }


    reload(): void{
      var self = this;
      this.itemsService.getProducts()
      .subscribe(function(prods) {
        self.tableData = prods.data;
      })
    };
  

  getProducts(): void 
  {

    var self=this; 

    this.itemsService.getProducts().subscribe(function(prods){
      self.tableData=prods.data;
      self.tableData=self.tableData.filter(function(element, index,array)
      {
        return element.sellerName==='Lama'  ||   
        element.sellerName==='Hisham' || 
        element.sellerName==='Sarah'  || 
        element.sellerName==='Nehal' || 
        element.sellerName==='Yomna' ||
        element.sellerName==='Nora'; 
      });
      
    });

  }//end method get 

 

   createProducts(product: any)  : void 
   {
      var self=this;
      this.itemsService.createProducts(product).
      subscribe();
      this.reload();
   }//end method



   updateProducts(uProduct :any): void 
   {
    const product=this.MyProduct;
    this.itemsService.updateProducts(product, uProduct).
    subscribe();
    
      // this.getProducts();
       this.reload();
       this.reload();

   }


   deleteProducts(Product): void
   {

    this.tableData=this.tableData.filter(
    product => product._id !== Product._id);

    this.itemsService.deleteProducts(Product).
    subscribe(() => console.log("Record Deleted!"));
   }
  
  
  removeDiv():void 
  {
    this.divaya=false;
  }

  removeDiv2():void 
  {
    this.divaya2=false;
  }

  showDiv():void 
  {
    this.divaya=true;
  }

  showDiv2(product): void
  {
    this.MyName = product.name;
    this.MyPrice = product.price;
    this.MySeller = product.sellerName;
    this.MyProduct = product;
    this.divaya2=true;
  }

};
