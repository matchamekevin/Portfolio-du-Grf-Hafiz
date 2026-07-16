import { useEffect, useRef, useState, useCallback } from "react";

export function useRealtime(onUpdate, { role, reconnect = true } = {}) {
  const [connected, setConnected] = useState(false);
  const wsRef = useRef(null);
  const onUpdateRef = useRef(onUpdate);
  const retryRef = useRef(null);
  const retriesRef = useRef(0);
  onUpdateRef.current = onUpdate;

  const connect = useCallback(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const query = role ? `?role=${role}` : "";
    const wsUrl = `${protocol}//${window.location.host}/api/realtime/stream${query}`;

    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setConnected(true);
      retriesRef.current = 0;
    };

    ws.onerror = () => setConnected(false);

    ws.onclose = () => {
      setConnected(false);
      if (reconnect) {
        const delay = Math.min(1000 * 2 ** retriesRef.current, 30000);
        retriesRef.current++;
        retryRef.current = setTimeout(connect, delay);
      }
    };

    ws.onmessage = (e) => {
      try {
        const payload = JSON.parse(e.data);
        if (onUpdateRef.current) onUpdateRef.current(payload);
      } catch {}
    };
  }, [role, reconnect]);

  useEffect(() => {
    connect();
    return () => {
      clearTimeout(retryRef.current);
      retriesRef.current = 0;
      if (wsRef.current) {
        wsRef.current.onclose = null;
        wsRef.current.close();
      }
    };
  }, [connect]);

  return connected;
}
