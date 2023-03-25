import { Component, ViewChild } from '@angular/core';
import { Annotation, NgxAnnotateTextComponent } from "ngx-annotate-text";
import { ApiService } from './api.service';
import { Data, dataToPush } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  @ViewChild('annotateText') ngxAnnotateText?: NgxAnnotateTextComponent;

  text =
    '3+ years Swift & Objective-C and experience with 105 internals Experience building an entire app fromscratch and ideally a portfolio of apps featured in the App Store Someone who knows every trick in the book on UTtransitions, network communication and memory/battery efficiency Strong UT/design skill experience is a plus';

  annotations: Annotation[] = [
    new Annotation(3, 11, 'SKILLS', '#0d6efd'),
    new Annotation(36, 45, 'EXPERIENCE', '#dc3545'),
    new Annotation(47, 52, 'DIPLOMA', '#198754'),
    new Annotation(77, 85, 'DIPLOMA MAJOR', '#6c757d'),
  ];

  events: String[] = [];
  data_events: object[] = [];
  constructor(private apiService: ApiService) { }

  postData() {
    console.log('post data to django');
    for (let index = 0; index < this.annotations.length; index++) {
      const element = this.events[index];
      console.log(this.annotations[index]);
      this.data_events.push(
        {
          start: this.annotations[index].startIndex,
          end: this.annotations[index].endIndex,
          label: this.annotations[index].label,
          text: this.annotations[index].text,
        }
      )
    console.log('-------------------------------------')
    console.log(this.data_events);
    this.apiService.postData(this.data_events).subscribe(res => {
      console.log(res);
    });
    }
  }

  addAnnotation(label: string, color: string): void {
    if (!this.ngxAnnotateText) {
      return;
    }

    const selection = this.ngxAnnotateText.getCurrentTextSelection();
    if (!selection) {
      return;
    }

    if (this.ngxAnnotateText.isOverlappingWithExistingAnnotations(selection)) {
      alert('The selected text is already annotated.');
      return;
    }

    const annotation = new Annotation(
      selection.startIndex,
      selection.endIndex,
      label,
      color
    );
    this.annotations = this.annotations.concat(annotation);
    this.events.push(`Added '${annotation}'`);
  }

  onClickAnnotation(annotation: Annotation) {
    this.events.push(`Clicked on '${annotation}'`);
  }

  onRemoveAnnotation(annotation: Annotation): void {
    this.events.push(`Removed '${annotation}'`);
  }
}

