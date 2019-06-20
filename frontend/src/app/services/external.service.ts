import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { External } from '../models/external';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {

  selectedExternal: External;
  externals: External[];
  readonly URL_API = 'http://localhost:3000/api/externals';

  constructor(private http: HttpClient) {
    this.selectedExternal = new External();  
   }

   getExternals() {
    return this.http.get(this.URL_API);
  }

  postExternal(External: External) {
    return this.http.post(this.URL_API, External);
  }

  putExternal(External: External) {
    return this.http.put(this.URL_API + `/${External._id}`, External);
  }

  deleteExternal(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
