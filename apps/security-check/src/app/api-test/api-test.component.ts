import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL, ApiTestResponse } from '@ipsen5/security-check-api-interface';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.scss'],
})
export class ApiTestComponent implements OnInit {
  constructor(private http: HttpClient) {}
  apiResponse = 'Loading...';

  ngOnInit(): void {
    this.getWelcomeMessage();
  }

  private getWelcomeMessage() {
    this.http.get<ApiTestResponse>(API_URL).subscribe((res) => {
      this.apiResponse = res.message;
    });
  }
}
