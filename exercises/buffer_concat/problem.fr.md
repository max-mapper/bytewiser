Les flux d'entrée/sortie dans Node (tels que ceux obtenus avec `fs.createReadStream(…)`)
produisent une succession de `Buffer`s (tampons) sur lesquels il est possible de travailler
au fur et à mesure de l’arrivée des données.  C’est une approche différente des méthodes
traditionnelles, qui exigent d’atetndre que l’ensemble des données soit disponible pour
commencer à travailler dessus.

L’avantage de ce fonctionnement est visible lorsqu’on lit ou télécharge un énorme
fichier : on peut commencer à le traiter immédiatement, par morceaux.  C’est tout
particulièrement utile quand les fichiers sont plus gros que votre RAM disponible.

Toutefois, il peut vous arriver de vouloir traiter le fichier comme un gros
`Buffer` unique.

## Défi

Écrivez un programme qui combine tous les tampons reçus sur `process.stdin` et
termine en écrivant un unique gros buffer sur la console.

Points bonus si vous utilisez un flux !

## Conseils

`Buffer.concat(…)`.

La documentation de `Buffer` est disponible ici :

  http://nodejs.org/api/all.html#all_buffer

Ou hors-ligne, directement sur votre machine :

  {rootdir}/docs/node-api-docs.html#all_buffer

Pour obtenir davantage d’informations de débogage lorsque vous exécutez `{appname} run program.js`, vous pouvez utiliser `console.error` plutôt que `console.log`.
