## Défi

Vous allez recevoir dans `process.argv[2]` le chemin d’un fichier.

Lisez ce fichier et découpez-le autour des sauts de ligne (`'\n'`).  Loguez un buffer par ligne.

Points bonus si vous n’utilisez pas `.toString()` !

## Conseils

Les buffers ont une méthode `.slice(…)` qui peut être utilisée pour récupérer une sous-partie du buffer en tant que vue (pas de copie en mémoire).

Points bonus en plus si vous n’utilisez PAS `fs.readFileSync(…)`.

La documentation de `Buffer` est disponible ici :

  http://nodejs.org/api/all.html#all_buffer

Ou hors-ligne, directement sur votre machine :

  {rootdir}/docs/node-api-docs.html#all_buffer

Pour obtenir davantage d’informations de débogage lorsque vous exécutez `{appname} run program.js`, vous pouvez utiliser `console.error` plutôt que `console.log`.
