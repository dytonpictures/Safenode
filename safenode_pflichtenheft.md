**Pflichtenheft: SafeNode - Cybersecurity & VPN-Router für den Alltag**

---

### 1. Zielbestimmung

SafeNode soll ein modulares, lokal betreibbares System sein, das NIS2-konforme Awareness-Schulungen bereitstellt, sichere VPN-Funktionalität liefert und eine Cloud-Router-Funktion mit einfachen Verwaltungsfunktionen bietet. Ziel ist es, eine für Endanwender zugängliche, selbst gehostete Sicherheitslösung bereitzustellen. Frühzeitig soll Unterstützung für IPv4 **und** IPv6 gewährleistet werden.

### 2. Produkteinsatz

- Heimnetzwerke
- Homeoffice
- Self-Hosting-Fans
- Kleine Teams (bis 10 Nutzer)

### 3. Produktfunktionen

#### Awareness-Modul:

- Microlearning mit Quiz und interaktiven Inhalten
- Offlinefähige, lokale Inhalte
- DSGVO-konforme Protokollierung des Lernfortschritts
- Strukturierte Module mit Themenkategorien (z. B. Social Engineering, Passwortsicherheit, Phishing, Netzwerkhygiene)

#### VPN-Modul:

- WireGuard-Integration
- GUI zur Peer-Verwaltung, Logs, Routing und DNS-Einstellungen
- Client-Konfigurations-Export (QR, Datei & Autoinstaller für verschiedene OS)
- Unterstützung von IPv4 und IPv6 für VPN-Tunnel sowie Subnetz-Konfiguration

#### Cloud-Router-Modul:

- Firewall-Konfiguration (GeoIP, Port-Blocking)
- Traffic-Shaping (Rate-Limits, Priorisierung)
- DNS-Server & Forwarder (lokal, DoH, DoT)
- Dual-Stack Unterstützung für IPv4 & IPv6 Routing
- Exportfunktion für Logs und Traffic-Statistiken nach DSGVO-konformen Zeitintervallen

#### UI/Frontend:

- Web-GUI mit responsivem Design
- CLI für Power-User
- Benutzerrollen (Admin, User)

### 4. Produktdaten

- Config-Dateien: TOML / YAML
- Benutzer: SQLite oder optional PostgreSQL/MariaDB
- Logging: Text, JSON oder via Loki/Alloy

### 5. Schnittstellen

- REST API für UI, CLI und externe Tools
- MQTT (optional) für Statusmeldungen
- WebSockets für Live-Status & Statistik

### 6. Nichtfunktionale Anforderungen

- Ressourcenschonend (läuft auf Raspberry Pi 4 oder ZimaBlade 2)
- Updates via Docker / auto-update-Service
- Code-Offenheit: AGPL oder MIT Lizenz

### 7. Systemarchitektur

- **Frontend:** SvelteKit / React
- **Backend:** Go (Hauptlogik) + Python (Awareness-Module)
- **Containerisierung:** Docker
- **Plattform:** ARM64 und x86\_64
- **Netzwerk:** Dual-Stack (IPv4 & IPv6) Unterstützung auf allen relevanten Ebenen

### 8. Sicherheitskonzept

- TOTP/2FA Authentifizierung
- Role-Based Access Control
- Fail2Ban, SSH-Hardening
- Security Header in UI

### 9. Entwicklungsumgebung

- Git, Docker, VSCode, GitLab
- CI: GitHub Actions / Drone CI

### 10. Akzeptanzkriterien

- VPN einrichtbar per Web-Oberfläche
- Awareness-Inhalte klickbar, quizbasiert
- Webinterface auf Smartphone bedienbar
- Konfiguration exportierbar (Backup)
- IPv4- und IPv6-fähig im Livebetrieb
- Awareness-Module thematisch kategorisiert
- DSGVO-konformer Export von Log- und Statistikinhalten

---

**Architektur (Modulstruktur)**

1. **UI-Module:**

   - Dashboard
   - Awareness Center
   - VPN Manager
   - Router/Firewall UI

2. **Core-Module:**

   - VPN Engine (WireGuard Wrapper in Go)
   - Awareness-Engine (Python + SQLite)
   - Firewall Manager (iptables/nftables Wrapper)
   - Config Service (TOML/YAML Management)

3. **Interface-Module:**

   - REST API (Go Fiber/Fasthttp)
   - CLI (Go Cobra)
   - WebSocket Layer für Logs & Live-Status

4. **Security-Module:**

   - Auth (JWT + TOTP)
   - RBAC Engine
   - Backup/Restore

5. **DevOps:**

   - Docker Compose Bundles
   - Image-Building
   - Update-Scheduler (optional in Rust für Parallel-Update von Awareness-Modulen)
   - Optional: Caddy Webserver für automatisiertes TLS und Reverse Proxy Handling

---

**Frontend Design (Konzept)**

- **Design-Stil:** Minimalistisch, Dark/Light Toggle, klare UI mit Icons (Lucide)
- **Technologie:** TailwindCSS, SvelteKit/React

**Views:**

1. Login/2FA Screen
2. Dashboard: VPN Status, Lernstand, System Health
3. Awareness-Center: Kurse, Quiz, Scoreboard, Kategorisierte Module
4. VPN-Verwaltung: Peers, Keys, Routing, Logs
5. Firewall & Routing UI: Tabellenbasierte Regelverwaltung
6. Einstellungen: User-Management, Backup, System

---

**Build-Prototyp (v0.1.0)**

**Projektstruktur:**

```
SafeNode/
├── backend/
│   ├── main.go (API Server & VPN Engine)
│   ├── firewall/
│   ├── vpn/
│   ├── config/
│   └── awareness/
│       └── server.py (Microlearning Backend)
├── frontend/
│   ├── src/
│   │   ├── routes/
│   │   ├── components/
│   │   └── lib/
│   └── tailwind.config.ts
├── config/
│   ├── default.toml
│   └── firewall.rules
├── caddy/
│   └── Caddyfile (optional TLS + Reverse Proxy Setup)
├── docker-compose.yml
├── Dockerfile.backend
├── Dockerfile.frontend
└── README.md
```

**Startbefehle:**

```bash
docker-compose up -d
```

**Zugriff lokal:**

- Frontend: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:8080/api](http://localhost:8080/api)
- Optional via Caddy: [https://safenode.local](https://safenode.local)

**Implementierte Dummy-Funktionen:**

- Login mit statischem Token
- Dashboard mit Platzhalter-Daten
- Awareness-Center mit Beispiellektion & Quiz
- Statische WireGuard-Peerliste

**Nächste Schritte:**

- API-Authentifizierung (JWT)
- VPN-Key-Handling
- JSON-basierte Awareness-Lektionen
- Admin-Konfigs & Rollenverwaltung

---

**Weitere Meilensteine:**

- CI/CD, ARM64-Builds, IPv6 DoH-Forwarding, DSGVO-Protokolle, Awareness-Modul-Metriken

