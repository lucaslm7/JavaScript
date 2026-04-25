import { useState } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  function adicionarTarefa() {
    if(input) {
      setTarefas([...tarefas, input]);
      setInput("");
    }
  }

  function removerTarefa(indexParaRemover) {
    const novasTarefas = tarefas.filter((_, indexAtual) => indexAtual !== indexParaRemover);
    setTarefas(novasTarefas);
  }

  return (

    <div className="container mt-5">
      
      <h1 className="text-center mb-4">Minha Lista de Tarefas</h1>
      
      
      <div className="input-group mb-3">
        <input 
          type="text"
          className="form-control" 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          placeholder="Digite uma nova tarefa..." 
        />
        <button 
          className="btn btn-primary" 
          onClick={adicionarTarefa}
        >
          Adicionar
        </button>
      </div>
      
      <ul className="list-group">
        {tarefas.map((tarefa, index) => (
          <li 
            key={index} 
            
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {tarefa}
            <button 
              className="btn btn-danger btn-sm" // btn-danger = cor vermelha. btn-sm = botão pequeno
              onClick={() => removerTarefa(index)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;