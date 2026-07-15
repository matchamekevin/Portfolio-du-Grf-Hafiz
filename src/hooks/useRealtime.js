import { useEffect, useRef, useState } from "react";

export function useRealtime(onUpdate) {
  const [connected, setConnected] = useState(false);
  const wsRef = useRef(null);
  const onUpdateRef = useRef(onUpdate);
  onUpdateRef.current = onUpdate;

  useEffect(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/api/realtime/stream`;
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => setConnected(true);
    ws.onerror = () => setConnected(false);
    ws.onclose = () => setConnected(false);
    ws.onmessage = (e) => {
      try {
        const payload = JSON.parse(e.data);
        if (onUpdateRef.current) onUpdateRef.current(payload);
      } catch {}
    };

    return () => {
      ws.close();
      setConnected(false);
    };
  }, []);

  return connected;
}
