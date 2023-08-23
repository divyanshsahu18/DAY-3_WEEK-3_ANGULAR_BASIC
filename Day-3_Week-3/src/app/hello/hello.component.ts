import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  name: string='Divyansh';
  color: string = 'blue';

  changeColor() {
    // Generate a random color (for demonstration purposes)
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    this.color = colors[randomIndex];
  }
}
