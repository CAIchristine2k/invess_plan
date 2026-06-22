/* =====================================================================
   ODY — Investor Microsite
   i18n dictionaries (FR default · EN · ZH) + language switching
   ===================================================================== */

const I18N = {
  /* ------------------------------------------------------------------ */
  /* FRANÇAIS (default)                                                  */
  /* ------------------------------------------------------------------ */
  fr: {
    meta_title: "ODY — Espace Investisseurs",
    confidential: "Confidentiel — Réservé aux discussions d'investissement",

    // Navigation
    nav_summary: "Résumé",
    nav_ecosystem: "Écosystème",
    nav_snapshot: "Indicateurs",
    nav_captable: "Capitalisation",
    nav_funds: "Allocation",
    nav_roadmap: "Feuille de route",
    nav_traction: "Traction",
    nav_contact: "Contact",
    nav_cta: "Demander l'accès",

    // Hero / Executive Summary
    hero_eyebrow: "Résumé exécutif",
    hero_title: "ODY : le système d'exploitation du commerce local",
    hero_lead:
      "ODY développe un écosystème complet conçu pour aider les commerces locaux à attirer des clients, augmenter la rétention, générer des revenus et piloter leurs opérations depuis une plateforme unique.",
    hero_stat1_label: "Commerces ciblés (18 mois)",
    hero_stat2_label: "Utilisateurs ciblés (18 mois)",
    hero_stat3_label: "MRR ciblé (18 mois)",
    hero_stat4_label: "personnes ont utilisé ODY",
    hero_cta_primary: "Demander l'accès à la data room",
    hero_cta_secondary: "Découvrir l'écosystème",

    // Ecosystem
    eco_eyebrow: "L'écosystème ODY",
    eco_title: "Trois couches complémentaires, une seule plateforme",
    eco_lead:
      "L'écosystème ODY combine trois couches complémentaires qui connectent consommateurs et commerçants, créant de puissants effets de réseau.",

    eco_app_tag: "Couche consommateur",
    eco_app_title: "ODY B2C",
    eco_app_desc: "Application grand public permettant aux utilisateurs de :",
    eco_app_f1: "Découvrir restaurants et commerces locaux",
    eco_app_f2: "Accéder à des recommandations personnalisées",
    eco_app_f3: "Gagner des récompenses de fidélité",
    eco_app_f4: "Utiliser offres et coupons",
    eco_app_f5: "Réserver en ligne",
    eco_app_f6: "Partager contenus et expériences",
    eco_app_f7: "Interagir avec les commerces",
    eco_app_f8: "Payer via l'écosystème ODY",
    eco_app_f9: "Gagner de l'argent en publiant des vidéos",

    eco_pro_tag: "Couche commerçant",
    eco_pro_title: "ODY Pro",
    eco_pro_desc: "Plateforme marchande fournissant :",
    eco_pro_f1: "Création de site web",
    eco_pro_f2: "Gestion des réservations",
    eco_pro_f3: "Click & Collect",
    eco_pro_f4: "CRM",
    eco_pro_f5: "Programmes de fidélité",
    eco_pro_f6: "Automatisation marketing",
    eco_pro_f7: "Gestion de la clientèle",
    eco_pro_f8: "Analytique",
    eco_pro_f9: "Gestion des avis",

    eco_pay_tag: "Couche financière",
    eco_pay_title: "ODY Pay",
    eco_pay_desc: "Infrastructure de paiement intégrée connectant :",
    eco_pay_f1: "Réservations",
    eco_pay_f2: "Commandes",
    eco_pay_f3: "Fidélité",
    eco_pay_f4: "Marketing",
    eco_pay_f5: "Promotions",
    eco_pay_f6: "Données clients",
    eco_pay_f7: "Encaissement intelligent",
    eco_pay_f8: "Terminal de paiement",
    eco_pay_note:
      "Créant une expérience marchand–consommateur unifiée tout en générant un revenu récurrent basé sur les transactions.",

    // Long-term vision
    vision_eyebrow: "Vision long terme",
    vision_title: "Devenir le système d'exploitation de référence du commerce local",
    vision_lead:
      "ODY ambitionne de devenir le système d'exploitation de référence du commerce local en combinant trois couches stratégiques.",
    vision_c1_title: "Couche consommateur",
    vision_c1_items: "Découverte · Recommandations · Fidélité · Paiements",
    vision_c2_title: "Couche commerçant",
    vision_c2_items: "Opérations · CRM · Marketing · Acquisition client",
    vision_c3_title: "Couche financière",
    vision_c3_items: "Paiements · Traitement des transactions · Services financiers",

    // Company Snapshot
    snap_eyebrow: "Aperçu de l'entreprise",
    snap_title: "Objectifs à 18 mois",
    snap_lead:
      "Des objectifs ambitieux mais structurés, alignés sur une exécution disciplinée et un modèle de revenus récurrents.",
    snap_k1_value: "1 000+",
    snap_k1_label: "Établissements marchands actifs",
    snap_k2_value: "300 000+",
    snap_k2_label: "Utilisateurs actifs",
    snap_k3_value: "200 000 €+",
    snap_k3_label: "Revenu mensuel récurrent (MRR)",
    snap_k4_value: "3",
    snap_k4_label: "Pays d'expansion",
    snap_k5_value: "Lancement",
    snap_k5_label: "ODY Pay",
    snap_progress: "Progression vers l'objectif",

    // Cap Table
    cap_eyebrow: "Table de capitalisation",
    cap_title: "Une structure actionnariale claire et alignée",
    cap_lead:
      "ODY est aujourd'hui détenue à 100 % par ses trois cofondateurs. Découvrez l'évolution de la structure avant et après l'opération.",
    cap_tab_current: "Actuelle",
    cap_tab_future: "Pré-investissement",
    cap_tab_post: "Post-investissement",

    cap_current_title: "Table de capitalisation actuelle",
    cap_current_desc:
      "ODY est actuellement détenue à 100 % par ses trois cofondateurs.",
    cap_th_shareholder: "Actionnaire",
    cap_th_shares: "Actions détenues",
    cap_th_ownership: "Détention",
    cap_founder1: "Antoine",
    cap_founder2: "Alex",
    cap_founder3: "Christine",
    cap_tbd: "À définir",

    cap_future_title: "Table de capitalisation future (pré-investissement)",
    cap_future_desc:
      "Pour soutenir les futurs recrutements et attirer les meilleurs talents, ODY prévoit de créer un pool de BSPCE / stock-options employés représentant 5 % du capital.",
    cap_founders: "Fondateurs",
    cap_bspce: "Pool BSPCE",
    cap_bspce_full: "Pool BSPCE (stock-options employés)",
    cap_investor: "Investisseur",

    cap_post_title: "Table de capitalisation post-investissement",
    cap_post_desc: "Hypothèses retenues :",
    cap_post_a1: "Création d'un pool de BSPCE de 5 %",
    cap_post_a2: "Nouvel investisseur acquérant 10 % du capital post-money",

    // Fundraising objective
    fund_eyebrow: "Objectif de levée",
    fund_title: "Accélérer la prochaine phase de croissance",
    fund_lead:
      "Le capital levé permettra à ODY d'accélérer sur cinq leviers stratégiques afin de renforcer sa position de plateforme tout-en-un pour les commerces locaux.",
    fund_i1: "Développement produit",
    fund_i2: "Acquisition de commerçants",
    fund_i3: "Croissance consommateurs",
    fund_i4: "Déploiement de l'infrastructure de paiement",
    fund_i5: "Expansion internationale",

    // Use of funds
    funds_eyebrow: "Allocation des fonds",
    funds_title: "Une allocation disciplinée et orientée croissance",
    funds_lead:
      "Le capital est alloué de manière équilibrée entre produit, acquisition, talents, expansion et conformité.",
    funds_total: "Allocation totale",
    funds_breakdown: "Répartition",
    funds_raise_value: "1 M€",
    funds_raise_label: "Levée cible",

    funds_1_title: "Produit & Technologie",
    funds_1_d1: "Renforcement des équipes produit et ingénierie",
    funds_1_d2: "Développement de nouvelles fonctionnalités ODY et ODY Pro",
    funds_1_d3: "Amélioration de l'expérience utilisateur",
    funds_1_d4: "Développement de l'infrastructure de paiement",
    funds_1_d5: "Sécurité et conformité",
    funds_1_d6: "Scalabilité de la plateforme",
    funds_1_d7: "Futures capacités d'IA",

    funds_2_title: "Acquisition B2B",
    funds_2_d1: "Campagnes d'acquisition B2B ciblant restaurants et commerces locaux",
    funds_2_d2: "Équipe commerciale et SDR dédiée",
    funds_2_d3: "Partenariats et réseaux d'apporteurs d'affaires",
    funds_2_d4: "Salons et événements professionnels",
    funds_2_d5: "Outils CRM et sales operations",
    funds_2_d6: "SEO/SEA et génération de leads B2B",
    funds_2_d7: "Notoriété et crédibilité auprès des commerçants",

    funds_3_title: "Acquisition B2C",
    funds_3_d1: "Stratégie de contenu et d'influence à grande échelle",
    funds_3_d2: "Programmes d'ambassadeurs et de créateurs",
    funds_3_d3: "Acquisition d'utilisateurs (paid social, ASO)",
    funds_3_d4: "Programmes de parrainage et de fidélisation",
    funds_3_d5: "UGC, communauté et notoriété de marque",

    funds_4_title: "Expansion internationale",
    funds_4_d1: "Études de marché",
    funds_4_d2: "Localisation",
    funds_4_d3: "Lancements pays",
    funds_4_d4: "Partenariats stratégiques",
    funds_4_d5: "Développement commercial international",

    funds_5_title: "Juridique, Conformité & Trésorerie",
    funds_5_d1: "Conformité réglementaire",
    funds_5_d2: "Protection de la propriété intellectuelle",
    funds_5_d3: "Exigences juridiques internationales",
    funds_5_d4: "Réserves financières",

    // Roadmap
    road_eyebrow: "Feuille de route stratégique",
    road_title: "Feuille de route à 18 mois",
    road_lead:
      "Cinq chantiers stratégiques structurent l'exécution sur les 18 prochains mois.",

    road_1_title: "Croissance commerciale",
    road_1_intro: "ODY vise à devenir une plateforme de référence pour les commerces locaux.",
    road_1_o1: "1 000+ établissements marchands actifs",
    road_1_o2: "Déploiement national d'ODY Pro",
    road_1_o3: "Partenariats stratégiques avec groupes de restauration et multi-sites",
    road_1_o4: "Augmentation continue du revenu par commerçant",

    road_2_title: "Croissance utilisateurs",
    road_2_intro:
      "ODY vise à bâtir l'une des plus grandes communautés européennes de découverte et de fidélité locales.",
    road_2_o1: "300 000+ utilisateurs actifs",
    road_2_o2: "Écosystème UGC à grande échelle",
    road_2_o3: "Fort engagement communautaire",
    road_2_o4: "Rétention et fréquence d'usage accrues",

    road_3_title: "Lancement d'ODY Pay",
    road_3_intro: "Le paiement représente un moteur de croissance stratégique majeur.",
    road_3_o1: "Intégration technique complète",
    road_3_o2: "Lancement avec des commerçants pilotes",
    road_3_o3: "Connexion réservations, fidélité, coupons, commandes et marketing",
    road_3_o4: "Génération de revenus récurrents basés sur les transactions",

    road_4_title: "Objectifs financiers",
    road_4_intro: "Construire un modèle de revenus récurrents scalable.",
    road_4_o1: "200 000 €+ de revenu mensuel récurrent",
    road_4_streams: "Sources de revenus :",
    road_4_s1: "Abonnements ODY Pro",
    road_4_s2: "Commissions sur paiements",
    road_4_s3: "Services marketing",
    road_4_s4: "Programmes de fidélité",
    road_4_s5: "Campagnes promotionnelles",
    road_4_s6: "Services marchands additionnels",

    road_5_title: "Expansion internationale",
    road_5_intro: "Déployer un modèle opérationnel scalable à l'international.",
    road_5_o1: "Lancement des opérations dans 3 pays",
    road_5_o2: "Constitution d'équipes et de partenariats locaux",
    road_5_o3: "Adaptation de la plateforme aux marchés locaux",
    road_5_o4: "Maintien d'un modèle opérationnel scalable",

    // Vision at 18 months
    v18_eyebrow: "Vision à 18 mois",
    v18_title: "Le futur d'ODY",
    v18_lead:
      "À l'issue des 18 prochains mois, ODY ambitionne de devenir une plateforme pleinement intégrée combinant découverte, fidélité, marketing, réservations et paiements.",
    v18_outro:
      "Utilisée quotidiennement par des centaines de milliers de consommateurs et plus de 1 000 commerçants dans plusieurs pays.",
    v18_p1: "Découverte",
    v18_p2: "Fidélité",
    v18_p3: "Marketing",
    v18_p4: "Réservations",
    v18_p5: "Paiements",

    // Traction
    trac_eyebrow: "Traction commerciale",
    trac_title: "Une dynamique commerciale structurée",
    trac_lead:
      "Suivi rigoureux des clients signés et d'un pipeline commercial piloté via le CRM.",

    signed_title: "Clients signés",
    signed_note: "Les données seront importées ultérieurement.",
    signed_th_company: "Entreprise",
    signed_th_industry: "Secteur",
    signed_th_country: "Pays",
    signed_th_info: "Informations",
    signed_th_status: "Statut de déploiement",
    signed_placeholder: "En attente d'import des données",

    pipe_title: "Pipeline commercial",
    pipe_desc:
      "ODY maintient un pipeline commercial structuré, piloté via son CRM. Les données seront importées ultérieurement à partir des exports CRM et documents associés.",
    pipe_th_company: "Entreprise",
    pipe_th_contact: "Contact principal",
    pipe_th_info: "Informations",
    pipe_th_stage: "Étape commerciale",
    pipe_th_status: "Statut",
    pipe_th_value: "Valeur estimée",
    pipe_th_close: "Clôture prévue",
    pipe_stage_lead: "Lead",
    pipe_stage_qualified: "Qualifié",
    pipe_stage_demo: "Démo",
    pipe_stage_proposal: "Proposition",
    pipe_stage_won: "Gagné",
    pipe_count: "opportunités",
    pipe_placeholder: "Données importées depuis le CRM — à venir",

    // Final / Footer
    final_eyebrow: "En synthèse",
    final_title: "ODY n'est pas une simple application de découverte de restaurants",
    final_lead:
      "ODY construit un écosystème complet du commerce local composé de trois couches qui se renforcent mutuellement.",
    final_l1_title: "ODY B2C",
    final_l1_sub: "Couche consommateur",
    final_l2_title: "ODY Pro",
    final_l2_sub: "Couche SaaS marchand",
    final_l3_title: "ODY Pay",
    final_l3_sub: "Couche financière",
    final_outro:
      "Une plateforme scalable combinant revenus SaaS récurrents, revenus de paiement et de puissants effets de réseau entre consommateurs et commerçants.",

    footer_cta_title: "Discutons de l'opportunité d'investissement",
    footer_cta_desc:
      "Accédez à la data room complète et planifiez un échange avec l'équipe dirigeante.",
    footer_cta_btn: "Demander l'accès",
    footer_rights: "Tous droits réservés.",
    footer_confidential:
      "Ce document est confidentiel et destiné uniquement à l'évaluation d'une opportunité d'investissement.",
  },

  /* ------------------------------------------------------------------ */
  /* ENGLISH                                                            */
  /* ------------------------------------------------------------------ */
  en: {
    meta_title: "ODY — Investor Space",
    confidential: "Confidential — For investment discussion purposes only",

    nav_summary: "Summary",
    nav_ecosystem: "Ecosystem",
    nav_snapshot: "Metrics",
    nav_captable: "Cap Table",
    nav_funds: "Allocation",
    nav_roadmap: "Roadmap",
    nav_traction: "Traction",
    nav_contact: "Contact",
    nav_cta: "Request access",

    hero_eyebrow: "Executive summary",
    hero_title: "ODY: Building the operating system for local commerce",
    hero_lead:
      "ODY is building a complete ecosystem designed to help local businesses attract customers, increase retention, generate revenue and manage operations through a single platform.",
    hero_stat1_label: "Target merchant locations (18 mo)",
    hero_stat2_label: "Target active users (18 mo)",
    hero_stat3_label: "Target MRR (18 mo)",
    hero_stat4_label: "people have used ODY",
    hero_cta_primary: "Request data room access",
    hero_cta_secondary: "Explore the ecosystem",

    eco_eyebrow: "The ODY ecosystem",
    eco_title: "Three complementary layers, one platform",
    eco_lead:
      "The ODY ecosystem combines three complementary layers that connect consumers and merchants, creating powerful network effects.",

    eco_app_tag: "Consumer layer",
    eco_app_title: "ODY B2C",
    eco_app_desc: "Consumer-facing application allowing users to:",
    eco_app_f1: "Discover restaurants and local businesses",
    eco_app_f2: "Access personalized recommendations",
    eco_app_f3: "Earn loyalty rewards",
    eco_app_f4: "Redeem offers and coupons",
    eco_app_f5: "Make reservations",
    eco_app_f6: "Share content and experiences",
    eco_app_f7: "Interact with businesses",
    eco_app_f8: "Pay through the ODY ecosystem",
    eco_app_f9: "Earn money by posting videos",

    eco_pro_tag: "Merchant layer",
    eco_pro_title: "ODY Pro",
    eco_pro_desc: "Merchant platform providing:",
    eco_pro_f1: "Website creation",
    eco_pro_f2: "Reservation management",
    eco_pro_f3: "Click & Collect",
    eco_pro_f4: "CRM",
    eco_pro_f5: "Loyalty programs",
    eco_pro_f6: "Marketing automation",
    eco_pro_f7: "Customer management",
    eco_pro_f8: "Analytics",
    eco_pro_f9: "Review management",

    eco_pay_tag: "Financial layer",
    eco_pay_title: "ODY Pay",
    eco_pay_desc: "Integrated payment infrastructure connecting:",
    eco_pay_f1: "Reservations",
    eco_pay_f2: "Orders",
    eco_pay_f3: "Loyalty",
    eco_pay_f4: "Marketing",
    eco_pay_f5: "Promotions",
    eco_pay_f6: "Customer data",
    eco_pay_f7: "Intelligent checkout",
    eco_pay_f8: "Payment terminal",
    eco_pay_note:
      "Creating a unified merchant and consumer experience while generating transaction-based recurring revenue.",

    vision_eyebrow: "Long-term vision",
    vision_title: "Becoming the leading operating system for local commerce",
    vision_lead:
      "ODY aims to become the leading operating system for local commerce by combining three strategic layers.",
    vision_c1_title: "Consumer layer",
    vision_c1_items: "Discovery · Recommendations · Loyalty · Payments",
    vision_c2_title: "Merchant layer",
    vision_c2_items: "Operations · CRM · Marketing · Customer acquisition",
    vision_c3_title: "Financial layer",
    vision_c3_items: "Payments · Transaction processing · Financial services",

    snap_eyebrow: "Company snapshot",
    snap_title: "18-month targets",
    snap_lead:
      "Ambitious yet structured targets, aligned with disciplined execution and a recurring revenue model.",
    snap_k1_value: "1,000+",
    snap_k1_label: "Active merchant locations",
    snap_k2_value: "300,000+",
    snap_k2_label: "Active users",
    snap_k3_value: "€200,000+",
    snap_k3_label: "Monthly recurring revenue (MRR)",
    snap_k4_value: "3",
    snap_k4_label: "Countries expansion",
    snap_k5_value: "Launch",
    snap_k5_label: "ODY Pay",
    snap_progress: "Progress toward target",

    cap_eyebrow: "Capitalization table",
    cap_title: "A clear and aligned ownership structure",
    cap_lead:
      "ODY is currently owned 100% by its three co-founders. Explore how the structure evolves before and after the round.",
    cap_tab_current: "Current",
    cap_tab_future: "Pre-investment",
    cap_tab_post: "Post-investment",

    cap_current_title: "Current cap table",
    cap_current_desc: "ODY is currently owned 100% by its three co-founders.",
    cap_th_shareholder: "Shareholder",
    cap_th_shares: "Shares held",
    cap_th_ownership: "Ownership",
    cap_founder1: "Antoine",
    cap_founder2: "Alex",
    cap_founder3: "Christine",
    cap_tbd: "To be determined",

    cap_future_title: "Future cap table (pre-investment)",
    cap_future_desc:
      "To support future recruitment and attract top talent, ODY plans to create a BSPCE / employee stock option pool representing 5% of the company.",
    cap_founders: "Founders",
    cap_bspce: "BSPCE Pool",
    cap_bspce_full: "BSPCE Pool (employee stock options)",
    cap_investor: "Investor",

    cap_post_title: "Post-investment cap table",
    cap_post_desc: "Assumptions:",
    cap_post_a1: "Creation of a 5% BSPCE pool",
    cap_post_a2: "New investor acquiring 10% ownership post-money",

    fund_eyebrow: "Fundraising objective",
    fund_title: "Accelerating the next phase of growth",
    fund_lead:
      "The capital raised will allow ODY to accelerate across five strategic levers to strengthen its position as the all-in-one platform for local businesses.",
    fund_i1: "Product development",
    fund_i2: "Merchant acquisition",
    fund_i3: "Consumer growth",
    fund_i4: "Payment infrastructure deployment",
    fund_i5: "International expansion",

    funds_eyebrow: "Use of funds",
    funds_title: "A disciplined, growth-oriented allocation",
    funds_lead:
      "Capital is allocated in a balanced way across product, acquisition, talent, expansion and compliance.",
    funds_total: "Total allocation",
    funds_breakdown: "Breakdown",
    funds_raise_value: "€1M",
    funds_raise_label: "Target round",

    funds_1_title: "Product & Technology",
    funds_1_d1: "Strengthening the product and engineering teams",
    funds_1_d2: "Development of new ODY and ODY Pro features",
    funds_1_d3: "User experience improvements",
    funds_1_d4: "Payment infrastructure development",
    funds_1_d5: "Security and compliance",
    funds_1_d6: "Platform scalability",
    funds_1_d7: "Future AI capabilities",

    funds_2_title: "B2B Acquisition",
    funds_2_d1: "B2B acquisition campaigns targeting restaurants and local businesses",
    funds_2_d2: "Dedicated sales and SDR team",
    funds_2_d3: "Partnerships and referral networks",
    funds_2_d4: "Trade shows and professional events",
    funds_2_d5: "CRM and sales operations tooling",
    funds_2_d6: "B2B SEO/SEA and lead generation",
    funds_2_d7: "Brand awareness and credibility with merchants",

    funds_3_title: "B2C Acquisition",
    funds_3_d1: "Large-scale content and influencer strategy",
    funds_3_d2: "Ambassador and creator programs",
    funds_3_d3: "User acquisition (paid social, ASO)",
    funds_3_d4: "Referral and retention programs",
    funds_3_d5: "UGC, community and brand awareness",

    funds_4_title: "International Expansion",
    funds_4_d1: "Market research",
    funds_4_d2: "Localization",
    funds_4_d3: "Country launches",
    funds_4_d4: "Strategic partnerships",
    funds_4_d5: "International business development",

    funds_5_title: "Legal, Compliance & Treasury",
    funds_5_d1: "Regulatory compliance",
    funds_5_d2: "Intellectual property protection",
    funds_5_d3: "International legal requirements",
    funds_5_d4: "Financial reserves",

    road_eyebrow: "Strategic roadmap",
    road_title: "18-month strategic roadmap",
    road_lead: "Five strategic workstreams structure execution over the next 18 months.",

    road_1_title: "Commercial growth",
    road_1_intro: "ODY aims to become a leading platform for local businesses.",
    road_1_o1: "1,000+ active merchant locations",
    road_1_o2: "Nationwide deployment of ODY Pro",
    road_1_o3: "Strategic partnerships with restaurant groups and multi-site operators",
    road_1_o4: "Continuous increase in revenue per merchant",

    road_2_title: "User growth",
    road_2_intro:
      "ODY aims to build one of the largest local discovery and loyalty communities in Europe.",
    road_2_o1: "300,000+ active users",
    road_2_o2: "Large-scale UGC ecosystem",
    road_2_o3: "Strong community engagement",
    road_2_o4: "Increased retention and usage frequency",

    road_3_title: "ODY Pay launch",
    road_3_intro: "Payments represent a major strategic growth engine.",
    road_3_o1: "Complete technical integration",
    road_3_o2: "Launch with pilot merchants",
    road_3_o3: "Connect reservations, loyalty, coupons, orders and marketing",
    road_3_o4: "Generate recurring transaction-based revenue",

    road_4_title: "Financial objectives",
    road_4_intro: "Build a scalable recurring revenue model.",
    road_4_o1: "€200,000+ monthly recurring revenue",
    road_4_streams: "Revenue streams:",
    road_4_s1: "ODY Pro subscriptions",
    road_4_s2: "Payment commissions",
    road_4_s3: "Marketing services",
    road_4_s4: "Loyalty programs",
    road_4_s5: "Promotional campaigns",
    road_4_s6: "Additional merchant services",

    road_5_title: "International expansion",
    road_5_intro: "Deploy a scalable operating model internationally.",
    road_5_o1: "Launch operations in 3 countries",
    road_5_o2: "Build local teams and partnerships",
    road_5_o3: "Adapt the platform to local markets",
    road_5_o4: "Maintain a scalable operating model",

    v18_eyebrow: "Vision at 18 months",
    v18_title: "The future of ODY",
    v18_lead:
      "At the end of the next 18 months, ODY aims to become a fully integrated platform combining discovery, loyalty, marketing, reservations and payments.",
    v18_outro:
      "Used daily by hundreds of thousands of consumers and more than 1,000 merchants across multiple countries.",
    v18_p1: "Discovery",
    v18_p2: "Loyalty",
    v18_p3: "Marketing",
    v18_p4: "Reservations",
    v18_p5: "Payments",

    trac_eyebrow: "Commercial traction",
    trac_title: "Structured commercial momentum",
    trac_lead:
      "Rigorous tracking of signed customers and a sales pipeline managed through the CRM.",

    signed_title: "Signed customers",
    signed_note: "Data will be imported later.",
    signed_th_company: "Company name",
    signed_th_industry: "Industry",
    signed_th_country: "Country",
    signed_th_info: "Company information",
    signed_th_status: "Deployment status",
    signed_placeholder: "Awaiting data import",

    pipe_title: "Sales pipeline",
    pipe_desc:
      "ODY maintains a structured sales pipeline managed through its CRM. Data will be imported later from CRM exports and attached documents.",
    pipe_th_company: "Company name",
    pipe_th_contact: "Main contact",
    pipe_th_info: "Company information",
    pipe_th_stage: "Sales stage",
    pipe_th_status: "Status",
    pipe_th_value: "Estimated value",
    pipe_th_close: "Expected closing",
    pipe_stage_lead: "Lead",
    pipe_stage_qualified: "Qualified",
    pipe_stage_demo: "Demo",
    pipe_stage_proposal: "Proposal",
    pipe_stage_won: "Won",
    pipe_count: "opportunities",
    pipe_placeholder: "Data imported from CRM — coming soon",

    final_eyebrow: "In summary",
    final_title: "ODY is not simply a restaurant discovery application",
    final_lead:
      "ODY is building a complete local commerce ecosystem composed of three mutually reinforcing layers.",
    final_l1_title: "ODY B2C",
    final_l1_sub: "Consumer layer",
    final_l2_title: "ODY Pro",
    final_l2_sub: "Merchant SaaS layer",
    final_l3_title: "ODY Pay",
    final_l3_sub: "Financial layer",
    final_outro:
      "A scalable platform combining recurring SaaS revenue, payment revenue and strong network effects between consumers and merchants.",

    footer_cta_title: "Let's discuss the investment opportunity",
    footer_cta_desc:
      "Access the full data room and schedule a conversation with the leadership team.",
    footer_cta_btn: "Request access",
    footer_rights: "All rights reserved.",
    footer_confidential:
      "This document is confidential and intended solely for the evaluation of an investment opportunity.",
  },

  /* ------------------------------------------------------------------ */
  /* 中文 (Chinese)                                                      */
  /* ------------------------------------------------------------------ */
  zh: {
    meta_title: "ODY — 投资者空间",
    confidential: "机密 — 仅供投资讨论使用",

    nav_summary: "摘要",
    nav_ecosystem: "生态系统",
    nav_snapshot: "核心指标",
    nav_captable: "股权结构",
    nav_funds: "资金分配",
    nav_roadmap: "路线图",
    nav_traction: "商业进展",
    nav_contact: "联系",
    nav_cta: "申请访问",

    hero_eyebrow: "执行摘要",
    hero_title: "ODY：打造本地商业的操作系统",
    hero_lead:
      "ODY 正在构建一个完整的生态系统，帮助本地商户通过单一平台吸引客户、提升留存、创造收入并管理运营。",
    hero_stat1_label: "目标商户门店（18 个月）",
    hero_stat2_label: "目标活跃用户（18 个月）",
    hero_stat3_label: "目标月度经常性收入（18 个月）",
    hero_stat4_label: "人使用过 ODY",
    hero_cta_primary: "申请数据室访问",
    hero_cta_secondary: "了解生态系统",

    eco_eyebrow: "ODY 生态系统",
    eco_title: "三个互补层级，一个统一平台",
    eco_lead:
      "ODY 生态系统由三个互补层级组成，连接消费者与商户，形成强大的网络效应。",

    eco_app_tag: "消费者层",
    eco_app_title: "ODY B2C",
    eco_app_desc: "面向消费者的应用，用户可以：",
    eco_app_f1: "发现餐厅与本地商户",
    eco_app_f2: "获取个性化推荐",
    eco_app_f3: "赚取忠诚度奖励",
    eco_app_f4: "使用优惠与优惠券",
    eco_app_f5: "在线预订",
    eco_app_f6: "分享内容与体验",
    eco_app_f7: "与商户互动",
    eco_app_f8: "通过 ODY 生态支付",
    eco_app_f9: "通过发布视频赚钱",

    eco_pro_tag: "商户层",
    eco_pro_title: "ODY Pro",
    eco_pro_desc: "为商户提供的平台：",
    eco_pro_f1: "网站创建",
    eco_pro_f2: "预订管理",
    eco_pro_f3: "线上下单自提",
    eco_pro_f4: "客户关系管理",
    eco_pro_f5: "忠诚度计划",
    eco_pro_f6: "营销自动化",
    eco_pro_f7: "客户管理",
    eco_pro_f8: "数据分析",
    eco_pro_f9: "评价管理",

    eco_pay_tag: "金融层",
    eco_pay_title: "ODY Pay",
    eco_pay_desc: "集成的支付基础设施，连接：",
    eco_pay_f1: "预订",
    eco_pay_f2: "订单",
    eco_pay_f3: "忠诚度",
    eco_pay_f4: "营销",
    eco_pay_f5: "促销",
    eco_pay_f6: "客户数据",
    eco_pay_f7: "智能结账",
    eco_pay_f8: "支付终端",
    eco_pay_note:
      "在打造统一的商户与消费者体验的同时，创造基于交易的经常性收入。",

    vision_eyebrow: "长期愿景",
    vision_title: "成为本地商业领先的操作系统",
    vision_lead:
      "ODY 致力于通过结合三个战略层级，成为本地商业领先的操作系统。",
    vision_c1_title: "消费者层",
    vision_c1_items: "发现 · 推荐 · 忠诚度 · 支付",
    vision_c2_title: "商户层",
    vision_c2_items: "运营 · CRM · 营销 · 客户获取",
    vision_c3_title: "金融层",
    vision_c3_items: "支付 · 交易处理 · 金融服务",

    snap_eyebrow: "公司概览",
    snap_title: "18 个月目标",
    snap_lead: "宏大而有章法的目标，依托严谨的执行与经常性收入模式。",
    snap_k1_value: "1,000+",
    snap_k1_label: "活跃商户门店",
    snap_k2_value: "300,000+",
    snap_k2_label: "活跃用户",
    snap_k3_value: "€200,000+",
    snap_k3_label: "月度经常性收入（MRR）",
    snap_k4_value: "3",
    snap_k4_label: "拓展国家",
    snap_k5_value: "上线",
    snap_k5_label: "ODY Pay",
    snap_progress: "目标进度",

    cap_eyebrow: "股权结构表",
    cap_title: "清晰且利益一致的股权结构",
    cap_lead:
      "ODY 目前由三位联合创始人 100% 持有。了解本轮融资前后的结构演变。",
    cap_tab_current: "当前",
    cap_tab_future: "投资前",
    cap_tab_post: "投资后",

    cap_current_title: "当前股权结构表",
    cap_current_desc: "ODY 目前由三位联合创始人 100% 持有。",
    cap_th_shareholder: "股东",
    cap_th_shares: "持有股份",
    cap_th_ownership: "持股比例",
    cap_founder1: "Antoine",
    cap_founder2: "Alex",
    cap_founder3: "Christine",
    cap_tbd: "待定",

    cap_future_title: "未来股权结构表（投资前）",
    cap_future_desc:
      "为支持未来招聘并吸引顶尖人才，ODY 计划设立占公司 5% 的 BSPCE / 员工期权池。",
    cap_founders: "创始人",
    cap_bspce: "BSPCE 期权池",
    cap_bspce_full: "BSPCE 期权池（员工股票期权）",
    cap_investor: "投资人",

    cap_post_title: "投资后股权结构表",
    cap_post_desc: "假设条件：",
    cap_post_a1: "设立 5% 的 BSPCE 期权池",
    cap_post_a2: "新投资人按投后估值获得 10% 股权",

    fund_eyebrow: "融资目标",
    fund_title: "加速下一阶段增长",
    fund_lead:
      "本轮融资将使 ODY 在五个战略支点上加速，巩固其作为本地商户一体化平台的地位。",
    fund_i1: "产品开发",
    fund_i2: "商户获取",
    fund_i3: "消费者增长",
    fund_i4: "支付基础设施部署",
    fund_i5: "国际化扩张",

    funds_eyebrow: "资金用途",
    funds_title: "严谨且以增长为导向的分配",
    funds_lead: "资金在产品、获客、人才、扩张与合规之间均衡分配。",
    funds_total: "总分配",
    funds_breakdown: "明细",
    funds_raise_value: "€100万",
    funds_raise_label: "目标融资额",

    funds_1_title: "产品与技术",
    funds_1_d1: "加强产品与工程团队",
    funds_1_d2: "开发 ODY 与 ODY Pro 新功能",
    funds_1_d3: "改善用户体验",
    funds_1_d4: "支付基础设施开发",
    funds_1_d5: "安全与合规",
    funds_1_d6: "平台可扩展性",
    funds_1_d7: "未来 AI 能力",

    funds_2_title: "B2B 获客",
    funds_2_d1: "面向餐厅与本地商户的 B2B 获客活动",
    funds_2_d2: "专属销售与 SDR 团队",
    funds_2_d3: "合作伙伴与推荐网络",
    funds_2_d4: "行业展会与专业活动",
    funds_2_d5: "CRM 与销售运营工具",
    funds_2_d6: "B2B SEO/SEA 与销售线索生成",
    funds_2_d7: "提升商户端品牌认知与信任",

    funds_3_title: "B2C 获客",
    funds_3_d1: "大规模内容与影响者策略",
    funds_3_d2: "大使与创作者计划",
    funds_3_d3: "用户获取（付费社媒、ASO）",
    funds_3_d4: "推荐与留存计划",
    funds_3_d5: "UGC、社区与品牌认知",

    funds_4_title: "国际化扩张",
    funds_4_d1: "市场调研",
    funds_4_d2: "本地化",
    funds_4_d3: "国家上线",
    funds_4_d4: "战略合作伙伴",
    funds_4_d5: "国际业务拓展",

    funds_5_title: "法务、合规与资金管理",
    funds_5_d1: "监管合规",
    funds_5_d2: "知识产权保护",
    funds_5_d3: "国际法律要求",
    funds_5_d4: "财务储备",

    road_eyebrow: "战略路线图",
    road_title: "18 个月战略路线图",
    road_lead: "五大战略工作流构建未来 18 个月的执行框架。",

    road_1_title: "商业增长",
    road_1_intro: "ODY 致力于成为本地商户的领先平台。",
    road_1_o1: "1,000+ 活跃商户门店",
    road_1_o2: "ODY Pro 全国部署",
    road_1_o3: "与餐饮集团及多门店运营商建立战略合作",
    road_1_o4: "持续提升单商户收入",

    road_2_title: "用户增长",
    road_2_intro: "ODY 致力于打造欧洲最大的本地发现与忠诚度社区之一。",
    road_2_o1: "300,000+ 活跃用户",
    road_2_o2: "大规模 UGC 生态",
    road_2_o3: "强劲的社区参与度",
    road_2_o4: "提升留存与使用频率",

    road_3_title: "ODY Pay 上线",
    road_3_intro: "支付是重要的战略增长引擎。",
    road_3_o1: "完成技术集成",
    road_3_o2: "与试点商户共同上线",
    road_3_o3: "打通预订、忠诚度、优惠券、订单与营销",
    road_3_o4: "创造基于交易的经常性收入",

    road_4_title: "财务目标",
    road_4_intro: "构建可扩展的经常性收入模式。",
    road_4_o1: "€200,000+ 月度经常性收入",
    road_4_streams: "收入来源：",
    road_4_s1: "ODY Pro 订阅",
    road_4_s2: "支付佣金",
    road_4_s3: "营销服务",
    road_4_s4: "忠诚度计划",
    road_4_s5: "促销活动",
    road_4_s6: "其他商户服务",

    road_5_title: "国际化扩张",
    road_5_intro: "在国际市场部署可扩展的运营模式。",
    road_5_o1: "在 3 个国家启动运营",
    road_5_o2: "组建本地团队与合作伙伴",
    road_5_o3: "使平台适应本地市场",
    road_5_o4: "保持可扩展的运营模式",

    v18_eyebrow: "18 个月愿景",
    v18_title: "ODY 的未来",
    v18_lead:
      "在未来 18 个月结束时，ODY 将成为一个完全集成的平台，融合发现、忠诚度、营销、预订与支付。",
    v18_outro:
      "每天被数十万消费者和超过 1,000 家商户在多个国家使用。",
    v18_p1: "发现",
    v18_p2: "忠诚度",
    v18_p3: "营销",
    v18_p4: "预订",
    v18_p5: "支付",

    trac_eyebrow: "商业进展",
    trac_title: "结构化的商业势能",
    trac_lead: "对已签约客户及 CRM 管理的销售管道进行严格跟踪。",

    signed_title: "已签约客户",
    signed_note: "数据将于稍后导入。",
    signed_th_company: "公司名称",
    signed_th_industry: "行业",
    signed_th_country: "国家",
    signed_th_info: "公司信息",
    signed_th_status: "部署状态",
    signed_placeholder: "等待数据导入",

    pipe_title: "销售管道",
    pipe_desc:
      "ODY 通过其 CRM 维护一个结构化的销售管道。数据将于稍后从 CRM 导出及相关文档中导入。",
    pipe_th_company: "公司名称",
    pipe_th_contact: "主要联系人",
    pipe_th_info: "公司信息",
    pipe_th_stage: "销售阶段",
    pipe_th_status: "状态",
    pipe_th_value: "预估价值",
    pipe_th_close: "预计成交",
    pipe_stage_lead: "线索",
    pipe_stage_qualified: "已确认",
    pipe_stage_demo: "演示",
    pipe_stage_proposal: "方案",
    pipe_stage_won: "赢单",
    pipe_count: "个机会",
    pipe_placeholder: "数据从 CRM 导入 — 即将上线",

    final_eyebrow: "总结",
    final_title: "ODY 不仅仅是一款餐厅发现应用",
    final_lead:
      "ODY 正在构建一个完整的本地商业生态系统，由三个相互强化的层级组成。",
    final_l1_title: "ODY B2C",
    final_l1_sub: "消费者层",
    final_l2_title: "ODY Pro",
    final_l2_sub: "商户 SaaS 层",
    final_l3_title: "ODY Pay",
    final_l3_sub: "金融层",
    final_outro:
      "一个可扩展的平台，融合经常性 SaaS 收入、支付收入以及消费者与商户之间强大的网络效应。",

    footer_cta_title: "让我们探讨这次投资机会",
    footer_cta_desc: "获取完整数据室访问权限，并与管理团队安排交流。",
    footer_cta_btn: "申请访问",
    footer_rights: "保留所有权利。",
    footer_confidential:
      "本文件为机密文件，仅供评估投资机会之用。",
  },
};

