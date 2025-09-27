// Data for Portfolio
const skillsData = [
    {
        category: 'Tecnologias Principais',
        skills: [
            { name: 'Python', level: 85, icon: 'fab fa-python text-yellow-400' },
            { name: 'SQL', level: 85, icon: 'fas fa-database text-indigo-400' },
            { name: 'Node.js', level: 80, icon: 'fab fa-node-js text-green-500' },
            { name: 'JavaScript', level: 75, icon: 'fab fa-js-square text-yellow-500' },
            { name: 'Java', level: 65, icon: 'fab fa-java text-red-500' },
            { name: 'React', level: 55, icon: 'fab fa-react text-blue-400' },
            { name: 'Express.js', level: 45, icon: 'fas fa-server text-green-500' },
            { name: 'Rust', level: 10, icon: 'fab fa-rust text-white-300' },
        ]
    },
    {
        category: 'Ferramentas e Tecnologias Secundárias',
        skills: [
            { name: 'Git & GitHub', level: 80, icon: 'fab fa-github text-white' },
            { name: 'Postman', level: 70, icon: 'fas fa-paper-plane text-orange-500' },
            { name: 'C Language', level: 70, icon: 'fas fa-copyright text-gray-400' },
            { name: 'PostgreSQL', level: 60, icon: 'fas fa-database text-blue-500' },
            { name: 'HTML5', level: 50, icon: 'fab fa-html5 text-orange-500' },
            { name: 'CSS3', level: 50, icon: 'fab fa-css3-alt text-blue-500' },
            { name: 'Docker', level: 65, icon: 'fas fa-ship text-blue-500' },
            { name: 'Oracle Servers', level: 30, icon: 'fas fa-database text-red-500' },
        ]
    },
    {
        category: 'Habilidades adicionais',
        skills: [
            { name: 'Windows', level: 95, icon: 'fab fa-windows text-orange-500' },
            { name: 'Scrum', level: 80, icon: 'fas fa-users text-blue-500' },
            { name: 'Debugging', level: 80, icon: 'fas fa-bug text-red-500' },
            { name: 'Excel', level: 80, icon: 'fas fa-table text-green-500' },
            { name: 'Documentação', level: 70, icon: 'fas fa-file-alt text-yellow-500' },
            { name: 'Linux', level: 30, icon: 'fas fa-terminal text-orange-500' },
        ]
    }
];

const experienceData = [
    {
        role: 'Estagiário de Inteligência Artificial',
        company: 'HPE Automotores do Brasil Ltda.',
        period: 'Jun 2025 - o momento',
        description: 'Atuação na área de IA, desenvolvendo e implementando soluções inovadoras para a empresa.',
        responsibilities: [
            'Desenvolvimento de modelos de machine learning',
            'Implementação de algoritmos de IA',
            'Análise de dados para insights de negócio',
            'Automação de processos com IA'
        ]
    },
    {
        role: 'Estagiário de desenvolvimento',
        company: 'HPE Automotores do Brasil Ltda.',
        period: 'Set 2024 - Jun 2025',
        description: '',
        responsibilities: [
            'Auxiliar no atendimento de service desk dos sistemas desenvolvidos internamente pela HPE;',
            'Apoiar na análise de sistemas, propondo novos métodos de realização do trabalho ou sua automação;',
            'Participar do levantamento de dados e da definição de métodos e recursos necessários para implantação de sistemas e/ou alteração dos já existentes;',
            'Contribuir na elaboração de manuais dos sistemas ou projetos desenvolvidos;',
            'Pesquisar e avaliar sistemas disponíveis no mercado e sua aplicabilidade para a companhia;',
            'Contribuir na elaboração de estudos sobre a criação e/ou alteração de metodologias e procedimentos necessários ao desenvolvimento de sistemas.'
        ]
    },
    {
        role: 'Estagiário de TI',
        company: 'Serra do Facão Energia [SEFAC]',
        period: 'Jun 2024 - Set 2024',
        description: '',
        responsibilities: [
            "Apoio na utilização e solução de problemas de hardware e softwares;",
            "Abertura e acompanhamento de chamados juntos aos prestadores de serviços de TI;",
            "Apoio no desenvolvimento e manutenção das aplicações;",
            "Suporte aos usuários de TI da empresa;",
            "Participar de atividades e reuniões da área de TI;",
            "Zelar pela organização e limpeza dos equipamentos;",
            "Apoiar no inventário de ativos de TI, mantendo-o atualizado;",
            "Preenchimento de relatórios e planilhas da área de TI;",
            "Propor melhorias para a empresa que possam ser suportadas pela área de TI."
        ]
    },
    {
        role: 'Desenvolvedor Front-end',
        company: 'Universidade Federal de Catalão',
        period: 'Mai 2024 - Ago 2024',
        description: '',
        responsibilities: [
            'Desenvolvimento front-end com Vue.js',
            'Implementação de TypeScript',
            'Criação de interfaces responsivas',
            'Integração com APIs',
            'Testes e depuração de código'
        ]
    },
    {
        role: 'Plantonista Analista de TI',
        company: 'Hospital Nasr Faiad',
        period: 'Abr 2022 - o momento',
        description: '',
        responsibilities: [
            'Plantões de TI nos finais de semana',
            'Monitoramento de sistemas hospitalares',
            'Suporte emergencial de TI',
            'Manutenção da infraestrutura crítica',
            'Garantia de disponibilidade dos sistemas'
        ]
    },
    {
        role: 'Analista de TI',
        company: 'Hospital Nasr Faiad',
        period: 'Jun 2021 - Dez 2021',
        description: '',
        responsibilities: [
            "Monitoramento de desempenho de hardware e sistemas: Elaboração e análise de indicadores para manutenção preventiva e corretiva, garantindo a continuidade operacional e redução de falhas;",
            "Suporte à gestão de qualidade empresarial: Participação na implementação de metodologias como 5S, fluxogramas e histogramas para otimizar processos e melhorar a eficiência organizacional;",
            "Desenvolvimento de indicadores de desempenho: Criação de relatórios visuais e planilhas no Excel para monitoramento de KPIs em todos os setores da empresa, promovendo tomadas de decisão mais assertivas;",
            "Suporte técnico em TI: Implementação de hardware e software, atualização de sistemas operacionais, realização de backups de usuários e servidores, além de otimizações de desempenho em dispositivos e aplicativos.",
            "Gerenciamento de acessos: Administração de sistemas de biometria, controle de logins e senhas, assegurando a segurança e conformidade no acesso a sistemas corporativos."
        ]
    }
];

