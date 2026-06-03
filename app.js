const APP_VERSION = "v1.0.8";

const exampleConfig = {
  version: "1.0.8",
  updatedAt: "2026-06-03T00:00:00.000Z",
  principles: [
    { id: "principle-patient-benefit-legitimate-purpose", title: "Patient benefit and legitimate purpose", description: "Toute interaction avec un HCP doit avoir une finalité légitime et avoir pour but le bénéfice des patients. Les HCP ne peuvent être sollicités, soutenus ou rémunérés que lorsqu’il existe un besoin réel et cohérent avec cette finalité.", order: 1, isActive: true },
    { id: "principle-scientific-integrity-genuine-communication", title: "Scientific integrity and genuine communication", description: "Toute communication doit être exacte, équilibrée, étayée, à jour, non trompeuse et adaptée à l’audience, au pays et au contexte ; chacun doit comprendre qui s’exprime, dans quel rôle et avec quelle intention.", order: 2, isActive: true },
    { id: "principle-independence-professional-judgment", title: "Independence of professional judgment", description: "Aucune interaction ne doit influencer, récompenser ou sembler influencer le jugement professionnel indépendant d’un HCP ou d’une HCO.", order: 3, isActive: true },
    { id: "principle-transparency", title: "Transparency", description: "Nous assumons nos décisions et interactions qui peuvent être rendues visibles et comprises par des observateurs externes, sans ambiguïté ni risque de mauvaise interprétation. Notre rôle, nos intentions et nos financements doivent être clairement identifiés, correctement enregistrés et déclarés lorsque cela est requis.", order: 4, isActive: true },
    { id: "principle-accountability-responsible-ownership", title: "Accountability and responsible ownership", description: "Chaque interaction doit avoir un responsable clairement identifié, capable d’assumer la décision, l’exécution, le suivi, la supervision des tiers, l’escalade et la documentation jusqu’à la clôture.", order: 5, isActive: true },
    { id: "principle-societal-trust-stricter-standards", title: "Societal trust and stricter standards", description: "Nous appliquons la règle la plus stricte et allons au-delà du minimum légal lorsque la confiance des patients, des HCP, des autorités ou de la société pourrait être affectée.", order: 6, isActive: true }
  ],
  activities: [
    { id: "activity-congress", category: "Événement", title: "Participation à un congrès", description: "Inviter ou accompagner des professionnels de santé dans le cadre d'un congrès scientifique.", isActive: true },
    { id: "activity-hcp-selection", category: "Sélection", title: "Sélection d'experts", description: "Identifier des professionnels de santé pour intervenir, conseiller ou contribuer à un projet.", isActive: true },
    { id: "activity-content", category: "Information", title: "Création de supports", description: "Concevoir des supports scientifiques, promotionnels ou de formation destinés à des professionnels de santé.", isActive: true },
    { id: "activity-advisory-board", category: "Conseil", title: "Advisory board", description: "Réunir des experts afin de recueillir des retours structurés sur une question médicale ou stratégique.", isActive: true },
    { id: "activity-remuneration", category: "Contrat", title: "Rémunération d'un intervenant", description: "Définir une contrepartie financière pour une prestation réalisée par un professionnel de santé.", isActive: true },
    { id: "activity-sponsorship", category: "Partenariat", title: "Soutien à une association", description: "Apporter un soutien financier ou matériel à une association ou organisation liée à la santé.", isActive: true },
    { id: "activity-event", category: "Événement", title: "Organisation d'une réunion locale", description: "Organiser une rencontre professionnelle autour d'un thème scientifique ou médical.", isActive: true },
    { id: "activity-market-research", category: "Étude", title: "Étude de marché auprès de HCPs", description: "Interroger des professionnels de santé pour comprendre des besoins, pratiques ou perceptions.", isActive: true }
  ],
  matchings: [
    { id: "matching-transparency-congress", principleId: "principle-transparency", activityId: "activity-congress", expertImplication: "Clarifier l'objectif scientifique de la participation, les modalités de prise en charge et les limites d'hospitalité. Les participants doivent comprendre ce qui est couvert, pourquoi et selon quelles règles.", isActive: true },
    { id: "matching-legitimate-congress", principleId: "principle-patient-benefit-legitimate-purpose", activityId: "activity-congress", expertImplication: "Le congrès doit répondre à un besoin professionnel documenté : thème pertinent, audience adaptée et lien clair avec l'information scientifique attendue, sans invitation de convenance.", isActive: true },
    { id: "matching-independence-selection", principleId: "principle-independence-professional-judgment", activityId: "activity-hcp-selection", expertImplication: "La sélection doit reposer sur l'expertise, l'expérience et la pertinence du profil, jamais sur le volume d'activité, les prescriptions ou une attente commerciale implicite.", isActive: true },
    { id: "matching-accountability-selection", principleId: "principle-accountability-responsible-ownership", activityId: "activity-hcp-selection", expertImplication: "Documenter les critères de sélection, les validations et les éventuels conflits d'intérêts permet de démontrer que le choix est professionnel et défendable.", isActive: true },
    { id: "matching-patient-content", principleId: "principle-patient-benefit-legitimate-purpose", activityId: "activity-content", expertImplication: "Un support utile doit améliorer la qualité de l'information et éviter les messages déséquilibrés. La clarté, la vérifiabilité et la pertinence clinique priment sur l'impact promotionnel.", isActive: true },
    { id: "matching-scientific-content", principleId: "principle-scientific-integrity-genuine-communication", activityId: "activity-content", expertImplication: "Les sources, le statut du support, le public visé et le rôle du laboratoire doivent être compréhensibles pour éviter toute ambiguïté sur l'intention du contenu.", isActive: true },
    { id: "matching-legitimate-advisory", principleId: "principle-patient-benefit-legitimate-purpose", activityId: "activity-advisory-board", expertImplication: "Un advisory board doit partir d'une question précise que l'entreprise ne peut pas résoudre seule. Le nombre d'experts, l'ordre du jour et les livrables doivent être proportionnés.", isActive: true },
    { id: "matching-independence-advisory", principleId: "principle-independence-professional-judgment", activityId: "activity-advisory-board", expertImplication: "Les experts doivent pouvoir exprimer des avis critiques. La réunion ne doit pas servir de promotion déguisée ni orienter artificiellement les conclusions attendues.", isActive: true },
    { id: "matching-fmv-remuneration", principleId: "principle-societal-trust-stricter-standards", activityId: "activity-remuneration", expertImplication: "La rémunération doit correspondre au temps, à la préparation, au niveau d'expertise et au livrable attendu. Elle ne doit jamais récompenser ou encourager une prescription.", isActive: true },
    { id: "matching-accountability-remuneration", principleId: "principle-accountability-responsible-ownership", activityId: "activity-remuneration", expertImplication: "Le contrat, la justification du besoin, la preuve de service fait et le calcul de la rémunération doivent être conservés pour démontrer la conformité de l'interaction.", isActive: true },
    { id: "matching-transparency-sponsorship", principleId: "principle-transparency", activityId: "activity-sponsorship", expertImplication: "Le soutien doit être formalisé, traçable et distinct de toute attente commerciale. Les bénéficiaires, objectifs et montants doivent pouvoir être expliqués clairement.", isActive: true },
    { id: "matching-patient-sponsorship", principleId: "principle-patient-benefit-legitimate-purpose", activityId: "activity-sponsorship", expertImplication: "Le partenariat doit apporter une valeur identifiable pour l'information, le parcours de soin ou la communauté de patients, et non servir principalement un objectif d'influence.", isActive: true },
    { id: "matching-legitimate-event", principleId: "principle-patient-benefit-legitimate-purpose", activityId: "activity-event", expertImplication: "La réunion locale doit avoir un programme, une audience et un format cohérents avec son objectif scientifique. Le lieu et l'hospitalité doivent rester secondaires.", isActive: true },
    { id: "matching-accountability-event", principleId: "principle-accountability-responsible-ownership", activityId: "activity-event", expertImplication: "Conserver l'agenda, les invitations, les validations et les preuves de réalisation aide à expliquer la finalité professionnelle de l'événement.", isActive: true },
    { id: "matching-independence-research", principleId: "principle-independence-professional-judgment", activityId: "activity-market-research", expertImplication: "L'étude ne doit pas être un prétexte pour influencer les participants. Les questions doivent être neutres et la rémunération proportionnée au temps réellement consacré.", isActive: true },
    { id: "matching-transparency-research", principleId: "principle-transparency", activityId: "activity-market-research", expertImplication: "Les participants doivent comprendre le cadre de l'étude, l'usage attendu des réponses et les conditions de participation, sans collecte de données personnelles inutile.", isActive: true }
  ]
};

