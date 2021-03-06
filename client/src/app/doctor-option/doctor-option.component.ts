import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-doctor-option',
  templateUrl: './doctor-option.component.html',
  styleUrls: ['./doctor-option.component.css']
})
export class DoctorOptionComponent implements OnInit {

  isDiagnosisActive = true;
  isHistoryActive = false;
  
  private patientId : string;
  private doctorId : string;

  constructor(  private spinner: NgxSpinnerService,
                private router: Router,
                private location: Location,
                private patientService:PatientService) { }

  ngOnInit() {
    this.patientId = localStorage.getItem("patientId");
    this.doctorId = localStorage.getItem("doctorId");

    if(localStorage.getItem("isNewPatient")=="true"){
      this.patientService.updateDoctorForPatient(); 
    }
  }


  activateDiagnosis(){
    this.spinner.show();
 
     setTimeout(() => {
     //spinner ends after 2 seconds 
       this.spinner.hide();
    }, 2000);
    this.isDiagnosisActive = true;
    this.isHistoryActive = false;
    console.log("Status diag : "+this.isDiagnosisActive);
    console.log("Status hist : "+this.isHistoryActive);
  }

  activateHistory(){
    this.spinner.show();
 
     setTimeout(() => {
     //spinner ends after 2 seconds 
       this.spinner.hide();
    }, 2000);
    this.isHistoryActive = true;
    this.isDiagnosisActive = false;
    console.log("Status diag : "+this.isDiagnosisActive);
    console.log("Status hist : "+this.isHistoryActive);
  }

  goHome(){
    //console.log("stuff");
    console.log("/doctorHome/"+this.doctorId);
    this.router.navigate(["/doctorHome/"+this.doctorId]);
    //this.location.back();
  }

}
