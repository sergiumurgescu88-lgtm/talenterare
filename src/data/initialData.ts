import { BotData, DomainId, DomainSummary, LogEntry, AccountData, MarketSentiment, RiskOverview, EquityHistoryPoint } from '../types/trading';

export const INITIAL_ACCOUNT: AccountData = {
  equity: 1284750.40,
  balance: 1250000.00,
  currency: 'USD',
  dailyPnl: 14750.40,
  dailyPnlPct: 1.16,
  marginUsed: 42180.00,
  freeMargin: 1242570.40,
  marginLevel: 3045.8,
};

export const INITIAL_MARKET_SENTIMENT: MarketSentiment = {
  vix: 14.85,
  label: 'NEUTRAL',
  marketStatus: 'SESSION OVERLAP',
};

export const INITIAL_RISK_OVERVIEW: RiskOverview = {
  riskScore: 'OPTIMAL',
  totalExposure: 3.28,
  openPositionsCount: 11,
  var95: 18450.00,
};

// Generare P/L istoric pe 30 de zile pentru un bot
function generateBotHistory(startVal: number, trend: number) {
  const points = [];
  let cum = startVal;
  const now = new Date();
  for (let i = 30; i >= 0; i--) {
    const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    const dayDelta = (Math.random() * 400 - 150) * trend;
    cum += dayDelta;
    points.push({
      date: d.toLocaleDateString('ro-RO', { day: '2-digit', month: 'short' }),
      pl: parseFloat(dayDelta.toFixed(2)),
      cumulative: parseFloat(cum.toFixed(2)),
    });
  }
  return points;
}

