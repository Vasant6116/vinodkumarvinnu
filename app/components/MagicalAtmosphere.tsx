// Global subtle magical atmosphere: floating dust motes + cinematic vignette.
// pointer-events: none throughout — zero interference with any interactive element.

const DUST: { id: number; x: number; size: number; dur: number; delay: number }[] = [
  { id: 0,  x: 4,   size: 1.5, dur: 11, delay: 0     },
  { id: 1,  x: 11,  size: 2.5, dur: 14, delay: -3    },
  { id: 2,  x: 19,  size: 1.0, dur: 9,  delay: -7    },
  { id: 3,  x: 27,  size: 2.0, dur: 13, delay: -1.5  },
  { id: 4,  x: 34,  size: 1.5, dur: 16, delay: -5    },
  { id: 5,  x: 42,  size: 2.5, dur: 10, delay: -9    },
  { id: 6,  x: 50,  size: 1.5, dur: 12, delay: -2    },
  { id: 7,  x: 57,  size: 2.0, dur: 15, delay: -6    },
  { id: 8,  x: 65,  size: 1.0, dur: 8,  delay: -10   },
  { id: 9,  x: 72,  size: 2.5, dur: 13, delay: -3.5  },
  { id: 10, x: 80,  size: 1.5, dur: 11, delay: -7.5  },
  { id: 11, x: 88,  size: 2.0, dur: 14, delay: -1    },
  { id: 12, x: 95,  size: 1.0, dur: 9,  delay: -5.5  },
  { id: 13, x: 7,   size: 2.0, dur: 16, delay: -8    },
  { id: 14, x: 23,  size: 1.5, dur: 10, delay: -4    },
  { id: 15, x: 39,  size: 3.0, dur: 13, delay: -0.5  },
  { id: 16, x: 55,  size: 1.0, dur: 11, delay: -6    },
  { id: 17, x: 75,  size: 2.0, dur: 15, delay: -2.5  },
  { id: 18, x: 91,  size: 1.5, dur: 9,  delay: -4.5  },
  { id: 19, x: 16,  size: 2.5, dur: 12, delay: -9.5  },
];

export function MagicalAtmosphere() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 2 }}
      aria-hidden="true"
    >
      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 48%, rgba(0,0,0,0.32) 100%)",
        }}
      />

      {/* Warm edge glow — faint amber corners */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(180,120,10,0.06) 0%, transparent 55%), " +
            "radial-gradient(ellipse at 100% 0%, rgba(180,120,10,0.05) 0%, transparent 50%)",
          animation: "edgeGlow 6s ease-in-out infinite",
        }}
      />

      {/* Floating dust motes */}
      {DUST.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: "0",
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "rgba(212,175,55,0.65)",
            boxShadow: `0 0 ${p.size * 2}px rgba(212,175,55,0.4)`,
            animation: `dustFloat ${p.dur}s ${p.delay}s infinite linear`,
          }}
        />
      ))}
    </div>
  );
}
