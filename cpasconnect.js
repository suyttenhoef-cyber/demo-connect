/* ============================================================
   DONNÉES — Collection CPASConnect.
   Pour une autre collection : dupliquez ce fichier (orangeconnect.js…)
   et remplacez RUBRIQUES / CONTENT / ASSIST. Le moteur ne change pas.
   ============================================================ */
const RUBRIQUES = [
  {id:"finances-cpas",     name:"Finances des CPAS"},
  {id:"subsides",          name:"Subsides"},
  {id:"fonctionnement",    name:"Fonctionnement des CPAS", contient:"Patrimoine", deepen:true},
  {id:"aide-sociale",      name:"Aide sociale et intégration"},
  {id:"logement",          name:"Logement"},
  {id:"marches-publics",   name:"Marchés publics"},
  {id:"protection-donnee", name:"Protection de la donnée"},
  {id:"droits-quotidiens", name:"Droits Quotidiens"},
];
// type -> couleur de tag/thumbnail (cohérence visuelle)
const TYPES = {
  "Documents":{c:"#4a7fb5"}, "E-learning":{c:"#1a8f8e"}, "Foire aux questions":{c:"#6d3bf0"},
  "Highlights":{c:"#c47a1a"}, "Informations pays":{c:"#3b9e6b"}, "Jurisprudence":{c:"#b4453a"},
  "Législation":{c:"#5a6abf"}, "Livres":{c:"#2f7a4d"}, "Magazines":{c:"#a8497a"},
  "Modèles":{c:"#1c5fa0"}, "Procédures":{c:"#7a6a3a"},
};
const TYPE_ICONS={"Documents":"doc","E-learning":"screen","Foire aux questions":"help","Highlights":"news",
  "Informations pays":"pin","Jurisprudence":"gavel","Législation":"law","Livres":"book","Magazines":"mag",
  "Modèles":"model","Procédures":"flow"};

