interface FuturisticBackgroundProps {
  type: 'cartera' | 'analisis' | 'contable' | 'tributario' | 'empresas' | 'actividades' | 'planeacion' | 'reforma' | 'contratos';
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export function FuturisticBackground({ type, themeColors }: FuturisticBackgroundProps) {
  const backgrounds = {
    cartera: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="grad-cartera" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        {/* Gráfico de barras creciente */}
        <rect x="100" y="350" width="80" height="100" fill="url(#grad-cartera)" opacity="0.6">
          <animate attributeName="height" values="100;150;100" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y" values="350;300;350" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="220" y="300" width="80" height="150" fill="url(#grad-cartera)" opacity="0.7">
          <animate attributeName="height" values="150;200;150" dur="3s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="300;250;300" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </rect>
        <rect x="340" y="200" width="80" height="250" fill="url(#grad-cartera)" opacity="0.8">
          <animate attributeName="height" values="250;300;250" dur="3s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="y" values="200;150;200" dur="3s" begin="1s" repeatCount="indefinite" />
        </rect>
        <rect x="460" y="150" width="80" height="300" fill="url(#grad-cartera)" opacity="0.9">
          <animate attributeName="height" values="300;350;300" dur="3s" begin="1.5s" repeatCount="indefinite" />
          <animate attributeName="y" values="150;100;150" dur="3s" begin="1.5s" repeatCount="indefinite" />
        </rect>
        {/* Línea de tendencia */}
        <path d="M 140 400 Q 260 350, 380 250 T 620 100" stroke={themeColors.accent} strokeWidth="4" fill="none" opacity="0.8">
          <animate attributeName="d"
            values="M 140 400 Q 260 350, 380 250 T 620 100;M 140 380 Q 260 330, 380 230 T 620 80;M 140 400 Q 260 350, 380 250 T 620 100"
            dur="4s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
    analisis: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
        <defs>
          <radialGradient id="grad-analisis">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 0.2 }} />
          </radialGradient>
        </defs>
        {/* Dashboard circular */}
        <circle cx="400" cy="300" r="200" fill="none" stroke={themeColors.primary} strokeWidth="2" opacity="0.4">
          <animate attributeName="r" values="200;220;200" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="300" r="150" fill="none" stroke={themeColors.secondary} strokeWidth="2" opacity="0.5">
          <animate attributeName="r" values="150;170;150" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="300" r="100" fill="none" stroke={themeColors.accent} strokeWidth="3" opacity="0.6">
          <animate attributeName="r" values="100;120;100" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Segmentos de datos */}
        <path d="M 400 300 L 400 100 A 200 200 0 0 1 600 300 Z" fill={themeColors.primary} opacity="0.3">
          <animateTransform attributeName="transform" type="rotate" from="0 400 300" to="360 400 300" dur="20s" repeatCount="indefinite" />
        </path>
        <path d="M 400 300 L 600 300 A 200 200 0 0 1 400 500 Z" fill={themeColors.secondary} opacity="0.3">
          <animateTransform attributeName="transform" type="rotate" from="0 400 300" to="360 400 300" dur="15s" repeatCount="indefinite" />
        </path>
        <path d="M 400 300 L 400 500 A 200 200 0 0 1 200 300 Z" fill={themeColors.accent} opacity="0.3">
          <animateTransform attributeName="transform" type="rotate" from="0 400 300" to="360 400 300" dur="25s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
    contable: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="grad-contable" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        {/* Grid de documentos */}
        {[...Array(4)].map((_, row) =>
          [...Array(3)].map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={150 + col * 180}
              y={100 + row * 120}
              width="140"
              height="90"
              fill="url(#grad-contable)"
              rx="8"
              opacity="0.5"
            >
              <animate
                attributeName="opacity"
                values="0.5;0.8;0.5"
                dur={`${3 + row * 0.5}s`}
                begin={`${col * 0.3}s`}
                repeatCount="indefinite"
              />
            </rect>
          ))
        )}
        {/* Líneas de conexión */}
        <line x1="220" y1="145" x2="330" y2="145" stroke={themeColors.accent} strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="220" y1="265" x2="330" y2="265" stroke={themeColors.accent} strokeWidth="2" opacity="0.4" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </line>
      </svg>
    ),
    tributario: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="grad-tributario" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 0.7 }} />
            <stop offset="50%" style={{ stopColor: themeColors.secondary, stopOpacity: 0.5 }} />
            <stop offset="100%" style={{ stopColor: themeColors.accent, stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        {/* Escudo legal */}
        <path d="M 400 100 L 500 150 L 500 350 Q 500 450, 400 500 Q 300 450, 300 350 L 300 150 Z" fill="url(#grad-tributario)" opacity="0.5">
          <animate attributeName="d"
            values="M 400 100 L 500 150 L 500 350 Q 500 450, 400 500 Q 300 450, 300 350 L 300 150 Z;M 400 90 L 510 145 L 510 355 Q 510 460, 400 510 Q 290 460, 290 355 L 290 145 Z;M 400 100 L 500 150 L 500 350 Q 500 450, 400 500 Q 300 450, 300 350 L 300 150 Z"
            dur="4s" repeatCount="indefinite" />
        </path>
        {/* Checkmark */}
        <path d="M 350 300 L 380 330 L 450 250" stroke={themeColors.primary} strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.7">
          <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="2s" repeatCount="indefinite" />
        </path>
        {/* Círculos de protección */}
        <circle cx="400" cy="300" r="180" fill="none" stroke={themeColors.accent} strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="180;200;180" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="400" cy="300" r="220" fill="none" stroke={themeColors.secondary} strokeWidth="1" opacity="0.2">
          <animate attributeName="r" values="220;240;220" dur="4s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    empresas: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="grad-empresas" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        {/* Edificio corporativo */}
        <rect x="300" y="150" width="200" height="400" fill="url(#grad-empresas)" opacity="0.5">
          <animate attributeName="height" values="400;420;400" dur="5s" repeatCount="indefinite" />
          <animate attributeName="y" values="150;130;150" dur="5s" repeatCount="indefinite" />
        </rect>
        {/* Ventanas */}
        {[...Array(5)].map((_, row) =>
          [...Array(3)].map((_, col) => (
            <rect
              key={`window-${row}-${col}`}
              x={320 + col * 50}
              y={180 + row * 70}
              width="30"
              height="40"
              fill={themeColors.accent}
              opacity="0.4"
            >
              <animate
                attributeName="opacity"
                values="0.4;0.8;0.4"
                dur="2s"
                begin={`${(row + col) * 0.2}s`}
                repeatCount="indefinite"
              />
            </rect>
          ))
        )}
        {/* Líneas de crecimiento */}
        <path d="M 150 500 L 250 400 L 350 300 L 450 200 L 550 100" stroke={themeColors.primary} strokeWidth="3" fill="none" opacity="0.6" strokeDasharray="10,5">
          <animate attributeName="stroke-dashoffset" from="0" to="15" dur="1s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
    actividades: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
        <defs>
          <radialGradient id="grad-actividades">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: themeColors.accent, stopOpacity: 0.1 }} />
          </radialGradient>
        </defs>
        {/* Engranajes */}
        <g transform="translate(300, 250)">
          <circle cx="0" cy="0" r="80" fill="url(#grad-actividades)" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="10s" repeatCount="indefinite" />
          </circle>
          {[...Array(8)].map((_, i) => (
            <rect
              key={i}
              x="-10"
              y="-90"
              width="20"
              height="20"
              fill={themeColors.secondary}
              opacity="0.6"
              transform={`rotate(${i * 45})`}
            >
              <animateTransform attributeName="transform" type="rotate" from={`${i * 45}`} to={`${i * 45 + 360}`} dur="10s" repeatCount="indefinite" />
            </rect>
          ))}
        </g>
        <g transform="translate(500, 300)">
          <circle cx="0" cy="0" r="60" fill="url(#grad-actividades)" opacity="0.5">
            <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="8s" repeatCount="indefinite" />
          </circle>
          {[...Array(6)].map((_, i) => (
            <rect
              key={i}
              x="-8"
              y="-70"
              width="16"
              height="16"
              fill={themeColors.accent}
              opacity="0.6"
              transform={`rotate(${i * 60})`}
            >
              <animateTransform attributeName="transform" type="rotate" from={`${i * 60 + 360}`} to={`${i * 60}`} dur="8s" repeatCount="indefinite" />
            </rect>
          ))}
        </g>
        {/* Rayo de inicio */}
        <path d="M 400 100 L 380 180 L 420 180 L 400 260" stroke={themeColors.primary} strokeWidth="6" fill="none" opacity="0.7">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
    planeacion: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="grad-planeacion" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        {/* Red de planificación */}
        {[...Array(4)].map((_, row) =>
          [...Array(5)].map((_, col) => (
            <circle
              key={`node-${row}-${col}`}
              cx={150 + col * 130}
              cy={150 + row * 100}
              r="15"
              fill="url(#grad-planeacion)"
              opacity="0.6"
            >
              <animate
                attributeName="r"
                values="15;20;15"
                dur="2s"
                begin={`${(row + col) * 0.1}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))
        )}
        {/* Conexiones */}
        {[...Array(4)].map((_, row) =>
          [...Array(4)].map((_, col) => (
            <line
              key={`line-h-${row}-${col}`}
              x1={165 + col * 130}
              y1={150 + row * 100}
              x2={135 + (col + 1) * 130}
              y2={150 + row * 100}
              stroke={themeColors.accent}
              strokeWidth="2"
              opacity="0.4"
            />
          ))
        )}
        {/* Flechas de flujo */}
        <path d="M 400 50 L 400 150" stroke={themeColors.primary} strokeWidth="4" markerEnd="url(#arrowhead)" opacity="0.6">
          <animate attributeName="stroke-dasharray" from="0,100" to="100,0" dur="2s" repeatCount="indefinite" />
        </path>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <polygon points="0 0, 10 5, 0 10" fill={themeColors.primary} />
          </marker>
        </defs>
      </svg>
    ),
    reforma: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="grad-reforma" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 0.2 }} />
          </linearGradient>
        </defs>
        {/* Documento transformándose */}
        <g transform="translate(250, 200)">
          <rect x="0" y="0" width="120" height="160" fill="url(#grad-reforma)" rx="8" opacity="0.5">
            <animate attributeName="width" values="120;140;120" dur="3s" repeatCount="indefinite" />
          </rect>
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1="20"
              y1={30 + i * 20}
              x2="100"
              y2={30 + i * 20}
              stroke={themeColors.accent}
              strokeWidth="2"
              opacity="0.5"
            >
              <animate attributeName="x2" values="100;110;100" dur="3s" repeatCount="indefinite" />
            </line>
          ))}
        </g>
        {/* Flecha de transformación */}
        <path d="M 400 280 L 450 280" stroke={themeColors.primary} strokeWidth="6" markerEnd="url(#arrow-reforma)" opacity="0.7">
          <animate attributeName="d" values="M 400 280 L 450 280;M 410 280 L 460 280;M 400 280 L 450 280" dur="2s" repeatCount="indefinite" />
        </path>
        <defs>
          <marker id="arrow-reforma" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <polygon points="0 0, 10 5, 0 10" fill={themeColors.primary} />
          </marker>
        </defs>
        {/* Documento renovado */}
        <g transform="translate(480, 200)">
          <rect x="0" y="0" width="120" height="160" fill="url(#grad-reforma)" rx="8" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
          </rect>
          <circle cx="60" cy="80" r="30" stroke={themeColors.primary} strokeWidth="3" fill="none">
            <animate attributeName="r" values="30;35;30" dur="2s" repeatCount="indefinite" />
          </circle>
          <path d="M 50 80 L 56 86 L 70 72" stroke={themeColors.primary} strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    ),
    contratos: (
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 600">
        <defs>
          <linearGradient id="grad-contratos" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 0.7 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        {/* Contrato central */}
        <rect x="300" y="150" width="200" height="300" fill="url(#grad-contratos)" rx="10" opacity="0.5" />
        {/* Líneas de texto */}
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="320"
            y1={180 + i * 22}
            x2="480"
            y2={180 + i * 22}
            stroke={themeColors.accent}
            strokeWidth="2"
            opacity="0.4"
          >
            <animate
              attributeName="opacity"
              values="0.4;0.7;0.4"
              dur="3s"
              begin={`${i * 0.1}s`}
              repeatCount="indefinite"
            />
          </line>
        ))}
        {/* Lupa de análisis */}
        <g transform="translate(550, 250)">
          <circle cx="0" cy="0" r="50" stroke={themeColors.primary} strokeWidth="6" fill="none" opacity="0.7">
            <animate attributeName="r" values="50;55;50" dur="2s" repeatCount="indefinite" />
          </circle>
          <line x1="35" y1="35" x2="60" y2="60" stroke={themeColors.primary} strokeWidth="8" strokeLinecap="round" opacity="0.7" />
          {/* Checkmark dentro de la lupa */}
          <path d="M -15 0 L -5 10 L 15 -10" stroke={themeColors.secondary} strokeWidth="4" fill="none" strokeLinecap="round" />
        </g>
        {/* Escudo de seguridad */}
        <path d="M 200 280 L 230 300 L 230 380 Q 230 420, 200 440 Q 170 420, 170 380 L 170 300 Z" fill={themeColors.accent} opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
        </path>
      </svg>
    ),
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {backgrounds[type]}
    </div>
  );
}
