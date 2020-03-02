import { Injectable } from '@angular/core';
import * as toastr from 'toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  success({ message, title, options }: ToastrMessage) {
    toastr.success(message, title, options);
  }

  info({ message, title, options }: ToastrMessage) {
    toastr.info(message, title, options);
  }

  warning({ message, title, options }: ToastrMessage) {
    toastr.warning(message, title, options);
  }

  error({ message, title, options }: ToastrMessage) {
    toastr.error(message, title, options);
  }
}

export interface ToastrMessage {
  message: string;
  title?: string;
  options?: ToastrOptions;
}