const CONTENT = [
  {id:"subsides-fse", type:"Documents", rub:"subsides", featured:false, locked:false,
   title:"Les subsides FSE+ pour l'insertion socioprofessionnelle",
   tags:["FSE+","subsides","insertion","article 60"], author:"Rédaction CPASConnect", date:"06/05/2026", trend:26, score:7.20,
   summary:"Comment mobiliser les fonds FSE+ pour financer des dispositifs d'insertion socioprofessionnelle portés par le CPAS.",
   body:["Le Fonds social européen plus cofinance des actions d'insertion : mises à l'emploi article 60, accompagnement, formation. Les appels à projets fixent les conditions d'éligibilité et de cofinancement.",
     "Un dossier solide repose sur des objectifs mesurables et un suivi des participants conforme aux exigences de reporting du programme."],
   related:["subsides-procedure","piis"]},

  {id:"subsides-ape", type:"Documents", rub:"subsides", featured:false, locked:true,
   title:"Aides à l'emploi : dispositifs APE / ACS et alternatives",
   tags:["APE","ACS","aides à l'emploi"], author:"Rédaction CPASConnect", date:"20/03/2026", trend:31, score:7.00,
   summary:"Panorama des aides régionales à l'emploi mobilisables par le CPAS et points d'attention lors de leur cumul.",
   body:[], related:["subsides-fse"]},

  {id:"subsides-procedure", type:"Procédures", rub:"subsides", featured:false, locked:false,
   title:"Procédure — Constituer un dossier de demande de subside",
   tags:["procédure","dossier","subside","échéancier"], author:"Rédaction CPASConnect", date:"02/05/2026", trend:14, score:6.70,
   summary:"Étapes clés pour préparer un dossier de subside recevable : éligibilité, pièces, délais et justification.",
   body:["Avant tout dépôt, vérifiez l'éligibilité de l'action et la complétude des pièces. Un rétroplanning évite les dépassements de délais, souvent fatals à la recevabilité."],
   related:["subsides-fse"]},

  {id:"logement-adresse-ref", type:"Documents", rub:"logement", featured:false, locked:false, fav:true,
   title:"Le droit au logement et l'adresse de référence",
   tags:["logement","adresse de référence","sans-abri","domiciliation"], author:"Rédaction CPASConnect", date:"11/04/2026", trend:22, score:7.10,
   summary:"Rôle du CPAS dans l'octroi d'une adresse de référence aux personnes sans résidence stable et accès aux droits.",
   body:["L'adresse de référence permet à une personne sans domicile fixe de rester joignable et de conserver l'accès à ses droits sociaux. Le CPAS apprécie la demande et assure le suivi.",
     "Elle se distingue de l'inscription en résidence principale et obéit à des conditions et obligations propres, tant pour le CPAS que pour la personne."],
   related:["logement-garantie","aide-medicale"]},

  {id:"logement-garantie", type:"Documents", rub:"logement", featured:false, locked:false,
   title:"Garantie locative : l'intervention du CPAS",
   tags:["garantie locative","logement","caution"], author:"Rédaction CPASConnect", date:"25/03/2026", trend:19, score:6.90,
   summary:"Les formes d'intervention du CPAS dans la constitution d'une garantie locative et leurs modalités de récupération.",
   body:["Le CPAS peut intervenir de plusieurs manières dans la garantie locative, de l'aide directe à la garantie écrite. Le choix dépend de la situation du ménage et du bailleur.",
     "Les modalités de récupération, le cas échéant, sont fixées dès l'octroi pour garantir la transparence vis-à-vis du bénéficiaire."],
   related:["logement-adresse-ref"]},

  {id:"logement-modele", type:"Modèles", rub:"logement", featured:false, locked:true,
   title:"Modèle — Convention d'adresse de référence",
   tags:["modèle","convention","adresse de référence"], author:"Rédaction CPASConnect", date:"30/01/2026", trend:40, score:7.40,
   summary:"Trame de convention prête à compléter, fixant droits et obligations liés à l'adresse de référence.",
   body:[], related:["logement-adresse-ref"]},

  {id:"rgpd-principes", type:"Documents", rub:"protection-donnee", featured:false, locked:false,
   title:"RGPD au CPAS : principes et bases légales du traitement",
   tags:["RGPD","données","base légale","finalité","secret professionnel"], author:"Rédaction CPASConnect", date:"08/04/2026", trend:35, score:7.60,
   summary:"Les principes pour traiter des données sociales : finalité, minimisation, base légale et articulation avec le secret professionnel.",
   body:["Tout traitement de données au CPAS doit reposer sur une base légale et une finalité déterminée. La minimisation impose de ne collecter que ce qui est nécessaire à la décision.",
     "Le RGPD se combine avec le secret professionnel du travailleur social : les deux cadres se renforcent plutôt qu'ils ne s'opposent."],
   related:["rgpd-registre","rgpd-modele"]},

  {id:"rgpd-registre", type:"Foire aux questions", rub:"protection-donnee", featured:false, locked:false,
   title:"FAQ — Le registre des activités de traitement",
   tags:["registre","traitement","responsable","DPO"], author:"Rédaction CPASConnect", date:"18/03/2026", trend:13, score:6.50,
   summary:"Ce qu'il faut documenter dans le registre des activités de traitement et qui en a la responsabilité.",
   body:["Le registre recense les traitements, leurs finalités, les catégories de données et de destinataires, et les durées de conservation. Il se tient à jour en continu, sous la supervision du délégué à la protection des données."],
   related:["rgpd-principes"]},

  {id:"rgpd-modele", type:"Modèles", rub:"protection-donnee", featured:false, locked:true,
   title:"Modèle — Mention d'information RGPD au bénéficiaire",
   tags:["modèle","information","RGPD","transparence"], author:"Rédaction CPASConnect", date:"12/02/2026", trend:28, score:7.10,
   summary:"Mention type informant le bénéficiaire du traitement de ses données, conforme à l'obligation de transparence.",
   body:[], related:["rgpd-principes"]},

  {id:"gemcom-finances", type:"Magazines", rub:"finances-cpas", featured:false, locked:false,
   title:"Magazine — Gemcom : finances locales (juin 2026)",
   tags:["magazine","Gemcom","finances locales"], author:"Rédaction FinancesConnect", date:"01/06/2026", trend:11, score:6.30,
   summary:"Le numéro de juin fait le point sur l'actualité budgétaire et comptable des pouvoirs locaux.",
   body:["Au sommaire : suivi de l'inflation sur les budgets, nouveautés de la tutelle et retours d'expérience de terrain."],
   related:["budget-2026"]},

  {id:"infos-pays-asile", type:"Informations pays", rub:"droits-quotidiens", featured:false, locked:true,
   title:"Informations pays — Demandeurs d'asile : ressources par pays",
   tags:["informations pays","asile","aide médicale","ressources"], author:"Rédaction CPASConnect", date:"15/05/2026", trend:24, score:6.80,
   summary:"Fiches pays pour évaluer les situations des demandeurs d'asile et orienter l'aide.",
   body:[], related:["aide-medicale"]},

  {id:"ris-conditions", type:"Documents", rub:"aide-sociale", featured:true, locked:false, fav:true,
   title:"Les conditions d'octroi du revenu d'intégration sociale (RIS)",
   tags:["RIS","DIS","conditions","disposition au travail"], author:"Rédaction CPASConnect",
   date:"12/05/2026", trend:47, score:8.40,
   summary:"Synthèse des cinq conditions cumulatives à vérifier avant l'octroi du revenu d'intégration : résidence, âge, nationalité, ressources et disposition au travail.",
   body:[
     "Le droit à l'intégration sociale repose sur cinq conditions cumulatives : toutes doivent être réunies au moment de la demande et tout au long de l'octroi. L'agent traitant les vérifie systématiquement via l'enquête sociale.",
     "## Les cinq conditions cumulatives",
     "Les conditions portent sur la résidence effective en Belgique, l'âge (18 ans ou situation assimilée), la nationalité ou le statut de séjour, l'absence de ressources suffisantes et la disposition au travail. L'absence de l'une seule d'entre elles suffit à justifier un refus.",
     "## La résidence effective",
     "La condition de résidence s'apprécie de manière factuelle, indépendamment de l'inscription au registre de la population. Une adresse de référence au CPAS n'est pas suffisante : la présence réelle et habituelle sur le territoire belge est déterminante.",
     "## La disposition au travail",
     "La disposition au travail s'apprécie de manière concrète et individualisée. Plusieurs dispenses sont légalement prévues : raisons de santé attestées médicalement, charges familiales importantes, suivi d'une formation professionnelle reconnue, ou autre raison d'équité appréciée par le CPAS. Le PIIS formalise l'accompagnement vers l'insertion."],
   related:["piis","ris-reforme","enquete-mener"]},

  {id:"piis", type:"Documents", rub:"aide-sociale", featured:false, locked:false,
   title:"Le PIIS : projet individualisé d'intégration sociale",
   tags:["PIIS","contrat","insertion"], author:"Rédaction CPASConnect", date:"03/04/2026", trend:21, score:7.10,
   summary:"Quand le PIIS est-il obligatoire ? Comment le construire avec le bénéficiaire et quelles conséquences en cas de non-respect ?",
   body:["Le projet individualisé d'intégration sociale formalise un accompagnement négocié entre le CPAS et le bénéficiaire. Son contenu se construit avec la personne : la co-construction conditionne l'adhésion et l'efficacité de la démarche."],
   related:["ris-conditions","enquete-mener"]},

  {id:"ris-reforme", type:"Highlights", rub:"aide-sociale", featured:true, locked:true,
   title:"Dossier spécial — L'impact de la réforme du chômage sur le CPAS",
   tags:["réforme","chômage","RIS","afflux"], author:"Comité scientifique CPASConnect", date:"16/06/2026", trend:133, score:9.10,
   summary:"Afflux attendu de nouveaux demandeurs, articulation entre fin de droit aux allocations et droit au RIS, dispense « aidant proche », outils de gestion.",
   body:[], related:["ris-conditions","mediation-dossier"]},

  {id:"aide-medicale", type:"Documents", rub:"droits-quotidiens", featured:false, locked:false,
   title:"Aide médicale urgente et aide sociale équivalente",
   tags:["aide médicale urgente","AMU","aide équivalente"], author:"Rédaction CPASConnect", date:"28/03/2026", trend:18, score:6.80,
   summary:"Distinguer l'aide médicale urgente de l'aide sociale équivalente et identifier le débiteur de l'intervention.",
   body:["L'aide médicale urgente peut couvrir des soins préventifs comme curatifs ; le terme « urgente » ne se limite pas aux situations vitales. Une attestation médicale en établit le caractère.",
     "La compétence territoriale et la prise en charge financière obéissent à des règles spécifiques à vérifier dès l'ouverture du dossier."],
   related:["enquete-mener","decision-modele"]},

  {id:"decision-modele", type:"Modèles", rub:"fonctionnement", featured:false, locked:true,
   title:"Modèle — Décision motivée d'octroi d'aide sociale",
   tags:["modèle","décision","motivation"], author:"Rédaction CPASConnect", date:"10/02/2026", trend:62, score:7.95,
   summary:"Trame conforme aux exigences de motivation formelle, prête à compléter et à notifier.",
   body:[], related:["aide-medicale"]},

  {id:"mediation-dossier", type:"Highlights", rub:"droits-quotidiens", featured:true, locked:false, fav:true,
   title:"Dossier — La médiation de dettes amiable et judiciaire",
   tags:["médiation de dettes","RCD","surendettement"], author:"Rédaction CPASConnect", date:"22/04/2026", trend:54, score:8.05,
   summary:"Panorama des voies de désendettement : médiation amiable, guidance budgétaire et règlement collectif de dettes. Rôle et agrément du CPAS.",
   body:[
     "La médiation de dettes et la guidance budgétaire sont deux outils complémentaires dont dispose le CPAS pour aider les ménages en situation de surendettement. Leur articulation dépend de la gravité de la situation et de l'accord du bénéficiaire.",
     "## La médiation amiable",
     "La médiation amiable vise à trouver un accord de remboursement entre le débiteur et ses créanciers, sans passer par le tribunal. Le CPAS ou un service agréé joue le rôle d'intermédiaire neutre, aidant à formuler un plan de remboursement réaliste et acceptable pour toutes les parties.",
     "## La guidance budgétaire",
     "Distincte de la médiation, la guidance budgétaire vise l'équilibre durable du budget du ménage. Elle suppose l'accord libre du bénéficiaire et la définition d'objectifs clairs. Elle ne se confond pas avec la gestion de fait des revenus, qui obéit à d'autres conditions légales.",
     "## Le règlement collectif de dettes (RCD)",
     "Lorsque la situation est durablement compromise, le règlement collectif de dettes offre un cadre judiciaire structuré avec désignation d'un médiateur par le tribunal du travail. Il permet d'apurer progressivement les dettes tout en garantissant un minimum vital au débiteur et à sa famille."],
   related:["mediation-faq","ris-reforme"]},

  {id:"mediation-faq", type:"Foire aux questions", rub:"droits-quotidiens", featured:false, locked:false,
   title:"FAQ — Guidance budgétaire et compteurs à budget",
   tags:["guidance budgétaire","énergie","fournisseur social"], author:"Rédaction CPASConnect", date:"05/05/2026", trend:12, score:6.40,
   summary:"Réponses aux questions fréquentes sur l'accompagnement budgétaire et la fourniture minimale d'énergie.",
   body:["La guidance budgétaire suppose l'accord du bénéficiaire et un objectif clair. Elle ne se confond pas avec la gestion de fait des revenus, qui obéit à d'autres conditions."],
   related:["mediation-dossier"]},

  {id:"enquete-mener", type:"Procédures", rub:"fonctionnement", featured:false, locked:false,
   title:"Mener une enquête sociale conforme",
   tags:["enquête sociale","proportionnalité","preuve"], author:"Rédaction CPASConnect", date:"18/03/2026", trend:33, score:7.55,
   summary:"Les bonnes pratiques : information du demandeur, collecte proportionnée des données et traçabilité des constats.",
   body:[
     "L'enquête sociale est l'instrument central d'appréciation de la situation du demandeur. Elle doit être menée dans le strict respect des droits fondamentaux, notamment le droit à la vie privée et le droit d'être entendu.",
     "## Le principe de proportionnalité",
     "La collecte d'informations doit être strictement limitée à ce qui est nécessaire pour apprécier les conditions d'octroi de l'aide demandée. Toute investigation excessive ou sans lien direct avec la demande est contraire au RGPD et aux droits fondamentaux du demandeur.",
     "## Le droit d'être entendu",
     "Avant toute décision défavorable, le demandeur doit avoir l'occasion de faire valoir ses arguments. Cette audition préalable est une garantie procédurale fondamentale qui conditionne la légalité de la décision et sa résistance en cas de recours.",
     "## La qualité du rapport",
     "La qualité du rapport d'enquête sociale conditionne directement la solidité de la décision en cas de recours devant le tribunal du travail. Il doit être factuel, daté, signé et retracer de manière claire les éléments vérifiés, les constats opérés et les conclusions motivées."],
   related:["enquete-modele","ris-conditions"]},

  {id:"enquete-modele", type:"Modèles", rub:"fonctionnement", featured:false, locked:true,
   title:"Trame type de rapport d'enquête sociale",
   tags:["modèle","rapport","enquête sociale"], author:"Rédaction CPASConnect", date:"30/01/2026", trend:88, score:8.20,
   summary:"Structure de rapport prête à l'emploi : composition de ménage, ressources, charges et proposition motivée.",
   body:[], related:["enquete-mener"]},

  {id:"marches-faible", type:"Documents", rub:"marches-publics", featured:false, locked:false,
   title:"Les marchés publics de faible montant au CPAS",
   tags:["marchés publics","faible montant","seuils"], author:"Rédaction CPASConnect", date:"08/05/2026", trend:29, score:7.35,
   summary:"Régime simplifié : seuils applicables, formalisation et bonnes pratiques de mise en concurrence.",
   body:["Le régime de faible montant allège les formalités, sans dispenser le pouvoir adjudicateur des principes d'égalité et de bonne gestion. Une mise en concurrence légère, même informelle, reste recommandée pour documenter le choix."],
   related:["criteres-attribution"]},

  {id:"criteres-attribution", type:"Highlights", rub:"marches-publics", featured:false, locked:true,
   title:"Les critères d'attribution dans les marchés publics",
   tags:["critères d'attribution","pondération","offre"], author:"Rédaction FinancesConnect & CPASConnect", date:"18/06/2026", trend:133, score:6.50,
   summary:"Comment construire et pondérer les critères d'attribution pour sécuriser l'analyse des offres.",
   body:[], related:["marches-faible"]},

  {id:"reglement-taxe", type:"Législation", rub:"finances-cpas", featured:false, locked:false,
   title:"Publication des règlements-taxe : les règles à respecter",
   tags:["règlement-taxe","publication","tutelle"], author:"Région wallonne", date:"01/11/2026", trend:7, score:7.35,
   summary:"Formalités de publication et entrée en vigueur des règlements-taxe locaux.",
   body:["La publication conditionne l'opposabilité du règlement-taxe. Les délais et supports de publication sont encadrés et leur respect est contrôlé par la tutelle."],
   related:[]},

  {id:"juris-torts", type:"Jurisprudence", rub:"aide-sociale", featured:false, locked:true,
   title:"Tribunal du travail — torts partagés et fin du droit au RIS",
   tags:["jurisprudence","tribunal du travail","preuve"], author:"Analyse CPASConnect", date:"16/06/2026", trend:41, score:7.20,
   summary:"Lecture commentée : quand l'impossibilité de vérifier les conditions justifie-t-elle la fin du droit ?",
   body:[], related:["enquete-mener","ris-conditions"]},

  {id:"statut-personnel", type:"Documents", rub:"fonctionnement", featured:false, locked:false,
   title:"Le statut du personnel de CPAS : grands principes",
   tags:["statut","personnel","contractuel","statutaire"], author:"Rédaction CPASConnect", date:"02/04/2026", trend:15, score:6.60,
   summary:"Repères sur la coexistence des agents statutaires et contractuels et les obligations de l'employeur public.",
   body:["Le personnel de CPAS combine régimes statutaire et contractuel, chacun avec ses règles propres en matière de recrutement, d'évaluation et de fin de relation."],
   related:["vademecum"]},

  {id:"vademecum", type:"Livres", rub:"fonctionnement", featured:true, locked:true, fav:true,
   title:"Le Vade-mecum du CPAS au travers de la loi organique",
   tags:["loi organique","vade-mecum","gouvernance"], author:"Ouvrage de référence", date:"Édition 2026", trend:96, score:8.70,
   summary:"Ouvrage numérique de référence : la loi organique des CPAS expliquée article par article, avec renvois pratiques.",
   body:[], related:["statut-personnel"], cover:{lic:"CPASCONNECT",icon:"⚖️"}},

  {id:"budget-2026", type:"Livres", rub:"finances-cpas", featured:false, locked:false,
   title:"Budget 2026 — guide pratique des finances locales",
   tags:["budget","finances","comptabilité"], author:"Rédaction FinancesConnect", date:"Édition 2026", trend:23, score:7.05,
   summary:"Guide de référence pour préparer et exécuter le budget du CPAS.",
   body:["Le guide accompagne pas à pas l'élaboration budgétaire, de la projection des recettes aux engagements de dépenses."],
   related:["reglement-taxe"], cover:{lic:"FINANCESCONNECT",icon:"🐷"}},

  {id:"code-civil", type:"Livres", rub:"droits-quotidiens", featured:false, locked:false,
   title:"Code civil — édition pouvoirs locaux",
   tags:["code civil","référence"], author:"Codes Pouvoirs Locaux", date:"Édition 2026", trend:9, score:6.20,
   summary:"Texte coordonné du Code civil, annoté pour les pouvoirs locaux.",
   body:["Édition coordonnée et tenue à jour du Code civil à l'usage des services."],
   related:[], cover:{lic:"CODES POUVOIRS LOCAUX",icon:"📘"}},
];

