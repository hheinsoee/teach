# Programming to Production

## Course Goal
Programming ကို အခြေခံကနေ စပြီး real-world application တစ်ခုကို ကိုယ်တိုင်တည်ဆောက်၊ production တင်၊ external services တွေနဲ့ integrate လုပ်ပြီး၊ application ကြီးလာတဲ့အခါ architecture နဲ့ complexity ကို ကိုင်တွယ်နိုင်တဲ့အထိ လေ့လာရန်။

---

## Level 1 — Programming Fundamentals

### Goal
Programming ဆိုတာဘာလဲ၊ computer ကို ဘယ်လို instructions ပေးရမလဲ၊ code ကို ဘယ်လိုစဉ်းစားပြီးရေးရမလဲ နားလည်ရန်။

### Topics
- What is Programming?
- What is a Program?
- How does a Computer execute code?
- Variables
- Data Types
- Operators
- Conditions
- Loops
- Functions
- Arrays
- Objects
- Basic Data Structures
- Input / Output
- Errors & Debugging
- Problem Solving
- Git Fundamentals

### Project
CLI / Small Utility App

### Student Outcome
Code ကိုဖတ်နိုင်၊ basic problem ကို code နဲ့ဖြေရှင်းနိုင်ပြီး small program တစ်ခုကို ကိုယ်တိုင်ရေးနိုင်ရမည်။

---

## Level 2 — Build Your First App

### Goal
Programming knowledge ကို အသုံးချပြီး user အသုံးပြုနိုင်တဲ့ application တစ်ခု စတင်တည်ဆောက်နိုင်ရန်။

### Topics
- What is an Application?
- User Interface
- Events
- State
- Components
- Forms
- Validation
- Basic App Structure
- Client-side Logic
- Basic Testing
- Debugging an Application

### Project
Todo / Notes / Expense App

### Student Outcome
Idea တစ်ခုကနေ working application တစ်ခုကို ကိုယ်တိုင် build လုပ်နိုင်ရမည်။

---

## Level 3 — Full-Stack Application

### Goal
Frontend တစ်ခုတည်းမဟုတ်ဘဲ Backend + Database ပါဝင်တဲ့ real application တစ်ခုတည်ဆောက်နိုင်ရန်။

### Topics
- Frontend vs Backend
- Client & Server
- HTTP
- Request / Response
- API
- REST API
- Backend
- Database
- SQL Fundamentals
- CRUD
- Data Modeling
- Authentication Basics
- API Validation
- Error Handling

### Project
Full-Stack Application

```
Frontend
    ↓
API
    ↓
Backend
    ↓
Database
```

### Student Outcome
Frontend, Backend, API နဲ့ Database ကို ချိတ်ဆက်ပြီး full-stack application တစ်ခုတည်ဆောက်နိုင်ရမည်။

---

## Level 4 — Production

### Goal
Local machine မှာ run နေတာကနေ real users အသုံးပြုနိုင်တဲ့ production application အဖြစ် ပြောင်းလဲနိုင်ရန်။

### Topics
- What is Production?
- Development vs Production
- What is a Server?
- Linux Basics
- Environment Variables
- Configuration
- Build Process
- Domain & DNS
- HTTP / HTTPS
- Deployment
- Database Migration
- Logging
- Error Handling
- Basic Monitoring
- CI/CD Fundamentals
- Backup Basics
- Basic Production Security

### Project
Deploy the Full-Stack App

```
Local
  ↓
Build
  ↓
Server / Cloud
  ↓
Domain
  ↓
HTTPS
  ↓
Real Users
```

### Student Outcome
ကိုယ်တိုင်တည်ဆောက်ထားတဲ့ application ကို production environment မှာ deploy လုပ်ပြီး real users အသုံးပြုနိုင်အောင်လုပ်နိုင်ရမည်။

---

## Level 5 — Integration

### Goal
ကိုယ့် application ကို external services တွေနဲ့ ချိတ်ဆက်ပြီး real-world product တစ်ခုအဖြစ် တိုးချဲ့နိုင်ရန်။

### Topics
- What is an Integration?
- Third-party APIs
- API Authentication
- API Keys
- OAuth
- Webhooks
- Payment Integration
- Email Services
- File Storage
- Cloud Services
- Maps / Location APIs
- AI APIs
- Background Jobs
- Queues
- Handling External API Failures
- Retry & Timeout
- Idempotency

