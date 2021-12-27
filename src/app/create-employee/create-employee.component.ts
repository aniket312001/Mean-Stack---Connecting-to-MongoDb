import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  formValue !: FormGroup
  constructor(private fb:FormBuilder,private service :UserService,private route:ActivatedRoute,private r1 :Router) { }
  ngOnInit(): void {

    
    this.formValue = this.fb.group({
      name:new FormControl("",[Validators.required,Validators.minLength(2)]),
      position:new FormControl("",[Validators.required]),
      dept:new FormControl("",[Validators.required,Validators.minLength(1)]),
      
    })

    if(this.route.snapshot.paramMap.get('id')){
      console.log(this.route.snapshot.paramMap.get('id'))

      this.service.getuserbyId(this.route.snapshot.paramMap.get('id')).subscribe(data=>{
      
        this.formValue.setValue({
          name:data.name,
          position:data.position,
          dept:data.dept,
        })
        
      })

      
    }


  }


  onSubmit(){
    if(this.route.snapshot.paramMap.get('id')){
      this.service.updateUser(this.route.snapshot.paramMap.get('id'),this.formValue.value).subscribe((data)=>{
        console.log(data)
      
        this.r1.navigate(['/user'])
      })  
    }
    else{
      this.service.createUser(this.formValue.value).subscribe((data)=>{console.log(data) 
        this.formValue.reset()
      })
    }
  }


}
