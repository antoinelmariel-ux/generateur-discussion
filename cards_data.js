window.DISCUSSION_CARDS_DATA =
  [
  {
    "category": "Leadership d'équipe",
    "content": "Votre équipe de pharmacie clinique est divisée entre deux approches de validation des prescriptions. Les tensions s'accroissent et les échanges deviennent abrupts devant les internes, ce qui nuit à l'atmosphère du service.",
    "advice": "Commencez par créer un espace sécurisé pour entendre chaque point de vue sans jugement, par exemple lors d'une réunion courte et structurée. Reformulez les arguments pour clarifier les objectifs communs (qualité des délivrances, sécurité patient) et identifiez avec l'équipe des critères partagés pour évaluer les deux méthodes. Proposez ensuite un test limité dans le temps de l'approche combinée ou d'un protocole commun, assorti d'indicateurs de suivi. Enfin, fixez des règles de communication respectueuses et rappelez que les débats techniques doivent rester constructifs, notamment en présence des internes.",
    "variations": []
  },
  {
    "category": "Gestion des priorités",
    "content": "Un afflux inhabituel de préparations stériles urgentes arrive en fin de matinée alors que votre effectif est réduit. Vous devez arbitrer entre la continuité des tâches programmées et les demandes immédiates du bloc opératoire.",
    "advice": "Analysez rapidement la criticité de chaque demande avec les équipes prescriptrices pour établir un ordre de passage partagé. Communiquez ce classement à toute l'équipe afin que chacun sache sur quoi se concentrer. Réaffectez temporairement les ressources disponibles, quitte à différer certaines activités non critiques après validation du risque. Informez les services concernés des délais estimés et des raisons des arbitrages pour maintenir la confiance. Planifiez ensuite un retour d'expérience pour ajuster vos procédures de priorisation.",
    "variations": []
  },
  {
    "category": "Communication interservices",
    "content": "Les anesthésistes se plaignent d'un manque de visibilité sur la disponibilité des médicaments injectables critiques. Ils sollicitent directement vos préparateurs, ce qui crée des interruptions et des informations contradictoires.",
    "advice": "Invitez un représentant de chaque service à cartographier ensemble le circuit d'information actuel et les irritants. Définissez un canal unique et tracé (tableau partagé, message sécurisé quotidien) avec un horaire fixe de mise à jour. Désignez un interlocuteur référent côté pharmacie pour recevoir les demandes exceptionnelles et clarifiez les délais de réponse. Formez l'équipe aux éléments de langage communs afin d'assurer une communication cohérente, et mesurez la satisfaction des services partenaires après mise en place du nouveau dispositif.",
    "variations": []
  },
  {
    "category": "Accompagnement du changement",
    "content": "Vous déployez un nouveau module de prescription informatisée. Plusieurs pharmaciens seniors expriment leur scepticisme et continuent d'utiliser les anciens tableaux Excel, générant des doublons de travail pour les équipes.",
    "advice": "Identifiez les freins précis (perte de repères, craintes sur la fiabilité) lors d'entretiens courts. Mettez en avant les bénéfices concrets du module avec des cas d'usage propres au service et appuyez-vous sur des ambassadeurs volontaires. Organisez des sessions d'accompagnement sur le terrain et offrez un support de proximité les premières semaines. Fixez une date d'arrêt officielle des anciens outils, communiquez-la clairement et prévoyez un suivi régulier pour ajuster l'accompagnement selon les retours des utilisateurs.",
    "variations": []
  },
  {
    "category": "Qualité et conformité",
    "content": "Un audit d'accréditation est prévu dans six semaines et les revues de conformité des procédures de chimiothérapie n'ont pas été finalisées. L'équipe ressent une pression forte et ne sait pas par où commencer.",
    "advice": "Découpez la préparation en chantiers clairs (documentation, traçabilité, formation) et nommez un binôme pilote par chantier. Planifiez des points d'étape hebdomadaires courts avec un tableau de bord visible par tous pour suivre l'avancement. Allouez des créneaux dédiés dans les plannings pour avancer sur les revues et sécurisez l'appui éventuel d'un collègue extérieur pour relire les procédures sensibles. Enfin, valorisez chaque progression intermédiaire pour maintenir la motivation et réduisez la charge émotionnelle en rappelant le sens clinique de la démarche qualité.",
    "variations": []
  }
];

(function(){
  if(typeof window==='undefined' || typeof window.dispatchEvent!=='function'){
    return;
  }
  const data = window.DISCUSSION_CARDS_DATA;
  const detail = Array.isArray(data)
    ? data
    : (data && typeof data==='object' && Array.isArray(data.default) ? data.default : null);
  if(!detail || detail.length===0){
    return;
  }
  try{
    const eventName = 'discussionCardsDataReady';
    if(typeof window.CustomEvent==='function'){
      window.dispatchEvent(new CustomEvent(eventName, { detail }));
    }else if(typeof document!=='undefined' && document.createEvent){
      const evt = document.createEvent('Event');
      evt.initEvent(eventName, true, true);
      evt.detail = detail;
      window.dispatchEvent(evt);
    }else{
      const evt = new Event(eventName);
      evt.detail = detail;
      window.dispatchEvent(evt);
    }
  }catch(error){
    console.warn('Impossible de signaler le chargement des données de discussion :', error);
  }
})();
