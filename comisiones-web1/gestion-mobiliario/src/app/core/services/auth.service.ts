import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "https://api.example.com";

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/auth/login`, credentials);
  }

  isAuthenticated(): boolean {
    // Lógica para verificar si el usuario está autenticado
    return !!localStorage.getItem("token");
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }
}
