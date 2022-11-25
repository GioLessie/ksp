import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Employee } from "../model/employees.model";

@Injectable({
  providedIn: "root",
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseUrl;

  getByCategory(
    category: string,
    pageSize: number = 3
  ): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(
        `${this.baseUrl}/items?limit=${pageSize}&department=${category}`
      )
      .pipe(
        map((data: any) => {
          return data.Items.map((item: any) => {
            item.beneficiary = JSON.parse(item.beneficiary);
            return item;
          });
        })
      );
  }

  getByQuery(query: string): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(`${this.baseUrl}/items?q=${query}`)
      .pipe(map((data: any) => data.Items));
  }

  getbyId(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/item/${id}`).pipe(
      map((data: any) => data.Item),
      map((data: any) => {
        data.beneficiary = JSON.parse(data.beneficiary);
        return data;
      })
    );
  }

  update(employee: Employee) : Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/item/${employee.id}`, employee)
  }

  delete(id: string) : Observable<any>{
    return this.http.delete<Employee>(`${this.baseUrl}/item/${id}`)
  }
}
