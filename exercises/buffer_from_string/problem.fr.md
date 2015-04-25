Dans Node.js, un tampon (**buffer**) est un objet qui permet de travailler sur divers types de données binaires.  Le type `Buffer` est accessible globalement.  La plupart des APIs du noyau Node (par ex. `http`, `net`, `fs`) vous fourniront des buffers, et feront leur propre travail plus rapidement si vous leur passez des buffers vous aussi.

## Défi

Écrivez un programme Node qui affiche à l’aide de `console.log` un objet `Buffer` contenant le texte `"bytewiser"`.

## Conseils

La documentation de `Buffer` est disponible ici :

  http://nodejs.org/api/all.html#all_buffer

Ou hors-ligne, directement sur votre machine :

  {rootdir}/docs/node-api-docs.html#all_buffer

Pour obtenir davantage d’informations de débogage lorsque vous exécutez `{appname} run program.js`, vous pouvez utiliser `console.error` plutôt que `console.log`.