/* E-learning mis en avant (sidebar Formations) */
const ELEARNING = {title:"CPASConnect E-Learning — L'aide sociale en pratique", date:"11/09/2025"};

/* Mises à jour récentes (onglet) */
const UPDATES = [
  {date:"18 juin 2026", type:"Législation", note:"Plusieurs articles entrés en vigueur le 18/06/2026 concernant l'aide sociale.", id:"reglement-taxe"},
  {date:"18 juin 2026", type:"Jurisprudence", note:"Nouvelle analyse : torts partagés et fin du droit au RIS.", id:"juris-torts"},
  {date:"17 juin 2026", type:"Highlights", note:"Mise à jour du dossier réforme du chômage.", id:"ris-reforme"},
];

/* ============================================================
   3) Assist — réponses scriptées (golden paths)
   ============================================================ */
const ASSIST = [
  {match:["rgpd","donnée","donnee","données","protection","traitement","registre"],
   text:"Au CPAS, tout traitement de données suppose une <b>base légale</b> et une <b>finalité déterminée</b>, dans le respect de la minimisation. Le RGPD se combine avec le <b>secret professionnel</b> du travailleur social.",
   sources:["rgpd-principes","rgpd-registre"]},
  {match:["logement","adresse de référence","adresse de reference","garantie locative","sans-abri"],
   text:"Le CPAS peut octroyer une <b>adresse de référence</b> aux personnes sans résidence stable et intervenir dans la <b>garantie locative</b>. Ces aides conditionnent l'accès aux droits sociaux.",
   sources:["logement-adresse-ref","logement-garantie"]},
  {match:["subside","subsides","fse","aide à l'emploi","ape","acs"],
   text:"Plusieurs leviers : <b>FSE+</b> pour l'insertion socioprofessionnelle et aides régionales <b>APE/ACS</b> à l'emploi. La recevabilité du dossier dépend de l'éligibilité et du respect des délais.",
   sources:["subsides-fse","subsides-procedure"]},
  {match:["ris","revenu","intégration","integration","dis","conditions"],
   text:"Le revenu d'intégration est soumis à <b>cinq conditions cumulatives</b> : résidence, âge, nationalité, absence de ressources suffisantes et disposition au travail. Cette dernière s'apprécie concrètement et admet des dispenses (santé, équité).",
   sources:["ris-conditions","piis","ris-reforme"]},
  {match:["enquête","enquete","sociale","rapport"],
   text:"L'enquête sociale doit être <b>proportionnée</b> et respecter les droits du demandeur, dont le droit d'être entendu. La qualité du rapport est déterminante en cas de recours devant le tribunal du travail.",
   sources:["enquete-mener","enquete-modele","juris-torts"]},
  {match:["dette","médiation","mediation","surendettement","budget","énergie"],
   text:"Trois voies coexistent : <b>médiation amiable</b>, <b>guidance budgétaire</b> et <b>règlement collectif de dettes</b> (cadre judiciaire). Le rôle du CPAS varie selon la voie et suppose parfois un agrément.",
   sources:["mediation-dossier","mediation-faq"]},
  {match:["chômage","chomage","réforme","reforme","afflux"],
   text:"La réforme du chômage devrait amener un <b>afflux de nouveaux demandeurs</b> vers les CPAS en fin de droit. L'articulation avec le RIS et la dispense « aidant proche » sont au cœur du dossier spécial.",
   sources:["ris-reforme","ris-conditions","mediation-dossier"]},
  {match:["marché","marche","attribution","faible montant","seuil"],
   text:"Pour les <b>marchés de faible montant</b>, les formalités sont allégées mais les principes d'égalité et de bonne gestion s'appliquent. Soignez la pondération des <b>critères d'attribution</b> pour sécuriser l'analyse.",
   sources:["marches-faible","criteres-attribution"]},
];
