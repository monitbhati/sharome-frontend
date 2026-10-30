// All copy for the SHAROME studio site lives here, so text changes never touch layout code.

export const CONTACT_EMAIL = 'contact@sharome.in'
export const LOCATION = 'Jhajjar, Haryana, India'

export const AUDIENCES = [
  { title: 'Market research agencies', body: 'Fieldwork teams juggling vendors, quotas and redirect links across live projects.' },
  { title: 'New and growing businesses', body: 'Founders who want one system for orders, customers and team work before operations get messy.' },
  { title: 'Creators and personal brands', body: 'Influencers who want steady growth and brand deals without running the account alone.' },
  { title: 'Product founders', body: 'People with an app idea who need it designed, built and published on Google Play.' },
]

export const SERVICES = [
  {
    id: 'survey-tools',
    title: 'Survey operations tools',
    short: 'Redirect links, fraud checks, live quotas and vendor reports for market research fieldwork.',
    intro: 'A fieldwork tool that sits between your sample vendors and your survey platform, so your ops team always knows who completed, who was screened out and what each vendor delivered.',
    points: [
      'Complete, terminate and quota-full redirect links per vendor',
      'IP, geolocation and subnet checks to stop duplicate and out-of-country respondents',
      'Automated emails to vendors and a supplier portal',
      'Live counts per project, vendor and quota cell',
      'Reports and ID lists ready for client delivery and vendor reconciliation',
    ],
    fit: 'You run fieldwork for clients and today it lives in spreadsheets, emails or a tool you pay too much for.',
    link: '/survey-tools',
  },
  {
    id: 'business-systems',
    title: 'Business management systems',
    short: 'One place for customers, orders, jobs, invoices and team tasks.',
    intro: 'A web app built around the way your business actually runs, so a new team starts organised instead of patching together WhatsApp groups and spreadsheets.',
    points: [
      'Customer and order records with status tracking',
      'Jobs and tasks assigned to team members',
      'Invoices, payments due and simple accounting exports',
      'Dashboards for the numbers you check every day',
      'Roles and logins for owners, staff and, if you want, customers',
    ],
    fit: 'You are launching or scaling a business and want the operations side sorted from day one.',
  },
  {
    id: 'creator-management',
    title: 'Creator and influencer management',
    short: 'Account growth, content planning and brand collaborations for creators.',
    intro: 'We manage influencer accounts end to end on the business side, so the creator can focus on making content.',
    points: [
      'Growth strategy based on what is working on the account',
      'Content calendar, posting schedule and caption support',
      'Brand collaboration outreach and deal handling',
      'Collab tracking: deliverables, dates and payments',
      'Monthly report on reach, followers and engagement',
    ],
    fit: 'You are a creator who wants more followers and more paid collaborations without managing it all yourself.',
  },
  {
    id: 'android-apps',
    title: 'Android apps',
    short: 'Native Kotlin apps, designed, built and published on Google Play.',
    intro: 'Modern Android apps with Kotlin and Jetpack Compose, from first screen to Play Store listing.',
    points: [
      'App design and build in Kotlin and Jetpack Compose',
      'Offline storage, notifications and in-app purchases',
      'Ads, analytics and Firebase features where needed',
      'Play Store listing, policy declarations and release',
    ],
    fit: 'You have an app idea or an internal process that belongs on your team’s phones.',
  },
  {
    id: 'websites',
    title: 'Websites and web apps',
    short: 'Company sites and full-stack web apps, deployed and kept running.',
    intro: 'Fast company websites and custom web apps with React on the front and Spring Boot, FastAPI or PHP behind it.',
    points: [
      'Company websites with enquiry capture',
      'Member, panel and admin dashboards',
      'Domain, email and hosting setup',
      'Hand-off notes so your team can edit content',
    ],
    fit: 'You need a site or portal that looks credible and works properly, not a template.',
  },
  {
    id: 'care',
    title: 'Hosting and monthly care',
    short: 'Hosting, fixes, backups and small changes on one monthly plan.',
    intro: 'Everything we build can stay with us after launch, so there is always someone responsible for keeping it running.',
    points: [
      'Hosting, SSL and domain management',
      'Bug fixes and small changes each month',
      'Monitoring and backups',
      'One contact who already knows your system',
    ],
    fit: 'You want your software looked after without hiring a developer.',
  },
]

