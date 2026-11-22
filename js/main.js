// Busca por palavra-chave: digite uma palavra e aperte Enter;
// a lista das seções que contêm a palavra vai para o lado esquerdo.
// Só o texto real das seções é pesquisado — nunca textos de exemplo.
(function () {
  var pages = [
    {
      title: 'Início',
      url: 'index.html',
      text: 'Matemática no Império Romano Como uma das maiores civilizações da Antiguidade conseguiu construir aquedutos monumentais, estradas lendárias e gerenciar um império gigante espalhado por três continentes sem utilizar o número zero ou um sistema numérico posicional? Nesse site, exploraremos o universo da matemática no Império Romano, compreendendo como as necessidades práticas de administração e engenharia moldaram o modo de contar e calcular dos romanos, e como essa tradição conviveu com o brilhantismo teórico dos sábios de Alexandria sob o domínio de Roma. Últimas novidades A matemática prática do Império 21-11-2026 Compreender a natureza prática e utilitária da matemática romana em áreas como agrimensura, arquitetura e administração imperial. Sistema de numeração romano 21-11-2026 Dominar a estrutura do sistema de numeração romano (I, V, X, L, C, D, M) e as convenções para representar grandes quantidades. Instrumentos de cálculo mecânico 21-11-2026 Explicar o funcionamento dos instrumentos de cálculo mecânico romanos, como o ábaco de cera e o ábaco de fichas. O papel de Alexandria e seus pensadores 21-11-2026 Analisar o papel de Alexandria durante o período romano e as contribuições de pensadores como Heron, Diófanto e Pappus.'
    },
    {
      title: 'Contexto Histórico',
      url: 'contexto-historico.html',
      text: 'O Império Romano atingiu seu ápice entre 27 a.C. e 476 d.C., sucedendo o período republicano marcado por figuras históricas como Júlio César. Com a expansão territorial e o crescimento acelerado dos centros urbanos, surgiram enormes desafios administrativos e sociais. Para gerenciar uma população urbana vasta e evitar revoltas populares decorrentes do desemprego rural, os imperadores adotaram estratégias de controle social como a famosa política do Pão e Circo, oferecendo trigo gratuito e grandes espetáculos no Coliseu e em outros estádios. Para sustentar essa gigantesca máquina estatal, a matemática romana desenvolveu um caráter fortemente prático e voltado para a resolução de problemas cotidianos. Enquanto a tradição grega clássica se notabilizou pela geometria axiomática e deduções abstratas, os romanos priorizaram a agrimensura (medição e divisão de terras para cobrança de impostos), a arquitetura de grandes obras (pontes, aquedutos e estradas) e a contabilidade pública e militar. Historiadores da matemática destacam que essa orientação prática não deve ser vista como um "retrocesso" ou falta de capacidade intelectual, mas sim como uma resposta direta às demandas organizacionais do Império. Os agrimensores romanos, por exemplo, utilizavam técnicas sofisticadas de medição de terrenos e conversão de áreas para redistribuir terras e calcular tributos com alta precisão.'
    },
    { title: 'A Matemática em Roma', url: 'a-matematica-em-roma.html', text: '' },
    { title: 'Sistema de Numeração Romano', url: 'sistema-de-numeracao-romana.html', text: '' },
    {
      title: 'Instrumentos e Métodos de Cálculo',
      url: 'instrumentos-e-metodos-de-calculo.html',
      text: 'O ábaco de fichas romano funcionava por meio da organização de fichas em colunas, sendo cada coluna correspondente a uma ordem numérica, como unidades, dezenas, centenas, milhares e ordens superiores. Para representar um número, colocavam-se as fichas nas respectivas colunas, de modo que cada ficha correspondia a uma unidade daquele agrupamento. Por exemplo, na representação do número 4.537, eram colocadas quatro fichas na coluna dos milhares, cinco na das centenas, três na das dezenas e sete na das unidades. Quando uma coluna não possuía fichas, indicava-se a ausência daquela ordem numérica. Dessa maneira, o instrumento permitia representar números e realizar operações aritméticas por meio da movimentação e reorganização das fichas, tornando os cálculos mais visuais e práticos. A simplificação do ábaco de fichas consistia em reduzir a quantidade de fichas necessárias: quando uma coluna atingia cinco fichas, essas podiam ser substituídas por uma única ficha posicionada na parte superior da mesma coluna, representando o valor correspondente a cinco unidades daquela ordem. Assim, 4.537 é representado com quatro fichas na parte inferior de M, uma na parte superior de C, três na parte inferior de X e, em I, uma superior e duas inferiores. Ábaco de cera, ábaco de fichas, calculi. Vai um, empresta um. O ábaco de cera era um instrumento utilizado pelos romanos para registrar números, organizar quantidades e realizar operações matemáticas. Consistia em uma superfície revestida de cera, na qual os registros eram feitos por meio de um estilete, permitindo escrever, alterar e apagar representações numéricas. Suas colunas correspondiam a ordens do sistema numérico: unidades, dezenas, centenas, milhares e ordens superiores, com símbolos romanos e traço superior para valores maiores. O exemplo 26.460 é lido com 2 na coluna de 10.000, 6 na de 1.000, 4 na de 100, 6 na de 10 e 0 na de 1.'
    },
    { title: 'Experiência Matemática', url: 'experiencia-matematica.html', text: 'Escute. Enquanto a capital do Império focava na aplicação direta e utilitária da matemática, a cidade de Alexandria, integrada ao domínio romano a partir do século I a.C., manteve-se como o grande centro de produção e preservação do conhecimento teórico do mundo mediterrâneo. Durante o período romano, Alexandria foi palco do trabalho de matemáticos notáveis que revolucionaram a disciplina: Heron de Alexandria (século I d.C.): Uniu o rigor da geometria grega a aplicações práticas na engenharia e agrimensura. Sua obra Métricas forneceu regras para o cálculo de áreas e volumes de figuras complexas, além de métodos de aproximação de raízes quadradas. Diófanto de Alexandria (século III d.C.): Autor do tratado Aritmética, introduziu símbolos abreviados (arithmos) para representar incógnitas, sendo considerado um dos precursores da álgebra. Pappus de Alexandria (séculos III-IV d.C.): Em sua obra Coleção Matemática, realizou uma vasta compilação crítica dos trabalhos clássicos do passado, organizando problemas geométricos por níveis de complexidade. Teon e Hipátia (século IV d.C.): Dedicaram-se à edição, restauração e ensino dos grandes clássicos, como os Elementos de Euclides e as obras de Apolônio e Ptolomeu. A pesquisa historiográfica moderna reconhece que o período romano em Alexandria não foi uma época de decadência, mas sim um momento crucial de síntese entre técnicas operacionais, algebrização inicial e preservação do saber científico.' },
    { title: 'Referências', url: 'referencias.html', text: 'SOUZA, Henrique C. T. de; PINHO, Diogo S. G. de. Matemática: Império Romano. [S. l.: s. n.], [s. d.]. Apresentação de slides. Escola Kids. Disponível em: https://escolakids.uol.com.br/historia/imperio-romano-um-resumo.htm. Acesso em: 21 nov. 2026. Brasil Escola. Algarismos romanos. Disponível em: https://brasilescola.uol.com.br/matematica/algarismos-romanos.htm. Acesso em: 21 nov. 2026. ROQUE, Tatiana. História da matemática. Editora Schwarcz-Companhia das Letras, 2012.' },
    {
      title: 'Sobre',
      url: 'sobre.html',
      text: 'Sobre o site Este site foi desenvolvido como parte de uma atividade acadêmica da disciplina, com a proposta de explorar a História da Matemática por meio de uma produção digital, reunindo informações, conteúdos históricos e recursos visuais em um ambiente interativo e acessível. A elaboração deste trabalho contou com o auxílio de Inteligências Artificiais Generativas (IAGs), utilizadas como ferramentas de apoio à pesquisa, organização das informações, estruturação dos conteúdos, elaboração de textos e desenvolvimento da página web. IAG usadas: Opencode, Gemini notebook, claude e chat gpt'
    }
  ];

  function norm(s) {
    return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
  }

  var form = document.getElementById('search');
  if (!form) return;
  var input = document.getElementById('q');
  var msg = document.getElementById('search-msg');
  var left = document.getElementById('content-left');

  // Se a página atual tiver conteúdo escrito, usa o texto real dela
  // (o texto de exemplo dos comentários nunca é considerado).
  var current = location.pathname.split('/').pop() || 'index.html';
  var section = document.getElementById('content-left');
  if (section && section.children.length > 1) {
    var clone = section.cloneNode(true);
    var controles = clone.querySelectorAll('.mm-controles');
    for (var ci = 0; ci < controles.length; ci++) {
      controles[ci].parentNode.removeChild(controles[ci]);
    }
    var realText = norm(clone.textContent || '');
    for (var p = 0; p < pages.length; p++) {
      if (pages[p].url === current) {
        pages[p].text = realText;
        break;
      }
    }
  }

  function segments(text, qn) {
    if (!qn) return [{ text: text, match: false }];
    var chars = [];
    var s = '';
    var i, k, c;
    for (i = 0; i < text.length; i++) {
      c = text[i].toLowerCase().normalize('NFD');
      for (k = 0; k < c.length; k++) {
        if (/[̀-ͯ]/.test(c[k])) continue;
        chars.push({ ch: c[k], orig: i });
        s += c[k];
      }
    }
    var idx = s.indexOf(qn);
    if (idx === -1 || !chars.length) return [{ text: text, match: false }];
    var start = chars[idx].orig;
    var end = (idx + qn.length < chars.length) ? chars[idx + qn.length].orig : text.length;
    if (end <= start) end = Math.min(start + qn.length + 1, text.length);
    var segs = [];
    if (start > 0) segs.push({ text: text.slice(0, start), match: false });
    segs.push({ text: text.slice(start, end), match: true });
    if (end < text.length) segs.push({ text: text.slice(end), match: false });
    return segs;
  }

  function appendHighlighted(parent, text, qn) {
    var segs = segments(text, qn);
    for (var i = 0; i < segs.length; i++) {
      if (!segs[i].text) continue;
      if (segs[i].match) {
        var span = document.createElement('span');
        span.className = 'search-hl';
        span.textContent = segs[i].text;
        parent.appendChild(span);
      } else {
        parent.appendChild(document.createTextNode(segs[i].text));
      }
    }
  }

  function showResults(q) {
    var qn = norm(q);
    var found = [];
    for (var i = 0; i < pages.length; i++) {
      if (norm(pages[i].title).indexOf(qn) !== -1 || norm(pages[i].text).indexOf(qn) !== -1) {
        found.push(pages[i]);
      }
    }
    var list = document.createElement('ul');
    list.className = 'search-results';
    if (found.length === 0) {
      var li = document.createElement('li');
      li.textContent = 'Nenhuma página encontrada.';
      list.appendChild(li);
    }
    for (var j = 0; j < found.length; j++) {
      var item = document.createElement('li');
      var link = document.createElement('a');
      link.href = found[j].url;
      appendHighlighted(link, found[j].title, qn);
      item.appendChild(link);
      if (found[j].text) {
        var text = document.createElement('div');
        text.className = 'search-result-text';
        appendHighlighted(text, found[j].text, qn);
        item.appendChild(text);
      }
      list.appendChild(item);
    }
    left.textContent = '';
    left.appendChild(list);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!norm(input.value)) {
      msg.textContent = 'Digite uma palavra na busca.';
      return;
    }
    showResults(input.value);
    msg.textContent = '';
  });

  input.addEventListener('input', function () {
    msg.textContent = '';
    if (norm(input.value)) {
      showResults(input.value);
    }
  });

  // O rodapé fica fixo na borda de baixo. O espaço em branco no final
  // cresce conforme a janela fica mais estreita e também conforme o
  // conteúdo da página cresce (novos parágrafos, mapa, ábaco, desafio...).
  function ajustaRodape() {
    var footer = document.getElementById('footer');
    var largura = window.innerWidth || 1920;
    // Em tela cheia não sobra branco; quanto menor a janela, maior o branco final.
    var base = (window.screen && window.screen.width) ? window.screen.width : 1920;
    if (base < largura) base = largura;
    var dif = base - largura;
    var content = document.getElementById('content');
    var altura = content ? content.offsetHeight : 0;
    var ehCelular = largura <= 640;
    // O branco acompanha a quantidade de conteúdo da página:
    // páginas curtas ficam com pouco; páginas longas (como Instrumentos) ficam com muito.
    var limite = ehCelular ? 1000 : 900;
    var espaco = Math.max(0, Math.round((altura - limite) * 3));
    // Ao estreitar a janela, o branco cresce um pouco mais (proporcional ao conteúdo).
    if (!ehCelular && dif >= 8) {
      espaco += Math.round(dif * 4 * Math.min(1, altura / 1200));
    }
    if (ehCelular) espaco = Math.max(espaco, 800);
    if (footer) document.body.style.paddingBottom = (footer.offsetHeight + 24 + espaco) + 'px';
  }
  window.addEventListener('resize', ajustaRodape);
  window.addEventListener('orientationchange', ajustaRodape);
  window.addEventListener('load', ajustaRodape);
  ajustaRodape();

  // Quando o conteúdo muda (fichas do ábaco, camadas do mapa, desafio etc.),
  // recalcula o branco final para ele continuar crescendo junto.
  var conteudoObs = document.getElementById('content');
  if (conteudoObs && typeof ResizeObserver !== 'undefined') {
    var ro = new ResizeObserver(function () { ajustaRodape(); });
    ro.observe(conteudoObs);
  }

  // ---------- mapa mental dinâmico (A Matemática em Roma) ----------
  var mmArea = document.querySelector('.mm-area');
  if (mmArea) {
    var mmStage = mmArea.querySelector('.mm-stage');
    var mmEl = mmArea.querySelector('.mm');
    var tx = 0, ty = 0, esc = 1;
    var ESC_MIN = 0.3, ESC_MAX = 2.5;

    function aplicar(anima) {
      mmStage.classList.toggle('animar', !!anima);
      mmStage.style.transform =
        'translate(' + Math.round(tx) + 'px,' + Math.round(ty) + 'px) scale(' + esc + ')';
    }

    // mantém o mapa sempre dentro da janela
    function limitar() {
      var aw = mmArea.clientWidth, ah = mmArea.clientHeight;
      var cw = mmEl.offsetWidth * esc, ch = mmEl.offsetHeight * esc;
      if (cw <= aw) tx = (aw - cw) / 2;
      else tx = Math.min(0, Math.max(aw - cw, tx));
      if (ch <= ah) ty = (ah - ch) / 2;
      else ty = Math.min(0, Math.max(ah - ch, ty));
    }

    // ajusta o mapa inteiro na janela
    function ajustar(anima) {
      var aw = mmArea.clientWidth, ah = mmArea.clientHeight;
      var cw = mmEl.offsetWidth, ch = mmEl.offsetHeight;
      if (!cw || !ch) return;
      esc = Math.max(ESC_MIN, Math.min(1, Math.min((aw - 40) / cw, (ah - 40) / ch)));
      tx = (aw - cw * esc) / 2;
      ty = (ah - ch * esc) / 2;
      aplicar(anima);
    }

    // amplia/reduz em volta de um ponto da janela
    function zoomNo(fator, cx, cy) {
      var novo = Math.max(ESC_MIN, Math.min(ESC_MAX, esc * fator));
      if (novo === esc) return;
      var r = novo / esc;
      tx = cx - (cx - tx) * r;
      ty = cy - (cy - ty) * r;
      esc = novo;
      limitar();
      aplicar(true);
    }

    // foca a vista em um conceito (clique duplo)
    function focar(el) {
      var r0 = mmEl.getBoundingClientRect();
      var rn = el.getBoundingClientRect();
      if (!r0.width || !rn.width) return;
      var ux = (rn.left + rn.width / 2 - r0.left) / esc;
      var uy = (rn.top + rn.height / 2 - r0.top) / esc;
      if (esc < 1) esc = 1;
      tx = mmArea.clientWidth / 2 - ux * esc;
      ty = mmArea.clientHeight / 2 - uy * esc;
      limitar();
      aplicar(true);
    }

    // abrir/fechar um ramo ao clicar no conceito
    mmArea.addEventListener('click', function (e) {
      if (moveu) { moveu = false; return; }
      var alvo = e.target.closest ? e.target.closest('.mm-label') : null;
      if (!alvo || alvo.tagName !== 'BUTTON') return;
      var fechado = alvo.getAttribute('aria-expanded') === 'true';
      alvo.setAttribute('aria-expanded', fechado ? 'false' : 'true');
      alvo.parentNode.classList.toggle('fechado', fechado);
      limitar();
      aplicar(true);
    });

    // clique duplo: foca no conceito; no fundo, amplia
    mmArea.addEventListener('dblclick', function (e) {
      if (moveu) { moveu = false; return; }
      var alvo = e.target.closest ? e.target.closest('.mm-label') : null;
      if (alvo) { focar(alvo); return; }
      var r = mmArea.getBoundingClientRect();
      zoomNo(1.3, e.clientX - r.left, e.clientY - r.top);
    });

    // botões: expandir/recolher, zoom e centralizar
    var ctr = document.querySelector('.mm-controles');
    if (ctr) {
      ctr.addEventListener('click', function (e) {
        var b = e.target.closest ? e.target.closest('button') : null;
        if (!b) return;
        var acao = b.getAttribute('data-mm');
        var i;
        if (acao === 'expandir' || acao === 'recolher') {
          var recolher = acao === 'recolher';
          var labels = mmEl.querySelectorAll('.mm-label');
          for (i = 0; i < labels.length; i++) {
            if (labels[i].tagName !== 'BUTTON') continue;
            labels[i].setAttribute('aria-expanded', recolher ? 'false' : 'true');
            labels[i].parentNode.classList.toggle('fechado', recolher);
          }
          if (recolher) {
            ajustar(true); // só a caixa central fica na vista
          } else {
            limitar();
            aplicar(true);
          }
        } else if (acao === 'mais') {
          zoomNo(1.2, mmArea.clientWidth / 2, mmArea.clientHeight / 2);
        } else if (acao === 'menos') {
          zoomNo(1 / 1.2, mmArea.clientWidth / 2, mmArea.clientHeight / 2);
        } else if (acao === 'centralizar') {
          ajustar(true);
        }
      });
    }

    // arrastar o mapa com o mouse ou o dedo
    var arrastando = false, moveu = false, px = 0, py = 0;
    mmArea.addEventListener('pointerdown', function (e) {
      moveu = false;
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      if (e.target.closest && e.target.closest('button')) return;
      arrastando = true;
      px = e.clientX; py = e.clientY;
      mmArea.classList.add('arrastando');
      mmStage.classList.remove('animar');
      if (mmArea.setPointerCapture) {
        try { mmArea.setPointerCapture(e.pointerId); } catch (err) {}
      }
    });
    mmArea.addEventListener('pointermove', function (e) {
      if (!arrastando) return;
      var dx = e.clientX - px, dy = e.clientY - py;
      if (Math.abs(dx) + Math.abs(dy) > 4) moveu = true;
      px = e.clientX; py = e.clientY;
      tx += dx; ty += dy;
      limitar();
      aplicar(false);
    });
    function soltaMao() {
      if (!arrastando) return;
      arrastando = false;
      mmArea.classList.remove('arrastando');
    }
    mmArea.addEventListener('pointerup', soltaMao);
    mmArea.addEventListener('pointercancel', soltaMao);
    window.addEventListener('pointerup', soltaMao);

    // rolagem: move o mapa; com Ctrl (ou pinça) amplia
    mmArea.addEventListener('wheel', function (e) {
      var dy = e.deltaY, dx = e.deltaX;
      if (e.deltaMode === 1) { dy *= 16; dx *= 16; }
      else if (e.deltaMode === 2) { dy *= mmArea.clientHeight; dx *= mmArea.clientWidth; }
      var r = mmArea.getBoundingClientRect();
      var cx = e.clientX - r.left, cy = e.clientY - r.top;
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        zoomNo(dy < 0 ? 1.12 : 1 / 1.12, cx, cy);
        return;
      }
      var ax = tx, ay = ty;
      tx -= dx; ty -= dy;
      limitar();
      if (tx === ax && ty === ay) return; // já está na borda: deixa a página rolar
      e.preventDefault();
      aplicar(false);
    }, { passive: false });

    // setas navegam, +/- ampliam, 0 centraliza
    mmArea.addEventListener('keydown', function (e) {
      var meioX = mmArea.clientWidth / 2, meioY = mmArea.clientHeight / 2;
      var k = e.key;
      if (k === 'ArrowLeft') tx += 70;
      else if (k === 'ArrowRight') tx -= 70;
      else if (k === 'ArrowUp') ty += 70;
      else if (k === 'ArrowDown') ty -= 70;
      else if (k === '+' || k === '=') { zoomNo(1.2, meioX, meioY); e.preventDefault(); return; }
      else if (k === '-' || k === '_') { zoomNo(1 / 1.2, meioX, meioY); e.preventDefault(); return; }
      else if (k === '0') { ajustar(true); e.preventDefault(); return; }
      else return;
      e.preventDefault();
      limitar();
      aplicar(false);
    });

    // a janela muda de tamanho => o mapa se reajusta
    window.addEventListener('resize', function () {
      limitar();
      aplicar(false);
    });
    window.addEventListener('load', function () { ajustar(false); });
    ajustar(false);
  }
})();
