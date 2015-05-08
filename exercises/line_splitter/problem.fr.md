## Défi

Vous allez recevoir dans `process.argv[2]` le chemin d’un fichier.

Lisez ce fichier et découpez-le au niveau des sauts de ligne (`'\n'`).  Affichez un tampon par ligne dans la console.

Points bonus si vous n’utilisez pas `.toString()` !

## Conseils

Les `Buffer`s ont une méthode `.slice(…)` qui peut être utilisée pour récupérer une sous-partie du tampon en tant que vue (pas de copie en mémoire).

Points bonus en plus si vous n’utilisez PAS `fs.readFileSync(…)`.

La documentation de `Buffer` est disponible ici :

  http://nodejs.org/api/all.html#all_buffer

Ou hors-ligne, directement sur votre machine :

  {rootdir}/docs/node-api-docs.html#all_buffer

Pour obtenir davantage d’informations de débogage lorsque vous exécutez `{appname} run program.js`, vous pouvez utiliser `console.error` plutôt que `console.log`.
