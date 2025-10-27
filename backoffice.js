(function(){
  const state = {
    cards: []
  };

  const elements = {};

  function init(){
    elements.addCardBtn = document.getElementById('addCardBtn');
    elements.expandAllBtn = document.getElementById('expandAllBtn');
    elements.collapseAllBtn = document.getElementById('collapseAllBtn');
    elements.downloadBtn = document.getElementById('downloadBtn');
    elements.importInput = document.getElementById('importFile');
    elements.statusMessage = document.getElementById('statusMessage');
    elements.cardCount = document.getElementById('cardCount');
    elements.emptyState = document.getElementById('emptyState');
    elements.cardsContainer = document.getElementById('cardsContainer');
    elements.dropZone = document.getElementById('dropZone');
    elements.cardTemplate = document.getElementById('cardTemplate');
    elements.variationTemplate = document.getElementById('variationTemplate');

    bindEvents();
    loadInitialData();
  }

  function bindEvents(){
    if(elements.addCardBtn){
      elements.addCardBtn.addEventListener('click', ()=>{
        addCard();
      });
    }

    if(elements.expandAllBtn){
      elements.expandAllBtn.addEventListener('click', ()=>{
        setAllCardsOpen(true);
      });
    }

    if(elements.collapseAllBtn){
      elements.collapseAllBtn.addEventListener('click', ()=>{
        setAllCardsOpen(false);
      });
    }

    if(elements.downloadBtn){
      elements.downloadBtn.addEventListener('click', exportCardsFile);
    }

    if(elements.importInput){
      elements.importInput.addEventListener('change', event=>{
        const [file] = event.target.files || [];
        if(file){
          readFile(file);
        }
        event.target.value = '';
      });
    }

    if(elements.dropZone){
      elements.dropZone.addEventListener('dragenter', handleDragOver);
      elements.dropZone.addEventListener('dragover', handleDragOver);
      elements.dropZone.addEventListener('dragleave', handleDragLeave);
      elements.dropZone.addEventListener('drop', handleDrop);
    }

    window.addEventListener('discussionCardsDataReady', event=>{
      if(Array.isArray(event.detail)){
        loadCards(event.detail, 'Données chargées depuis cards_data.js.');
      }
    });
  }

  function loadInitialData(){
    if(Array.isArray(window.DISCUSSION_CARDS_DATA) && window.DISCUSSION_CARDS_DATA.length>0){
      loadCards(window.DISCUSSION_CARDS_DATA, 'Cartes chargées depuis cards_data.js.');
    }else{
      updateCardDisplay();
    }
  }

  function addCard(){
    state.cards.push({
      category: '',
      content: '',
      advice: '',
      variations: []
    });
    renderCards();
    setStatus('Nouvelle carte ajoutée.', 'success');
    focusLatestCard();
  }

  function focusLatestCard(){
    if(!elements.cardsContainer) return;
    const cards = elements.cardsContainer.querySelectorAll('.card-editor');
    const lastCard = cards[cards.length-1];
    if(lastCard){
      requestAnimationFrame(()=>{
        lastCard.setAttribute('open', 'open');
        const firstInput = lastCard.querySelector('input, textarea');
        if(firstInput){
          firstInput.focus();
        }
        lastCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    }
  }

  function setAllCardsOpen(shouldOpen){
    if(!elements.cardsContainer) return;
    elements.cardsContainer.querySelectorAll('.card-editor').forEach(card=>{
      if(shouldOpen){
        card.setAttribute('open', 'open');
      }else{
        card.removeAttribute('open');
      }
    });
  }

  function loadCards(rawCards, successMessage){
    const normalized = Array.isArray(rawCards)
      ? rawCards.map(normalizeCard).filter(card=>card.content.trim()!=='' || card.category.trim()!=='')
      : null;

    if(!normalized){
      setStatus('Format de données invalide.', 'error');
      return;
    }

    state.cards = normalized;
    renderCards();
    if(successMessage){
      setStatus(`${state.cards.length} carte(s) prêtes. ${successMessage}`, 'success');
    }else{
      setStatus(`${state.cards.length} carte(s) prêtes.`, 'success');
    }
  }

  function normalizeCard(raw){
    if(!raw || typeof raw!=='object'){
      return { category:'', content:'', advice:'', variations:[] };
    }
    const category = typeof raw.category==='string' ? raw.category.trim() : '';
    const content = typeof raw.content==='string' ? raw.content.trim() : '';
    const advice = typeof raw.advice==='string' ? raw.advice.trim() : '';
    const variations = Array.isArray(raw.variations)
      ? raw.variations
          .map(variation=>{
            const title = variation && typeof variation.title==='string' ? variation.title.trim() : '';
            const content = variation && typeof variation.content==='string' ? variation.content.trim() : '';
            return { title, content };
          })
          .filter(variation=>variation.content !== '')
      : [];

    return { category, content, advice, variations };
  }

  function renderCards(){
    if(!elements.cardsContainer || !elements.cardTemplate) return;
    elements.cardsContainer.innerHTML = '';
    state.cards.forEach((card, index)=>{
      const cardElement = createCardElement(card, index);
      elements.cardsContainer.appendChild(cardElement);
    });
    updateCardDisplay();
  }

  function createCardElement(card, index){
    const fragment = elements.cardTemplate.content.cloneNode(true);
    const details = fragment.querySelector('.card-editor');
    const summary = fragment.querySelector('.card-editor__summary');
    const categoryInput = fragment.querySelector('input[name="category"]');
    const contentTextarea = fragment.querySelector('textarea[name="content"]');
    const adviceTextarea = fragment.querySelector('textarea[name="advice"]');
    const addVariationBtn = fragment.querySelector('[data-action="add-variation"]');
    const variationList = fragment.querySelector('[data-role="variation-list"]');
    const deleteCardBtn = fragment.querySelector('[data-action="delete-card"]');
    const moveUpBtn = fragment.querySelector('[data-action="move-up"]');
    const moveDownBtn = fragment.querySelector('[data-action="move-down"]');

    summary.textContent = formatCardSummary(card, index);
    categoryInput.value = card.category;
    contentTextarea.value = card.content;
    adviceTextarea.value = card.advice;

    categoryInput.addEventListener('input', event=>{
      card.category = event.target.value;
      summary.textContent = formatCardSummary(card, index);
    });

    contentTextarea.addEventListener('input', event=>{
      card.content = event.target.value;
      summary.textContent = formatCardSummary(card, index);
    });

    adviceTextarea.addEventListener('input', event=>{
      card.advice = event.target.value;
    });

    addVariationBtn.addEventListener('click', ()=>{
      card.variations.push({ title:'', content:'' });
      renderVariationEditors(variationList, card, index);
      setStatus('Variation ajoutée.', 'success');
    });

    deleteCardBtn.addEventListener('click', ()=>{
      if(confirm('Supprimer cette carte ?')){
        state.cards.splice(index, 1);
        renderCards();
        setStatus('Carte supprimée.', 'info');
      }
    });

    moveUpBtn.addEventListener('click', ()=>{
      moveCard(index, -1);
    });

    moveDownBtn.addEventListener('click', ()=>{
      moveCard(index, 1);
    });

    renderVariationEditors(variationList, card, index);

    return details;
  }

  function renderVariationEditors(container, card, cardIndex){
    if(!elements.variationTemplate) return;
    container.innerHTML = '';

    if(!Array.isArray(card.variations) || card.variations.length===0){
      const emptyLabel = document.createElement('p');
      emptyLabel.className = 'empty-variations';
      emptyLabel.textContent = 'Aucune variation pour cette carte.';
      container.appendChild(emptyLabel);
      return;
    }

    card.variations.forEach((variation, variationIndex)=>{
      const fragment = elements.variationTemplate.content.cloneNode(true);
      const variationEl = fragment.querySelector('.variation-item');
      const titleInput = fragment.querySelector('input[name="variationTitle"]');
      const contentTextarea = fragment.querySelector('textarea[name="variationContent"]');
      const deleteBtn = fragment.querySelector('[data-action="delete-variation"]');
      const moveUpBtn = fragment.querySelector('[data-action="move-variation-up"]');
      const moveDownBtn = fragment.querySelector('[data-action="move-variation-down"]');

      titleInput.value = variation.title;
      contentTextarea.value = variation.content;

      titleInput.addEventListener('input', event=>{
        variation.title = event.target.value;
      });

      contentTextarea.addEventListener('input', event=>{
        variation.content = event.target.value;
      });

      deleteBtn.addEventListener('click', ()=>{
        card.variations.splice(variationIndex, 1);
        renderVariationEditors(container, card, cardIndex);
        setStatus('Variation supprimée.', 'info');
      });

      moveUpBtn.addEventListener('click', ()=>{
        moveVariation(card, variationIndex, -1, container, cardIndex);
      });

      moveDownBtn.addEventListener('click', ()=>{
        moveVariation(card, variationIndex, 1, container, cardIndex);
      });

      container.appendChild(variationEl);
    });
  }

  function moveVariation(card, index, delta, container, cardIndex){
    const newIndex = index + delta;
    if(newIndex < 0 || newIndex >= card.variations.length){
      return;
    }
    const [item] = card.variations.splice(index, 1);
    card.variations.splice(newIndex, 0, item);
    renderVariationEditors(container, card, cardIndex);
  }

  function moveCard(index, delta){
    const newIndex = index + delta;
    if(newIndex < 0 || newIndex >= state.cards.length){
      return;
    }
    const [card] = state.cards.splice(index, 1);
    state.cards.splice(newIndex, 0, card);
    renderCards();
  }

  function updateCardDisplay(){
    if(!elements.cardCount || !elements.emptyState || !elements.cardsContainer){
      return;
    }
    const count = state.cards.length;
    elements.cardCount.textContent = count === 0 ? 'Aucune carte' : `${count} carte${count>1 ? 's' : ''}`;
    elements.emptyState.style.display = count === 0 ? 'block' : 'none';
    elements.cardsContainer.style.display = count === 0 ? 'none' : 'flex';
  }

  function formatCardSummary(card, index){
    const label = card.category || `Carte ${index+1}`;
    if(card.content){
      const preview = card.content.length > 50 ? `${card.content.slice(0, 47)}…` : card.content;
      return `${label} — ${preview}`;
    }
    return label;
  }

  function setStatus(message, type='success'){
    if(!elements.statusMessage) return;
    const value = message || '';
    elements.statusMessage.textContent = value;
    const classes = ['status'];
    if(value && type){
      classes.push(type);
    }
    elements.statusMessage.className = classes.join(' ');
  }

  function exportCardsFile(){
    if(state.cards.length === 0){
      setStatus('Aucune carte à exporter.', 'error');
      return;
    }

    const preparedCards = state.cards.map(card=>({
      category: card.category.trim(),
      content: card.content.trim(),
      advice: card.advice.trim(),
      variations: (card.variations || [])
        .map(variation=>{
          const rawTitle = typeof variation.title === 'string' ? variation.title.trim() : '';
          const rawContent = typeof variation.content === 'string' ? variation.content.trim() : '';
          if(!rawContent){
            return null;
          }
          const payload = { content: rawContent };
          if(rawTitle){
            payload.title = rawTitle;
          }
          return payload;
        })
        .filter(Boolean)
    })).filter(card=>card.content !== '');

    if(preparedCards.length === 0){
      setStatus('Impossible de générer un fichier sans contenu de carte.', 'error');
      return;
    }

    const fileContent = buildCardsFile(preparedCards);
    const blob = new Blob([fileContent], { type: 'application/javascript;charset=utf-8' });
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'cards_data.js';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);
    setStatus('Fichier cards_data.js généré avec succès.', 'success');
  }

  function buildCardsFile(cards){
    const dataString = JSON.stringify(cards, null, 2);
    const eventBridge = `(function(){\n  if(typeof window==='undefined' || typeof window.dispatchEvent!=='function'){\n    return;\n  }\n  const data = window.DISCUSSION_CARDS_DATA;\n  const detail = Array.isArray(data)\n    ? data\n    : (data && typeof data==='object' && Array.isArray(data.default) ? data.default : null);\n  if(!detail || detail.length===0){\n    return;\n  }\n  try{\n    const eventName = 'discussionCardsDataReady';\n    if(typeof window.CustomEvent==='function'){\n      window.dispatchEvent(new CustomEvent(eventName, { detail }));\n    }else if(typeof document!=='undefined' && document.createEvent){\n      const evt = document.createEvent('Event');\n      evt.initEvent(eventName, true, true);\n      evt.detail = detail;\n      window.dispatchEvent(evt);\n    }else{\n      const evt = new Event(eventName);\n      evt.detail = detail;\n      window.dispatchEvent(evt);\n    }\n  }catch(error){\n    console.warn('Impossible de signaler le chargement des données de discussion :', error);\n  }\n})();\n`;
    return `window.DISCUSSION_CARDS_DATA =\n${dataString};\n\n${eventBridge}`;
  }

  function handleDragOver(event){
    event.preventDefault();
    if(elements.dropZone){
      elements.dropZone.classList.add('drag-active');
    }
    setStatus('Relâchez pour importer.', 'info');
  }

  function handleDragLeave(event){
    event.preventDefault();
    if(elements.dropZone){
      elements.dropZone.classList.remove('drag-active');
    }
    setStatus('', 'info');
  }

  function handleDrop(event){
    event.preventDefault();
    if(elements.dropZone){
      elements.dropZone.classList.remove('drag-active');
    }
    const dataTransfer = event.dataTransfer;
    const files = dataTransfer && dataTransfer.files;
    if(files && files.length > 0){
      readFile(files[0]);
    }
  }

  function readFile(file){
    if(typeof File !== 'undefined' && !(file instanceof File)){
      setStatus('Fichier non valide.', 'error');
      return;
    }
    const reader = new FileReader();
    reader.onload = ()=>{
      try{
        const parsed = parseCardFileContent(String(reader.result || ''));
        if(parsed){
          loadCards(parsed, `Contenu importé depuis ${file.name}.`);
        }else{
          setStatus('Impossible de lire ce fichier. Vérifiez son format.', 'error');
        }
      }catch(error){
        console.error(error);
        setStatus('Erreur lors de la lecture du fichier.', 'error');
      }
    };
    reader.onerror = ()=>{
      setStatus('Lecture du fichier impossible.', 'error');
    };
    reader.readAsText(file, 'utf-8');
  }

  function parseCardFileContent(content){
    const text = content.trim();
    if(!text){
      return null;
    }

    try{
      const directJson = JSON.parse(text);
      if(Array.isArray(directJson)){
        return directJson;
      }
      if(directJson && Array.isArray(directJson.default)){
        return directJson.default;
      }
    }catch(_ignore){
      // Continue with fallback parsing
    }

    const arrayMatch = text.match(/=\s*(\[\s*[\s\S]*?\]);/);
    if(arrayMatch){
      try{
        return JSON.parse(arrayMatch[1]);
      }catch(parseError){
        console.warn('Impossible de parser le fichier comme JSON classique.', parseError);
      }
    }

    return null;
  }

  document.addEventListener('DOMContentLoaded', init);
})();
