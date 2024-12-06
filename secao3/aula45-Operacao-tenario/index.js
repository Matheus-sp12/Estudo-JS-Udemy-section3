// ? 'valor verdadeiro' : 'Valor para falso'

const pontuacao = 1000;

if (pontuacao >= 1000) {
    console.log('usuario VIP');
}else {
    console.log('Usuario normal');
}

// utilizando o ternario

const nivelUsuario = pontuacao >= 1000 ? 'Usuario VIP' : 'Usuario normal';