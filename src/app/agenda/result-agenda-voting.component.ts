import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceComponent } from '../service.component';

@Component({
  selector: 'result-agenda-voting',
  templateUrl: './result-agenda-voting.component.html', 
}) 
export class ResultAgendaVotingComponent { 
	agendas: Object = [];
	selectAgenda;

	constructor(
		private service: ServiceComponent,
		private router: Router 
	){ 

		this.getAgendas();
	}

	getAgendas(){
	    this.service.getAgendas().subscribe(
	      (data:any)=> {
	          this.agendas = data; 
	      },
	      error => {
	      	 this.service.handleErrors(error);
	      });
 	}

	resultAgendaVoting(){ 
		this.service.resultAgendaVoting(this.selectAgenda).subscribe(
		    (data:any)=> {
		        alert("Resultado: " + data.result);

		    },
		    error => {
		     	this.service.handleErrors(error);
		    });
	}
}
