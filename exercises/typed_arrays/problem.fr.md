Les tableaux typés (*Typed Arrays*) constituent une autre manière de manipuler des
données binaires.  Leur ajout à JS remonte à 2010, et on les trouve désormais dans la
plupart des navigateurs, grâce à la spécification WebGL pour la programmation 3D dans
les navigateurs.  Les tableaux typés n’ont pas autant de fonctionnalités que les `Buffer`s
de Node, mais ils ont l’énorme avantage de fonctionner également dans les navigateurs.

On trouve plusieurs variantes de tableau typés.  `Uint8Array` est celle qui ressemble le
plus à `Buffer`.  Le « U » dans « Uint » signifie « *Unsigned* », ce qui revient à dire
« entiers positifs ou nuls uniquement ».  À l’inverse, `Int8Array` permet de stocker des
valeurs positives comme négatives.

## Défi

Lisez un premier tampon depuis `process.stdin`, copiez tous ses octets dans un
`Uint8Array` puis loguez le représentation JSON textuelle de ce tableau typé.

## Conseils

La documentation des tableaux typés est disponible ici :

  https://developer.mozilla.org/fr/docs/Web/JavaScript/Tableaux_typ%C3%A9s

Par ailleurs, `JSON.stringify()` déchire !

Pour obtenir davantage d’informations de débogage lorsque vous exécutez `{appname} run program.js`, vous pouvez utiliser `console.error` plutôt que `console.log`.
