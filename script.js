/**
 * MM Painting & Design — script.js  v3
 * Lang switcher + i18n (EN / PT / ES) + nav + Formspree form + scroll
 */

(function () {
  'use strict';

  /* ════════════════════════════════════════════════════
     I18N TRANSLATIONS
     City names (Danbury, Bethel, Brookfield, Ridgefield,
     New Milford) are intentionally kept in English.
  ════════════════════════════════════════════════════ */
  var I18N = {

    en: {
      notif_text:    'Now booking: next 2–3 weeks — <strong>Slots filling fast.</strong> Call or text for your free estimate.',
      nav_services:  'Services',
      nav_work:      'Work',
      nav_reviews:   'Reviews',
      nav_about:     'About',
      nav_faq:       'FAQ',
      nav_contact:   'Contact',
      nav_cta:       'Free Estimate',
      btn_call:      'Call Now',
      btn_text:      'Text Us',
      btn_estimate:  'Free Estimate',
      hero_location: 'Danbury, CT & Surrounding Areas',
      hero_h1_line1: 'Premium Painting & Design',
      hero_h1_line2: 'in Danbury, CT',
      hero_sub:      'Meticulous prep. Flawless finishes. Done right the first time.<br>Residential and commercial painting you can trust.',
      hero_tagline:  'Where Detail Matters',
      badge_res:     'Residential & Commercial',
      badge_detail:  'Detail-Oriented Finish',
      badge_free:    'Free Estimates',
      badge_ontime:  'On-Time & Clean',
      svc_eyebrow:   'What We Do',
      svc_title:     'Professional Painting & Property Services',
      svc_sub:       'Painting, power washing, and window cleaning — every surface treated with precision.',
      svc1_title:    'Interior Painting',
      svc1_desc:     'Clean lines, smooth walls, perfect trim. We protect your furniture and floors and leave your space better than we found it.',
      svc2_title:    'Exterior Painting',
      svc2_desc:     "Proper surface prep, crack repair, and premium coatings built to withstand Connecticut's weather. Curb appeal that lasts.",
      svc3_title:    'Residential',
      svc3_desc:     'Your home deserves the best. We treat every room with care — whether a full repaint or a single accent wall refresh.',
      svc4_title:    'Commercial',
      svc4_desc:     'Offices, retail, multi-family — we work around your schedule to minimize disruption and deliver a professional result on deadline.',
      svc5_title:    'Power Washing',
      svc5_desc:     'Professional power washing for siding, driveways, decks, and exterior surfaces. Restore the clean look of your property safely and effectively.',
      svc6_title:    'Window Cleaning',
      svc6_desc:     'Professional residential and commercial window cleaning for a spotless, streak-free finish that improves appearance and natural light.',
      why_eyebrow:   'Why MM Painting',
      why_title:     'Built on Standards.<br>Backed by Results.',
      why_sub:       "We're not the cheapest — we're the best value for homeowners and businesses who expect it done right.",
      why_cta:       'Get Your Free Estimate',
      why1_title:    'Clean, Detailed Finish',
      why1_desc:     'Crisp edges. Smooth coats. Zero drips. Every time.',
      why2_title:    'Careful Prep & Protection',
      why2_desc:     'We mask, cover, and protect everything before a drop of paint opens.',
      why3_title:    'Reliable Scheduling',
      why3_desc:     'We show up when we say we will. Your time matters.',
      why4_title:    'Professional Communication',
      why4_desc:     'Clear quotes. Honest timelines. No surprise charges.',
      why5_title:    'Quality Materials',
      why5_desc:     'We use Benjamin Moore, Sherwin-Williams, and other top-grade coatings.',
      why6_title:    'Respect for Your Space',
      why6_desc:     'We treat your home or business like our own. Clean jobsite, every day.',
      gal_eyebrow:   'Our Work',
      gal_title:     'Finished Projects',
      gal_sub:       'Every project reflects our commitment to a flawless result.',
      ba_eyebrow:    'The MM Difference',
      ba_title:      'Before & After',
      ba_sub:        'See what a detail-oriented finish actually looks like.',
      ba_before:     'Before',
      ba_after:      'After',
      ba1_caption:   'Exterior Repaint — Danbury, CT',
      ba2_caption:   'Interior Refresh — Bethel, CT',
      ba3_caption:   'Power Washing — Ridgefield, CT',
      ba_cta:        'Get a Free Estimate',
      rev_eyebrow:   'Customer Reviews',
      rev_title:     'What Our Clients Say',
      rev1_text:     '"MM Painting transformed our living room and kitchen. Spotless work — they protected everything, left no mess, and the finish is absolutely perfect. Highly recommend."',
      rev2_text:     '"We hired MM for our office repaint. They worked over a weekend so we weren\'t disrupted. Professional, clean, on budget. The walls look brand new. Will use again."',
      rev3_text:     '"The exterior of our house looks incredible. They took their time on the prep, filled in every crack, and the color came out exactly as we envisioned. Worth every penny."',
      rev_google:    'See Us on Google',
      about_eyebrow: 'About Us',
      about_title:   "Danbury's Premium Painting Crew",
      about_p1:      'MM Painting & Design was built on a simple idea: paint applied with care looks completely different. We sweat every detail — the prep, the edges, the final walkthrough — because we know that\'s what separates a good job from a great one.',
      about_p2:      'We serve homeowners and businesses across <strong>Danbury, Bethel, Brookfield, Ridgefield, and New Milford, CT</strong>. No subcontractors. No shortcuts. Every project gets our full attention.',
      about_p3:      "When you hire MM, you get a team that communicates clearly, respects your property, and delivers a finish that holds up. That's our standard. Every time.",
      stat1: 'Jobs Completed', stat2: 'Years Experience', stat3: 'Google Rating',
      faq_eyebrow:   'Common Questions',
      faq_title:     'Frequently Asked Questions',
      faq1_q:        'Do you offer free estimates?',
      faq1_a:        'Yes. All estimates are 100% free, no obligation. We\'ll assess the job in person and provide a clear, written quote. Call or text us anytime to schedule.',
      faq2_q:        'How long does a typical job take?',
      faq2_a:        'It depends on scope. An average interior room takes 1–2 days. Full interiors or exterior repaints typically run 3–7 days. We give you a firm timeline during your estimate.',
      faq3_q:        'What areas do you serve?',
      faq3_a:        'We primarily serve Danbury, Bethel, Brookfield, Ridgefield, and New Milford, CT. Contact us if you\'re in a neighboring town — we may be able to accommodate.',
      faq4_q:        'What paint brands do you use?',
      faq4_a:        'We work with premium brands including Benjamin Moore and Sherwin-Williams. We recommend specific product lines based on your surface type and desired finish. You can also supply your own paint if preferred.',
      faq5_q:        'How do you protect furniture and floors?',
      faq5_a:        'We move or cover all furniture, lay protective drop cloths on all flooring, and tape all edges meticulously before any paint is opened. We clean up fully each day and at project completion.',
      faq6_q:        'Are you insured?',
      faq6_a:        'Yes. MM Painting & Design is fully insured. We carry both general liability and workers\' compensation coverage. Proof of insurance available upon request.',
      contact_eyebrow: 'Get Started',
      contact_title:   'Request a Free Estimate',
      contact_sub:     'No pressure. Just a straight answer and a fair price.',
      contact_area:    'Service Area: Danbury, CT & Nearby',
      contact_hours:   'Mon–Fri 8am–6pm | Sat 8am–2pm',
      contact_google:  'Read Our Google Reviews',
      form_name:       'Full Name',
      form_phone:      'Phone Number',
      form_email:      'Email Address',
      form_msg:        'Tell us about your project',
      form_submit:     'Send My Request',
      form_note:       'We respond within 1 business day. No spam, ever.',
      footer_links:    'Quick Links',
      footer_contact_title: 'Contact',
      footer_copy:     'All rights reserved.',
      form_err_name:   'Please enter your full name.',
      form_err_phone:  'Please enter a valid phone number.',
      form_err_email:  'Please enter a valid email address.',
      form_err_msg:    'Please describe your project (at least 10 characters).',
      form_success:    "✓ Request Sent! We'll be in touch within 1 business day.",
      form_error_net:  '⚠ Could not send. Please call or text us directly.',
    },

    pt: {
      notif_text:    'Agendando: próximas 2–3 semanas — <strong>Vagas acabando.</strong> Ligue ou envie mensagem para seu orçamento gratuito.',
      nav_services:  'Serviços',
      nav_work:      'Trabalhos',
      nav_reviews:   'Avaliações',
      nav_about:     'Sobre',
      nav_faq:       'Dúvidas',
      nav_contact:   'Contato',
      nav_cta:       'Orçamento Grátis',
      btn_call:      'Ligar Agora',
      btn_text:      'Enviar Mensagem',
      btn_estimate:  'Orçamento Grátis',
      hero_location: 'Danbury, CT & Arredores',
      hero_h1_line1: 'Pintura & Design Premium',
      hero_h1_line2: 'em Danbury, CT',
      hero_sub:      'Preparo meticuloso. Acabamento impecável. Feito certo da primeira vez.<br>Pintura residencial e comercial em quem você pode confiar.',
      hero_tagline:  'Onde o Detalhe Importa',
      badge_res:     'Residencial & Comercial',
      badge_detail:  'Acabamento Detalhado',
      badge_free:    'Orçamentos Grátis',
      badge_ontime:  'Pontual & Limpo',
      svc_eyebrow:   'O Que Fazemos',
      svc_title:     'Serviços Profissionais de Pintura e Propriedade',
      svc_sub:       'Pintura, lavagem a pressão e limpeza de janelas — cada superfície tratada com precisão.',
      svc1_title:    'Pintura Interna',
      svc1_desc:     'Linhas limpas, paredes lisas, acabamento perfeito. Protegemos seus móveis e pisos e deixamos seu espaço melhor do que encontramos.',
      svc2_title:    'Pintura Externa',
      svc2_desc:     'Preparação adequada da superfície, reparo de rachaduras e revestimentos premium resistentes ao clima de Connecticut. Beleza que dura.',
      svc3_title:    'Residencial',
      svc3_desc:     'Sua casa merece o melhor. Tratamos cada cômodo com cuidado — seja uma repintura completa ou apenas uma parede de destaque.',
      svc4_title:    'Comercial',
      svc4_desc:     'Escritórios, lojas, condomínios — trabalhamos conforme sua agenda para minimizar interrupções e entregar resultado profissional no prazo.',
      svc5_title:    'Lavagem a Pressão',
      svc5_desc:     'Lavagem a pressão profissional para revestimentos, calçadas, decks e superfícies externas. Restaure a aparência limpa do seu imóvel com segurança e eficiência.',
      svc6_title:    'Limpeza de Janelas',
      svc6_desc:     'Limpeza profissional de janelas residencial e comercial para um acabamento impecável e sem manchas que melhora a aparência e a entrada de luz natural.',
      why_eyebrow:   'Por que MM Painting',
      why_title:     'Construído em Padrões.<br>Garantido por Resultados.',
      why_sub:       'Não somos os mais baratos — somos o melhor custo-benefício para quem exige excelência.',
      why_cta:       'Solicite Seu Orçamento',
      why1_title:    'Acabamento Limpo e Detalhado',
      why1_desc:     'Bordas precisas. Camadas lisas. Zero respingos. Sempre.',
      why2_title:    'Preparação e Proteção Cuidadosa',
      why2_desc:     'Cobrimos e protegemos tudo antes de abrir um pingo de tinta.',
      why3_title:    'Agendamento Confiável',
      why3_desc:     'Aparecemos quando dizemos que vamos aparecer. Seu tempo importa.',
      why4_title:    'Comunicação Profissional',
      why4_desc:     'Orçamentos claros. Prazos honestos. Sem surpresas no preço.',
      why5_title:    'Materiais de Qualidade',
      why5_desc:     'Usamos Benjamin Moore, Sherwin-Williams e outras tintas premium.',
      why6_title:    'Respeito pelo Seu Espaço',
      why6_desc:     'Tratamos sua casa ou empresa como se fosse nossa. Obra limpa todos os dias.',
      gal_eyebrow:   'Nossos Trabalhos',
      gal_title:     'Projetos Concluídos',
      gal_sub:       'Cada projeto reflete nosso compromisso com um resultado impecável.',
      ba_eyebrow:    'A Diferença MM',
      ba_title:      'Antes & Depois',
      ba_sub:        'Veja como um acabamento detalhado realmente transforma.',
      ba_before:     'Antes',
      ba_after:      'Depois',
      ba1_caption:   'Repintura Externa — Danbury, CT',
      ba2_caption:   'Renovação Interna — Bethel, CT',
      ba3_caption:   'Lavagem a Pressão — Ridgefield, CT',
      ba_cta:        'Solicitar Orçamento Grátis',
      rev_eyebrow:   'Avaliações de Clientes',
      rev_title:     'O Que Nossos Clientes Dizem',
      rev1_text:     '"A MM Painting transformou nossa sala e cozinha. Trabalho impecável — protegeram tudo, não deixaram sujeira, e o acabamento está absolutamente perfeito. Super recomendo."',
      rev2_text:     '"Contratei a MM para repintar nosso escritório. Trabalharam no fim de semana para não atrapalhar. Profissionais, limpos, dentro do orçamento. As paredes parecem novas. Voltarei a contratar."',
      rev3_text:     '"O exterior da nossa casa ficou incrível. Foram cuidadosos no preparo, tamparam cada rachadura, e a cor saiu exatamente como imaginamos. Valeu cada centavo."',
      rev_google:    'Ver no Google',
      about_eyebrow: 'Sobre Nós',
      about_title:   'A Equipe Premium de Pintura de Danbury',
      about_p1:      'A MM Painting & Design foi criada com uma ideia simples: pintura aplicada com cuidado tem resultado completamente diferente. Nos preocupamos com cada detalhe — a preparação, as bordas, a vistoria final.',
      about_p2:      'Atendemos residências e empresas em <strong>Danbury, Bethel, Brookfield, Ridgefield e New Milford, CT</strong>. Sem terceirização. Sem atalhos. Atenção total em cada projeto.',
      about_p3:      'Quando você contrata a MM, recebe uma equipe que se comunica com clareza, respeita sua propriedade e entrega um acabamento duradouro. Esse é o nosso padrão. Sempre.',
      stat1: 'Trabalhos Concluídos', stat2: 'Anos de Experiência', stat3: 'Avaliação Google',
      faq_eyebrow:   'Perguntas Frequentes',
      faq_title:     'Dúvidas Comuns',
      faq1_q:        'Vocês oferecem orçamentos gratuitos?',
      faq1_a:        'Sim. Todos os orçamentos são 100% gratuitos, sem compromisso. Avaliamos o serviço pessoalmente e fornecemos uma proposta clara e por escrito.',
      faq2_q:        'Quanto tempo dura um serviço típico?',
      faq2_a:        'Depende do escopo. Um cômodo interno leva 1–2 dias. Interiores completos ou repinturas externas geralmente levam 3–7 dias.',
      faq3_q:        'Quais áreas vocês atendem?',
      faq3_a:        'Atendemos principalmente Danbury, Bethel, Brookfield, Ridgefield e New Milford, CT. Entre em contato se estiver em uma cidade vizinha — podemos conseguir atender.',
      faq4_q:        'Quais marcas de tinta vocês usam?',
      faq4_a:        'Trabalhamos com marcas premium como Benjamin Moore e Sherwin-Williams. Recomendamos linhas específicas conforme o tipo de superfície e acabamento desejado.',
      faq5_q:        'Como vocês protegem móveis e pisos?',
      faq5_a:        'Movemos ou cobrimos todos os móveis, colocamos lonas protetoras em todos os pisos e fitas em todas as bordas antes de abrir qualquer lata de tinta.',
      faq6_q:        'Vocês são segurados?',
      faq6_a:        'Sim. A MM Painting & Design é totalmente segurada. Possuímos responsabilidade civil e seguro de acidentes de trabalho. Comprovante disponível mediante solicitação.',
      contact_eyebrow: 'Comece Agora',
      contact_title:   'Solicite um Orçamento Gratuito',
      contact_sub:     'Sem pressão. Apenas uma resposta direta e um preço justo.',
      contact_area:    'Área de Atendimento: Danbury, CT & Arredores',
      contact_hours:   'Seg–Sex 8h–18h | Sáb 8h–14h',
      contact_google:  'Ler Nossas Avaliações no Google',
      form_name:       'Nome Completo',
      form_phone:      'Telefone',
      form_email:      'E-mail',
      form_msg:        'Conte-nos sobre seu projeto',
      form_submit:     'Enviar Solicitação',
      form_note:       'Respondemos em até 1 dia útil. Sem spam.',
      footer_links:    'Links Rápidos',
      footer_contact_title: 'Contato',
      footer_copy:     'Todos os direitos reservados.',
      form_err_name:   'Por favor, insira seu nome completo.',
      form_err_phone:  'Por favor, insira um telefone válido.',
      form_err_email:  'Por favor, insira um e-mail válido.',
      form_err_msg:    'Descreva seu projeto (mínimo 10 caracteres).',
      form_success:    '✓ Solicitação enviada! Entraremos em contato em até 1 dia útil.',
      form_error_net:  '⚠ Não foi possível enviar. Ligue ou envie mensagem diretamente.',
    },

    es: {
      notif_text:    'Reservas abiertas: próximas 2–3 semanas — <strong>Cupos llenándose.</strong> Llame o escriba para su presupuesto gratuito.',
      nav_services:  'Servicios',
      nav_work:      'Trabajos',
      nav_reviews:   'Reseñas',
      nav_about:     'Nosotros',
      nav_faq:       'Preguntas',
      nav_contact:   'Contacto',
      nav_cta:       'Presupuesto Gratis',
      btn_call:      'Llamar Ahora',
      btn_text:      'Enviar Mensaje',
      btn_estimate:  'Presupuesto Gratis',
      hero_location: 'Danbury, CT y Alrededores',
      hero_h1_line1: 'Pintura & Diseño Premium',
      hero_h1_line2: 'en Danbury, CT',
      hero_sub:      'Preparación minuciosa. Acabados impecables. Bien hecho desde la primera vez.<br>Pintura residencial y comercial en la que puede confiar.',
      hero_tagline:  'Donde el Detalle Importa',
      badge_res:     'Residencial & Comercial',
      badge_detail:  'Acabado Detallado',
      badge_free:    'Presupuestos Gratis',
      badge_ontime:  'Puntual & Limpio',
      svc_eyebrow:   'Lo Que Hacemos',
      svc_title:     'Servicios Profesionales de Pintura y Propiedad',
      svc_sub:       'Pintura, lavado a presión y limpieza de ventanas — cada superficie tratada con precisión.',
      svc1_title:    'Pintura Interior',
      svc1_desc:     'Líneas limpias, paredes lisas, acabado perfecto. Protegemos sus muebles y pisos y dejamos su espacio mejor de como lo encontramos.',
      svc2_title:    'Pintura Exterior',
      svc2_desc:     'Preparación adecuada, reparación de grietas y recubrimientos premium resistentes al clima de Connecticut. Atractivo duradero.',
      svc3_title:    'Residencial',
      svc3_desc:     'Su hogar merece lo mejor. Tratamos cada habitación con cuidado — ya sea una repintura completa o un detalle de acento.',
      svc4_title:    'Comercial',
      svc4_desc:     'Oficinas, locales, edificios multifamiliares — trabajamos según su horario para minimizar interrupciones y entregar resultados profesionales a tiempo.',
      svc5_title:    'Lavado a Presión',
      svc5_desc:     'Lavado a presión profesional para revestimientos, entradas, terrazas y superficies exteriores. Restaure la apariencia limpia de su propiedad de forma segura y eficaz.',
      svc6_title:    'Limpieza de Ventanas',
      svc6_desc:     'Limpieza profesional de ventanas residencial y comercial para un acabado impecable y sin rayas que mejora la apariencia y la entrada de luz natural.',
      why_eyebrow:   'Por qué MM Painting',
      why_title:     'Construido en Estándares.<br>Respaldado por Resultados.',
      why_sub:       'No somos los más baratos — somos el mejor valor para quienes exigen que las cosas se hagan bien.',
      why_cta:       'Solicitar Presupuesto Gratis',
      why1_title:    'Acabado Limpio y Detallado',
      why1_desc:     'Bordes precisos. Capas suaves. Cero goteos. Siempre.',
      why2_title:    'Preparación y Protección Cuidadosa',
      why2_desc:     'Cubrimos y protegemos todo antes de abrir una lata de pintura.',
      why3_title:    'Programación Confiable',
      why3_desc:     'Llegamos cuando decimos que llegamos. Su tiempo es valioso.',
      why4_title:    'Comunicación Profesional',
      why4_desc:     'Presupuestos claros. Plazos honestos. Sin cargos sorpresa.',
      why5_title:    'Materiales de Calidad',
      why5_desc:     'Usamos Benjamin Moore, Sherwin-Williams y otras marcas premium.',
      why6_title:    'Respeto por Su Espacio',
      why6_desc:     'Tratamos su hogar o negocio como el nuestro. Obra limpia todos los días.',
      gal_eyebrow:   'Nuestros Trabajos',
      gal_title:     'Proyectos Terminados',
      gal_sub:       'Cada proyecto refleja nuestro compromiso con un resultado impecable.',
      ba_eyebrow:    'La Diferencia MM',
      ba_title:      'Antes & Después',
      ba_sub:        'Vea cómo un acabado detallado transforma cualquier espacio.',
      ba_before:     'Antes',
      ba_after:      'Después',
      ba1_caption:   'Repintura Exterior — Danbury, CT',
      ba2_caption:   'Renovación Interior — Bethel, CT',
      ba3_caption:   'Lavado a Presión — Ridgefield, CT',
      ba_cta:        'Solicitar Presupuesto Gratis',
      rev_eyebrow:   'Reseñas de Clientes',
      rev_title:     'Lo Que Dicen Nuestros Clientes',
      rev1_text:     '"MM Painting transformó nuestra sala y cocina. Trabajo impecable — protegieron todo, no dejaron desorden, y el acabado es absolutamente perfecto. Muy recomendable."',
      rev2_text:     '"Contratamos a MM para repintar nuestra oficina. Trabajaron el fin de semana para no interrumpirnos. Profesionales, limpios, dentro del presupuesto. Las paredes parecen nuevas."',
      rev3_text:     '"El exterior de nuestra casa quedó increíble. Se tomaron su tiempo en la preparación, rellenaron cada grieta, y el color quedó exactamente como lo imaginamos. Valió cada centavo."',
      rev_google:    'Vernos en Google',
      about_eyebrow: 'Sobre Nosotros',
      about_title:   'El Equipo Premium de Pintura de Danbury',
      about_p1:      'MM Painting & Design fue fundada con una idea simple: la pintura aplicada con cuidado luce completamente diferente. Nos esforzamos en cada detalle — la preparación, los bordes, la inspección final.',
      about_p2:      'Atendemos hogares y empresas en <strong>Danbury, Bethel, Brookfield, Ridgefield y New Milford, CT</strong>. Sin subcontratistas. Sin atajos. Atención completa en cada proyecto.',
      about_p3:      'Cuando contrata a MM, obtiene un equipo que se comunica claramente, respeta su propiedad y entrega un acabado duradero. Ese es nuestro estándar. Siempre.',
      stat1: 'Trabajos Completados', stat2: 'Años de Experiencia', stat3: 'Calificación Google',
      faq_eyebrow:   'Preguntas Frecuentes',
      faq_title:     'Preguntas Comunes',
      faq1_q:        '¿Ofrecen presupuestos gratuitos?',
      faq1_a:        'Sí. Todos los presupuestos son 100% gratuitos, sin compromiso. Evaluamos el trabajo en persona y proporcionamos una cotización clara y por escrito.',
      faq2_q:        '¿Cuánto dura un trabajo típico?',
      faq2_a:        'Depende del alcance. Una habitación interior promedio toma 1–2 días. Interiores completos o repinturas exteriores suelen tomar 3–7 días.',
      faq3_q:        '¿Qué áreas atienden?',
      faq3_a:        'Atendemos principalmente Danbury, Bethel, Brookfield, Ridgefield y New Milford, CT. Contáctenos si está en una ciudad cercana — podemos acomodarle.',
      faq4_q:        '¿Qué marcas de pintura usan?',
      faq4_a:        'Trabajamos con marcas premium como Benjamin Moore y Sherwin-Williams. Recomendamos líneas específicas según el tipo de superficie y acabado deseado.',
      faq5_q:        '¿Cómo protegen muebles y pisos?',
      faq5_a:        'Movemos o cubrimos todos los muebles, colocamos lonas protectoras en todos los pisos y cintamos todos los bordes meticulosamente antes de abrir cualquier lata de pintura.',
      faq6_q:        '¿Están asegurados?',
      faq6_a:        'Sí. MM Painting & Design está completamente asegurada. Contamos con responsabilidad civil y compensación laboral. Comprobante disponible bajo solicitud.',
      contact_eyebrow: 'Comenzar',
      contact_title:   'Solicite un Presupuesto Gratuito',
      contact_sub:     'Sin presión. Solo una respuesta directa y un precio justo.',
      contact_area:    'Área de Servicio: Danbury, CT y Alrededores',
      contact_hours:   'Lun–Vie 8am–6pm | Sáb 8am–2pm',
      contact_google:  'Leer Nuestras Reseñas en Google',
      form_name:       'Nombre Completo',
      form_phone:      'Número de Teléfono',
      form_email:      'Correo Electrónico',
      form_msg:        'Cuéntenos sobre su proyecto',
      form_submit:     'Enviar Mi Solicitud',
      form_note:       'Respondemos en 1 día hábil. Sin spam.',
      footer_links:    'Enlaces Rápidos',
      footer_contact_title: 'Contacto',
      footer_copy:     'Todos los derechos reservados.',
      form_err_name:   'Por favor ingrese su nombre completo.',
      form_err_phone:  'Por favor ingrese un número de teléfono válido.',
      form_err_email:  'Por favor ingrese un correo electrónico válido.',
      form_err_msg:    'Describa su proyecto (mínimo 10 caracteres).',
      form_success:    '✓ ¡Solicitud enviada! Nos pondremos en contacto en 1 día hábil.',
      form_error_net:  '⚠ No se pudo enviar. Por favor llámenos o escríbanos directamente.',
    }

  };

  /* ════════════════════════════════════════════════════
     LANGUAGE METADATA
  ════════════════════════════════════════════════════ */
  var LANG_CODES  = { en: 'en', pt: 'pt-BR', es: 'es' };
  var LANG_LABELS = { en: 'EN', pt: 'PT',    es: 'ES' };

  function getInitialLang() {
    // 1. URL param
    var params = new URLSearchParams(window.location.search);
    var p = params.get('lang');
    if (p && I18N[p]) return p;
    // 2. localStorage
    var saved = localStorage.getItem('mm_lang');
    if (saved && I18N[saved]) return saved;
    // 3. Browser language
    var nav = (navigator.language || '').toLowerCase();
    if (nav.startsWith('pt')) return 'pt';
    if (nav.startsWith('es')) return 'es';
    return 'en';
  }

  var currentLang = getInitialLang();

  /* ════════════════════════════════════════════════════
     APPLY TRANSLATIONS
  ════════════════════════════════════════════════════ */
  function applyTranslations(lang) {
    var t = I18N[lang];
    if (!t) return;

    document.documentElement.lang = LANG_CODES[lang] || lang;
    localStorage.setItem('mm_lang', lang);
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update placeholder attrs separately for inputs
    var placeholders = {
      name:    { en: 'Your name',             pt: 'Seu nome',             es: 'Su nombre' },
      phone:   { en: '(203) 000-0000',        pt: '(203) 000-0000',       es: '(203) 000-0000' },
      email:   { en: 'your@email.com',        pt: 'seu@email.com',        es: 'su@correo.com' },
      message: { en: 'Interior painting, exterior, power washing, room count, any details...', pt: 'Pintura interna, externa, lavagem, quantidade de cômodos...', es: 'Pintura interior, exterior, lavado, número de habitaciones...' }
    };
    Object.keys(placeholders).forEach(function (id) {
      var el = document.getElementById(id);
      if (el && placeholders[id][lang]) el.placeholder = placeholders[id][lang];
    });

    // Update lang switcher UI
    updateLangUI(lang);
  }

  function updateLangUI(lang) {
    var label = LANG_LABELS[lang] || lang.toUpperCase();

    // Desktop
    var cur = document.getElementById('langCurrent');
    if (cur) cur.textContent = label;

    // Mobile
    var curM = document.getElementById('langCurrentMobile');
    if (curM) curM.textContent = label;

    // Mark selected in both dropdowns
    document.querySelectorAll('[data-lang]').forEach(function (li) {
      li.setAttribute('aria-selected', li.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  /* ════════════════════════════════════════════════════
     LANG SWITCHER DROPDOWN LOGIC
  ════════════════════════════════════════════════════ */
  function setupSwitcher(btnId, dropId, currentId) {
    var btn  = document.getElementById(btnId);
    var drop = document.getElementById(dropId);
    if (!btn || !drop) return;

    function openDrop() {
      drop.hidden = false;
      btn.setAttribute('aria-expanded', 'true');
    }
    function closeDrop() {
      drop.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
    }
    function toggleDrop() {
      drop.hidden ? openDrop() : closeDrop();
    }

    btn.addEventListener('click', function (e) { e.stopPropagation(); toggleDrop(); });

    drop.querySelectorAll('[data-lang]').forEach(function (li) {
      li.addEventListener('click', function () {
        applyTranslations(li.getAttribute('data-lang'));
        closeDrop();
        btn.focus();
      });
      li.setAttribute('tabindex', '0');
      li.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          applyTranslations(li.getAttribute('data-lang'));
          closeDrop();
          btn.focus();
        }
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !drop.contains(e.target)) closeDrop();
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrop();
    });
  }

  /* ════════════════════════════════════════════════════
     DOM READY INIT
  ════════════════════════════════════════════════════ */
  var header      = document.getElementById('siteHeader');
  var hamburger   = document.getElementById('hamburger');
  var mobileNav   = document.getElementById('mobileNavOverlay');
  var backToTop   = document.getElementById('backToTop');
  var contactForm = document.getElementById('contactForm');
  var yearEl      = document.getElementById('year');
  var mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Language switchers
  setupSwitcher('langBtn',       'langDropdown',       'langCurrent');
  setupSwitcher('langBtnMobile', 'langDropdownMobile', 'langCurrentMobile');

  // Apply saved/detected language on load
  applyTranslations(currentLang);

  /* ── SCROLL HANDLER ── */
  function onScroll() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 20);
    if (backToTop) backToTop.hidden = window.scrollY <= 400;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── BACK TO TOP ── */
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── HAMBURGER / MOBILE NAV ── */
  function closeMobileNav() {
    if (!hamburger || !mobileNav) return;
    hamburger.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function openMobileNav() {
    hamburger.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      hamburger.getAttribute('aria-expanded') === 'true' ? closeMobileNav() : openMobileNav();
    });
    mobileLinks.forEach(function (l) { l.addEventListener('click', closeMobileNav); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        closeMobileNav(); hamburger.focus();
      }
    });
  }

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  /* ── FAQ ACCORDION: close others ── */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) { if (other !== item && other.open) other.open = false; });
      }
    });
  });

  /* ── CONTACT FORM — FORMSPREE + CLIENT VALIDATION ── */
  if (contactForm) {

    function showErr(inputId, errId, key) {
      var el = document.getElementById(inputId);
      var er = document.getElementById(errId);
      if (el) el.classList.add('error');
      if (er) er.textContent = I18N[currentLang][key] || '';
    }
    function clearErr(inputId, errId) {
      var el = document.getElementById(inputId);
      var er = document.getElementById(errId);
      if (el) el.classList.remove('error');
      if (er) er.textContent = '';
    }

    ['name','phone','email','message'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener('input', function () { clearErr(id, id + 'Error'); });
    });

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var nameEl    = document.getElementById('name');
      var phoneEl   = document.getElementById('phone');
      var emailEl   = document.getElementById('email');
      var messageEl = document.getElementById('message');
      var valid = true;

      ['name','phone','email','message'].forEach(function (id) { clearErr(id, id + 'Error'); });

      if (!nameEl || nameEl.value.trim().length < 2)    { showErr('name',    'nameError',    'form_err_name');  valid = false; }
      if (!phoneEl || phoneEl.value.trim().length < 7)   { showErr('phone',   'phoneError',   'form_err_phone'); valid = false; }
      if (emailEl && emailEl.value.trim()) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) { showErr('email', 'emailError', 'form_err_email'); valid = false; }
      }
      if (!messageEl || messageEl.value.trim().length < 10) { showErr('message', 'messageError', 'form_err_msg'); valid = false; }

      if (!valid) {
        var first = contactForm.querySelector('.error');
        if (first) first.focus();
        return;
      }

      // Show loading state
      var btn = contactForm.querySelector('.form-submit');
      var origHTML = btn ? btn.innerHTML : '';
      if (btn) {
        btn.innerHTML = '<span>Sending…</span>';
        btn.disabled = true;
      }

      // Submit to Formspree via fetch
      var formData = new FormData(contactForm);

      fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (response) {
        if (response.ok) {
          // Success
          if (btn) {
            btn.innerHTML = I18N[currentLang]['form_success'] || '✓ Sent!';
            btn.style.cssText = 'background:#1a7a3a;border-color:#1a7a3a;';
          }
          contactForm.reset();
          setTimeout(function () {
            if (btn) {
              btn.innerHTML = origHTML;
              btn.disabled = false;
              btn.style.cssText = '';
            }
          }, 6000);
        } else {
          // Formspree returned error — fallback to mailto
          if (btn) {
            btn.innerHTML = I18N[currentLang]['form_error_net'] || '⚠ Try again';
            btn.style.cssText = 'background:#a81f1f;border-color:#a81f1f;';
            btn.disabled = false;
          }
          setTimeout(function () {
            if (btn) { btn.innerHTML = origHTML; btn.style.cssText = ''; }
          }, 5000);
          // Fallback mailto
          var subject = encodeURIComponent('Free Estimate Request — MM Painting & Design');
          var body = encodeURIComponent(
            'Name: '    + (nameEl    ? nameEl.value.trim()    : '') + '\n' +
            'Phone: '   + (phoneEl   ? phoneEl.value.trim()   : '') + '\n' +
            'Email: '   + (emailEl   ? emailEl.value.trim()   : '') + '\n\n' +
            'Project:\n'+ (messageEl ? messageEl.value.trim() : '')
          );
          window.open('mailto:marlonmurilhousa@hotmail.com?subject=' + subject + '&body=' + body);
        }
      })
      .catch(function () {
        // Network failure — fallback to mailto
        if (btn) {
          btn.innerHTML = I18N[currentLang]['form_error_net'] || '⚠ Try again';
          btn.style.cssText = 'background:#a81f1f;border-color:#a81f1f;';
          btn.disabled = false;
        }
        setTimeout(function () {
          if (btn) { btn.innerHTML = origHTML; btn.style.cssText = ''; }
        }, 5000);
        var subject = encodeURIComponent('Free Estimate Request — MM Painting & Design');
        var body = encodeURIComponent(
          'Name: '    + (nameEl    ? nameEl.value.trim()    : '') + '\n' +
          'Phone: '   + (phoneEl   ? phoneEl.value.trim()   : '') + '\n' +
          'Email: '   + (emailEl   ? emailEl.value.trim()   : '') + '\n\n' +
          'Project:\n'+ (messageEl ? messageEl.value.trim() : '')
        );
        window.open('mailto:marlonmurilhousa@hotmail.com?subject=' + subject + '&body=' + body);
      });
    });
  }

  /* ── SCROLL REVEAL ── */
  if ('IntersectionObserver' in window) {
    var styleEl = document.createElement('style');
    styleEl.textContent = [
      '.reveal { opacity:0; transform:translateY(20px); transition:opacity .5s ease,transform .5s ease; }',
      '.reveal.visible { opacity:1; transform:translateY(0); }'
    ].join('');
    document.head.appendChild(styleEl);

    var targets = document.querySelectorAll(
      '.service-card,.review-card,.why-item,.gallery-item,.faq-item,.about-stat,.ba-pair'
    );
    targets.forEach(function (el, i) {
      el.classList.add('reveal');
      el.style.transitionDelay = (i % 4) * 0.07 + 's';
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });

    targets.forEach(function (el) { io.observe(el); });
  }

})();
