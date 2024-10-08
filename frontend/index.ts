import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { bootstrapApplication } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <input type="text" id="name" [(ngModel)]="name" placeholder="Enter a name here" />
    <hr />
    <h1>Hello World!</h1>
  `,
  imports: [FormsModule],
})
export class DemoComponent {
  name = "";
}

bootstrapApplication(DemoComponent);
