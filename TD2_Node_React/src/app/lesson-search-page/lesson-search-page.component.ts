import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Ajouter CommonModule

@Component({
  selector: 'app-lesson-search-page',
  templateUrl: './lesson-search-page.component.html',
  styleUrls: ['./lesson-search-page.component.css'],
  imports: [CommonModule]  // Ajout du CommonModule ici
})
export class LessonSearchPageComponent {
  // Variables pour les critères de recherche
  title: string = '';
  description: string = '';
  category: string = '';
  level: string = '';
  tags: string = '';
  author: string = '';
  lastModifiedDateStart: string = '';
  lastModifiedDateEnd: string = '';
  numericalRangeStart: number | null = null;
  numericalRangeEnd: number | null = null;
  searchMode: 'basic' | 'advanced' = 'basic'; // Pour savoir si on est en mode avancé ou basique
  stringOperators = ['contains', 'like', 'startsWith', 'exact'];
  selectedStringOperator: string = 'contains'; // Valeur par défaut
}
