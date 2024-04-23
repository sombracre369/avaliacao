function validate() {
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
  
    // Verificar se o login e a senha estão corretos (substitua com suas próprias credenciais)
    var loginCorreto = "joao";
    var senhaCorreta = "123";
  
    if (usuario === loginCorreto && senha === senhaCorreta) {
      // Redirecionar para outra página se as credenciais estiverem corretas
      window.location.href = "home.html";
    } else {
      // Exibir mensagem de erro
      alert("ta errado seu demonio ");
    }
  }