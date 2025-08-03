
export interface VpnServer {
  id: string;
  name: string;
  endpoint: string;
  listenPort: number;
}

export interface VpnPeer {
  id: string;
  serverId: string;
  name: string;
  ipAddress: string;
  publicKey: string;
  latestHandshake: string;
  transfer: {
    received: string;
    sent: string;
  };
  status: 'active' | 'inactive';
}

export interface DnsRecord {
  id: string;
  type: 'A' | 'AAAA' | 'CNAME' | 'MX' | 'TXT';
  name: string;
  value: string;
  ttl: number;
}

export interface Monitor {
  id: string;
  name: string;
  type: 'HTTP(s)' | 'Ping' | 'Port';
  target: string;
  status: 'up' | 'down' | 'paused';
  latency: number; // in ms
  uptime: string; // e.g., '99.98%'
}

export interface AwarenessModule {
  id: string;
  title: string;
  description: string;
  category: 'Phishing' | 'Passwords' | 'Network Security' | 'Social Engineering';
}