### Project
Production App + Multiple Integrations

```
                ┌── Payment
                │
App → Backend ──┼── Email
                │
                ├── Storage
                │
                └── AI API
```

### Student Outcome
Third-party services တွေကို documentation ဖတ်ပြီး ကိုယ့် application ထဲမှာ safely integrate လုပ်နိုင်ရမည်။

---

## Level 6 — Architecture

### Goal
Application ကြီးလာတဲ့အခါ code complexity ကို စီမံနိုင်ပြီး maintainable architecture တည်ဆောက်နိုင်ရန်။

### Topics
- Why Architecture?
- Complexity
- Separation of Concerns
- Coupling & Cohesion
- Modules
- Layers
- Boundaries
- Dependencies
- Layered Architecture
- Modular Architecture
- Clean Architecture
- Dependency Inversion
- Repository Pattern
- Service / Use Case
- Domain Concepts
- DDD Fundamentals
- Monolith
- Modular Monolith
- Microservices
- Event-driven Architecture

### Project
Refactor a Growing Application

**Before**
```
App
├── Everything
├── Everything
└── Everything
```

**After**
```
App
├── Domain
├── Application
├── Infrastructure
└── Interface
```

### Student Outcome
Application ကြီးလာတဲ့အခါ feature, domain, infrastructure နဲ့ dependencies တွေကို သင့်တော်တဲ့ boundaries အတွင်း ခွဲခြားတည်ဆောက်နိုင်ရမည်။

---

## Level 7 — Security

### Goal
Production application ကို security threats တွေကနေ ကာကွယ်နိုင်ရန်။

### Topics
- Authentication
- Authorization
- Sessions
- JWT
- Password Security
- Access Control
- Input Validation
- SQL Injection
- XSS
- CSRF
- CORS
- Rate Limiting
- Secrets Management
- Secure API Design
- OWASP Fundamentals
- Security Headers
- Threat Modeling

### Project
Security Audit & Hardening

### Student Outcome
Application ရဲ့ common security vulnerabilities တွေကို သိရှိပြီး basic security controls တွေကို implement လုပ်နိုင်ရမည်။

---

## Level 8 — Scale & Complex Systems

### Goal
Users, data, traffic နဲ့ features တိုးလာတဲ့အခါ system ကို scale လုပ်နိုင်ရန်။

### Topics
- What happens when an app gets big?
- Performance
- Database Indexing
- Query Optimization
- Caching
- Redis
- Load Balancing
- Horizontal Scaling
- Queues
- Workers
- Async Processing
- Distributed Systems Fundamentals
- Observability
- Monitoring
- Metrics
- Tracing
- Reliability
- Availability
- Cost & Infrastructure Decisions

### Project
Scale the Application

```
Small App
    ↓
More Users
    ↓
Performance Problems
    ↓
Caching
    ↓
Queues
    ↓
Multiple Servers
    ↓
Scalable System
```

### Student Outcome
Application ကြီးလာတဲ့အခါ performance, reliability, infrastructure နဲ့ scalability problems တွေကို identify လုပ်ပြီး သင့်တော်တဲ့ solution ကို design လုပ်နိုင်ရမည်။

---

## Final Capstone — Build a Production Product

Level အားလုံးကို project တစ်ခုထဲမှာ ပေါင်းစပ်ပြီး application တစ်ခုကို အစကနေအဆုံး တည်ဆောက်မည်။

### Capstone Flow
```
Idea
 ↓
Programming
 ↓
Application
 ↓
Full-Stack
 ↓
Production
 ↓
Integration
 ↓
Security
 ↓
Architecture
 ↓
Scale
 ↓
Real Users
```

### Final Project Requirements
- Frontend
- Backend
- Database
- Authentication
- API
- External Integration
- Security
- Production Deployment
- Logging
- Monitoring
- Architecture
- Documentation

### Final Outcome
Student သည် “code ရေးတတ်သူ” အဆင့်မှ “real-world software system တစ်ခုကို တည်ဆောက်နိုင်သူ” အဆင့်သို့ ရောက်ရှိရန်။