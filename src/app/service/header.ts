import { HttpHeaders } from '@angular/common/http';

export const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('src', 'WEB');
