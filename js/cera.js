// Ábaco de cera interativo (Instrumentos e Métodos de Cálculo)
// Seis colunas: C̄ (100.000), X̄ (10.000), Ī (1.000), C (100), X (10), I (1).
// Clique na cera escreve uma marca; clique numa marca apaga-a (e as de cima).
// Permite guardar, somar e subtrair, como no ábaco de fichas.
(function () {
  var grade = document.getElementById('cera-grade');
  if (!grade) return;

  var cols = [
    { simbolo: 'C', valor: 100000, sobre: true, nome: 'centenas de milhar' },
    { simbolo: 'X', valor: 10000, sobre: true, nome: 'dezenas de milhar' },
    { simbolo: 'I', valor: 1000, sobre: true, nome: 'milhares' },
    { simbolo: 'C', valor: 100, sobre: false, nome: 'centenas' },
    { simbolo: 'X', valor: 10, sobre: false, nome: 'dezenas' },
    { simbolo: 'I', valor: 1, sobre: false, nome: 'unidades' }
  ];
  var marcas = [0, 0, 0, 0, 0, 0];
  var memoria = null;

  var elDec = document.getElementById('cera-decimal');
  var elRom = document.getElementById('cera-romano');
  var elMem = document.getElementById('cera-memoria');
  var elPasso = document.getElementById('cera-passo');
  var elMult = document.getElementById('cera-multiplicacao');

  function formata(n) {
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function limpaMultiplicacao() {
    if (elMult) {
      elMult.hidden = true;
      elMult.innerHTML = '';
    }
  }

  function rotuloColuna(i) {
    return cols[i].sobre
      ? '<span class="sobrelinha">' + cols[i].simbolo + '</span>'
      : cols[i].simbolo;
  }

  // Mesmo método do ábaco de fichas (IBIAPINA, 2018), adaptado às
  // seis colunas da cera: o produto parcial vai para a coluna m + n − 1.
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
          destino = p + ' na coluna ' + coluna + ' (' + rotuloColuna(alvo) + ')';
        } else {
          if (alvo === 0) return null;
          destino = p + ' na coluna ' + coluna + ': ' + un + ' em ' + rotuloColuna(alvo) +
            ' e ' + dez + ' em ' + rotuloColuna(alvo - 1);
        }
        itens.push('<li><strong>' + x + ' × ' + y + ' = ' + p + '</strong> → ' + destino +
          ' <span class="abaco-mult-regra">(colunas ' + (N - i) + ' + ' + (N - j) +
          ' − 1 = ' + coluna + ')</span></li>');
      }
    }
    return itens;
  }

  function romanoSimples(n) {
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

  // Números acima de 3.999 usam o traço superior (milhares).
  function romano(n) {
    if (n === 0) return '—';
    var mil = Math.floor(n / 1000);
    var resto = n % 1000;
    var s = '';
    if (mil > 0) {
      if (mil > 3999) return '—';
      s += '<span class="sobrelinha">' + romanoSimples(mil) + '</span>';
    }
    if (resto > 0) s += romanoSimples(resto);
    return s;
  }

  function total() {
    var t = 0;
    for (var i = 0; i < cols.length; i++) t += marcas[i] * cols[i].valor;
    return t;
  }

  function decompoe(n) {
    var r = [];
    for (var i = 0; i < cols.length; i++) {
      r.push(Math.floor(n / cols[i].valor) % 10);
    }
    return r;
  }

  function desenha() {
    var html = '';
    for (var i = 0; i < cols.length; i++) {
      var c = cols[i];
      html += '<div class="cera-col">';
      html += '<span class="cera-simbolo' + (c.sobre ? ' sobre' : '') + '">' + c.simbolo + '</span>';
      html += '<span class="cera-valor">' + formata(c.valor) + '</span>';
      html += '<div class="cera-celula" data-col="' + i + '" aria-label="Cera da coluna de ' + c.nome + '">';
      for (var r = 0; r < marcas[i]; r++) {
        html += '<span class="cera-marca' + (c.sobre ? ' sobre' : '') + '" data-col="' + i + '" data-row="' + r +
          '" title="Clique para apagar">' + c.simbolo + '</span>';
      }
      html += '</div>';
      html += '<span class="cera-conta">' + marcas[i] + '</span>';
      html += '</div>';
    }
    grade.innerHTML = html;
  }

  function mostraValor() {
    var t = total();
    if (elDec) elDec.textContent = formata(t);
    if (elRom) elRom.innerHTML = romano(t);
  }

  function atualiza() {
    desenha();
    mostraValor();
  }

  function passo(txt) {
    if (elPasso) elPasso.textContent = txt;
  }

  grade.addEventListener('click', function (e) {
    var celula = e.target.closest ? e.target.closest('.cera-celula') : null;
    if (!celula) return;
    var i = parseInt(celula.getAttribute('data-col'), 10);
    var marca = e.target.closest ? e.target.closest('.cera-marca') : null;
    if (marca) {
      var r = parseInt(marca.getAttribute('data-row'), 10);
      marcas[i] = r;
    } else {
      marcas[i] = Math.min(9, marcas[i] + 1);
    }
    limpaMultiplicacao();
    atualiza();
    passo('');
  });

  var botoes = document.querySelector('.cera-botoes');
  if (botoes) {
    botoes.addEventListener('click', function (e) {
      var b = e.target.closest ? e.target.closest('button') : null;
      if (!b) return;
      var acao = b.getAttribute('data-cera');
      var t = total();

      if (acao === 'exemplo') {
        marcas = [0, 2, 6, 4, 6, 0];
        memoria = null;
        limpaMultiplicacao();
        if (elMem) elMem.textContent = 'Nenhum valor guardado.';
        atualiza();
        passo('Exemplo 26.460: 2 em X̄, 6 em Ī, 4 em C, 6 em X e 0 em I.');
        return;
      }

      if (acao === 'guardar') {
        memoria = t;
        marcas = [0, 0, 0, 0, 0, 0];
        limpaMultiplicacao();
        atualiza();
        if (elMem) elMem.textContent = 'Número guardado: ' + formata(t) + '. A cera foi limpa; registre o segundo número e clique em Somar, Subtrair ou Multiplicar.';
        passo('');
        return;
      }

      if (acao === 'zerar') {
        marcas = [0, 0, 0, 0, 0, 0];
        memoria = null;
        limpaMultiplicacao();
        if (elMem) elMem.textContent = 'Nenhum valor guardado.';
        atualiza();
        passo('Cera limpa: todas as marcas foram apagadas.');
        return;
      }

      if (acao === 'multiplicar') {
        limpaMultiplicacao();
        if (memoria === null) {
          passo('Primeiro registre um número e clique em "Guardar valor".');
          return;
        }
        var fator1 = memoria;
        var fator2 = t;
        var produto = fator1 * fator2;
        if (produto > 999999) {
          passo('O produto passa de 999.999, o limite destas seis colunas.');
          return;
        }
        var itens = multiplicaPassos(fator1, fator2);
        if (!itens) {
          passo('O produto não cabe nas seis colunas desta cera.');
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
        passo(formata(fator1) + ' × ' + formata(fator2) + ' = ' + formata(produto) + '. ' +
          (produto ? 'Veja os produtos parciais e a regra m + n − 1 no quadro abaixo.' : 'O produto é zero.'));
        marcas = decompoe(produto);
        memoria = null;
        if (elMem) elMem.textContent = 'Nenhum valor guardado.';
        atualiza();
        return;
      }

      if (acao === 'somar' || acao === 'subtrair') {
        limpaMultiplicacao();
        if (memoria === null) {
          passo('Primeiro registre um número e clique em "Guardar valor".');
          return;
        }
        var a = memoria;
        var bb = t;
        var r = acao === 'somar' ? a + bb : a - bb;
        if (r < 0) {
          passo('O resultado seria negativo — a representação trabalha com números naturais.');
          return;
        }
        if (r > 999999) {
          passo('O resultado passa de 999.999, o limite destas seis colunas.');
          return;
        }

        var ca = decompoe(a);
        var cb = decompoe(bb);
        var i;
        if (acao === 'somar') {
          var levou = false;
          for (i = 0; i < cols.length; i++) if (ca[i] + cb[i] >= 10) levou = true;
          passo(formata(a) + ' + ' + formata(bb) + ' = ' + formata(r) + '. ' +
            (levou
              ? 'Em alguma coluna passou de 9 marcas: 10 marcas foram apagadas da cera e 1 marca foi escrita na coluna à esquerda (o "vai um").'
              : 'Nenhuma coluna passou de 9 marcas, então bastou juntar as marcas.'));
        } else {
          var emprestou = false;
          for (i = 0; i < cols.length; i++) if (ca[i] < cb[i]) emprestou = true;
          passo(formata(a) + ' − ' + formata(bb) + ' = ' + formata(r) + '. ' +
            (emprestou
              ? 'Em alguma coluna faltaram marcas: 1 marca da coluna à esquerda foi apagada e 10 marcas foram escritas na coluna atual (o "empresta um").'
              : 'Havia marcas suficientes em todas as colunas, então bastou apagar as marcas.'));
        }

        marcas = decompoe(r);
        memoria = null;
        if (elMem) elMem.textContent = 'Nenhum valor guardado.';
        atualiza();
      }
    });
  }

  atualiza();
})();
