# Laravel + React + Docker

## Requirements

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/downloads)

> You don't need PHP, Composer, Node.js or MySQL installed locally.

## Setup (first time)

Start Docker Desktop, then run:

```powershell
git clone https://github.com/YOUR-USERNAME/laravel-react-docker.git
cd laravel-react-docker

copy src\.env.example src\.env
docker compose up -d --build
docker compose exec app composer install
docker compose exec app php artisan key:generate
docker compose exec app php artisan migrate
```

> Clone into a folder outside OneDrive with no spaces in the path (e.g., `C:\Projects`).

## Access

| Service | URL |
| :--- | :--- |
| Website | http://localhost:8080 |
| MySQL | `localhost:3306`, user `user`, password `secret`, db `laravel` |

## Daily Use

```powershell
git pull
docker compose up -d      # start
docker compose down       # stop
```

After pulling, if needed:

```powershell
docker compose exec app composer install       # composer.json changed
docker compose exec node npm install           # package.json changed
docker compose exec app php artisan migrate    # new migrations
docker compose up -d --build                   # Docker files changed
```

## Useful Commands

```powershell
docker compose exec app php artisan <command>
docker compose exec app composer require <package>
docker compose exec node npm install <package>
docker compose logs -f
```

## Troubleshooting

| Problem | Fix |
| :--- | :--- |
| Port already in use | Stop the other app, or change the left port in `docker-compose.yml` |
| Permission / `tempnam()` error | `docker compose exec app chmod -R 777 storage bootstrap/cache` |
| DB connection refused | Wait 30 seconds for MySQL to start, then retry |
| React changes not showing | `docker compose restart node` |

## Rules

- Never commit `src/.env`, `vendor/` or `node_modules/`.
- Work on a branch (`feature/xyz`) and open a Pull Request into `main`.
