import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfilePicture } from '../../models/profilePicture.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private readonly baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.cloudinary.com/v1_1/dqeephdht/image/upload';
  }

  public uploadProfilePicture(file: File): Observable<ProfilePicture> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('upload_preset', 'ttkiqfom');

    return this.http.post<ProfilePicture>(this.baseUrl, formdata);
  }
}
