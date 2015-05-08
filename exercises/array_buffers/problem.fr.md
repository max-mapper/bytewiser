Les tampons de données (*Array Buffers*) sont utilisés en interne par les tableaux typés.
Alors que `Buffer` dans Node contient à la fois les octets bruts et leur encodage/vue,
les tampons de données ne contiennent que les octets bruts : il vous faut créer un
tableau typé par-dessus le tampon de données pour accéder aux données.

Lorsqu’on crée un tableau typé sans lui fournir un tampon de données par-dessus lequel
fonctionner, le tableau typé crée son propre tampon de données en interne.

## Défi

Récupérer la valeur numérique fournie dans `process.argv[2]`, et écrivez-la comme
premier élément d’un `Uint32Array` à élément unique.  Puis créez un `Uint16Array`
basé sur le tampon du `Uint32Array` ainsi préparé, et loguez sur la console la
représentation JSON de ce `Uint16Array`.

Bonus : efforcez-vous d’expliquer l’importance de la valeur numérique fournie dans
`process.argv[2]`, ou en tout cas d’expliquer pourquoi le `Uint16Array` a les valeurs
qu’il a.

## Conseils

La documentation des tableaux typés est disponible ici :

  https://developer.mozilla.org/fr/docs/Web/JavaScript/Tableaux_typ%C3%A9s

Par ailleurs, `JSON.stringify()` déchire !

Pour obtenir davantage d’informations de débogage lorsque vous exécutez `{appname} run program.js`, vous pouvez utiliser `console.error` plutôt que `console.log`.