const educationData = [
    {
        institution: 'Universidade Federal de Goiás (UFG)',
        course: 'Bacharelado, Ciência da Computação',
        period: 'Mai 2022 - o momento',
        description: 'Cursando graduação com foco nos fundamentos da computação, algoritmos, estruturas de dados e desenvolvimento de software.'
    },
    {
        institution: 'Universidade Federal de Uberlândia (UFU)',
        course: 'Bacharelado, Gestão de Sistemas de Informação',
        period: 'Jul 2021 - Mai 2022',
        description: 'Curso cancelado. Período inicial de estudos na área de tecnologia e sistemas de informação.'
    },
    {
        institution: 'Colégio Universitário',
        course: 'Ensino Médio',
        period: 'Jan 2007 - Dez 2020',
        description: 'Ensino médio completo.'
    }
];

const projectsData = [
    { 
        img: '../imgs/projects/ponto-do-lanche.png', 
        title: 'Melhoria Projeto Hamburgueria', 
        link: 'https://github.com/rafaelmelo2/pontodolanche_frontend', 
        site: 'https://pontodolanche.netlify.app/', 
        description: 'Melhorias: Pedidos pelo celular, cardápio online, site completo, banco de dados em nuvem.', 
        status: 'Em andamento', 
        tech: ['react', 'bootstrap', 'js', 'node-js', 'postgresql'] 
    },
    { img: '../imgs/projects/hamburgueria.jpeg', title: 'Projeto Hamburgueria', link: '', description: 'Projeto com intenção de ajudar meus pais com um controle maior sobre as vendas e pedidos da Hamburgueria', status: 'Finalizado', tech: ['java'] },
    { img: '../imgs/projects/tradebot.png', title: 'Bot de Trade Cripto', link: 'https://github.com/rafaelmelo2/tradebot-cripto', description: 'Bot para compra e venda de criptomoedas, com regras de negócio customizadas.', status: 'Finalizado', tech: ['python', 'sqlite'] },
    { img: '../imgs/projects/api-fafas.jfif', title: 'API Simulação Instagram', link: 'https://github.com/rafaelmelo2/api-fafas-2023', description: 'API com funções de cadastrar, editar, buscar e apagar posts, simulando o Instagram.', status: 'Finalizado', tech: ['html5', 'css3-alt', 'js', 'node-js'] },
    { img: '../imgs/projects/chatbot.png', title: 'Bot de Respostas WhatsApp', link: 'https://github.com/rafaelmelo2/botwhatsapp-pontodolanche', description: 'Fork de um bot para WhatsApp, customizado com cardápio para receber pedidos automaticamente.', status: 'Em andamento', tech: ['whatsapp', 'js', 'sqlite'] },
    { img: '../imgs/projects/assistente-virtual.png', title: 'Assistente virtual', link: 'https://github.com/rafaelmelo2/Fael_assistente_virtual_2020', description: 'Chat-bot com comandos de voz para automação de tarefas no computador. Modelo antigo e depreciado.', status: 'Finalizado', tech: ['python', 'js'] },
    { img: '../imgs/projects/capa LoveGoods.jpg', title: 'Site de venda', site: 'https://love-goods-emunah.netlify.app/', link: 'https://github.com/rafaelmelo2/love-goods', description: 'Site de venda de álbuns LoveGoods da loja EmunahPersonalizados.', status: 'Finalizado', tech: ['html5', 'css3-alt', 'js'] },
    { img: '../imgs/projects/bank3F.png', title: 'Bank3F', link: 'https://github.com/rafaelmelo2/Bank3F', description: 'Uma simulação de banco digital para depósitos, saques, transferências e investimentos. Realizado como trabalho final de Programação Orientada a Objetos', status: 'Finalizado', tech: ['java'] },
    { img: '../imgs/projects/conversor-de-moedas.png', title: 'Conversor de moedas', link: 'https://github.com/rafaelmelo2/currency-conversion', description: 'Conversor de moedas feito em Html que atua como uma API para conversão de moedas.', status: 'Finalizado', tech: ['html5', 'css3-alt', 'js'] },
    { img: '../imgs/projects/battle-royale.png', title: 'Script de Battle Royale', link: 'https://github.com/rafaelmelo2/battle-royale-fivem', description: 'Script de battle royale que criei para colocar em meu servidor FiveM.', status: 'Finalizado', tech: ['lua'] },
];

