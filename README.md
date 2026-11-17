# Estrutura do Projeto

```text
preventive-maintenance-system/
│
├── backend/                          # API REST (Node.js + TypeScript + Express + Prisma/TypeORM)
│   ├── prisma/                       # Schema, migrations e seed.ts
│   │
│   ├── src/
│   │   ├── config/                   # Variáveis de ambiente, Redis, BullMQ, Swagger
│   │   ├── controllers/              # Entrada HTTP (Request/Response)
│   │   ├── database/                 # Conexão PostgreSQL e scripts de seed
│   │   ├── dtos/                     # DTOs e validações (Zod)
│   │   ├── entities/                 # Entidades do domínio
│   │   ├── errors/                   # Tratamento de erros customizados
│   │   ├── jobs/                     # Filas e workers (BullMQ)
│   │   ├── middlewares/              # JWT, RBAC, Rate Limit, Logger
│   │   ├── repositories/             # Acesso ao banco de dados
│   │   ├── routes/                   # Rotas da API
│   │   ├── services/                 # Regras de negócio
│   │   ├── types/                    # Tipagens globais
│   │   ├── utils/                    # Funções auxiliares
│   │   ├── app.ts                    # Configuração do Express
│   │   └── server.ts                 # Inicialização da aplicação
│   │
│   ├── tests/                        # Testes unitários e integração
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                         # Aplicação Web (Angular, React ou Next.js)
│   ├── src/
│   │   ├── assets/                   # Imagens, ícones e estilos globais
│   │   ├── components/               # Componentes reutilizáveis
│   │   ├── layouts/                  # Layouts da aplicação
│   │   ├── pages/                    # Telas e páginas
│   │   ├── services/                 # Consumo da API
│   │   ├── contexts/                 # Estado global e autenticação
│   │   ├── types/                    # Interfaces TypeScript
│   │   └── utils/                    # Helpers e validações
│   │
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
│
├── shared/                           # Recursos compartilhados (opcional)
│   └── types/                        # Tipos e validações comuns
│
├── docker-compose.yml                # PostgreSQL + Redis + Backend + Frontend
├── .env.example                      # Modelo de variáveis de ambiente
├── .gitignore                        # Arquivos ignorados pelo Git
└── README.md                         # Documentação principal
```

## Principais Tecnologias

### Backend
- Node.js
- TypeScript
- Express
- Prisma ORM ou TypeORM
- PostgreSQL
- Redis
- BullMQ
- JWT
- Swagger
- Zod

### Frontend
- React, Angular ou Next.js
- TypeScript
- Tailwind CSS
- Axios

### Infraestrutura
- Docker
- Docker Compose
- PostgreSQL
- Redis

## Arquitetura

O projeto segue uma arquitetura em camadas:

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Database
```

### Fluxo da Aplicação

```text
Frontend
    ↓
API REST
    ↓
Services (Regras de Negócio)
    ↓
Repositories
    ↓
PostgreSQL

Jobs Assíncronos
    ↓
BullMQ + Redis
```
