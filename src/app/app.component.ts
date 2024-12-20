import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AiConversationalComponent } from './components/ai-conversational/ai-conversational.component';
import { DataVisualComponent } from './components/data-visual/data-visual.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    SidebarComponent,
    AiConversationalComponent,
    DataVisualComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'UI-Task';
}
