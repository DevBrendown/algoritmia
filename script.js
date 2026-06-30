        // Dados das 7 fórmulas matemáticas implementadas em JavaScript
        // Dados expandidos para 17 fórmulas matemáticas no MathCore.js
const metricsData = [
    {
        id: 'bhaskara',
        title: 'Fórmula de Bhaskara',
        formula: 'x = (-b ± √Δ) / 2a  |  Δ = b² - 4ac',
        description: 'Resolve equações polinomiais de segundo grau. O algoritmo calcula o discriminante (Delta) para determinar a existência de raízes reais.',
        useCase: 'Cálculo de trajetória de projéteis, física mecânica e otimização de funções quadráticas.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><path d="M4 12h16"/><path d="M12 4v16"/></svg>',
        color: 'bg-red-50',
        code: 'function resolverBhaskara(a, b, c) {\n    const delta = Math.pow(b, 2) - (4 * a * c);\n    if (delta < 0) return "Sem raízes reais";\n    \n    const x1 = (-b + Math.sqrt(delta)) / (2 * a);\n    const x2 = (-b - Math.sqrt(delta)) / (2 * a);\n    return { x1, x2, delta };\n}'
    },
    {
        id: 'pitagoras',
        title: 'Teorema de Pitágoras',
        formula: 'c = √(a² + b²)',
        description: 'Determina o comprimento da hipotenusa de um triângulo retângulo conhecendo o valor dos seus dois catetos adjacentes.',
        useCase: 'Gráficos 2D/3D, desenvolvimento de jogos para detecção de colisão simples e vetores.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-500"><path d="M3 21h18"/><path d="M3 21V3l18 18Z"/></svg>',
        color: 'bg-blue-50',
        code: 'function calcularHipotenusa(a, b) {\n    return Math.hypot(a, b);\n}'
    },
    {
        id: 'regra-tres',
        title: 'Regra de Três Simples',
        formula: 'x = (b * c) / a',
        description: 'Descobre um quarto valor proporcional com base em três valores conhecidos que mantêm uma relação de linearidade direta.',
        useCase: 'Conversão de escalas, cálculo de porcentagens e redimensionamento proporcional de imagens/elementos web.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-500"><path d="M16 3h5v5"/><path d="m21 3-7 7"/><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5"/></svg>',
        color: 'bg-orange-50',
        code: 'function regraDeTres(a, b, c) {\n    if (a === 0) return "Divisão por zero inválida";\n    return (b * c) / a;\n}'
    },
    {
        id: 'juros-compostos',
        title: 'Montante de Juros Compostos',
        formula: 'M = P * (1 + i)^n',
        description: 'Calcula a evolução do capital acumulado ao longo do tempo, onde os juros de cada período são integrados ao valor principal.',
        useCase: 'Simuladores financeiros, projeções de rendimento de investimentos e cálculo de amortizações.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
        color: 'bg-purple-50',
        code: 'function jurosCompostos(principal, taxa, periodos) {\n    const montante = principal * Math.pow((1 + taxa), periodos);\n    return { montante: montante.toFixed(2), juros: (montante - principal).toFixed(2) };\n}'
    },
    {
        id: 'fibonacci',
        title: 'Sequência de Fibonacci (Recursiva)',
        formula: 'F(n) = F(n-1) + F(n-2)',
        description: 'Gera o n-ésimo termo da famosa sucessão numérica onde cada elemento subsequente corresponde à soma dos dois anteriores.',
        useCase: 'Algoritmos de ordenação, estruturas de dados de árvores e análises de proporções estéticas.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 2a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8V2z"/></svg>',
        color: 'bg-green-50',
        code: 'function fibonacci(n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n}'
    },
    {
        id: 'fatorial',
        title: 'Cálculo de Fatorial',
        formula: 'n! = n * (n-1) * ... * 1',
        description: 'Calcula o produto de todos os números inteiros positivos menores ou iguais a n. Utiliza uma estrutura de loop iterativo simples.',
        useCase: 'Análise combinatória, estatística probabilística e cálculo de permutações.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-indigo-500"><line x1="12" x2="12" y1="4" y2="14"/><line x1="12" x2="12.01" y1="18" y2="18"/></svg>',
        color: 'bg-indigo-50',
        code: 'function calcularFatorial(n) {\n    if (n < 0) return "Inválido";\n    let r = 1;\n    for (let i = 2; i <= n; i++) r *= i;\n    return r;\n}'
    },
    {
        id: 'media-ponderada',
        title: 'Média Ponderada',
        formula: 'M = Σ(xᵢ * wᵢ) / Σwᵢ',
        description: 'Calcula a média de um conjunto de valores onde cada valor possui um peso específico que dita sua relevância no resultado global.',
        useCase: 'Cálculo de notas escolares/acadêmicas, algoritmos de avaliação e índices econômicos.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-teal-500"><line x1="9" x2="15" y1="12" y2="12"/><line x1="5" x2="19" y1="16" y2="16"/><line x1="7" x2="17" y1="8" y2="8"/></svg>',
        color: 'bg-teal-50',
        code: 'function mediaPonderada(valores, pesos) {\n    const somaProdutos = valores.reduce((acc, val, i) => acc + (val * pesos[i]), 0);\n    const somaPesos = pesos.reduce((acc, peso) => acc + peso, 0);\n    return somaPesos === 0 ? 0 : somaProdutos / somaPesos;\n}'
    },
    {
        id: 'pa',
        title: 'Progressão Aritmética (Termo Geral)',
        formula: 'aₙ = a₁ + (n - 1) * r',
        description: 'Determina qualquer termo de uma sequência numérica onde a diferença entre termos consecutivos é uma constante (razão).',
        useCase: 'Previsão de crescimento linear, parcelamentos fixos e cronogramas de intervalos de tempo regulares.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-emerald-500"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',
        color: 'bg-emerald-50',
        code: 'function termoGeralPA(a1, n, razao) {\n    return a1 + (n - 1) * razao;\n}'
    },
    {
        id: 'pg',
        title: 'Progressão Geométrica (Termo Geral)',
        formula: 'aₙ = a₁ * q^(n - 1)',
        description: 'Determina qualquer termo de uma sequência numérica onde o fator de multiplicação entre os termos é constante.',
        useCase: 'Cálculo de crescimento populacional, propagação de vírus em redes e algoritmos de escala exponencial.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-500"><path d="M12 20v-8m0 0V4m0 8h8m-8 0H4"/></svg>',
        color: 'bg-cyan-50',
        code: 'function termoGeralPG(a1, n, q) {\n    return a1 * Math.pow(q, n - 1);\n}'
    },
    {
        id: 'conversor-temperatura',
        title: 'Conversão Celsius para Fahrenheit',
        formula: 'F = (C * 9/5) + 32',
        description: 'Equação de conversão termométrica direta entre o sistema métrico decimal e o sistema imperial britânico/americano.',
        useCase: 'Aplicações globais de clima, IoT (sensores de temperatura) e sistemas internacionais de aviação.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-amber-500"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/></svg>',
        color: 'bg-amber-50',
        code: 'function celsiusParaFahrenheit(celsius) {\n    return (celsius * 9 / 5) + 32;\n}'
    },
    {
        id: 'velocidade-media',
        title: 'Velocidade Média (Física)',
        formula: 'vₘ = Δs / Δt',
        description: 'Métrica cinemática que relaciona a variação de espaço percorrido em função da variação do intervalo de tempo gasto.',
        useCase: 'Sistemas de GPS, rastreamento de frotas e telemetria automotiva de veículos de entrega.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-rose-500"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>',
        color: 'bg-rose-50',
        code: 'function velocidadeMedia(distancia, tempo) {\n    if (tempo === 0) return "Tempo não pode ser zero";\n    return distancia / tempo;\n}'
    },
    {
        id: 'imc',
        title: 'Índice de Massa Corporal (IMC)',
        formula: 'IMC = peso / altura²',
        description: 'Métrica padrão internacional adotada pela OMS para avaliar preliminarmente o nível de gordura e peso saudável de um indivíduo.',
        useCase: 'Aplicativos de saúde/fitness, prontuários de nutrição e triagem em clínicas médicas.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-fuchsia-500"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="M6 8h12"/></svg>',
        color: 'bg-fuchsia-50',
        code: 'function calcularIMC(peso, altura) {\n    if (altura === 0) return "Altura inválida";\n    const imc = peso / Math.pow(altura, 2);\n    return imc.toFixed(2);\n}'
    },
    {
        id: 'desvio-padrao',
        title: 'Desvio Padrão Populacional',
        formula: 'σ = √(Σ(xᵢ - μ)² / N)',
        description: 'Métrica estatística avançada que mede a dispersão de um conjunto de dados em relação à média aritmética aritmética do grupo.',
        useCase: 'Análise de risco no mercado de ações, controle de qualidade industrial e ciência de dados.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-sky-500"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
        color: 'bg-sky-50',
        code: 'function desvioPadrao(array) {\n    const n = array.length;\n    if (n === 0) return 0;\n    const media = array.reduce((a, b) => a + b) / n;\n    const variancia = array.map(x => Math.pow(x - media, 2)).reduce((a, b) => a + b) / n;\n    return Math.sqrt(variancia).toFixed(4);\n}'
    },
    {
        id: 'area-circulo',
        title: 'Área do Círculo',
        formula: 'A = π * r²',
        description: 'Calcula a superfície interna delimitada por uma circunferência, multiplicando a constante Pi pelo raio elevado ao quadrado.',
        useCase: 'Cálculo de áreas de cobertura de antenas de rádio, engenharia civil e design vetorial.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600"><circle cx="12" cy="12" r="10"/></svg>',
        color: 'bg-yellow-50',
        code: 'function areaCirculo(raio) {\n    return Math.PI * Math.pow(raio, 2);\n}'
    },
    {
        id: 'porcentagem',
        title: 'Cálculo de Desconto / Aumento',
        formula: 'V_final = V * (1 ± p/100)',
        description: 'Aplica um modificador percentual a um valor principal. Essencial para regras de negócio comerciais em plataformas digitais.',
        useCase: 'Carrinhos de compras de E-commerce, aplicação de cupons de desconto e reajustes de tarifas tributárias.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-violet-500"><line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
        color: 'bg-violet-50',
        code: 'function aplicarPercentual(valor, porcentagem, ehDesconto = true) {\n    const modificador = valor * (porcentagem / 100);\n    return ehDesconto ? valor - modificador : valor + modificador;\n}'
    },
    {
        id: 'segunda-lei-newton',
        title: 'Segunda Lei de Newton (Força)',
        formula: 'F = m * a',
        description: 'Calcula a força resultante aplicada sobre um corpo, sabendo que ela é o produto direto da sua massa pela aceleração adquirida.',
        useCase: 'Engenharia aeroespacial, simulações de colisões automotivas de segurança e motores de física em jogos.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-pink-500"><path d="M18 8h.01"/><path d="M14 12h.01"/><path d="M10 16h.01"/><path d="M6 20h.01"/></svg>',
        color: 'bg-pink-50',
        code: 'function calcularForca(massa, aceleracao) {\n    return massa * aceleracao;\n}'
    },
    {
        id: 'distancia-pontos-2d',
        title: 'Distância entre Dois Pontos 2D',
        formula: 'd = √((x₂ - x₁)² + (y₂ - y₁)²)',
        description: 'Calcula a menor distância retilínea entre dois pontos distintos localizados no espaço cartesiano bidimensional.',
        useCase: 'Cálculo de trajetórias em mapas digitais planos, georreferenciamento local e design gráfico.',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-lime-600"><path d="M5 3v16h16"/><path d="m5 19 6-6 4 4 6-6"/></svg>',
        color: 'bg-lime-50',
        code: 'function distancia2D(x1, y1, x2, y2) {\n    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n}'
    }
];

        function renderMetrics() {
            const container = document.getElementById('metrics-container');
            container.innerHTML = '';
            metricsData.forEach(m => {
                const card = `
                    <div class="metric-card ${m.color} rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                        <div class="p-6 md:p-8">
                            <div class="flex items-center gap-4 mb-6">
                                <div class="p-3 bg-white rounded-xl shadow-sm border border-slate-100">${m.icon}</div>
                                <h3 class="text-2xl font-bold text-slate-800">${m.title}</h3>
                            </div>

                            <div class="grid md:grid-cols-2 gap-8">
                                <div>
                                    <div class="mb-6">
                                        <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                            Equação Equivalente
                                        </h4>
                                        <div class="bg-white p-4 rounded-xl border border-slate-100 font-mono text-base text-blue-700 font-bold mb-4 shadow-inner text-center">
                                            ${m.formula}
                                        </div>
                                        <p class="text-slate-600 leading-relaxed">${m.description}</p>
                                    </div>
                                    <div class="bg-white/40 p-4 rounded-xl border border-white/60">
                                        <span class="text-[10px] uppercase font-bold text-slate-400 block mb-2 tracking-widest">Aplicações Práticas</span>
                                        <p class="text-sm italic text-slate-700">${m.useCase}</p>
                                    </div>
                                </div>
                                <div>
                                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Implementação Vanilla JavaScript (ES6)</h4>
                                    <div class="relative group">
                                        <pre class="bg-slate-900 text-blue-300 p-5 rounded-2xl text-xs font-mono overflow-x-auto shadow-xl border-l-4 border-blue-500 leading-relaxed"><code>${m.code}</code></pre>
                                    </div>
                                    <p class="mt-3 text-[10px] text-slate-400 text-right uppercase">Motor: JS Math Engine</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += card;
            });
        }

        window.onload = renderMetrics;