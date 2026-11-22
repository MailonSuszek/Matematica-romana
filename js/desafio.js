// Desafio: Sistema de Numeração Romano
// Caixa cinza com 10 perguntas mostradas uma por uma:
// a explicação aparece depois da tentativa e o botão "Próxima"
// libera a pergunta seguinte; ao fim das 10 aparece a imagem.
(function () {
  var lista = document.getElementById('dq-lista');
  if (!lista) return;

  var perguntas = [
    {
      q: 'Qual símbolo romano representa o número 50?',
      alt: ['X', 'C', 'L', 'D'],
      resp: 2,
      resposta: 'C) L',
      exp: 'O símbolo L representa 50 no sistema de numeração romano.'
    },
    {
      q: 'Quanto vale o símbolo D?',
      alt: ['100', '500', '50', '1.000'],
      resp: 1,
      resposta: 'B) 500',
      exp: 'D é um dos sete símbolos fundamentais do sistema romano e representa 500.'
    },
    {
      q: 'Qual número representa o numeral VI?',
      alt: ['4', '5', '6', '9'],
      resp: 2,
      resposta: 'C) 6',
      exp: 'Como o V vale 5 e o I vale 1, os valores são somados: 5 + 1 = 6.'
    },
    {
      q: 'Qual é a representação romana do número 4?',
      alt: ['IIII', 'VI', 'IV', 'IX'],
      resp: 2,
      resposta: 'C) IV',
      exp: 'O I é colocado antes do V, indicando subtração: 5 − 1 = 4.'
    },
    {
      q: 'Qual é o valor do numeral XIV?',
      alt: ['16', '14', '12', '9'],
      resp: 1,
      resposta: 'B) 14',
      exp: 'X representa 10 e IV representa 4. Portanto, 10 + 4 = 14.'
    },
    {
      q: 'Qual símbolo representa 1.000?',
      alt: ['C', 'D', 'X', 'M'],
      resp: 3,
      resposta: 'D) M',
      exp: 'M representa 1.000 no sistema de numeração romano.'
    },
    {
      q: 'No sistema romano, o que acontece quando um símbolo de menor valor aparece à direita de um símbolo de maior valor?',
      alt: ['O valor é subtraído.', 'O valor é multiplicado.', 'Os valores são somados.', 'O numeral deixa de ser válido.'],
      resp: 2,
      resposta: 'C) Os valores são somados.',
      exp: 'Quando o símbolo de menor valor aparece à direita, em combinações como VI, os valores são adicionados.'
    },
    {
      q: 'Qual numeral representa o número 9?',
      alt: ['XI', 'IX', 'VI', 'IV'],
      resp: 1,
      resposta: 'B) IX',
      exp: 'O I aparece antes do X, indicando que 1 deve ser subtraído de 10.'
    },
    {
      q: 'O que significa uma barra horizontal sobre um numeral romano, como V?',
      alt: ['Divide seu valor por 10.', 'Soma 100 ao seu valor.', 'Multiplica seu valor por 1.000.', 'Representa o número zero.'],
      resp: 2,
      resposta: 'C) Multiplica seu valor por 1.000.',
      exp: 'O vinculum era uma forma de representar quantidades maiores, multiplicando o valor do numeral por 1.000.'
    },
    {
      q: 'Qual era uma das principais dificuldades do sistema romano?',
      alt: ['Não permitia representar números.', 'Era difícil realizar operações aritméticas complexas.', 'Utilizava apenas dois símbolos.', 'Não permitia representar quantidades maiores que 100.'],
      resp: 1,
      resposta: 'B) Era difícil realizar operações aritméticas complexas.',
      exp: 'O sistema romano era útil para registrar quantidades, mas não possuía a estrutura posicional do sistema decimal moderno, o que dificultava determinados cálculos.'
    }
  ];

  var letras = ['A', 'B', 'C', 'D'];
  var atual = 0, feitas = 0, acertos = 0;

  var elAtual = document.getElementById('dq-atual');
  var elFeitas = document.getElementById('dq-feitas');
  var elAcertos = document.getElementById('dq-acertos');
  var elBarra = document.getElementById('dq-barra');
  var btnProximo = document.getElementById('dq-proximo');
  var elFim = document.getElementById('dq-fim');
  var elNota = document.getElementById('dq-nota');
  var btnRecomecar = document.getElementById('dq-recomecar');

  function atualiza() {
    if (elAtual) elAtual.textContent = atual + 1;
    if (elFeitas) elFeitas.textContent = feitas;
    if (elAcertos) elAcertos.textContent = acertos;
    if (elBarra) elBarra.style.width = Math.round((feitas / perguntas.length) * 100) + '%';
  }

  // mostra só a pergunta atual
  function monta() {
    var p = perguntas[atual];
    var html = '<div class="dq" data-i="' + atual + '">';
    html += '<p class="dq-enunciado"><span class="dq-num">' + (atual + 1) + '.</span> ' + p.q + '</p>';
    html += '<div class="dq-alts">';
    for (var k = 0; k < p.alt.length; k++) {
      html += '<button type="button" class="dq-alt" data-k="' + k + '">' +
        letras[k] + ') ' + p.alt[k] + '</button>';
    }
    html += '</div>';
    html += '<div class="dq-exp" hidden><strong class="dq-resultado"></strong> <span class="dq-texto"></span></div>';
    html += '</div>';
    lista.innerHTML = html;
    if (btnProximo) btnProximo.hidden = true;
  }

  function recomeca() {
    atual = 0;
    feitas = 0;
    acertos = 0;
    if (elFim) elFim.hidden = true;
    if (btnRecomecar) btnRecomecar.hidden = true;
    monta();
    atualiza();
    var topo = document.getElementById('desafio');
    if (topo) topo.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // resposta escolhida: mostra a explicação e libera o botão Próxima
  lista.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('.dq-alt') : null;
    if (!btn) return;
    var card = btn.closest('.dq');
    if (!card || card.classList.contains('respondida')) return;

    var i = parseInt(card.getAttribute('data-i'), 10);
    var k = parseInt(btn.getAttribute('data-k'), 10);
    var p = perguntas[i];
    var acertou = k === p.resp;

    card.classList.add('respondida');
    var alts = card.querySelectorAll('.dq-alt');
    for (var j = 0; j < alts.length; j++) {
      alts[j].disabled = true;
      if (j === p.resp) alts[j].classList.add('certa');
    }
    if (!acertou) btn.classList.add('errada');

    var res = card.querySelector('.dq-resultado');
    var txt = card.querySelector('.dq-texto');
    var exp = card.querySelector('.dq-exp');
    if (res) {
      res.textContent = (acertou ? 'Você acertou! ' : 'Você errou. ') + 'Resposta correta: ' + p.resposta + '.';
      res.className = 'dq-resultado ' + (acertou ? 'ok' : 'erro');
    }
    if (txt) txt.textContent = p.exp;
    if (exp) exp.hidden = false;

    feitas++;
    if (acertou) acertos++;
    atualiza();

    if (btnProximo) {
      btnProximo.hidden = false;
      btnProximo.textContent = (atual === perguntas.length - 1)
        ? 'Finalizar'
        : 'Próxima pergunta \u2192';
    }
  });

  // avança para a próxima pergunta (ou mostra o resultado final)
  if (btnProximo) {
    btnProximo.addEventListener('click', function () {
      if (atual === perguntas.length - 1) {
        lista.innerHTML = ''; // a pergunta some
        if (elNota) {
          elNota.innerHTML = 'Você terminou as 10 perguntas com <strong>' + acertos +
            ' acerto' + (acertos === 1 ? '' : 's') + '</strong>' +
            (acertos === 10 ? ' — perfeito!' : ' de 10.');
        }
        if (elFim) elFim.hidden = false;
        btnProximo.hidden = true;
        if (btnRecomecar) btnRecomecar.hidden = false;
        if (elFim) elFim.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      atual++;
      monta();
      atualiza();
      var topo = document.getElementById('desafio');
      if (topo) topo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  if (btnRecomecar) btnRecomecar.addEventListener('click', recomeca);

  monta();
  atualiza();
})();
