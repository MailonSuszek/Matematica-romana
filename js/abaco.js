// Ábaco de fichas interativo (Instrumentos e Métodos de Cálculo)
// Quatro colunas (M, C, X, I), até 9 fichas em cada uma.
// Permite guardar um valor e somar/subtrair outro, mostrando a explicação.
(function () {
  var grade = document.getElementById('abaco-grade');
  if (!grade) return;

  var cols = [
    { letra: 'M', valor: 1000, nome: 'milhares' },
    { letra: 'C', valor: 100, nome: 'centenas' },
    { letra: 'X', valor: 10, nome: 'dezenas' },
    { letra: 'I', valor: 1, nome: 'unidades' }
  ];
  var contas = [0, 0, 0, 0];
  var memoria = null;

  var elDec = document.getElementById('abaco-decimal');
  var elRom = document.getElementById('abaco-romano');
  var elMem = document.getElementById('abaco-memoria');
  var elPasso = document.getElementById('abaco-passo');

  function romano(n) {
    if (n === 0) return '—';
    var mapa = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    var s = '';
    for (var i = 0; i < mapa.length; i++) {
      while (n >= mapa[i][0]) {
        s += mapa[i][1];
        n -= mapa[i][0];
      }
    }
    return s;
  }

  function total() {
    var t = 0;
    for (var i = 0; i < cols.length; i++) t += contas[i] * cols[i].valor;
    return t;
  }

  function decompoe(n) {
    return [
      Math.floor(n / 1000) % 10,
      Math.floor(n / 100) % 10,
      Math.floor(n / 10) % 10,
      n % 10
    ];
  }

  function formata(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function desenha() {
    var html = '';
    for (var i = 0; i < cols.length; i++) {
      html += '<div class="abaco-col">';
      html += '<span class="abaco-letra">' + cols[i].letra + '</span>';
      html += '<span class="abaco-valor">' + formata(cols[i].valor) + '</span>';
      html += '<div class="abaco-trilho">';
      for (var r = 0; r < 9; r++) {
        var cheia = r < contas[i];
        html += '<button type="button" class="abaco-slot" data-col="' + i + '" data-row="' + r +
          '" aria-label="Ficha em ' + cols[i].nome + ', posição ' + (r + 1) + '">' +
          (cheia ? '<span class="abaco-ficha"></span>' : '') + '</button>';
      }
      html += '</div>';
      html += '<span class="abaco-conta">' + contas[i] + '</span>';
      html += '</div>';
    }
    grade.innerHTML = html;
  }

  function mostraValor() {
    var t = total();
    if (elDec) elDec.textContent = formata(t);
    if (elRom) elRom.textContent = romano(t);
  }

  function atualiza() {
    desenha();
    mostraValor();
  }

  function passo(txt) {
    if (elPasso) elPasso.textContent = txt;
  }

  grade.addEventListener('click', function (e) {
    var slot = e.target.closest ? e.target.closest('.abaco-slot') : null;
    if (!slot) return;
    var i = parseInt(slot.getAttribute('data-col'), 10);
    var r = parseInt(slot.getAttribute('data-row'), 10);
    // clicar numa ficha tira ela e as de cima; clicar no vazio completa até ali
    contas[i] = (r < contas[i]) ? r : r + 1;
    atualiza();
    passo('');
  });

  var botoes = document.querySelector('.abaco-botoes');
  if (botoes) {
    botoes.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button') : null;
      if (!b) return;
      var acao = b.getAttribute('data-ab');
      var t = total();

      if (acao === 'guardar') {
        memoria = t;
        if (elMem) elMem.textContent = 'Valor guardado: ' + formata(t) + ' (' + romano(t) + '). Agora monte o segundo número e clique em Somar ou Subtrair.';
        passo('');
        return;
      }

      if (acao === 'zerar') {
        contas = [0, 0, 0, 0];
        memoria = null;
        if (elMem) elMem.textContent = 'Nenhum valor guardado.';
        atualiza();
        passo('Ábaco zerado.');
        return;
      }

      if (acao === 'somar' || acao === 'subtrair') {
        if (memoria === null) {
          passo('Primeiro monte um número e clique em "Guardar valor".');
          return;
        }
        var a = memoria;
        var bb = t;
        var r = acao === 'somar' ? a + bb : a - bb;
        if (r < 0) {
          passo('O resultado seria negativo — o ábaco de fichas trabalha com números naturais.');
          return;
        }
        if (r > 9999) {
          passo('O resultado passa de 9.999, o limite deste ábaco de quatro colunas.');
          return;
        }

        var ca = decompoe(a);
        var cb = decompoe(bb);
        var i;
        if (acao === 'somar') {
          var levou = false;
          for (i = 0; i < 4; i++) if (ca[i] + cb[i] >= 10) levou = true;
          passo(formata(a) + ' + ' + formata(bb) + ' = ' + formata(r) + ' (' + romano(r) + '). ' +
            (levou
              ? 'Em alguma coluna passou de 9 fichas: 10 fichas foram trocadas por 1 ficha na coluna da esquerda (o "vai um").'
              : 'Nenhuma coluna passou de 9 fichas, então não foi preciso trocar fichas.'));
        } else {
          var emprestou = false;
          for (i = 0; i < 4; i++) if (ca[i] < cb[i]) emprestou = true;
          passo(formata(a) + ' − ' + formata(bb) + ' = ' + formata(r) + ' (' + romano(r) + '). ' +
            (emprestou
              ? 'Em alguma coluna faltaram fichas: 1 ficha da coluna da esquerda foi trocada por 10 na coluna atual (o "empresta um").'
              : 'Havia fichas suficientes em todas as colunas, então bastou retirá-las.'));
        }

        contas = decompoe(r);
        memoria = null;
        if (elMem) elMem.textContent = 'Nenhum valor guardado.';
        atualiza();
      }
    });
  }

  atualiza();
})();
