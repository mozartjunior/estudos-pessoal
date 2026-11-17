preventive-maintenance-system/
├── backend/                     # Sua API REST (Node.js + TypeScript + Express + Prisma/TypeORM)
│   ├── prisma/                  # (Se usar Prisma) schema.prisma, migrations e seed.ts
│   ├── src/
│   │   ├── config/              # Variáveis de ambiente (Zod), conexão Redis, BullMQ, Swagger
│   │   ├── controllers/         # Camada de entrada HTTP (recebe req, valida, chama o service)
│   │   ├── database/            # Conexão com PostgreSQL e scripts de seed de alto volume
│   │   ├── dtos/                # Contratos de entrada/saída e schemas de validação (Zod)
│   │   ├── entities/            # Modelos/Entidades do domínio (Equipment, Sector, MaintenancePlan)
│   │   ├── errors/              # AppError.ts e erros customizados do domínio
│   │   ├── jobs/                # Workers e filas assíncronas (BullMQ + Redis)
│   │   ├── middlewares/         # Auth JWT, RBAC, Rate Limit, Error Handler, Logger
│   │   ├── repositories/        # Consultas otimizadas no banco, índices e transações
│   │   ├── routes/              # Definição das rotas da API (/api/v1/equipments, /plans, etc.)
│   │   ├── services/            # Regras de negócio, cache (Redis) e disparo de jobs
│   │   ├── types/               # Tipagens globais do Express e interfaces internas
│   │   ├── utils/               # Funções auxiliares puras (datas, cálculos de recorrência)
│   │   ├── app.ts               # Configuração do Express, CORS, middlewares e rotas
│   │   └── server.ts            # Inicialização da API, conexão com banco/Redis e Graceful Shutdown
│   ├── tests/                   # Testes unitários (services) e de integração (rotas + banco)
│   ├── Dockerfile               # Imagem Docker da API
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                    # Interface Web (Angular, React ou Next.js + Tailwind CSS)
│   ├── src/
│   │   ├── assets/              # Imagens, ícones e estilos globais
│   │   ├── components/          # Componentes reutilizáveis (botões, modais, tabelas, cards)
│   │   ├── layouts/             # Estruturas de página (Sidebar, Header, AuthLayout)
│   │   ├── pages/               # Telas da aplicação (Dashboard, Equipamentos, Planos, Login)
│   │   ├── services/            # Cliente HTTP (Axios/Fetch) que consome a API do backend
│   │   ├── contexts/            # Gerenciamento de estado global e autenticação (AuthContext/Store)
│   │   ├── types/               # Interfaces TypeScript espelhando os DTOs da API
│   │   └── utils/               # Formatação de datas, máscaras e validadores de formulário
│   ├── Dockerfile               # Imagem Docker do Frontend
│   ├── package.json
│   └── tsconfig.json
│
├── shared/                      # (Opcional) Tipos e validações Zod compartilhados entre Front e Back
│   └── types/                   # Ex: interfaces de Request/Response para evitar duplicação
│
├── docker-compose.yml           # Orquestra tudo: PostgreSQL + Redis + Backend (API) + Frontend
├── .env.example                 # Modelo de variáveis de ambiente para quem clonar o repo
├── .gitignore                   # Ignora node_modules, dist, .env e volumes locais
└── README.md                    # Documentação técnica, arquitetura, benchmarks e prints