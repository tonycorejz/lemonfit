"use client";

import { useEffect, useRef } from "react";

const FIT_SCRIPT_SRC = "https://reservi.ru/widget-fit1c.v2/js/config.js";
const FIT_SALON_ID = "288a1229-2774-4bdf-be32-76685b618ade";

type Fit1CWidgetKind = "lk" | "schedule";

type Fit1CWidgetProps = {
  kind: Fit1CWidgetKind;
};

export function Fit1CWidget({ kind }: Fit1CWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Сет для хранения файлов (стилей/скриптов) добавленных виджетом, чтобы их можно было зачистить
    const trackedExternalNodes = new Set<Element>();

    // Подчищаем любой мусор на случай горячей перезагрузки (Hot-reload)
    document.querySelectorAll(".main_rz, [data-fit-cabinet], footer.cont-f_rz").forEach((el) => {
      el.remove();
    });

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (!(node instanceof Element)) continue;

          // Отслеживаем скрипты и стили для последующего удаления
          if (
            (node instanceof HTMLScriptElement && node.src.includes("reservi.ru")) ||
            (node instanceof HTMLLinkElement && node.href.includes("reservi.ru"))
          ) {
            trackedExternalNodes.add(node);
          }

          // Если узел добавлен напрямую в BODY - ловим его
          if (mutation.target === document.body) {
            // Проверяем, относится ли этот узел к верстке 1С
            const isWidgetElement =
              node.matches(".main_rz, [data-fit-cabinet], footer.cont-f_rz") ||
              node.querySelector(".main_rz, [data-fit-cabinet], .cont-f_rz");

            if (isWidgetElement) {
              // Переносим элемент из `body` внутрь нашего React-контролируемого контейнера!
              container.appendChild(node);
            }
          }
        }
      }
    });

    // Слушаем body (для верстки виджета) и head (для загрузки стилей/js)
    observer.observe(document.body, { childList: true });
    observer.observe(document.head, { childList: true });

    // Устанавливаем изначальные плейсхолдеры, которые ожидает виджет для старта
    const placeholder = document.createElement("div");
    if (kind === "lk") {
      placeholder.setAttribute("data-get-fit-index-lk", "");
    } else {
      placeholder.setAttribute("data-fit1c-calendar", "");
      placeholder.innerHTML = 'Загрузка расписания <a href="https://www.fitness1c.ru">1С:Фитнес Клуб</a>...';
    }
    container.appendChild(placeholder);

    // Подчищаем глобальные переменные на случай предыдущего рендеринга
    // @ts-ignore
    if (window.Fit) delete window.Fit;
    // @ts-ignore
    if (window.Fit1CApi) delete window.Fit1CApi;

    // Подключаем основной скрипт 1С
    const configScript = document.createElement("script");
    configScript.src = FIT_SCRIPT_SRC;
    configScript.async = true;
    configScript.dataset.fitSalonId = FIT_SALON_ID;
    document.head.appendChild(configScript);
    trackedExternalNodes.add(configScript);

    return () => {
      observer.disconnect();

      // При размонтировании (когда уходим со страницы), возвращаем все в исходный вид:
      container.innerHTML = ""; // очищаем контейнер виджета

      trackedExternalNodes.forEach((node) => {
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }
      });

      document.querySelectorAll(".main_rz, [data-fit-cabinet], footer.cont-f_rz").forEach((node) => {
        node.remove();
      });

      // @ts-ignore
      delete window.Fit;
      // @ts-ignore
      delete window.Fit1CApi;
    };
  }, [kind]);

  return <div ref={containerRef} className="fit1c-widget-wrapper" style={{ width: "100%", minHeight: "500px" }} />;
}
