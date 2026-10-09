/* Teclavya — independent, dependency-free interactive design concept.
   All scores, projects and career paths on this page are explicitly illustrative. */
'use strict';

const CAREERS = {
  'java-backend': {
    name: 'Java Backend Engineer', short: 'Java backend', code: 'JAVA', glyph: '</>',
    skills: ['Java', 'Spring Boot', 'Databases', 'Testing', 'Architecture'],
    skillFocus: ['Java foundations', 'Spring-based APIs', 'Relational data models', 'Reliable testing', 'System architecture'],
    foundation: 'Java · Databases · API design', practice: 'Build and test a resilient REST API', project: 'resilient-api',
    heroPracticeBrief: 'Resilient REST API', heroEvidenceBrief: 'Reviewed PR + API tests',
    heroPractice: 'Build and test a resilient REST API', heroEvidence: 'Reviewed PR and automated API tests',
    skillUse: ['Design typed endpoints', 'Expose reliable REST handlers', 'Model persistent API data', 'Prove endpoints through tests', 'Review service boundaries'],
    questions: [
      { category: 'JAVA FUNDAMENTALS', text: 'What does the Java Virtual Machine execute?', options: ['TypeScript source', 'Java bytecode', 'SQL queries', 'HTML templates'], correct: 1, why: 'The JVM executes compiled Java bytecode.' },
      { category: 'SPRING BOOT', text: 'Which Spring annotation typically exposes a REST controller?', options: ['@RestController', '@Entity', '@Transactional', '@Repository'], correct: 0, why: '@RestController combines controller handling with response-body serialization.' },
      { category: 'API DESIGN', text: 'Which HTTP method is typically used to replace a resource idempotently?', options: ['POST', 'PATCH', 'PUT', 'CONNECT'], correct: 2, why: 'PUT is defined as idempotent for replacing the target resource state.' },
    ],
  },
  'cloud-architect': {
    name: 'Cloud & DevOps Engineer', short: 'Cloud & DevOps', code: 'CLOUD', glyph: '☁',
    skills: ['Linux', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    skillFocus: ['Linux operations', 'Container foundations', 'Cluster orchestration', 'Infrastructure as code', 'Delivery pipelines'],
    foundation: 'Linux · Cloud · Containers', practice: 'Deploy a resilient service with Kubernetes', project: 'cloud-service',
    heroPracticeBrief: 'Kubernetes rollout', heroEvidenceBrief: 'CI + deploy checks',
    heroPractice: 'Deploy a service on Kubernetes', heroEvidence: 'Passing CI and deployment checks',
    skillUse: ['Operate Linux services', 'Package reproducible containers', 'Manage a resilient rollout', 'Version cloud infrastructure', 'Verify builds and deployment'],
    questions: [
      { category: 'CONTAINERS', text: 'What distinguishes a container from a traditional virtual machine?', options: ['It needs no network', 'It shares the host OS kernel', 'It always runs on Windows', 'It must contain a full guest OS'], correct: 1, why: 'Containers share the host operating-system kernel rather than booting a full guest OS.' },
      { category: 'KUBERNETES', text: 'What maintains the desired number of application pod replicas?', options: ['ConfigMap', 'Ingress', 'Deployment', 'Secret'], correct: 2, why: 'A Deployment manages replica sets to reach and maintain the desired pod count.' },
      { category: 'INFRASTRUCTURE', text: 'Which tool describes infrastructure declaratively across cloud providers?', options: ['Terraform', 'Postman', 'Jest', 'Vite'], correct: 0, why: 'Terraform defines infrastructure through a declarative configuration model.' },
    ],
  },
  'ai-ml': {
    name: 'AI / ML Engineer', short: 'AI / ML', code: 'AI/ML', glyph: '✳',
    skills: ['Python', 'Data', 'Models', 'Evaluation', 'Deployment'],
    skillFocus: ['Python workflows', 'Data preparation', 'Model development', 'Quality evaluation', 'Production inference'],
    foundation: 'Python · Data · Statistics', practice: 'Build and evaluate an inference pipeline', project: 'inference-service',
    heroPracticeBrief: 'Evaluation pipeline', heroEvidenceBrief: 'Experiment report',
    heroPractice: 'Build an evaluation pipeline', heroEvidence: 'Reproducible experiment report',
    skillUse: ['Write reliable data workflows', 'Prepare representative datasets', 'Train and compare models', 'Measure quality on held-out data', 'Version an inference release'],
    questions: [
      { category: 'MODEL BEHAVIOR', text: 'A model performs well on training data but poorly on new data. What is this?', options: ['Overfitting', 'Normalization', 'Quantization', 'Embedding'], correct: 0, why: 'Overfitting occurs when a model learns training specifics instead of patterns that generalize.' },
      { category: 'DATA PIPELINE', text: 'Why separate training data from evaluation data?', options: ['To avoid writing tests', 'To assess generalization', 'To make labels invisible', 'To reduce CPU usage'], correct: 1, why: 'Held-out data provides a more honest estimate of performance on unseen examples.' },
      { category: 'PRODUCTION AI', text: 'What does model inference mean?', options: ['Collecting raw logs', 'Changing hyperparameters', 'Producing predictions from inputs', 'Training from scratch'], correct: 2, why: 'Inference uses a trained model to make predictions or generate outputs.' },
    ],
  },
  'software-engineer': {
    name: 'Software Engineer', short: 'Software engineering', code: 'SWE', glyph: '{ }',
    skills: ['TypeScript', 'APIs', 'Databases', 'Testing', 'Systems'],
    skillFocus: ['Typed programming', 'Service integration', 'Data modeling', 'Quality engineering', 'System thinking'],
    foundation: 'Programming · APIs · Data', practice: 'Ship and test a full-stack feature', project: 'fullstack-app',
    heroPracticeBrief: 'Full-stack feature', heroEvidenceBrief: 'Reviewed PR + tests',
    heroPractice: 'Ship an end-to-end feature', heroEvidence: 'Reviewed feature PR and test suite',
    skillUse: ['Write type-safe feature logic', 'Connect service endpoints', 'Persist application state', 'Catch regressions early', 'Document system trade-offs'],
    questions: [
      { category: 'DATA STRUCTURES', text: 'Which structure offers average O(1) key lookup?', options: ['Linked list', 'Hash table', 'Binary search tree', 'Queue'], correct: 1, why: 'A hash table provides average constant-time key lookup.' },
      { category: 'HTTP', text: 'What does a successful HTTP 201 response generally mean?', options: ['A resource was created', 'The user is forbidden', 'The server crashed', 'The response is cached forever'], correct: 0, why: '201 Created indicates that the request resulted in creating a resource.' },
      { category: 'QUALITY', text: 'What is a primary purpose of an automated regression test?', options: ['Make code unreadable', 'Replace code review', 'Detect broken existing behavior', 'Eliminate deployment'], correct: 2, why: 'Regression tests detect unintended changes to existing functionality.' },
    ],
  },
  'cybersecurity': {
    name: 'Cybersecurity Engineer', short: 'Cybersecurity', code: 'SEC', glyph: '◇',
    skills: ['Networks', 'OWASP', 'Identity', 'Detection', 'Response'],
    skillFocus: ['Network fundamentals', 'Application security', 'Access controls', 'Threat detection', 'Incident response'],
    foundation: 'Networks · Security · Identity', practice: 'Review and harden a vulnerable service', project: 'secure-service',
    heroPracticeBrief: 'Harden auth route', heroEvidenceBrief: 'Security review + tests',
    heroPractice: 'Harden a vulnerable auth route', heroEvidence: 'Security review and regression tests',
    skillUse: ['Map the attack surface', 'Identify common web risks', 'Constrain access privileges', 'Inspect suspicious activity', 'Document incident actions'],
    questions: [
      { category: 'WEB SECURITY', text: 'What helps prevent SQL injection in a web application?', options: ['Prepared statements', 'More CSS', 'Longer URLs', 'Disabling HTTPS'], correct: 0, why: 'Parameterized queries keep untrusted input separate from SQL instructions.' },
      { category: 'IDENTITY', text: 'What does the principle of least privilege require?', options: ['Give everyone admin access', 'Grant only required permissions', 'Disable authentication', 'Reuse shared passwords'], correct: 1, why: 'Least privilege limits access to the minimum permissions necessary.' },
      { category: 'NETWORKS', text: 'Which protocol protects HTTP traffic with TLS?', options: ['FTP', 'SMTP', 'HTTPS', 'DNS'], correct: 2, why: 'HTTPS uses TLS to protect HTTP data in transit.' },
    ],
  },
  'mobile-dev': {
    name: 'Mobile Engineer', short: 'Mobile engineering', code: 'MOB', glyph: '▣',
    skills: ['UI', 'State', 'Offline', 'Testing', 'Release'],
    skillFocus: ['Touch-first interfaces', 'App state management', 'Offline-first data', 'Device testing', 'Release readiness'],
    foundation: 'Mobile UI · State · Navigation', practice: 'Build an offline-capable app feature', project: 'offline-mobile-app',
    heroPracticeBrief: 'Offline app feature', heroEvidenceBrief: 'Device tests + review',
    heroPractice: 'Build an offline-ready app feature', heroEvidence: 'Device-test report and code review',
    skillUse: ['Implement accessible mobile UI', 'Keep screens in sync', 'Handle sync and network loss', 'Check behavior on devices', 'Verify release readiness'],
    questions: [
      { category: 'MOBILE EXPERIENCE', text: 'Which design approach allows an app to remain useful without connectivity?', options: ['Server-only rendering', 'Offline-first data design', 'More animations', 'Unbounded polling'], correct: 1, why: 'Offline-first architecture preserves useful state and synchronizes when connectivity returns.' },
      { category: 'STATE', text: 'What does application state represent?', options: ['Only the app icon', 'Device brightness', 'Data that affects current UI behavior', 'Only build output'], correct: 2, why: 'Application state holds the information that determines what the UI displays and how it behaves.' },
      { category: 'QUALITY', text: 'Why test on real mobile devices?', options: ['To catch device-specific behavior', 'To skip accessibility', 'To avoid releases', 'To remove all automation'], correct: 0, why: 'Actual devices expose touch, performance, sensor and platform differences that emulators may miss.' },
    ],
  },
};

const journeyDetails = [
  'Choose your target role. The path takes its shape.',
  'Answer three questions. Find a sensible starting point.',
  'See how capabilities connect to a learning sequence.',
  'Practice real workflows with feedback, tests and review.',
  'Turn completed work into evidence you can share.',
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
let currentRole = 'java-backend';
let currentSkill = 0;
let currentQuestion = 0;
let answers = [null, null, null];
let currentChoice = null;
let quizComplete = false;

function safeText(selector, value) { const element = $(selector); if (element) element.textContent = value; }

function selectRole(roleId, { resetQuiz = true } = {}) {
  if (!Object.prototype.hasOwnProperty.call(CAREERS, roleId)) return;
  currentRole = roleId;
  currentSkill = 0;
  const data = CAREERS[roleId];
  $$('.role-chip[data-role]').forEach(button => {
    const selected = button.dataset.role === roleId;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  $$('.skill-node').forEach((button, index) => {
    const name = data.skills[index];
    safeTextIn(button, '.node-label', name);
    button.setAttribute('aria-label', `Explore ${name}`);
    button.classList.toggle('is-active', index === 0);
    button.setAttribute('aria-pressed', String(index === 0));
  });
  safeText('#scene-role-title', data.name);
  safeText('#scene-skill-focus', data.skillFocus[0]);
  safeText('#scene-skill-use', data.skillUse[0]);
  safeText('#scene-practice-task', data.heroPractice);
  safeText('#scene-evidence-artifact', data.heroEvidence);
  safeText('#scene-practice-brief', data.heroPracticeBrief);
  safeText('#scene-evidence-brief', data.heroEvidenceBrief);
  safeText('#core-abbrev', data.code);
  safeText('#core-glyph', data.glyph);
  safeText('#roadmap-role-name', data.name);
  safeText('#roadmap-code', data.code);
  safeText('#lane-foundation', data.foundation);
  safeText('#lane-practice', data.practice);
  safeText('#work-project-name', data.project);
  safeText('#quiz-track-title', data.name);
  const select = $('#quiz-track-select');
  if (select) select.value = roleId;
  const more = $('#role-more');
  if (more) more.classList.toggle('is-selected', !$$('.role-chip[data-role]').some(b => b.dataset.role === roleId));
  closeMoreMenu();
  if (resetQuiz) resetQuizState();
  try { sessionStorage.setItem('teclavya-preview-role', roleId); } catch { /* Storage is optional. */ }
}
function safeTextIn(root, selector, value) { const element = $(selector, root); if (element) element.textContent = value; }
function closeMoreMenu() { $('#role-more-menu').hidden = true; $('#role-more').setAttribute('aria-expanded', 'false'); }

function setActiveJourneyStep(index) {
  if (!Number.isInteger(index) || index < 0 || index >= journeyDetails.length) return;
  $$('.journey-step').forEach((button, i) => {
    button.classList.toggle('active', i === index);
    button.setAttribute('aria-pressed', String(i === index));
  });
  safeText('#step-caption', journeyDetails[index]);
  safeText('#step-caption-count', `${String(index + 1).padStart(2, '0')} / 05`);
}

function resetQuizState() {
  currentQuestion = 0;
  currentChoice = null;
  answers = [null, null, null];
  quizComplete = false;
  $('#quiz-question-view').hidden = false;
  $('#quiz-result-view').hidden = true;
  renderQuestion();
}

function renderQuestion() {
  const data = CAREERS[currentRole];
  const question = data.questions[currentQuestion];
  currentChoice = answers[currentQuestion];
  safeText('#quiz-step-label', `QUESTION ${String(currentQuestion + 1).padStart(2, '0')} OF 03`);
  safeText('#quiz-q-number', String(currentQuestion + 1).padStart(2, '0'));
  safeText('#quiz-question-category', question.category);
  safeText('#quiz-question-text', question.text);
  safeText('#quiz-selection-helper', currentChoice === null ? 'Select an answer to continue' : 'Answer recorded for this preview');
  const next = $('#quiz-next');
  next.disabled = currentChoice === null;
  next.innerHTML = currentQuestion === 2 ? 'View my starting point <span aria-hidden="true">→</span>' : 'Next question <span aria-hidden="true">→</span>';
  const feedback = $('#quiz-feedback');
  feedback.textContent = '';
  feedback.classList.remove('is-wrong');
  const options = $('#quiz-options');
  options.replaceChildren();
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.setAttribute('aria-pressed', String(currentChoice === index));
    const letter = document.createElement('span');
    letter.className = 'choice-letter';
    letter.textContent = String.fromCharCode(65 + index);
    const label = document.createElement('span');
    label.textContent = option;
    button.append(letter, label);
    button.addEventListener('click', () => chooseAnswer(index));
    options.append(button);
  });
  if (currentChoice !== null) showAnswerState();
  $('#quiz-progress').setAttribute('aria-valuenow', String(currentQuestion + 1));
  $('#quiz-progress-fill').style.width = `${((currentQuestion + 1) / 3) * 100}%`;
}

function chooseAnswer(choiceIndex) {
  if (quizComplete) return;
  currentChoice = choiceIndex;
  answers[currentQuestion] = choiceIndex;
  showAnswerState();
  $('#quiz-next').disabled = false;
  safeText('#quiz-selection-helper', 'Answer recorded for this preview');
}

function showAnswerState() {
  const question = CAREERS[currentRole].questions[currentQuestion];
  $$('.quiz-option').forEach((button, index) => {
    const active = index === currentChoice;
    button.classList.toggle('is-selected', active);
    button.classList.toggle('is-incorrect', active && currentChoice !== question.correct);
    button.setAttribute('aria-pressed', String(active));
  });
  const feedback = $('#quiz-feedback');
  feedback.classList.toggle('is-wrong', currentChoice !== question.correct);
  feedback.textContent = currentChoice === question.correct ? `✓ Correct. ${question.why}` : `↳ ${question.why}`;
}

function nextQuestion() {
  if (currentChoice === null) return;
  if (currentQuestion < 2) { currentQuestion += 1; renderQuestion(); return; }
  showResult();
}

function showResult() {
  quizComplete = true;
  const correct = CAREERS[currentRole].questions.reduce((count, item, index) => count + Number(answers[index] === item.correct), 0);
  safeText('#result-fraction', `${correct}/3`);
  let message;
  if (correct === 3) message = `You recognized all three fundamentals in this ${CAREERS[currentRole].short} preview. Explore the skill path next.`;
  else if (correct >= 1) message = `You have a starting signal. Explore the ${CAREERS[currentRole].short} foundation and build your next skills.`;
  else message = `Everyone starts somewhere. Explore the ${CAREERS[currentRole].short} foundations and take your first step.`;
  safeText('#quiz-result-copy', message);
  $('#quiz-question-view').hidden = true;
  $('#quiz-result-view').hidden = false;
  $('#quiz-track-picker').hidden = true;
  $('#quiz-change-track').setAttribute('aria-expanded', 'false');
  $('#quiz-step-label').textContent = 'CHECK COMPLETE';
  $('#quiz-progress-fill').style.width = '100%';
  $('#quiz-progress').setAttribute('aria-valuenow', '3');
  const cta = $('#see-path-cta');
  cta.setAttribute('aria-label', `See the illustrative ${CAREERS[currentRole].name} learning path`);
}

function wireInteractions() {
  $$('[data-role]').forEach(button => button.addEventListener('click', () => selectRole(button.dataset.role)));
  $('#role-more').addEventListener('click', event => {
    event.stopPropagation();
    const menu = $('#role-more-menu');
    menu.hidden = !menu.hidden;
    $('#role-more').setAttribute('aria-expanded', String(!menu.hidden));
  });
  document.addEventListener('click', e => { if (!e.target.closest('.role-more-wrap')) closeMoreMenu(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeMoreMenu(); $('#role-more').focus({ preventScroll: true }); } });
  $$('.skill-node').forEach(button => button.addEventListener('click', () => {
    currentSkill = Number(button.dataset.skillIndex);
    $$('.skill-node').forEach((node, i) => {
      node.classList.toggle('is-active', i === currentSkill);
      node.setAttribute('aria-pressed', String(i === currentSkill));
    });
    safeText('#scene-skill-focus', CAREERS[currentRole].skillFocus[currentSkill]);
    safeText('#scene-skill-use', CAREERS[currentRole].skillUse[currentSkill]);
  }));
  $$('.journey-step').forEach(button => button.addEventListener('click', () => setActiveJourneyStep(Number(button.dataset.step))));
  $('#quiz-next').addEventListener('click', nextQuestion);
  $('#quiz-retry').addEventListener('click', resetQuizState);
  $('#quiz-change-track').addEventListener('click', () => {
    const picker = $('#quiz-track-picker');
    picker.hidden = !picker.hidden;
    $('#quiz-change-track').setAttribute('aria-expanded', String(!picker.hidden));
    if (!picker.hidden) $('#quiz-track-select').focus();
  });
  $('#quiz-track-select').addEventListener('change', e => {
    selectRole(e.target.value);
    $('#quiz-track-picker').hidden = true;
    $('#quiz-change-track').setAttribute('aria-expanded', 'false');
  });
  // Preserve the standard #diagnostic URL, but land on the first usable question.
  // The section header appears above the quiz on phones; the default hash target
  // left the question and its answers below the fold at 320px.
  $$('a[href="#diagnostic"]').forEach(link => link.addEventListener('click', event => {
    const question = $('#quiz-question-text');
    if (!question) return;
    event.preventDefault();
    if (location.hash !== '#diagnostic') location.hash = 'diagnostic';
    const header = $('.topbar');
    const headerOffset = (header ? header.getBoundingClientRect().height : 0) + 24;
    // Scroll after the hash jump settles; do not autofocus or answer for the visitor.
    requestAnimationFrame(() => {
      const top = question.getBoundingClientRect().top + scrollY - headerOffset;
      window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
    });
  }));
  const hamburger = $('#mobile-menu-toggle');
  hamburger.addEventListener('click', () => {
    const nav = $('#mobile-nav');
    nav.hidden = !nav.hidden;
    hamburger.setAttribute('aria-expanded', String(!nav.hidden));
    hamburger.setAttribute('aria-label', nav.hidden ? 'Open navigation' : 'Close navigation');
  });
  $$('.mobile-nav a').forEach(link => link.addEventListener('click', () => { $('#mobile-nav').hidden = true; hamburger.setAttribute('aria-expanded', 'false'); }));
}

function initMotion() {
  const items = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    items.forEach(item => observer.observe(item));
  } else items.forEach(item => item.classList.add('in-view'));

  const scene = $('#blueprint-scene');
  const visual = $('.hero-visual');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  let raf = null;
  if (scene && visual) {
    visual.addEventListener('pointermove', event => {
      if (reduce.matches || event.pointerType !== 'mouse' || window.innerWidth < 901) return;
      const bounds = visual.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { scene.style.transform = `translate3d(${x * 6}px,${y * 5}px,0) rotateY(${x * 1.5}deg) rotateX(${-y * 1.5}deg)`; });
    });
    visual.addEventListener('pointerleave', () => { if (raf) cancelAnimationFrame(raf); scene.style.transform = ''; });
  }
}

function init() {
  wireInteractions();
  initMotion();
  const roleFromUrl = new URLSearchParams(location.search).get('role');
  let saved = null;
  try { saved = sessionStorage.getItem('teclavya-preview-role'); } catch { /* Optional storage. */ }
  selectRole(Object.prototype.hasOwnProperty.call(CAREERS, roleFromUrl) ? roleFromUrl : Object.prototype.hasOwnProperty.call(CAREERS, saved) ? saved : 'java-backend');
  setActiveJourneyStep(0);
}

document.addEventListener('DOMContentLoaded', init);