import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Check,
    Clock,
    Shield,
    Sparkles,
    Users,
    Smartphone,
    BadgeCheck,
    X,
    HandCoins,
    CreditCard,
    Lock,
    TrendingUp,
    Building2,
    Map,
    MessageSquareText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/**
 * Landing Page (User View) — EMONY (Venta + User Testing)
 *
 * UX goals:
 * - Primary conversion: "Solicitar" (uso real / venta)
 * - Secondary conversion: "User testing" (early access)
 * - Self-segmentation: two CTAs with clear hierarchy
 * - Low-friction forms (short, multi-step), success state
 */

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
};

function cn(...classes: Array<string | false | null | undefined>) {
    return classes.filter(Boolean).join(" ");
}

function ProgressDots({ step, total }: { step: number; total: number }) {
    return (
        <div className="flex items-center gap-2" aria-label={`Step ${step} of ${total}`}>
            {Array.from({ length: total }).map((_, i) => (
                <span
                    key={i}
                    className={cn(
                        "h-2 w-2 rounded-full transition",
                        i + 1 <= step ? "bg-emerald-500" : "bg-muted"
                    )}
                />
            ))}
        </div>
    );
}

function Modal({ open, onClose, children }: any) {
    return (
        <AnimatePresence>
            {open ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 grid place-items-center"
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={onClose}
                        aria-hidden="true"
                    />
                    <motion.div
                        initial={{ opacity: 0, y: 14, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 260, damping: 22 }}
                        className="relative w-[92vw] max-w-xl rounded-3xl border bg-background shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background hover:bg-muted transition"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
}

function MockPhone() {
    return (
        <div className="relative mx-auto w-[340px] max-w-full">
            <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-b from-indigo-500/15 via-emerald-500/10 to-transparent blur-2xl" />
            <div className="rounded-[34px] border bg-background shadow-[0_20px_80px_-30px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between px-5 pt-4">
                    <div className="flex items-center gap-2">
                        <div className="h-9 w-9 rounded-xl bg-indigo-600/10 grid place-items-center">
                            <Sparkles className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold leading-4">Emony</p>
                            <p className="text-xs text-muted-foreground">P2P · simple y seguro</p>
                        </div>
                    </div>
                    <Badge variant="secondary" className="rounded-full">
                        100% digital
                    </Badge>
                </div>

                <div className="px-5 pt-4 pb-5">
                    <div className="rounded-2xl border bg-muted/30 p-4">
                        <p className="text-xs text-muted-foreground">Solicitud rápida</p>
                        <p className="mt-1 text-xl font-semibold">S/ 500 · 30 días</p>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                            <div className="rounded-xl bg-background border p-3">
                                <p className="text-[11px] text-muted-foreground">Paso 1</p>
                                <p className="mt-1 text-sm font-semibold">Solicita</p>
                            </div>
                            <div className="rounded-xl bg-background border p-3">
                                <p className="text-[11px] text-muted-foreground">Paso 2</p>
                                <p className="mt-1 text-sm font-semibold">Conecta</p>
                            </div>
                            <div className="rounded-xl bg-background border p-3">
                                <p className="text-[11px] text-muted-foreground">Paso 3</p>
                                <p className="mt-1 text-sm font-semibold">Recibe</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 grid gap-3">
                        <div className="rounded-2xl border bg-background p-4">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold">Validación</p>
                                <p className="text-xs text-muted-foreground">Inmediata</p>
                            </div>
                            <div className="mt-3 grid gap-2">
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                    <span>Identidad verificada</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                                    <span>Reglas claras</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                                    <span className="text-muted-foreground">Sin bancos de por medio</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border bg-gradient-to-r from-indigo-600 to-emerald-500 p-[1px]">
                            <div className="rounded-2xl bg-background p-4">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-semibold">MVP validado</p>
                                    <Badge className="rounded-full" variant="secondary">
                                        <Users className="mr-1 h-3 w-3" /> +100 testers
                                    </Badge>
                                </div>
                                <p className="mt-1 text-xs text-muted-foreground">
                                    Feedback activo sobre usabilidad, confianza y flujo P2P.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Success({ title, body, onClose }: { title: string; body: string; onClose: () => void }) {
    return (
        <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-2xl bg-emerald-500/10 grid place-items-center">
                    <Check className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </div>
            </div>

            <div className="mt-6 rounded-2xl border bg-muted/30 p-4">
                <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <div>
                        <p className="text-sm font-semibold">¿Qué sigue?</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Te contactaremos con los siguientes pasos por tu canal elegido.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-end">
                <Button onClick={onClose} className="rounded-full">
                    Cerrar
                </Button>
            </div>
        </div>
    );
}

function TesterForm({ onDone }: { onDone: () => void }) {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        ageRange: "",
        device: "",
        contact: "",
        usesFinanceApps: "",
        note: "",
    });

    const totalSteps = 3;

    const canNext = useMemo(() => {
        if (step === 1) return form.name.trim().length >= 2 && !!form.ageRange;
        if (step === 2) return !!form.device && form.contact.trim().length >= 6;
        if (step === 3) return !!form.usesFinanceApps;
        return false;
    }, [step, form]);

    async function submit() {
        setLoading(true);
        await new Promise((r) => setTimeout(r, 900));
        setLoading(false);
        onDone();
    }

    return (
        <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <Badge className="rounded-full" variant="secondary">
                        Early Access · User Testing
                    </Badge>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">Sé tester de Emony</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Toma menos de 1 minuto. No spam. Solo acceso y pruebas reales.
                    </p>
                </div>
                <div className="mt-1">
                    <ProgressDots step={step} total={totalSteps} />
                </div>
            </div>

            <Separator className="my-6" />

            <div className="grid gap-5">
                <AnimatePresence mode="wait">
                    {step === 1 ? (
                        <motion.div
                            key="t1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18 }}
                            className="grid gap-4"
                        >
                            <div className="grid gap-2">
                                <Label htmlFor="t_name">Tu nombre</Label>
                                <Input
                                    id="t_name"
                                    placeholder="Ej. Abel"
                                    value={form.name}
                                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Rango de edad</Label>
                                <Select value={form.ageRange} onValueChange={(v) => setForm((f) => ({ ...f, ageRange: v }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="18-24">18–24</SelectItem>
                                        <SelectItem value="25-30">25–30</SelectItem>
                                        <SelectItem value="31-40">31–40</SelectItem>
                                        <SelectItem value="41+">41+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </motion.div>
                    ) : null}

                    {step === 2 ? (
                        <motion.div
                            key="t2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18 }}
                            className="grid gap-4"
                        >
                            <div className="grid gap-2">
                                <Label>¿Tu equipo?</Label>
                                <Select value={form.device} onValueChange={(v) => setForm((f) => ({ ...f, device: v }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Android o iOS" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="android">Android</SelectItem>
                                        <SelectItem value="ios">iOS</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="t_contact">WhatsApp o Email</Label>
                                <Input
                                    id="t_contact"
                                    placeholder="Ej. +51 999 999 999 o correo@ejemplo.com"
                                    value={form.contact}
                                    onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
                                />
                                <p className="text-xs text-muted-foreground">Lo usaremos solo para darte el acceso.</p>
                            </div>
                        </motion.div>
                    ) : null}

                    {step === 3 ? (
                        <motion.div
                            key="t3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18 }}
                            className="grid gap-4"
                        >
                            <div className="grid gap-2">
                                <Label>¿Usas apps financieras?</Label>
                                <Select value={form.usesFinanceApps} onValueChange={(v) => setForm((f) => ({ ...f, usesFinanceApps: v }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="si">Sí</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="t_note">¿Qué te gustaría que Emony haga mejor?</Label>
                                <Textarea
                                    id="t_note"
                                    placeholder="Ej. validación, claridad de pasos, confianza, costos…"
                                    value={form.note}
                                    onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                                />
                            </div>
                            <div className="rounded-2xl border bg-muted/30 p-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 h-9 w-9 rounded-xl bg-emerald-500/10 grid place-items-center">
                                        <Shield className="h-5 w-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Privacidad primero</p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            Tus datos se usan solo para habilitar el acceso. Puedes solicitar eliminación cuando quieras.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <div className="flex items-center justify-between gap-3 pt-1">
                    <Button variant="ghost" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1 || loading}>
                        Atrás
                    </Button>

                    {step < totalSteps ? (
                        <Button onClick={() => setStep((s) => Math.min(totalSteps, s + 1))} disabled={!canNext || loading} className="rounded-full">
                            Continuar <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <Button onClick={submit} disabled={!canNext || loading} className="rounded-full">
                            {loading ? "Enviando…" : "Quiero ser tester"}
                            <BadgeCheck className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

function LoanRequestForm({ onDone }: { onDone: () => void }) {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        amount: "",
        term: "",
        purpose: "",
        contact: "",
        channel: "whatsapp",
        note: "",
    });

    const totalSteps = 3;

    const canNext = useMemo(() => {
        if (step === 1) return form.amount.trim().length >= 1 && !!form.term;
        if (step === 2) return !!form.purpose;
        if (step === 3) return form.contact.trim().length >= 6;
        return false;
    }, [step, form]);

    async function submit() {
        setLoading(true);
        await new Promise((r) => setTimeout(r, 900));
        setLoading(false);
        onDone();
    }

    return (
        <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <Badge className="rounded-full" variant="secondary">
                        Solicitud · P2P
                    </Badge>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">Solicitar crédito en Emony</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        Define monto y plazo. Te contactamos para continuar el flujo (100% digital).
                    </p>
                </div>
                <div className="mt-1">
                    <ProgressDots step={step} total={totalSteps} />
                </div>
            </div>

            <Separator className="my-6" />

            <div className="grid gap-5">
                <AnimatePresence mode="wait">
                    {step === 1 ? (
                        <motion.div
                            key="l1"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18 }}
                            className="grid gap-4"
                        >
                            <div className="grid gap-2">
                                <Label htmlFor="amount">Monto (S/)</Label>
                                <Input
                                    id="amount"
                                    inputMode="numeric"
                                    placeholder="Ej. 500"
                                    value={form.amount}
                                    onChange={(e) => setForm((f) => ({ ...f, amount: e.target.value }))}
                                />
                                <p className="text-xs text-muted-foreground">Ejemplo del modelo: S/ 500 → S/ 520 (según términos).</p>
                            </div>
                            <div className="grid gap-2">
                                <Label>Plazo</Label>
                                <Select value={form.term} onValueChange={(v) => setForm((f) => ({ ...f, term: v }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="7">7 días</SelectItem>
                                        <SelectItem value="15">15 días</SelectItem>
                                        <SelectItem value="30">30 días</SelectItem>
                                        <SelectItem value="60">60 días</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </motion.div>
                    ) : null}

                    {step === 2 ? (
                        <motion.div
                            key="l2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18 }}
                            className="grid gap-4"
                        >
                            <div className="grid gap-2">
                                <Label>¿Para qué lo necesitas?</Label>
                                <Select value={form.purpose} onValueChange={(v) => setForm((f) => ({ ...f, purpose: v }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="salud">Salud</SelectItem>
                                        <SelectItem value="estudios">Estudios</SelectItem>
                                        <SelectItem value="emergencia">Emergencia</SelectItem>
                                        <SelectItem value="negocio">Negocio</SelectItem>
                                        <SelectItem value="hogar">Hogar</SelectItem>
                                        <SelectItem value="otro">Otro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="l_note">Detalle opcional</Label>
                                <Textarea
                                    id="l_note"
                                    placeholder="Ej. necesito cubrir un pago esta semana…"
                                    value={form.note}
                                    onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                                />
                            </div>
                        </motion.div>
                    ) : null}

                    {step === 3 ? (
                        <motion.div
                            key="l3"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.18 }}
                            className="grid gap-4"
                        >
                            <div className="grid gap-2">
                                <Label>Canal de contacto</Label>
                                <Select value={form.channel} onValueChange={(v) => setForm((f) => ({ ...f, channel: v }))}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Selecciona" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                        <SelectItem value="email">Email</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="l_contact">{form.channel === "email" ? "Email" : "WhatsApp"}</Label>
                                <Input
                                    id="l_contact"
                                    placeholder={form.channel === "email" ? "correo@ejemplo.com" : "+51 999 999 999"}
                                    value={form.contact}
                                    onChange={(e) => setForm((f) => ({ ...f, contact: e.target.value }))}
                                />
                                <p className="text-xs text-muted-foreground">
                                    Te contactamos para continuar el flujo: 1) Solicita 2) Conecta 3) Recibe.
                                </p>
                            </div>

                            <div className="rounded-2xl border bg-muted/30 p-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-0.5 h-9 w-9 rounded-xl bg-indigo-600/10 grid place-items-center">
                                        <Lock className="h-5 w-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Transparente y seguro</p>
                                        <p className="mt-1 text-xs text-muted-foreground">
                                            Comisión por transacción exitosa. Validación segura e inmediata. Sin bancos de por medio.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                <div className="flex items-center justify-between gap-3 pt-1">
                    <Button variant="ghost" onClick={() => setStep((s) => Math.max(1, s - 1))} disabled={step === 1 || loading}>
                        Atrás
                    </Button>

                    {step < totalSteps ? (
                        <Button onClick={() => setStep((s) => Math.min(totalSteps, s + 1))} disabled={!canNext || loading} className="rounded-full">
                            Continuar <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    ) : (
                        <Button onClick={submit} disabled={!canNext || loading} className="rounded-full">
                            {loading ? "Enviando…" : "Continuar solicitud"}
                            <HandCoins className="ml-2 h-4 w-4" />
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

function CTAButtonGroup({ onPrimary, onSecondary }: { onPrimary: () => void; onSecondary: () => void }) {
    return (
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" onClick={onPrimary} className="rounded-full">
                Solicitar crédito ahora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={onSecondary} className="rounded-full">
                Quiero probar (User Testing) <BadgeCheck className="ml-2 h-5 w-5" />
            </Button>
        </div>
    );
}

export default function EmonyLandingHybrid() {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState<"loan" | "tester">("loan");
    const [done, setDone] = useState(false);

    const stats = [
        { label: "100% digital", value: "Rápido", icon: Smartphone },
        { label: "validación", value: "Inmediata", icon: Shield },
        { label: "mvp", value: "+100 UT", icon: Users },
    ];

    const steps = [
        { n: "01", title: "Solicita", desc: "Define cuánto y plazos." },
        { n: "02", title: "Conecta", desc: "Otra persona acepta y envía." },
        { n: "03", title: "Recibe", desc: "Dinero directo a tu cuenta." },
    ];

    const trust = [
        { icon: Shield, title: "Validación segura", desc: "Verificación y reglas claras para operar con confianza." },
        { icon: CreditCard, title: "Sin bancos", desc: "Crédito entre personas, sin procesos burocráticos tradicionales." },
        { icon: TrendingUp, title: "Modelo transparente", desc: "Comisión por transacción exitosa + planes premium." },
    ];

    const roadmap = [
        { year: "2026", points: ["Validar capital semilla", "Escalar suscripciones en Perú"] },
        { year: "2027", points: ["Escalamiento regional", "Licencias B2B y expansión LATAM"] },
    ];

    function openLoan() {
        setMode("loan");
        setDone(false);
        setOpen(true);
    }

    function openTester() {
        window.location.href = "https://cash-back-kappa.vercel.app/";
    }

    const successCopy = useMemo(() => {
        if (mode === "loan") {
            return {
                title: "Solicitud recibida",
                body: "Gracias. Te contactaremos para continuar el flujo de solicitud (100% digital).",
            };
        }
        return {
            title: "¡Listo! Eres parte del user testing",
            body: "Te contactaremos con el acceso a Emony. Gracias por ayudarnos a construir una experiencia simple y segura.",
        };
    }, [mode]);

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Background accents */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute left-[-20%] top-[-15%] h-[520px] w-[520px] rounded-full bg-indigo-500/10 blur-3xl" />
                <div className="absolute right-[-25%] top-[10%] h-[620px] w-[620px] rounded-full bg-emerald-500/10 blur-3xl" />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
                <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                    <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-indigo-600/10 grid place-items-center">
                            <Sparkles className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold leading-4">Emony</p>
                            <p className="text-xs text-muted-foreground">Créditos P2P · simples y seguros</p>
                        </div>
                    </div>

                    <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
                        <a className="hover:text-foreground transition" href="#problema">Problema</a>
                        <a className="hover:text-foreground transition" href="#como">Cómo funciona</a>
                        <a className="hover:text-foreground transition" href="#confianza">Confianza</a>
                        <a className="hover:text-foreground transition" href="#modelo">Modelo</a>
                    </nav>

                    <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="hidden rounded-full sm:inline-flex">
                            Cupos por etapas
                        </Badge>
                        <Button onClick={openLoan} className="rounded-full">
                            Solicitar <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </header>

            <main>
                {/* HERO */}
                <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.35 }}>
                            <Badge className="rounded-full" variant="secondary">
                                <span className="mr-2 inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                                100% digital · sin bancos
                            </Badge>

                            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                                Créditos entre personas, <span className="text-indigo-600">simples</span> y <span className="text-emerald-600">seguros</span>
                            </h1>
                            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                                Más del 60% de peruanos no accede a crédito formal y el resto enfrenta burocracia y altos costos.
                                Emony conecta personas para prestarse entre sí: rápido, claro y con validación segura.
                            </p>

                            <CTAButtonGroup onPrimary={openLoan} onSecondary={openTester} />

                            <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                                    <Shield className="h-3.5 w-3.5" /> Validación segura e inmediata
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                                    <CreditCard className="h-3.5 w-3.5" /> Sin bancos de por medio
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                                    <Users className="h-3.5 w-3.5" /> MVP con +100 pruebas
                                </span>
                            </div>

                            <div className="mt-8 grid grid-cols-3 gap-3">
                                {stats.map((s) => (
                                    <Card key={s.label} className="rounded-2xl">
                                        <CardContent className="p-4">
                                            <div className="flex items-center gap-2">
                                                <s.icon className="h-4 w-4 text-muted-foreground" />
                                                <p className="text-xs text-muted-foreground">{s.label}</p>
                                            </div>
                                            <p className="mt-2 text-lg font-semibold">{s.value}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            transition={{ duration: 0.35, delay: 0.08 }}
                            className="lg:justify-self-end"
                        >
                            <MockPhone />
                        </motion.div>
                    </div>
                </section>

                {/* PROBLEMA / SOLUCIÓN */}
                <section id="problema" className="border-t bg-muted/20">
                    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                        <div className="grid gap-4 lg:grid-cols-2">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.3 }}>
                                <Card className="h-full rounded-3xl">
                                    <CardHeader>
                                        <CardTitle className="text-base">Problema</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground">
                                        <p className="leading-relaxed">
                                            Más del <span className="font-semibold text-foreground">60%</span> de los peruanos no accede a crédito formal,
                                            y quienes sí lo hacen enfrentan procesos burocráticos y altos costos.
                                        </p>
                                        <div className="mt-4 grid gap-2">
                                            {["Procesos lentos", "Altas comisiones", "Poca claridad"].map((t) => (
                                                <div key={t} className="flex items-center gap-2">
                                                    <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                                                    <span>{t}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} transition={{ duration: 0.3, delay: 0.04 }}>
                                <Card className="h-full rounded-3xl">
                                    <CardHeader>
                                        <CardTitle className="text-base">Solución</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground">
                                        <p className="leading-relaxed">
                                            Plataforma que conecta personas para prestarse entre sí:
                                            <span className="font-semibold text-foreground"> 100% digital</span>,
                                            <span className="font-semibold text-foreground"> sin bancos</span>,
                                            con <span className="font-semibold text-foreground">validación segura e inmediata</span>.
                                        </p>
                                        <div className="mt-4 grid gap-2">
                                            {["Rápida y simple", "Reglas claras", "Enfocada en confianza"].map((t) => (
                                                <div key={t} className="flex items-center gap-2">
                                                    <Check className="h-4 w-4 text-emerald-600" />
                                                    <span>{t}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="mt-6">
                                            <Button onClick={openLoan} className="rounded-full">
                                                Solicitar ahora <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CÓMO FUNCIONA */}
                <section id="como" className="border-t">
                    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Producto / Fit</h2>
                                <p className="mt-3 text-muted-foreground">
                                    Un flujo simple en 3 pasos para que el crédito llegue directo a tu cuenta.
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Button variant="outline" onClick={openTester} className="rounded-full">
                                    Ser tester <BadgeCheck className="ml-2 h-4 w-4" />
                                </Button>
                                <Button onClick={openLoan} className="rounded-full">
                                    Solicitar <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        <div className="mt-10 grid gap-4 md:grid-cols-3">
                            {steps.map((s) => (
                                <Card key={s.n} className="rounded-3xl">
                                    <CardContent className="p-6">
                                        <p className="text-xs text-muted-foreground">Paso {s.n}</p>
                                        <p className="mt-1 text-lg font-semibold">{s.title}</p>
                                        <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                                        <div className="mt-4 h-10 w-10 rounded-2xl bg-emerald-500/10 grid place-items-center">
                                            {s.n === "01" ? (
                                                <HandCoins className="h-5 w-5 text-emerald-600" />
                                            ) : s.n === "02" ? (
                                                <MessageSquareText className="h-5 w-5 text-emerald-600" />
                                            ) : (
                                                <Building2 className="h-5 w-5 text-emerald-600" />
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-10 rounded-3xl border bg-muted/30 p-6 sm:p-8">
                            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                                <div className="max-w-2xl">
                                    <p className="text-sm font-semibold">MVP validado con +100 usuarios</p>
                                    <p className="mt-2 text-sm text-muted-foreground">
                                        En pruebas reales con feedback activo sobre usabilidad, confianza y flujo P2P.
                                    </p>
                                </div>
                                <Button onClick={openTester} size="lg" className="rounded-full">
                                    Unirme al user testing <BadgeCheck className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONFIANZA */}
                <section id="confianza" className="border-t bg-muted/20">
                    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Confianza primero</h2>
                            <p className="mt-3 text-muted-foreground">
                                Construimos Emony para que el proceso sea claro, seguro y sin letras pequeñas.
                            </p>
                        </div>

                        <div className="mt-10 grid gap-4 lg:grid-cols-3">
                            {trust.map((t) => (
                                <Card key={t.title} className="rounded-3xl">
                                    <CardHeader>
                                        <div className="h-11 w-11 rounded-2xl bg-indigo-600/10 grid place-items-center">
                                            <t.icon className="h-6 w-6 text-indigo-600" />
                                        </div>
                                        <CardTitle className="mt-3 text-base">{t.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="text-sm text-muted-foreground">{t.desc}</CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-emerald-500 p-[1px]">
                            <div className="rounded-3xl bg-background p-6 sm:p-8">
                                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                                    <div>
                                        <p className="text-sm font-semibold">¿Necesitas crédito hoy?</p>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            Inicia tu solicitud. Es rápido y 100% digital.
                                        </p>
                                    </div>
                                    <Button size="lg" onClick={openLoan} className="rounded-full">
                                        Solicitar crédito <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MODELO */}
                <section id="modelo" className="border-t">
                    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
                        <div className="grid gap-10 lg:grid-cols-2">
                            <div>
                                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Modelo de negocio</h2>
                                <p className="mt-3 text-muted-foreground">
                                    Emony gana con comisión por transacción exitosa y suscripciones premium B2C / B2B.
                                </p>

                                <div className="mt-6 grid gap-4">
                                    <Card className="rounded-3xl">
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <p className="text-sm font-semibold">Ejemplo P2P</p>
                                                    <p className="mt-2 text-sm text-muted-foreground">
                                                        Usuario A presta <span className="font-semibold text-foreground">S/ 500</span> · Usuario B devuelve <span className="font-semibold text-foreground">S/ 520</span>
                                                    </p>
                                                </div>
                                                <div className="h-11 w-11 rounded-2xl bg-emerald-500/10 grid place-items-center">
                                                    <HandCoins className="h-6 w-6 text-emerald-600" />
                                                </div>
                                            </div>
                                            <div className="mt-4 flex flex-wrap gap-2 text-xs text-muted-foreground">
                                                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                                                    <Check className="h-3.5 w-3.5 text-emerald-600" /> Comisión solo si se concreta
                                                </span>
                                                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                                                    <Check className="h-3.5 w-3.5 text-emerald-600" /> Premium para más beneficios
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <div className="flex gap-2">
                                        <Button onClick={openLoan} className="rounded-full">
                                            Solicitar <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Button variant="outline" onClick={openTester} className="rounded-full">
                                            Ser tester <BadgeCheck className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border bg-muted/20 p-6 sm:p-8">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold">Roadmap</p>
                                        <p className="mt-1 text-sm text-muted-foreground">Ejecución por fases</p>
                                    </div>
                                    <div className="h-11 w-11 rounded-2xl bg-indigo-600/10 grid place-items-center">
                                        <Map className="h-6 w-6 text-indigo-600" />
                                    </div>
                                </div>

                                <div className="mt-6 grid gap-4">
                                    {roadmap.map((r) => (
                                        <Card key={r.year} className="rounded-3xl">
                                            <CardContent className="p-6">
                                                <p className="text-sm font-semibold">{r.year}</p>
                                                <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
                                                    {r.points.map((p) => (
                                                        <div key={p} className="flex items-center gap-2">
                                                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                                            <span>{p}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-2xl border bg-background p-4">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 h-9 w-9 rounded-xl bg-emerald-500/10 grid place-items-center">
                                            <BadgeCheck className="h-5 w-5 text-emerald-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">¿Quieres ayudar a mejorar Emony?</p>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                Únete al user testing y deja feedback sobre usabilidad y confianza.
                                            </p>
                                            <div className="mt-3">
                                                <Button variant="outline" onClick={openTester} className="rounded-full">
                                                    Unirme al user testing <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="border-t">
                    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 rounded-xl bg-indigo-600/10 grid place-items-center">
                                    <Sparkles className="h-5 w-5 text-indigo-600" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold leading-4">Emony</p>
                                    <p className="text-xs text-muted-foreground">Créditos P2P, simples y seguros</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                                    <Shield className="h-3.5 w-3.5" /> Seguridad
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                                    <Smartphone className="h-3.5 w-3.5" /> 100% digital
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1">
                                    <Users className="h-3.5 w-3.5" /> +100 UT
                                </span>
                            </div>
                        </div>

                        <Separator className="my-8" />

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Emony.</p>
                            <div className="flex gap-3">
                                <Button variant="outline" className="rounded-full" onClick={openTester}>
                                    Ser tester
                                </Button>
                                <Button className="rounded-full" onClick={openLoan}>
                                    Solicitar
                                </Button>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>

            {/* Modal */}
            <Modal
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
            >
                {!done ? (
                    mode === "loan" ? (
                        <LoanRequestForm
                            onDone={() => {
                                setDone(true);
                            }}
                        />
                    ) : (
                        <TesterForm
                            onDone={() => {
                                setDone(true);
                            }}
                        />
                    )
                ) : (
                    <Success
                        title={successCopy.title}
                        body={successCopy.body}
                        onClose={() => {
                            setOpen(false);
                            setDone(false);
                        }}
                    />
                )}
            </Modal>

            {/* Mobile sticky CTA */}
            <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/85 backdrop-blur md:hidden">
                <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
                    <div className="min-w-0">
                        <p className="text-sm font-semibold leading-4 truncate">Emony P2P</p>
                        <p className="text-xs text-muted-foreground truncate">Solicita o únete al user testing</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={openTester} className="rounded-full">
                            Tester
                        </Button>
                        <Button onClick={openLoan} className="rounded-full">
                            Solicitar <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
