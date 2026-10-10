import { bi, type Bi } from '@/lib/i18n'

/* ------------------------------------------------------------------ */
/* Hospital directory — descriptive, publicly known capabilities only. */
/* Verify plan participation directly with the hospital and your plan. */
/* ------------------------------------------------------------------ */

export interface HospitalEntry {
  name: string
  town: Bi
  phone?: string
  note: Bi
}

export interface SpecialtyGroup {
  id: string
  label: Bi
  icon: string
  entries: HospitalEntry[]
}

export const specialtyGroups: SpecialtyGroup[] = [
  {
    id: 'cardiac',
    label: bi('Corazón (cardiología)', 'Heart (cardiology)'),
    icon: 'heart',
    entries: [
      {
        name: 'Centro Cardiovascular de Puerto Rico y del Caribe',
        town: bi('Centro Médico, Río Piedras', 'Centro Médico, Río Piedras'),
        phone: '(787) 754-8500',
        note: bi(
          'Hospital dedicado al corazón dentro del Centro Médico. Único programa de trasplante de corazón en el Caribe.',
          'Dedicated heart hospital within the Medical Center. The only heart transplant program in the Caribbean.'
        ),
      },
      {
        name: 'Auxilio Centro Cardiovascular — Hospital Auxilio Mutuo',
        town: bi('San Juan (Hato Rey)', 'San Juan (Hato Rey)'),
        phone: '(787) 758-2000',
        note: bi(
          'Centro cardiovascular dentro del hospital privado más grande de la isla.',
          'Cardiovascular center inside the island’s largest private hospital.'
        ),
      },
      {
        name: 'HIMA San Pablo Caguas',
        town: bi('Caguas', 'Caguas'),
        note: bi(
          'Hospital regional con programa cardiovascular al este del área metro.',
          'Regional hospital with a cardiovascular program east of the metro area.'
        ),
      },
      {
        name: 'Hospital Pavia Santurce',
        town: bi('San Juan (Santurce)', 'San Juan (Santurce)'),
        note: bi(
          'Hospital general con servicios de cardiología e intervencionismo.',
          'General hospital with cardiology and interventional services.'
        ),
      },
    ],
  },
  {
    id: 'cancer',
    label: bi('Cáncer (oncología)', 'Cancer (oncology)'),
    icon: 'ribbon',
    entries: [
      {
        name: 'Hospital Oncológico Dr. Isaac González Martínez',
        town: bi('Centro Médico, San Juan', 'Centro Médico, San Juan'),
        note: bi(
          'Hospital del gobierno dedicado exclusivamente al cáncer; parte del complejo del Centro Médico.',
          'Government hospital dedicated exclusively to cancer; part of the Medical Center complex.'
        ),
      },
      {
        name: 'Auxilio Centro de Cáncer y Centro de Radioterapia',
        town: bi('San Juan (Hato Rey)', 'San Juan (Hato Rey)'),
        phone: '(787) 758-2000',
        note: bi(
          'Centro de cáncer, radioterapia y programa de trasplante de médula ósea en Auxilio Mutuo.',
          'Cancer center, radiotherapy and bone marrow transplant program at Auxilio Mutuo.'
        ),
      },
    ],
  },
  {
    id: 'neuro',
    label: bi('Neurología y derrame cerebral', 'Neurology & stroke'),
    icon: 'brain',
    entries: [
      {
        name: 'Centro Médico de Puerto Rico — Hospital Universitario de Adultos',
        town: bi('Río Piedras', 'Río Piedras'),
        note: bi(
          'Principal centro académico de la isla: neurología, neurocirugía y manejo de derrame cerebral.',
          'The island’s main academic center: neurology, neurosurgery and stroke care.'
        ),
      },
      {
        name: 'Hospital Auxilio Mutuo — Departamento de Neurología',
        town: bi('San Juan (Hato Rey)', 'San Juan (Hato Rey)'),
        phone: '(787) 758-2000',
        note: bi(
          'Departamento de neurología y centro neurodiagnóstico en hospital privado.',
          'Neurology department and neurodiagnostic center in a private hospital.'
        ),
      },
    ],
  },
  {
    id: 'lung',
    label: bi('Pulmón: EPOC, asma, neumonía', 'Lung: COPD, asthma, pneumonia'),
    icon: 'lungs',
    entries: [
      {
        name: 'Hospital Auxilio Mutuo — Neumología y Centro de Desórdenes del Sueño',
        town: bi('San Juan (Hato Rey)', 'San Juan (Hato Rey)'),
        phone: '(787) 758-2000',
        note: bi(
          'Neumólogos, estudios del sueño y cirugía de cáncer de pulmón.',
          'Pulmonologists, sleep studies and lung cancer surgery.'
        ),
      },
      {
        name: 'Centro Médico de Puerto Rico — Hospital Universitario',
        town: bi('Río Piedras', 'Río Piedras'),
        note: bi(
          'Neumología académica y cuidado intensivo para condiciones pulmonares complejas.',
          'Academic pulmonology and intensive care for complex lung conditions.'
        ),
      },
      {
        name: 'Mayagüez Medical Center',
        town: bi('Mayagüez', 'Mayagüez'),
        phone: '(787) 652-9200',
        note: bi(
          'Referencia regional del oeste con neumólogos y evaluación de EPOC.',
          'Western regional referral center with pulmonologists and COPD care.'
        ),
      },
    ],
  },
  {
    id: 'pediatric',
    label: bi('Niños (pediatría)', 'Children (pediatrics)'),
    icon: 'baby',
    entries: [
      {
        name: 'Hospital Pediátrico Universitario Dr. Antonio Ortiz',
        town: bi('Centro Médico, San Juan', 'Centro Médico, San Juan'),
        phone: '(787) 474-0333',
        note: bi(
          'El hospital universitario pediátrico de referencia para toda la isla.',
          'The island’s referral university pediatric hospital.'
        ),
      },
      {
        name: 'Auxilio Pediátrico — Hospital Auxilio Mutuo',
        town: bi('San Juan (Hato Rey)', 'San Juan (Hato Rey)'),
        phone: '(787) 758-2000',
        note: bi(
          'Emergencia pediátrica con pediatras 24/7, NICU y PICU.',
          'Pediatric ER staffed 24/7, plus NICU and PICU.'
        ),
      },
    ],
  },
  {
    id: 'trauma',
    label: bi('Trauma y emergencias graves', 'Trauma & severe emergencies'),
    icon: 'siren',
    entries: [
      {
        name: 'Centro de Trauma — Centro Médico de Puerto Rico',
        town: bi('Río Piedras', 'Río Piedras'),
        note: bi(
          'Centro de trauma de referencia para la isla. En una emergencia que amenaza la vida, llama al 9-1-1.',
          'The island’s referral trauma center. For life-threatening emergencies, call 9-1-1.'
        ),
      },
    ],
  },
  {
    id: 'veterans',
    label: bi('Veteranos', 'Veterans'),
    icon: 'shield',
    entries: [
      {
        name: 'VA Caribbean Healthcare System (Hospital de Veteranos)',
        town: bi('San Juan', 'San Juan'),
        note: bi(
          'Sistema de salud federal para veteranos elegibles, con clínicas en varias regiones.',
          'Federal health system for eligible veterans, with clinics across several regions.'
        ),
      },
    ],
  },
]

