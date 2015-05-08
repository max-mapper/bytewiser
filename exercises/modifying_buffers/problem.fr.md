Les tampons sont similaires aux tableaux, en ceci qu’on peut y lire et écrire des valeurs à des positions spécifiques.

## Défi

Écrivez un programme qui prend le premier tampon écrit sur `process.stdin`, remplace toutes les occurrences de `.` avec `!`, et logue l’objet `Buffer` ainsi mis à jour.

Points bonus si vous n’appelez jamais `.toString()` sur votre tampon !

## Conseils

Les `Buffer`s ont une méthode `.write` que vous pouvez utiliser pour placer un caractère à
un endroit précis, ainsi qu’un accès par indexation indirecte (`[…]`) comme pour les
tableaux, cependant les caractères eux-mêmes doivent être désignés par un code numérique
normé (ASCII, UTF-8, etc.).

Par exemple, la valeur numérique ASCII du caractère `.` est 46.

La documentation de `Buffer` est disponible ici :

  http://nodejs.org/api/all.html#all_buffer

Ou hors-ligne, directement sur votre machine :

  {rootdir}/docs/node-api-docs.html#all_buffer

Pour obtenir davantage d’informations de débogage lorsque vous exécutez `{appname} run program.js`, vous pouvez utiliser `console.error` plutôt que `console.log`.
