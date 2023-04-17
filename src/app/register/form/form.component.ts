import { Component } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Model } from '../model/model';
import { ServiceService } from '../service/service.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],

  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],

})
export class FormComponent {
  public model = new Model();
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  regdata: (() => void) | undefined;

  constructor(private service: ServiceService) {}

  submit(){
    console.log(this.model);
    
    if(this.model.studentname == undefined){
      alert("Please enter student name.")
    }else{
      this.service.registerdata(this.model).subscribe((data)=>{
        console.log("send");
      })
    }    
  }

  getAll(){
    console.log('get data');

    this.service.getAll().subscribe(
    (resp: () => void)=>{
      console.log(resp);
      this.regdata=resp;
      console.log(this.regdata)
    }  
    )
    
  }
  
  onItemChange(gender:any){
    this.model.gender= gender.value;
 }
}
