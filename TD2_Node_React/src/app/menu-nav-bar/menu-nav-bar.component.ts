import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-nav-bar',
  templateUrl: './menu-nav-bar.component.html',
  styleUrls: ['./menu-nav-bar.component.css']
})
export class MenuNavBarComponent {

  // Propriété pour simuler l'état de connexion de l'utilisateur
  isLoggedIn: boolean = false;

  constructor() { }

  // Méthode pour se connecter/déconnecter
  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  // Autres méthodes pour gérer les actions de menu (comme logout, settings, etc.)
  onLogout() {
    console.log('Logging out...');
    this.isLoggedIn = false;
    // Implémente ici la logique de déconnexion (par exemple, effacer les tokens, rediriger l'utilisateur)
  }

  onLogin() {
    console.log('Logging in...');
    this.isLoggedIn = true;
    // Implémente ici la logique de connexion (par exemple, récupérer un token, rediriger l'utilisateur)
  }
}
