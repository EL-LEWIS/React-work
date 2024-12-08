# Instalaçao:

Iniciando com a instalaçao do (npx create-react-app task-manager) e entrando na pasta task-manager, instalando npm install prop-types 

# Configuraçoes:

No arquivo app.js fazendo o cabesalho e uma seçao para exibir as tarefas

PROGRAMA:

import React from 'react';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <TaskContainer />
      </main>
    </div>
  );
}

export default App;

Dentro do cabesalho inserir um titulo usando o header e criando um arquivo do mesmo

PROGRAMA:

function Header() {
  return <h1>Gerenciador de Tarefas</h1>;
}

export default Header;

Dentro da seçao usando o  TaskContainer para exibir as tarefas

PROGRAMA:

const TaskContainer = () => {
  return (
    <>
      <div>Tarefas</div>
    </>
  );
};

## Atualizando o REACT

No arquivo TaskContainer.js, use React.Fragment para envolver os itens sem adicionar um nó extra no
 DOM e adcionando uma lista de tarefas ficticias no componente

PROGRAMA:
function TaskContainer() { 
return ( 
<React.Fragment> 
<div className="task"> 
<h3>Tarefa 1</h3> 
<p>Descrição da Tarefa 1</p> 
</div> 
<div className="task"> 
<h3>Tarefa 2</h3> 
<p>Descrição da Tarefa 2</p> 
</div> 
</React.Fragment> 
  ); 
} 

Depois crie um novo arquivo na pasta components chamada Task.js adcionando o conteudo do arquivo da aula e atualizando o Task com o programa recente do arquivo da aula

PROGRAMA:

function TaskContainer() { 
const tasks = [ 
    { 
id: 1, title: 'Tarefa 1', description: 'Descrição da Tarefa 1' }, 
    { 
  ]; 
id: 2, title: 'Tarefa 2', description: 'Descrição da Tarefa 2' }, 
return ( 
<div> 
      {tasks.map((task) => ( 
<Task key={task.id} title={task.title} description={task.description} /> 
      ))} 
</div> 
  ); 
} 


## Atualizaçao:
Adcionando um botao para gerar outras tasks mas com alteraçao das mesmas.
as tasks foram alteradas para darksouls e adcionando informaçoes 

Resultado gerado:

![**alt text**](<Captura de tela 2024-12-08 175917.png>)