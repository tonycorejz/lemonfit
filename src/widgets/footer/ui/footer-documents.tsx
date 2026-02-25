'use client';

import { useMemo, useState } from "react";
import { FileText } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { FooterDocumentData } from "../model/footer-documents-data";

type FooterDocumentsProps = {
  documents: FooterDocumentData[];
};

const DOCUMENT_LABEL = "\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442";
const CLOSE_LABEL = "\u0417\u0430\u043a\u0440\u044b\u0442\u044c";

export const FooterDocuments: React.FC<FooterDocumentsProps> = ({ documents }) => {
  const [openName, setOpenName] = useState<string | null>(null);

  const openDocument = useMemo(
    () => documents.find((document) => document.name === openName) ?? null,
    [documents, openName]
  );

  return (
    <>
      <div className="mb-3 flex w-full flex-wrap items-center justify-center gap-2">
        {documents.map((document) => (
          <Button
            key={document.name}
            type="button"
            variant="outline"
            size="sm"
            className="h-auto border-2 border-[#24A746] py-2 text-[#24A746] hover:bg-[#24A746] hover:text-white"
            onClick={() => setOpenName(document.name)}
          >
            <FileText />
            {document.title}
          </Button>
        ))}
      </div>

      <Dialog open={Boolean(openDocument)} onOpenChange={(open) => !open && setOpenName(null)}>
        <DialogContent className="w-[95vw] max-w-3xl bg-white">
          <DialogHeader>
            <DialogTitle>{openDocument?.title ?? DOCUMENT_LABEL}</DialogTitle>
          </DialogHeader>

          <div className="max-h-[70vh] overflow-y-auto rounded-md border p-4 text-sm whitespace-pre-wrap">
            <p>{openDocument?.content}</p>
          </div>

          <div className="flex justify-end">
            <Button type="button" variant="outline" onClick={() => setOpenName(null)}>
              {CLOSE_LABEL}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
