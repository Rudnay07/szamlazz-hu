# Számlázz App



Ez a projekt egy **frontend + backend alkalmazás**, Angular frontendből és Java Spring Boot backendből áll, és teljesen **Docker Compose**-szal futtatható.
Célja egy egyszerű felhasználókezelő rendszer megvalósítása, ahol a felhasználókat létre lehet hozni, módosítani, törölni, illetve listázni lapozott táblázatban.
A felület illeszkedik a Számlázz.hu design hangulatához, és tartalmaz legalább egy újrafelhasználható komponens (pl. button).
---

## Követelmények

- [Docker](https://www.docker.com/get-started) >= 24.x
- [Docker Compose](https://docs.docker.com/compose/) >= 2.x
- Node.js és Angular CLI csak akkor, ha fejlesztői módot akarsz futtatni (nem kötelező a konténerhez)

---

## Projekt struktúra

```szamlazz/
├─ szamlazz-be/ # Backend (Spring Boot)
├─ szamlazz-fe/ # Frontend (Angular)
├─ docker-compose.yml
├─ README.md
```
## Telepítés és indítás

Először klónozd a repót:
```bash
  git clone https://github.com/Rudnay07/szamlazz-hu.git
```
## Indítsd el a konténereket Docker Compose-szal:
```bash 
  docker-compose up -d
```
### Várj, amíg a backend teljesen elindul (a logokban vagy docker-compose ps-szel tudod ellenőrizni).

Ha a backend fut, már tudod használni a frontendet az adatok bevitelére és megjelenítésére.
<a href="http://localhost:4200/" target="_blank" rel="noopener noreferrer">Frontend</a>

## AI használat
```
A fejlesztés során mesterséges intelligencia eszközöket használtam:
Gemini 2.5 Pro: segített a angular kódgenerálásban és hibakeresésben.
AI főként a fejlesztést gyorsította és ötleteket adott, de minden logikát és validációt manuálisan implementáltam.
```