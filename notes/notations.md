# Key no React

## Por que unica?

3 momentos em que um componente é renderizado novamente no React: 1 - Quando o
estado altera; 2 - Quando a propriedade altera; 3 - Quando um componente pai
renderiza novamente.

Imagine as seguintes keys:
--------------

1, 2, 3, 4

--------------

1, 2, 3, 4, 5

neste exemplo, o React entende que a key 5 foi adicionada.
Então, ele renderiza apenas o componente com a key que foi adicionada.


## Por que não posso usar o indice do array?

```js
const posts = [1, 2, 3, 4, 5]
//             0, 1, 2, 3, 4

// caso o post mude a posição de um indice

const posts = [1, 2, 5, 4, 3]
//             0, 1, 2, 3, 4
```
Neste caso, ele pudei de ordem, mas nao mudou o item, e o React vai entender que precisa renderizar novamente.

# Comunicação entre componentes

Enviar estado de um componente pra o outro através das props

incluindo como propriedade em um componente filho e chamando do componente filho nas propridades.

# Closure no React

Sempre que for atualizar uma informação, e essa informação depende do que ela tinha anteriormente, é importante usar:

```js
const [likeCount, setLikeCount] = useState(0)

const handleLikeCount = () => {
  // modelo tradicional, porém nunca capta o valor atualizado do componente
  setLikeCount(likeCount +1)

  // modelo recomendado, pois capta o valor atualizado do componente
  setLikeCount((state) => {
    return state +1
  })
}
```
