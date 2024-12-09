function soma(x, y) {
    if (typeof x != 'number' || typeof y != 'number') {
        throw new Error('x e y Precisam ser numeros.');
    }
    return x + y;
}

try {
    console.log(soma(1, 2));
} catch (error) {
    console.log(error)
    console.log("alguma coisa amigavel pro usuario")
}

// Try, catch e Finally

try {
  //é executada quando não há erros  
  //Podemos ter um try dentro de outro, mas não coloca o try só catch
} catch (error) {
    // é executado quando há erros
} finally {
    // é executado sempre, mas não é obrigatorio colocar

}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.')
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}



const hora = retornaHora();
console.log(hora);