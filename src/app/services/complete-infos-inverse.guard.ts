import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompleteInfosInverseGuard implements CanActivate {

  constructor(private userService : UserService , private router :Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      this.userService.testIfInfosAreCompleted();
      if(this.userService.areCompleted()){
        return true;
      }

      this.router.navigate(['home']);
      return false;
  }

}