/* Regional anchor hospitals — general care by area. */
export interface RegionGroup {
  region: Bi
  hospitals: { name: string; town: string }[]
}

export const regionGroups: RegionGroup[] = [
  {
    region: bi('Área Metro', 'Metro Area'),
    hospitals: [
      { name: 'Hospital Auxilio Mutuo', town: 'San Juan' },
      { name: 'Auxilio Mutuo San Pablo', town: 'Bayamón' },
      { name: 'Ashford Presbyterian Community Hospital', town: 'San Juan (Condado)' },
      { name: 'Hospital del Maestro', town: 'San Juan (Hato Rey)' },
      { name: 'Hospital Pavia', town: 'San Juan (Santurce / Hato Rey)' },
      { name: 'Centro Médico de Puerto Rico', town: 'Río Piedras' },
    ],
  },
  {
    region: bi('Este', 'East'),
    hospitals: [
      { name: 'Hospital UPR Dr. Federico Trilla', town: 'Carolina' },
      { name: 'HIMA San Pablo Cupey', town: 'San Juan (Cupey)' },
      { name: 'HIMA San Pablo Humacao', town: 'Humacao' },
    ],
  },
  {
    region: bi('Sur', 'South'),
    hospitals: [
      { name: 'Hospital Damas', town: 'Ponce' },
      { name: 'Hospital Episcopal San Lucas', town: 'Ponce' },
      { name: 'Hospital San Cristóbal', town: 'Ponce' },
    ],
  },
  {
    region: bi('Oeste', 'West'),
    hospitals: [
      { name: 'Mayagüez Medical Center', town: 'Mayagüez' },
      { name: 'Hospital San Antonio', town: 'Mayagüez' },
      { name: 'Hospital La Concepción', town: 'San Germán' },
    ],
  },
  {
    region: bi('Norte / Centro', 'North / Central'),
    hospitals: [
      { name: 'Doctors’ Center Hospital (Orlando Health)', town: 'Manatí / Bayamón / San Juan' },
      { name: 'Manatí Medical Center Dr. Otero', town: 'Manatí' },
      { name: 'HIMA San Pablo Caguas', town: 'Caguas' },
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Guides                                                              */
/* ------------------------------------------------------------------ */

export interface Guide {
  id: string
  title: Bi
  summary: Bi
  points: Bi[]
  links?: { label: Bi; url: string }[]
}

export const guides: Guide[] = [
  {
    id: 'vital',
    title: bi('Plan Vital (el plan del Gobierno / Medicaid)', 'Plan Vital (the Government plan / Medicaid)'),
    summary: bi(
      'Quién cualifica, qué aseguradoras lo administran y qué hacer si pierdes la cubierta.',
      'Who qualifies, which insurers run it, and what to do if you lose coverage.'
    ),
    points: [
      bi(
        'El Plan Vital es el plan de salud del Gobierno de Puerto Rico, financiado con fondos federales de Medicaid y administrado por la Administración de Seguros de Salud (ASES). Beneficia a personas con escasos recursos económicos o necesidades especiales.',
        'Plan Vital is Puerto Rico’s government health plan, funded by federal Medicaid dollars and administered by the Health Insurance Administration (ASES). It serves people with limited income or special needs.'
      ),
      bi(
        'Las aseguradoras contratadas bajo Vital (según ASES, actualizado feb. 2026) son: First Medical, MMM, Plan de Salud Menonita y Triple-S Salud. Puedes cambiar de aseguradora durante el periodo anual de inscripción.',
        'Insurers contracted under Vital (per ASES, updated Feb. 2026): First Medical, MMM, Plan de Salud Menonita and Triple-S Salud. You can switch insurers during the annual enrollment period.'
      ),
      bi(
        'Teléfonos de orientación (según planvital.org): First Medical 1-844-347-7800 · MMM 1-844-336-3331 · Menonita 1-866-600-4753 · Triple-S 1-800-981-1352.',
        'Orientation phone lines (per planvital.org): First Medical 1-844-347-7800 · MMM 1-844-336-3331 · Menonita 1-866-600-4753 · Triple-S 1-800-981-1352.'
      ),
      bi(
        'Tienes que recertificarte periódicamente. Si no recibes el aviso de renovación, llama al centro de llamadas de Medicaid (787-688-8879) para confirmar que tienen tu información correcta.',
        'You must recertify periodically. If you don’t get the renewal notice, call the Medicaid call center (787-688-8879) to confirm they have your correct contact information.'
      ),
    ],
    links: [
      { label: bi('Plan Vital — orientación oficial', 'Plan Vital — official orientation'), url: 'https://planvital.org/' },
      { label: bi('ASES — Plan Vital', 'ASES — Plan Vital'), url: 'https://www.ases.pr.gov/plan-vital' },
    ],
  },
  {
    id: 'referidos',
    title: bi('Referidos a especialistas: cómo funciona', 'Specialist referrals: how it works'),
    summary: bi(
      'Por qué necesitas un referido, qué llevar a la cita y qué hacer si te lo niegan o se atrasa.',
      'Why you need a referral, what to bring, and what to do if it’s denied or delayed.'
    ),
    points: [
      bi(
        'En casi todos los planes de Puerto Rico, tu médico primario (generalista, médico de familia, internista o pediatra) es la puerta de entrada: evalúa tu condición y emite el referido al especialista que necesitas.',
        'In almost every Puerto Rico health plan, your primary care physician (general practitioner, family doctor, internist or pediatrician) is the gateway: they evaluate you and issue the referral to the specialist you need.'
      ),
      bi(
        'Si ves a un médico fuera de tu grupo de médicos primarios autorizados sin referido, es probable que tengas que pagar más o que el plan no cubra el servicio.',
        'If you see a provider outside your authorized primary medical group without a referral, you’ll likely pay more or the plan may not cover the service.'
      ),
      bi(
        'Lleva siempre a la cita del especialista: el referido (con su número), tu tarjeta del plan, identificación, tu lista de medicamentos y resultados de laboratorios o imágenes previas.',
        'Always bring to the specialist visit: the referral (with its number), your plan card, ID, your medication list, and prior lab or imaging results.'
      ),
      bi(
        'Si el servicio te es negado, puedes pedir una vista ante un Oficial Examinador. ASES indica que el caso se decide dentro de 90 días — o dentro de 72 horas si es urgente.',
        'If a service is denied, you can request a hearing before an Examining Officer. Per ASES, the case is decided within 90 days — or within 72 hours if urgent.'
      ),
      bi(
        'Si el copago que te exigen no te parece correcto, puedes pedir una revaluación (ayudalegalpr.org publica la línea 787-641-4224 como referencia — verifica que siga vigente).',
        'If the copay you’re charged seems wrong, you can request a re-evaluation (ayudalegalpr.org lists 787-641-4224 as a reference line — verify it’s still active).'
      ),
    ],
    links: [
      { label: bi('Ayuda Legal PR — plan médico del Gobierno', 'Ayuda Legal PR — government health plan'), url: 'https://ayudalegalpr.org/resource/solicitud-del-plan-mdico-del-gobierno' },
    ],
  },
  {
    id: 'urgencia',
    title: bi('¿Emergencia, urgencia o cita?', 'Emergency room, urgent care, or appointment?'),
    summary: bi(
      'Ahorra tiempo y dinero escogiendo el nivel de cuidado correcto.',
      'Save time and money by choosing the right level of care.'
    ),
    points: [
      bi(
        'Sala de emergencias (9-1-1): dolor de pecho, dificultad para respirar severa, señales de derrame (cara caída, brazo débil, habla rara), pérdida de conciencia, sangrado que no para, trauma serio.',
        'Emergency room (call 9-1-1): chest pain, severe trouble breathing, stroke signs (drooping face, weak arm, slurred speech), loss of consciousness, uncontrolled bleeding, serious trauma.'
      ),
      bi(
        'Sala de urgencias: condiciones que necesitan atención rápida pero no amenazan tu vida — fiebre moderada, infecciones, cortadas pequeñas, esguinces, crisis leve de asma controlable.',
        'Urgent care: conditions needing prompt attention that aren’t life-threatening — moderate fever, infections, small cuts, sprains, mild controllable asthma flare.'
      ),
      bi(
        'Cita con tu médico primario: seguimiento de condiciones crónicas, recetas, chequeos, referidos. Es la opción más económica y la que mantiene tu historial completo.',
        'Primary care appointment: chronic condition follow-ups, prescriptions, checkups, referrals. The most affordable option and the one that keeps your history complete.'
      ),
      bi(
        'Ir a la emergencia por algo no urgente casi siempre significa más horas de espera y un copago mayor.',
        'Going to the ER for a non-urgent issue almost always means longer waits and a higher copay.'
      ),
    ],
  },
  {
    id: 'medicare',
    title: bi('Medicare y planes Advantage en Puerto Rico', 'Medicare and Advantage plans in Puerto Rico'),
    summary: bi(
      'Lo básico si tienes 65+ años o ciertas incapacidades.',
      'The basics if you’re 65+ or have certain disabilities.'
    ),
    points: [
      bi(
        'Si tienes 65 años o más, o ciertas incapacidades, puedes cualificar para Medicare. En Puerto Rico la mayoría de los beneficiarios se inscribe en planes Medicare Advantage (como MMM Healthcare, Triple-S Advantage o MCS Advantage).',
        'If you’re 65 or older, or have certain disabilities, you may qualify for Medicare. In Puerto Rico most beneficiaries enroll in Medicare Advantage plans (such as MMM Healthcare, Triple-S Advantage or MCS Advantage).'
      ),
      bi(
        'Medicare Advantage combina hospital, médicos y usualmente farmacia en un solo plan, con su propia red de proveedores — verifica que tus médicos estén en la red antes de cambiar.',
        'Medicare Advantage bundles hospital, medical and usually pharmacy coverage in one plan with its own provider network — verify your doctors are in-network before switching.'
      ),
      bi(
        'Puedes cualificar para Vital y Medicare a la vez (“dual elegible”), lo que puede reducir tus costos significativamente.',
        'You can qualify for Vital and Medicare at the same time (“dual eligible”), which can significantly reduce your costs.'
      ),
    ],
    links: [
      { label: bi('Medicare.gov', 'Medicare.gov'), url: 'https://www.medicare.gov/' },
    ],
  },
  {
    id: 'records',
    title: bi('Tus expedientes y una segunda opinión', 'Your records and second opinions'),
    summary: bi(
      'Cómo pedir copia de tu expediente médico y por qué te conviene tenerla.',
      'How to request your medical records and why it pays to have them.'
    ),
    points: [
      bi(
        'Tienes derecho a una copia de tu expediente médico. Pídela por escrito en el departamento de récords médicos del hospital u oficina; pueden cobrar un costo razonable por copia.',
        'You have a right to a copy of your medical record. Request it in writing from the hospital’s or office’s medical records department; they may charge a reasonable copy fee.'
      ),
      bi(
        'Llevar tus resultados (laboratorios, imágenes en disco, informes) a cada especialista evita repetir pruebas y ahorra dinero.',
        'Bringing your results (labs, imaging on disc, reports) to each specialist avoids repeated tests and saves money.'
      ),
      bi(
        'Ante un diagnóstico serio o una cirugía recomendada, buscar una segunda opinión es normal y aceptado — los buenos médicos lo esperan.',
        'For a serious diagnosis or a recommended surgery, seeking a second opinion is normal and accepted — good doctors expect it.'
      ),
    ],
  },
]

/* ------------------------------------------------------------------ */
/* Costs                                                               */
/* ------------------------------------------------------------------ */

export interface CostRow {
  service: Bi
  range: string | Bi
  note: Bi
}

export const costRows: CostRow[] = [
  {
    service: bi('Cita con médico primario (sin seguro)', 'Primary care visit (uninsured)'),
    range: '$60 – $120',
    note: bi('Consultas de seguimiento suelen costar menos.', 'Follow-up visits often cost less.'),
  },
  {
    service: bi('Cita con especialista (sin seguro)', 'Specialist visit (uninsured)'),
    range: '$100 – $250+',
    note: bi('No incluye pruebas ni procedimientos.', 'Does not include tests or procedures.'),
  },
  {
    service: bi('Sala de urgencias', 'Urgent care'),
    range: '$75 – $150',
    note: bi('Con plan, usualmente solo el copago.', 'With insurance, usually just the copay.'),
  },
  {
    service: bi('Sala de emergencias', 'Emergency room'),
    range: '$500+',
    note: bi('El costo total varía enormemente según pruebas y tratamiento.', 'Total cost varies enormously with tests and treatment.'),
  },
  {
    service: bi('Hospitalización (por día, sin seguro)', 'Hospitalization (per day, uninsured)'),
    range: '$1,500 – $3,500+',
    note: bi('Cuidado intensivo cuesta significativamente más.', 'Intensive care costs significantly more.'),
  },
  {
    service: bi('Copagos con Plan Vital', 'Copays with Plan Vital'),
    range: bi('Bajos o $0 en muchos servicios', 'Low or $0 for many services'),
    note: bi('Depende de tu nivel de ingreso; puedes pedir revaluación del copago.', 'Depends on income level; you can request a copay re-evaluation.'),
  },
]

export const costLinks = [
  {
    label: bi('GoodRx — precios de medicamentos', 'GoodRx — drug prices'),
    url: 'https://www.goodrx.com/',
    note: bi('Compara precios y descarga cupones de descuento para medicamentos.', 'Compare prices and get discount coupons for medications.'),
  },
  {
    label: bi('Estimador de precios del hospital', 'Hospital price estimator'),
    url: 'https://www.cms.gov/medical-bill-rights',
    note: bi(
      'Por ley federal, cada hospital debe publicar sus precios y ofrecer estimados. Busca “price estimator” + el nombre del hospital.',
      'Federal law requires every hospital to publish prices and offer estimates. Search “price estimator” + the hospital’s name.'
    ),
  },
  {
    label: bi('Medicare.gov — comparar planes', 'Medicare.gov — compare plans'),
    url: 'https://www.medicare.gov/plan-compare/',
    note: bi('Compara planes Medicare Advantage y de farmacia disponibles en Puerto Rico.', 'Compare Medicare Advantage and drug plans available in Puerto Rico.'),
  },
  {
    label: bi('PlanVital.org', 'PlanVital.org'),
    url: 'https://planvital.org/',
    note: bi('Orientación oficial sobre el Plan Vital y sus aseguradoras.', 'Official orientation on Plan Vital and its insurers.'),
  },
]

/* ------------------------------------------------------------------ */
/* Checklists                                                          */
/* ------------------------------------------------------------------ */

export interface ChecklistTemplate {
  id: string
  label: Bi
  items: Bi[]
}

export const checklistTemplates: ChecklistTemplate[] = [
  {
    id: 'first',
    label: bi('Primera cita / paciente nuevo', 'First visit / new patient'),
    items: [
      bi('Identificación con foto', 'Photo ID'),
      bi('Tarjeta del plan médico', 'Health plan card'),
      bi('Referido (si aplica) con su número', 'Referral (if applicable) with its number'),
      bi('Lista de medicamentos actualizada', 'Updated medication list'),
      bi('Lista de alergias', 'Allergy list'),
      bi('Resultados de laboratorios e imágenes previas', 'Prior lab and imaging results'),
      bi('Historial de condiciones y cirugías', 'History of conditions and surgeries'),
      bi('Nombre y teléfono de tu médico primario', 'Your primary doctor’s name and phone'),
      bi('Tus preguntas escritas por adelantado', 'Your questions written down in advance'),
      bi('Forma de pago para el copago', 'Payment method for the copay'),
    ],
  },
  {
    id: 'specialist',
    label: bi('Cita con especialista', 'Specialist visit'),
    items: [
      bi('Referido vigente con número de autorización', 'Current referral with authorization number'),
      bi('Tarjeta del plan e identificación', 'Plan card and ID'),
      bi('Lista de medicamentos y alergias', 'Medication and allergy lists'),
      bi('Estudios relacionados a la condición (imágenes en disco, informes)', 'Studies related to the condition (imaging on disc, reports)'),
      bi('Registro de síntomas: cuándo empezaron, qué los mejora o empeora', 'Symptom log: when they started, what helps or worsens them'),
      bi('Preguntas sobre opciones de tratamiento y costos', 'Questions about treatment options and costs'),
    ],
  },
  {
    id: 'procedure',
    label: bi('Procedimiento u hospitalización', 'Procedure or hospitalization'),
    items: [
      bi('Confirmar autorización del plan (pre-autorización)', 'Confirm plan authorization (pre-authorization)'),
      bi('Confirmar ayuno: no comer ni beber según instrucciones', 'Confirm fasting: no food or drink per instructions'),
      bi('Preguntar qué medicamentos suspender y cuáles tomar', 'Ask which medications to stop and which to take'),
      bi('Acompañante y transporte para el regreso', 'Companion and transportation for the trip home'),
      bi('Identificación, tarjeta del plan y documentos firmados', 'ID, plan card and signed documents'),
      bi('Ropa cómoda y artículos personales mínimos', 'Comfortable clothing and minimal personal items'),
      bi('Preguntar el costo estimado y tu porción por adelantado', 'Ask for the estimated cost and your portion in advance'),
    ],
  },
]
