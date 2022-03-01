import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  name!: string;
  departments: string[] = [];

  constructor(private readonly fb: FormBuilder, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['departments']

    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name'];
      });
    this.contactForm = this.initForm()
    // this.onPathValue()
    // this.onSetValue()
  }

  onPathValue(): void {
    this.contactForm.patchValue({ name: 'Andrés' })
  }

  onSetValue(): void {
    // this.contactForm.patchValue({ cpmment: 'Hola mundo' })
  }

  onSubmit(): void {
    console.log('Form ->', this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required, Validators.maxLength(255)]],
    })
  }
}
