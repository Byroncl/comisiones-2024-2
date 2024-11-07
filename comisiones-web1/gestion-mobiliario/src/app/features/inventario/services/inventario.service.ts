import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InventarioService {
  private url = "../../../core/services/json/inventario.json";

  constructor(private http: HttpClient) {}

  getInventario(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