export const INITIAL_BOTS: BotData[] = [
  { id: 'hermes-live', name: 'Hermes-LIVE', domain: 'amteam.live', symbol: 'XAUUSD', status: 'SCANNING', adx: 19.5, whaleIntensity: 62, lot: 0.10, h1_alignment: 'H1 BUY', reported_pl: 0.0, is_live: true, strategy: 'Whale > 1.22x · ADX > 19 · Scor > 60', bid: 2642.10, ask: 2642.30, technicalParameters: { timeframe: 'M15' } },
  { id: 'hermes-demo', name: 'Hermes-DEMO', domain: 'amteam.live', symbol: 'XAUUSD', status: 'SCANNING', adx: 19.5, whaleIntensity: 62, lot: 0.10, h1_alignment: 'H1 BUY', reported_pl: 0.0, is_live: false, strategy: 'Whale > 1.22x · ADX > 19 · Scor > 60', bid: 2642.10, ask: 2642.30, technicalParameters: { timeframe: 'M15' } },
  { id: 'apollo-live', name: 'Apollo-LIVE', domain: 'amteam.live', symbol: 'XAUUSD', status: 'SCANNING', adx: 20.5, whaleIntensity: 68, lot: 0.10, h1_alignment: 'H1 NEUTRAL', reported_pl: 0.0, is_live: true, strategy: 'Whale > 1.33x · ADX > 20 · Scor > 65', bid: 2642.10, ask: 2642.30, technicalParameters: { timeframe: 'M30' } },
  { id: 'apollo-demo', name: 'Apollo-DEMO', domain: 'amteam.live', symbol: 'XAUUSD', status: 'SCANNING', adx: 20.5, whaleIntensity: 68, lot: 0.10, h1_alignment: 'H1 NEUTRAL', reported_pl: 0.0, is_live: false, strategy: 'Whale > 1.33x · ADX > 20 · Scor > 65', bid: 2642.10, ask: 2642.30, technicalParameters: { timeframe: 'M30' } },
  { id: 'athena-live', name: 'Athena-LIVE', domain: 'amx.today', symbol: 'XAUUSD', status: 'SCANNING', adx: 22.5, whaleIntensity: 74, lot: 0.10, h1_alignment: 'H1 BUY', reported_pl: 0.0, is_live: true, strategy: 'Whale > 1.44x · ADX > 22 · Scor > 70', bid: 2642.10, ask: 2642.30, technicalParameters: { timeframe: 'M15' } },
  { id: 'athena-demo', name: 'Athena-DEMO', domain: 'amx.today', symbol: 'XAUUSD', status: 'SCANNING', adx: 22.5, whaleIntensity: 74, lot: 0.10, h1_alignment: 'H1 BUY', reported_pl: 0.0, is_live: false, strategy: 'Whale > 1.44x · ADX > 22 · Scor > 70', bid: 2642.10, ask: 2642.30, technicalParameters: { timeframe: 'M15' } },
  { id: 'zeus-live', name: 'Zeus-LIVE', domain: 'aditrade.online', symbol: 'XAUUSD', status: 'SCANNING', adx: 23.5, whaleIntensity: 82, lot: 0.10, h1_alignment: 'H1 BUY', reported_pl: 0.0, is_live: true, strategy: 'Whale > 1.55x · ADX > 23 · Scor > 75', bid: 2642.10, ask: 2642.30, technicalParameters: { timeframe: 'H1' } },
  { id: 'zeus-demo', name: 'Zeus-DEMO', domain: 'aditrade.online', symbol: 'XAUUSD', status: 'SCANNING', adx: 23.5, whaleIntensity: 82, lot: 0.10, h1_alignment: 'H1 BUY', reported_pl: 0.0, is_live: false, strategy: 'Whale > 1.55x · ADX > 23 · Scor > 75', bid: 2642.10, ask: 2642.30, technicalParameters: { timeframe: 'H1' } },
  { id: 'chronos-live', name: 'Chronos-LIVE', domain: 'g4trade.online', symbol: 'XAUUSD', status: 'SCANNING', adx: 24.5, whaleIntensity: 92, lot: 0.10, h1_alignment: 'H1 SELL', reported_pl: 0.0, is_live: true, strategy: 'Whale > 1.66x · ADX > 24 · Scor > 80', bid: 2642.10, ask: 2642.30, technicalParameters: { timeframe: 'M30' } },
  { id: 'chronos-demo', name: 'Chronos-DEMO', domain: 'g4trade.online', symbol: 'XAUUSD', status: 'SCANNING', adx: 24.5, whaleIntensity: 92, lot: 0.10, h1_alignment: 'H1 SELL', reported_pl: 0.0, is_live: false, strategy: 'Whale > 1.66x · ADX > 24 · Scor > 80', bid: 2642.10, ask: 2642.30, technicalParameters: { timeframe: 'M30' } },
];

// Generare sparklines 24h pentru cele 4 domenii
function generateSparkline(trend: number, base: number) {
  const points = [];
  let val = base;
  for (let h = 24; h >= 0; h--) {
    val += (Math.random() * 20 - 8.5) * trend;
    points.push({ time: `${h}h`, value: parseFloat(val.toFixed(2)) });
  }
  return points;
}

