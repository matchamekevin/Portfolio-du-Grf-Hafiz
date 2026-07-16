import { createContext, useContext, useEffect, useRef, useCallback } from "react";

const RealtimeContext = createContext(null);

export function RealtimeProvider({ role, children }) {
  const listenersRef = useRef(new Set());
  const wsRef = useRef(null);
  const retryRef = useRef(null);
  const retriesRef = useRef(0);

  const subscribe = useCallback((cb) => {
    listenersRef.current.add(cb);
    return () => listenersRef.current.delete(cb);
  }, []);

  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const query = role ? `?role=${role}` : "";
    const wsUrl = `${protocol}//${window.location.host}/api/realtime/stream${query}`;

    function connect() {
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onopen = () => { retriesRef.current = 0; };

      ws.onclose = () => {
        const delay = Math.min(1000 * 2 ** retriesRef.current, 30000);
        retriesRef.current++;
        retryRef.current = setTimeout(connect, delay);
      };

      ws.onmessage = (e) => {
        try {
          const payload = JSON.parse(e.data);
          for (const cb of listenersRef.current) cb(payload);
        } catch {}
      };
    }

    connect();

    return () => {
      clearTimeout(retryRef.current);
      retriesRef.current = 0;
      if (wsRef.current) {
        wsRef.current.onclose = null;
        wsRef.current.close();
      }
    };
  }, [role]);

  return (
    <RealtimeContext.Provider value={subscribe}>
      {children}
    </RealtimeContext.Provider>
  );
}

export function useRealtime(onUpdate) {
  const subscribe = useContext(RealtimeContext);
  const onUpdateRef = useRef(onUpdate);
  onUpdateRef.current = onUpdate;

  useEffect(() => {
    if (!subscribe) return;
    return subscribe((payload) => {
      if (onUpdateRef.current) onUpdateRef.current(payload);
    });
  }, [subscribe]);
}
