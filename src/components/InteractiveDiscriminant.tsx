/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { Sliders, HelpCircle, CheckCircle2, RotateCcw, Lightbulb } from 'lucide-react';

export const InteractiveDiscriminant: React.FC = () => {
  // Coefficients for y = ax^2 + bx + c
  const [a, setA] = useState<number>(1);
  const [b, setB] = useState<number>(-4);
  const [c, setC] = useState<number>(3);
  const [showSatProblem, setShowSatProblem] = useState<boolean>(true);

  // Discriminant Δ = b^2 - 4ac
  const discriminant = useMemo(() => {
    return b * b - 4 * a * c;
  }, [a, b, c]);

  // Vertex coordinates: h = -b / (2a), k = c - b^2 / (4a)
  const vertex = useMemo(() => {
    if (a === 0) return { h: 0, k: 0 };
    const h = -b / (2 * a);
    const k = a * h * h + b * h + c;
    return { h, k };
  }, [a, b, c]);

  // Real roots calculation
  const roots = useMemo(() => {
    if (a === 0) {
      if (b === 0) return [];
      return [-c / b];
    }
    if (discriminant > 0) {
      const r1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const r2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      return [Math.min(r1, r2), Math.max(r1, r2)];
    } else if (discriminant === 0) {
      return [-b / (2 * a)];
    } else {
      return [];
    }
  }, [a, b, c, discriminant]);

  // SVG dimensions for graphing
  const width = 420;
  const height = 280;
  const xMin = -8;
  const xMax = 8;
  const yMin = -8;
  const yMax = 8;

  const toSvgX = (x: number) => ((x - xMin) / (xMax - xMin)) * width;
  const toSvgY = (y: number) => height - ((y - yMin) / (yMax - yMin)) * height;

  // Generate path data for the parabola
  const pathData = useMemo(() => {
    const points: string[] = [];
    const step = 0.2;
    for (let x = xMin - 1; x <= xMax + 1; x += step) {
      const y = a * x * x + b * x + c;
      const sx = toSvgX(x);
      const sy = toSvgY(y);
      if (points.length === 0) {
        points.push(`M ${sx.toFixed(1)} ${sy.toFixed(1)}`);
      } else {
        points.push(`L ${sx.toFixed(1)} ${sy.toFixed(1)}`);
      }
    }
    return points.join(' ');
  }, [a, b, c]);

  const resetToPreset = (presetA: number, presetB: number, presetC: number) => {
    setA(presetA);
    setB(presetB);
    setC(presetC);
  };

  return (
    <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>DIGITAL SAT MATHEMATICS SIMULATOR</span>
          </div>
          <h4 className="text-xl font-display font-bold text-white">
            Quadratic Discriminant Interactive Grapher
          </h4>
        </div>

        {/* Quick Presets */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => resetToPreset(1, -4, 3)}
            className={`px-2.5 py-1 text-xs font-mono rounded border transition-colors ${
              discriminant > 0 
                ? 'bg-emerald-950/80 text-emerald-400 border-emerald-700' 
                : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
            }`}
          >
            Δ &gt; 0 (2 Roots)
          </button>
          <button
            onClick={() => resetToPreset(1, -6, 9)}
            className={`px-2.5 py-1 text-xs font-mono rounded border transition-colors ${
              discriminant === 0 
                ? 'bg-emerald-950/80 text-emerald-400 border-emerald-700' 
                : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
            }`}
          >
            Δ = 0 (1 Root)
          </button>
          <button
            onClick={() => resetToPreset(1, 2, 5)}
            className={`px-2.5 py-1 text-xs font-mono rounded border transition-colors ${
              discriminant < 0 
                ? 'bg-emerald-950/80 text-emerald-400 border-emerald-700' 
                : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
            }`}
          >
            Δ &lt; 0 (0 Roots)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Active Equation Display */}
          <div className="bg-[#0B0D0C] p-4 rounded-xl border border-neutral-800 flex items-center justify-between">
            <div className="text-xs font-mono text-neutral-400">Current Equation:</div>
            <div className="font-mono text-base font-bold text-white tracking-wide">
              y = {a !== 1 ? (a === -1 ? '-' : a) : ''}x² {b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}x {c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`}
            </div>
          </div>

          {/* Slider for a */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-neutral-400">Coefficient a (Curvature):</span>
              <span className="text-emerald-400 font-bold">{a}</span>
            </div>
            <input
              type="range"
              min="-3"
              max="3"
              step="0.5"
              value={a}
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                setA(val === 0 ? 0.5 : val);
              }}
              className="w-full accent-emerald-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-600">
              <span>-3 (Opens Down)</span>
              <span>+3 (Opens Up)</span>
            </div>
          </div>

          {/* Slider for b */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-neutral-400">Coefficient b (Linear Slope):</span>
              <span className="text-emerald-400 font-bold">{b}</span>
            </div>
            <input
              type="range"
              min="-8"
              max="8"
              step="1"
              value={b}
              onChange={(e) => setB(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-600">
              <span>-8</span>
              <span>0</span>
              <span>+8</span>
            </div>
          </div>

          {/* Slider for c */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-neutral-400">Constant c (y-intercept):</span>
              <span className="text-emerald-400 font-bold">{c}</span>
            </div>
            <input
              type="range"
              min="-8"
              max="8"
              step="1"
              value={c}
              onChange={(e) => setC(parseFloat(e.target.value))}
              className="w-full accent-emerald-500 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-neutral-600">
              <span>-8</span>
              <span>0</span>
              <span>+8</span>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="bg-[#0B0D0C] p-3.5 rounded-xl border border-neutral-800">
              <div className="text-[11px] font-mono text-neutral-400 uppercase">
                Discriminant Δ = b² - 4ac
              </div>
              <div className="text-xl font-mono font-bold mt-1 text-white flex items-baseline gap-2">
                <span>{discriminant}</span>
                <span className="text-xs text-neutral-500 font-normal">
                  ({b}² - 4({a})({c}))
                </span>
              </div>
            </div>

            <div className="bg-[#0B0D0C] p-3.5 rounded-xl border border-neutral-800">
              <div className="text-[11px] font-mono text-neutral-400 uppercase">
                Vertex (h, k)
              </div>
              <div className="text-base font-mono font-bold mt-1 text-emerald-400">
                ({vertex.h.toFixed(2)}, {vertex.k.toFixed(2)})
              </div>
            </div>
          </div>

          {/* Discriminant Interpretation Result */}
          <div className={`p-4 rounded-xl border transition-all ${
            discriminant > 0
              ? 'bg-emerald-950/30 border-emerald-800/60 text-emerald-300'
              : discriminant === 0
              ? 'bg-amber-950/30 border-amber-800/60 text-amber-300'
              : 'bg-rose-950/30 border-rose-800/60 text-rose-300'
          }`}>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold mb-1">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {discriminant > 0 
                  ? 'Two Distinct Real Solutions (2 x-intercepts)' 
                  : discriminant === 0 
                  ? 'Exactly One Real Solution (Parabola vertex is tangent)' 
                  : 'No Real Solutions (Parabola does not touch x-axis)'}
              </span>
            </div>
            <div className="text-xs opacity-80 leading-relaxed font-mono">
              {discriminant > 0 && `Roots at x ≈ ${roots[0]?.toFixed(2)} and x ≈ ${roots[1]?.toFixed(2)}`}
              {discriminant === 0 && `Tangent root at x = ${roots[0]?.toFixed(2)}`}
              {discriminant < 0 && `Vertex k = ${vertex.k.toFixed(2)} lies strictly ${a > 0 ? 'above' : 'below'} the x-axis.`}
            </div>
          </div>

        </div>

        {/* Graph SVG Column */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="relative w-full aspect-[420/280] bg-[#0B0D0C] border border-neutral-800 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
            
            <svg 
              viewBox={`0 0 ${width} ${height}`} 
              className="w-full h-full select-none"
            >
              {/* Coordinate Grid Lines */}
              {[-6, -4, -2, 2, 4, 6].map((x) => (
                <line
                  key={`grid-x-${x}`}
                  x1={toSvgX(x)}
                  y1={0}
                  x2={toSvgX(x)}
                  y2={height}
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="1"
                />
              ))}
              {[-6, -4, -2, 2, 4, 6].map((y) => (
                <line
                  key={`grid-y-${y}`}
                  x1={0}
                  y1={toSvgY(y)}
                  x2={width}
                  y2={toSvgY(y)}
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="1"
                />
              ))}

              {/* Main X Axis */}
              <line
                x1={0}
                y1={toSvgY(0)}
                x2={width}
                y2={toSvgY(0)}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1.5"
              />

              {/* Main Y Axis */}
              <line
                x1={toSvgX(0)}
                y1={0}
                x2={toSvgX(0)}
                y2={height}
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1.5"
              />

              {/* Axis Labels */}
              <text x={width - 15} y={toSvgY(0) - 8} fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">x</text>
              <text x={toSvgX(0) + 8} y={15} fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">y</text>

              {/* Parabola Curve */}
              <path
                d={pathData}
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Vertex Point */}
              {vertex.k >= yMin && vertex.k <= yMax && vertex.h >= xMin && vertex.h <= xMax && (
                <g>
                  <circle
                    cx={toSvgX(vertex.h)}
                    cy={toSvgY(vertex.k)}
                    r="4.5"
                    fill="#34D399"
                    stroke="#0B0D0C"
                    strokeWidth="1.5"
                  />
                  <text
                    x={toSvgX(vertex.h) + 8}
                    y={toSvgY(vertex.k) - 8}
                    fill="#34D399"
                    fontSize="10"
                    fontFamily="monospace"
                  >
                    V({vertex.h.toFixed(1)}, {vertex.k.toFixed(1)})
                  </text>
                </g>
              )}

              {/* Roots markers on X-axis */}
              {roots.map((r, idx) => {
                if (r < xMin || r > xMax) return null;
                return (
                  <g key={`root-${idx}`}>
                    <circle
                      cx={toSvgX(r)}
                      cy={toSvgY(0)}
                      r="5"
                      fill="#F59E0B"
                      stroke="#0B0D0C"
                      strokeWidth="1.5"
                    />
                    <text
                      x={toSvgX(r) - 10}
                      y={toSvgY(0) + 18}
                      fill="#F59E0B"
                      fontSize="10"
                      fontFamily="monospace"
                    >
                      x={r.toFixed(1)}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Graph Legend */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono text-neutral-400 mt-3 px-1">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-0.5 bg-emerald-400 rounded" />
              <span>Parabola</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Vertex (h, k)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Roots (x-intercepts)</span>
            </div>
          </div>

          {/* Quick SAT Hack Card */}
          <div className="w-full mt-4 p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
            <div className="flex items-center gap-2 font-mono text-emerald-400 font-bold mb-1">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>MEMOONA'S DIGITAL SAT SPEED HACK</span>
            </div>
            <p className="leading-relaxed text-neutral-400">
              When an SAT question states that <code className="text-white font-mono">y = ax² + bx + c</code> intersects the line <code className="text-white font-mono">y = d</code> at exactly one point, the line must be the tangent at the vertex! You don't need to graph — simply set <code className="text-emerald-400 font-mono">k = c - b²/(4a) = d</code> and solve for the missing constant in 5 seconds.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
