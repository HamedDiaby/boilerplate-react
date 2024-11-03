// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customtheme: { 
          // Couleurs principales de ton thème
          "primary": "#5588FB",               // Couleur de base pour les éléments primaires
          "primary-focus": "#416EDC",         // Nuance plus foncée pour les hovers d'éléments primaires
          "primary-content": "#ffffff",       // Couleur de texte sur les boutons primaires

          "secondary": "#FD638F",             // Couleur secondaire pour les éléments d’accentuation
          "secondary-focus": "#E44A73",       // Nuance plus foncée pour les hovers d'éléments secondaires
          "secondary-content": "#ffffff",     // Couleur de texte sur les boutons secondaires

          // Couleurs supplémentaires pour les accents et les arrière-plans
          "accent": "#F9A826",                // Couleur accentuée pour attirer l’attention, comme des boutons spéciaux
          "accent-focus": "#E4951C",          // Nuance plus foncée pour les hovers sur les éléments d’accentuation
          "accent-content": "#ffffff",        // Couleur de texte sur les boutons d’accentuation

          "neutral": "#3D4451",               // Couleur neutre pour les éléments de fond ou de carte
          "neutral-focus": "#2B2F37",         // Couleur plus foncée pour les hovers sur les éléments neutres
          "neutral-content": "#ffffff",       // Couleur de texte sur les éléments neutres

          "base-100": "#ffffff",              // Fond de base en blanc pour les sections principales
          "base-200": "#F1F5F9",              // Fond plus léger pour les sections secondaires
          "base-300": "#E2E8F0",              // Fond encore plus léger pour les bordures
          "base-content": "#1F2937",          // Couleur du texte par défaut

          // Couleurs de statut
          "info": "#3ABFF8",                  // Bleu clair pour les messages d’information
          "info-focus": "#2A9ED5",            // Couleur de survol pour les messages d’information
          "info-content": "#ffffff",          // Couleur de texte pour les messages d’information

          "success": "#36D399",               // Vert pour les messages de succès
          "success-focus": "#2AB07C",         // Couleur de survol pour les succès
          "success-content": "#ffffff",       // Couleur de texte pour les succès

          "warning": "#FBBD23",               // Jaune pour les messages d’avertissement
          "warning-focus": "#D69E1F",         // Couleur de survol pour les avertissements
          "warning-content": "#ffffff",       // Couleur de texte pour les avertissements

          "error": "#F87272",                 // Rouge doux pour les messages d’erreur
          "error-focus": "#E15555",           // Couleur de survol pour les erreurs
          "error-content": "#ffffff",         // Couleur de texte pour les erreurs
        },
      },
      "dark", // Optionnel : ajoute le thème `dark` de DaisyUI
      "light" // Optionnel : ajoute le thème `light` de DaisyUI
    ],
  },
};