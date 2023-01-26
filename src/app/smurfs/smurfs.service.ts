import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SmurfsService {
  private urlGetSmurfs = 'https://the-social-smurfs-network.cyclic.app/api/smurfs/';

  constructor(private httpClient: HttpClient) { }

  getSmurfs() {
    return this.httpClient.get(this.urlGetSmurfs)
  }
}