let appConfig = cloneConfig(exampleConfig);
let playedMatchingIds = new Set();
let currentDraw = null;
let implicationVisible = false;
let lastFocusedElement = null;
let selectedActivityCategories = new Set();

const elements = {};

document.addEventListener("DOMContentLoaded", () => {
  cacheElements();
  bindEvents();
  validateOrFallback();
  updateAllViews();
  showView(getInitialView());
});

function cacheElements() {
  elements.views = document.querySelectorAll(".view");
  elements.activityCategoryOptions = document.querySelector("#activity-category-options");
  elements.selectAllCategoriesButton = document.querySelector("#select-all-categories-button");
  elements.gameStatus = document.querySelector("#game-status");
  elements.backofficeMessage = document.querySelector("#backoffice-message");
  elements.drawPairButton = document.querySelector("#draw-pair-button");
  elements.resetSessionButton = document.querySelector("#reset-session-button");
  elements.showImplicationButton = document.querySelector("#show-implication-button");
  elements.implicationModal = document.querySelector("#implication-modal");
  elements.closeImplicationButton = document.querySelector("#close-implication-button");
  elements.implicationText = document.querySelector("#implication-text");
  elements.appVersion = document.querySelector("#app-version");
  elements.principleCard = document.querySelector("#principle-card");
  elements.activityCard = document.querySelector("#activity-card");
  elements.principleCardTitle = document.querySelector("#principle-card-title");
  elements.principleCardDescription = document.querySelector("#principle-card-description");
  elements.activityCardCategory = document.querySelector("#activity-card-category");
  elements.activityCardTitle = document.querySelector("#activity-card-title");
  elements.activityCardDescription = document.querySelector("#activity-card-description");
  elements.importInput = document.querySelector("#import-config-input");
  elements.exportButton = document.querySelector("#export-config-button");
  elements.principleForm = document.querySelector("#principle-form");
  elements.activityForm = document.querySelector("#activity-form");
  elements.matchingForm = document.querySelector("#matching-form");
  elements.principlesList = document.querySelector("#principles-list");
  elements.activitiesList = document.querySelector("#activities-list");
  elements.matchingsList = document.querySelector("#matchings-list");
  elements.matchingPrinciple = document.querySelector("#matching-principle");
  elements.matchingActivity = document.querySelector("#matching-activity");
}

