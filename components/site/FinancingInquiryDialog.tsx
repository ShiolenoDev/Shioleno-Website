"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Banknote, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { splitLandingDepartments } from "@/lib/site-data";

const millwork = splitLandingDepartments[0];

export function FinancingInquiryDialog () {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="lg"
        className="w-full min-w-0 shrink-0 sm:min-w-[220px] sm:w-auto"
        onClick={() => setOpen(true)}
      >
        <Banknote className="mr-2 h-4 w-4 opacity-90" aria-hidden />
        Financing
      </Button>
      {mounted &&
        open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-[2px]"
            role="presentation"
            onClick={close}
          >
            <div
              className="relative w-full max-w-lg border border-border/60 bg-card/95 px-8 py-10 text-center shadow-xl supports-[backdrop-filter]:backdrop-blur-sm sm:px-12 sm:py-12"
              role="dialog"
              aria-modal="true"
              aria-labelledby="financing-dialog-title"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 rounded-sm p-1.5 text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2"
                onClick={close}
                aria-label="Close"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
              <h2
                id="financing-dialog-title"
                className="font-display text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl"
              >
                Interested In Financing?
              </h2>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                Please contact us below for information
              </p>
              <dl className="mt-10 space-y-6 text-left">
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Phone
                  </dt>
                  <dd className="mt-2">
                    <a
                      href={`tel:${millwork.phoneTel}`}
                      className="font-display text-lg text-foreground transition-colors hover:text-primary"
                    >
                      {millwork.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.65rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Email
                  </dt>
                  <dd className="mt-2 break-all">
                    <a
                      href={`mailto:${millwork.email}`}
                      className="text-base text-foreground underline-offset-4 transition-colors hover:text-primary"
                    >
                      {millwork.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