export const INITIAL_DOMAIN_SUMMARIES: DomainSummary[] = [
  {
    id: 'amteam.live',
    name: 'amteam.live',
    niche: 'Forex Majors',
    assets: ['EURUSD', 'GBPUSD', 'USDCHF'],
    activeBotsCount: 4,
    totalBotsCount: 5,
    totalProfit: 129900.0,
    dailyChangePct: 2.45,
    url: 'https://amteam.live',
    sparkline24h: generateSparkline(1.4, 126000),
    description: 'Specializat pe cele mai lichide perechi valutare globale. Algoritmi de înaltă precizie aliniați la fluxurile instituționale din Londra și New York.',
    deepResearchStrategy: {
      title: 'Macro Liquidity & Central Bank Order Flow',
      description: 'Documentația Deep Research certifică exploatarea deschiderilor de sesiune globale (Londra 08:00 GMT, New York 13:00 GMT) cu filtrare automată a știrilor tier-1 și detectare de sweep pe lichiditate.',
      keyParameters: [
        'ADX Threshold: > 28 (M15)',
        'Whale Intensity: > 75%',
        'Fibonacci Clustere: 38.2%, 50.0%, 61.8%',
        'Stop-Loss dinamic: 18 - 24 pips',
      ],
      engagementRules: [
        'Niciun trade cu 15 minute înainte de deciziile FOMC / ECB / BoE',
        'Validare obligatorie a spargerii sesiunii asiatice cu închidere de lumânare M15',
        'Securizare la Breakeven imediat după atingerea primului target de 1:1.5 RR',
      ],
      criticalAdaptations: [
        'Protecție slippage automată (respingere execuție peste 1.2 pips deviație)',
        'Filtru de spread interbancar (blocare intrare dacă spread-ul depășește 1.5x media)',
      ],
    },
  },
  {
    id: 'amx.today',
    name: 'amx.today',
    niche: 'Metals & Volatility',
    assets: ['XAUUSD', 'US30', 'NAS100'],
    activeBotsCount: 3,
    totalBotsCount: 5,
    totalProfit: 212800.0,
    dailyChangePct: 3.82,
    url: 'https://amx.today',
    sparkline24h: generateSparkline(2.1, 204000),
    description: 'Sectorul de aur (XAUUSD) și indici de volatilitate americani. Captură momentum exploziv la deschiderea Wall Street și spike-uri de aur.',
    deepResearchStrategy: {
      title: 'Bullion Precision & Index Volatility Engine',
      description: 'Strategia avansată din raportul Deep Research calibrează poziționarea în Aur spot și contractele Dow Jones / Nasdaq prin urmărirea curbei VIX și a fluxurilor ETF de lingouri fizice.',
      keyParameters: [
        'ADX Threshold: > 32 (M5/M30)',
        'Whale Intensity: > 80% (aur), > 70% (US30)',
        'Fibonacci Golden Ratio: 61.8% & 161.8%',
        'Chandelier Exit Trailing: 2.2x ATR',
      ],
      engagementRules: [
        'Interzise pozițiile în timpul primelor 5 minute de la deschiderea bursieră NY',
        'Detectare automată a trap-urilor de lichiditate deasupra maximelor zilnice',
        'Închidere forțată vineri cu 30 minute înainte de finalul pieței spot',
      ],
      criticalAdaptations: [
        'Model dinamic de slippage pentru indici în perioade de volatilitate extremă',
        'Hedging invers pe VIX când expunerea pe indici depășește 4%',
      ],
    },
  },
  {
    id: 'aditrade.online',
    name: 'aditrade.online',
    niche: 'Crypto & Exotic',
    assets: ['BTCUSD', 'ETHUSD', 'GBPJPY'],
    activeBotsCount: 3,
    totalBotsCount: 5,
    totalProfit: 220100.0,
    dailyChangePct: 4.15,
    url: 'https://aditrade.online',
    sparkline24h: generateSparkline(2.8, 208000),
    description: 'Active digitale de top și perechi valutare exotice cu beta ridicat. Arbitraj on-chain, hărți de lichidare și momentum algoritmic 24/7.',
    deepResearchStrategy: {
      title: 'Quantum On-Chain & Cross-Exchange Liquidity Matrix',
      description: 'Cercetarea Deep Research evidențiază detectarea mișcărilor balenelor (Whale Wallets) și a cascadatelor de lichidări din piețele perpetue, combinate cu volatilitatea Dragonului (GBPJPY).',
      keyParameters: [
        'ADX Threshold: > 35 (H1)',
        'Whale Intensity: > 85%',
        'Golden Ratio Spiral: 78.6% & 261.8%',
        'Trailing Stop: 2.0x ATR',
      ],
      engagementRules: [
        'Verificare fonduri în wallet-urile majore înainte de declanșarea intrării',
        'Evitare intrări când rata de funding depășește 0.08% pozitiv/negativ',
        'Scalare progresivă în 3 trepte la fiecare nivel Fibonacci',
      ],
      criticalAdaptations: [
        'Conexiune socket redundantă către noduri RPC directe',
        'Auto-deleveraging preventiv la anomalii de spread între spot și perps',
      ],
    },
  },
  {
    id: 'g4trade.online',
    name: 'g4trade.online',
    niche: 'Commodities & Macro',
    assets: ['OIL', 'XAGUSD', 'EURJPY', 'AUDCAD'],
    activeBotsCount: 3,
    totalBotsCount: 5,
    totalProfit: 148700.0,
    dailyChangePct: 1.88,
    url: 'https://g4trade.online',
    sparkline24h: generateSparkline(1.3, 145000),
    description: 'Energie globală, argint industrial și perechi de monede de mărfuri. Corelații macroeconomice globale și cicluri energetice.',
    deepResearchStrategy: {
      title: 'Geopolitical Macro Cycle & Commodity Spread Matrix',
      description: 'Modelul Deep Research cuantifică impactul politicilor OPEC+, cererea de argint din industria fotovoltaică și diferențialele de dobândă globale.',
      keyParameters: [
        'ADX Threshold: > 28 (H1)',
        'Whale Intensity: > 78%',
        'Gold/Silver Ratio Boundary: 85:1 Trigger',
        'Stop-Loss fix: 28 - 40 pips',
      ],
      engagementRules: [
        'Intrări suspendate cu 30 de minute înainte de raportul EIA Crude',
        'Validare prin corelația DXY (Indexul Dolarului American)',
        'Trailing bazat pe minimele swing pe graficul de 4 ore',
      ],
      criticalAdaptations: [
        'Ajustare automată a lotului în funcție de volatilitatea contractului futures activ',
        'Compensare automată a costurilor de swap/rollover săptămânal',
      ],
    },
  },
];

