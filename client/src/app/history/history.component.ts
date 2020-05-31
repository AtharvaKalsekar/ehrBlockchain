import { AlertService } from './../services/alert.service';
import { DoctorService } from './../services/doctor.service';
import { Ehr } from './../classes/ehr';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  private patientId : string;
  private doctorId : string;
  private records : Ehr[];
  constructor(  private doctorService : DoctorService,
                private alertService : AlertService ) {}

  ngOnInit() {
    this.patientId = localStorage.getItem("patientId");
    this.doctorId = localStorage.getItem("doctorId");
    this.records=[];
    this.getHistory();
  }

  getHistory(){
    let args={"patientId":"","doctorId":""};
    args.patientId=this.patientId;
    args.doctorId=this.doctorId;
    this.doctorService.getHistory(args).subscribe(
      res=>{
        if(!res.action){
          this.alertService.error(res.message);
        }
        else{
          let arr=JSON.parse(res.message);
          console.log(arr)
        } 
      }
    )
  }

}
