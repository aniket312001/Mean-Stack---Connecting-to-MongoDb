import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: UserService,private r1 :Router) { }

  allData:any
  ngOnInit(): void {
    
    this.show()
  }

  show(){
    this.service.getAllUser().subscribe(data=>{this.allData = data})
  }

  delete(id:any){
    console.log(id)
    this.service.deleteUser(id).subscribe(data=>{
      // console.log(data)
      
      
      this.show()
    // },err => {
    //   console.log(err)   // handling Error
    //   this.show()
    })
    
    // location.reload()  // inBuilt function - no need to refresh manually
  }

  deletebyname(name:any){
    console.log(name)
    this.service.deleteUserByName(name).subscribe(data=>{
      // console.log(data)
      this.show()
    })
  }


}
