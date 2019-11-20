import { Injectable, Predicate } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = 'http://localhost:4200/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient) {
  }

  /**
   * User login the FileCloud server.
   */
  userLogin() {
    const req = this.url + '/core/loginguest'
    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
      observe: 'response'
      // 'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Content-Type',
      //'Cookie': 'X-XSRF-TOKEN=aqt1uuezrl4q9uu03ipl'
      // "User-Agent":"Chrome/56.0.2924.87"
    })
    const params = {
      'userid':'annro873','password':'vLieZJzd'
    }

    this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp);
    })
  }

  userLogin1():Observable<string> {
    const req = this.url + '/core/loginguest'
    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
      observe: 'response'
      // 'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
      // 'Access-Control-Allow-Headers': 'Content-Type',
      //'Cookie': 'X-XSRF-TOKEN=aqt1uuezrl4q9uu03ipl'
      // "User-Agent":"Chrome/56.0.2924.87"
    })
    const params = {
      'userid':'annro873','password':'vLieZJzd'
    }

    return this.http.request('POST', req, {headers, params, 'responseType':"text"})
  }

  /**
   * Upload a file to the specific path in FileCloud server.
   * @param fileToUpload The file that needs to be uploaded.
   * @param uploadPath The path where to upload the file in FileCloud server.
   * 
   * @returns Nothing is returned.
   */
  postFile(fileToUpload: File, uploadPath: string) {
    const appname = "Chrome/56.0.2924.87";
    // const endpoint = this.url + '/core/upload' + '?appname=' + appname + '&path=' + uploadPath + '&offset=0&complete=1&filename=' + fileToUpload.name;

    const formData: FormData = new FormData();

    formData.append('Image', fileToUpload, fileToUpload.name);

    const req = this.url + '/core/upload'
    const headers = new HttpHeaders({
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })

    const params = {
      'path':uploadPath,
      'offset':'0', 
      'complete':'1',
      'filename':fileToUpload.name,
      'appname':'explorer'
    }

    this.http.request('POST', req, {'body': formData, headers, params, 'responseType':"text"})
    .subscribe(resp => {
      console.log(resp)
    })
  }

  /**
   * Create a folder named as the case number in FileCloud server.
   * @param caseNumber A case number which is the name of the folder to be created.
   * 
   * @returns Nothing is returned.
   */
  createFolder(caseNumber: string) { 

    // const req = 'https://company3.filecloudonline.com' + '/app/explorer/createfolder'
    const req = this.url + '/app/explorer/createfolder'

    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })

    const params = {
      'name': caseNumber,
      'path': '/annro873'
    }

    this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp)
    })

  }

  doSearch(caseNr:string, searchloc:string) : boolean {
    // const req = this.url + '/core/dosearch'

    // const headers = new HttpHeaders({
    //   'Content-Type':  'application/x-www-form-urlencoded',
    //   'Accept':  'application/xml',
    //   'Response-Type': 'text',
    //   'Access-Control-Allow-Origin': '*',
    // })

    // const params = {
    //   'searchstring': caseNr,
    //   'path': searchloc
    // }

    // this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
    //   console.log(resp)
    // })

    
    // let data =  this.http.request('POST', req, {headers, params, 'responseType':"text"}).toPromise();
    
    // return true;
    this.userLogin1().subscribe(resp => {
        console.log(resp);  
        this.search(caseNr, searchloc);
    });

    return true;
  }

  private search(caseNr:string, searchloc:string) {
    const req = this.url + '/core/dosearch'

    const headers = new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
      'Accept':  'application/xml',
      'Response-Type': 'text',
      'Access-Control-Allow-Origin': '*',
    })

    const params = {
      'searchstring': caseNr,
      'searchloc': searchloc,
    }

    this.http.request('POST', req, {headers, params, 'responseType':"text"}).subscribe(resp => {
      console.log(resp)
    })

    
    // let data =  this.http.request('POST', req, {headers, params, 'responseType':"text"}).toPromise();
    
    // return true;
  }

  // private async search(observe : Observable<any>): Promise<any> {
  //     let response: Promise<any> = await observe.toPromise();

  //     return response;
  // }

}