/* ------------------------------------------------------------------ */
/* Language switching engine                                          */
/* ------------------------------------------------------------------ */
const I18N_LANGS = {
  fr: { label: "Français", short: "FR" },
  en: { label: "English", short: "EN" },
  zh: { label: "中文", short: "中文" },
};

let currentLang = "fr";

function t(key) {
  const dict = I18N[currentLang] || I18N.fr;
  return dict[key] != null ? dict[key] : (I18N.fr[key] != null ? I18N.fr[key] : key);
}

function applyTranslations(lang) {
  if (!I18N[lang]) lang = "fr";
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.classList.toggle("lang-zh", lang === "zh");

  // Text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // Document title
  document.title = t("meta_title");

  // Update language selector display
  const cur = document.querySelector("[data-lang-current]");
  if (cur) cur.textContent = I18N_LANGS[lang].short;
  document.querySelectorAll("[data-lang-option]").forEach((opt) => {
    opt.classList.toggle("is-active", opt.getAttribute("data-lang-option") === lang);
  });

  try {
    localStorage.setItem("ody_lang", lang);
  } catch (e) {}

  // Notify charts to re-render their (translated) labels
  document.dispatchEvent(new CustomEvent("ody:langchange", { detail: { lang } }));
}

function initLanguage() {
  let lang = "fr";
  // Priority: explicit ?lang= → saved preference → browser → FR default
  try {
    const param = new URLSearchParams(window.location.search).get("lang");
    if (param && I18N[param]) {
      lang = param;
    } else {
      const saved = localStorage.getItem("ody_lang");
      if (saved && I18N[saved]) {
        lang = saved;
      } else {
        const nav = (navigator.language || "fr").slice(0, 2);
        if (I18N[nav]) lang = nav;
      }
    }
  } catch (e) {}
  applyTranslations(lang);
}
