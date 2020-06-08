import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment as ENV } from "../environments/environment";

@Injectable({
  providedIn: "root",
})

  export class BurgerService {
  constructor(private http: HttpClient) {}

  getBurgers() {
    return this.http.get(ENV.apiUrl);
  }

}