function bindEvents() {
  document.querySelectorAll("[data-view-link]").forEach((button) => {
    button.addEventListener("click", () => showView(button.dataset.viewLink));
  });
  elements.selectAllCategoriesButton.addEventListener("click", selectAllActivityCategories);
  document.querySelectorAll("[data-draw-proxy]").forEach((button) => button.addEventListener("click", drawPair));
  elements.drawPairButton.addEventListener("click", drawPair);
  elements.resetSessionButton.addEventListener("click", resetSession);
  elements.showImplicationButton.addEventListener("click", showImplication);
  elements.closeImplicationButton.addEventListener("click", closeImplication);
  elements.implicationModal.addEventListener("click", (event) => {
    if (event.target === elements.implicationModal) {
      closeImplication();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !elements.implicationModal.hidden) {
      closeImplication();
    }
  });
  elements.exportButton.addEventListener("click", exportConfig);
  elements.importInput.addEventListener("change", importConfig);
  elements.principleForm.addEventListener("submit", savePrinciple);
  elements.activityForm.addEventListener("submit", saveActivity);
  elements.matchingForm.addEventListener("submit", saveMatching);
  document.querySelector("#cancel-principle-edit").addEventListener("click", resetPrincipleForm);
  document.querySelector("#cancel-activity-edit").addEventListener("click", resetActivityForm);
  document.querySelector("#cancel-matching-edit").addEventListener("click", resetMatchingForm);
  document.querySelectorAll("[data-tab]").forEach((button) => button.addEventListener("click", () => showTab(button.dataset.tab)));
}

