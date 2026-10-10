import { useEffect, useState } from 'react'
import { useT, bi } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Pill, Plus, Printer, Trash2, ShieldAlert } from 'lucide-react'

interface Med {
  id: string
  name: string
  dose: string
  frequency: string
  purpose: string
  prescriber: string
}

interface MedListState {
  patient: string
  allergies: string
  notes: string
  meds: Med[]
}

const empty: MedListState = { patient: '', allergies: '', notes: '', meds: [] }
const STORAGE_KEY = 'guia-salud-medlist'

const blankMed = (): Med => ({
  id: crypto.randomUUID(),
  name: '',
  dose: '',
  frequency: '',
  purpose: '',
  prescriber: '',
})

export default function MedList() {
  const t = useT()
  const [state, setState] = useState<MedListState>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? { ...empty, ...JSON.parse(raw) } : empty
    } catch {
      return empty
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const updateMed = (id: string, field: keyof Med, value: string) =>
    setState((s) => ({ ...s, meds: s.meds.map((m) => (m.id === id ? { ...m, [field]: value } : m)) }))

  const addMed = () => setState((s) => ({ ...s, meds: [...s.meds, blankMed()] }))
  const removeMed = (id: string) => setState((s) => ({ ...s, meds: s.meds.filter((m) => m.id !== id) }))

  return (
    <div className="space-y-6">
      <header className="space-y-2 no-print">
        <h2 className="text-2xl font-bold text-slate-900">
          {t(bi('Mi lista de medicamentos', 'My medication list'))}
        </h2>
        <p className="text-slate-600">
          {t(bi(
            'Complétala, imprímela y llévala a cada cita, farmacia y emergencia. Se guarda automáticamente en este navegador — nada se envía a ningún servidor.',
            'Fill it out, print it, and bring it to every appointment, pharmacy and ER. It saves automatically in this browser — nothing is sent to any server.'
          ))}
        </p>
      </header>

      <div className="flex gap-3 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900 no-print">
        <ShieldAlert className="h-5 w-5 shrink-0 mt-0.5" />
        <p>
          {t(bi(
            'Privacidad: esta información vive solo en tu dispositivo (localStorage). Si usas una computadora compartida, bórrala al terminar.',
            'Privacy: this information lives only on your device (localStorage). On a shared computer, clear it when you’re done.'
          ))}
        </p>
      </div>

      {/* Form */}
      <div className="space-y-4 no-print">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label>{t(bi('Nombre del paciente', 'Patient name'))}</Label>
            <Input
              value={state.patient}
              onChange={(e) => setState((s) => ({ ...s, patient: e.target.value }))}
              placeholder={t(bi('Ej. María Rivera', 'E.g. Maria Rivera'))}
            />
          </div>
          <div className="space-y-1.5">
            <Label>{t(bi('Alergias', 'Allergies'))}</Label>
            <Input
              value={state.allergies}
              onChange={(e) => setState((s) => ({ ...s, allergies: e.target.value }))}
              placeholder={t(bi('Ej. Penicilina, mariscos', 'E.g. Penicillin, shellfish'))}
            />
          </div>
        </div>

        {state.meds.map((med, i) => (
          <Card key={med.id}>
            <CardContent className="pt-5 space-y-3">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 font-medium text-slate-800">
                  <Pill className="h-4 w-4 text-teal-600" />
                  {t(bi(`Medicamento ${i + 1}`, `Medication ${i + 1}`))}
                </p>
                <Button variant="ghost" size="icon" onClick={() => removeMed(med.id)} aria-label={t(bi('Eliminar', 'Remove'))}>
                  <Trash2 className="h-4 w-4 text-slate-400 hover:text-red-600" />
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-1">
                  <Label className="text-xs">{t(bi('Nombre', 'Name'))}</Label>
                  <Input value={med.name} onChange={(e) => updateMed(med.id, 'name', e.target.value)} placeholder={t(bi('Ej. Losartán', 'E.g. Losartan'))} />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">{t(bi('Dosis', 'Dose'))}</Label>
                  <Input value={med.dose} onChange={(e) => updateMed(med.id, 'dose', e.target.value)} placeholder={t(bi('Ej. 50 mg', 'E.g. 50 mg'))} />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">{t(bi('Frecuencia', 'Frequency'))}</Label>
                  <Input value={med.frequency} onChange={(e) => updateMed(med.id, 'frequency', e.target.value)} placeholder={t(bi('Ej. Una vez al día', 'E.g. Once daily'))} />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">{t(bi('Para qué es', 'What it’s for'))}</Label>
                  <Input value={med.purpose} onChange={(e) => updateMed(med.id, 'purpose', e.target.value)} placeholder={t(bi('Ej. Presión alta', 'E.g. High blood pressure'))} />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">{t(bi('Médico que lo recetó', 'Prescribing doctor'))}</Label>
                  <Input value={med.prescriber} onChange={(e) => updateMed(med.id, 'prescriber', e.target.value)} placeholder={t(bi('Ej. Dra. Santos', 'E.g. Dr. Santos'))} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        <div className="flex flex-wrap gap-3">
          <Button onClick={addMed} variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            {t(bi('Añadir medicamento', 'Add medication'))}
          </Button>
          <Button onClick={() => window.print()} className="gap-2 bg-teal-600 hover:bg-teal-700">
            <Printer className="h-4 w-4" />
            {t(bi('Imprimir / guardar PDF', 'Print / save PDF'))}
          </Button>
          {state.meds.length > 0 && (
            <Button
              variant="ghost"
              className="text-red-600"
              onClick={() => {
                if (confirm(t(bi('¿Borrar toda la lista?', 'Clear the whole list?')))) setState(empty)
              }}
            >
              {t(bi('Borrar todo', 'Clear all'))}
            </Button>
          )}
        </div>

        <div className="space-y-1.5">
          <Label>{t(bi('Notas (condiciones, farmacia preferida, contactos)', 'Notes (conditions, preferred pharmacy, contacts)'))}</Label>
          <Input
            value={state.notes}
            onChange={(e) => setState((s) => ({ ...s, notes: e.target.value }))}
            placeholder={t(bi('Ej. Diabética tipo 2 · Farmacia: CVS Mayagüez', 'E.g. Type 2 diabetes · Pharmacy: CVS Mayagüez'))}
          />
        </div>
      </div>

      {/* Print-only view */}
      <div className="print-only hidden">
        <h1>{t(bi('Lista de Medicamentos', 'Medication List'))}</h1>
        <p><strong>{t(bi('Paciente:', 'Patient:'))}</strong> {state.patient}</p>
        <p><strong>{t(bi('Alergias:', 'Allergies:'))}</strong> {state.allergies || '—'}</p>
        <p><strong>{t(bi('Fecha:', 'Date:'))}</strong> {new Date().toLocaleDateString()}</p>
        <table>
          <thead>
            <tr>
              <th>{t(bi('Medicamento', 'Medication'))}</th>
              <th>{t(bi('Dosis', 'Dose'))}</th>
              <th>{t(bi('Frecuencia', 'Frequency'))}</th>
              <th>{t(bi('Propósito', 'Purpose'))}</th>
              <th>{t(bi('Médico', 'Doctor'))}</th>
            </tr>
          </thead>
          <tbody>
            {state.meds.map((m) => (
              <tr key={m.id}>
                <td>{m.name}</td>
                <td>{m.dose}</td>
                <td>{m.frequency}</td>
                <td>{m.purpose}</td>
                <td>{m.prescriber}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {state.notes && <p><strong>{t(bi('Notas:', 'Notes:'))}</strong> {state.notes}</p>}
      </div>
    </div>
  )
}
