import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompleteInfosProGuard implements CanActivate {

  constructor(private userService : UserService , private router :Router){

  }

  areCompleted = true;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      this.userService.testIfInfosAreCompleted();
      if(!this.userService.areCompleted()){
        return true;
      }

      this.router.navigate(['home']);
      return false;
  }

}
