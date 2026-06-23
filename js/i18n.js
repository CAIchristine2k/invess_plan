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
    hero_stat1_label: "Commerces ciblés (12 mois)",
    hero_stat2_label: "Utilisateurs ciblés (12 mois)",
    hero_stat3_label: "Chiffre d'affaires mensuel ciblé (12 mois)",
    hero_cta_primary: "Demander l'accès à la data room",
    hero_cta_secondary: "Découvrir l'écosystème",

    // Ecosystem
    eco_eyebrow: "L'écosystème ODY",
    eco_title: "Trois couches complémentaires, une seule plateforme",
    eco_lead:
      "L'écosystème ODY combine trois couches complémentaires qui connectent consommateurs et commerçants, créant de puissants effets de réseau.",

    nav_structure: "Structure",
    struct_eyebrow: "Organisation",
    struct_title: "Structure du Groupe ODY",
    struct_lead:
      "Une architecture claire entre les entités du groupe, pensée pour un déploiement international maîtrisé.",
    struct_holding_tag: "Holding faîtière",
    struct_holding_name: "ODY International Holding",
    struct_holding_desc: "Entité de tête détenant l'ensemble des participations du groupe.",
    struct_fr_name: "ODY France",
    struct_fr_desc: "Siège social du groupe.",
    struct_country_label: "ODY",
    struct_country_desc: "Déploiement international dans chaque marché local.",
    struct_country_cycle: "Chine,Émirats,Singapour,USA,Espagne",
    struct_ventures_name: "Autre projet connexe",
    struct_ventures_desc: "",

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
    eco_pay_f1: "Terminal de paiement",
    eco_pay_f2: "Crédit",
    eco_pay_f3: "Paiement en ligne",
    eco_pay_f4: "Émission de cartes",
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
    snap_title: "Objectifs à 12 mois",
    snap_lead:
      "Des objectifs ambitieux mais structurés, alignés sur une exécution disciplinée et un modèle de revenus récurrents.",
    snap_k1_value: "2 000+",
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
    cap_post_a2: "Nouvel investisseur acquérant ≈ 9,09 % du capital post-money",
    cap_post_intro:
      "La société est valorisée 10 M€ en pré-money, avec un capital initial de 10 000 actions détenues à 100 % par les trois fondateurs. La levée de 1 M€ s'effectue par émission de nouvelles actions : à l'issue de l'opération, l'investisseur détient environ 9,09 % et l'équipe fondatrice le reste.",
    cap_post_logic_title: "Logique de calcul",
    cap_post_logic_1: "Valorisation pré-money 10 M€ + levée 1 M€ → valorisation post-money 11 M€",
    cap_post_logic_2: "Part de l'investisseur = 100 / 1 100 ≈ 9,09 %",
    cap_post_logic_3: "Les 10 000 actions existantes représentent 90,91 %, soit ≈ 1 000 actions nouvelles émises",

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

    funds_2_title: "Acquisition utilisateurs (B2C)",
    funds_2_d1: "Campagnes d'acquisition B2B ciblant restaurants et commerces locaux",
    funds_2_d2: "Stratégie de contenu et d'influence à grande échelle",
    funds_2_d3: "Programmes d'ambassadeurs",
    funds_2_d4: "Programmes de créateurs",
    funds_2_d5: "Acquisition d'utilisateurs B2C",
    funds_2_d6: "SEO et partenariats",
    funds_2_d7: "Notoriété de la marque",

    funds_3_title: "Acquisition commerçants (B2B)",
    funds_3_d1: "Développement et acquisition de commerçants B2B : prospection de points de vente physiques, expansion de l'équipe commerciale, accompagnement à l'intégration et négociations avec les commerces de restauration, afin d'accroître rapidement le nombre de marchands partenaires.",
    funds_3_d2: "Recrutements produit et ingénierie",
    funds_3_d3: "Expansion du customer success",
    funds_3_d4: "Onboarding des commerçants",
    funds_3_d5: "Mise à l'échelle opérationnelle",

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
    funds_5_d4: "Frais comptables",

    // Roadmap
    road_eyebrow: "Feuille de route stratégique",
    road_title: "Feuille de route à 12 mois",
    road_lead:
      "Cinq chantiers stratégiques structurent l'exécution sur les 18 prochains mois.",

    road_1_title: "Croissance commerciale",
    road_1_intro: "ODY vise à devenir une plateforme de référence pour les commerces locaux.",
    road_1_o1: "2 000+ établissements marchands actifs",
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

    // Vision at 12 months
    v18_eyebrow: "Vision à 12 mois",
    v18_title: "Le futur d'ODY",
    v18_lead:
      "À l'issue des 18 prochains mois, ODY ambitionne de devenir une plateforme pleinement intégrée combinant découverte, fidélité, marketing, réservations et paiements.",
    v18_outro:
      "Utilisée quotidiennement par des centaines de milliers de consommateurs et plus de 2 000 commerçants dans plusieurs pays.",
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
    hero_stat1_label: "Target merchant locations (12 mo)",
    hero_stat2_label: "Target active users (12 mo)",
    hero_stat3_label: "Target monthly revenue (12 mo)",
    hero_cta_primary: "Request data room access",
    hero_cta_secondary: "Explore the ecosystem",

    eco_eyebrow: "The ODY ecosystem",
    eco_title: "Three complementary layers, one platform",
    eco_lead:
      "The ODY ecosystem combines three complementary layers that connect consumers and merchants, creating powerful network effects.",

    nav_structure: "Structure",
    struct_eyebrow: "Organization",
    struct_title: "ODY Group structure",
    struct_lead:
      "A clear architecture across the group's entities, built for disciplined international expansion.",
    struct_holding_tag: "Parent holding",
    struct_holding_name: "ODY International Holding",
    struct_holding_desc: "Top entity holding all of the group's interests.",
    struct_fr_name: "ODY France",
    struct_fr_desc: "Group headquarters.",
    struct_country_label: "ODY",
    struct_country_desc: "International rollout in each local market.",
    struct_country_cycle: "China,UAE,Singapore,USA,Spain",
    struct_ventures_name: "Other related project",
    struct_ventures_desc: "",

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
    eco_pay_f1: "Payment terminal",
    eco_pay_f2: "Credit",
    eco_pay_f3: "Payment online",
    eco_pay_f4: "Issuing",
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
    snap_title: "12-month targets",
    snap_lead:
      "Ambitious yet structured targets, aligned with disciplined execution and a recurring revenue model.",
    snap_k1_value: "2,000+",
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
    cap_post_a2: "New investor acquiring ≈ 9.09% ownership post-money",
    cap_post_intro:
      "The company is valued at €10M pre-money, with an initial 10,000 shares fully held by the three founders. The €1M round is raised by issuing new shares: post-round, the investor holds about 9.09% and the founding team the remainder.",
    cap_post_logic_title: "Calculation logic",
    cap_post_logic_1: "€10M pre-money + €1M raised → €11M post-money valuation",
    cap_post_logic_2: "Investor stake = 100 / 1,100 ≈ 9.09%",
    cap_post_logic_3: "The existing 10,000 shares represent 90.91%, i.e. ≈ 1,000 new shares issued",

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

    funds_2_title: "B2C user acquisition",
    funds_2_d1: "B2B acquisition campaigns targeting restaurants and local businesses",
    funds_2_d2: "Large-scale content and influencer strategy",
    funds_2_d3: "Ambassador programs",
    funds_2_d4: "Creator programs",
    funds_2_d5: "B2C user acquisition",
    funds_2_d6: "SEO and partnerships",
    funds_2_d7: "Brand awareness",

    funds_3_title: "B2B merchant acquisition",
    funds_3_d1: "B2B merchant development: physical-store prospecting, sales-team expansion, onboarding support and negotiations with food & beverage merchants, to rapidly grow the number of partner merchants.",
    funds_3_d2: "Product and engineering hires",
    funds_3_d3: "Customer success expansion",
    funds_3_d4: "Merchant onboarding",
    funds_3_d5: "Operational scaling",

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
    funds_5_d4: "Accounting fees",

    road_eyebrow: "Strategic roadmap",
    road_title: "12-month strategic roadmap",
    road_lead: "Five strategic workstreams structure execution over the next 12 months.",

    road_1_title: "Commercial growth",
    road_1_intro: "ODY aims to become a leading platform for local businesses.",
    road_1_o1: "2,000+ active merchant locations",
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

    v18_eyebrow: "Vision at 12 months",
    v18_title: "The future of ODY",
    v18_lead:
      "At the end of the next 12 months, ODY aims to become a fully integrated platform combining discovery, loyalty, marketing, reservations and payments.",
    v18_outro:
      "Used daily by hundreds of thousands of consumers and more than 2,000 merchants across multiple countries.",
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
    hero_stat1_label: "目标商户门店（12 个月）",
    hero_stat2_label: "目标活跃用户（12 个月）",
    hero_stat3_label: "目标每月营业额（12 个月）",
    hero_cta_primary: "申请数据室访问",
    hero_cta_secondary: "了解生态系统",

    eco_eyebrow: "ODY 生态系统",
    eco_title: "三大互补系统，构筑完整商业生态链",
    eco_lead:
      "ODY 生态由三大协同业务板块组成，打通消费者端与商户端，并依托自有支付系统形成完整商业闭环。",

    nav_structure: "架构",
    struct_eyebrow: "集团组织架构",
    struct_title: "ODY 集团股权架构",
    struct_lead:
      "分层清晰的企业主体架构，适配全球化规模化扩张。",
    struct_holding_tag: "顶层控股母公司",
    struct_holding_name: "ODY 国际控股集团",
    struct_holding_desc: "持有集团全部权益的顶层实体。",
    struct_fr_name: "ODY 法国",
    struct_fr_desc: "集团全球总部。",
    struct_country_label: "ODY",
    struct_country_desc: "各国本地化市场独立运营主体。",
    struct_country_cycle: "中国,阿联酋,新加坡,美国,西班牙",
    struct_ventures_name: "其他配套专项项目主体",
    struct_ventures_desc: "",

    eco_app_tag: "C 端用户层",
    eco_app_title: "ODY B2C",
    eco_app_desc: "面向普通消费者的移动端应用，用户可实现以下功能：",
    eco_app_f1: "检索餐厅及各类本地生活商户",
    eco_app_f2: "获取个性化商家推荐",
    eco_app_f3: "积攒会员积分、兑换忠诚度福利",
    eco_app_f4: "核销优惠券、参与优惠活动",
    eco_app_f5: "线上预约到店服务",
    eco_app_f6: "分享探店内容、消费体验",
    eco_app_f7: "与线下商户在线互动沟通",
    eco_app_f8: "通过 ODY 生态完成一站式支付",

    eco_pro_tag: "B 端商户层",
    eco_pro_title: "ODY Pro",
    eco_pro_desc: "面向实体商家的一站式经营管理 SaaS 平台，提供全套工具：",
    eco_pro_f1: "一键搭建线上商家官网",
    eco_pro_f2: "线上预约订单管理系统",
    eco_pro_f3: "到店自提 / 外卖下单模块",
    eco_pro_f4: "客户关系管理 CRM 系统",
    eco_pro_f5: "门店会员忠诚度体系搭建",
    eco_pro_f6: "自动化营销投放工具",
    eco_pro_f7: "全量客户数据管理后台",
    eco_pro_f8: "经营数据可视化分析报表",
    eco_pro_f9: "线上评价口碑管理功能",

    eco_pay_tag: "金融支付层",
    eco_pay_title: "ODY Pay",
    eco_pay_desc: "自研一体化支付基础设施，贯通全业务链路，覆盖四大板块：",
    eco_pay_f1: "线下支付终端",
    eco_pay_f2: "商户信贷服务",
    eco_pay_f3: "线上在线支付",
    eco_pay_f4: "专属发卡业务",
    eco_pay_note:
      "既为商户、消费者打造统一流畅的消费闭环，也为平台带来持续稳定的交易手续费收入。",

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
    snap_title: "12 个月目标",
    snap_lead: "宏大而有章法的目标，依托严谨的执行与经常性收入模式。",
    snap_k1_value: "2,000+",
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
    cap_title: "股权架构清晰，创始团队利益高度统一",
    cap_lead:
      "项目当前 100% 股权由三位联合创始人持有，下文展示融资前、融资稀释后的股权变化。",
    cap_tab_current: "当前",
    cap_tab_future: "投资前",
    cap_tab_post: "投资后",

    cap_current_title: "融资前股权表",
    cap_current_desc: "ODY 现阶段全部股权由三位创始人全额持有，总股本 10000 股，总持股 100%。",
    cap_th_shareholder: "股东",
    cap_th_shares: "持股数量",
    cap_th_ownership: "持股占比",
    cap_founder1: "Antoine",
    cap_founder2: "Alex",
    cap_founder3: "Christine",
    cap_tbd: "待定",

    cap_future_title: "未来股权结构表（投资前）",
    cap_future_desc:
      "为支持未来招聘并吸引顶尖人才，ODY 计划设立占公司 5% 的 BSPCE / 员工期权池。",
    cap_founders: "创始团队",
    cap_bspce: "BSPCE 期权池",
    cap_bspce_full: "BSPCE 期权池（员工股票期权）",
    cap_investor: "新增投资方",

    cap_post_title: "投资后股权结构表",
    cap_post_desc: "假设条件：",
    cap_post_a1: "设立 5% 的 BSPCE 期权池",
    cap_post_a2: "新投资方投后取得公司约 9.09% 股权",
    cap_post_intro:
      "本公司投前估值 1000 万欧元，公司初始总股本设定为 10000 股，由三位创始人全额持有。本次计划融资 100 万欧元，通过增发新股方式稀释股权，融资完成后投资方持有约 9.09% 股份，创始团队合计持有剩余股权。",
    cap_post_logic_title: "测算逻辑",
    cap_post_logic_1: "投前估值 1000 万€，募资 100 万€ → 投后总估值 1100 万€",
    cap_post_logic_2: "投资方占比 = 100 / 1100 ≈ 9.09%",
    cap_post_logic_3: "原有 10000 股对应 90.91%，新增股份 ≈ 1000 股",

    fund_eyebrow: "融资目标",
    fund_title: "加速企业下一阶段高速增长",
    fund_lead:
      "本次募集资金将从五大战略维度加码投入，巩固 ODY 作为本地商户一站式综合平台的行业地位。",
    fund_i1: "产品迭代研发",
    fund_i2: "B 端商户拓展",
    fund_i3: "C 端用户规模增长",
    fund_i4: "自有支付体系搭建落地",
    fund_i5: "海外多国市场扩张",

    funds_eyebrow: "资金用途",
    funds_title: "资金分配均衡，全部用于规模化增长",
    funds_lead: "资金在产品、获客、人才、扩张与合规之间均衡分配。",
    funds_total: "总分配",
    funds_breakdown: "明细",
    funds_raise_value: "€100万",
    funds_raise_label: "本轮目标融资总额",

    funds_1_title: "产品研发与技术开发",
    funds_1_d1: "扩充产品、技术研发团队",
    funds_1_d2: "迭代升级 ODY 客户端、ODY Pro 商户后台新功能",
    funds_1_d3: "全方位优化用户使用体验",
    funds_1_d4: "自研支付底层基础设施",
    funds_1_d5: "平台安全体系与合规体系建设",
    funds_1_d6: "提升系统承载与扩容能力",
    funds_1_d7: "布局未来人工智能相关功能研发",

    funds_2_title: "C 端用户获客推广",
    funds_2_d1: "面向餐厅、本地实体商户开展批量 B 端拓客活动",
    funds_2_d2: "大规模内容种草、达人网红合作营销体系",
    funds_2_d3: "线下品牌推广大使计划",
    funds_2_d4: "创作者探店合作项目",
    funds_2_d5: "C 端消费者拉新投放",
    funds_2_d6: "搜索引擎优化、跨界商务合作",
    funds_2_d7: "全域品牌曝光建设",

    funds_3_title: "B 端商户拓展（商家获客）",
    funds_3_d1: "B 端商户开发拓展，用于线下门店招商、商户销售团队拓展、商家入驻扶持、餐饮实体商户商务洽谈等，快速扩充平台合作商家数量。",
    funds_3_d2: "增补产品、技术岗位人才",
    funds_3_d3: "扩容客户成功服务团队",
    funds_3_d4: "搭建商户入驻落地服务体系",
    funds_3_d5: "整体运营体系规模化升级",

    funds_4_title: "海外市场拓展",
    funds_4_d1: "海外市场调研分析",
    funds_4_d2: "产品本地化适配改造",
    funds_4_d3: "新国家站点正式上线运营",
    funds_4_d4: "海外本地战略合作伙伴搭建",
    funds_4_d5: "国际商务拓展团队搭建",

    funds_5_title: "法务合规、财务储备",
    funds_5_d1: "各国行业监管合规落地",
    funds_5_d2: "企业知识产权保护",
    funds_5_d3: "跨境跨国法律事务处理",
    funds_5_d4: "财务审计、会计相关费用",

    road_eyebrow: "战略路线图",
    road_title: "12 个月战略发展路线图",
    road_lead: "未来 12 个月围绕五大核心业务线落地执行。",

    road_1_title: "商业规模扩张",
    road_1_intro: "目标成为本地生活商户赛道头部平台。",
    road_1_o1: "达成 2000 家以上活跃合作门店",
    road_1_o2: "在本国全境完成 ODY Pro 商户系统全覆盖落地",
    road_1_o3: "与连锁餐饮集团、多门店商家达成深度战略合作",
    road_1_o4: "持续提升单商户为平台贡献的营收",

    road_2_title: "用户规模增长",
    road_2_intro: "打造欧洲头部本地生活发现 + 会员积分社群。",
    road_2_o1: "平台累计活跃用户突破 30 万人",
    road_2_o2: "搭建海量用户原创探店内容（UGC）生态",
    road_2_o3: "提升社群用户活跃度与互动粘性",
    road_2_o4: "提高用户复访频次与留存率",

    road_3_title: "上线自有支付产品 ODY Pay",
    road_3_intro: "支付业务是平台核心增长引擎。",
    road_3_o1: "完成全链路技术开发与系统打通",
    road_3_o2: "联合试点商户灰度上线支付功能",
    road_3_o3: "打通预约、下单、积分、优惠券、营销全链路",
    road_3_o4: "依托交易手续费创造持续性稳定收入",

    road_4_title: "财务经营目标",
    road_4_intro: "搭建可规模化复制的订阅收入商业模式。",
    road_4_o1: "稳定月度收入突破 20 万欧元",
    road_4_streams: "平台多元收入来源：",
    road_4_s1: "ODY Pro 商户订阅服务费",
    road_4_s2: "支付交易手续费分成",
    road_4_s3: "商户营销推广服务收费",
    road_4_s4: "门店会员积分运营服务",
    road_4_s5: "商家线上促销活动投放",
    road_4_s6: "其他增值商户服务",

    road_5_title: "全球化市场拓展",
    road_5_intro: "打造可复制出海经营模式。",
    road_5_o1: "在 3 个海外国家落地业务运营",
    road_5_o2: "搭建各国本地团队与区域合作资源",
    road_5_o3: "根据当地市场需求适配平台功能",
    road_5_o4: "维持轻量化、可扩张的标准化运营体系",

    v18_eyebrow: "12 个月愿景",
    v18_title: "ODY 的未来",
    v18_lead:
      "在未来 12 个月结束时，ODY 将成为一个完全集成的平台，融合发现、忠诚度、营销、预订与支付。",
    v18_outro:
      "每天被数十万消费者和超过 2,000 家商户在多个国家使用。",
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
    final_title: "ODY 不只是一款餐厅探店App，更是一站式商户经营生态平台",
    final_lead:
      "而是一套完整的本地商业生态体系，由三层业务相互赋能。",
    final_l1_title: "ODY B2C",
    final_l1_sub: "C 端用户端",
    final_l2_title: "ODY Pro",
    final_l2_sub: "B 端商户 SaaS 端",
    final_l3_title: "ODY Pay",
    final_l3_sub: "金融支付端",
    final_outro:
      "平台兼具可持续 SaaS 订阅收入与支付交易手续费收入，消费者与商户两端形成极强网络效应，商业模式具备高度规模化扩张潜力。",

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
