import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { CoreModule } from './core/core.module';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShoppingListModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({
      shoppingList: shoppingListReducer
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
