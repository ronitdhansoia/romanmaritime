import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type {
  GeometryCollection as TopoGeometryCollection,
  Topology,
} from "topojson-specification";
import world from "world-atlas/countries-110m.json";

const topology = world as unknown as Topology<{
  countries: TopoGeometryCollection;
}>;
const countries = feature(
  topology,
  topology.objects.countries,
) as FeatureCollection<Geometry, { name: string }>;

const VIEW_W = 800;
const VIEW_H = 500;

const projection = geoMercator()
  .center([60, 22])
  .scale(1050)
  .translate([VIEW_W / 2, VIEW_H / 2]);

const pathGen = geoPath(projection);

type Port = {
  name: string;
  coords: [number, number];
  label: string;
  labelAbove?: boolean;
};

const ports: Port[] = [
  {
    name: "DUBAI",
    coords: [55.2708, 25.2048],
    label: "25°N · 55°E",
    labelAbove: true,
  },
  {
    name: "GUJARAT",
    coords: [71.5724, 22.2587],
    label: "22°N · 71°E",
    labelAbove: true,
  },
  {
    name: "MUMBAI",
    coords: [72.8777, 19.076],
    label: "18°N · 72°E",
    labelAbove: false,
  },
];

export default function WorldMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Map of the Arabian Sea showing Dubai, Gujarat, and Mumbai"
    >
      <g
        fill="currentColor"
        fillOpacity={0.055}
        stroke="currentColor"
        strokeOpacity={0.38}
        strokeWidth={0.5}
        strokeLinejoin="round"
      >
        {countries.features.map((f, i) => {
          const d = pathGen(f);
          if (!d) return null;
          return <path key={(f.id as string | number | undefined) ?? i} d={d} />;
        })}
      </g>

      {ports.map((p) => {
        const projected = projection(p.coords);
        if (!projected) return null;
        const [x, y] = projected;
        const labelY = p.labelAbove ? y - 22 : y + 34;
        const coordY = p.labelAbove ? y + 32 : y - 20;
        return (
          <g key={p.name}>
            <circle
              cx={x}
              cy={y}
              r={11}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.28}
            />
            <circle cx={x} cy={y} r={4} fill="currentColor" />
            <text
              x={x}
              y={labelY}
              textAnchor="middle"
              fontFamily="var(--font-inter), sans-serif"
              fontSize={10}
              style={{ letterSpacing: "3px" }}
              fill="currentColor"
            >
              {p.name}
            </text>
            <text
              x={x}
              y={coordY}
              textAnchor="middle"
              fontFamily="var(--font-cormorant), serif"
              fontSize={13}
              fontStyle="italic"
              fill="currentColor"
              fillOpacity={0.55}
            >
              {p.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
