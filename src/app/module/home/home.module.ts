import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IndexComponent} from './page/home/index.component';
import {AuthService} from '../../core/services/auth.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule, ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  exports: [IndexComponent],
  providers: [AuthService]

})
export class HomeModule {
}