const certificationsData = [
    {
        img: 'https://placehold.co/400x300/6058B8/FFFFFF?text=Certificado+1',
        title: 'Formação programador BackEnd - NodeJS 2024',
        link: 'https://www.udemy.com/certificate/UC-49709eea-2d64-411e-9a64-b6a3238a4c2e/',
        description: 'Formação completa em desenvolvimento Backend com Node.js, abordando APIs, bancos de dados e boas práticas.'
    },
    {
        img: 'https://placehold.co/400x300/6058B8/FFFFFF?text=Certificado+2',
        title: 'Versionamento de Código com Git e GitHub',
        link: 'https://hermes.dio.me/certificates/5WB6TLYW.pdf',
        description: 'Curso essencial sobre controle de versão para gerenciamento de projetos de software de forma colaborativa.'
    },
    {
        img: 'https://placehold.co/400x300/6058B8/FFFFFF?text=Certificado+2',
        title: 'Versionamento de Código com Git e GitHub',
        link: 'https://hermes.dio.me/certificates/5WB6TLYW.pdf',
        description: 'Curso essencial sobre controle de versão para gerenciamento de projetos de software de forma colaborativa.'
    },
    {
        img: 'https://placehold.co/400x300/6058B8/FFFFFF?text=Certificado+2',
        title: 'Versionamento de Código com Git e GitHub',
        link: 'https://hermes.dio.me/certificates/5WB6TLYW.pdf',
        description: 'Curso essencial sobre controle de versão para gerenciamento de projetos de software de forma colaborativa.'
    },
    {
        img: 'https://placehold.co/400x300/6058B8/FFFFFF?text=Certificado+2',
        title: 'Versionamento de Código com Git e GitHub',
        link: 'https://hermes.dio.me/certificates/5WB6TLYW.pdf',
        description: 'Curso essencial sobre controle de versão para gerenciamento de projetos de software de forma colaborativa.'
    },
    {
        img: 'https://placehold.co/400x300/6058B8/FFFFFF?text=Certificado+2',
        title: 'Versionamento de Código com Git e GitHub',
        link: 'https://hermes.dio.me/certificates/5WB6TLYW.pdf',
        description: 'Curso essencial sobre controle de versão para gerenciamento de projetos de software de forma colaborativa.'
    },
    {
        img: 'https://placehold.co/400x300/6058B8/FFFFFF?text=Certificado+2',
        title: 'Versionamento de Código com Git e GitHub',
        link: 'https://hermes.dio.me/certificates/5WB6TLYW.pdf',
        description: 'Curso essencial sobre controle de versão para gerenciamento de projetos de software de forma colaborativa.'
    },
];

const techIconsMap = {
    'python': 'fab fa-python', 'js': 'fab fa-js', 'c': 'fas fa-copyright', 'terminal': 'fas fa-terminal',
    'lua': 'fas fa-moon', 'html5': 'fab fa-html5', 'css3-alt': 'fab fa-css3-alt', 'node-js': 'fab fa-node-js',
    'java': 'fab fa-java', 'postgresql': 'fas fa-database', 'react': 'fab fa-react', 'bootstrap': 'fab fa-bootstrap',
    'whatsapp': 'fab fa-whatsapp', 'sqlite': 'fas fa-database'
};
