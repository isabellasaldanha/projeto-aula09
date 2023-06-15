let saida = "";

function enviarMensagem() {
    saida = document.getElementById('myId01').value;

    const url = '/insereMensagem'; 
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ matrix: saida }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao enviar os dados');
        }
        console.log('Dados enviados com sucesso');
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      });
}
