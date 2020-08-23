/*
============================================
; Title: not-found.component.ts
; Author: Professor Krasso
; Date: 22 Aug 2020
; Modified By: Angel Padilla
; Description: This component will display a 404 default page and can re-route to home component
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
