JSX - é uma extensão sintaxe do javascript. Permite que você escreva código HTML dentro do próprio javascript sem a necessidade de separar os arquivos um do outro. O react pega esse arquivo .jsx e transforma em um javascript puro, pois é a linguagem que os navegadores entendem.

Componentes - É a divisão das funções de interfaces do usuário. Basicamente você cria uma função para o botão, depois outra para barra de pesquisa... no final junta tudo.

Hook useState - É usado para gerenciar dados que mudam ao longo do tempo e que precisam refletir instantaneamente na tela.

Explicação sobre o código do App.jsx:
Primeiro foi importado o hook useState da biblioteca React.

Depois criada a função inicial do JS e criadas as funções de adicionar (com if(input)) para o usuário não adicionar uma tarefa vazia e remover cada atividade.

Incluir o container para deixar o site um pouco mais organizado e estruturado, com o container centraliza e da uma margem lateral. Todo o conteúdo fica dentro deste contêiner.

Criei o H1, o meu titulo principal.

Criei a div utilizando o Bootstrap<div className="input-group mb-3">, para o texto (adicionar uma nova tarefa) e o botão (adicionar) ficar na mesma linha e de forma mais organizada e bonita.

Logo após, criei uma lista não ordenada "ul" e utilizando o .map para percorrer toda a lista e exibir cada item.

Por fim, criei o botão de remover ao lado de cada item, como solicitado.