import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UploadFileDto } from '../models/file.model'

@Injectable({
  providedIn: 'root'
})
export class FilesService {


  private apiURL = `${environment.API_URL}/api/files`;

  constructor(
    private http: HttpClient
  ) { }

  getfile(name: string, url: string, type: string){
    return this.http.get(url, {responseType: 'blob'})
    .pipe(
      tap(content => {
        const blob = new Blob([content], {type});
        saveAs(blob, name);
      }),
      map(() => true)
    );
  }

  uploadfile(file: Blob){
    const dto = new FormData();
    dto.append('file', file);
    return this.http.post<UploadFileDto>(`${this.apiURL}/upload`, dto, {
      // headers: {
      //   'Content-type': 'multipart/form-data'
      // }
    });
  }

}
