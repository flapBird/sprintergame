"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { siteConfig } from "@/lib/site.config";

export default function GameEmbed() {
  const [state, setState] = useState<"idle" | "loading" | "playing">("idle");
  const [ruffleReady, setRuffleReady] = useState(false);
  const [liked, setLiked] = useState<boolean | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const gameWrapperRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  // Load Ruffle from CDN once
  useEffect(() => {
    if (typeof window === "undefined") return;
    const win = window as any;
    if (win.RufflePlayer) {
      setRuffleReady(true);
      return;
    }
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@ruffle-rs/ruffle";
    script.onload = () => setRuffleReady(true);
    document.head.appendChild(script);
  }, []);

  // Wait for Ruffle to be ready after clicking play
  useEffect(() => {
    if (state === "loading") {
      const checkReady = setInterval(() => {
        if (ruffleReady && (window as any).RufflePlayer) {
          clearInterval(checkReady);
          setState("playing");
        }
      }, 200);
      return () => clearInterval(checkReady);
    }
  }, [state, ruffleReady]);

  // Mount Ruffle player when playing
  useEffect(() => {
    const win = window as any;
    if (state !== "playing" || !containerRef.current || !win.RufflePlayer) return;

    if (playerRef.current) {
      playerRef.current.remove();
    }

    const ruffle = win.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    playerRef.current = player;
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(player);
    player.style.width = "100%";
    player.style.height = "100%";

    player.load({
      url: siteConfig.game.embedUrl,
      allowScriptAccess: true,
      autoplay: "on",
      width: "100%",
      height: "100%",
      backgroundColor: "#000000",
      letterbox: "off",
      forceScale: false,
      scale: "exactFit",
      quality: "high",
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.remove();
        playerRef.current = null;
      }
    };
  }, [state]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handler = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  const handleReload = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.remove();
      playerRef.current = null;
    }
    setState("loading");
  }, []);

  const handleFullscreen = useCallback(() => {
    if (!gameWrapperRef.current) return;
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      gameWrapperRef.current.requestFullscreen();
    }
  }, [isFullscreen]);

  const dispatchArrow = useCallback((type: "keydown" | "keyup", key: "ArrowLeft" | "ArrowRight") => {
    const player = playerRef.current;
    if (!player) return;
    // Ruffle attaches its key listeners to the container inside its shadow root;
    // events dispatched on the host element never reach it.
    const shadowRoot: ShadowRoot | null = player.shadowRoot ?? null;
    const target: HTMLElement =
      (shadowRoot?.querySelector("#container") as HTMLElement | null) ?? player;
    if (type === "keydown") {
      target.focus({ preventScroll: true });
    }
    const keyCode = key === "ArrowLeft" ? 37 : 39;
    const event = new KeyboardEvent(type, {
      key,
      code: key,
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    Object.defineProperty(event, "keyCode", { get: () => keyCode });
    Object.defineProperty(event, "which", { get: () => keyCode });
    target.dispatchEvent(event);
  }, []);

  const pressArrow =
    (key: "ArrowLeft" | "ArrowRight") => (event: ReactPointerEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      dispatchArrow("keydown", key);
    };

  const releaseArrow =
    (key: "ArrowLeft" | "ArrowRight") => (event: ReactPointerEvent<HTMLButtonElement>) => {
      event.preventDefault();
      dispatchArrow("keyup", key);
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
    };

  return (
    <div className="mx-auto w-full max-w-4xl">
      {/* Game wrapper — fullscreen target */}
      <div
        ref={gameWrapperRef}
        className={`overflow-hidden rounded-2xl bg-black shadow-[0_24px_70px_rgba(41,37,36,0.18)] ring-1 ring-black/10 ${isFullscreen ? "flex flex-col justify-center" : ""}`}
        style={isFullscreen ? { height: "100vh" } : {}}
      >
        {/* Fixed-aspect game container */}
        <div
          className="relative w-full bg-gray-100"
          style={{ aspectRatio: siteConfig.game.aspectRatio }}
        >
          {/* ── Idle: Launch screen ── */}
          {state === "idle" && (
            <div
              className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${siteConfig.game.coverImage})` }}
            >
              <div className="absolute inset-0 bg-black/45" />
              <button
                type="button"
                onClick={() => setState("loading")}
                className="btn-play relative z-10 flex min-h-12 items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-heading text-lg font-extrabold text-white shadow-xl hover:bg-primary/90 sm:px-10 sm:py-4 sm:text-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Play Now
              </button>
            </div>
          )}

          {/* ── Loading: Spinner ── */}
          {state === "loading" && (
            <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center gap-4">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
              <p className="text-text-dark/50 text-sm font-medium">
                Loading {siteConfig.game.name}...
              </p>
            </div>
          )}

          {/* ── Playing: Ruffle canvas ── */}
          {state === "playing" && (
            <div
              ref={containerRef}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            />
          )}
        </div>

        {/* ── Game Toolbar ── */}
        <div className="flex min-h-11 items-center justify-between gap-2 bg-[#1a1a2e] px-2 text-sm text-gray-400 sm:px-3">
          <span className="hidden pl-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/45 sm:inline">
            Sprinter · Keyboard game
          </span>
          <div className="ml-auto flex items-center gap-0.5">
          {/* Like */}
          <button
            type="button"
            onClick={() => setLiked(liked === true ? null : true)}
            aria-label="Like this game"
            aria-pressed={liked === true}
            className={`flex min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors hover:bg-white/10 ${liked === true ? "text-green-400" : ""}`}
            title="Like"
          >
            <svg className="w-4 h-4" fill={liked === true ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
          </button>
          {/* Dislike */}
          <button
            type="button"
            onClick={() => setLiked(liked === false ? null : false)}
            aria-label="Dislike this game"
            aria-pressed={liked === false}
            className={`flex min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors hover:bg-white/10 ${liked === false ? "text-red-400" : ""}`}
            title="Dislike"
          >
            <svg className="w-4 h-4 rotate-180" fill={liked === false ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
          </button>

          <span className="w-px h-4 bg-gray-600 mx-1" />

          {/* Reload */}
          <button
            type="button"
            onClick={handleReload}
            aria-label="Reload game"
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
            title="Reload Game"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M23 4v6h-6M1 20v-6h6" />
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
            </svg>
          </button>

          {/* Fullscreen */}
          <button
            type="button"
            onClick={handleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-lg transition-colors hover:bg-white/10"
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              </svg>
            )}
          </button>
          </div>
        </div>

        {/* ── Touch controls (coarse pointers only) ── */}
        <div className="touch-controls grid-cols-2 gap-2 bg-[#1a1a2e] px-2 pb-2">
          <button
            type="button"
            aria-label="Move runner left"
            disabled={state !== "playing"}
            onPointerDown={pressArrow("ArrowLeft")}
            onPointerUp={releaseArrow("ArrowLeft")}
            onPointerCancel={releaseArrow("ArrowLeft")}
            onContextMenu={(event) => event.preventDefault()}
            className="flex min-h-12 touch-none select-none items-center justify-center gap-2 rounded-xl bg-white/10 font-heading text-base font-extrabold text-white transition-colors active:bg-white/25 disabled:opacity-35"
          >
            <span aria-hidden="true" className="text-xl">←</span>
            Left
          </button>
          <button
            type="button"
            aria-label="Move runner right"
            disabled={state !== "playing"}
            onPointerDown={pressArrow("ArrowRight")}
            onPointerUp={releaseArrow("ArrowRight")}
            onPointerCancel={releaseArrow("ArrowRight")}
            onContextMenu={(event) => event.preventDefault()}
            className="flex min-h-12 touch-none select-none items-center justify-center gap-2 rounded-xl bg-white/10 font-heading text-base font-extrabold text-white transition-colors active:bg-white/25 disabled:opacity-35"
          >
            Right
            <span aria-hidden="true" className="text-xl">→</span>
          </button>
        </div>
      </div>

    </div>
  );
}
