// Ábaco de fichas interativo (Instrumentos e Métodos de Cálculo)
// Duas formas de representação:
//  - completo: até 9 fichas por coluna (M, C, X, I);
//  - simplificado: 1 ficha superior (vale 5) + até 4 fichas inferiores por coluna.
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
  var modo = 'completo';

  var elDec = document.getElementById('abaco-decimal');
  var elRom = document.getElementById('abaco-romano');
  var elMem = document.getElementById('abaco-memoria');
  var elPasso = document.getElementById('abaco-passo');
  var elMult = document.getElementById('abaco-multiplicacao');

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

  function limpaMultiplicacao() {
    if (elMult) {
      elMult.hidden = true;
      elMult.innerHTML = '';
    }
  }

  // Gera os produtos parciais do método das ordens mais altas
  // (IBIAPINA, 2018): cada algarismo de uma coluna é multiplicado
  // pelos algarismos das colunas do outro fator; o produto é colocado
  // na coluna m + n − 1, contando as colunas a partir das unidades.
  function multiplicaPassos(a, b) {
    var N = cols.length;
    var da = decompoe(a);
    var db = decompoe(b);
    var itens = [];
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        var x = da[i], y = db[j];
        if (!x || !y) continue;
        var p = x * y;
        var alvo = i + j - (N - 1);
        if (alvo < 0) return null;
        var un = p % 10;
        var dez = Math.floor(p / 10);
        var coluna = N - alvo;
        var destino;
        if (p < 10) {
          destino = p + ' na coluna ' + coluna + ' (' + cols[alvo].letra + ')';
        } else {
          if (alvo === 0) return null;
          destino = p + ' na coluna ' + coluna + ': ' + un + ' em ' + cols[alvo].letra +
            ' e ' + dez + ' em ' + cols[alvo - 1].letra;
        }
        itens.push('<li><strong>' + x + ' × ' + y + ' = ' + p + '</strong> → ' + destino +
          ' <span class="abaco-mult-regra">(colunas ' + (N - i) + ' + ' + (N - j) +
          ' − 1 = ' + coluna + ')</span></li>');
      }
    }
    return itens;
  }

  function desenha() {
    var html = '';
    for (var i = 0; i < cols.length; i++) {
      var c = contas[i];
      var r;
      html += '<div class="abaco-col">';
      html += '<span class="abaco-letra">' + cols[i].letra + '</span>';
      html += '<span class="abaco-valor">' + formata(cols[i].valor) + '</span>';

      if (modo === 'simplificado') {
        var temTopo = c >= 5;
        var baixas = c % 5;
        html += '<button type="button" class="abaco-superior' + (temTopo ? ' com-ficha' : '') +
          '" data-col="' + i + '" data-sup="1" aria-label="Ficha superior (5) em ' + cols[i].nome + '">' +
          (temTopo ? '<span class="abaco-ficha ficha-topo"></span>' : '') + '</button>';
        html += '<span class="abaco-valor">5</span>';
        html += '<div class="abaco-trilho">';
        for (r = 0; r < 4; r++) {
          html += '<button type="button" class="abaco-slot" data-col="' + i + '" data-row="' + r +
            '" aria-label="Ficha inferior em ' + cols[i].nome + ', posição ' + (r + 1) + '">' +
            (r < baixas ? '<span class="abaco-ficha"></span>' : '') + '</button>';
        }
        html += '</div>';
      } else {
        html += '<div class="abaco-trilho">';
        for (r = 0; r < 9; r++) {
          html += '<button type="button" class="abaco-slot" data-col="' + i + '" data-row="' + r +
            '" aria-label="Ficha em ' + cols[i].nome + ', posição ' + (r + 1) + '">' +
            (r < c ? '<span class="abaco-ficha"></span>' : '') + '</button>';
        }
        html += '</div>';
      }

      html += '<span class="abaco-conta">' + c + '</span>';
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

  // clicar numa ficha tira ela (e as de cima); clicar no vazio completa até ali
  grade.addEventListener('click', function (e) {
    var alvo = e.target.closest ? e.target.closest('.abaco-slot, .abaco-superior') : null;
    if (!alvo) return;
    var i = parseInt(alvo.getAttribute('data-col'), 10);

    if (alvo.getAttribute('data-sup')) {
      contas[i] = contas[i] >= 5 ? contas[i] - 5 : Math.min(9, contas[i] + 5);
    } else {
      var r = parseInt(alvo.getAttribute('data-row'), 10);
      if (modo === 'completo') {
        contas[i] = (r < contas[i]) ? r : r + 1;
      } else {
        var topo = contas[i] >= 5 ? 5 : 0;
        var baixas = contas[i] - topo;
        var novas = (r < baixas) ? r : r + 1;
        contas[i] = Math.min(9, topo + novas);
      }
    }
    limpaMultiplicacao();
    atualiza();
    passo('');
  });

  // alterna entre o ábaco completo e a simplificação (ficha superior = 5)
  var modos = document.querySelector('.abaco-modos');
  if (modos) {
    modos.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button[data-modo]') : null;
      if (!b) return;
      modo = b.getAttribute('data-modo');
      var botoes = modos.querySelectorAll('button');
      for (var k = 0; k < botoes.length; k++) {
        botoes[k].setAttribute('aria-pressed', botoes[k] === b ? 'true' : 'false');
      }
      limpaMultiplicacao();
      atualiza();
      passo(modo === 'simplificado'
        ? 'Modo simplificado: cada coluna tem uma ficha superior que vale 5 e até 4 fichas inferiores.'
        : 'Modo completo: cada coluna tem até 9 fichas, uma por unidade.');
    });
  }

  var botoes = document.querySelector('.abaco-botoes');
  if (botoes) {
    botoes.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button') : null;
      if (!b) return;
      var acao = b.getAttribute('data-ab');
      var t = total();

      if (acao === 'exemplo') {
        contas = [4, 5, 3, 7];
        memoria = null;
        limpaMultiplicacao();
        if (elMem) elMem.textContent = 'Nenhum valor guardado.';
        atualiza();
        passo('Exemplo 4.537: 4 fichas em M, 5 em C, 3 em X e 7 em I.' +
          (modo === 'simplificado'
            ? ' Na simplificação: 4 fichas inferiores em M, 1 superior em C, 3 inferiores em X e 1 superior + 2 inferiores em I.'
            : ''));
        return;
      }

      if (acao === 'guardar') {
        memoria = t;
        contas = [0, 0, 0, 0];
        limpaMultiplicacao();
        atualiza();
        if (elMem) elMem.textContent = 'Valor guardado: ' + formata(t) + ' (' + romano(t) + '). O ábaco foi limpo; monte o segundo número e clique em Somar, Subtrair ou Multiplicar.';
        passo('');
        return;
      }

      if (acao === 'zerar') {
        contas = [0, 0, 0, 0];
        memoria = null;
        limpaMultiplicacao();
        if (elMem) elMem.textContent = 'Nenhum valor guardado.';
        atualiza();
        passo('Ábaco zerado.');
        return;
      }

      if (acao === 'multiplicar') {
        limpaMultiplicacao();
        if (memoria === null) {
          passo('Primeiro monte um número e clique em "Guardar valor".');
          return;
        }
        var fator1 = memoria;
        var fator2 = t;
        var produto = fator1 * fator2;
        if (produto > 9999) {
          passo('O produto passa de 9.999, o limite deste ábaco de quatro colunas.');
          return;
        }
        var itens = multiplicaPassos(fator1, fator2);
        if (!itens) {
          passo('O produto não cabe nas quatro colunas deste ábaco.');
          return;
        }
        if (elMult) {
          elMult.hidden = false;
          if (itens.length) {
            elMult.innerHTML =
              '<p class="abaco-mult-titulo"><strong>' + formata(fator1) + ' × ' + formata(fator2) +
              ' = ' + formata(produto) + '</strong></p>' +
              '<p class="abaco-mult-sub">Método das ordens numéricas mais altas (IBIAPINA, 2018):</p>' +
              '<ol class="abaco-mult-passos">' + itens.join('') + '</ol>' +
              '<p class="abaco-mult-total">Somando os produtos parciais: <strong>' + formata(produto) +
              '</strong>' + (produto ? ' (' + romano(produto) + ')' : '') + '.</p>';
          } else {
            elMult.innerHTML =
              '<p class="abaco-mult-titulo"><strong>' + formata(fator1) + ' × ' + formata(fator2) +
              ' = 0</strong></p>' +
              '<p class="abaco-mult-sub">Qualquer número multiplicado por zero resulta zero.</p>';
          }
        }
        passo(formata(fator1) + ' × ' + formata(fator2) + ' = ' + formata(produto) +
          (produto ? ' (' + romano(produto) + ')' : '') + '. ' +
          (produto ? 'Veja os produtos parciais e a regra m + n − 1 no quadro abaixo.' : 'O produto é zero.'));
        contas = decompoe(produto);
        memoria = null;
        if (elMem) elMem.textContent = 'Nenhum valor guardado.';
        atualiza();
        return;
      }

      if (acao === 'somar' || acao === 'subtrair') {
        limpaMultiplicacao();
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
          var detalhe = modo === 'simplificado'
            ? 'Nas colunas que passaram de 9, 5 fichas inferiores viraram 1 ficha superior (5 + 5 viraram 1 ficha inferior na coluna da esquerda).'
            : 'Em alguma coluna passou de 9 fichas: 10 fichas foram trocadas por 1 ficha na coluna da esquerda (o "vai um").';
          passo(formata(a) + ' + ' + formata(bb) + ' = ' + formata(r) + ' (' + romano(r) + '). ' +
            (levou ? detalhe : 'Nenhuma coluna passou de 9 fichas, então não foi preciso trocar fichas.'));
        } else {
          var emprestou = false;
          for (i = 0; i < 4; i++) if (ca[i] < cb[i]) emprestou = true;
          var detalhe2 = modo === 'simplificado'
            ? 'Em alguma coluna faltaram fichas: 1 ficha da coluna da esquerda foi trocada por 2 fichas superiores (5 + 5) na coluna atual (o "empresta um").'
            : 'Em alguma coluna faltaram fichas: 1 ficha da coluna da esquerda foi trocada por 10 na coluna atual (o "empresta um").';
          passo(formata(a) + ' − ' + formata(bb) + ' = ' + formata(r) + ' (' + romano(r) + '). ' +
            (emprestou ? detalhe2 : 'Havia fichas suficientes em todas as colunas, então bastou retirá-las.'));
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
