import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrls: [
    './contact.component.scss',
    './contact.responsive.component.scss',
  ],
})
export class ContactComponent {
  isTestMode = false;
  mailSent = false;

  contactData = { name: '', email: '', message: '' };

  mailRequest = {
    url: 'https://scheker-badjaj.developerakademie.net/Mail/sendMail.php',
    body: (payload: unknown) => JSON.stringify(payload),
    options: {
      headers: { 'Content-Type': 'text/plain' },
      responseType: 'text' as const,
    },
  };  

  constructor(private http: HttpClient) {}

  scroll(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSubmit(form: NgForm): void {
    if (form.submitted && form.form.valid) {
      if (this.isTestMode) {
        form.resetForm();
        this.showSuccessMessage();
      } else {
        this.http
          .post(
            this.mailRequest.url,
            this.mailRequest.body(this.contactData),
            this.mailRequest.options
          )
          .subscribe({
            next: () => {
              form.resetForm();
              this.showSuccessMessage();
            },
            error: (err) => console.error(err),
          });
      }
    }
  }

  private showSuccessMessage(): void {
    this.mailSent = true;
    setTimeout(() => (this.mailSent = false), 2000);
  }
}