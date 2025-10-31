"use client";

interface FuturisticImageProps {
  type: 'cartera' | 'analisis' | 'contable' | 'tributario' | 'empresas' | 'actividades' | 'planeacion' | 'reforma' | 'contratos';
  themeColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export function FuturisticImage({ type, themeColors }: FuturisticImageProps) {
  const images = {
    cartera: (
      <svg viewBox="0 0 600 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect x="80" y="250" width="60" height="100" fill="url(#grad1)" filter="url(#glow)" opacity="0.8">
          <animate attributeName="height" values="100;150;100" dur="2s" repeatCount="indefinite" />
          <animate attributeName="y" values="250;200;250" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="170" y="200" width="60" height="150" fill="url(#grad1)" filter="url(#glow)" opacity="0.85">
          <animate attributeName="height" values="150;200;150" dur="2s" begin="0.4s" repeatCount="indefinite" />
          <animate attributeName="y" values="200;150;200" dur="2s" begin="0.4s" repeatCount="indefinite" />
        </rect>
        <rect x="260" y="150" width="60" height="200" fill="url(#grad1)" filter="url(#glow)" opacity="0.9">
          <animate attributeName="height" values="200;250;200" dur="2s" begin="0.8s" repeatCount="indefinite" />
          <animate attributeName="y" values="150;100;150" dur="2s" begin="0.8s" repeatCount="indefinite" />
        </rect>
        <rect x="350" y="100" width="60" height="250" fill="url(#grad1)" filter="url(#glow)" opacity="0.95">
          <animate attributeName="height" values="250;300;250" dur="2s" begin="1.2s" repeatCount="indefinite" />
          <animate attributeName="y" values="100;50;100" dur="2s" begin="1.2s" repeatCount="indefinite" />
        </rect>
        <rect x="440" y="80" width="60" height="270" fill={themeColors.accent} filter="url(#glow)">
          <animate attributeName="height" values="270;320;270" dur="2s" begin="1.6s" repeatCount="indefinite" />
          <animate attributeName="y" values="80;30;80" dur="2s" begin="1.6s" repeatCount="indefinite" />
        </rect>

        <path d="M 110 310 Q 200 235, 290 175 T 470 50"
          stroke={themeColors.accent} strokeWidth="3" fill="none" filter="url(#glow)">
          <animate attributeName="d"
            values="M 110 310 Q 200 235, 290 175 T 470 50;M 110 290 Q 200 215, 290 155 T 470 30;M 110 310 Q 200 235, 290 175 T 470 50"
            dur="2s" repeatCount="indefinite" />
        </path>

        <circle cx="110" cy="310" r="8" fill={themeColors.primary} filter="url(#glow)">
          <animate attributeName="cy" values="310;290;310" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="235" r="8" fill={themeColors.primary} filter="url(#glow)">
          <animate attributeName="cy" values="235;215;235" dur="2s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="290" cy="175" r="8" fill={themeColors.primary} filter="url(#glow)">
          <animate attributeName="cy" values="175;155;175" dur="2s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="380" cy="115" r="8" fill={themeColors.accent} filter="url(#glow)">
          <animate attributeName="cy" values="115;95;115" dur="2s" begin="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="470" cy="50" r="8" fill={themeColors.accent} filter="url(#glow)">
          <animate attributeName="cy" values="50;30;50" dur="2s" begin="1.6s" repeatCount="indefinite" />
        </circle>

        <text x="300" y="380" textAnchor="middle" fill={themeColors.accent} fontSize="18" fontWeight="bold" opacity="0.8">
          Recuperación de Capital
        </text>
      </svg>
    ),
    analisis: (
      <svg viewBox="0 0 600 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad-analisis" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: themeColors.secondary, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: themeColors.accent, stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow-analisis">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <circle cx="300" cy="200" r="120" fill="none" stroke="url(#grad-analisis)" strokeWidth="8" filter="url(#glow-analisis)" opacity="0.3" />
        <circle cx="300" cy="200" r="90" fill="none" stroke="url(#grad-analisis)" strokeWidth="6" filter="url(#glow-analisis)" opacity="0.5" />
        <circle cx="300" cy="200" r="60" fill="none" stroke="url(#grad-analisis)" strokeWidth="4" filter="url(#glow-analisis)" opacity="0.7" />

        <g transform="rotate(0 300 200)">
          <animateTransform attributeName="transform" type="rotate" from="0 300 200" to="360 300 200" dur="20s" repeatCount="indefinite"/>
          <path d="M 300 200 L 300 80 A 120 120 0 0 1 420 200 Z" fill={themeColors.primary} opacity="0.6" filter="url(#glow-analisis)" />
        </g>

        <g transform="rotate(90 300 200)">
          <animateTransform attributeName="transform" type="rotate" from="90 300 200" to="450 300 200" dur="25s" repeatCount="indefinite"/>
          <path d="M 300 200 L 300 80 A 120 120 0 0 1 380 140 Z" fill={themeColors.secondary} opacity="0.7" filter="url(#glow-analisis)" />
        </g>

        <g transform="rotate(180 300 200)">
          <animateTransform attributeName="transform" type="rotate" from="180 300 200" to="540 300 200" dur="30s" repeatCount="indefinite"/>
          <path d="M 300 200 L 300 80 A 120 120 0 0 1 340 95 Z" fill={themeColors.accent} opacity="0.8" filter="url(#glow-analisis)" />
        </g>

        <circle cx="300" cy="200" r="40" fill="url(#grad-analisis)" filter="url(#glow-analisis)">
          <animate attributeName="r" values="40;45;40" dur="2s" repeatCount="indefinite" />
        </circle>

        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const x = 300 + 140 * Math.cos(rad);
          const y = 200 + 140 * Math.sin(rad);
          return (
            <g key={i}>
              <line x1="300" y1="200" x2={x} y2={y} stroke={themeColors.accent} strokeWidth="2" opacity="0.3" />
              <circle cx={x} cy={y} r="6" fill={themeColors.primary} filter="url(#glow-analisis)">
                <animate attributeName="r" values="6;8;6" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}

        <text x="300" y="380" textAnchor="middle" fill={themeColors.primary} fontSize="18" fontWeight="bold" opacity="0.8">
          Dashboard Inteligente
        </text>
      </svg>
    ),
    contable: (
      <svg viewBox="0 0 600 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad-contable" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow-contable">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {[...Array(4)].map((_, row) =>
          [...Array(5)].map((_, col) => {
            const x = 80 + col * 110;
            const y = 60 + row * 80;
            return (
              <g key={`${row}-${col}`}>
                <rect x={x} y={y} width="90" height="60" rx="8"
                  fill="url(#grad-contable)" opacity="0.2" stroke={themeColors.accent} strokeWidth="2" filter="url(#glow-contable)">
                  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" begin={`${(row + col) * 0.2}s`} repeatCount="indefinite" />
                </rect>

                {[...Array(3)].map((_, i) => (
                  <line key={i} x1={x + 10} y1={y + 15 + i * 15} x2={x + 80} y2={y + 15 + i * 15}
                    stroke={themeColors.primary} strokeWidth="2" opacity="0.6">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin={`${(row + col + i) * 0.3}s`} repeatCount="indefinite" />
                  </line>
                ))}
              </g>
            );
          })
        )}

        <path d="M 80 50 Q 300 20, 520 50" stroke={themeColors.accent} strokeWidth="3" fill="none" opacity="0.4" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </path>
        <path d="M 80 140 Q 300 110, 520 140" stroke={themeColors.accent} strokeWidth="3" fill="none" opacity="0.4" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" begin="0.3s" repeatCount="indefinite" />
        </path>
        <path d="M 80 220 Q 300 190, 520 220" stroke={themeColors.accent} strokeWidth="3" fill="none" opacity="0.4" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" begin="0.6s" repeatCount="indefinite" />
        </path>

        <text x="300" y="380" textAnchor="middle" fill={themeColors.primary} fontSize="18" fontWeight="bold" opacity="0.8">
          Estados Financieros
        </text>
      </svg>
    ),
    tributario: (
      <svg viewBox="0 0 600 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad-tributario" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow-tributario">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <path d="M 300 80 L 380 160 L 360 200 L 240 200 L 220 160 Z"
          fill="url(#grad-tributario)" stroke={themeColors.accent} strokeWidth="4" filter="url(#glow-tributario)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
        </path>

        <circle cx="300" cy="140" r="35" fill="none" stroke={themeColors.accent} strokeWidth="4" filter="url(#glow-tributario)">
          <animate attributeName="r" values="35;45;35" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="140" r="55" fill="none" stroke={themeColors.accent} strokeWidth="3" filter="url(#glow-tributario)">
          <animate attributeName="r" values="55;65;55" dur="2s" begin="0.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" begin="0.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="300" cy="140" r="75" fill="none" stroke={themeColors.accent} strokeWidth="2" filter="url(#glow-tributario)">
          <animate attributeName="r" values="75;85;75" dur="2s" begin="1s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="2s" begin="1s" repeatCount="indefinite" />
        </circle>

        <text x="300" y="135" textAnchor="middle" fontSize="32" fontWeight="bold" fill={themeColors.accent} filter="url(#glow-tributario)">✓</text>

        <rect x="150" y="220" width="300" height="120" rx="10" fill="none" stroke="url(#grad-tributario)" strokeWidth="3" filter="url(#glow-tributario)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite" />
        </rect>

        {[...Array(6)].map((_, i) => (
          <line key={i} x1="170" y1={245 + i * 15} x2="430" y2={245 + i * 15}
            stroke={themeColors.primary} strokeWidth="2" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </line>
        ))}

        <text x="300" y="380" textAnchor="middle" fill={themeColors.primary} fontSize="18" fontWeight="bold" opacity="0.8">
          Cumplimiento SII
        </text>
      </svg>
    ),
    empresas: (
      <svg viewBox="0 0 600 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad-empresas" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.accent, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: themeColors.primary, stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow-empresas">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect x="220" y="180" width="160" height="160" fill="url(#grad-empresas)" filter="url(#glow-empresas)">
          <animate attributeName="height" values="160;180;160" dur="3s" repeatCount="indefinite" />
          <animate attributeName="y" values="180;160;180" dur="3s" repeatCount="indefinite" />
        </rect>

        {[...Array(6)].map((_, row) =>
          [...Array(4)].map((_, col) => {
            const x = 235 + col * 35;
            const y = 195 + row * 25;
            return (
              <rect key={`${row}-${col}`} x={x} y={y} width="25" height="15"
                fill={themeColors.secondary} opacity="0.7" filter="url(#glow-empresas)">
                <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin={`${(row + col) * 0.2}s`} repeatCount="indefinite" />
              </rect>
            );
          })
        )}

        <polygon points="300,120 220,180 380,180" fill={themeColors.secondary} filter="url(#glow-empresas)">
          <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
        </polygon>

        <path d="M 150 340 Q 300 250, 450 340" stroke={themeColors.accent} strokeWidth="4" fill="none" filter="url(#glow-empresas)">
          <animate attributeName="d" values="M 150 340 Q 300 250, 450 340;M 150 340 Q 300 230, 450 340;M 150 340 Q 300 250, 450 340" dur="3s" repeatCount="indefinite" />
        </path>

        {[150, 300, 450].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy="340" r="12" fill={themeColors.primary} filter="url(#glow-empresas)">
              <animate attributeName="cy" values="340;320;340" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <path d={`M ${x} 340 L 300 ${180 + i * 20}`} stroke={themeColors.secondary} strokeWidth="2" opacity="0.3" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </path>
          </g>
        ))}

        <text x="300" y="380" textAnchor="middle" fill={themeColors.primary} fontSize="18" fontWeight="bold" opacity="0.8">
          Constitución Legal
        </text>
      </svg>
    ),
    actividades: (
      <svg viewBox="0 0 600 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad-actividades" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow-actividades">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(200, 150)">
          <circle cx="0" cy="0" r="60" fill="none" stroke="url(#grad-actividades)" strokeWidth="8" filter="url(#glow-actividades)">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="4s" repeatCount="indefinite"/>
          </circle>
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x = 50 * Math.cos(angle);
            const y = 50 * Math.sin(angle);
            return (
              <circle key={i} cx={x} cy={y} r="8" fill={themeColors.accent} filter="url(#glow-actividades)">
                <animate attributeName="r" values="8;12;8" dur="1.5s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
              </circle>
            );
          })}
        </g>

        <g transform="translate(400, 150)">
          <circle cx="0" cy="0" r="60" fill="none" stroke="url(#grad-actividades)" strokeWidth="8" filter="url(#glow-actividades)">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="-360 0 0" dur="5s" repeatCount="indefinite"/>
          </circle>
          {[...Array(8)].map((_, i) => {
            const angle = (i * 45 * Math.PI) / 180;
            const x = 50 * Math.cos(angle);
            const y = 50 * Math.sin(angle);
            return (
              <circle key={i} cx={x} cy={y} r="8" fill={themeColors.secondary} filter="url(#glow-actividades)">
                <animate attributeName="r" values="8;12;8" dur="1.5s" begin={`${i * 0.2 + 0.5}s`} repeatCount="indefinite" />
              </circle>
            );
          })}
        </g>

        <g transform="translate(300, 250)">
          <circle cx="0" cy="0" r="45" fill="none" stroke="url(#grad-actividades)" strokeWidth="6" filter="url(#glow-actividades)">
            <animateTransform attributeName="transform" type="rotate" from="0 0 0" to="360 0 0" dur="6s" repeatCount="indefinite"/>
          </circle>
          {[...Array(6)].map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const x = 35 * Math.cos(angle);
            const y = 35 * Math.sin(angle);
            return (
              <circle key={i} cx={x} cy={y} r="6" fill={themeColors.primary} filter="url(#glow-actividades)">
                <animate attributeName="r" values="6;10;6" dur="1.5s" begin={`${i * 0.2 + 1}s`} repeatCount="indefinite" />
              </circle>
            );
          })}
        </g>

        <line x1="200" y1="150" x2="300" y2="250" stroke={themeColors.accent} strokeWidth="3" opacity="0.5" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </line>
        <line x1="400" y1="150" x2="300" y2="250" stroke={themeColors.accent} strokeWidth="3" opacity="0.5" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </line>

        <text x="300" y="380" textAnchor="middle" fill={themeColors.primary} fontSize="18" fontWeight="bold" opacity="0.8">
          Procesos Integrados
        </text>
      </svg>
    ),
    planeacion: (
      <svg viewBox="0 0 600 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad-planeacion" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: themeColors.secondary, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: themeColors.accent, stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow-planeacion">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {[
          { x: 100, y: 80, r: 35 },
          { x: 250, y: 120, r: 40 },
          { x: 400, y: 100, r: 38 },
          { x: 500, y: 160, r: 42 },
          { x: 150, y: 220, r: 36 },
          { x: 350, y: 240, r: 45 },
          { x: 480, y: 280, r: 40 },
        ].map((node, i) => (
          <g key={i}>
            <circle cx={node.x} cy={node.y} r={node.r} fill="url(#grad-planeacion)" opacity="0.6" filter="url(#glow-planeacion)">
              <animate attributeName="r" values={`${node.r};${node.r + 5};${node.r}`} dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <text x={node.x} y={node.y + 5} textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">
              {i + 1}
            </text>
          </g>
        ))}

        {[
          { x1: 100, y1: 80, x2: 250, y2: 120 },
          { x1: 250, y1: 120, x2: 400, y2: 100 },
          { x1: 400, y1: 100, x2: 500, y2: 160 },
          { x1: 100, y1: 80, x2: 150, y2: 220 },
          { x1: 250, y1: 120, x2: 350, y2: 240 },
          { x1: 400, y1: 100, x2: 350, y2: 240 },
          { x1: 500, y1: 160, x2: 480, y2: 280 },
          { x1: 350, y1: 240, x2: 480, y2: 280 },
        ].map((line, i) => (
          <line key={i} x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
            stroke={themeColors.accent} strokeWidth="3" opacity="0.4" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </line>
        ))}

        <circle cx="300" cy="180" r="180" fill="none" stroke={themeColors.primary} strokeWidth="2" opacity="0.2" strokeDasharray="10,5">
          <animate attributeName="r" values="180;190;180" dur="4s" repeatCount="indefinite" />
        </circle>

        <text x="300" y="380" textAnchor="middle" fill={themeColors.primary} fontSize="18" fontWeight="bold" opacity="0.8">
          Estrategia Fiscal
        </text>
      </svg>
    ),
    reforma: (
      <svg viewBox="0 0 600 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad-reforma" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow-reforma">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect x="100" y="100" width="180" height="220" rx="10" fill="url(#grad-reforma)" opacity="0.3" stroke={themeColors.accent} strokeWidth="3" filter="url(#glow-reforma)">
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite" />
        </rect>

        {[...Array(12)].map((_, i) => (
          <line key={i} x1="120" y1={125 + i * 15} x2="260" y2={125 + i * 15}
            stroke={themeColors.primary} strokeWidth="2" opacity="0.6">
            <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
          </line>
        ))}

        <path d="M 280 210 Q 360 180, 440 210" stroke={themeColors.accent} strokeWidth="4" fill="none" filter="url(#glow-reforma)" strokeDasharray="5,5">
          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
        </path>

        <circle cx="360" cy="180" r="25" fill={themeColors.accent} opacity="0.6" filter="url(#glow-reforma)">
          <animate attributeName="r" values="25;30;25" dur="2s" repeatCount="indefinite" />
        </circle>
        <path d="M 350 180 L 358 188 L 370 170" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="320" y="100" width="180" height="220" rx="10" fill="url(#grad-reforma)" opacity="0.5" stroke={themeColors.primary} strokeWidth="3" filter="url(#glow-reforma)">
          <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" begin="0.5s" repeatCount="indefinite" />
        </rect>

        {[...Array(12)].map((_, i) => (
          <line key={i} x1="340" y1={125 + i * 15} x2="480" y2={125 + i * 15}
            stroke={themeColors.secondary} strokeWidth="2" opacity="0.7">
            <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" begin={`${i * 0.1 + 0.5}s`} repeatCount="indefinite" />
          </line>
        ))}

        <text x="300" y="380" textAnchor="middle" fill={themeColors.primary} fontSize="18" fontWeight="bold" opacity="0.8">
          Actualización Estatutos
        </text>
      </svg>
    ),
    contratos: (
      <svg viewBox="0 0 600 400" className="w-full h-full">
        <defs>
          <linearGradient id="grad-contratos" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: themeColors.primary, stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: themeColors.secondary, stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow-contratos">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <rect x="180" y="80" width="240" height="240" rx="10" fill="url(#grad-contratos)" opacity="0.3" stroke={themeColors.accent} strokeWidth="3" filter="url(#glow-contratos)">
          <animate attributeName="opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
        </rect>

        {[...Array(15)].map((_, i) => (
          <line key={i} x1="200" y1={105 + i * 15} x2="400" y2={105 + i * 15}
            stroke={themeColors.primary} strokeWidth="2" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
          </line>
        ))}

        <g transform="translate(300, 200)">
          <circle cx="0" cy="0" r="80" fill="none" stroke={themeColors.accent} strokeWidth="4" filter="url(#glow-contratos)">
            <animate attributeName="r" values="80;90;80" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0.8;0.5" dur="3s" repeatCount="indefinite" />
          </circle>

          <circle cx="0" cy="0" r="60" fill={themeColors.secondary} opacity="0.4" filter="url(#glow-contratos)">
            <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
          </circle>

          <circle cx="-30" cy="-15" r="12" fill="white" opacity="0.9" />
          <circle cx="-25" cy="-15" r="8" fill={themeColors.primary} />

          <circle cx="30" cy="15" r="16" fill="white" opacity="0.9" />
          <circle cx="30" cy="15" r="10" fill={themeColors.primary} />

          <path d="M -50 0 Q 0 -30, 50 0" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
        </g>

        {[...Array(8)].map((_, i) => {
          const angle = (i * 45 * Math.PI) / 180;
          const x1 = 300 + 90 * Math.cos(angle);
          const y1 = 200 + 90 * Math.sin(angle);
          const x2 = 300 + 110 * Math.cos(angle);
          const y2 = 200 + 110 * Math.sin(angle);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={themeColors.accent} strokeWidth="3" opacity="0.6" filter="url(#glow-contratos)">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </line>
          );
        })}

        <text x="300" y="380" textAnchor="middle" fill={themeColors.primary} fontSize="18" fontWeight="bold" opacity="0.8">
          Análisis Legal
        </text>
      </svg>
    ),
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {images[type]}
    </div>
  );
}
