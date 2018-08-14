import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../../enities/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-susbcription',
  templateUrl: './susbcription.component.html',
  styleUrls: ['./susbcription.component.css']
})
export class SusbcriptionComponent implements OnInit {
  inscriptionForm: FormGroup;
  picture:boolean=false;
  pictureTaken:boolean=false;
  services;
  statuts;
  serverResponse;
  @ViewChild("video")
  public video: ElementRef;

  @ViewChild("canvas")
  public canvas: ElementRef;

  public captures: Array<any>;
  constructor(private formBuilder:FormBuilder,private  employeeService:EmployeeService) {
    this.createForm();
    this.captures = [];
    this.picture=false;
    this.pictureTaken=false;
  }

  ngOnInit() {
  }
  createForm(){
    this.inscriptionForm = this.formBuilder.group({
      lastname: ['',Validators.required],
      firstname: ['',Validators.required],
      matricule:['',Validators.required],
      dateOfBirth: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      call: ['',Validators.required],
      service: ['',Validators.required],
      fonction: ['',Validators.required],
      statut: ['',Validators.required],
      activite: ['']
  })
  }
  ngAfterViewInit() {  
  }
  
  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 300, 300);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    this.pictureTaken=false;
    this.picture=true;
  }
  takePicture(){
    this.pictureTaken=true ;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          this.video.nativeElement.src = window.URL.createObjectURL(stream);
          this.video.nativeElement.play();
      });
  }
  
  }
  reprendre(){
    this.picture=false;
   this.takePicture();
    this.captures=new Array();
  }
  subscribe(){
    let employee=new Employee();
    employee.lastname=this.inscriptionForm.get('lastname').value
    employee.firstname=this.inscriptionForm.get("firstname").value;
    employee.matricule=this.inscriptionForm.get("matricule").value;
    employee.dateOfBirth=this.inscriptionForm.get("dateOfBirth").value;
    employee.email=this.inscriptionForm.get("email").value;
    employee.password=this.inscriptionForm.get("password").value;
    employee.call=this.inscriptionForm.get("call").value;
    employee.service=this.inscriptionForm.get("service").value;
    employee.fonction=this.inscriptionForm.get("fonction").value;
    employee.statut=this.inscriptionForm.get("statut").value;
    employee.activite=this.inscriptionForm.get("activite").value;
    this.employeeService.subscribe(employee).subscribe(data=>{
      this.serverResponse=data;
      console.log(data);
    })
    
  }
}
