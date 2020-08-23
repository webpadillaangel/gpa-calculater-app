/*
============================================
; Title: gpa.component.ts
; Author: Professor Krasso
; Date: 22 Aug 2020
; Modified By: Angel Padilla
; Description: gpa component simply displays the gpa it is passed in and uses a format pipe
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.scss'],
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal: number;

  constructor() {}

  ngOnInit(): void {}
}
