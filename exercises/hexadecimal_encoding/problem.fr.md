## Défi

Votre programme va recevoir un nombre quelconque d’octets (valeurs numériques) dans `process.argv`.  Créez un `Buffer` qui contienne ces octets, et affichez sa représentation hexadécimale.

Par exemple, `process.argv` pourrait ressembler à ceci :

```js
  [ '/usr/bin/node', '/usr/local/lib/node_modules/bytewiser/exercises/hexadecimal_encoding/solution/solution.js', '14', '80', '243', '2' ]
```

Ou encore à cela :

```js
  [ '/usr/bin/node', '/usr/local/lib/node_modules/bytewiser/exercises/hexadecimal_encoding/solution/solution.js', '231', '127', '0', '8', '13' ]
```

Vous devez afficher une `String` contenant des paires de caractères (également connues sous le nom d’octets hexadécimaux), dans laquelle chaque paire représente une valeur unique du tableau d’octets, sous forme hexadécimale.  Par exemple :

```
000f1803fa53
```

## Conseils

Lorsque vous créez un objet `Buffer`, vous pouvez passer comme premier argument un tableau d’octets, auquel cas vous recevrez un nouvel objet `Buffer` avec tous ces octets à l’intérieur, équipé de toutes les méthodes figurant dans la documentation officielle.

Puisque vous devez afficher le résultat sous forme hexadécimale, jetez un œil à la méthode `Buffer#toString()`.

Pour passer d’un objet `Buffer` à une `String`, vous devez indiquer l’encodage que vous souhaitez.  Par exemple, si nous voulons représenter le contenu d’un tampon en tant que texte au format Base64, nous utiliserons l’argument idoine, comme ceci :

```js
var buffer = new Buffer([0x01, 0xFF]);
console.log(buffer.toString('base64'));
```

Remarquez au passage que ci-dessus, nous créons l’objet `Buffer` à partir d’un tableau de nombres utilisant la syntaxe littérale hexadécimale, comme l’indiquent les préfixes `0x`.

La documentation de la classe `Buffer`, avec toutes les méthodes et encodages possibles, peut être consultée ici :

  {rootdir:/node_apidoc/buffer.html}