export const INITIAL_LOGS: LogEntry[] = [
  {
    id: 'log-01',
    timestamp: '10:48:22',
    botId: 'bot-at-03',
    botName: 'SERGIU-Crypto',
    level: 'TRADE',
    message: 'Executat ordin BUY 1.00 lot BTCUSD @ $67,420.50 | Semnal Golden Ratio 78.6% confirmat, Whale 99%',
    domain: 'aditrade.online',
  },
  {
    id: 'log-02',
    timestamp: '10:47:15',
    botId: 'bot-ax-03',
    botName: 'SERGIU-Metals',
    level: 'TRADE',
    message: 'Executat ordin BUY 2.00 lot XAUUSD @ $2,642.10 | Cluster armonic Phi atins, TP setat la $2,668.00',
    domain: 'amx.today',
  },
  {
    id: 'log-03',
    timestamp: '10:45:04',
    botId: 'bot-am-01',
    botName: 'Alpha-Majors',
    level: 'INFO',
    message: 'Scanare piață EURUSD: ADX 32.4 în expansiune, spread stabil la 0.4 pips',
    domain: 'amteam.live',
  },
  {
    id: 'log-04',
    timestamp: '10:43:50',
    botId: 'bot-g4-03',
    botName: 'SERGIU-Macro',
    level: 'TRADE',
    message: 'Executat ordin SELL 2.80 lot OIL @ $74.85 | Respingere din 61.8% Fibonacci, Whale Intensity 95%',
    domain: 'g4trade.online',
  },
  {
    id: 'log-05',
    timestamp: '10:41:18',
    botId: 'bot-ax-04',
    botName: 'Nasdaq-Vortex',
    level: 'WARN',
    message: 'Volatilitate crescută pe indicele NAS100; trecere temporară în stare COOLDOWN pentru 15 minute',
    domain: 'amx.today',
  },
  {
    id: 'log-06',
    timestamp: '10:38:09',
    botId: 'bot-am-03',
    botName: 'SERGIU-Majors',
    level: 'TRADE',
    message: 'Actualizat Trailing Stop la Breakeven +25 pips pe poziția BUY EURUSD 3.50 loturi',
    domain: 'amteam.live',
  },
  {
    id: 'log-07',
    timestamp: '10:35:42',
    botId: 'bot-g4-01',
    botName: 'BlackGold-Macro',
    level: 'INFO',
    message: 'Actualizat raport inventar EIA: +1.2M barili. Bias bearish confirmat pe H1',
    domain: 'g4trade.online',
  },
  {
    id: 'log-08',
    timestamp: '10:30:11',
    botId: 'bot-at-01',
    botName: 'Satoshi-Flow',
    level: 'INFO',
    message: 'Inflow instituțional detectat: 1,420 BTC transferați în wallet-uri de acumulare',
    domain: 'aditrade.online',
  },
  {
    id: 'log-09',
    timestamp: '10:24:33',
    botId: 'bot-am-04',
    botName: 'Delta-Swissy',
    level: 'WARN',
    message: 'Divergență scăzută DXY vs CHF. Poziție închisă pe breakeven pentru protecție capital',
    domain: 'amteam.live',
  },
  {
    id: 'log-10',
    timestamp: '10:19:02',
    botId: 'bot-ax-01',
    botName: 'Gold-Sniper',
    level: 'TRADE',
    message: 'Executat Take Profit parțial la XAUUSD +$840 profit securizat. Restul poziției rulează cu trailing',
    domain: 'amx.today',
  },
  {
    id: 'log-11',
    timestamp: '10:15:00',
    botId: 'system',
    botName: 'AM-Core',
    level: 'INFO',
    message: 'Sincronizare completă WebSocket realizată. Toate cele 20 de noduri de execuție sunt active',
    domain: 'amteam.live',
  },
];