export const WORK = [
  {
    id: 'survey-tool',
    kind: 'Survey operations tool',
    client: 'Two market research agencies, India',
    summary: 'Rebuilt a rented third-party fieldwork tool so each agency now runs its own copy, on its own hosting.',
    problem: 'Both agencies relied on a fieldwork tool from an outside provider that charged a monthly fee, with no control over the code, the hosting or the API accounts behind it.',
    built: 'We replicated the tool on hosting in each agency’s own account, cut it down to the features they use (IP, geolocation and subnet checks, automated vendor emails and a supplier portal) and moved every service account into the agency’s name.',
    outcome: 'Both copies are live on the agencies’ own subdomains, with hosting and maintenance on a monthly plan.',
    tags: ['PHP', 'MySQL', 'cPanel', 'Mailjet'],
    featured: true,
  },
  {
    id: 'mr-websites',
    kind: 'Market research websites and panel portal',
    client: 'Two market research firms, India',
    summary: 'Two distinct corporate sites, one dark and one light, plus a panel sign-up flow with member and admin dashboards.',
    problem: 'Two related research firms needed separate brands that did not look alike, and one needed a way to recruit and manage survey panel members.',
    built: 'Two websites on separate stacks and databases, a video-led homepage, service pages and enquiry forms, and a panel portal with a join form, member dashboard and admin dashboard.',
    outcome: 'Both sites are live, each on its own backend and database.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Vercel'],
    featured: true,
  },
  {
    id: 'sharome-store',
    kind: 'Sharomé',
    client: 'Bespoke ethnic wear platform · our own product',
    summary: 'A full-stack commission platform for made-to-order ethnic wear, running as an invite-only beta.',
    problem: 'Made-to-order clothing runs on long WhatsApp threads: measurements, fabric choices and order status get lost.',
    built: 'A commission request flow, order tracking by phone number, visit analytics and an invite-code gate for a private beta.',
    outcome: 'Running as a private beta at sharome.in/store.',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'Render'],
    link: { to: '/unlock', label: 'Enter with invite code' },
  },
  {
    id: 'reelity-check',
    kind: 'Reelity Check',
    client: 'Android app · our own product · coming soon on Google Play',
    summary: 'Counts the reels and shorts you scroll on Instagram, YouTube and Snapchat, with daily stats, history and share cards.',
    problem: 'People underestimate how many short videos they scroll each day, and screen-time apps only show minutes.',
    built: 'A Kotlin and Jetpack Compose app that detects each new reel, stores counts on the device, and adds daily history, notifications, share cards, an optional friends leaderboard and a Premium upgrade.',
    outcome: 'Being prepared for release on Google Play under the SHAROME developer account.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Firebase'],
    featured: true,
    link: { to: '/privacy-policy', label: 'Privacy policy' },
  },
  {
    id: 'creator-accounts',
    kind: 'Influencer account management',
    client: 'Creators, ongoing',
    summary: 'Managing influencer accounts on the business side: growth, content planning and brand collaborations.',
    problem: 'Creators who are good at making content often lose time and deals on planning, outreach and follow-ups.',
    built: 'Ongoing account management covering growth strategy, posting plans, brand outreach and collaboration handling.',
    outcome: 'Ongoing monthly engagements.',
    tags: ['Growth', 'Content planning', 'Brand collabs'],
  },
]

export const STEPS = [
  { title: 'Workflow call', body: 'A free 20-minute call to understand how your team works today and where time is lost.' },
  { title: 'Fixed scope and quote', body: 'A short written proposal with what gets built, the price and the timeline.' },
  { title: 'Build with weekly demos', body: 'You see working software every week and can steer it as it takes shape.' },
  { title: 'Launch and monthly care', body: 'Hosting, fixes and small changes on a simple monthly plan.' },
]

export const ENGAGEMENTS = [
  { title: 'Fixed-price project', body: 'For a defined build. Scope, price and timeline agreed in writing before work starts, paid in milestones.' },
  { title: 'Setup plus monthly plan', body: 'For tools you use every day. A one-time setup, then a monthly fee covering hosting, fixes and small changes.' },
  { title: 'Monthly retainer', body: 'For creator management and ongoing work. A fixed set of work each month, reviewed together.' },
]

export const STACK = ['Java', 'Spring Boot', 'PHP', 'Python · FastAPI', 'React', 'JavaScript', 'Kotlin', 'Jetpack Compose', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Git']
