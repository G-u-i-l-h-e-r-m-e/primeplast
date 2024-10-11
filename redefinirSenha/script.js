
const mostrarSenha = document.getElementById("mostrarSenha");

mostrarSenha.addEventListener('click', () => {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';  
    } else {
        senhaInput.type = 'password'; 
    }
});


const mostrarConfirmacao = document.getElementById("mostrarConfirmacao");


mostrarConfirmacao.addEventListener('click', () => {
    if (confirmarSenhaInput.type === 'password') {
        confirmarSenhaInput.type = 'text';  
    } else {
        confirmarSenhaInput.type = 'password'; 
    }
});

        const senhaInput = document.getElementById('senha');
        const confirmarSenhaInput = document.getElementById('confirmarSenha');
        const qtdCaracter = document.getElementById('qtdCaracter');
        const letra = document.getElementById('letra');
        const numero = document.getElementById('numero');
        const caracterEspecial = document.getElementById('caracterEspecial');

        function validarSenha() {
            const senha = senhaInput.value;

            if (senha.length >= 6) {
                qtdCaracter.classList.add('valid'); 
                qtdCaracter.classList.remove('invalid');
            } else {
                qtdCaracter.classList.remove('valid');
                qtdCaracter.classList.add('invalid');
            }

            
            if (/[a-zA-Z]/.test(senha)) {
                letra.classList.add('valid');
                letra.classList.remove('invalid');
            } else {
                letra.classList.remove('valid');
                letra.classList.add('invalid');
            }

            
            if (/\d/.test(senha)) {
                numero.classList.add('valid');
                numero.classList.remove('invalid');
            } else {
                numero.classList.remove('valid');
                numero.classList.add('invalid');
            }

            
            if (/[@$!%*?&]/.test(senha)) {
                caracterEspecial.classList.add('valid');
                caracterEspecial.classList.remove('invalid');
            } else {
                caracterEspecial.classList.remove('valid');
                caracterEspecial.classList.add('invalid');
            }
        }
      
        senhaInput.addEventListener('input', validarSenha);

        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault(); 

            const senha = senhaInput.value.trim();
            const confirmarSenha = confirmarSenhaInput.value.trim();

           
            if (!senha || !confirmarSenha) {
                alert("Por favor, preencha todos os campos!");
                return;
            }

            
            if (senha !== confirmarSenha) {
                alert("As senhas não coincidem!");
                return;
            }

            alert("Senha atualizada com sucesso!");
          
        });