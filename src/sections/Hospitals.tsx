import { useState } from 'react'
import { useT, bi } from '@/lib/i18n'
import { specialtyGroups, regionGroups } from '@/data/content'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Heart, Ribbon, Brain, Baby, Siren, Shield, Wind, Info } from 'lucide-react'

const iconMap: Record<string, typeof Heart> = {
  heart: Heart,
  ribbon: Ribbon,
  brain: Brain,
  baby: Baby,
  siren: Siren,
  shield: Shield,
  lungs: Wind,
}

export default function Hospitals() {
  const t = useT()
  const [active, setActive] = useState(specialtyGroups[0].id)
  const group = specialtyGroups.find((g) => g.id === active)!

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-900">
          {t(bi('Hospitales por especialidad en Puerto Rico', 'Hospitals by specialty in Puerto Rico'))}
        </h2>
        <p className="text-slate-600">
          {t(bi(
            'Guía descriptiva basada en información pública. No es un ranking — el mejor hospital para ti depende de tu plan, tu condición y tu médico.',
            'A descriptive guide based on public information. Not a ranking — the best hospital for you depends on your plan, your condition and your doctor.'
          ))}
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {specialtyGroups.map((g) => {
          const Icon = iconMap[g.icon] ?? Heart
          const selected = g.id === active
          return (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                selected
                  ? 'border-teal-600 bg-teal-600 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:text-teal-700'
              }`}
            >
              <Icon className="h-4 w-4" />
              {t(g.label)}
            </button>
          )
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {group.entries.map((h) => (
          <Card key={h.name}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base leading-snug">{h.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-slate-500">
                <MapPin className="h-4 w-4 shrink-0" />
                {t(h.town)}
              </p>
              {h.phone && (
                <a href={`tel:${h.phone.replace(/[^\d]/g, '')}`} className="flex items-center gap-2 text-teal-700 hover:underline">
                  <Phone className="h-4 w-4 shrink-0" />
                  {h.phone}
                </a>
              )}
              <p className="text-slate-600 leading-relaxed">{t(h.note)}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-slate-900">
          {t(bi('Hospitales generales por región', 'General hospitals by region'))}
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {regionGroups.map((r) => (
            <Card key={r.region.es}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{t(r.region)}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {r.hospitals.map((h) => (
                    <li key={h.name} className="text-sm">
                      <span className="text-slate-800">{h.name}</span>
                      <Badge variant="secondary" className="ml-2 font-normal">{h.town}</Badge>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        <Info className="h-5 w-5 shrink-0 mt-0.5" />
        <p>
          {t(bi(
            'Antes de acudir, verifica que el hospital y el especialista participen en tu plan médico y si necesitas referido o pre-autorización. Información recopilada de fuentes públicas, agosto 2026.',
            'Before going, verify the hospital and specialist participate in your health plan and whether you need a referral or pre-authorization. Compiled from public sources, August 2026.'
          ))}
        </p>
      </div>
    </div>
  )
}
