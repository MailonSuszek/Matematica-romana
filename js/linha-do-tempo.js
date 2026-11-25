// Linha do tempo interativa: revelação ao rolar, expansão dos eventos
// e barra de progresso acompanhando a leitura.
(function () {
  var raiz = document.getElementById('linha-do-tempo');
  if (!raiz) return;

  var eventos = Array.prototype.slice.call(raiz.querySelectorAll('.tl-evento'));
  var progresso = document.getElementById('tl-progresso');
  var reduzir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  raiz.classList.add('tl-js');

  // Expansão dos detalhes
  for (var i = 0; i < eventos.length; i++) {
    (function (evento) {
      var botao = evento.querySelector('.tl-cabecalho');
      var detalhe = evento.querySelector('.tl-detalhe');
      if (!botao || !detalhe) return;

      var titulo = evento.querySelector('.tl-titulo');
      detalhe.setAttribute('role', 'region');
      if (titulo) detalhe.setAttribute('aria-label', titulo.textContent);

      var abertoInicial = evento.classList.contains('aberto');
      botao.setAttribute('aria-expanded', abertoInicial ? 'true' : 'false');
      detalhe.setAttribute('aria-hidden', abertoInicial ? 'false' : 'true');

      botao.addEventListener('click', function () {
        var aberto = !evento.classList.contains('aberto');
        evento.classList.toggle('aberto', aberto);
        botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
        detalhe.setAttribute('aria-hidden', aberto ? 'false' : 'true');
        atualizarProgresso();
      });
    })(eventos[i]);
  }

  // Revelação suave conforme a rolagem
  if ('IntersectionObserver' in window && !reduzir) {
    var observador = new IntersectionObserver(function (entradas) {
      for (var j = 0; j < entradas.length; j++) {
        if (entradas[j].isIntersecting) {
          entradas[j].target.classList.add('visivel');
          observador.unobserve(entradas[j].target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    for (var k = 0; k < eventos.length; k++) observador.observe(eventos[k]);
  } else {
    for (var m = 0; m < eventos.length; m++) eventos[m].classList.add('visivel');
  }

  // Barra de progresso da linha central
  var agendado = false;

  function atualizarProgresso() {
    agendado = false;
    if (!progresso) return;

    var retangulo = raiz.getBoundingClientRect();
    var alturaJanela = window.innerHeight || document.documentElement.clientHeight;
    var altura = raiz.offsetHeight;
    if (!altura) {
      progresso.style.height = '0px';
      return;
    }

    var percorrido = alturaJanela * 0.5 - retangulo.top;
    var fracao = Math.max(0, Math.min(1, percorrido / altura));
    progresso.style.height = Math.round(fracao * altura) + 'px';
  }

  function pedirAtualizacao() {
    if (agendado) return;
    agendado = true;
    if (window.requestAnimationFrame) {
      window.requestAnimationFrame(atualizarProgresso);
    } else {
      atualizarProgresso();
    }
  }

  window.addEventListener('scroll', pedirAtualizacao, { passive: true });
  window.addEventListener('resize', pedirAtualizacao);
  window.addEventListener('orientationchange', pedirAtualizacao);

  if ('ResizeObserver' in window) {
    new ResizeObserver(pedirAtualizacao).observe(raiz);
  }

  // Primeiro preenchimento sem animação; depois a barra acompanha a rolagem.
  if (progresso) progresso.style.transition = 'none';
  atualizarProgresso();
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(function () {
      if (progresso) progresso.style.transition = '';
    });
  } else if (progresso) {
    progresso.style.transition = '';
  }
})();