// Generare date pentru graficul cu Equity Curve, Drawdown, Benchmarks și Best/Worst trades
const TRADED_SYMBOLS = ['EURUSD', 'GBPUSD', 'USDCHF', 'XAUUSD', 'US30', 'NAS100', 'BTCUSD', 'ETHUSD', 'OIL', 'XAGUSD'];

export function generateEquityHistory(totalDays: number = 90): EquityHistoryPoint[] {
  const data: EquityHistoryPoint[] = [];
  const baseEquity = 1080000;
  let equity = baseEquity;
  let peak = baseEquity;
  let sp500Val = baseEquity;
  let goldVal = baseEquity;
  const now = new Date();

  for (let i = totalDays; i >= 0; i--) {
    const d = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    // Creștere algoritmică Trinity Fleet cu volatilitate controlată
    const gainDelta = Math.floor(Math.random() * 8500) - 2100;
    equity += gainDelta;
    if (equity > peak) peak = equity;

    const dd = parseFloat((((peak - equity) / peak) * 100).toFixed(2));

    // Benchmarks: S&P 500 (creștere mai lentă) și Gold (mișcări de refugiu)
    const spDelta = Math.floor(Math.random() * 4200) - 1800;
    const goldDelta = Math.floor(Math.random() * 5100) - 2000;
    sp500Val += spDelta;
    goldVal += goldDelta;

    const bestSym = TRADED_SYMBOLS[Math.floor(Math.random() * TRADED_SYMBOLS.length)];
    let worstSym = TRADED_SYMBOLS[Math.floor(Math.random() * TRADED_SYMBOLS.length)];
    if (worstSym === bestSym) worstSym = 'USDCHF';

    data.push({
      timestamp: d.toISOString().slice(0, 10),
      equity: Math.round(equity),
      drawdown: -dd,
      sp500: Math.round(sp500Val),
      gold: Math.round(goldVal),
      dailyGain: gainDelta,
      bestTrade: {
        symbol: bestSym,
        profit: Math.floor(Math.random() * 2200) + 950,
      },
      worstTrade: {
        symbol: worstSym,
        loss: Math.floor(Math.random() * 550) + 180,
      },
    });
  }
  return data;
}

export function generate30DayEquityCurve(): EquityHistoryPoint[] {
  return generateEquityHistory(30);
}
