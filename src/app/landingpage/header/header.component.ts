import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { SessionstorageService } from 'src/app/Service/sessionstorage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  constructor(
	config: NgbModalConfig, 
	private modalService: NgbModal, 
	private router:Router,
	private sessionStorage:SessionstorageService

	) {

		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	checkLogin:boolean = this.sessionStorage.isLoggedIn();

	logOut(){
		console.log("hit")
		this.sessionStorage.logOut();
		this.router.navigateByUrl("/home");
	
	}












	ngOnInit(): void {
		
	}











	openLg(content:any) {
		this.modalService.open(content, {size:'xl'});
	}

	opensignup(content:any) {
		this.modalService.open(content, {size:'xl'});
	}



	// adminPanel(){
	// 	this.router.navigateByUrl('/admin');
	// 	this.router.getCurrentNavigation('/admin',)

	// }




}
