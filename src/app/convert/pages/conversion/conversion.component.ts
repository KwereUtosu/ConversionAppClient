import { Component, OnInit } from '@angular/core';
import { ALL_UNIT_TYPES } from './conversion.constants';
import { HttpClient } from '@angular/common/http';
import { ConversionService } from '../../service/conversion.service';
import { TeacherRequest } from '../models/teacher-request';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  public units: {
    temperature: any[];
    volume: any[]
  } = ALL_UNIT_TYPES;

  teacherRequest = new TeacherRequest();
  input: number;
  response: string;
  unit1: any;
  unit: any;
  answer: string;
  measurement: string;

  constructor(private httpClient: HttpClient,
              private conversionService: ConversionService) { }

  ngOnInit(): void {
    this.measurement = 'temperature';
  }

  submit() {
    this.teacherRequest.inputNumericalValue = this.input;
    this.teacherRequest.inputUnitOfMeasure = this.unit1;
    this.teacherRequest.studentResponse = this.response;
    this.teacherRequest.targetUnitOfMeasure = this.unit;
    this.conversionService.isValid(this.teacherRequest, this.measurement).subscribe(res => {
      this.answer = res.response;
    }
    );
  }

}
