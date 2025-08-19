function buscarCEPv1() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição' + response.status);
            }
            return response.json(); 
        })
        .then(data => {
            Console.log(data);
            document.getElementById('resultado').innerText = JSON.stringify(data, null, 2);
            })

        .catch(error => {
           // console.error('Erro:', error);
        });

}

function buscarCEPv2() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            // Verifica se a resposta é válida
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            document.getElementById('resultado').innerText = JSON.stringify(data, null, 2);
        } else {
            console.error('Erro na requisição:', xhr.status);
        }
    };
    xhr.onerror = function() {
        console.error('Erro de Rede');
    };
    xhr.send();
}