# Spoilers

Permet de cacher à l'utilisateur un élément d'une page et de lui afficher lorsqu'il cliquera sur un boutton "Afficher le spoiler".
*Le sélecteur :target de CSS3 possède un comportement identique.*

### Première version
Dans la version simpliste, il fallait ajouter toutes ses balises à un élément qui devait être caché. Le JavaScript agissait lors de l'appui sur le bouton, affichant le texte et retirant le bouton.
Cette version était assez répétitive à mettre en place pour plusieurs éléments à cacher.
```html
<p class="spoiler-container">
    <button>Afficher le spoiler</button>
    <span class="spoiler-content">Ce texte est à cacher</span>
</p>
```

### Deuxième version
Dans la deuxième version, il suffit simplement d'ajouter une classe "spoiler" à un élément qui doit être caché.
Le JavaScript s'occupera de cacher l'élement, de lui ajouter un bouton et de gérer la logique pour l'affichage lors d'un appui sur ce bouton.
```html
<p class="spoiler">
   Ce texte est à cacher
</p>
```
```html
<p>
    <span>A la fin du film,</span>
    <span>lors de la scène de fin, <span class="spoiler">le père meurt dans d'horribles souffrance.</span> C'était inattendu!</span>
</p>
```


> Vivien Frébourg
