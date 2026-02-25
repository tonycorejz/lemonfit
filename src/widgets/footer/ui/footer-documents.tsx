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

const DOCUMENT_LABEL = "Документ";
const CLOSE_LABEL = "Закрыть";

export const FooterDocuments: React.FC<FooterDocumentsProps> = ({ documents }) => {
  const [openName, setOpenName] = useState<string | null>(null);

  const formatTitle = (title: string) => title.toLocaleLowerCase("ru-RU");

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
            className="h-auto w-full max-w-[calc(100vw-3rem)] min-w-0 border-2 border-[#24A746] py-2 text-[#24A746] hover:bg-[#24A746] hover:text-white sm:w-auto sm:max-w-none"
            onClick={() => setOpenName(document.name)}
          >
            <FileText />
            <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
              {formatTitle(document.title)}
            </span>
          </Button>
        ))}
      </div>

      <Dialog open={Boolean(openDocument)} onOpenChange={(open) => !open && setOpenName(null)}>
        <DialogContent className="w-[95vw] max-w-3xl bg-white">
          <DialogHeader>
            <DialogTitle>{openDocument ? formatTitle(openDocument.title) : DOCUMENT_LABEL}</DialogTitle>
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
