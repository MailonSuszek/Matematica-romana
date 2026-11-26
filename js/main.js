// Busca por palavra-chave: digite uma palavra e aperte Enter;
// a lista das seções que contêm a palavra vai para o lado esquerdo.
// Só o texto real das seções é pesquisado — nunca textos de exemplo.
(function () {
  var pages = [
    {
      title: 'Início',
      url: 'index.html',
      text: 'Matemática no Império Romano. Segundo Caressa (2012), os romanos praticavam uma matemática algorítmica, de medidas, cálculos e procedimentos transmitidos por exemplos. Segundo Castellanos Suárez et al. (2023), o saber dos tutores gregos, muitos escravos, não era reconhecido como conhecimento próprio. Segundo Sanchez (2020), a escola elementar era privada, não regulada pelo Estado e reservada a uma elite; esperava-se contar, somar, subtrair e dividir, inclusive com os dedos. Últimas novidades: matemática a serviço do Império, numerais zero e frações, primeira calculadora de bolso, Alexandria sob o domínio romano.'
    },
    {
      title: 'Contexto Histórico',
      url: 'contexto-historico.html',
      text: 'Segundo Miguel Gil (s.d.), a presença romana vai de 750 a.C. a 476 d.C. e, a partir de 200 a.C., os romanos têm contato estreito com os gregos. Segundo Silva e Mendes (2013), por volta do século II a.C. termina o domínio grego e começam transformações ligadas a condições econômicas, sociais, políticas e culturais. Segundo Castellanos Suárez et al. (2023), tutores gregos, escravos e externi explicam o pragmatismo romano. Segundo Caressa (2012), havia numerarii, tabularii, rationales, scribae, calculatores e geometrae; no Édito dos Preços Máximos de Diocleciano, em 301, mestres de geometria ganhavam 200 denários por mês. Agrimensura, mensores, Corpus Agrimensorum Romanum. Segundo Miguel Gil (s.d.), Sosígenes reformou o calendário em 45 a.C. e a palavra matemática caiu em descrédito por causa dos mathematicii.'
    },
    {
      title: 'A Matemática em Roma',
      url: 'a-matematica-em-roma.html',
      text: 'Mapa mental da organização político-social e das aplicações práticas da matemática no Império Romano. Segundo Caressa (2012), os romanos não criaram teoremas dedutivos, mas praticaram matemática algorítmica; Ptolomeu usou a rede viária para a Geografia e os ábacos portáteis eram a primeira calculadora de bolso. Segundo Castellanos Suárez et al. (2023), Roma se destacou em caminhos, traçado de cidades, aquedutos, mineração, abóbadas e acústica de teatros. Segundo Silva e Mendes (2013), a geometria era valorizada pela construção civil. Segundo Núñez (2003), o ábaco podia ser prancha com linhas e calculi ou instrumento de metal, sempre com valor posicional. Segundo Ibiapina (2021), a ausência de fichas fazia o papel do zero. Segundo Maher e Makowski (2001), frações usavam tabelas e base doze.'
    },
    {
      title: 'Sistema de Numeração Romano',
      url: 'sistema-de-numeracao-romana.html',
      text: 'Numerais I V X L C D M. Segundo Martin (2006), a posição da letra não muda seu valor, e o vinculum multiplica por mil: V com travessão vale 5.000. Escrita aditiva e subtrativa: VI é 5 mais 1 e IV é 5 menos 1. Segundo Ibiapina (2021), no ábaco a representação era posicional e a coluna vazia fazia o papel do zero; segundo Martin (2006), o zero pode ser um ábaco vazio. Segundo Maher e Makowski (2001), as frações eram unitárias e duodecimais: uncia é um doze avos do as, semis é metade, e havia frações até 1/288. Segundo Miguel Gil (s.d.), a base doze vinha do mês lunar e a uncia originou onça e polegada. Segundo Martin (2006), é possível somar, subtrair, multiplicar e dividir numerais romanos; segundo Maher e Makowski (2001), Columela, Frontino e Horácio mostram contas com frações.'
    },
    {
      title: 'Instrumentos e Métodos de Cálculo',
      url: 'instrumentos-e-metodos-de-calculo.html',
      text: 'Segundo Miguel Gil (s.d.), os romanos calculavam com ábacos, dedos e tabelas. Segundo Sanchez (2020), Quintiliano considerava a contagem nos dedos essencial ao orador. Segundo Núñez (2003), abacus designava a mesa de areia e o tabuleiro com pedrinhas; calculus deu o verbo calcular, e os romanos entendiam a base posicional. Segundo Caressa (2012), os ábacos portáteis eram a primeira calculadora de bolso. Segundo Ibiapina (2021), havia a mesa de pó, o tabuleiro de fichas soltas e a tábua com contas presas; dez fichas viravam uma à esquerda, cinco viravam uma ficha superior, e operador e assistente trabalhavam juntos. Ábaco de fichas interativo com exemplo 4.537 e ábaco de cera com exemplo 26.460. Multiplicação pelas ordens mais altas com produto parcial na coluna m + n − 1, segundo Ibiapina (2018, 2021). Segundo Martin (2006) e Núñez (2003), a divisão era possível por subtrações repetidas.'
    },
    {
      title: 'Experiência Matemática',
      url: 'experiencia-matematica.html',
      text: 'Segundo Caressa (2012), Ptolomeu, Heron e Diofanto trabalharam dentro do Império. Segundo Miguel Gil (s.d.), o incêndio da Biblioteca de Alexandria em 47 a.C. feriu a tradição helenística. Heron de Alexandria, c. 65 a 125 d.C., formulou a área do triângulo e estudou óptica e mecânica. Ptolomeu reuniu tabelas de cordas na Sintaxis Matemática. Segundo Caressa (2012), dizer que Diofanto inventou a álgebra é lugar-comum a examinar. Segundo Miguel Gil (s.d.), Pappus foi um dos grandes comentaristas e Hipátia, filha de Teon, simbolizou o fim da era. Segundo Silva e Mendes (2013), romanos de elite preservaram os clássicos em compilações latinas. Áudio da experiência matemática.'
    },
    {
      title: 'Referências',
      url: 'referencias.html',
      text: 'Referências ABNT usadas no site, com links para os PDFs salvos na pasta: Souza e Pinho, Escola Kids, Brasil Escola, Roque (2012), Ibiapina (2018), Caressa (2012), Castellanos Suárez et al. (2023), Ibiapina (2021), Maher e Makowski (2001), Martin (2006), Miguel Gil (s.d.), Núñez (2003), Sanchez (2020), Silva e Mendes (2013). Roma antiga, etnomatemática, frações, ábaco, educação matemática, história da matemática.'
    },
    {
      title: 'Linha do Tempo',
      url: 'linha-do-tempo.html',
      text: '45 a.C., calendário juliano com Sosígenes. 27 a.C., início do Império e matemática a serviço do Estado. Século I d.C., Heron de Alexandria. Século I e II d.C., ábacos e calculi. Século II d.C., Ptolomeu e a Geografia. Século III d.C., Diofanto e a Aritmética. Século IV d.C., Teon e Hipátia. 476 d.C., fim do Império do Ocidente. Fontes: Miguel Gil, Castellanos Suárez et al., Caressa, Silva e Mendes, Núñez, Sanchez e Ibiapina.'
    },
    {
      title: 'Sobre',
      url: 'sobre.html',
      text: 'Sobre o site: trabalho acadêmico da disciplina de História da Matemática, produzido com apoio de Inteligências Artificiais Generativas. Opencode, Gemini notebook, claude e chat gpt. Os textos foram reescritos a partir de artigos científicos com citações no formato segundo tal, e todas as obras estão em referencias.html.'
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