function showView(viewName) {
  elements.views.forEach((view) => view.classList.toggle("is-active", view.id === `${viewName}-view`));
}

function getInitialView() {
  const params = new URLSearchParams(window.location.search);
  return params.has("backoffice") || params.get("view") === "backoffice" ? "backoffice" : "home";
}

function showTab(tabName) {
  document.querySelectorAll("[data-tab]").forEach((button) => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
  document.querySelectorAll(".tab-panel").forEach((panel) => {
    const isActive = panel.id === `${tabName}-panel`;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

function validateOrFallback() {
  const validation = validateConfig(appConfig);
  if (!validation.isValid) {
    appConfig = cloneConfig(exampleConfig);
  }
}

function updateAllViews() {
  syncSelectedActivityCategories();
  renderHomeCategorySelector();
  renderGame();
  renderBackoffice();
  elements.appVersion.textContent = APP_VERSION;
}

function getEligibleMatchings() {
  const activePrincipleIds = new Set(appConfig.principles.filter((principle) => principle.isActive).map((principle) => principle.id));
  const activeActivityIds = new Set(
    appConfig.activities
      .filter((activity) => activity.isActive && selectedActivityCategories.has(activity.category))
      .map((activity) => activity.id)
  );
  return appConfig.matchings.filter((matching) => matching.isActive && activePrincipleIds.has(matching.principleId) && activeActivityIds.has(matching.activityId));
}

function getActivityCategories() {
  return [...new Set(appConfig.activities.filter((activity) => activity.isActive).map((activity) => activity.category))].sort((a, b) => a.localeCompare(b, "fr"));
}

function syncSelectedActivityCategories() {
  const availableCategories = getActivityCategories();
  if (selectedActivityCategories.size === 0) {
    selectedActivityCategories = new Set(availableCategories);
    return;
  }

  selectedActivityCategories = new Set(availableCategories.filter((category) => selectedActivityCategories.has(category)));
  if (selectedActivityCategories.size === 0 && availableCategories.length > 0) {
    selectedActivityCategories = new Set(availableCategories);
  }
}

function renderHomeCategorySelector() {
  const categories = getActivityCategories();
  elements.selectAllCategoriesButton.disabled = categories.length === 0 || selectedActivityCategories.size === categories.length;
  elements.activityCategoryOptions.innerHTML = categories.length > 0
    ? categories.map((category) => categoryOptionTemplate(category)).join("")
    : '<p class="empty-selector-message">Aucune catégorie active disponible.</p>';
  elements.activityCategoryOptions.querySelectorAll("[data-activity-category]").forEach((input) => {
    input.addEventListener("change", toggleActivityCategory);
  });
}

function categoryOptionTemplate(category) {
  const categoryId = `activity-category-${createId("option", category)}`;
  return `
    <label class="category-option" for="${categoryId}">
      <input id="${categoryId}" type="checkbox" value="${escapeHtml(category)}" data-activity-category ${selectedActivityCategories.has(category) ? "checked" : ""} />
      <span>${escapeHtml(category)}</span>
    </label>
  `;
}

function toggleActivityCategory(event) {
  const category = event.target.value;
  if (event.target.checked) {
    selectedActivityCategories.add(category);
  } else {
    selectedActivityCategories.delete(category);
  }
  resetSessionAfterCategoryChange();
}

function selectAllActivityCategories() {
  selectedActivityCategories = new Set(getActivityCategories());
  resetSessionAfterCategoryChange();
}

function resetSessionAfterCategoryChange() {
  playedMatchingIds = new Set();
  currentDraw = null;
  closeImplication(false);
  setGameMessage("La sélection de catégories a été mise à jour. Vous pouvez piocher une nouvelle paire.", "success");
  renderHomeCategorySelector();
  renderGame();
}

function drawPair() {
  const eligibleMatchings = getEligibleMatchings();
  const remainingMatchings = eligibleMatchings.filter((matching) => !playedMatchingIds.has(matching.id));
  closeImplication(false);

  if (eligibleMatchings.length === 0) {
    currentDraw = null;
    setGameMessage("Aucune paire valide disponible. Vérifiez les cartes actives et les associations dans le backoffice.", "error");
    renderGame();
    return;
  }

  if (remainingMatchings.length === 0) {
    currentDraw = null;
    setGameMessage("Toutes les paires disponibles ont été jouées. Réinitialisez la session pour recommencer.", "success");
    renderGame();
    return;
  }

  const matching = remainingMatchings[Math.floor(Math.random() * remainingMatchings.length)];
  playedMatchingIds.add(matching.id);
  currentDraw = {
    matching,
    principle: appConfig.principles.find((principle) => principle.id === matching.principleId),
    activity: appConfig.activities.find((activity) => activity.id === matching.activityId)
  };
  setGameMessage(`${remainingMatchings.length - 1} paire(s) restante(s) après ce tirage.`, "success");
  renderGame();
}

function resetSession() {
  playedMatchingIds = new Set();
  currentDraw = null;
  closeImplication(false);
  setGameMessage("Session réinitialisée. Vous pouvez piocher une nouvelle paire.", "success");
  renderGame();
}

function showImplication() {
  if (!currentDraw) {
    return;
  }
  implicationVisible = true;
  lastFocusedElement = document.activeElement;
  const implication = currentDraw.matching.expertImplication.trim();
  elements.implicationText.textContent = implication || "Aucune implication experte n'est renseignée pour cette association. Complétez-la dans le backoffice.";
  elements.implicationModal.hidden = false;
  document.body.classList.add("modal-open");
  elements.closeImplicationButton.focus();
}

function closeImplication(restoreFocus = true) {
  implicationVisible = false;
  elements.implicationModal.hidden = true;
  document.body.classList.remove("modal-open");
  if (restoreFocus && lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
  lastFocusedElement = null;
}

function renderGame() {
  const eligibleMatchings = getEligibleMatchings();
  const remainingCount = eligibleMatchings.filter((matching) => !playedMatchingIds.has(matching.id)).length;

  elements.drawPairButton.disabled = remainingCount === 0;
  elements.showImplicationButton.disabled = !currentDraw;

  if (!currentDraw) {
    elements.principleCard.classList.remove("is-flipped");
    elements.activityCard.classList.remove("is-flipped");
    elements.principleCardTitle.textContent = "Aucun tirage";
    elements.principleCardDescription.textContent = "Piochez une paire pour révéler un principe.";
    elements.activityCardCategory.textContent = "Activité";
    elements.activityCardTitle.textContent = "Aucun tirage";
    elements.activityCardDescription.textContent = "Piochez une paire pour révéler une activité.";
    return;
  }

  elements.principleCard.classList.add("is-flipped");
  elements.activityCard.classList.add("is-flipped");
  elements.principleCardTitle.textContent = currentDraw.principle.title;
  elements.principleCardDescription.textContent = currentDraw.principle.description;
  elements.activityCardCategory.textContent = currentDraw.activity.category || "Activité";
  elements.activityCardTitle.textContent = currentDraw.activity.title;
  elements.activityCardDescription.textContent = currentDraw.activity.description;

}

function renderBackoffice() {
  renderPrincipleOptions();
  renderActivityOptions();
  renderPrinciplesList();
  renderActivitiesList();
  renderMatchingsList();
}

function renderPrincipleOptions() {
  elements.matchingPrinciple.innerHTML = appConfig.principles
    .sort((a, b) => Number(a.order) - Number(b.order))
    .map((principle) => `<option value="${escapeHtml(principle.id)}">${escapeHtml(principle.title)}</option>`)
    .join("");
}

function renderActivityOptions() {
  elements.matchingActivity.innerHTML = appConfig.activities
    .map((activity) => `<option value="${escapeHtml(activity.id)}">${escapeHtml(activity.title)}</option>`)
    .join("");
}

function renderPrinciplesList() {
  elements.principlesList.innerHTML = appConfig.principles
    .slice()
    .sort((a, b) => Number(a.order) - Number(b.order))
    .map((principle) => adminItemTemplate({
      title: principle.title,
      description: principle.description,
      meta: `Ordre ${principle.order}`,
      active: principle.isActive,
      editAction: `editPrinciple('${principle.id}')`,
      deleteAction: `deletePrinciple('${principle.id}')`
    }))
    .join("") || "<p>Aucun principe configuré.</p>";
}

function renderActivitiesList() {
  elements.activitiesList.innerHTML = appConfig.activities
    .map((activity) => adminItemTemplate({
      title: activity.title,
      description: activity.description,
      meta: activity.category,
      active: activity.isActive,
      editAction: `editActivity('${activity.id}')`,
      deleteAction: `deleteActivity('${activity.id}')`
    }))
    .join("") || "<p>Aucune activité configurée.</p>";
}

function renderMatchingsList() {
  elements.matchingsList.innerHTML = appConfig.matchings
    .map((matching) => {
      const principle = appConfig.principles.find((item) => item.id === matching.principleId);
      const activity = appConfig.activities.find((item) => item.id === matching.activityId);
      return adminItemTemplate({
        title: `${principle?.title || "Principe supprimé"} / ${activity?.title || "Activité supprimée"}`,
        description: matching.expertImplication || "Implication experte non renseignée.",
        meta: matching.id,
        active: matching.isActive,
        editAction: `editMatching('${matching.id}')`,
        deleteAction: `deleteMatching('${matching.id}')`
      });
    })
    .join("") || "<p>Aucune association configurée.</p>";
}

function adminItemTemplate(item) {
  return `
    <article class="admin-item">
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.description)}</p>
        <span class="meta"><span class="badge ${item.active ? "active" : "inactive"}">${item.active ? "Actif" : "Inactif"}</span><span>${escapeHtml(item.meta)}</span></span>
      </div>
      <div class="admin-item-actions">
        <button class="icon-button" type="button" onclick="${item.editAction}">Modifier</button>
        <button class="icon-button danger" type="button" onclick="${item.deleteAction}">Supprimer</button>
      </div>
    </article>`;
}

function savePrinciple(event) {
  event.preventDefault();
  const idInput = document.querySelector("#principle-id");
  const existingId = idInput.value;
  const title = document.querySelector("#principle-title").value.trim();
  const description = document.querySelector("#principle-description").value.trim();
  if (!title || !description) {
    setBackofficeMessage("Le titre et la description du principe sont obligatoires.", "error");
    return;
  }
  const principle = {
    id: existingId || createId("principle", title),
    title,
    description,
    order: Number(document.querySelector("#principle-order").value) || appConfig.principles.length + 1,
    isActive: document.querySelector("#principle-active").checked
  };
  upsert(appConfig.principles, principle);
  resetPrincipleForm();
  afterConfigChange("Principe enregistré.");
}

function saveActivity(event) {
  event.preventDefault();
  const existingId = document.querySelector("#activity-id").value;
  const category = document.querySelector("#activity-category").value.trim();
  const title = document.querySelector("#activity-title").value.trim();
  const description = document.querySelector("#activity-description").value.trim();
  if (!category || !title || !description) {
    setBackofficeMessage("La catégorie, le titre et la description de l'activité sont obligatoires.", "error");
    return;
  }
  const activity = { id: existingId || createId("activity", title), category, title, description, isActive: document.querySelector("#activity-active").checked };
  upsert(appConfig.activities, activity);
  resetActivityForm();
  afterConfigChange("Activité enregistrée.");
}

function saveMatching(event) {
  event.preventDefault();
  const principleId = elements.matchingPrinciple.value;
  const activityId = elements.matchingActivity.value;
  if (!principleId || !activityId) {
    setBackofficeMessage("L'association doit contenir un principe et une activité.", "error");
    return;
  }
  const existingId = document.querySelector("#matching-id").value;
  const matching = {
    id: existingId || createId("matching", `${principleId}-${activityId}`),
    principleId,
    activityId,
    expertImplication: document.querySelector("#matching-implication").value.trim(),
    isActive: document.querySelector("#matching-active").checked
  };
  upsert(appConfig.matchings, matching);
  resetMatchingForm();
  afterConfigChange("Association enregistrée.");
}

function afterConfigChange(message) {
  appConfig.updatedAt = new Date().toISOString();
  playedMatchingIds = new Set();
  currentDraw = null;
  setBackofficeMessage(message, "success");
  updateAllViews();
}

function upsert(collection, item) {
  const index = collection.findIndex((entry) => entry.id === item.id);
  if (index >= 0) {
    collection[index] = item;
  } else {
    collection.push(item);
  }
}

window.editPrinciple = function editPrinciple(id) {
  const principle = appConfig.principles.find((item) => item.id === id);
  if (!principle) return;
  document.querySelector("#principle-id").value = principle.id;
  document.querySelector("#principle-title").value = principle.title;
  document.querySelector("#principle-description").value = principle.description;
  document.querySelector("#principle-order").value = principle.order;
  document.querySelector("#principle-active").checked = principle.isActive;
};

window.deletePrinciple = function deletePrinciple(id) {
  appConfig.principles = appConfig.principles.filter((item) => item.id !== id);
  appConfig.matchings = appConfig.matchings.filter((item) => item.principleId !== id);
  afterConfigChange("Principe supprimé avec ses associations.");
};

window.editActivity = function editActivity(id) {
  const activity = appConfig.activities.find((item) => item.id === id);
  if (!activity) return;
  document.querySelector("#activity-id").value = activity.id;
  document.querySelector("#activity-category").value = activity.category;
  document.querySelector("#activity-title").value = activity.title;
  document.querySelector("#activity-description").value = activity.description;
  document.querySelector("#activity-active").checked = activity.isActive;
};

window.deleteActivity = function deleteActivity(id) {
  appConfig.activities = appConfig.activities.filter((item) => item.id !== id);
  appConfig.matchings = appConfig.matchings.filter((item) => item.activityId !== id);
  afterConfigChange("Activité supprimée avec ses associations.");
};

window.editMatching = function editMatching(id) {
  const matching = appConfig.matchings.find((item) => item.id === id);
  if (!matching) return;
  document.querySelector("#matching-id").value = matching.id;
  elements.matchingPrinciple.value = matching.principleId;
  elements.matchingActivity.value = matching.activityId;
  document.querySelector("#matching-implication").value = matching.expertImplication;
  document.querySelector("#matching-active").checked = matching.isActive;
};

window.deleteMatching = function deleteMatching(id) {
  appConfig.matchings = appConfig.matchings.filter((item) => item.id !== id);
  afterConfigChange("Association supprimée.");
};

function resetPrincipleForm() {
  elements.principleForm.reset();
  document.querySelector("#principle-id").value = "";
  document.querySelector("#principle-order").value = appConfig.principles.length + 1;
  document.querySelector("#principle-active").checked = true;
}

function resetActivityForm() {
  elements.activityForm.reset();
  document.querySelector("#activity-id").value = "";
  document.querySelector("#activity-active").checked = true;
}

function resetMatchingForm() {
  elements.matchingForm.reset();
  document.querySelector("#matching-id").value = "";
  document.querySelector("#matching-active").checked = true;
}

function importConfig(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsedConfig = JSON.parse(reader.result);
      const validation = validateConfig(parsedConfig);
      if (!validation.isValid) {
        throw new Error(validation.errors.join(" "));
      }
      appConfig = normalizeConfig(parsedConfig);
      playedMatchingIds = new Set();
      currentDraw = null;
      setBackofficeMessage("Configuration importée avec succès.", "success");
      updateAllViews();
    } catch (error) {
      setBackofficeMessage(`JSON invalide : ${error.message}. La configuration actuelle est conservée.`, "error");
    } finally {
      elements.importInput.value = "";
    }
  };
  reader.readAsText(file);
}

function exportConfig() {
  const exportableConfig = normalizeConfig({ ...appConfig, updatedAt: new Date().toISOString() });
  const blob = new Blob([JSON.stringify(exportableConfig, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "ethical-quizz-data.json";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  setBackofficeMessage("Export JSON prêt.", "success");
}

function validateConfig(config) {
  const errors = [];
  if (!config || typeof config !== "object") errors.push("La configuration doit être un objet.");
  if (!Array.isArray(config?.principles)) errors.push("principles doit être un tableau.");
  if (!Array.isArray(config?.activities)) errors.push("activities doit être un tableau.");
  if (!Array.isArray(config?.matchings)) errors.push("matchings doit être un tableau.");
  if (errors.length) return { isValid: false, errors };

  config.principles.forEach((principle, index) => {
    if (!principle.id || !principle.title || !principle.description) errors.push(`Principe ${index + 1} incomplet.`);
  });
  config.activities.forEach((activity, index) => {
    if (!activity.id || !activity.category || !activity.title || !activity.description) errors.push(`Activité ${index + 1} incomplète.`);
  });
  config.matchings.forEach((matching, index) => {
    if (!matching.id || !matching.principleId || !matching.activityId) errors.push(`Association ${index + 1} incomplète.`);
  });
  return { isValid: errors.length === 0, errors };
}

function normalizeConfig(config) {
  return {
    version: String(config.version || "1.0.0"),
    updatedAt: String(config.updatedAt || new Date().toISOString()),
    principles: config.principles.map((principle) => ({
      id: String(principle.id),
      title: String(principle.title),
      description: String(principle.description),
      order: Number(principle.order) || 0,
      isActive: Boolean(principle.isActive)
    })),
    activities: config.activities.map((activity) => ({
      id: String(activity.id),
      category: String(activity.category),
      title: String(activity.title),
      description: String(activity.description),
      isActive: Boolean(activity.isActive)
    })),
    matchings: config.matchings.map((matching) => ({
      id: String(matching.id),
      principleId: String(matching.principleId),
      activityId: String(matching.activityId),
      expertImplication: String(matching.expertImplication || ""),
      isActive: Boolean(matching.isActive)
    }))
  };
}

function setGameMessage(message, type) {
  elements.gameStatus.textContent = message;
  elements.gameStatus.className = `message ${type ? `is-${type}` : ""}`;
}

function setBackofficeMessage(message, type) {
  elements.backofficeMessage.textContent = message;
  elements.backofficeMessage.className = `message ${type ? `is-${type}` : ""}`;
}

function createId(prefix, value) {
  const base = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "item";
  let candidate = `${prefix}-${base}`;
  const existingIds = new Set([...appConfig.principles, ...appConfig.activities, ...appConfig.matchings].map((item) => item.id));
  let index = 2;
  while (existingIds.has(candidate)) {
    candidate = `${prefix}-${base}-${index}`;
    index += 1;
  }
  return candidate;
}

function cloneConfig(config) {
  return JSON.parse(JSON.stringify(config));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
