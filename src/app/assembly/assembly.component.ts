import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginControllerService } from '../controllers/login-controller.service';

@Component({
  selector: 'app-assembly',
  templateUrl: './assembly.component.html',
  styleUrls: ['./assembly.component.scss'],
  host: {
    class: 'container-fluid flex-grow-1 d-flex justify-content-stretch align-items-stretch'
  }
})
export class AssemblyComponent implements OnInit {
  public id: number = 0;

  constructor(
    private router: Router, 
    private loginController: LoginControllerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loginController.isAuthenticated$.subscribe(isAuthenticated => {
      if (!isAuthenticated) {
        this.router.navigate(['/login']);
      }
    });
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.id = id;
  }
}
